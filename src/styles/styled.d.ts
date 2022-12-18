import "styled-components";
import { ITheme } from "./theme";

declare module "styled-components" {
  export type DefaultTheme = ITheme;
}
