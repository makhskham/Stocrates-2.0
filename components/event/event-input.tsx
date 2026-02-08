'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface EventInputProps {
  onAnalyze: (pattern?: string, eventType?: string) => void
  isLoading: boolean
}

export function EventInput({ onAnalyze, isLoading }: EventInputProps) {
  const [selectedPattern, setSelectedPattern] = useState<string>('')
  const [selectedEventType, setSelectedEventType] = useState<string>('')

  const patterns = [
    { value: 'breakout', label: '📈 Breakout Pattern', description: 'Stock breaks through resistance level' },
    { value: 'head_and_shoulders', label: '📉 Head & Shoulders', description: 'Reversal pattern formation' },
    { value: 'continuation', label: '➡️ Continuation Pattern', description: 'Trend continues after pause' },
    { value: 'retest', label: '🔄 Retest Pattern', description: 'Price returns to test support/resistance' },
    { value: 'fakeout', label: '⚠️ Fakeout Pattern', description: 'False breakout signal' },
  ]

  const eventTypes = [
    { value: 'earnings', label: '📊 Earnings Report', description: 'Quarterly/annual earnings announcements' },
    { value: 'war', label: '⚔️ Geopolitical Event', description: 'Military conflicts, sanctions, tensions' },
    { value: 'contract', label: '🤝 Business Contract', description: 'Major deals, partnerships, contracts' },
    { value: 'fda_approval', label: '💊 FDA Approval', description: 'Drug approvals, clinical trials' },
    { value: 'merger', label: '🔗 Merger & Acquisition', description: 'M&A, buyouts, takeovers' },
    { value: 'lawsuit', label: '⚖️ Legal Issue', description: 'Lawsuits, investigations, settlements' },
    { value: 'product_launch', label: '🚀 Product Launch', description: 'New product/service announcements' },
    { value: 'executive_change', label: '👔 Executive Change', description: 'CEO changes, leadership transitions' },
    { value: 'economic_data', label: '📈 Economic Data', description: 'Fed decisions, inflation, GDP' },
  ]

  const handleAnalyze = () => {
    const pattern = selectedPattern || undefined
    const eventType = selectedEventType || undefined
    onAnalyze(pattern, eventType)
  }

  const handleShowAll = () => {
    setSelectedPattern('')
    setSelectedEventType('')
    onAnalyze(undefined, undefined)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">📊 Event Analysis</CardTitle>
        <CardDescription>
          Select filters to analyze specific market patterns, or show all historical events
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Technical Pattern (Optional)</label>
            <Select value={selectedPattern} onValueChange={setSelectedPattern}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All patterns..." />
              </SelectTrigger>
              <SelectContent>
                {patterns.map((pattern) => (
                  <SelectItem key={pattern.value} value={pattern.value}>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{pattern.label}</span>
                      <span className="text-xs text-muted-foreground">{pattern.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Event Category (Optional)</label>
            <Select value={selectedEventType} onValueChange={setSelectedEventType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All event types..." />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((event) => (
                  <SelectItem key={event.value} value={event.value}>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{event.label}</span>
                      <span className="text-xs text-muted-foreground">{event.description}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button onClick={handleAnalyze} disabled={isLoading} className="w-full" size="lg">
            {isLoading ? <>⏳ Analyzing...</> : <>🔍 Analyze</>}
          </Button>

          <Button onClick={handleShowAll} disabled={isLoading} variant="outline" className="w-full" size="lg">
            📊 Show All
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

