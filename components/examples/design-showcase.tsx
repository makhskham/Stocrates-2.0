'use client'

import { StocratesButton } from '@/components/ui/stocrates-button'
import { StocratesCard, DecorativeFrame } from '@/components/ui/stocrates-card'

/**
 * Design Showcase Component
 * 
 * This component demonstrates all the Stocrates design system elements.
 * Use this as a reference for implementing the design across the app.
 */
export function DesignShowcase() {
  return (
    <div className="min-h-screen bg-stocrates-cream p-8 space-y-12">
      {/* Header Section */}
      <section>
        <h1 className="font-title text-4xl font-bold text-stocrates-dark mb-4">
          Stocrates Design System
        </h1>
        <p className="font-body text-stocrates-dark">
          A showcase of all design components and patterns
        </p>
      </section>

      {/* Buttons Section */}
      <section className="space-y-6">
        <h2 className="font-title text-2xl font-bold text-stocrates-dark">
          Buttons
        </h2>
        
        <div className="flex flex-wrap gap-4">
          <StocratesButton variant="game">UPLOAD</StocratesButton>
          <StocratesButton variant="save">SAVE</StocratesButton>
          <StocratesButton variant="primary">Get Started</StocratesButton>
          <StocratesButton variant="secondary">Learn More</StocratesButton>
          <StocratesButton variant="outline">Cancel</StocratesButton>
        </div>

        <div className="flex flex-wrap gap-4">
          <StocratesButton variant="game" size="sm">SMALL</StocratesButton>
          <StocratesButton variant="game" size="md">MEDIUM</StocratesButton>
          <StocratesButton variant="game" size="lg">LARGE</StocratesButton>
        </div>
      </section>

      {/* Cards Section */}
      <section className="space-y-6">
        <h2 className="font-title text-2xl font-bold text-stocrates-dark">
          Cards & Frames
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StocratesCard variant="decorative" background="cream">
            <h3 className="font-title text-xl font-bold text-stocrates-dark mb-2">
              Decorative Card
            </h3>
            <p className="font-body text-stocrates-dark">
              This card has decorative corner circles and a border.
            </p>
          </StocratesCard>

          <StocratesCard variant="game" background="blue">
            <h3 className="font-title text-xl font-bold text-stocrates-dark mb-2">
              Game Card
            </h3>
            <p className="font-body text-stocrates-dark">
              Perfect for game-related content with thick borders.
            </p>
          </StocratesCard>

          <StocratesCard variant="bordered" background="gray">
            <h3 className="font-title text-xl font-bold text-stocrates-dark mb-2">
              Bordered Card
            </h3>
            <p className="font-body text-stocrates-dark">
              Simple bordered card with rounded corners.
            </p>
          </StocratesCard>

          <StocratesCard variant="default" background="white">
            <h3 className="font-title text-xl font-bold text-stocrates-dark mb-2">
              Default Card
            </h3>
            <p className="font-body text-stocrates-dark">
              Clean and simple card without borders.
            </p>
          </StocratesCard>
        </div>
      </section>

      {/* Decorative Frame Section */}
      <section className="space-y-6">
        <h2 className="font-title text-2xl font-bold text-stocrates-dark">
          Decorative Frames
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DecorativeFrame cornerColor="dark">
            <div className="bg-stocrates-cream p-8 text-center">
              <h3 className="font-title text-2xl font-bold text-stocrates-dark mb-2">
                Thank you for playing!
              </h3>
              <p className="font-body text-stocrates-dark">
                Frame with dark corners
              </p>
            </div>
          </DecorativeFrame>

          <DecorativeFrame cornerColor="blue">
            <div className="bg-white p-8 text-center">
              <h3 className="font-title text-2xl font-bold text-stocrates-dark mb-2">
                Score Board
              </h3>
              <p className="font-body text-stocrates-dark">
                Frame with blue corners
              </p>
            </div>
          </DecorativeFrame>
        </div>
      </section>

      {/* Info Box Section */}
      <section className="space-y-6">
        <h2 className="font-title text-2xl font-bold text-stocrates-dark">
          Info Boxes
        </h2>
        
        <div className="info-box">
          <p className="font-body text-stocrates-dark">
            Use this to keep track of the points! Copy and paste the token for every point a player receives.
          </p>
          <p className="delete-note">
            Kindly delete this note after editing this page.
          </p>
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-6">
        <h2 className="font-title text-2xl font-bold text-stocrates-dark">
          Typography
        </h2>
        
        <div className="space-y-4">
          <div>
            <h1 className="font-title text-4xl font-bold text-stocrates-dark">
              Heading 1 - Space Mono
            </h1>
          </div>
          <div>
            <h2 className="font-title text-3xl font-bold text-stocrates-dark">
              Heading 2 - Space Mono
            </h2>
          </div>
          <div>
            <h3 className="font-title text-2xl font-bold text-stocrates-dark">
              Heading 3 - Space Mono
            </h3>
          </div>
          <div>
            <p className="font-body text-base text-stocrates-dark">
              Body text - Roboto Regular. This is the standard font for all body content, descriptions, and paragraphs.
            </p>
          </div>
          <div>
            <p className="font-game text-base font-bold uppercase tracking-widest text-stocrates-dark">
              Game Text - Courier New Bold
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

