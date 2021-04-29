import { VNode } from "../../stencil-public-runtime";
import { Theme } from "../interfaces";
import { FlowDirection } from "./interfaces";
/**
 * @slot - A slot for adding `calcite-panel`s to the flow.
 */
export declare class CalciteFlow {
  /**
   * Used to set the component's color scheme.
   */
  theme: Theme;
  /**
   * Removes the currently active `calcite-panel`.
   */
  back(): Promise<HTMLCalcitePanelElement>;
  el: HTMLCalciteFlowElement;
  panelCount: number;
  flowDirection: FlowDirection;
  panels: HTMLCalcitePanelElement[];
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleCalcitePanelBackClick(): void;
  getFlowDirection: (oldPanelCount: number, newPanelCount: number) => FlowDirection | null;
  updateFlowProps: () => void;
  panelItemObserver: MutationObserver;
  render(): VNode;
}
