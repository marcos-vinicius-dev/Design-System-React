import { cva } from "class-variance-authority";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    asChild?: boolean,
    className?: string
}

const textStyles = cva([
    'w-full',
    'py-3', 
    'px-4', 
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

export const Button = ({ children, asChild, className, ...props }: ButtonProps) => {
    const Component = asChild ? Slot : 'button'

    return (
        <Component 
            className={textStyles({ className })}
            {...props}
        >
            {children}
        </Component>
    )
}
