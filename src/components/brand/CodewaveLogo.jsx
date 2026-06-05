const LOGO = '/logo/codewave-logo.png'

export default function CodewaveLogo({ variant = 'full', className = '' }) {
  if (variant === 'icon') {
    return (
      <div
        className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-xl ${className}`}
        aria-hidden="true"
      >
        <img
          src={LOGO}
          alt=""
          className="absolute left-0 top-0 h-[230%] w-full max-w-none object-cover object-top"
        />
      </div>
    )
  }

  const sizeClass =
    variant === 'lg' ? 'h-16 w-auto md:h-20' : 'h-11 w-auto sm:h-12 md:h-[3.25rem]'

  return (
    <img
      src={LOGO}
      alt="Codewave Solutions"
      className={`${sizeClass} object-contain ${className}`}
    />
  )
}
