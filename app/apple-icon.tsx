import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#FEEEEF',
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              background: 'linear-gradient(to bottom right, #FF9A9E, #FECFEF)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            C
          </div>
        </div>
      </div>
    ),
    size
  )
} 