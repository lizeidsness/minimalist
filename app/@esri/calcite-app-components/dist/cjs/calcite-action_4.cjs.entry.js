'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fd9e9986.js');
const index$1 = require('./index-aa1cefbb.js');
const resources = require('./resources-28ca6ce8.js');

const CSS = {
    button: "button",
    buttonTextVisible: "button--text-visible",
    buttonCompact: "button--compact",
    iconContainer: "icon-container",
    slotContainer: "slot-container",
    slotContainerHidden: "slot-container--hidden",
    textContainer: "text-container",
    textContainerVisible: "text-container--visible"
};

const CalciteAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /** Specify the appearance style of the action, defaults to solid. */
        this.appearance = "solid";
        /**
         * Indicates whether the action is highlighted.
         */
        this.active = false;
        /**
         * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
         */
        this.compact = false;
        /**
         * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
         */
        this.disabled = false;
        /**
         * Indicates unread changes.
         */
        this.indicator = false;
        /**
         * When true, content is waiting to be loaded. This state shows a busy indicator.
         */
        this.loading = false;
        /**
         * Specifies the size of the action.
         */
        this.scale = "m";
        /**
         * Indicates whether the text is displayed.
         */
        this.textEnabled = false;
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    async setFocus() {
        this.buttonEl.focus();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderTextContainer() {
        const { text, textEnabled } = this;
        const textContainerClasses = {
            [CSS.textContainerVisible]: textEnabled
        };
        return text ? (index.h("div", { key: "text-container", class: index$1.classnames(CSS.textContainer, textContainerClasses) }, text)) : null;
    }
    renderIconContainer() {
        const { loading } = this;
        const calciteLoaderNode = index.h("calcite-loader", { "is-active": true, inline: true });
        const slotContainerNode = (index.h("div", { class: index$1.classnames(CSS.slotContainer, {
                [CSS.slotContainerHidden]: loading
            }) }, index.h("slot", null)));
        const iconNode = loading
            ? calciteLoaderNode
            : this.el.querySelector("calcite-icon, svg")
                ? slotContainerNode
                : null;
        return iconNode ? (index.h("div", { key: "icon-container", "aria-hidden": "true", class: CSS.iconContainer }, iconNode)) : null;
    }
    render() {
        const { compact, disabled, loading, el, textEnabled, label, text } = this;
        const titleText = !textEnabled && text;
        const title = label || titleText;
        const rtl = index$1.getElementDir(el) === "rtl";
        const buttonClasses = {
            [CSS.buttonTextVisible]: textEnabled,
            [CSS.buttonCompact]: compact,
            [resources.CSS_UTILITY.rtl]: rtl
        };
        return (index.h(index.Host, null, index.h("button", { class: index$1.classnames(CSS.button, buttonClasses), title: title, "aria-label": title, disabled: disabled, "aria-disabled": disabled.toString(), "aria-busy": loading.toString(), ref: (buttonEl) => (this.buttonEl = buttonEl) }, this.renderIconContainer(), this.renderTextContainer())));
    }
    get el() { return index.getElement(this); }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-app-background-clear)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}.button{font-family:var(--calcite-app-font-family);display:-ms-flexbox;display:flex;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);background-color:var(--calcite-app-background);outline-offset:var(--calcite-app-outline-inset);margin:0;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;border:none;width:auto;cursor:pointer;font-size:var(--calcite-app-font-size--1);line-height:normal;-webkit-transition:color 125ms ease-in-out, fill 125ms ease-in-out, background-color 125ms ease-in-out;transition:color 125ms ease-in-out, fill 125ms ease-in-out, background-color 125ms ease-in-out;text-align:unset;position:relative}.button:hover,.button:focus{background-color:var(--calcite-app-background-hover);color:var(--calcite-app-foreground-hover);fill:var(--calcite-app-foreground-hover)}.button:focus{outline-offset:var(--calcite-app-outline-inset)}.button .icon-container{min-width:var(--calcite-app-icon-size);min-height:var(--calcite-app-icon-size);margin:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;pointer-events:none}.button .text-container{line-height:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;opacity:0;width:0;-webkit-transition:opacity var(--calcite-app-animation-time) var(--calcite-app-easing-function), margin var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), width var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:opacity var(--calcite-app-animation-time) var(--calcite-app-easing-function), margin var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), width var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}.button .text-container--visible{-ms-flex:1 1 auto;flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}:host([scale=m]) .button{padding:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing)}:host([scale=l]) .button{padding:var(--calcite-app-cap-spacing-plus-half) var(--calcite-app-side-spacing-plus-half)}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-quarter)}.slot-container{display:-ms-flexbox;display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0 var(--calcite-app-side-spacing-half) 0 0}.button--text-visible .text-container--visible{margin:0 var(--calcite-app-side-spacing-half) 0 0}.button--text-visible.calcite--rtl .icon-container{margin:0 0 0 var(--calcite-app-side-spacing-half)}.button--text-visible.calcite--rtl .text-container--visible{margin:0 0 0 var(--calcite-app-side-spacing-half)}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-app-foreground-active);fill:var(--calcite-app-foreground-active);background-color:var(--calcite-app-background-active)}:host([appearance=clear]) .button{background-color:var(--calcite-app-background-clear);-webkit-transition:-webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:-webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:var(--calcite-app-background-clear);-webkit-box-shadow:0 0 0 2px var(--calcite-app-border-hover) inset;box-shadow:0 0 0 2px var(--calcite-app-border-hover) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{color:var(--calcite-app-foreground-active);fill:var(--calcite-app-foreground-active);background-color:var(--calcite-app-background-active);-webkit-box-shadow:none;box-shadow:none}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:var(--calcite-app-background-clear)}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-app-background)}:host([loading]) calcite-loader[inline]{color:var(--calcite-app-foreground-subtle);margin-right:0}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:var(--calcite-app-disabled-opacity);background-color:var(--calcite-app-background)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:var(--calcite-app-disabled-opacity);background-color:var(--calcite-app-background-active)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:var(--calcite-app-side-spacing)}:host([indicator]) .button::after{content:\"\";border-radius:50%;width:var(--calcite-app-side-spacing-half);height:var(--calcite-app-side-spacing-half);border:var(--calcite-app-side-spacing-eighth) solid var(--calcite-app-background);background-color:var(--calcite-app-foreground-active);position:absolute;bottom:var(--calcite-app-cap-spacing-half);right:var(--calcite-app-side-spacing-half);z-index:1}:host([indicator][scale=s]) .button::after{bottom:var(--calcite-app-cap-spacing-quarter);right:var(--calcite-app-side-spacing-quarter)}:host([indicator][scale=l]) .button::after{bottom:var(--calcite-app-cap-spacing-half);right:var(--calcite-app-side-spacing-half)}:host([indicator]) .calcite--rtl::after{right:unset;left:var(--calcite-app-side-spacing-quarter)}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:var(--calcite-app-side-spacing-three-quarters);padding-left:var(--calcite-app-side-spacing)}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-app-background-hover)}:host([indicator][active]) .button::after{border-color:var(--calcite-app-background-active)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:unset;right:var(--calcite-app-side-spacing-half)}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:unset;left:var(--calcite-app-side-spacing-half)}"; }
};

const ICONS = {
    chevronsLeft: "chevrons-left",
    chevronsRight: "chevrons-right"
};
function getClosestShellPosition(el) {
    const shellNode = el.closest("calcite-shell-panel");
    if (!shellNode) {
        return;
    }
    return shellNode.position;
}
function getCalcitePosition(position, el) {
    return position || getClosestShellPosition(el) || "start";
}
function toggleChildActionText({ parent, expanded }) {
    parent.querySelectorAll("calcite-action").forEach((action) => (action.textEnabled = expanded));
}
const CalciteExpandToggle = ({ expanded, textExpand, textCollapse, toggleExpand, el, position }) => {
    const rtl = index$1.getElementDir(el) === "rtl";
    const expandText = expanded ? textCollapse : textExpand;
    const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
    if (rtl) {
        icons.reverse();
    }
    const end = getCalcitePosition(position, el) === "end";
    const expandIcon = end ? icons[1] : icons[0];
    const collapseIcon = end ? icons[0] : icons[1];
    return (index.h("calcite-action", { onClick: toggleExpand, textEnabled: expanded, text: expandText },
        index.h("calcite-icon", { scale: "s", icon: expanded ? expandIcon : collapseIcon })));
};

const CSS$1 = {
    actionGroupBottom: "action-group--bottom"
};
const SLOTS = {
    bottomActions: "bottom-actions"
};

const CalciteActionBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Indicates whether widget can be expanded.
         */
        this.expand = true;
        /**
         * Indicates whether widget is expanded.
         */
        this.expanded = false;
        /**
         * Updates the label of the expand icon when the component is not expanded.
         */
        this.textExpand = "Expand";
        /**
         * Updates the label of the collapse icon when the component is expanded.
         */
        this.textCollapse = "Collapse";
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggleExpand = () => {
            this.expanded = !this.expanded;
        };
        this.calciteActionBarToggle = index.createEvent(this, "calciteActionBarToggle", 7);
    }
    expandHandler(expand) {
        if (expand) {
            toggleChildActionText({ parent: this.el, expanded: this.expanded });
        }
    }
    expandedHandler(expanded) {
        if (this.expand) {
            toggleChildActionText({ parent: this.el, expanded });
        }
        this.calciteActionBarToggle.emit();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentWillLoad() {
        const { el, expand, expanded } = this;
        if (expand) {
            toggleChildActionText({ parent: el, expanded });
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderBottomActionGroup() {
        const { expanded, expand, textExpand, textCollapse, el, layout, position, toggleExpand } = this;
        const expandToggleNode = expand ? (index.h(CalciteExpandToggle, { expanded: expanded, textExpand: textExpand, textCollapse: textCollapse, el: el, position: index$1.getCalcitePosition(position, layout), toggleExpand: toggleExpand })) : null;
        return this.el.querySelector(`[slot=${SLOTS.bottomActions}]`) || expandToggleNode ? (index.h("calcite-action-group", { class: CSS$1.actionGroupBottom }, index.h("slot", { name: SLOTS.bottomActions }), expandToggleNode)) : null;
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null), this.renderBottomActionGroup()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "expand": ["expandHandler"],
        "expanded": ["expandedHandler"]
    }; }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;max-width:15vw;overflow-y:auto;pointer-events:auto}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-bottom:1px solid var(--calcite-app-border)}::slotted(calcite-action-group:last-child){border-bottom:none}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}"; }
};

const CalciteActionGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0;padding:var(--calcite-app-cap-spacing-half) 0}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:first-child){padding-top:0}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}"; }
};

const CSS$2 = {
    actionGroupBottom: "action-group--bottom"
};

const CalciteActionPad = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Indicates whether widget can be expanded.
         */
        this.expand = true;
        /**
         * Indicates whether widget is expanded.
         */
        this.expanded = false;
        /**
         * Updates the label of the expand icon when the component is not expanded.
         */
        this.textExpand = "Expand";
        /**
         * Updates the label of the collapse icon when the component is expanded.
         */
        this.textCollapse = "Collapse";
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggleExpand = () => {
            this.expanded = !this.expanded;
        };
        this.calciteActionPadToggle = index.createEvent(this, "calciteActionPadToggle", 7);
    }
    expandHandler(expand) {
        if (expand) {
            toggleChildActionText({ parent: this.el, expanded: this.expanded });
        }
    }
    expandedHandler(expanded) {
        if (this.expand) {
            toggleChildActionText({ parent: this.el, expanded });
        }
        this.calciteActionPadToggle.emit();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentWillLoad() {
        const { el, expand, expanded } = this;
        if (expand) {
            toggleChildActionText({ parent: el, expanded });
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    renderBottomActionGroup() {
        const { expanded, expand, textExpand, textCollapse, el, layout, position, toggleExpand } = this;
        const expandToggleNode = expand ? (index.h(CalciteExpandToggle, { expanded: expanded, textExpand: textExpand, textCollapse: textCollapse, el: el, position: index$1.getCalcitePosition(position, layout), toggleExpand: toggleExpand })) : null;
        return expandToggleNode ? (index.h("calcite-action-group", { class: CSS$2.actionGroupBottom }, expandToggleNode)) : null;
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null), this.renderBottomActionGroup()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "expand": ["expandHandler"],
        "expanded": ["expandedHandler"]
    }; }
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:var(--calcite-app-shadow-2);box-shadow:var(--calcite-app-shadow-2);max-width:15vw;overflow-y:auto;-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-bottom:1px solid var(--calcite-app-border);padding-bottom:0;padding-top:0}::slotted(calcite-action-group:last-child){border-bottom:none}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}"; }
};

exports.calcite_action = CalciteAction;
exports.calcite_action_bar = CalciteActionBar;
exports.calcite_action_group = CalciteActionGroup;
exports.calcite_action_pad = CalciteActionPad;
