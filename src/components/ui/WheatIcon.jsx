import wheatIcon from '/assets/img/logos/wheat-icon.png'

const WheatIcon = ({ 
  size = 24, 
  className = '',
  alt = 'Wheat',
  variant = 'none'
}) => {
  const animationClass = {
    'wave-wobble': 'animate-wave-wobble',
    'gentle-float': 'animate-gentle-float',
    'breathing': 'animate-breathing-pulse',
    'glow': 'animate-soft-glow',
    'sparkle': 'animate-sparkle-fade',
    'fall': 'animate-fall-tumble',
    'none': ''
  }[variant] || ''

  return (
    <img 
      src={wheatIcon}
      alt={alt}
      width={size}
      height={size}
      className={`${animationClass} ${className}`}
    />
  )
}

export default WheatIcon
