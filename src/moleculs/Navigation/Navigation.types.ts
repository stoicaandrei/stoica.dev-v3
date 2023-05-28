import { NavItemProps } from "@/atoms";
import { ComponentPropsWithoutRef } from "react";

interface ItemProps extends NavItemProps {
    href?: string;
}

export interface NavigationProps extends ComponentPropsWithoutRef<'nav'> {
    activeItem?: string;
    items: ItemProps[];
}