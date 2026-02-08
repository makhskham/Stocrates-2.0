import { NextRequest, NextResponse } from "next/server";
import { getPolygonCandles } from "@/lib/analyze-event/polygon";
import { polygonToEvents, EventItem } from "@/lib/analyze-event/market-event";

/* ---------------- helpers ---------------- */

function mean(values: number[]) {
  if (values.length === 0) return 0;
  return values.reduce((s, v) => s + v, 0) / values.length;
}

/* ---------------- route ---------------- */

export async function GET(req: NextRequest) {
  try {
    /* ---------- read filters from URL ---------- */

    const { searchParams } = new URL(req.url);

    const patternFilter = searchParams.get("pattern"); // breakout, retest, etc
    const categoryFilter = searchParams.get("category"); // future use

    /* ---------- fetch real market data ---------- */

    const aggs = await getPolygonCandles("AAPL", 5, "minute");

    /* ---------- detect trading events ---------- */

    const allEvents: EventItem[] = polygonToEvents(aggs);

    /* ---------- apply filters ---------- */

    let events = allEvents;

    if (patternFilter && patternFilter !== "all") {
      events = events.filter(e => e.pattern === patternFilter);
    }

    // categoryFilter reserved for future fundamental events
    // (earnings/news not in candle data)

    const count = events.length;

    /* ---------- averages ---------- */

    const avgMove = mean(events.map(e => e.movePercent));
    const ranges = events.map(e => e.high - e.low);
    const avgRange = mean(ranges);

    /* ---------- pattern reliability ---------- */

    let totalMatches = 0;

    const patternStats: Record<string, { count: number; matches: number }> = {};

    for (const e of events) {
      const p = e.pattern || "unknown";

      if (!patternStats[p]) patternStats[p] = { count: 0, matches: 0 };

      patternStats[p].count += 1;

      if (e.expectedDirection && e.direction === e.expectedDirection) {
        patternStats[p].matches += 1;
        totalMatches += 1;
      }
    }

    const patternReliabilityByPattern: Record<
      string,
      { count: number; reliability: number }
    > = {};

    for (const k of Object.keys(patternStats)) {
      const s = patternStats[k];

      patternReliabilityByPattern[k] = {
        count: s.count,
        reliability:
          s.count > 0
            ? Number(((s.matches / s.count) * 100).toFixed(2))
            : 0,
      };
    }

    const overallPatternReliability =
      count > 0 ? Number(((totalMatches / count) * 100).toFixed(2)) : 0;

    /* ---------- counts ---------- */

    const eventsCountByPattern: Record<string, number> = {};
    for (const e of events) {
      eventsCountByPattern[e.pattern] =
        (eventsCountByPattern[e.pattern] || 0) + 1;
    }

    /* ---------- weights ---------- */

    const weights = {
      avgMove: 0.4,
      avgRange: 0.3,
      patternReliability: 0.3,
      explanation:
        "Weights indicate relative importance when combining metrics into a composite score. Adjust as needed.",
    } as const;

    /* ---------- raw metrics ---------- */

    const rawMetrics = {
      moves: events.map(e => ({
        id: e.id,
        movePercent: e.movePercent,
        direction: e.direction,
      })),
      ranges: events.map(e => ({
        id: e.id,
        range: Number((e.high - e.low).toFixed(4)),
      })),
    };

    /* ---------- final response ---------- */

    return NextResponse.json({
      count,
      averageMovePercent: Number(avgMove.toFixed(4)),
      averageRange: Number(avgRange.toFixed(4)),
      patternReliability: {
        overall: overallPatternReliability,
        byPattern: patternReliabilityByPattern,
      },
      eventsCountByPattern,
      weights,
      rawMetrics,
    });

  } catch (err) {
    console.error("Analyze Event API error:", err);
    return NextResponse.json(
      { error: "Failed to analyze events" },
      { status: 500 }
    );
  }
}
