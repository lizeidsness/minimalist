import { VNode } from "../../stencil-public-runtime";
import { Theme } from "../interfaces";
export declare class CalciteScrim {
  /** string to override English loading text */
  intlLoading?: string;
  /**
   * Determines if the component will have the loader overlay.
   * Otherwise, will render opaque disabled state.
   */
  loading: boolean;
  /** specify the theme of scrim, defaults to light */
  theme: Theme;
  render(): VNode;
}
