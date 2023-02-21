import { cva } from "class-variance-authority";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from "react";

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?: boolean
}

const headingStyles = cva(['text-gray-100', 'font-bold', 'font-sans'], {
    variants: {
        size: {
            sm: ["text-lg"],
            md: ["text-xl"],
            lg: ["text-2xl"],
        },
    },

    defaultVariants: {
        size: "md"
    }
});

export const Heading = ({ size, children, asChild }: HeadingProps) => {
    const Component = asChild ? Slot : 'h2'

    return (
        <Component className={headingStyles({ size })}>{children}</Component>
    )
}
