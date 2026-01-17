import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UNIVERSE.ZIP | Infinite Worlds',
  description: 'Deploy celebrity universes in seconds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌌</text></svg>" />
      </head>
      <body className="cosmic-bg">
        {/* Simple Navigation */}
        <nav style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              ⚡
            </div>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>UNIVERSE.ZIP</h1>
              <p style={{ fontSize: '12px', color: '#888' }}>v1.0 • INDESTRUCTIBLE</p>
            </div>
          </div>
          
          <button className="btn-glow">
            LAUNCH WORLD
          </button>
        </nav>
        
        <main style={{ padding: '20px' }}>
          {children}
        </main>
        
        {/* Performance Badge */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          color: '#0af'
        }}>
          ⚡ 99.9% UPTIME • ∞ WORLDS
        </div>
      </body>
    </html>
  )
}
