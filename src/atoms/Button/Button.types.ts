import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant?: 'primary' | 'secondary';
}