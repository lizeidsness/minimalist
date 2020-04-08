import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-1a2740c5.js';
import { d as debounce, f as forIn } from './lodash-7109ef43.js';
var CSS = {
    searchIcon: "search-icon",
    clearButton: "clear-button"
};
var TEXT = {
    filterLabel: "filter",
    clear: "Clear filter"
};
var ICONS = {
    search: "search",
    close: "x"
};
var filterDebounceInMs = 250;
var CalciteFilter = /** @class */ (function () {
    function CalciteFilter(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.empty = true;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.filter = debounce(function (value) {
            var regex = new RegExp(value, "ig");
            if (_this.data.length === 0) {
                console.warn("No data was passed to calcite-filter.\n      The data property expects an array of objects");
                _this.calciteFilterChange.emit([]);
                return;
            }
            var find = function (input, RE) {
                var found = false;
                forIn(input, function (val) {
                    if (typeof val === "function") {
                        return;
                    }
                    if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
                        if (find(val, RE)) {
                            found = true;
                        }
                    }
                    else if (RE.test(val)) {
                        found = true;
                    }
                });
                return found;
            };
            var result = _this.data.filter(function (item) {
                return find(item, regex);
            });
            _this.calciteFilterChange.emit(result);
        }, filterDebounceInMs);
        this.inputHandler = function (event) {
            var target = event.target;
            _this.empty = target.value === "";
            _this.filter(target.value);
        };
        this.clear = function () {
            _this.textInput.value = "";
            _this.empty = true;
            _this.calciteFilterChange.emit(_this.data);
        };
        this.calciteFilterChange = createEvent(this, "calciteFilterChange", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteFilter.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("label", null, h("input", { type: "text", value: "", placeholder: this.textPlaceholder, onInput: this.inputHandler, "aria-label": this.textLabel || TEXT.filterLabel, ref: function (el) { return (_this.textInput = el); } }), h("div", { class: CSS.searchIcon }, h("calcite-icon", { scale: "s", icon: ICONS.search }))), !this.empty ? (h("button", { onClick: this.clear, class: CSS.clearButton, "aria-label": TEXT.clear }, h("calcite-icon", { icon: ICONS.close }))) : null));
    };
    Object.defineProperty(CalciteFilter.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteFilter, "style", {
        get: function () { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-ms-flexbox;display:flex;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);width:100%}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-app-side-spacing-quarter);overflow:hidden;position:relative;width:100%}input[type=text]{background-color:transparent;border:0;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);margin-bottom:calc(var(--calcite-app-cap-spacing-minimum) * 2);padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-quarter) var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-plus-half);-webkit-transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:padding var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), -webkit-box-shadow var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);width:100%}input[type=text]::-ms-clear{display:none}input[type=text]:focus{border-color:var(--calcite-app-foreground-active);-webkit-box-shadow:0 calc(var(--calcite-app-cap-spacing-minimum) * 2) 0 var(--calcite-app-foreground-active);box-shadow:0 calc(var(--calcite-app-cap-spacing-minimum) * 2) 0 var(--calcite-app-foreground-active);outline:none;padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-quarter)}.search-icon{color:var(--calcite-app-foreground-subtle);display:-ms-flexbox;display:flex;left:0;position:absolute;-webkit-transition:left var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:left var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function), opacity var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}.clear-button{color:var(--calcite-app-foreground);background:none;border:0;cursor:pointer}.clear-button:hover,.clear-button:focus{color:var(--calcite-app-foreground-hover)}.calcite--rtl input[type=text]{padding-left:var(--calcite-app-side-spacing-quarter);padding-right:var(--calcite-app-side-spacing-plus-half)}.calcite--rtl .search-icon{left:unset;right:0}input[type=text]:focus~.search-icon{left:calc(var(--calcite-app-icon-size) * -1);opacity:0}"; },
        enumerable: true,
        configurable: true
    });
    return CalciteFilter;
}());
export { CalciteFilter as calcite_filter };
