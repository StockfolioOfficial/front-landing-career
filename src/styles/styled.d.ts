import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colorMain: string;
    colorRed: string;
    colorDesc: string;
    colorLightGrey: string;
    colorBgGrey: string;
    colorBgLightGrey: string;
    colorBgLightBlue: string;
    flexMixin: string;
  }
}

declare module "react" {
  export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fontSmall?: string;
    fontLarge?: string;
    fontSize?: string;
    fontWeight?: string;
  }
}
