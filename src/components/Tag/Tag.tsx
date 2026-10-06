import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type TagProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const Tag = <T extends ElementType = "span">({
  children,
  as,
  ...props
}: TagProps<T>) => {
  const Element: ElementType = as ?? "span";
  return <Element {...props}>{children}</Element>;
};

export default Tag;
