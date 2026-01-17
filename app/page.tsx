'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [users, setUsers] = useState(4287)
  const [deployProgress, setDeployProgress] = useState(0)
  const [selectedWorld, setSelectedWorld] = useState(0)

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev + Math.floor(Math.random() * 10) - 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Simulate deployment
  const startDeploy = () => {
    setDeployProgress(0)
    const interval = setInterval(() => {
      setDeployProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const worlds = [
    { name: "NEON REALM", celeb: "Cyber Star", users: 1242, color: "#8B5CF6" },
    { name: "VOID CLUB", celeb: "DJ Nova", users: 856, color: "#EC4899" },
    { name: "CELESTIAL", celeb: "Cosmic Idol", users: 2104, color: "#06B6D4" },
    { name: "VIP ZONE", celeb: "A-List", users: 42, color: "#F59E0B", locked: true },
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(139, 92, 246, 0.2)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          padding: '8px 20px',
          borderRadius: '20px',
          marginBottom: '30px',
          fontSize: '14px'
        }}>
          🚀 DEPLOY IN 5.3 SECONDS
        </div>
        
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 80px)',
          fontWeight: '900',
          lineHeight: '1.1',
          marginBottom: '20px'
        }}>
          BUILD YOUR
          <br />
          <span className="gradient-text glow">POCKET UNIVERSE</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#aaa',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          The only metaverse that deploys faster than you can read this.
        </p>
        
        {/* Deploy Button */}
        <div style={{ marginBottom: '60px' }}>
          <button 
            onClick={startDeploy}
            className="btn-glow"
            style={{ fontSize: '18px', padding: '16px 40px' }}
          >
            {deployProgress === 0 ? '🚀 DEPLOY FREE WORLD' : 'DEPLOYING...'}
          </button>
          
          {deployProgress > 0 && (
            <div style={{
              width: '300px',
              margin: '20px auto',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${deployProgress}%`,
                height: '6px',
                background: 'linear-gradient(90deg, #10B981, #06D6A0)',
                transition: 'width 0.3s'
              }} />
            </div>
          )}
          
          {deployProgress === 100 && (
            <div style={{
              marginTop: '20px',
              color: '#10B981',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              ✅ WORLD DEPLOYED! universe-zip.vercel.app
            </div>
          )}
        </div>
      </div>

      {/* Live Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '60px'
      }}>
        <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
            {users.toLocaleString()}
          </div>
          <div style={{ color: '#888' }}>LIVE USERS</div>
        </div>
        
        <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
            247
          </div>
          <div style={{ color: '#888' }}>ACTIVE WORLDS</div>
        </div>
        
        <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
            5.3s
          </div>
          <div style={{ color: '#888' }}>AVG DEPLOY TIME</div>
        </div>
        
        <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
            ∞
          </div>
          <div style={{ color: '#888' }}>POSSIBLE WORLDS</div>
        </div>
      </div>

      {/* World Selection */}
      <h2 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        FEATURED UNIVERSES
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '60px'
      }}>
        {worlds.map((world, index) => (
          <div 
            key={index}
            className="card"
            onClick={() => setSelectedWorld(index)}
            style={{
              padding: '25px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              transform: selectedWorld === index ? 'scale(1.02)' : 'scale(1)',
              opacity: world.locked ? 0.6 : 1
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              background: world.color,
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              marginBottom: '20px'
            }}>
              {world.locked ? '🔒' : '🌌'}
            </div>
            
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '5px' }}>
              {world.name}
            </h3>
            <p style={{ color: '#888', marginBottom: '15px' }}>{world.celeb}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#0af' }}>{world.users} online</span>
              {world.locked ? (
                <span style={{ color: '#888', fontSize: '12px' }}>LEVEL 25+</span>
              ) : (
                <button style={{
                  background: world.color,
                  border: 'none',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}>
                  ENTER
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* World Preview */}
      <div className="card" style={{ padding: '40px', marginBottom: '60px' }}>
        <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>
          PREVIEW: {worlds[selectedWorld]?.name}
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '30px',
          alignItems: 'start'
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '15px',
            padding: '30px',
            textAlign: 'center',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎮</div>
            <p style={{ color: '#888' }}>Live Interactive Experience</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <div style={{ width: '12px', height: '12px', background: '#10B981', borderRadius: '50%' }} />
              <div style={{ width: '12px', height: '12px', background: '#F59E0B', borderRadius: '50%' }} />
              <div style={{ width: '12px', height: '12px', background: '#EF4444', borderRadius: '50%' }} />
            </div>
          </div>
          
          <div>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '10px' }}>Live Activity</h4>
              <div style={{ color: '#aaa', fontSize: '14px' }}>
                <div>• Fan_123 joined the world</div>
                <div>• TeamAlpha won tournament</div>
                <div>• New exclusive item unlocked</div>
              </div>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '10px' }}>Quick Actions</h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px'
              }}>
                <button className="card" style={{ padding: '12px', textAlign: 'center' }}>
                  🎵 Music
                </button>
                <button className="card" style={{ padding: '12px', textAlign: 'center' }}>
                  🏆 Challenge
                </button>
                <button className="card" style={{ padding: '12px', textAlign: 'center' }}>
                  🎁 Shop
                </button>
                <button className="card" style={{ padding: '12px', textAlign: 'center' }}>
                  📸 Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>
          READY FOR LIFTOFF?
        </h2>
        <p style={{ fontSize: '18px', color: '#aaa', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          No servers. No config. Just your universe, deployed.
        </p>
        
        <button 
          onClick={startDeploy}
          className="btn-glow"
          style={{ fontSize: '20px', padding: '20px 50px' }}
        >
          🚀 DEPLOY YOUR UNIVERSE FREE
        </button>
        
        <p style={{ marginTop: '30px', color: '#666', fontSize: '14px' }}>
          30-day trial • No credit card • Cancel anytime
        </p>
      </div>
    </div>
  )
}
