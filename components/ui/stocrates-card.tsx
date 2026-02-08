import * as React from 'react'
import { cn } from '@/lib/utils'

export interface StocratesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'decorative' | 'game' | 'bordered'
  background?: 'cream' | 'blue' | 'gray' | 'white'
}

const StocratesCard = React.forwardRef<HTMLDivElement, StocratesCardProps>(
  ({ className, variant = 'default', background = 'cream', children, ...props }, ref) => {
    const backgrounds = {
      cream: 'bg-stocrates-cream',
      blue: 'bg-stocrates-blue',
      gray: 'bg-stocrates-gray',
      white: 'bg-white'
    }
    
    const variants = {
      // Simple card
      default: 'rounded-lg p-6',
      
      // Card with decorative corner circles (like in your images)
      decorative: 'relative border-3 border-stocrates-dark p-6 rounded-none before:absolute before:w-3 before:h-3 before:rounded-full before:border-3 before:border-stocrates-dark before:bg-stocrates-cream before:-top-1.5 before:-left-1.5 after:absolute after:w-3 after:h-3 after:rounded-full after:border-3 after:border-stocrates-dark after:bg-stocrates-cream after:-bottom-1.5 after:-right-1.5',
      
      // Game-style card with thick borders
      game: 'border-4 border-stocrates-dark rounded-none p-6',
      
      // Simple bordered card
      bordered: 'border-2 border-stocrates-dark rounded-lg p-6'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          backgrounds[background],
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

StocratesCard.displayName = 'StocratesCard'

// Decorative frame component (for images and content boxes)
export interface DecorativeFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  cornerColor?: 'dark' | 'blue' | 'cream'
}

const DecorativeFrame = React.forwardRef<HTMLDivElement, DecorativeFrameProps>(
  ({ className, cornerColor = 'dark', children, ...props }, ref) => {
    const cornerColors = {
      dark: 'before:bg-stocrates-dark after:bg-stocrates-dark',
      blue: 'before:bg-stocrates-blue after:bg-stocrates-blue',
      cream: 'before:bg-stocrates-cream after:bg-stocrates-cream'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'relative border-3 border-stocrates-dark',
          // Top-left corner
          'before:absolute before:w-3 before:h-3 before:rounded-full before:border-3 before:border-stocrates-dark before:-top-1.5 before:-left-1.5',
          // Top-right corner
          'after:absolute after:w-3 after:h-3 after:rounded-full after:border-3 after:border-stocrates-dark after:-top-1.5 after:-right-1.5',
          cornerColors[cornerColor],
          className
        )}
        {...props}
      >
        {children}
        {/* Bottom corners */}
        <div className={cn(
          'absolute w-3 h-3 rounded-full border-3 border-stocrates-dark -bottom-1.5 -left-1.5',
          cornerColor === 'dark' ? 'bg-stocrates-dark' : cornerColor === 'blue' ? 'bg-stocrates-blue' : 'bg-stocrates-cream'
        )} />
        <div className={cn(
          'absolute w-3 h-3 rounded-full border-3 border-stocrates-dark -bottom-1.5 -right-1.5',
          cornerColor === 'dark' ? 'bg-stocrates-dark' : cornerColor === 'blue' ? 'bg-stocrates-blue' : 'bg-stocrates-cream'
        )} />
      </div>
    )
  }
)

DecorativeFrame.displayName = 'DecorativeFrame'

export { StocratesCard, DecorativeFrame }

