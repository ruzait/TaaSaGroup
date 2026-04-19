import { motion } from 'framer-motion'

const wavePaths = {
  smooth: "M0,120 C360,20 1080,80 1440,120 L1440,0 L0,0 Z",
  gentle: "M0,100 C480,40 960,80 1440,100 L1440,0 L0,0 Z",
  beach: "M0,60 Q180,120 360,60 T720,60 T1080,60 T1440,60 L1440,0 L0,0 Z",
  curved: "M0,80 Q240,140 480,80 T960,80 T1440,80 L1440,0 L0,0 Z",
}

export default function WaveDivider({ 
  direction = 'up',
  topColor = '#FAF7F0',
  bottomColor = '#FAF7F0',
  midColor = null,
  height = '100px',
  style = 'smooth',
  opacity = 1,
  animated = false,
  className = ''
}) {
  const gradientId = `wave-${Math.random().toString(36).substr(2, 9)}`
  const path = wavePaths[style] || wavePaths.smooth
  const middleColor = midColor || topColor
  
  const containerStyle = {
    height: typeof height === 'string' && height.includes('px') ? height : height,
    opacity,
    [direction === 'up' ? 'bottom' : 'top']: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    overflow: 'hidden',
    pointerEvents: 'none',
    lineHeight: 0,
    width: '100%',
  }

  const svgStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    transform: direction === 'up' ? 'rotate(180deg)' : 'none',
  }

  const content = (
    <div className={`absolute left-0 right-0 w-full ${className}`} style={containerStyle}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={svgStyle}
      >
        <defs>
          <linearGradient 
            id={gradientId} 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="0%"
          >
            <stop offset="0%" stopColor={topColor} stopOpacity="1" />
            <stop offset="50%" stopColor={topColor} stopOpacity="1" />
            <stop offset="100%" stopColor={topColor} stopOpacity="1" />
          </linearGradient>
        </defs>
        <path 
          d={path} 
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scaleX: 0.9 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ position: 'absolute', left: 0, right: 0, [direction === 'up' ? 'bottom' : 'top']: 0 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export function WaveDividerTop({ 
  color = '#FAF7F0',
  height = '100px',
  style = 'smooth',
  className = ''
}) {
  return (
    <WaveDivider 
      direction="down"
      topColor={color}
      bottomColor={color}
      height={height}
      style={style}
      className={className}
    />
  )
}

export function WaveDividerBottom({ 
  color = '#FAF7F0',
  height = '100px',
  style = 'smooth',
  className = ''
}) {
  return (
    <WaveDivider 
      direction="up"
      topColor={color}
      bottomColor={color}
      height={height}
      style={style}
      className={className}
    />
  )
}

export function WaveGradient({ 
  fromColor = '#FAF7F0',
  toColor = '#f5f5dc',
  midColor = null,
  direction = 'up',
  height = '100px',
  style = 'smooth',
  animated = false,
  className = ''
}) {
  return (
    <WaveDivider 
      direction={direction}
      topColor={fromColor}
      bottomColor={toColor}
      midColor={midColor}
      height={height}
      style={style}
      animated={animated}
      className={className}
    />
  )
}
