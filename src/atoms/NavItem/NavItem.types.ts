import { ComponentPropsWithoutRef } from "react";

export interface NavItemProps extends ComponentPropsWithoutRef<'div'> {
    active?: boolean;
}

