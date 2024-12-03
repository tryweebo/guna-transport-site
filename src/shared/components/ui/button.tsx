import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { mergeClass } from '@shared/utils/helper'

const buttonVariants = cva(
  'flex items-center justify-center font-semibold whitespace-nowrap text-sm !leading-none transition-all duration-300 gap-2 group relative',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        outline: 'border border-border bg-background text-foreground',
        text: 'text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground border hover:bg-secondary/60 border-border',
      },
      size: {
        base: 'h-11 px-4 rounded-full',
        sm: 'h-9 px-4 rounded-lg text-sm',
        lg: 'h-14 px-7 rounded-full',
        icon: 'h-10 w-10 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={mergeClass(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
