'use client'

import React from 'react'
import { useGame } from '@/lib/game/game-context'
import { cn } from '@/lib/utils'
import { StocratesButton } from '@/components/ui/stocrates-button'
import { X } from 'lucide-react'
import { TimeMachine } from './time-machine'
import { InvestmentPanel } from './investment-panel'
import { PortfolioView } from './portfolio-view'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function GameSidebar() {
  const { isGameOpen, closeGame, gameState, setSelectedDate } = useGame()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-40 transition-opacity duration-300',
          isGameOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeGame}
      />

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full w-full bg-stocrates-cream shadow-2xl z-50 transition-transform duration-300 ease-in-out overflow-y-auto',
          isGameOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-stocrates-cream border-b-3 border-stocrates-dark p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🎮</div>
            <div>
              <h2 className="font-title text-2xl font-bold text-stocrates-dark">Investment Game</h2>
              <p className="font-body text-sm text-stocrates-dark-blue">Learn by practicing!</p>
            </div>
          </div>
          <button
            onClick={closeGame}
            className="w-10 h-10 rounded-full bg-stocrates-dark text-stocrates-cream hover:bg-stocrates-dark-blue transition-colors flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Stocrates Points Display - Game-y Design */}
        <div className="p-6 bg-stocrates-blue border-b-3 border-stocrates-dark">
          <div className="relative border-3 border-stocrates-dark bg-stocrates-cream p-6">
            {/* Decorative corners */}
            <div className="absolute w-3 h-3 rounded-full border-3 border-stocrates-dark bg-stocrates-blue -top-1.5 -left-1.5" />
            <div className="absolute w-3 h-3 rounded-full border-3 border-stocrates-dark bg-stocrates-blue -top-1.5 -right-1.5" />
            <div className="absolute w-3 h-3 rounded-full border-3 border-stocrates-dark bg-stocrates-blue -bottom-1.5 -left-1.5" />
            <div className="absolute w-3 h-3 rounded-full border-3 border-stocrates-dark bg-stocrates-blue -bottom-1.5 -right-1.5" />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-stocrates-dark-blue uppercase tracking-wide">Available Points</p>
                <p className="font-game text-4xl font-bold text-stocrates-dark mt-1">
                  {gameState.stockratesPoints.toLocaleString()}
                </p>
              </div>
              <div className="text-5xl">💰</div>
            </div>
            <div className="mt-4 h-3 bg-stocrates-gray border-2 border-stocrates-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-stocrates-dark-blue transition-all duration-300"
                style={{ width: `${Math.min((gameState.stockratesPoints / 10000) * 100, 100)}%` }}
              />
            </div>
            <p className="font-body text-xs text-stocrates-dark-blue mt-2 text-center">
              {gameState.stockratesPoints} / 10,000 Stocrates Points
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 space-y-4">
          {/* Time Machine */}
          <TimeMachine
            selectedDate={gameState.selectedDate}
            onDateChange={setSelectedDate}
          />

          {/* Tabs for Investment and Portfolio */}
          <Tabs defaultValue="invest" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="invest">📈 Invest</TabsTrigger>
              <TabsTrigger value="portfolio">
                💼 Portfolio ({gameState.portfolio.investments.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="invest" className="mt-4">
              <InvestmentPanel />
            </TabsContent>
            
            <TabsContent value="portfolio" className="mt-4">
              <PortfolioView />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t p-4">
          <div className="text-xs text-muted-foreground bg-muted/50 rounded p-3">
            <strong>📚 Educational Game:</strong> This is a learning tool using fake money. 
            Practice investing strategies risk-free!
          </div>
        </div>
      </div>
    </>
  )
}

