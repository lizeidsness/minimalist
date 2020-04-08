'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fd9e9986.js');
const CalciteScrim = require('./CalciteScrim-2a14bab2.js');
const index$1 = require('./index-aa1cefbb.js');
const guid = require('./guid-d8484e41.js');

const CSS = {
    content: "content",
    headerContainer: "header-container",
    icon: "icon",
    toggle: "toggle",
    toggleIcon: "toggle-icon",
    title: "title",
    heading: "heading",
    header: "header",
    button: "button",
    summary: "summary",
    control: "control"
};
const TEXT = {
    collapse: "Collapse",
    expand: "Expand"
};
const ICONS = {
    close: "chevron-up",
    open: "chevron-down"
};

const CalciteBlock = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * When true, this block will be collapsible.
         */
        this.collapsible = false;
        /**
         * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
         */
        this.disabled = false;
        /**
         * When true, displays a drag handle in the header.
         */
        this.dragHandle = false;
        /**
         * When true, the block's content will be displayed.
         */
        this.open = false;
        /**
         * When true, content is waiting to be loaded. This state shows a busy indicator.
         */
        this.loading = false;
        /**
         * Tooltip used for the toggle when collapsed.
         */
        this.textExpand = TEXT.expand;
        /**
         * Tooltip used for the toggle when expanded.
         */
        this.textCollapse = TEXT.collapse;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.onHeaderClick = () => {
            this.open = !this.open;
            this.calciteBlockToggle.emit();
        };
        this.calciteBlockToggle = index.createEvent(this, "calciteBlockToggle", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { collapsible, disabled, el, heading, loading, open, summary, textCollapse, textExpand } = this;
        const toggleLabel = open ? textCollapse : textExpand;
        const hasIcon = el.querySelector(`[slot=${"icon" /* icon */}]`);
        const headerContent = (index.h("header", { class: CSS.header }, hasIcon ? (index.h("div", { class: CSS.icon }, index.h("slot", { name: "icon" /* icon */ }))) : null, index.h("div", { class: CSS.title }, index.h("h3", { class: CSS.heading }, heading), summary ? index.h("div", { class: CSS.summary }, summary) : null)));
        const slottedControl = el.querySelector(`[slot=${"control" /* control */}]`);
        const headerNode = (index.h("div", { class: CSS.headerContainer }, this.dragHandle ? index.h("calcite-handle", null) : null, collapsible ? (index.h("button", { "aria-label": toggleLabel, class: CSS.toggle, onClick: this.onHeaderClick, title: toggleLabel }, headerContent, slottedControl ? null : (index.h("calcite-icon", { scale: "s", icon: open ? ICONS.close : ICONS.open })))) : (headerContent), loading ? (index.h("calcite-loader", { inline: true, "is-active": true })) : (index.h("slot", { name: "control" /* control */ }))));
        return (index.h(index.Host, { tabIndex: disabled ? -1 : null }, index.h("article", { "aria-expanded": collapsible ? open.toString() : null, "aria-busy": loading }, headerNode, index.h("div", { class: CSS.content, hidden: !open }, index.h(CalciteScrim.CalciteScrim, { loading: loading, disabled: disabled }, index.h("slot", null))))));
    }
    get el() { return index.getElement(this); }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-direction:column;flex-direction:column;border-radius:var(--calcite-app-border-radius);margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-quarter) 0;-webkit-box-shadow:0 -1px 0 var(--calcite-app-border) inset;box-shadow:0 -1px 0 var(--calcite-app-border) inset}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground)}.heading{padding:0;margin:0;font-weight:var(--calcite-app-font-weight-demi)}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--calcite-app-font-size-3)}h2.heading{font-size:var(--calcite-app-font-size-2)}h3.heading{font-size:var(--calcite-app-font-size-1)}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0)}.header{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:start;justify-content:flex-start}.header-container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.header-container>.header{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}:host([disabled]) .header-container{opacity:var(--calcite-app-disabled-opacity)}calcite-loader[inline]{color:var(--calcite-app-foreground-subtle)}.title{margin:0}.header .title .heading{padding:0 0 var(--calcite-app-cap-spacing-quarter)}.summary{font-size:var(--calcite-app-font-size--1);padding:0 0 var(--calcite-app-cap-spacing-quarter)}.toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-positive:1;flex-grow:1;margin:0;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-three-quarters);background-color:transparent;border:none;cursor:pointer;font-family:var(--calcite-app-font-family);text-align:unset;color:var(--calcite-app-foreground)}.toggle:focus{outline-offset:var(--calcite-app-outline-inset)}.icon{margin-right:var(--calcite-app-side-spacing-third)}.toggle-icon{fill:currentColor;-ms-flex:0 0 var(--calcite-app-icon-size);flex:0 0 var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half)}.content{padding:0 var(--calcite-app-side-spacing-three-quarters) var(--calcite-app-cap-spacing-half);position:relative}::slotted([slot=control]){position:absolute;margin:auto;right:var(--calcite-app-side-spacing-three-quarters)}.calcite--rtl ::slotted([slot=control]){left:var(--calcite-app-side-spacing-three-quarters);right:unset}"; }
};

const CSS$1 = {
    content: "content",
    toggle: "toggle",
    toggleSwitch: "toggle--switch"
};
const TEXT$1 = {
    collapse: "Collapse",
    expand: "Expand"
};
const ICONS$1 = {
    menuOpen: "caret-down",
    menuClosedLeft: "caret-left",
    menuClosedRight: "caret-right"
};

const CalciteBlockSection = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * When true, the block's section content will be displayed.
         */
        this.open = false;
        /**
         * Tooltip used for the toggle when collapsed.
         */
        this.textExpand = TEXT$1.expand;
        /**
         * Tooltip used for the toggle when expanded.
         */
        this.textCollapse = TEXT$1.collapse;
        /**
         * This property determines the look of the section toggle.
         * If the value is "switch", a toggle-switch will be displayed.
         * If the value is "button", a clickable header is displayed.
         *
         * @todo revisit doc
         */
        this.toggleDisplay = "button";
        this.guid = `calcite-block-section-${guid.guid()}`;
        this.toggleSection = () => {
            this.open = !this.open;
            this.calciteBlockSectionToggle.emit();
        };
        this.calciteBlockSectionToggle = index.createEvent(this, "calciteBlockSectionToggle", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    handleHeaderLabelKeyDown(event) {
        if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            this.click();
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { el, guid: id, open, text, textCollapse, textExpand, toggleDisplay } = this;
        const dir = index$1.getElementDir(el);
        const arrowIcon = open
            ? ICONS$1.menuOpen
            : dir === "rtl"
                ? ICONS$1.menuClosedLeft
                : ICONS$1.menuClosedRight;
        const toggleLabel = open ? textCollapse : textExpand;
        const labelId = `${id}__label`;
        const headerNode = toggleDisplay === "switch" ? (index.h("label", { "aria-label": toggleLabel, class: index$1.classnames(CSS$1.toggle, CSS$1.toggleSwitch), id: labelId, onKeyDown: this.handleHeaderLabelKeyDown, tabIndex: 0 }, text, index.h("calcite-switch", { "aria-labelledby": labelId, switched: open, onChange: this.toggleSection, scale: "s", tabIndex: -1 }))) : (index.h("calcite-action", { "aria-label": toggleLabel, class: CSS$1.toggle, onClick: this.toggleSection, text: text, textEnabled: true, compact: true }, index.h("calcite-icon", { scale: "s", icon: arrowIcon })));
        return (index.h("section", { "aria-expanded": open.toString() }, headerNode, index.h("div", { class: CSS$1.content, hidden: !open }, index.h("slot", null))));
    }
    get el() { return index.getElement(this); }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{border-bottom:1px solid var(--calcite-app-border);display:block}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:last-child){border-bottom:none}.toggle--switch{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:var(--calcite-app-cap-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.toggle--switch calcite-switch{pointer-events:none;margin:var(--calcite-app-cap-spacing-third) 0 0 var(--calcite-app-side-spacing-half)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-app-side-spacing-half)}"; }
};

exports.calcite_block = CalciteBlock;
exports.calcite_block_section = CalciteBlockSection;
