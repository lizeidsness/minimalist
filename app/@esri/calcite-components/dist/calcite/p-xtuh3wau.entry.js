import{r as t,c as s,h as i,H as e,g as a}from"./p-dde25702.js";import{n as h,c as r,g as l}from"./p-f4073644.js";import{g as c}from"./p-c526d604.js";import{L as n,R as o,b,S as d}from"./p-fba2df54.js";const u=class{constructor(i){t(this,i),this.isActive=!1,this.guid=`calcite-tab-title-${c()}`,this.calciteTabRegister=s(this,"calciteTabRegister",7),this.calciteTabUnregister=s(this,"calciteTabUnregister",7)}render(){return i(e,{id:this.el.id||this.guid,"aria-labeledby":this.labeledBy,"aria-expanded":this.isActive.toString(),role:"tabpanel"},i("section",null,i("slot",null)))}componentDidLoad(){this.calciteTabRegister.emit()}componentDidUnload(){this.calciteTabUnregister.emit()}tabChangeHandler(t){t.target.closest("calcite-tabs")===this.el.closest("calcite-tabs")&&(this.tab?this.isActive=this.tab===t.detail.tab:this.getTabIndex().then(s=>{this.isActive=s===t.detail.tab}))}async getTabIndex(){return Promise.resolve(Array.prototype.indexOf.call(h(this.el.parentElement.children).filter(t=>t.matches("calcite-tab")),this.el))}updateAriaInfo(t=[],s=[]){return this.labeledBy=s[t.indexOf(this.el.id)]||null,Promise.resolve()}get el(){return a(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host([is-active]) section{display:block}section{display:none}"}},T=class{constructor(i){t(this,i),this.calciteTabChange=s(this,"calciteTabChange",7)}selectedTabChanged(){localStorage&&this.storageId&&null!=this.selectedTab&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTab)),this.calciteTabChange.emit({tab:this.selectedTab})}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;localStorage&&this.storageId&&localStorage.getItem(t)&&(this.selectedTab=JSON.parse(localStorage.getItem(t)),this.calciteTabChange.emit({tab:this.selectedTab}))}render(){return i(e,{role:"tablist"},i("nav",{class:"tab-nav",ref:t=>this.tabNavEl=t},i("slot",null)))}componentDidRender(){this.tabTitles.length&&this.tabTitles.every(t=>!t.isActive)&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then(t=>{this.calciteTabChange.emit({tab:t})})}focusPreviousTabHandler(t){const s=this.getIndexOfTabTitle(t.target);(this.tabTitles[s-1]||this.tabTitles[this.tabTitles.length-1]).focus(),t.stopPropagation(),t.preventDefault()}focusNextTabHandler(t){const s=this.getIndexOfTabTitle(t.target);(this.tabTitles[s+1]||this.tabTitles[0]).focus(),t.stopPropagation(),t.preventDefault()}activateTabHandler(t){this.selectedTab=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()}globalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab)}getIndexOfTabTitle(t){return this.tabTitles.indexOf(t)}get tabTitles(){return this.tabNavEl?r(this.tabNavEl,"calcite-tab-title"):[]}get el(){return a(this)}static get watchers(){return{selectedTab:["selectedTabChanged"]}}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}.tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}:host([dir=rtl]) ::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}"}},g=class{constructor(i){t(this,i),this.isActive=!1,this.guid=`calcite-tab-title-${c()}`,this.calciteTabsActivate=s(this,"calciteTabsActivate",7),this.calciteTabsFocusNext=s(this,"calciteTabsFocusNext",7),this.calciteTabsFocusPrevious=s(this,"calciteTabsFocusPrevious",7),this.calciteTabTitleRegister=s(this,"calciteTabTitleRegister",7),this.calciteTabTitleUnregister=s(this,"calciteTabTitleUnregister",7)}componentWillLoad(){this.tab&&this.isActive&&this.calciteTabsActivate.emit({tab:this.tab})}render(){return i(e,{id:this.el.id||this.guid,"aria-controls":this.controls,"aria-expanded":this.isActive.toString(),role:"tab",tabindex:"0"},i("a",null,i("slot",null)))}componentDidLoad(){this.calciteTabTitleRegister.emit()}componentDidUnload(){this.calciteTabTitleUnregister.emit()}tabChangeHandler(t){this.tab?this.isActive=this.tab===t.detail.tab:this.getTabIndex().then(s=>{this.isActive=s===t.detail.tab})}onClick(){this.calciteTabsActivate.emit({tab:this.tab})}keyDownHandler(t){switch(t.keyCode){case d:case b:this.calciteTabsActivate.emit({tab:this.tab}),t.preventDefault();break;case o:"ltr"===l(this.el)?this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case n:"ltr"===l(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}}async getTabIndex(){return Promise.resolve(Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el))}async getTabIdentifier(){return this.tab?Promise.resolve(this.tab):this.getTabIndex()}async updateAriaInfo(t=[],s=[]){return this.controls=t[s.indexOf(this.el.id)]||null,Promise.resolve()}get el(){return a(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{-ms-flex:0 1 var(--calcite-tabs-tab-basis);flex:0 1 var(--calcite-tabs-tab-basis);outline:none}:host(:active) a,:host(:focus) a,:host(:hover) a{outline:none;text-decoration:none;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-border-2)}:host([is-active]) a{color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue);font-weight:500}a{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.875rem;line-height:1.5;padding:.75rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-ui-text-3);outline:none;width:100%;display:block;text-align:var(--calcite-tabs-tab-text-align)}"}},m=class{constructor(s){t(this,s),this.theme="light",this.layout="inline",this.titles=[],this.tabs=[]}render(){const t=l(this.el);return i(e,{dir:t},i("div",null,i("slot",{name:"tab-nav"}),i("section",null,i("slot",null))))}calciteTabTitleRegister(t){this.titles=[...this.titles,t.target],this.registryHandler(),t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter(s=>s!==t.target),this.registryHandler(),t.stopPropagation()}calciteTabRegister(t){this.tabs=[...this.tabs,t.target],this.registryHandler(),t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter(s=>s!==t.target),this.registryHandler(),t.stopPropagation()}async registryHandler(){var t,s;if(this.tabs.some(t=>t.tab)||this.titles.some(t=>t.tab))t=this.tabs.sort((t,s)=>t.tab.localeCompare(s.tab)).map(t=>t.id),s=this.titles.sort((t,s)=>t.tab.localeCompare(s.tab)).map(t=>t.id);else{const i=await Promise.all(this.tabs.map(t=>t.getTabIndex())),e=await Promise.all(this.titles.map(t=>t.getTabIndex()));t=i.reduce((t,s,i)=>(t[s]=this.tabs[i].id,t),[]),s=e.reduce((t,s,i)=>(t[s]=this.titles[i].id,t),[])}this.tabs.forEach(i=>i.updateAriaInfo(t,s)),this.titles.forEach(i=>i.updateAriaInfo(t,s))}get el(){return a(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{display:block;--calcite-tabs-layout:flex-start;--calcite-tabs-tab-basis:auto;--calcite-tabs-tab-text-align:start;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:0}:host([dir=rtl]){--calcite-tabs-tab-margin-start:0;--calcite-tabs-tab-margin-end:1.25rem}:host([layout=center]){--calcite-tabs-layout:center;--calcite-tabs-tab-basis:200px;--calcite-tabs-tab-text-align:center;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:1.25rem}section{border-top:1px solid var(--calcite-ui-border-1)}"}};export{u as calcite_tab,T as calcite_tab_nav,g as calcite_tab_title,m as calcite_tabs};