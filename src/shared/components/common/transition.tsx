'use client'

import { useAnimate, spring } from 'motion/react'
import * as React from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({
  children,
}: PageTransitionProps): React.ReactElement {
  const [scope, animate] = useAnimate()

  React.useEffect(() => {
    animate(
      scope.current,
      { y: [200, 0], opacity: [0, 1], delay: 0.2, scale: [0.8, 1] },
      { duration: 1.2, type: spring, ease: 'linear' },
    )
  }, [])

  return <div ref={scope}>{children}</div>
}
