System.register(["./p-dd45b0da.system.js","./p-1522b028.system.js","./p-f46ce193.system.js"],(function(e){"use strict";var t,i,o,r,a,l,n;return{setters:[function(e){t=e.r;i=e.c;o=e.h;r=e.H;a=e.g},function(e){l=e.g},function(e){n=e.g}],execute:function(){var c={container:"container",header:"header",footer:"footer",title:"title",subtitle:"subtitle",thumbnailWrapper:"thumbnail-wrapper",checkboxWrapper:"checkbox-wrapper"};var s=":host([hidden]){display:none}:host{max-width:100%}:host .calcite-card-container{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:0 0 0 rgba(0, 0, 0, 0);box-shadow:0 0 0 rgba(0, 0, 0, 0)}:host .calcite-card-container:hover{-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08);z-index:1}:host .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);z-index:1}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}:host([loading]) .calcite-card-loader-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}:host .header,:host .footer{padding:0.75rem;display:-ms-flexbox;display:flex}:host .header{-ms-flex-direction:column;flex-direction:column}:host .footer{padding:0.75rem;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between}:host .card-content{padding:0 0.75rem;color:var(--calcite-ui-text-3);font-size:0.875rem;line-height:1.5}:host([selectable]) .calcite-card-container:active{-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-blue-1)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:0.9375rem;line-height:1.5}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:0.375rem;font-size:0.875rem;line-height:1.5}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){max-width:100%;min-width:100%}slot[name=footer-leading]::slotted(*),*::slotted([slot=footer-leading]){-webkit-margin-end:auto;margin-inline-end:auto;-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}slot[name=footer-trailing]::slotted(*),*::slotted([slot=footer-trailing]){-ms-flex-item-align:center;align-self:center;font-size:0.875rem;line-height:1.5}:host .thumbnail-wrapper{font-size:0}:host .checkbox-wrapper{position:absolute;top:0.375rem;right:0.375rem;margin:0;padding:0}:host([dir=rtl]) .checkbox-wrapper{left:0.375rem;right:auto}";var d=e("calcite_card",function(){function e(e){t(this,e);this.loading=false;this.selected=false;this.selectable=false;this.calciteCardSelected=i(this,"calciteCardSelected",7)}e.prototype.render=function(){var e;var t=l(this.el);return o(r,{dir:t},o("div",{class:"calcite-card-container"},this.loading?o("div",{class:"calcite-card-loader-container"},o("calcite-loader",{"is-active":true})):null,o("section",{class:(e={},e[c.container]=true,e),"aria-busy":this.loading},this.selectable?this.renderCheckbox():null,this.renderThumbnail(),this.renderHeader(),o("div",{class:"card-content"},o("slot",null)),this.renderFooter())))};e.prototype.cardSelectClick=function(){this.selectCard()};e.prototype.cardSelectKeyDown=function(e){switch(n(e.key)){case" ":case"Enter":this.selectCard();e.preventDefault();break}};e.prototype.selectCard=function(){this.selected=!this.selected;this.calciteCardSelected.emit({element:this.el,selected:this.selected})};e.prototype.renderThumbnail=function(){var e=this.el.querySelector("[slot="+"thumbnail"+"]");return e?o("div",{class:c.thumbnailWrapper},o("slot",{name:"thumbnail"})):null};e.prototype.renderCheckbox=function(){var e=this;return o("div",{class:c.checkboxWrapper,onClick:function(){return e.cardSelectClick()},onKeyDown:function(t){return e.cardSelectKeyDown(t)}},o("calcite-checkbox",{checked:this.selected}))};e.prototype.renderHeader=function(){var e=this.el.querySelector("[slot="+"title"+"]");var t=this.el.querySelector("[slot="+"subtitle"+"]");var i=e||t;return i?o("header",{class:c.header},o("slot",{name:"title"}),o("slot",{name:"subtitle"})):null};e.prototype.renderFooter=function(){var e=this.el.querySelector("[slot="+"footer-leading"+"]");var t=this.el.querySelector("[slot="+"footer-trailing"+"]");var i=e||t;return i?o("footer",{class:c.footer},o("slot",{name:"footer-leading"}),o("slot",{name:"footer-trailing"})):null};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});return e}());d.style=s}}}));