import{r as t,c as s,h as e,g as i}from"./p-f5c2cb95.js";const a=class{constructor(e){t(this,e),this.activated=!1,this.textTitle="handle",this.handleKeyDown=t=>{switch(t.key){case" ":this.activated=!this.activated;break;case"ArrowUp":case"ArrowDown":if(!this.activated)return;const s=t.key.toLowerCase().replace("arrow","");this.calciteHandleNudge.emit({handle:this.el,direction:s})}},this.handleBlur=()=>{this.activated=!1},this.calciteHandleNudge=s(this,"calciteHandleNudge",7)}async setFocus(){this.handleButton.focus()}render(){return e("span",{role:"button",tabindex:"0","aria-pressed":this.activated.toString(),class:{handle:!0,"handle--activated":this.activated},onKeyDown:this.handleKeyDown,onBlur:this.handleBlur,title:this.textTitle,ref:t=>this.handleButton=t},e("calcite-icon",{scale:"s",icon:"drag"}))}get el(){return i(this)}static get style(){return":host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host{display:inline-block}.handle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--calcite-app-cap-spacing-minimum);padding:var(--calcite-app-cap-spacing-three-quarters) var(--calcite-app-side-spacing-half);background-color:var(--calcite-app-background);border:none;color:var(--calcite-app-foreground-subtle);line-height:0;cursor:move}.handle:focus{outline-offset:var(--calcite-app-outline-inset)}.handle:focus{outline-offset:var(--calcite-app-outline-inset)}.handle--activated{background-color:var(--calcite-app-background-active);color:var(--calcite-app-foreground-active)}"}};export{a as calcite_handle};