import { cva } from "class-variance-authority";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode
    asChild?: boolean
}

const textStyles = cva([
    'w-full',
    'py-4', 
    'px-3', 
    'bg-cyan-500', 
    'rounded', 
    'font-semibold',
    'text-black',
    'text-sm',
    'transition-colors',
    'hover:bg-cyan-300',
    'focus:ring-2',
    'ring-white'
])

export const Button = ({ children, asChild }: ButtonProps) => {
    const Component = asChild ? Slot : 'button'

    return (
        <Component className={textStyles()}>{children}</Component>
    )
}
