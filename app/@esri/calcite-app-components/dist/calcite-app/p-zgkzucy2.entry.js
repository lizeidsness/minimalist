import{r as t,c as e,h as i,g as s}from"./p-f5c2cb95.js";import"./p-e7016dc4.js";import{T as a,I as c}from"./p-4d533d6f.js";import"./p-30ecf6c3.js";import{s as h,L as l}from"./p-598030af.js";const{mutationObserverCallback:r,initialize:n,initializeObserver:p,cleanUpObserver:o,calciteListItemChangeHandler:m,calciteListItemValueChangeHandler:d,setUpItems:g,deselectSiblingItems:I,selectSiblings:u,handleFilter:L,getItemData:b}=h,C=class{constructor(i){t(this,i),this.compact=!1,this.disabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.textFilterPlaceholder=a.filterPlaceholder,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(r.bind(this)),this.deselectSiblingItems=I.bind(this),this.selectSiblings=u.bind(this),this.handleFilter=L.bind(this),this.getItemData=b.bind(this),this.calciteListChange=e(this,"calciteListChange",7)}connectedCallback(){n.call(this)}componentDidLoad(){p.call(this)}componentDidUnload(){o.call(this)}calciteListItemChangeHandler(t){m.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){d.call(this,t)}setUpItems(){g.call(this,"calcite-pick-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}async getSelectedItems(){return this.selectedValues}getIconType(){let t=c.circle;return this.multiple&&(t=c.square),t}render(){return i(l,{props:this})}get el(){return s(this)}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-flow:column;flex-flow:column;padding-bottom:var(--calcite-app-cap-spacing);position:relative}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}header{background-color:var(--calcite-app-background);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:var(--calcite-app-cap-spacing-half);-webkit-box-shadow:0 -1px 0 var(--calcite-app-border) inset;box-shadow:0 -1px 0 var(--calcite-app-border) inset}header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}slot[name=menu-actions]::slotted(calcite-action){padding:0 var(--calcite-app-side-spacing-half)}:host([loading][disabled]){min-height:2rem}"}};export{C as calcite_pick_list};