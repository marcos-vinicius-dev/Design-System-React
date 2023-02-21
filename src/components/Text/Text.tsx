import { cva } from "class-variance-authority";
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from "react";

export interface TextProps {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?: boolean
}

const textStyles = cva(['text-gray-100', 'font-sans'], {
    variants: {
        size: {
            sm: ["text-sm"],
            md: ["text-md"],
            lg: ["text-lg"],
        },
    },

    defaultVariants: {
        size: "md"
    }
});

export const Text = ({ size, children, asChild }: TextProps) => {
    const Component = asChild ? Slot : 'span'

    return (
        <Component className={textStyles({ size })}>{children}</Component>
    )
}
