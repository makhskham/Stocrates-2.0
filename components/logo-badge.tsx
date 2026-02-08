'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function LogoBadge() {
  return (
    <Link 
      href="/new"
      className="fixed bottom-4 left-4 z-50 group"
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden border-3 border-stocrates-dark shadow-lg hover:scale-110 transition-transform bg-white">
        <Image
          src="/logo.jpg"
          alt="Stocrates Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Link>
  )
}

