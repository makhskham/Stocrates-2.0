import * as React from 'react'
import { cn } from '@/lib/utils'

export interface StocratesButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'game' | 'upload' | 'save' | 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const StocratesButton = React.forwardRef<HTMLButtonElement, StocratesButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      // Game-y button with retro font (like UPLOAD/SAVE)
      game: 'bg-stocrates-dark text-stocrates-cream hover:bg-stocrates-dark-blue hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 font-game',
      
      // Upload button style
      upload: 'bg-stocrates-dark text-stocrates-cream hover:bg-stocrates-dark-blue hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 font-game',
      
      // Save button style
      save: 'bg-stocrates-dark text-stocrates-cream hover:bg-stocrates-dark-blue hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 font-game',
      
      // Primary button (Space Mono font)
      primary: 'bg-stocrates-dark text-stocrates-cream hover:bg-stocrates-dark-blue hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 font-title',
      
      // Secondary button (light blue)
      secondary: 'bg-stocrates-blue text-stocrates-dark hover:bg-stocrates-dark-blue hover:text-stocrates-cream hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 font-title',
      
      // Outline button
      outline: 'border-3 border-stocrates-dark bg-transparent text-stocrates-dark hover:bg-stocrates-dark hover:text-stocrates-cream font-title'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

StocratesButton.displayName = 'StocratesButton'

export { StocratesButton }

