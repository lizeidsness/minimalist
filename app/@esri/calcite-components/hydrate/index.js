'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function hydrateFactory(win, opts, results, afterHydrate, resolve) {
  var globalThis = win;
  var self = win;
  var top = win;
  var parent = win;

  var addEventListener = win.addEventListener.bind(win);
  var alert = win.alert.bind(win);
  var blur = win.blur.bind(win);
  var cancelAnimationFrame = win.cancelAnimationFrame.bind(win);
  var cancelIdleCallback = win.cancelIdleCallback.bind(win);
  var clearInterval = win.clearInterval.bind(win);
  var clearTimeout = win.clearTimeout.bind(win);
  var close = () => {};
  var confirm = win.confirm.bind(win);
  var dispatchEvent = win.dispatchEvent.bind(win);
  var focus = win.focus.bind(win);
  var getComputedStyle = win.getComputedStyle.bind(win);
  var matchMedia = win.matchMedia.bind(win);
  var open = win.open.bind(win);
  var prompt = win.prompt.bind(win);
  var removeEventListener = win.removeEventListener.bind(win);
  var requestAnimationFrame = win.requestAnimationFrame.bind(win);
  var requestIdleCallback = win.requestIdleCallback.bind(win);
  var setInterval = win.setInterval.bind(win);
  var setTimeout = win.setTimeout.bind(win);

  var CSS = win.CSS;
  var CustomEvent = win.CustomEvent;
  var Element = win.Element;
  var Event = win.Event;
  var HTMLElement = win.HTMLElement;
  var IntersectionObserver = win.IntersectionObserver;
  var KeyboardEvent = win.KeyboardEvent;
  var MouseEvent = win.MouseEvent;
  var Node = win.Node;
  var NodeList = win.NodeList;
  var URL = win.URL;

  var console = win.console;
  var customElements = win.customElements;
  var history = win.history;
  var localStorage = win.localStorage;
  var location = win.location;
  var navigator = win.navigator;
  var performance = win.performance;
  var sessionStorage = win.sessionStorage;

  var devicePixelRatio = win.devicePixelRatio;
  var innerHeight = win.innerHeight;
  var innerWidth = win.innerWidth;
  var origin = win.origin;
  var pageXOffset = win.pageXOffset;
  var pageYOffset = win.pageYOffset;
  var screen = win.screen;
  var screenLeft = win.screenLeft;
  var screenTop = win.screenTop;
  var screenX = win.screenX;
  var screenY = win.screenY;
  var scrollX = win.scrollX;
  var scrollY = win.scrollY;
  var exports = {};

  function hydrateAppClosure(window) {
    var document = window.document;


/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';

const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};

let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATE_ID = 's-id';
const HYDRATED_STYLE_ID = 'sty-id';
const HYDRATE_CHILD_ID = 'c-id';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
const createTime = (fnName, tagName = '') => {
    {
        return () => { return; };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => { return; };
    }
};
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId =  getScopeId(cmpMeta.$tagName$);
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    {
                        styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId);
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if ( !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (elm, cmpMeta, mode) => {
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle( elm.getRootNode(), cmpMeta);
    if ( cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
    }
    endAttachStyles();
};
const getScopeId = (tagName, mode) => 'sc-' + ( tagName);
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if ( vnodeData.key) {
            key = vnodeData.key;
        }
        if ( vnodeData.name) {
            slotName = vnodeData.name;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class = typeof classData !== 'object'
                    ? classData
                    : Object.keys(classData)
                        .filter(k => classData[k])
                        .join(' ');
            }
        }
    }
    if ( typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    'forEach': (children, cb) => children.map(convertToPublic).forEach(cb),
    'map': (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
const convertToPublic = (node) => {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
const convertToPrivate = (node) => {
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if ( memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
        }
        else if ( memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if ( memberName === 'key')
            ;
        else if ( memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if (
            ( !isProp
                ) &&
            memberName[0] === 'o' && memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        let n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                            // tslint:disable-next-line: triple-equals
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if ( xlink) {
                    elm.removeAttributeNS(XLINK_NS, memberName);
                }
                else {
                    elm.removeAttribute(memberName);
                }
            }
            else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if ( xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value) ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if ( !useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= (newVNode.$children$)
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                ? 2 /* isSlotFallback */
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                : 1 /* isSlotReference */;
        }
    }
    if ( newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if ( newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =  slotReferenceDebugNode(newVNode) ;
    }
    else {
        if ( !isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = ( doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, ( newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$)
            );
        if ( isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if ( isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = (( parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if ( containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode,  referenceNode(before) );
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnode = vnodes[startIdx]) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ( (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ( (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if ( idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if ( newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if ( vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
const patch = (oldVNode, newVNode) => {
    const elm = newVNode.$elm$ = oldVNode.$elm$;
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if ( text === null) {
        {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = (tag === 'svg')
                ? true
                : (tag === 'foreignObject')
                    ? false
                    : isSvgMode;
        }
        // element node
        {
            if ( tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if ( oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if ( oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if ( oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if ( isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if ( (defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if ( oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    let childNodes = elm.childNodes;
    let ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.forEach(relocateNode => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find(r => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some(r => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.forEach(callNodeRefs);
    }
};
const renderVdom = (hostElm, hostRef, cmpMeta, renderFnResults) => {
    hostTagName = hostElm.tagName;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    if ( cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = ( hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom ;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode =  originalLocationDebugNode(nodeToRelocate)
                        ;
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while (orgLocationNode = orgLocationNode.previousSibling) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode &&
                            refNode['s-sn'] === nodeToRelocate['s-sn'] &&
                            parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        (nodeToRelocate.nextSibling !== insertBeforeNode)) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
// slot comment debug nodes only created with the `--debug` flag
// otherwise these nodes are text nodes w/out content
const slotReferenceDebugNode = (slotVNode) => doc.createComment(`<slot${slotVNode.$name$ ?
    (' name="' + slotVNode.$name$) + '"' :
    ''}> (host=${hostTagName.toLowerCase()})`);
const originalLocationDebugNode = (nodeToRelocate) => doc.createComment(`org-location for ` +
    (nodeToRelocate.localName ?
        `<${nodeToRelocate.localName}> (host=${nodeToRelocate['s-hn']})` :
        `[${nodeToRelocate.textContent}]`));
const attachToAncestor = (hostRef, ancestorComponent) => {
    if ( ancestorComponent && !hostRef.$onRenderResolve$) {
        ancestorComponent['s-p'].push(new Promise(r => hostRef.$onRenderResolve$ = r));
    }
};
const scheduleUpdate = (elm, hostRef, cmpMeta, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if ( hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    const endSchedule = createTime('scheduleUpdate', cmpMeta.$tagName$);
    const ancestorComponent = hostRef.$ancestorComponent$;
    const instance =  hostRef.$lazyInstance$ ;
    const update = () => updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad);
    attachToAncestor(hostRef, ancestorComponent);
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.forEach(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        {
            promise = safeCall(instance, 'componentWillUpdate');
        }
    }
    {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    endSchedule();
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    return then(promise,  () => writeTask(update)
        );
};
const updateComponent = (elm, hostRef, cmpMeta, instance, isInitialLoad) => {
    // updateComponent
    const endUpdate = createTime('update', cmpMeta.$tagName$);
    const rc = elm['s-rc'];
    if ( isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta);
    }
    const endRender = createTime('render', cmpMeta.$tagName$);
    {
        {
            // looks like we've got child nodes to render into this host element
            // or we need to update the css class/attrs on the host element
            // DOM WRITE!
            renderVdom(elm, hostRef, cmpMeta, callRender(instance));
        }
    }
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        try {
            // manually connected child components during server-side hydrate
            serverSideConnected(elm);
            if (isInitialLoad) {
                // using only during server-side hydrate
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    elm['s-en'] = '';
                }
                else if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
                    elm['s-en'] = 'c';
                }
            }
        }
        catch (e) {
            consoleError(e);
        }
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if ( rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.forEach(cb => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(elm, hostRef, cmpMeta);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (instance, elm) => {
    try {
        instance =  instance.render() ;
    }
    catch (e) {
        consoleError(e);
    }
    return instance;
};
const postUpdateComponent = (elm, hostRef, cmpMeta) => {
    const endPostUpdate = createTime('postUpdate', cmpMeta.$tagName$);
    const instance =  hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(elm, hostRef, cmpMeta, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => 
    elm.classList.add('hydrated') ;
const serverSideConnected = (elm) => {
    const children = elm.children;
    if (children != null) {
        for (let i = 0, ii = children.length; i < ii; i++) {
            const childElm = children[i];
            if (typeof childElm.connectedCallback === 'function') {
                childElm.connectedCallback();
            }
            serverSideConnected(childElm);
        }
    }
};
const addEventListeners = (elm, hostRef, listeners) => {
    hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || [];
    const removeFns = listeners.map(([flags, name, method]) => {
        const target = ( getHostListenerTarget(elm, flags) );
        const handler = hostListenerProxy(hostRef, method);
        const opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return () => plt.rel(target, name, handler, opts);
    });
    return () => removeFns.forEach(fn => fn());
};
const hostListenerProxy = (hostRef, methodName) => {
    return (ev) => {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                hostRef.$queuedListeners$.push([methodName, ev]);
            }
        }
    };
};
const getHostListenerTarget = (elm, flags) => {
    if ( flags & 8 /* TargetWindow */)
        return win;
    if ( flags & 32 /* TargetBody */)
        return doc.body;
    if ( flags & 16 /* TargetParent */)
        return elm.parentElement;
    return elm;
};
const hostListenerOpts = (flags) =>  (flags & 2 /* Capture */) !== 0;
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if ( propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if ( propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if ( propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm =  hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance =  hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && ( !(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if ( instance) {
            // get an array of method names of watch functions to call
            if ( cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(watchMethodName => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ( (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if ( cmpMeta.$members$) {
        if ( Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.forEach(([memberName, [memberFlags]]) => {
            if ( ((memberFlags & 31 /* Prop */) ||
                (( flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if ( (flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    }
                });
            }
        });
        if ( ( flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    this[propName] = newValue === null && typeof this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if ( m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ( (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        // we haven't initialized this element yet
        hostRef.$flags$ |= 32 /* hasInitializedComponent */;
        if ( hostRef.$modeName$) {
            elm.setAttribute('s-mode', hostRef.$modeName$);
        }
        {
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if ( !Cstr.isProxied) {
                // we'eve never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        const scopeId =  getScopeId(cmpMeta.$tagName$);
        if ( !styles.has(scopeId) && Cstr.style) {
            const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            registerStyle(scopeId, style);
            endRegisterStyles();
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(elm, hostRef, cmpMeta, true);
    if ( ancestorComponent && ancestorComponent['s-rc']) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm, cmpMeta) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        // connectedCallback
        const hostRef = getHostRef(elm);
        if ( cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef.$rmListeners$ = addEventListeners(elm, hostRef, cmpMeta.$listeners$);
        }
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (
                        (ancestorComponent['s-p'])) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = elm['s-cr'] = doc.createComment( '');
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            const ev = new ( win.CustomEvent )(name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail
            });
            elm.dispatchEvent(ev);
            return ev;
        }
    };
};
const getElement = (ref) =>  getHostRef(ref).$hostElement$ ;
const insertVdomAnnotations = (doc) => {
    if (doc != null) {
        const docData = {
            hostIds: 0,
            rootLevelIds: 0
        };
        const orgLocationNodes = [];
        parseVNodeAnnotations(doc, doc.body, docData, orgLocationNodes);
        orgLocationNodes.forEach(orgLocationNode => {
            if (orgLocationNode != null) {
                const nodeRef = orgLocationNode['s-nr'];
                let hostId = nodeRef['s-host-id'];
                let nodeId = nodeRef['s-node-id'];
                let childId = `${hostId}.${nodeId}`;
                if (hostId == null) {
                    hostId = 0;
                    docData.rootLevelIds++;
                    nodeId = docData.rootLevelIds;
                    childId = `${hostId}.${nodeId}`;
                    if (nodeRef.nodeType === 1 /* ElementNode */) {
                        nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
                    }
                    else if (nodeRef.nodeType === 3 /* TextNode */) {
                        if (hostId === 0) {
                            const textContent = nodeRef.nodeValue.trim();
                            if (textContent === '') {
                                // useless whitespace node at the document root
                                orgLocationNode.remove();
                                return;
                            }
                        }
                        const commentBeforeTextNode = doc.createComment(childId);
                        commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
                        nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
                    }
                }
                let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
                const orgLocationParentNode = orgLocationNode.parentElement;
                if (orgLocationParentNode) {
                    if (orgLocationParentNode['s-en'] === '') {
                        // ending with a "." means that the parent element
                        // of this node's original location is a SHADOW dom element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.`;
                    }
                    else if (orgLocationParentNode['s-en'] === 'c') {
                        // ending with a ".c" means that the parent element
                        // of this node's original location is a SCOPED element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.c`;
                    }
                }
                orgLocationNode.nodeValue = orgLocationNodeId;
            }
        });
    }
};
const parseVNodeAnnotations = (doc, node, docData, orgLocationNodes) => {
    if (node == null) {
        return;
    }
    if (node['s-nr'] != null) {
        orgLocationNodes.push(node);
    }
    if (node.nodeType === 1 /* ElementNode */) {
        node.childNodes.forEach(childNode => {
            const hostRef = getHostRef(childNode);
            if (hostRef != null) {
                const cmpData = {
                    nodeIds: 0
                };
                insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
            }
            parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
        });
    }
};
const insertVNodeAnnotations = (doc, hostElm, vnode, docData, cmpData) => {
    if (vnode != null) {
        const hostId = ++docData.hostIds;
        hostElm.setAttribute(HYDRATE_ID, hostId);
        if (hostElm['s-cr'] != null) {
            hostElm['s-cr'].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
        }
        if (vnode.$children$ != null) {
            const depth = 0;
            vnode.$children$.forEach((vnodeChild, index) => {
                insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index);
            });
        }
    }
};
const insertChildVNodeAnnotations = (doc, vnodeChild, cmpData, hostId, depth, index) => {
    const childElm = vnodeChild.$elm$;
    if (childElm == null) {
        return;
    }
    const nodeId = cmpData.nodeIds++;
    const childId = `${hostId}.${nodeId}.${depth}.${index}`;
    childElm['s-host-id'] = hostId;
    childElm['s-node-id'] = nodeId;
    if (childElm.nodeType === 1 /* ElementNode */) {
        childElm.setAttribute(HYDRATE_CHILD_ID, childId);
    }
    else if (childElm.nodeType === 3 /* TextNode */) {
        const parentNode = childElm.parentNode;
        if (parentNode.nodeName !== 'STYLE') {
            const textNodeId = `${TEXT_NODE_ID}.${childId}`;
            const commentBeforeTextNode = doc.createComment(textNodeId);
            parentNode.insertBefore(commentBeforeTextNode, childElm);
        }
    }
    else if (childElm.nodeType === 8 /* CommentNode */) {
        if (childElm['s-sr']) {
            const slotName = (childElm['s-sn'] || '');
            const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
            childElm.nodeValue = slotNodeId;
        }
    }
    if (vnodeChild.$children$ != null) {
        const childDepth = depth + 1;
        vnodeChild.$children$.forEach((vnode, index) => {
            insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth, index);
        });
    }
};

function proxyHostElement(elm, cmpMeta) {
    if (typeof elm.componentOnReady !== 'function') {
        elm.componentOnReady = componentOnReady;
    }
    if (typeof elm.forceUpdate !== 'function') {
        elm.forceUpdate = forceUpdate;
    }
    if (cmpMeta.$members$ != null) {
        const hostRef = getHostRef(elm);
        const members = Object.entries(cmpMeta.$members$);
        members.forEach(([memberName, m]) => {
            const memberFlags = m[0];
            if (memberFlags & 31) {
                const attributeName = (m[1] || memberName);
                const attrValue = elm.getAttribute(attributeName);
                if (attrValue != null) {
                    const parsedAttrValue = parsePropertyValue(attrValue, memberFlags);
                    hostRef.$instanceValues$.set(memberName, parsedAttrValue);
                }
                const ownValue = elm[memberName];
                if (ownValue !== undefined) {
                    hostRef.$instanceValues$.set(memberName, ownValue);
                    delete elm[memberName];
                }
                Object.defineProperty(elm, memberName, {
                    get() {
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if (memberFlags & 64) {
                Object.defineProperty(elm, memberName, {
                    value() {
                        const ref = getHostRef(this);
                        const args = arguments;
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName].apply(ref.$lazyInstance$, args)).catch(consoleError);
                    }
                });
            }
        });
    }
}
function componentOnReady() {
    return getHostRef(this).$onReadyPromise$;
}
function forceUpdate() { }

function hydrateApp(win, opts, results, afterHydrate, resolve) {
    const connectedElements = new Set();
    const createdElements = new Set();
    const orgDocumentCreateElement = win.document.createElement;
    const orgDocumentCreateElementNS = win.document.createElementNS;
    const resolved = Promise.resolve();
    let tmrId;
    function hydratedComplete() {
        global.clearTimeout(tmrId);
        createdElements.clear();
        connectedElements.clear();
        try {
            if (opts.clientHydrateAnnotations) {
                insertVdomAnnotations(win.document);
            }
            win.document.createElement = orgDocumentCreateElement;
            win.document.createElementNS = orgDocumentCreateElementNS;
        }
        catch (e) {
            renderCatchError(opts, results, e);
        }
        afterHydrate(win, opts, results, resolve);
    }
    function hydratedError(err) {
        renderCatchError(opts, results, err);
        hydratedComplete();
    }
    function timeoutExceeded() {
        hydratedError(`Hydrate exceeded timeout`);
    }
    try {
        function patchedConnectedCallback() {
            return connectElement(this);
        }
        function patchElement(elm) {
            const tagName = elm.nodeName.toLowerCase();
            if (tagName.includes('-')) {
                const Cstr = getComponent(tagName);
                if (Cstr != null && Cstr.cmpMeta != null) {
                    createdElements.add(elm);
                    elm.connectedCallback = patchedConnectedCallback;
                    registerHost(elm);
                    proxyHostElement(elm, Cstr.cmpMeta);
                }
            }
        }
        function patchChild(elm) {
            if (elm != null && elm.nodeType === 1) {
                patchElement(elm);
                const children = elm.children;
                for (let i = 0, ii = children.length; i < ii; i++) {
                    patchChild(children[i]);
                }
            }
        }
        function connectElement(elm) {
            createdElements.delete(elm);
            if (elm != null && elm.nodeType === 1 && results.hydratedCount < opts.maxHydrateCount && shouldHydrate(elm)) {
                const tagName = elm.nodeName.toLowerCase();
                if (tagName.includes('-') && !connectedElements.has(elm)) {
                    connectedElements.add(elm);
                    return hydrateComponent(win, results, tagName, elm);
                }
            }
            return resolved;
        }
        function waitLoop() {
            const toConnect = Array.from(createdElements).filter(elm => elm.parentElement);
            if (toConnect.length > 0) {
                return Promise.all(toConnect.map(connectElement))
                    .then(waitLoop);
            }
            return resolved;
        }
        win.document.createElement = function patchedCreateElement(tagName) {
            const elm = orgDocumentCreateElement.call(win.document, tagName);
            patchElement(elm);
            return elm;
        };
        win.document.createElementNS = function patchedCreateElement(namespaceURI, tagName) {
            const elm = orgDocumentCreateElementNS.call(win.document, namespaceURI, tagName);
            patchElement(elm);
            return elm;
        };
        tmrId = global.setTimeout(timeoutExceeded, opts.timeout);
        plt.$resourcesUrl$ = new URL(opts.resourcesUrl || './', doc.baseURI).href;
        patchChild(win.document.body);
        waitLoop()
            .then(hydratedComplete)
            .catch(hydratedError);
    }
    catch (e) {
        hydratedError(e);
    }
}
async function hydrateComponent(win, results, tagName, elm) {
    const Cstr = getComponent(tagName);
    if (Cstr != null) {
        const cmpMeta = Cstr.cmpMeta;
        if (cmpMeta != null) {
            try {
                connectedCallback(elm, cmpMeta);
                await elm.componentOnReady();
                results.hydratedCount++;
                const ref = getHostRef(elm);
                const modeName = !ref.$modeName$ ? '$' : ref.$modeName$;
                if (!results.components.some(c => c.tag === tagName && c.mode === modeName)) {
                    results.components.push({
                        tag: tagName,
                        mode: modeName,
                        count: 0,
                        depth: -1,
                    });
                }
            }
            catch (e) {
                win.console.error(e);
            }
        }
    }
}
function shouldHydrate(elm) {
    if (elm.nodeType === 9) {
        return true;
    }
    if (NO_HYDRATE_TAGS.has(elm.nodeName)) {
        return false;
    }
    if (elm.hasAttribute('no-prerender')) {
        return false;
    }
    const parentNode = elm.parentNode;
    if (parentNode == null) {
        return true;
    }
    return shouldHydrate(parentNode);
}
const NO_HYDRATE_TAGS = new Set([
    'CODE',
    'HEAD',
    'IFRAME',
    'INPUT',
    'OBJECT',
    'OUTPUT',
    'NOSCRIPT',
    'PRE',
    'SCRIPT',
    'SELECT',
    'STYLE',
    'TEMPLATE',
    'TEXTAREA'
]);
function renderCatchError(opts, results, err) {
    const diagnostic = {
        level: 'error',
        type: 'build',
        header: 'Hydrate Error',
        messageText: '',
        relFilePath: null,
        absFilePath: null,
        lines: []
    };
    if (opts.url) {
        try {
            const u = new URL(opts.url);
            if (u.pathname !== '/') {
                diagnostic.header += ': ' + u.pathname;
            }
        }
        catch (e) { }
    }
    if (err != null) {
        if (err.stack != null) {
            diagnostic.messageText = err.stack.toString();
        }
        else if (err.message != null) {
            diagnostic.messageText = err.message.toString();
        }
        else {
            diagnostic.messageText = err.toString();
        }
    }
    results.diagnostics.push(diagnostic);
}

const cstrs = new Map();
const loadModule = (cmpMeta, _hostRef, _hmrVersionId) => {
    return cstrs.get(cmpMeta.$tagName$);
};
const getComponent = (tagName) => {
    return cstrs.get(tagName);
};
const isMemberInElement = (elm, memberName) => {
    if (elm != null) {
        if (memberName in elm) {
            return true;
        }
        const nodeName = elm.nodeName;
        if (nodeName) {
            const hostRef = getComponent(nodeName.toLowerCase());
            if (hostRef != null && hostRef.cmpMeta != null && hostRef.cmpMeta.$members$ != null) {
                return memberName in hostRef.cmpMeta.$members$;
            }
        }
    }
    return false;
};
const registerComponents = (Cstrs) => {
    Cstrs.forEach(Cstr => {
        cstrs.set(Cstr.cmpMeta.$tagName$, Cstr);
    });
};
const win = window;
const doc = win.document;
const writeTask = (cb) => {
    process.nextTick(() => {
        try {
            cb();
        }
        catch (e) {
            consoleError(e);
        }
    });
};
const nextTick = (cb) => Promise.resolve().then(cb);
const consoleError = (e) => {
    if (e != null) {
        console.error(e.stack || e.message || e);
    }
};
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
};
const supportsShadowDom = false;
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $instanceValues$: new Map(),
        $renderCount$: 0
    };
    hostRef.$onInstancePromise$ = new Promise(r => hostRef.$onInstanceResolve$ = r);
    hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
    elm['s-p'] = [];
    elm['s-rc'] = [];
    return hostRefs.set(elm, hostRef);
};
const Build = {
    isDev: false,
    isBrowser: false
};
const styles = new Map();

const TAB = 9;
const ENTER = 13;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

// turn a domNodeList into an array
function nodeListToArray(domNodeList) {
    if (Array.isArray(domNodeList)) {
        return domNodeList;
    }
    else {
        return Array.prototype.slice.call(domNodeList);
    }
}
function getElementDir(el) {
    return getElementProp(el, "dir", "ltr");
}
function getElementTheme(el) {
    return getElementProp(el, "theme", "light");
}
function getElementProp(el, prop, value) {
    const closestWithProp = el.closest(`[${prop}]`);
    return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}
function getSlottedElements(wrapperEl, selector) {
    const slot = wrapperEl.querySelector("slot");
    const elements = slot ? slot.assignedElements() : wrapperEl.children;
    return nodeListToArray(elements).filter(el => el.matches(selector));
}
const HOST_CSS = {
    hydratedInvisible: "hydrated--invisible"
};

class CalciteAccordion {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** specify the theme of accordion, defaults to light */
        this.theme = "light";
        /** specify the scale of accordion, defaults to m */
        this.scale = "m";
        /** specify the appearance - default (containing border), or minimal (no containing border), defaults to default */
        this.appearance = "default";
        /** specify the placement of the icon in the header, defaults to end */
        this.iconPosition = "end";
        /** specify the placement of the icon in the header, defaults to end */
        this.iconType = "chevron";
        /** specify the selection mode - multi (allow any number of open items), single (allow one open item),
         * or single-persist (allow and require one open item), defaults to multi */
        this.selectionMode = "multi";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of Accordion items */
        this.items = [];
        /** keep track of whether the items have been sorted so we don't re-sort */
        this.sorted = false;
        /** keep track of the requested item for multi mode */
        this.requestedAccordionItem = "";
        this.sortItems = (items) => items.sort((a, b) => a.position - b.position).map(a => a.item);
        this.calciteAccordionItemHasChanged = createEvent(this, "calciteAccordionItemHasChanged", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let appearance = ["default", "minimal", "transparent"];
        if (!appearance.includes(this.appearance))
            this.appearance = "default";
        let iconPosition = ["start", "end"];
        if (!iconPosition.includes(this.iconPosition))
            this.iconPosition = "end";
        let iconType = ["chevron", "caret", "plus-minus"];
        if (!iconType.includes(this.iconType))
            this.iconType = "chevron";
        let theme = ["light", "dark"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let selectionMode = ["multi", "single", "single-persist"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "multi";
    }
    componentDidLoad() {
        if (!this.sorted) {
            this.items = this.sortItems(this.items);
            this.sorted = true;
        }
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    calciteAccordionItemKeyEvent(e) {
        let item = e.detail.item;
        let itemToFocus = e.target;
        let isFirstItem = this.itemIndex(itemToFocus) === 0;
        let isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (item.keyCode) {
            case DOWN:
                if (isLastItem)
                    this.focusFirstItem();
                else
                    this.focusNextItem(itemToFocus);
                break;
            case UP:
                if (isFirstItem)
                    this.focusLastItem();
                else
                    this.focusPrevItem(itemToFocus);
                break;
            case HOME:
                this.focusFirstItem();
                break;
            case END:
                this.focusLastItem();
                break;
        }
    }
    registerCalciteAccordionItem(e) {
        const item = {
            item: e.target,
            position: e.detail.position
        };
        this.items.push(item);
    }
    updateActiveItemOnChange(event) {
        this.requestedAccordionItem = event.detail.requestedAccordionItem;
        this.calciteAccordionItemHasChanged.emit({
            requestedAccordionItem: this.requestedAccordionItem
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    focusFirstItem() {
        const firstItem = this.items[0];
        this.focusElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        this.focusElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.items[index + 1] || this.items[0];
        this.focusElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.focusElement(prevItem);
    }
    itemIndex(e) {
        return this.items.indexOf(e);
    }
    focusElement(item) {
        const target = item;
        target.focus();
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-accordion",
        "$members$": {
            "theme": [1537],
            "scale": [1537],
            "appearance": [1537],
            "iconPosition": [1537, "icon-position"],
            "iconType": [1537, "icon-type"],
            "selectionMode": [1537, "selection-mode"]
        },
        "$listeners$": [[0, "calciteAccordionItemKeyEvent", "calciteAccordionItemKeyEvent"], [0, "registerCalciteAccordionItem", "registerCalciteAccordionItem"], [0, "calciteAccordionItemSelected", "updateActiveItemOnChange"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

function gen(counts) {
    return counts
        .map(count => {
        let out = "";
        for (let i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    })
        .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);

class CalciteAccordionItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** unique id for Accordion item */
        this.accordionItemId = `calcite-accordion-item-${guid()}`;
        /** what selection mode is the parent accordion in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "multi");
        /** what icon type does the parent accordion specify */
        this.iconType = getElementProp(this.el, "icon-type", "chevron");
        /** handle clicks on item header */
        this.itemHeaderClickHander = () => this.emitRequestedItem();
        this.calciteAccordionItemKeyEvent = createEvent(this, "calciteAccordionItemKeyEvent", 7);
        this.calciteAccordionItemSelected = createEvent(this, "calciteAccordionItemSelected", 7);
        this.closeCalciteAccordionItem = createEvent(this, "closeCalciteAccordionItem", 7);
        this.registerCalciteAccordionItem = createEvent(this, "registerCalciteAccordionItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteAccordionItem.emit({
            position: this.itemPosition
        });
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, tabindex: "0", "aria-expanded": this.active.toString() }, h("div", { class: "accordion-item-header", onClick: this.itemHeaderClickHander }, h("div", { class: "accordion-item-header-text" }, h("span", { class: "accordion-item-title" }, this.itemTitle), h("span", { class: "accordion-item-subtitle" }, this.itemSubtitle)), h("calcite-icon", { class: "accordion-item-icon", icon: this.iconType === "chevron"
                ? "chevronUp"
                : this.iconType === "caret"
                    ? "caretUp"
                    : this.active
                        ? "minus"
                        : "plus", scale: "s" })), h("div", { class: "accordion-item-content" }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        if (e.target === this.el) {
            switch (e.keyCode) {
                case SPACE:
                case ENTER:
                    this.emitRequestedItem();
                    e.preventDefault();
                    break;
                case UP:
                case DOWN:
                case HOME:
                case END:
                    this.calciteAccordionItemKeyEvent.emit({ item: e });
                    e.preventDefault();
                    break;
            }
        }
    }
    updateActiveItemOnChange(event) {
        this.requestedAccordionItem = event.detail.requestedAccordionItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multi":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                else
                    this.active = false;
                break;
            case "single-persist":
                this.active = this.accordionItemId === this.requestedAccordionItem;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteAccordionItemSelected.emit({
            requestedAccordionItem: this.accordionItemId
        });
    }
    getItemPosition() {
        const parent = this.el.parentElement;
        return Array.prototype.indexOf.call(parent.querySelectorAll("calcite-accordion-item"), this.el);
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-accordion-item",
        "$members$": {
            "active": [1540],
            "itemTitle": [1, "item-title"],
            "itemSubtitle": [1, "item-subtitle"]
        },
        "$listeners$": [[0, "keydown", "keyDownHandler"], [16, "calciteAccordionItemHasChanged", "updateActiveItemOnChange"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

/** Alerts are meant to provide a way to communicate urgent or important information to users, frequently as a result of an action they took in your app. Alerts are positioned
 * at the bottom of the page. Multiple opened alerts will be added to a queue, allowing users to dismiss them in the order they are provided. You can keep alerts in your DOM or create/open, close/destroy
 * as needed.
 */
/**
 * @slot alert-title - Title of the alert (optional)
 * @slot alert-message - Main text of the alert
 * @slot alert-link - Optional action to take from the alert (undo, try again, link to page, etc.)
 */
class CalciteAlert {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //---------------------------------------------------------------------------
        /** Is the alert currently active or not */
        this.active = false;
        /** Close the alert automatically (recommended for passive, non-blocking alerts) */
        this.autoDismiss = false;
        /** Duration of autoDismiss (only used with `autoDismiss`) */
        this.autoDismissDuration = this.autoDismiss ? "medium" : null;
        /** Color for the alert (will apply to top border and icon) */
        this.color = "blue";
        /** Select theme (light or dark) */
        this.theme = "light";
        /** specify the scale of the button, defaults to m */
        this.scale = "m";
        /** specify if the alert should display an icon */
        this.icon = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** a managed list of alerts */
        this.alertQueue = [];
        /** Unique ID for this alert */
        this.alertId = this.el.id;
        /** map dismissal durations */
        this.autoDismissDurations = {
            slow: 14000,
            medium: 10000,
            fast: 6000
        };
        this.iconDefaults = {
            green: "checkCircle",
            yellow: "exclamationMarkTriangle",
            red: "exclamationMarkTriangle",
            blue: "lightbulb"
        };
        this.calciteAlertClose = createEvent(this, "calciteAlertClose", 7);
        this.calciteAlertOpen = createEvent(this, "calciteAlertOpen", 7);
        this.calciteAlertSync = createEvent(this, "calciteAlertSync", 7);
    }
    // listen for emitted open event from other calcite alerts and determine active state
    alertOpen(event) {
        this.calciteAlertSync.emit({ alertQueue: this.alertQueue });
        if (!this.alertQueue.includes(event.detail.requestedAlert)) {
            this.alertQueue.push(event.detail.requestedAlert);
        }
        this.determineActiveAlert();
    }
    // listen for emitted close event from other calcite alerts and determine active state
    alertClose(event) {
        if (this.alertQueue.includes(event.detail.requestedAlert)) {
            this.alertQueue = this.alertQueue.filter(e => e !== event.detail.requestedAlert);
        }
        if (this.alertId === event.detail.requestedAlert)
            this.active = false;
        this.determineActiveAlert();
    }
    // when an alert is opened / added to dom, update the queue to match any previously present queues
    alertRegister(event) {
        if (this.alertQueue !== event.detail.alertQueue) {
            this.alertQueue = event.detail.alertQueue;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let colors = ["blue", "red", "green", "yellow"];
        if (!colors.includes(this.color))
            this.color = "blue";
        let themes = ["dark", "light"];
        if (!themes.includes(this.theme))
            this.theme = "light";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let durations = ["slow", "medium", "fast"];
        if (this.autoDismissDuration !== null &&
            !durations.includes(this.autoDismissDuration)) {
            this.autoDismissDuration = "medium";
        }
    }
    componentDidLoad() {
        this.alertLinkEl = this.el.querySelectorAll("calcite-button")[0];
    }
    render() {
        const dir = getElementDir(this.el);
        const closeButton = (h("button", { class: "alert-close", "aria-label": "close", onClick: () => this.close(), ref: el => (this.closeButton = el) }, h("calcite-icon", { icon: "x", scale: "s" })));
        const count = (h("div", { class: `${this.alertQueue.length > 1 ? "active " : ""}alert-count` }, "+", this.alertQueue.length > 2 ? this.alertQueue.length - 1 : 1));
        const progress = h("div", { class: "alert-dismiss-progress" });
        const role = !this.active
            ? null
            : this.autoDismiss
                ? "alert"
                : "alertdialog";
        return (h(Host, { active: this.active, dir: dir, role: role }, this.icon ? this.setIcon() : null, h("div", { class: "alert-content" }, h("slot", { name: "alert-title" }), h("slot", { name: "alert-message" }), h("slot", { name: "alert-link" })), count, !this.autoDismiss ? closeButton : null, this.active && this.autoDismiss ? progress : null));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** open alert and emit the opened alert  */
    async open() {
        this.calciteAlertOpen.emit({
            requestedAlert: this.alertId,
            alertQueue: this.alertQueue
        });
    }
    /** close alert and emit the closed alert */
    async close() {
        this.calciteAlertClose.emit({
            requestedAlert: this.alertId,
            alertQueue: this.alertQueue
        });
    }
    /** focus the close button, if present and requested */
    async setFocus() {
        if (!this.closeButton && !this.alertLinkEl) {
            return;
        }
        if (this.alertLinkEl)
            this.alertLinkEl.setFocus();
        else if (this.closeButton) {
            this.closeButton.focus();
        }
    }
    /** based on the current alert determine which alert is active */
    determineActiveAlert() {
        this.alertQueueLength = this.alertQueue.length;
        this.currentAlert = this.alertQueue.length > 0 ? this.alertQueue[0] : null;
        if (!this.active && this.currentAlert === this.alertId) {
            setTimeout(() => (this.active = true), 300);
            if (this.autoDismiss) {
                setTimeout(() => this.close(), this.autoDismissDurations[this.autoDismissDuration]);
            }
        }
    }
    setIcon() {
        var path = this.iconDefaults[this.color];
        return (h("div", { class: "alert-icon" }, h("calcite-icon", { icon: path, filled: true, scale: "s" })));
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-alert",
        "$members$": {
            "active": [1540],
            "autoDismiss": [4, "auto-dismiss"],
            "autoDismissDuration": [1537, "auto-dismiss-duration"],
            "color": [1537],
            "theme": [1537],
            "scale": [1537],
            "icon": [4],
            "alertQueue": [16],
            "alertQueueLength": [2, "alert-queue-length"],
            "currentAlert": [1, "current-alert"],
            "open": [64],
            "close": [64],
            "setFocus": [64]
        },
        "$listeners$": [[8, "calciteAlertOpen", "alertOpen"], [8, "calciteAlertClose", "alertClose"], [8, "calciteAlertSync", "alertRegister"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

/** @slot default text slot for button text */
/** Any attributes placed on <calcite-button> component will propagate to the rendered child */
/** Passing a 'href' will render an anchor link, instead of a button. Role will be set to link, or button, depending on this. */
/** Using appearance=inline will also render as an anchor link. */
/** It is the consumers responsibility to add aria information, rel, target, for links, and any button attributes for form submission */
class CalciteButton {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** specify the color of the button, defaults to blue */
        this.color = "blue";
        /** specify the appearance style of the button, defaults to solid. Specifying "inline" will render the component as an anchor */
        this.appearance = "solid";
        /** Select theme (light or dark) */
        this.theme = "light";
        /** specify the scale of the button, defaults to m */
        this.scale = "m";
        /** specify the width of the button, defaults to auto */
        this.width = "auto";
        /** optionally add a calcite-loader component to the button, disabling interaction.  */
        this.loading = false;
        /** optionally add a round style to the button  */
        this.round = false;
        /** optionally add a floating style to the button - this should be positioned fixed or sticky */
        this.floating = false;
        /** optionally used with icon, select where to position the icon */
        this.iconPosition = "start";
        /** the node type of the rendered child element */
        this.childElType = "button";
        /** determine if there is slotted text for styling purposes */
        this.hasText = false;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        // act on a requested or nearby form based on type
        this.handleClick = (e) => {
            // this.type refers to type attribute, not child element type
            if (this.childElType === "button" && this.type !== "button") {
                const requestedForm = this.el.getAttribute("form");
                const targetForm = requestedForm
                    ? document.getElementsByName(`${requestedForm}`)[0]
                    : this.el.closest("form");
                if (targetForm) {
                    const targetFormSubmitFunction = targetForm.onsubmit;
                    switch (this.type) {
                        case "submit":
                            if (targetFormSubmitFunction)
                                targetFormSubmitFunction();
                            else if (targetForm.checkValidity())
                                targetForm.submit();
                            else
                                targetForm.reportValidity();
                            break;
                        case "reset":
                            targetForm.reset();
                            break;
                    }
                }
                e.preventDefault();
            }
        };
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let appearance = ["solid", "outline", "clear", "inline", "transparent"];
        if (!appearance.includes(this.appearance))
            this.appearance = "solid";
        let color = ["blue", "red", "dark", "light"];
        if (!color.includes(this.color))
            this.color = "blue";
        let scale = ["xs", "s", "m", "l", "xl"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let width = ["auto", "half", "full"];
        if (!width.includes(this.width))
            this.width = "auto";
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        let iconPosition = ["start", "end"];
        if (this.icon !== null && !iconPosition.includes(this.iconPosition))
            this.iconPosition = "start";
        this.childElType = this.href
            ? "a"
            : this.appearance === "inline"
                ? "span"
                : "button";
    }
    componentWillLoad() {
    }
    render() {
        const dir = getElementDir(this.el);
        const attributes = this.getAttributes();
        const Tag = this.childElType;
        const role = this.childElType === "span" ? "button" : null;
        const tabIndex = this.childElType === "span" ? 0 : null;
        const loader = (h("div", { class: "calcite-button--loader" }, h("calcite-loader", { "is-active": true, inline: true })));
        const iconScale = this.appearance === "inline" ||
            this.scale === "xs" ||
            this.scale === "s" ||
            this.scale === "m"
            ? "s"
            : this.scale === "l"
                ? "m"
                : "l";
        const iconEl = (h("calcite-icon", { class: "calcite-button--icon", icon: this.icon, scale: iconScale }));
        return (h(Host, { dir: dir, hasText: this.hasText }, h(Tag, Object.assign({}, attributes, { role: role, tabindex: tabIndex, onClick: e => this.handleClick(e), disabled: this.disabled, ref: el => (this.childEl = el) }), this.loading ? loader : null, this.icon && this.iconPosition === "start" ? iconEl : null, h("slot", null), this.icon && this.iconPosition === "end" ? iconEl : null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    async setFocus() {
        this.childEl.focus();
    }
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        let props = [
            "appearance",
            "color",
            "dir",
            "hasText",
            "icon",
            "iconPosition",
            "id",
            "loading",
            "scale",
            "width",
            "theme"
        ];
        return Array.from(this.el.attributes)
            .filter(a => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-button",
        "$members$": {
            "color": [1537],
            "appearance": [1537],
            "theme": [513],
            "scale": [1537],
            "width": [1537],
            "loading": [516],
            "round": [516],
            "floating": [516],
            "href": [513],
            "icon": [513],
            "iconPosition": [1537, "icon-position"],
            "disabled": [516],
            "setFocus": [64]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const CSS = {
    container: "container",
    header: "header",
    footer: "footer",
    title: "title",
    subtitle: "subtitle",
    thumbnailWrapper: "thumbnail-wrapper"
};

/**
 * @slot thumbnail - A slot for adding a thumnail to the card.
 * @slot - A slot for adding subheader/description content.
 * @slot title - A slot for adding a card title.
 * @slot subtitle - A slot for adding a card subtitle or short summary.
 * @slot footer-leading - A slot for adding a leading footer.
 * @slot footer-trailing - A slot for adding a trailing footer.
 */
/** Cards do not include a grid or bounding container
 * - cards will expand to fit the width of their container
*/
class CalciteCard {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
        this.loading = false;
        /** Indicates whether the card is selected. */
        this.selected = false;
        /** Indicates whether the card is selectable. */
        this.selectable = false;
        /**  The theme of the card.*/
        this.theme = "light";
        this.calciteCardSelected = createEvent(this, "calciteCardSelected", 7);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        let themes = ["dark", "light"];
        if (!themes.includes(this.theme))
            this.theme = "light";
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", { class: "calcite-card-container" }, this.loading ? (h("div", { class: "calcite-card-loader-container" }, h("calcite-loader", { class: "calcite-card-loader", "is-active": true }))) : null, h("section", { class: { [CSS.container]: true }, "aria-busy": this.loading }, this.selectable ? this.renderCheckbox() : null, this.renderThumbnail(), this.renderHeader(), h("div", { class: "card-content" }, h("slot", null)), this.renderFooter()))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    cardSelectClick() {
        this.selectCard();
    }
    cardSelectKeyDown(e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.selectCard();
                e.preventDefault();
                break;
        }
    }
    selectCard() {
        this.selected = !this.selected;
        this.calciteCardSelected.emit({
            element: this.el,
            selected: this.selected
        });
    }
    renderThumbnail() {
        const hasThumbnail = this.el.querySelector(`[slot=${"thumbnail" /* thumbnail */}]`);
        return hasThumbnail ? (h("div", { class: CSS.thumbnailWrapper }, h("slot", { name: "thumbnail" /* thumbnail */ }))) : null;
    }
    renderCheckbox() {
        return (h("div", { class: "card-checkbox-wrapper", onClick: () => this.cardSelectClick(), onKeyDown: e => this.cardSelectKeyDown(e) }, h("calcite-checkbox", { checked: this.selected })));
    }
    renderHeader() {
        const title = this.el.querySelector(`[slot=${"title" /* title */}]`);
        const subtitle = this.el.querySelector(`[slot=${"subtitle" /* subtitle */}]`);
        const hasHeader = title || subtitle;
        return hasHeader ? (h("header", { class: CSS.header }, h("slot", { name: "title" /* title */ }), h("slot", { name: "subtitle" /* subtitle */ }))) : null;
    }
    renderFooter() {
        const leadingFooter = this.el.querySelector(`[slot=${"footer-leading" /* footerLeading */}]`);
        const trailingFooter = this.el.querySelector(`[slot=${"footer-trailing" /* footerTrailing */}]`);
        const hasFooter = leadingFooter || trailingFooter;
        return hasFooter ? (h("footer", { class: CSS.footer }, h("slot", { name: "footer-leading" /* footerLeading */ }), h("slot", { name: "footer-trailing" /* footerTrailing */ }))) : null;
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-card",
        "$members$": {
            "loading": [516],
            "selected": [1540],
            "selectable": [1540],
            "theme": [1537]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteCheckbox {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** True if the checkbox is initially checked */
        this.checked = false;
        /**
         * True if the checkbox is initially indeterminate,
         * which is independent from its checked state
         * https://css-tricks.com/indeterminate-checkboxes/
         * */
        this.indeterminate = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** Size of the checkbox  */
        this.size = null;
        /** True if the checkbox is disabled */
        this.disabled = false;
        /** Determines what theme to use */
        this.theme = "light";
        this.toggle = () => {
            if (!this.disabled) {
                this.checked = !this.checked;
                this.indeterminate = false;
            }
        };
        this.indeterminatePath = "M4 7h8v2H4z";
        this.checkedPath = "M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z";
        this.getPath = () => this.indeterminate
            ? this.indeterminatePath
            : this.checked
                ? this.checkedPath
                : "";
        this.syncThisToProxyInput = () => {
            this.checked = this.inputProxy.hasAttribute("checked");
            this.name = this.inputProxy.name;
            this.value = this.inputProxy.value;
        };
        this.syncProxyInputToThis = () => {
            this.checked
                ? this.inputProxy.setAttribute("checked", "")
                : this.inputProxy.removeAttribute("checked");
            this.inputProxy.name = this.name;
            this.inputProxy.value = this.value;
        };
        this.calciteCheckboxChange = createEvent(this, "calciteCheckboxChange", 7);
    }
    onClick({ target }) {
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && target === this.inputProxy) ||
            (!this.el.closest("label") && target === this.el)) {
            this.toggle();
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.toggle();
        }
    }
    checkedWatcher() {
        this.calciteCheckboxChange.emit();
        this.checked
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    }
    connectedCallback() {
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        return (h(Host, { role: "checkbox", "aria-checked": this.checked.toString(), tabindex: this.disabled ? "-1" : "0" }, h("svg", { class: "check-svg", viewBox: "0 0 16 16" }, h("path", { d: this.getPath(), fill: "white" })), h("slot", null)));
    }
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["checkedWatcher"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-checkbox",
        "$members$": {
            "checked": [1540],
            "indeterminate": [1540],
            "name": [1537],
            "value": [1537],
            "size": [513],
            "disabled": [516],
            "theme": [513]
        },
        "$listeners$": [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteDateDay {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * day of the month to be shown.
         */
        this.day = 0;
        /**
         * Enables tells whether day enabled for the user click.
         */
        this.enable = true;
        /**
         * Selected tells whether day is selected.
         */
        this.selected = false;
        /**
         * Active tells whether day is Actively in focus.
         */
        this.active = false;
        this.calciteDaySelect = createEvent(this, "calciteDaySelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillUpdate() { }
    render() {
        return (h(Host, { class: `${this.active ? "active" : ""}
        ${this.enable ? "enabled" : "disabled"}
        ${this.selected ? "selected-day" : ""}`, role: "gridcell", tabindex: (this.selected || this.active) ? 0 : -1 }, h("span", { class: "day" }, this.day)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.enable && (this.selected = true) && this.calciteDaySelect.emit();
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            this.enable && (this.selected = true) && this.calciteDaySelect.emit();
        }
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-date-day",
        "$members$": {
            "day": [2],
            "enable": [4],
            "selected": [4],
            "active": [4]
        },
        "$listeners$": [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteDateMonth {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Month number starting 0 as January for which the calendar is shown.
         */
        this.month = 0;
        /**
         * Year for which the calendar is shown.
         */
        this.year = 0;
        /**
         * Sun by default
         * 0: Sunday
         * 1: Monday
         * 2: Tuesday
         * 3: Wednesday
         * 4: Thursday
         * 5: Friday
         * 6: Saturday
         */
        this.startOfWeek = 0;
        /**
         * pass the locale in which user wants to show the date.
         */
        this.locale = "en-US";
        this.calciteDateSelect = createEvent(this, "calciteDateSelect", 7);
        this.calciteActiveDateChange = createEvent(this, "calciteActiveDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillUpdate() { }
    render() {
        let weekDays = this.getLocalizedWeekday(), curMonDays = [
            ...Array(new Date(this.year, this.month + 1, 0).getDate()).keys()
        ], prevMonDays = this.getPrevMonthdays(this.month, this.year), nextMonDays = this.getNextMonthdays(this.month, this.year), splitDays = [], days = [
            ...prevMonDays.map(prev => (h("calcite-date-day", { day: prev, enable: false }))),
            ...curMonDays.map(cur => (h("calcite-date-day", { day: cur + 1, enable: this.validateDate(cur + 1, this.month, this.year), selected: this.isSelectedDate(this.year, this.month, cur + 1), active: this.activeDate.getDate() === cur + 1, onCalciteDaySelect: () => this.onSelectDate(cur + 1) }))),
            ...nextMonDays.map(next => (h("calcite-date-day", { day: next + 1, enable: false })))
        ];
        for (let i = 0; i < days.length; i += 7)
            splitDays.push(days.slice(i, i + 7));
        return (h(Host, null, h("div", { class: "calender", role: "grid" }, h("div", { class: "week-headers", role: "presentation" }, weekDays.map(weekday => (h("span", { class: "week-header", role: "columnheader" }, weekday)))), splitDays.map(days => (h("div", { class: "week-days", role: "row" }, days))))));
    }
    keyDownHandler(e) {
        switch (e.keyCode) {
            case UP:
                e.preventDefault();
                this.addDaysToActiveDate(-7);
                break;
            case RIGHT:
                e.preventDefault();
                this.addDaysToActiveDate(1);
                break;
            case DOWN:
                e.preventDefault();
                this.addDaysToActiveDate(7);
                break;
            case LEFT:
                e.preventDefault();
                this.addDaysToActiveDate(-1);
                break;
            case PAGE_UP:
                e.preventDefault();
                this.addMonthToActiveDate(-1);
                break;
            case PAGE_DOWN:
                e.preventDefault();
                this.addMonthToActiveDate(1);
                break;
            case HOME:
                e.preventDefault();
                this.activeDate.setDate(1);
                this.addDaysToActiveDate();
                break;
            case END:
                e.preventDefault();
                this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
                this.addDaysToActiveDate();
                break;
            case ENTER:
            case SPACE:
                e.preventDefault();
                this.selectedDate = this.activeDate;
                this.calciteDateSelect.emit();
                break;
            case ESCAPE:
                e.preventDefault();
                this.activeDate = this.selectedDate;
                this.calciteActiveDateChange.emit();
                break;
        }
    }
    mouseoverHandler(e) {
        let day = e.target.day || this.activeDate.getDate();
        if (!e.target.enable)
            return;
        if (day != this.activeDate.getDate()) {
            let [activeDay, activeMonth, activeYear] = [
                day,
                this.activeDate.getMonth(),
                this.activeDate.getFullYear()
            ];
            if (this.validateDate(activeDay, activeMonth, activeYear)) {
                this.activeDate = new Date(activeYear, activeMonth, activeDay);
                this.calciteActiveDateChange.emit();
            }
        }
    }
    addMonthToActiveDate(step) {
        let [activeDay, activeMonth, activeYear] = [
            this.activeDate.getDate(),
            this.activeDate.getMonth(),
            this.activeDate.getFullYear()
        ];
        activeMonth += step;
        if (activeMonth === 12) {
            activeMonth = 0;
            activeYear += 1;
        }
        if (activeMonth === -1) {
            activeMonth = 11;
            activeYear -= 1;
        }
        if (this.validateDate(activeDay, activeMonth, activeYear)) {
            this.activeDate = new Date(activeYear, activeMonth, activeDay);
            this.calciteActiveDateChange.emit();
        }
    }
    addDaysToActiveDate(step = 0) {
        let [activeDay, activeMonth, activeYear] = [
            this.activeDate.getDate(),
            this.activeDate.getMonth(),
            this.activeDate.getFullYear()
        ];
        activeDay += step;
        let noOfDaysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();
        let noOfDaysInPrevMonth = new Date(activeYear, activeMonth, 0).getDate();
        if (activeDay > noOfDaysInMonth) {
            activeDay -= noOfDaysInMonth;
            activeMonth += 1;
            if (activeMonth === 12) {
                activeMonth = 0;
                activeYear += 1;
            }
        }
        if (activeDay < 0) {
            activeDay = noOfDaysInPrevMonth + activeDay;
            activeMonth -= 1;
            if (activeMonth === -1) {
                activeMonth = 11;
                activeYear -= 1;
            }
        }
        if (this.validateDate(activeDay, activeMonth, activeYear)) {
            this.activeDate = new Date(activeYear, activeMonth, activeDay);
            this.calciteActiveDateChange.emit();
        }
    }
    onSelectDate(date) {
        this.selectedDate = new Date(this.year, this.month, date);
        this.calciteDateSelect.emit();
    }
    isSelectedDate(year, month, day) {
        let date = new Date(year, month, day);
        return date.toDateString().substr(0, 10) === this.selectedDate.toDateString().substr(0, 10);
    }
    validateDate(day, month, year) {
        let isValid = true;
        if (this.min) {
            let minYear = this.min.getFullYear();
            let minMonth = this.min.getMonth();
            let minDay = this.min.getDate();
            isValid =
                isValid &&
                    (minYear < year
                        ? true
                        : minYear === year && minMonth < month
                            ? true
                            : minMonth === month && minDay < day
                                ? true
                                : false);
        }
        if (this.max) {
            let maxYear = this.max.getFullYear();
            let maxMonth = this.max.getMonth();
            let maxDay = this.max.getDate();
            isValid =
                isValid &&
                    (maxYear > year
                        ? true
                        : maxYear === year && maxMonth > month
                            ? true
                            : maxMonth === month && maxDay > day
                                ? true
                                : false);
        }
        return isValid;
    }
    getPrevMonthdays(month, year) {
        let startDay = new Date(year, month, 1).getDay(), days = [], prevMonDays = new Date(year, month, 0).getDate();
        if (startDay === this.startOfWeek) {
            return days;
        }
        for (let i = (6 - this.startOfWeek + startDay) % 7; i >= 0; i--) {
            days.push(prevMonDays - i);
        }
        return days;
    }
    getNextMonthdays(month, year) {
        let endDay = new Date(year, month + 1, 0).getDay(), days = [];
        if (endDay === (this.startOfWeek + 6) % 7) {
            return days;
        }
        return [...Array((6 - (endDay - this.startOfWeek)) % 7).keys()];
    }
    getLocalizedWeekday() {
        let w = 1, startWeek = [], endWeek = [], date = new Date();
        for (; w < 8; w++) {
            date.setDate(w);
            let day = new Intl.DateTimeFormat(this.locale, {
                weekday: "short"
            }).format(date);
            date.getDay() === this.startOfWeek || startWeek.length > 0
                ? startWeek.push(day)
                : endWeek.push(day);
        }
        return [...startWeek, ...endWeek];
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-date-month",
        "$members$": {
            "month": [2],
            "year": [2],
            "selectedDate": [16],
            "activeDate": [16],
            "min": [16],
            "max": [16],
            "startOfWeek": [2, "start-of-week"],
            "locale": [1]
        },
        "$listeners$": [[0, "keydown", "keyDownHandler"], [1, "mouseover", "mouseoverHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteDateMonthHeader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Month number starting 0 as January for which the calendar is shown.
         */
        this.month = 0;
        /**
         * Year for which the calendar is shown.
         */
        this.year = 0;
        /**
         * pass the locale in which user wants to show the date.
         */
        this.locale = "en-US";
        /**
         * Localized string for previous month.
         */
        this.prevMonthLabel = "";
        /**
         * Localized string for next month.
         */
        this.nextMonthLabel = "";
        this.calciteMonthChange = createEvent(this, "calciteMonthChange", 7);
        this.calciteYearChange = createEvent(this, "calciteYearChange", 7);
    }
    monthChange() {
        this.calciteMonthChange.emit();
    }
    yearChange() {
        this.calciteYearChange.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillUpdate() { }
    render() {
        let localizedMonth = this.getLocalizedMonths()[this.month];
        return (h(Host, null, h("div", { class: "month-year", "aria-hidden": "true" }, h("button", { class: "left-icon", "aria-label": this.prevMonthLabel, onClick: () => this.selectPrevMonth() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", height: "16", width: "16" }, h("path", { d: "M11.783 14H9.017l-6-6 6-6h2.766l-6 6z" }))), h("div", { class: "month-year-text" }, h("span", { class: "month", role: "heading" }, localizedMonth), h("input", { class: "year", type: "number", value: this.year, min: this.min && this.min.getFullYear(), max: this.max && this.max.getFullYear(), onChange: event => this.onYearChange(event) })), h("button", { class: "right-icon", "aria-label": this.nextMonthLabel, onClick: () => this.selectNextMonth() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", height: "16", width: "16" }, h("path", { d: "M10.217 8l-6-6h2.766l6 6-6 6H4.217z" }))))));
    }
    selectPrevMonth() {
        if (this.month === 0) {
            if (this.validateYear(this.year - 1)) {
                this.year -= 1;
            }
            else {
                return;
            }
        }
        if (this.validateMonth((12 + this.month - 1) % 12, this.year)) {
            this.month = (12 + this.month - 1) % 12;
        }
    }
    selectNextMonth() {
        if (this.month === 11) {
            if (this.validateYear(this.year + 1)) {
                this.year += 1;
            }
            else {
                return;
            }
        }
        if (this.validateMonth((this.month + 1) % 12, this.year)) {
            this.month = (this.month + 1) % 12;
        }
    }
    validateYear(year) {
        let isValid = true;
        if (this.min) {
            isValid = isValid && year >= this.min.getFullYear();
        }
        if (this.max) {
            isValid = isValid && year <= this.max.getFullYear();
        }
        return isValid;
    }
    validateMonth(month, year) {
        let isValid = true;
        if (this.min) {
            isValid =
                isValid &&
                    (this.validateYear(year)
                        ? year === this.min.getFullYear()
                            ? month >= this.min.getMonth()
                            : true
                        : false);
        }
        if (this.max) {
            isValid =
                isValid &&
                    (this.validateYear(year)
                        ? year === this.max.getFullYear()
                            ? month <= this.max.getMonth()
                            : true
                        : false);
        }
        return isValid;
    }
    onYearChange(event) {
        this.year = parseInt(event.target.value);
    }
    getLocalizedMonths() {
        let m = 0, months = [], date = new Date();
        for (; m < 12; m++) {
            date.setMonth(m);
            months.push(new Intl.DateTimeFormat(this.locale, {
                month: "long"
            }).format(date));
        }
        return months;
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "month": ["monthChange"],
        "year": ["yearChange"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-date-month-header",
        "$members$": {
            "month": [2],
            "year": [2],
            "selectedDate": [16],
            "min": [16],
            "max": [16],
            "locale": [1],
            "prevMonthLabel": [1, "prev-month-label"],
            "nextMonthLabel": [1, "next-month-label"]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteDatePicker {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Value of the form control
         */
        this.value = "";
        /**
         * Name of the form control (useful for specifying input/label relationship)
         */
        this.min = "";
        /**
         * Value of the form control
         */
        this.max = "";
        /**
         * Localized string for place holder to the date picker input.
         */
        this.placeholder = "mm/dd/yyyy";
        /**
         * Localized string for previous month.
         */
        this.prevMonthLabel = "";
        /**
         * Localized string for next month.
         */
        this.nextMonthLabel = "";
        /**
         * Sun by default
         * 0: Sunday
         * 1: Monday
         * 2: Tuesday
         * 3: Wednesday
         * 4: Thursday
         * 5: Friday
         * 6: Saturday
         */
        this.startOfWeek = 0;
        /**
         * pass the locale in which user wants to show the date.
         */
        this.locale = "en-GB";
        /**
         * Input as Date
         */
        this.valueAsDate = !isNaN(Date.parse(this.value)) ? this.generateDate(this.value) : null;
        /**
         * Show no input for only calendar popup
         */
        this.noCalendarInput = false;
        /**
         * Expand or collapse when calendar does not have input.
         */
        this.showCalendar = false;
        /**
         * Active date.
         */
        this.activeDate = isNaN(Date.parse(this.value)) ? new Date() : this.generateDate(this.value);
        this.syncThisToProxyInput = () => {
            this.value = this.inputProxy.valueAsDate && this.inputProxy.valueAsDate.toISOString() || "";
            this.min = this.inputProxy.min;
            this.max = this.inputProxy.max;
        };
        this.syncProxyInputToThis = () => {
            this.inputProxy.valueAsDate = this.valueAsDate;
            this.inputProxy.min = this.min;
            this.inputProxy.max = this.max;
        };
        this.calciteDateChange = createEvent(this, "calciteDateChange", 7);
    }
    onNameChanged(newValue) {
        if (!isNaN(Date.parse(newValue))) {
            this.valueAsDate = this.generateDate(newValue);
            this.activeDate = this.generateDate(newValue);
        }
    }
    connectedCallback() {
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        let selectedDate = this.valueAsDate || new Date();
        return (h(Host, { role: "application", expanded: this.showCalendar }, !this.noCalendarInput && h("div", { class: `date-input-wrapper ${this.showCalendar ? "expanded" : ""}`, role: "application" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "calendar-icon", viewBox: "0 0 16 16", width: "16", height: "16" }, h("path", { d: "M16 16H0V6h16zM3 7H1v2h2zm3 0H4v2h2zm3 0H7v2h2zm3 0h-2v2h2zm3 0h-2v2h2zM3 10H1v2h2zm3 0H4v2h2zm3 0H7v2h2zm3 0h-2v2h2zm3 0h-2v2h2zM3 13H1v2h2zm3 0H4v2h2zm3 0H7v2h2zm3 0h-2v2h2zm3 0h-2v2h2zM5 2V1h6v1zm9-1v1h1v2H1V2h1V1H0v4h16V1zM4 0H3v2h1zm9 0h-1v2h1z" })), h("input", { type: "text", placeholder: this.placeholder, value: this.valueAsDate ? new Intl.DateTimeFormat(this.locale).format(this.valueAsDate) : "", class: "date-input", onFocus: () => this.expandCalendar(), onInput: (e) => this.setDate(e.target) })), this.showCalendar && (h("div", { class: "calendar-picker-wrapper" }, h("calcite-date-month-header", { month: this.getMonth(), year: this.getYear(), selectedDate: selectedDate, prevMonthLabel: this.prevMonthLabel, nextMonthLabel: this.nextMonthLabel, locale: this.locale, min: this.min ? new Date(this.min) : null, max: this.max ? new Date(this.max) : null, onCalciteMonthChange: e => this.setMonth(e.target), onCalciteYearChange: e => this.setYear(e.target) }), h("calcite-date-month", { month: this.getMonth(), year: this.getYear(), min: this.min ? new Date(this.min) : null, max: this.max ? new Date(this.max) : null, selectedDate: selectedDate, activeDate: this.activeDate, startOfWeek: this.startOfWeek, locale: this.locale, onCalciteDateSelect: evt => { this.closeCalendar(); this.setDate(evt.target); }, onCalciteActiveDateChange: evt => this.setActiveDate(evt.target) }))), h("slot", null)));
    }
    setActiveDate(target) {
        this.activeDate = target.activeDate;
    }
    expandCalendar() {
        this.showCalendar = true;
    }
    closeCalendar() {
        this.showCalendar = false;
    }
    getMonth() {
        return this.activeDate.getMonth();
    }
    getYear() {
        return this.activeDate.getFullYear();
    }
    setMonth(target) {
        this.activeDate = new Date(this.activeDate.setMonth(target.month));
    }
    setYear(target) {
        this.activeDate = new Date(this.activeDate.setFullYear(target.year));
    }
    setDate(target) {
        this.value = isNaN(Date.parse(target.value)) ? target.selectedDate ? target.selectedDate.toISOString() : this.value
            : target.value;
        this.syncProxyInputToThis();
        this.calciteDateChange.emit();
    }
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "date";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
    }
    generateDate(dateString) {
        let date = new Date(dateString);
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["onNameChanged"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-date-picker",
        "$members$": {
            "value": [513],
            "min": [513],
            "max": [513],
            "placeholder": [513],
            "prevMonthLabel": [1, "prev-month-label"],
            "nextMonthLabel": [1, "next-month-label"],
            "startOfWeek": [2, "start-of-week"],
            "locale": [1],
            "valueAsDate": [16],
            "noCalendarInput": [4, "no-calendar-input"],
            "showCalendar": [4, "show-calendar"],
            "activeDate": [32]
        },
        "$listeners$": [[0, "blur", "closeCalendar"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteDropdown {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the alignment of dropdrown, defaults to left */
        this.alignment = "left";
        /** specify the theme of the dropdown, defaults to light */
        this.theme = "light";
        /** specify the scale of dropdrown, defaults to m */
        this.scale = "m";
        /** specify the width of dropdrown, defaults to m */
        this.width = "m";
        /** specify whether the dropdown is opened by hover or click of the trigger element */
        this.type = "click";
        /** created list of dropdown items */
        this.items = [];
        /** keep track of whether the groups have been sorted so we don't re-sort */
        this.sorted = false;
        /** unique id for dropdown */
        /** @internal */
        this.dropdownId = `calcite-dropdown-${guid()}`;
        this.sortItems = (items) => items
            .sort((a, b) => a.position - b.position)
            .concat.apply([], this.items.map(item => item.items));
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let alignment = ["left", "right", "center"];
        if (!alignment.includes(this.alignment))
            this.alignment = "left";
        let theme = ["light", "dark"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let width = ["s", "m", "l"];
        if (!width.includes(this.width))
            this.width = "m";
        let type = ["hover", "click"];
        if (!type.includes(this.type))
            this.type = "hover";
    }
    componentDidLoad() {
        this.trigger = this.el.querySelector("[slot=dropdown-trigger]");
        if (!this.sorted) {
            this.items = this.sortItems(this.items);
            this.sorted = true;
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const expanded = this.active.toString();
        return (h(Host, { dir: dir, active: this.active, id: this.dropdownId }, h("slot", { name: "dropdown-trigger", "aria-haspopup": "true", "aria-expanded": expanded }), h("div", { class: "calcite-dropdown-wrapper", role: "menu" }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    openDropdown(e) {
        if (e.target.getAttribute("slot") === "dropdown-trigger") {
            this.openCalciteDropdown(e);
            e.preventDefault();
        }
    }
    closeCalciteDropdownOnClick(e) {
        if (this.active && e.target.offsetParent.id !== this.dropdownId)
            this.closeCalciteDropdown();
    }
    closeCalciteDropdownOnEvent() {
        this.closeCalciteDropdown();
    }
    keyDownHandler(e) {
        if (e.target.getAttribute("slot") === "dropdown-trigger") {
            if (e.target.nodeName !== "BUTTON" &&
                e.target.nodeName !== "CALCITE-BUTTON") {
                switch (e.keyCode) {
                    case SPACE:
                    case ENTER:
                        this.openCalciteDropdown(e);
                        break;
                    case ESCAPE:
                        this.closeCalciteDropdown();
                        break;
                }
            }
            else if (e.keyCode === ESCAPE || (e.shiftKey && e.keyCode === TAB)) {
                this.closeCalciteDropdown();
            }
        }
    }
    mouseoverHandler(e) {
        if (this.type === "hover") {
            this.openCalciteDropdown(e);
        }
    }
    mouseoffHandler() {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    }
    calciteDropdownItemKeyEvent(item) {
        let e = item.detail.item;
        // handle edge
        let itemToFocus = e.target.nodeName !== "A" ? e.target : e.target.parentNode;
        let isFirstItem = this.itemIndex(itemToFocus) === 0;
        let isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (e.keyCode) {
            case TAB:
                if (isLastItem && !e.shiftKey)
                    this.closeCalciteDropdown();
                else if (isFirstItem && e.shiftKey)
                    this.closeCalciteDropdown();
                else if (e.shiftKey)
                    this.focusPrevItem(itemToFocus);
                else
                    this.focusNextItem(itemToFocus);
                break;
            case DOWN:
                this.focusNextItem(itemToFocus);
                break;
            case UP:
                this.focusPrevItem(itemToFocus);
                break;
            case HOME:
                this.focusFirstItem();
                break;
            case END:
                this.focusLastItem();
                break;
        }
    }
    calciteDropdownMouseover(item) {
        const itemToFocus = item.detail.target;
        itemToFocus.focus();
    }
    registerCalciteDropdownGroup(e) {
        const items = {
            items: e.detail.items,
            position: e.detail.position
        };
        this.items.push(items);
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    closeCalciteDropdown() {
        this.active = false;
        this.trigger.focus();
    }
    focusFirstItem() {
        const firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    }
    itemIndex(e) {
        return this.items.indexOf(e);
    }
    getFocusableElement(item) {
        const target = item && item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        target.focus();
    }
    openCalciteDropdown(e) {
        this.active = !this.active;
        // if invoked by key, focus item, and accomodate animation time
        if (!e.detail && e.type !== "mouseenter") {
            setTimeout(() => this.focusFirstItem(), 50);
        }
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-dropdown",
        "$members$": {
            "active": [1540],
            "alignment": [1537],
            "theme": [1537],
            "scale": [1537],
            "width": [1537],
            "type": [1537]
        },
        "$listeners$": [[0, "click", "openDropdown"], [8, "click", "closeCalciteDropdownOnClick"], [0, "closeCalciteDropdown", "closeCalciteDropdownOnEvent"], [0, "keydown", "keyDownHandler"], [1, "mouseenter", "mouseoverHandler"], [1, "mouseleave", "mouseoffHandler"], [0, "calciteDropdownItemKeyEvent", "calciteDropdownItemKeyEvent"], [0, "calciteDropdownItemMouseover", "calciteDropdownMouseover"], [0, "registerCalciteDropdownGroup", "registerCalciteDropdownGroup"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteDropdownGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),
         none (no active items), defaults to single */
        this.selectionMode = "single";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** unique id for dropdown group */
        this.dropdownGroupId = `calcite-dropdown-group-${guid()}`;
        this.sortItems = (items) => items.sort((a, b) => a.position - b.position).map(a => a.item);
        this.calciteDropdownItemHasChanged = createEvent(this, "calciteDropdownItemHasChanged", 7);
        this.registerCalciteDropdownGroup = createEvent(this, "registerCalciteDropdownGroup", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let selectionMode = ["multi", "single", "none"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "single";
    }
    componentDidLoad() {
        this.groupPosition = this.getGroupPosition();
        this.items = this.sortItems(this.items);
        this.registerCalciteDropdownGroup.emit({
            items: this.items,
            position: this.groupPosition,
            groupId: this.dropdownGroupId
        });
    }
    render() {
        const groupTitle = this.groupTitle ? (h("span", { class: "dropdown-title" }, this.groupTitle)) : null;
        return (h(Host, null, groupTitle, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    registerCalciteDropdownItem(event) {
        const item = {
            item: event.target,
            position: event.detail.position
        };
        this.items.push(item);
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.calciteDropdownItemHasChanged.emit({
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getGroupPosition() {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-dropdown-group",
        "$members$": {
            "groupTitle": [513, "group-title"],
            "selectionMode": [1537, "selection-mode"]
        },
        "$listeners$": [[0, "registerCalciteDropdownItem", "registerCalciteDropdownItem"], [0, "calciteDropdownItemSelected", "updateActiveItemOnChange"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteDropdownItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.dropdownItemId = `calcite-dropdown-item-${guid()}`;
        /** what selection mode is the parent dropdown group in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "single");
        this.calciteDropdownItemKeyEvent = createEvent(this, "calciteDropdownItemKeyEvent", 7);
        this.calciteDropdownItemMouseover = createEvent(this, "calciteDropdownItemMouseover", 7);
        this.calciteDropdownItemSelected = createEvent(this, "calciteDropdownItemSelected", 7);
        this.closeCalciteDropdown = createEvent(this, "closeCalciteDropdown", 7);
        this.registerCalciteDropdownItem = createEvent(this, "registerCalciteDropdownItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteDropdownItem.emit({
            position: this.itemPosition
        });
    }
    render() {
        const dir = getElementDir(this.el);
        const scale = getElementProp(this.el, "scale", "m");
        const iconScale = scale === "s" || scale === "m" ? "s" : "m";
        const iconStartEl = (h("calcite-icon", { class: "dropdown-item-icon-start", icon: this.iconStart, scale: iconScale }));
        const iconEndEl = (h("calcite-icon", { class: "dropdown-item-icon-end", icon: this.iconEnd, scale: iconScale }));
        const slottedContent = this.iconStart && this.iconEnd ? ([iconStartEl, h("slot", null), iconEndEl]) : this.iconStart ? ([iconStartEl, h("slot", null)]) : this.iconEnd ? ([h("slot", null), iconEndEl]) : (h("slot", null));
        const contentEl = !this.href ? (slottedContent) : (h("a", { href: this.href, title: this.linkTitle }, slottedContent));
        return (h(Host, { dir: dir, tabindex: "0", role: "menuitem", "aria-selected": this.active.toString(), isLink: this.href }, contentEl));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.emitRequestedItem();
    }
    onMouseover(e) {
        this.calciteDropdownItemMouseover.emit(e);
    }
    keyDownHandler(e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.emitRequestedItem();
                if (e.path && e.path[0].nodeName === "A")
                    e.click();
                break;
            case ESCAPE:
                this.closeCalciteDropdown.emit();
                break;
            case TAB:
            case UP:
            case DOWN:
            case HOME:
            case END:
                this.calciteDropdownItemKeyEvent.emit({ item: e });
                break;
        }
        e.preventDefault();
    }
    registerCalciteDropdownGroup(event) {
        this.currentDropdownGroup = event.detail.groupId;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multi":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = true;
                else if (this.requestedDropdownGroup === this.currentDropdownGroup)
                    this.active = false;
                break;
            case "none":
                this.active = false;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteDropdownItemSelected.emit({
            requestedDropdownItem: this.dropdownItemId,
            requestedDropdownGroup: this.currentDropdownGroup
        });
        this.closeCalciteDropdown.emit();
    }
    getItemPosition() {
        const group = this.el.closest("calcite-dropdown-group");
        return Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el);
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-dropdown-item",
        "$members$": {
            "active": [1540],
            "href": [1],
            "linkTitle": [1, "link-title"],
            "iconStart": [513, "icon-start"],
            "iconEnd": [513, "icon-end"]
        },
        "$listeners$": [[0, "click", "onClick"], [1, "mouseover", "onMouseover"], [0, "keydown", "keyDownHandler"], [16, "registerCalciteDropdownGroup", "registerCalciteDropdownGroup"], [16, "calciteDropdownItemHasChanged", "updateActiveItemOnChange"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteExample {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Be sure to add a jsdoc comment describing your property for the generated readme file.
         * If your property should be hidden from documentation, you can use the `@internal` tag
         */
        this.property = "default";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.state = "default";
        this.open = createEvent(this, "open", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillUpdate() { }
    render() {
        console.log(this.state);
        return h(Host, null);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick(e) {
        console.log(e);
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Add a jsdoc comment describing your method and it's parameters (use `@param`).
     */
    async doThing() {
        return Promise.resolve(this.privateMethod());
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    privateMethod() { }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-example",
        "$members$": {
            "property": [1],
            "state": [32],
            "doThing": [64]
        },
        "$listeners$": [[0, "click", "onClick"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const CSS$1 = {
    icon: "icon",
    mirrored: "mirrored"
};

const scaleToPx = {
    s: 16,
    m: 24,
    l: 32
};

class CalciteIcon {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * When true, the icon will be filled.
         */
        this.filled = false;
        /**
         * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
         */
        this.icon = null;
        /**
         * When true, the icon will be mirrored when the element direction is 'rtl'.
         */
        this.mirrored = false;
        /**
         * Icon scale. Can be "s" | "m" | "l".
         */
        this.scale = "m";
        /**
         * Icon theme. Can be "light" or "dark".
         */
        this.theme = "light";
        this.visible = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.waitUntilVisible(() => {
            this.visible = true;
            this.loadIconPathData();
        });
    }
    disconnectedCallback() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = null;
        }
    }
    async componentWillLoad() {
        this.loadIconPathData();
    }
    render() {
        const { el, mirrored, pathData, scale, textLabel } = this;
        const dir = getElementDir(el);
        const size = scaleToPx[scale];
        const semantic = !!textLabel;
        return (h(Host, { "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, h("svg", { class: {
                [CSS$1.mirrored]: dir === "rtl" && mirrored
            }, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", height: size, width: size, viewBox: `0 0 ${size} ${size}` }, h("path", { d: pathData }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    async loadIconPathData() {
        {
            return;
        }
    }
    waitUntilVisible(callback) {
        {
            callback();
            return;
        }
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "icon": ["loadIconPathData"],
        "filled": ["loadIconPathData"],
        "size": ["loadIconPathData"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-icon",
        "$members$": {
            "filled": [516],
            "icon": [513],
            "mirrored": [516],
            "scale": [513],
            "textLabel": [1, "text-label"],
            "theme": [513],
            "pathData": [32],
            "visible": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteLoader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Show the loader
         */
        this.isActive = false;
        /**
         * Inline loaders are smaller and will appear to the left of the text
         */
        this.inline = false;
        /**
         * Use indeterminate if finding actual progress value is impossible
         */
        this.type = "indeterminate";
        /**
         * Percent complete of 100, only valid for determinate indicators
         */
        this.value = 0;
        /**
         * Text which should appear under the loading indicator (optional)
         */
        this.text = "";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.loaderBarOffsets = [0, 0, 0];
        /**
         * @internal
         */
        this.loaderBarRates = [1, 2.25, 3.5];
        /**
         * @internal
         */
        this.isEdge = false;
        /**
         * @internal
         */
        this.animationID = null;
        /**
         * @internal
         */
        this.guid = `calcite-loader-${guid()}`;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        this.isEdge = /Edge/.test(navigator.userAgent);
        if (this.isEdge) {
            this.updateOffset();
        }
    }
    componentDidUnload() {
        if (this.animationID) {
            window.cancelAnimationFrame(this.animationID);
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const id = this.el.id || this.guid;
        const ariaAttributes = {
            "aria-valuenow": this.value,
            "aria-valuemin": 0,
            "aria-valuemax": 100
        };
        const size = this.inline ? 16 : 56;
        const viewbox = this.inline ? "0 0 16 16" : "0 0 56 56";
        const isDeterminate = this.type === "determinate";
        const styleProperties = {};
        if (this.isEdge) {
            styleProperties["--calcite-loader-offset"] = `${this.loaderBarOffsets[0]}%`;
            styleProperties["--calcite-loader-offset2"] = `${this.loaderBarOffsets[1]}%`;
            styleProperties["--calcite-loader-offset3"] = `${this.loaderBarOffsets[2]}%`;
        }
        const progress = {
            "--calcite-loader-progress": `${-400 - this.value * 4}%`
        };
        return (h(Host, Object.assign({ id: id, dir: dir, role: "progressbar" }, (this.type === "determinate" ? ariaAttributes : {}), { style: styleProperties }), h("svg", { viewBox: viewbox, class: "loader__square" }, h("rect", { width: size, height: size })), h("svg", { viewBox: viewbox, class: "loader__square loader__square--2" }, h("rect", { width: size, height: size })), h("svg", { viewBox: viewbox, class: "loader__square loader__square--3", style: isDeterminate ? progress : {} }, h("rect", { width: size, height: size })), this.text ? h("div", { class: "loader__text" }, this.text) : "", this.value ? (h("div", { class: "loader__percentage" }, Math.floor(this.value))) : ("")));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    updateOffset() {
        this.loaderBarOffsets = this.rotateLoaderBars(this.loaderBarOffsets);
        this.animationID = window.requestAnimationFrame(() => this.updateOffset());
    }
    /**
     * @internal
     */
    rotateLoaderBars(barOffsets) {
        return barOffsets.map((offset, i) => {
            if (offset > -400) {
                return offset - this.loaderBarRates[i];
            }
            else {
                return 0;
            }
        });
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-loader",
        "$members$": {
            "isActive": [1540, "is-active"],
            "inline": [1540],
            "type": [1537],
            "value": [2],
            "text": [1],
            "noPadding": [4, "no-padding"],
            "loaderBarOffsets": [32],
            "isEdge": [32]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
    let matches = [];
    // If the depth is above the max depth, abort the searching here.
    if (depth >= maxDepth) {
        return matches;
    }
    // Traverses a slot element
    const traverseSlot = ($slot) => {
        // Only check nodes that are of the type Node.ELEMENT_NODE
        // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        const assignedNodes = $slot.assignedNodes().filter(node => node.nodeType === 1);
        if (assignedNodes.length > 0) {
            return queryShadowRoot(assignedNodes[0].parentElement, skipNode, isMatch, maxDepth, depth + 1);
        }
        return [];
    };
    // Go through each child and continue the traversing if necessary
    // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
    // Therefore we fallback to an empty array if it is undefined.
    const children = Array.from(root.children || []);
    for (const $child of children) {
        // Check if the node and its descendants should be skipped
        if (skipNode($child)) {
            continue;
        }
        // If the child matches we always add it
        if (isMatch($child)) {
            matches.push($child);
        }
        if ($child.shadowRoot != null) {
            matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
        }
        else if ($child.tagName === "SLOT") {
            matches.push(...traverseSlot($child));
        }
        else {
            matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
        }
    }
    return matches;
}

/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
    return $elem.hasAttribute("hidden")
        || ($elem.hasAttribute("aria-hidden") && $elem.getAttribute("aria-hidden") !== "false")
        // A quick and dirty way to check whether the element is hidden.
        // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
        // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
        // we won't be able to catch it here. We accept it due to the huge performance benefits.
        || $elem.style.display === `none`
        || $elem.style.opacity === `0`
        || $elem.style.visibility === `hidden`
        || $elem.style.visibility === `collapse`;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
    return $elem.hasAttribute("disabled")
        || ($elem.hasAttribute("aria-disabled") && $elem.getAttribute("aria-disabled") !== "false");
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
    // Discard elements that are removed from the tab order.
    if ($elem.getAttribute("tabindex") === "-1" || isHidden($elem) || isDisabled($elem)) {
        return false;
    }
    return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute("tabindex")
        // Anchor tags or area tags with a href set
        || ($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) && $elem.hasAttribute("href")
        // Form elements which are not disabled
        || ($elem instanceof HTMLButtonElement
            || $elem instanceof HTMLInputElement
            || $elem instanceof HTMLTextAreaElement
            || $elem instanceof HTMLSelectElement)
        // IFrames
        || $elem instanceof HTMLIFrameElement);
}

let timeouts = new Map();
/**
 * Debounces a callback.
 * @param cb
 * @param ms
 * @param id
 */
function debounce(cb, ms, id) {
    // Clear current timeout for id
    const timeout = timeouts.get(id);
    if (timeout != null) {
        window.clearTimeout(timeout);
    }
    // Set new timeout
    timeouts.set(id, window.setTimeout(() => {
        cb();
        timeouts.delete(id);
    }, ms));
}

/**
 * Template for the focus trap.
 */
const template = document.createElement("template");
template.innerHTML = `
	<div id="start"></div>
	<slot></slot>
	<div id="backup"></div>
	<div id="end"></div>
`;
/**
 * Focus trap web component.
 * @slot - Default content.
 */
class FocusTrap extends HTMLElement {
    /**
     * Attaches the shadow root.
     */
    constructor() {
        super();
        // The debounce id is used to distinguish this focus trap from others when debouncing
        this.debounceId = Math.random().toString();
        this._focused = false;
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(template.content.cloneNode(true));
        this.focusLastElement = this.focusLastElement.bind(this);
        this.focusFirstElement = this.focusFirstElement.bind(this);
        this.onFocusIn = this.onFocusIn.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    }
    // Whenever one of these attributes changes we need to render the template again.
    static get observedAttributes() {
        return ["inactive"];
    }
    /**
     * Determines whether the focus trap is active or not.
     * @attr
     */
    get inactive() {
        return this.hasAttribute("inactive");
    }
    set inactive(value) {
        value
            ? this.setAttribute("inactive", "")
            : this.removeAttribute("inactive");
    }
    /**
     * Returns whether the element currently has focus.
     */
    get focused() {
        return this._focused;
    }
    /**
     * Hooks up the element.
     */
    connectedCallback() {
        this.$backup = this.shadowRoot.querySelector("#backup");
        this.$start = this.shadowRoot.querySelector("#start");
        this.$end = this.shadowRoot.querySelector("#end");
        this.$start.addEventListener("focus", this.focusLastElement);
        this.$end.addEventListener("focus", this.focusFirstElement);
        // Focus out is called every time the user tabs around inside the element
        this.addEventListener("focusin", this.onFocusIn);
        this.addEventListener("focusout", this.onFocusOut);
        this.render();
    }
    /**
     * Tears down the element.
     */
    disconnectedCallback() {
        this.$start.removeEventListener("focus", this.focusLastElement);
        this.$end.removeEventListener("focus", this.focusFirstElement);
        this.removeEventListener("focusin", this.onFocusIn);
        this.removeEventListener("focusout", this.onFocusOut);
    }
    /**
     * When the attributes changes we need to re-render the template.
     */
    attributeChangedCallback() {
        this.render();
    }
    /**
     * Focuses the first focusable element in the focus trap.
     */
    focusFirstElement() {
        this.trapFocus();
    }
    /**
     * Focuses the last focusable element in the focus trap.
     */
    focusLastElement() {
        this.trapFocus(true);
    }
    /**
     * Returns a list of the focusable children found within the element.
     */
    getFocusableElements() {
        return queryShadowRoot(this, isHidden, isFocusable);
    }
    /**
     * Focuses on either the last or first focusable element.
     * @param {boolean} trapToEnd
     */
    trapFocus(trapToEnd) {
        if (this.inactive)
            return;
        let focusableChildren = this.getFocusableElements();
        if (focusableChildren.length > 0) {
            if (trapToEnd) {
                focusableChildren[focusableChildren.length - 1].focus();
            }
            else {
                focusableChildren[0].focus();
            }
            this.$backup.setAttribute("tabindex", "-1");
        }
        else {
            // If there are no focusable children we need to focus on the backup
            // to trap the focus. This is a useful behavior if the focus trap is
            // for example used in a dialog and we don't want the user to tab
            // outside the dialog even though there are no focusable children
            // in the dialog.
            this.$backup.setAttribute("tabindex", "0");
            this.$backup.focus();
        }
    }
    /**
     * When the element gains focus this function is called.
     */
    onFocusIn() {
        this.updateFocused(true);
    }
    /**
     * When the element looses its focus this function is called.
     */
    onFocusOut() {
        this.updateFocused(false);
    }
    /**
     * Updates the focused property and updates the view.
     * The update is debounced because the focusin and focusout out
     * might fire multiple times in a row. We only want to render
     * the element once, therefore waiting until the focus is "stable".
     * @param value
     */
    updateFocused(value) {
        debounce(() => {
            if (this.focused !== value) {
                this._focused = value;
                this.render();
            }
        }, 0, this.debounceId);
    }
    /**
     * Updates the template.
     */
    render() {
        if (!this.isConnected)
            return;
        this.$start.setAttribute("tabindex", !this.focused || this.inactive ? `-1` : `0`);
        this.$end.setAttribute("tabindex", !this.focused || this.inactive ? `-1` : `0`);
        this.focused
            ? this.setAttribute("focused", "")
            : this.removeAttribute("focused");
    }
}
if (window && window.customElements) {
    window.customElements.define("focus-trap", FocusTrap);
}

class CalciteModal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Optionally pass a function to run before close */
        this.beforeClose = () => Promise.resolve();
        /** Aria label for the close button */
        this.closeLabel = "Close";
        /** Set the overall size of the modal */
        this.size = "small";
        /** Select theme (light or dark) */
        this.theme = "light";
        this.calciteModalOpen = createEvent(this, "calciteModalOpen", 7);
        this.calciteModalClose = createEvent(this, "calciteModalClose", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        const theme = getElementTheme(this.el);
        return (h(Host, { role: "dialog", "aria-modal": "true", class: { "is-active": this.isActive }, dir: dir, theme: theme }, h("div", { class: "modal" }, h("div", { "data-focus-fence": "true", tabindex: "0", onFocus: this.focusLastElement.bind(this) }), h("div", { class: "modal__header" }, h("button", { class: "modal__close", "aria-label": this.closeLabel, ref: el => (this.closeButton = el), onClick: () => this.close() }, h("calcite-icon", { icon: "x", scale: "m" })), h("header", { class: "modal__title" }, h("slot", { name: "header" }))), h("div", { class: {
                modal__content: true,
                "modal__content--spaced": !this.noPadding
            }, ref: el => (this.modalContent = el) }, h("slot", { name: "content" })), h("div", { class: "modal__footer" }, h("span", { class: "modal__back" }, h("slot", { name: "back" })), h("span", { class: "modal__secondary" }, h("slot", { name: "secondary" })), h("span", { class: "modal__primary" }, h("slot", { name: "primary" }))), h("div", { "data-focus-fence": "true", tabindex: "0", onFocus: this.focusFirstElement.bind(this) }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    handleEscape(e) {
        if (this.isActive && !this.disableEscape && e.key === "Escape") {
            this.close();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Open the modal */
    async open() {
        this.previousActiveElement = document.activeElement;
        this.isActive = true;
        // wait for the modal to open, then handle focus.
        return new Promise(resolve => {
            setTimeout(() => {
                this.focusElement(this.firstFocus);
                resolve(this.el);
            }, 300);
            document.documentElement.classList.add("overflow-hidden");
            this.calciteModalOpen.emit();
        });
    }
    /** Close the modal, first running the `beforeClose` method */
    async close() {
        return this.beforeClose(this.el).then(() => {
            this.isActive = false;
            this.previousActiveElement.focus();
            document.documentElement.classList.remove("overflow-hidden");
            this.calciteModalClose.emit();
            return new Promise(resolve => {
                setTimeout(() => resolve(this.el), 300);
            });
        });
    }
    /** Focus first interactive element */
    async focusElement(el) {
        if (el) {
            el.focus();
            return;
        }
        const focusableElements = queryShadowRoot(this.el, isHidden, isFocusable);
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
        else {
            this.closeButton && this.closeButton.focus();
        }
    }
    /** Set the scroll top of the modal content */
    async scrollContent(top = 0, left = 0) {
        if (this.modalContent) {
            if (this.modalContent.scrollTo) {
                this.modalContent.scrollTo({ top, left, behavior: "smooth" });
            }
            else {
                this.modalContent.scrollTop = top;
                this.modalContent.scrollLeft = left;
            }
        }
    }
    focusFirstElement() {
        this.closeButton && this.closeButton.focus();
    }
    focusLastElement() {
        const focusableElements = queryShadowRoot(this.el, isHidden, isFocusable).filter(el => !el.getAttribute("data-focus-fence"));
        if (focusableElements.length > 0) {
            focusableElements[focusableElements.length - 1].focus();
        }
        else {
            this.closeButton && this.closeButton.focus();
        }
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-modal",
        "$members$": {
            "beforeClose": [16],
            "closeLabel": [1, "close-label"],
            "docked": [516],
            "firstFocus": [16],
            "disableEscape": [4, "disable-escape"],
            "size": [513],
            "color": [513],
            "theme": [513],
            "noPadding": [4, "no-padding"],
            "isActive": [32],
            "open": [64],
            "close": [64],
            "focusElement": [64],
            "scrollContent": [64]
        },
        "$listeners$": [[8, "keyup", "handleEscape"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

/** Notices are intended to be used to present users with important-but-not-crucial contextual tips or copy. Because
 * notices are displayed inline, a common use case is displaying them on page-load to present users with short hints or contextual copy.
 * They are optionally dismissible - useful for keeping track of whether or not a user has dismissed the notice. You can also choose not
 * to display a notice on page load and set the "active" attribute as needed to contextually provide inline messaging to users.
 */
/**
 * @slot notice-title - Title of the notice (optional)
 * @slot notice-message - Main text of the notice
 * @slot notice-link - Optional action to take from the notice (undo, try again, link to page, etc.)
 */
class CalciteNotice {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //---------------------------------------------------------------------------
        /** Is the notice currently active or not */
        this.active = false;
        /** Color for the notice (will apply to top border and icon) */
        this.color = "blue";
        /** Select theme (light or dark) */
        this.theme = "light";
        /** specify the scale of the notice, defaults to m */
        this.scale = "m";
        /** specify the scale of the button, defaults to m */
        this.width = "auto";
        /** Select theme (light or dark) */
        this.dismissible = false;
        /** If false, no icon will be shown in the notice */
        this.icon = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** Unique ID for this notice */
        this.noticeId = this.el.id;
        this.iconDefaults = {
            green: "checkCircle",
            yellow: "exclamationMarkTriangle",
            red: "exclamationMarkTriangle",
            blue: "lightbulb"
        };
        this.calciteNoticeClose = createEvent(this, "calciteNoticeClose", 7);
        this.calciteNoticeOpen = createEvent(this, "calciteNoticeOpen", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let colors = ["blue", "red", "green", "yellow"];
        if (!colors.includes(this.color))
            this.color = "blue";
        let themes = ["dark", "light"];
        if (!themes.includes(this.theme))
            this.theme = "light";
        let scales = ["s", "m", "l"];
        if (!scales.includes(this.scale))
            this.scale = "m";
        let widths = ["auto", "half", "full"];
        if (!widths.includes(this.width))
            this.width = "auto";
    }
    componentDidLoad() {
        this.noticeLinkEl = this.el.querySelectorAll("calcite-button")[0];
    }
    render() {
        const dir = getElementDir(this.el);
        const closeButton = (h("button", { class: "notice-close", "aria-label": "close", onClick: () => this.close(), ref: el => (this.closeButton = el) }, h("calcite-icon", { icon: "x", scale: "s" })));
        return (h(Host, { active: this.active, dir: dir }, this.icon ? this.setIcon() : null, h("div", { class: "notice-content" }, h("slot", { name: "notice-title" }), h("slot", { name: "notice-message" }), h("slot", { name: "notice-link" })), this.dismissible ? closeButton : null));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** close the notice emit the `calciteNoticeClose` event - <calcite-notice> listens for this */
    async close() {
        this.active = false;
        this.calciteNoticeClose.emit({ requestedNotice: this.noticeId });
    }
    /** open the notice and emit the `calciteNoticeOpen` event - <calcite-notice> listens for this  */
    async open() {
        this.active = true;
        this.calciteNoticeOpen.emit({ requestedNotice: this.noticeId });
    }
    /** focus the close button, if present and requested */
    async setFocus() {
        if (!this.closeButton && !this.noticeLinkEl) {
            return;
        }
        if (this.noticeLinkEl)
            this.noticeLinkEl.setFocus();
        else if (this.closeButton) {
            this.closeButton.focus();
        }
    }
    setIcon() {
        var path = this.iconDefaults[this.color];
        return (h("div", { class: "notice-icon" }, h("calcite-icon", { icon: path, filled: true, scale: "s" })));
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-notice",
        "$members$": {
            "active": [1540],
            "color": [1537],
            "theme": [1537],
            "scale": [1537],
            "width": [1537],
            "dismissible": [1540],
            "icon": [4],
            "close": [64],
            "open": [64],
            "setFocus": [64]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const CSS$2 = {
    page: "page",
    selected: "is-selected",
    previous: "previous",
    next: "next",
    disabled: "is-disabled",
    ellipsis: "ellipsis",
    ellipsisStart: "ellipsis--start",
    ellipsisEnd: "ellipsis--end"
};
const TEXT = {
    nextLabel: "next",
    previousLabel: "previous"
};

const maxPagesDisplayed = 5;
class CalcitePagination {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** Change between foreground colors or background colors for container background */
        this.backgroundStyle = "foregroundColor";
        /** starting selected index */
        this.num = 1;
        /** starting number of the pagination */
        this.start = 1;
        /** title of the next button */
        this.textLabelNext = TEXT.nextLabel;
        /** title of the previous button */
        this.textLabelPrevious = TEXT.previousLabel;
        /** specify the theme of accordion, defaults to light */
        this.theme = "light";
        /** ending number of the pagination */
        this.total = 2;
        this.selectedIndex = this.num;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.previousClicked = () => {
            this.previousPage();
        };
        this.nextClicked = () => {
            this.nextPage();
        };
        this.calcitePaginationUpdate = createEvent(this, "calcitePaginationUpdate", 7);
    }
    numWatchHandler(newValue) {
        this.selectedIndex = newValue;
    }
    selectedIndexWatchHandler() {
        this.calcitePaginationUpdate.emit({
            start: this.start,
            total: this.total,
            num: this.selectedIndex
        });
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /** When called, selected page will increment by 1.
     */
    async nextPage() {
        this.selectedIndex = Math.min(this.total, this.selectedIndex + 1);
    }
    /** When called, selected page will decrement by 1.
     */
    async previousPage() {
        this.selectedIndex = Math.max(this.start, this.selectedIndex - 1);
    }
    /** Set selected page to a specific page number. Will not go below start or above total.
     */
    async setPage(num) {
        this.selectedIndex = Math.max(this.start, Math.min(this.total, num));
    }
    showLeftEllipsis() {
        return (this.selectedIndex - this.start) > 3;
    }
    showRightEllipsis() {
        return (this.total - this.selectedIndex) > 3;
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    renderPages() {
        let pages = [];
        let currentNum;
        let end;
        if (this.total <= maxPagesDisplayed) {
            currentNum = this.start + 1;
            end = this.total - 1;
        }
        else {
            if (this.selectedIndex < maxPagesDisplayed) {
                currentNum = this.start + 1;
                end = this.start + 4;
            }
            else {
                if (this.selectedIndex + 3 >= this.total) {
                    currentNum = this.total - 4;
                    end = this.total - 1;
                }
                else {
                    currentNum = this.selectedIndex - 1;
                    end = this.selectedIndex + 1;
                }
            }
        }
        while (currentNum <= end) {
            pages.push(currentNum);
            currentNum++;
        }
        return pages.map(page => this.renderPage(page));
    }
    renderPage(num) {
        return (h("a", { class: { [CSS$2.page]: true, [CSS$2.selected]: (num === this.selectedIndex) }, onClick: () => {
                this.selectedIndex = num;
            } }, num));
    }
    renderLeftEllipsis() {
        if (this.total > maxPagesDisplayed && this.showLeftEllipsis()) {
            return (h("span", { class: `${CSS$2.ellipsis} ${CSS$2.ellipsisStart}` }, h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    renderRightEllipsis() {
        if (this.total > maxPagesDisplayed && this.showRightEllipsis()) {
            return (h("span", { class: `${CSS$2.ellipsis} ${CSS$2.ellipsisEnd}` }, h("calcite-icon", { scale: "s", icon: "ellipsis" })));
        }
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, class: this.backgroundStyle }, h("a", { class: { [CSS$2.previous]: true, [CSS$2.disabled]: this.selectedIndex <= 1 }, title: this.textLabelPrevious, onClick: this.previousClicked }, h("calcite-icon", { scale: "s", icon: "chevronLeft" })), this.renderPage(this.start), this.renderLeftEllipsis(), this.renderPages(), this.renderRightEllipsis(), this.renderPage(this.total), h("a", { class: { [CSS$2.next]: true, [CSS$2.disabled]: this.selectedIndex >= this.total }, title: this.textLabelNext, onClick: this.nextClicked }, h("calcite-icon", { scale: "s", icon: "chevronRight" }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "num": ["numWatchHandler"],
        "selectedIndex": ["selectedIndexWatchHandler"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-pagination",
        "$members$": {
            "backgroundStyle": [513, "background-style"],
            "num": [514],
            "start": [514],
            "textLabelNext": [513, "text-label-next"],
            "textLabelPrevious": [513, "text-label-previous"],
            "theme": [513],
            "total": [514],
            "selectedIndex": [32],
            "nextPage": [64],
            "previousPage": [64],
            "setPage": [64]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const CSS$3 = {
    container: "container",
    arrow: "arrow",
    imageContainer: "image-container",
    closeButton: "close-button",
    content: "content"
};

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  return node;
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement;
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return (isElement(element) ? element.ownerDocument : element.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement;
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (!isFixed) {
    if (getNodeName(offsetParent) !== 'body') {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement = getDocumentElement(offsetParent)) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return element.parentNode || // DOM Element detected
  // $FlowFixMe: need a better way to handle this...
  element.host || // ShadowRoot detected
  document.ownerDocument || // Fallback to ownerDocument if available
  document.documentElement // Or to documentElement if everything else fails
  ;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node)) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(node),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    if (/auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)) {
      return node;
    }
  }

  return getScrollParent(getParentNode(node));
}

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var target = isBody ? getWindow(scrollParent) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

var isFirefox = function isFirefox() {
  return typeof window.InstallTrigger !== 'undefined';
};

function getTrueOffsetParent(element) {
  var offsetParent;

  if (!isHTMLElement(element) || !(offsetParent = element.offsetParent) || // https://github.com/popperjs/popper-core/issues/837
  isFirefox() && getComputedStyle(offsetParent).position === 'fixed') {
    return null;
  }

  return offsetParent;
}

function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

  while (offsetParent && isTableElement(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements =
/*#__PURE__*/
basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements =
/*#__PURE__*/
[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, {}, current, {
      options: Object.assign({}, existing.options, {}, current.options),
      data: Object.assign({}, existing.data, {}, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, {}, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, {}, state.options, {}, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
}

var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
}

var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  }; // popper offsets are always available

  state.styles.popper = Object.assign({}, state.styles.popper, {}, mapToStyles(Object.assign({}, commonStyles, {
    offsets: state.modifiersData.popperOffsets,
    position: state.options.strategy,
    adaptive: adaptive
  }))); // arrow offsets may not be available

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, {}, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
}

var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: 'absolute',
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}

var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;
  state.modifiersData.popperOffsets.x += x;
  state.modifiersData.popperOffsets.y += y;
  state.modifiersData[name] = data;
}

var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getViewportRect(element) {
  var win = getWindow(element);
  return {
    width: win.innerWidth,
    height: win.innerHeight,
    x: 0,
    y: 0
  };
}

function getDocumentRect(element) {
  var win = getWindow(element);
  var winScroll = getWindowScroll(element);
  var documentRect = getCompositeRect(getDocumentElement(element), win);
  documentRect.height = Math.max(documentRect.height, win.innerHeight);
  documentRect.width = Math.max(documentRect.width, win.innerWidth);
  documentRect.x = -winScroll.scrollLeft;
  documentRect.y = -winScroll.scrollTop;
  return documentRect;
}

function toNumber(cssValue) {
  return parseFloat(cssValue) || 0;
}

function getBorders(element) {
  var computedStyle = isHTMLElement(element) ? getComputedStyle(element) : {};
  return {
    top: toNumber(computedStyle.borderTopWidth),
    right: toNumber(computedStyle.borderRightWidth),
    bottom: toNumber(computedStyle.borderBottomWidth),
    left: toNumber(computedStyle.borderLeftWidth)
  };
}

function getDecorations(element) {
  var win = getWindow(element);
  var borders = getBorders(element);
  var isHTML = getNodeName(element) === 'html';
  var winScrollBarX = getWindowScrollBarX(element);
  var x = element.clientWidth + borders.right;
  var y = element.clientHeight + borders.bottom; // HACK:
  // document.documentElement.clientHeight on iOS reports the height of the
  // viewport including the bottom bar, even if the bottom bar isn't visible.
  // If the difference between window innerHeight and html clientHeight is more
  // than 50, we assume it's a mobile bottom bar and ignore scrollbars.
  // * A 50px thick scrollbar is likely non-existent (macOS is 15px and Windows
  //   is about 17px)
  // * The mobile bar is 114px tall

  if (isHTML && win.innerHeight - element.clientHeight > 50) {
    y = win.innerHeight - borders.bottom;
  }

  return {
    top: isHTML ? 0 : element.clientTop,
    right: // RTL scrollbar (scrolling containers only)
    element.clientLeft > borders.left ? borders.right : // LTR scrollbar
    isHTML ? win.innerWidth - x - winScrollBarX : element.offsetWidth - x,
    bottom: isHTML ? win.innerHeight - y : element.offsetHeight - y,
    left: isHTML ? winScrollBarX : element.clientLeft
  };
}

function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(element);
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    var decorations = getDecorations(isHTMLElement(clippingParent) ? clippingParent : getDocumentElement(element));
    accRect.top = Math.max(rect.top + decorations.top, accRect.top);
    accRect.right = Math.min(rect.right - decorations.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left + decorations.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), {}, paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, {}, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements; // $FlowFixMe: Flow seems to have problems with two array unions...

  var overflows = placements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [overflow[_basePlacement] <= 0, overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0];

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}

var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    state.modifiersData.popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
}

var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var center = within(paddingObject[minProp], state.rects.popper[len] / 2 - arrowRect[len] / 2 + centerToReference, state.rects.popper[len] - arrowRect[len] - paddingObject[maxProp]); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = center, _state$modifiersData$);
}

function effect$2(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding; // CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
}

var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$2,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
}

var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper =
/*#__PURE__*/
popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function getPlacement(el, placement) {
    const values = ["left", "right"];
    if (getElementDir(el) === "rtl") {
        values.reverse();
    }
    return placement
        .replace(/leading/gi, values[0])
        .replace(/trailing/gi, values[1]);
}
function createPopper$1({ referenceEl, el, open, placement, modifiers }) {
    if (!referenceEl || !open) {
        return null;
    }
    return createPopper(referenceEl, el, {
        placement: getPlacement(el, placement),
        modifiers
    });
}
function updatePopper({ el, modifiers, placement: calcitePlacement, popper }) {
    const placement = getPlacement(el, calcitePlacement);
    popper.setOptions({
        modifiers,
        placement
    });
}
function hypotenuse(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
const visiblePointerSize = 4;
const defaultOffsetDistance = Math.ceil(hypotenuse(visiblePointerSize, visiblePointerSize));

/**
 * @slot image - A slot for adding an image. The image will appear above the other slot content.
 */
class CalcitePopover {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Adds a click handler to the referenceElement to toggle open the Popover.
         */
        this.addClickHandle = false;
        /**
         * Display a close button within the Popover.
         */
        this.closeButton = false;
        /**
         * Prevents flipping the popover's placement when it starts to overlap its reference element.
         */
        this.disableFlip = false;
        /**
         * Removes the caret pointer.
         */
        this.disablePointer = false;
        /**
         * Offset the position of the popover away from the reference element.
         */
        this.offsetDistance = defaultOffsetDistance;
        /**
         * Offset the position of the popover along the reference element.
         */
        this.offsetSkidding = 0;
        /**
         * Display and position the component.
         */
        this.open = false;
        /**
         * Determines where the component will be positioned relative to the referenceElement.
         */
        this.placement = "auto";
        /** Text for close button. */
        this.textClose = "Close";
        /** Select theme (light or dark) */
        this.theme = "light";
        this._referenceElement = this.getReferenceElement();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.getId = () => {
            return this.el.id || `calcite-popover-${guid()}`;
        };
        this.addReferenceAria = () => {
            const { _referenceElement } = this;
            if (_referenceElement &&
                !_referenceElement.hasAttribute("aria-describedby")) {
                _referenceElement.setAttribute("aria-describedby", this.getId());
            }
        };
        this.clickHandler = () => {
            this.toggle();
        };
        this.addReferenceListener = () => {
            const { _referenceElement, addClickHandle } = this;
            if (!_referenceElement || !addClickHandle) {
                return;
            }
            _referenceElement.addEventListener("click", this.clickHandler);
        };
        this.removeReferenceListener = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.removeEventListener("click", this.clickHandler);
        };
        this.hide = () => {
            this.open = false;
        };
        this.calcitePopoverClose = createEvent(this, "calcitePopoverClose", 7);
        this.calcitePopoverOpen = createEvent(this, "calcitePopoverOpen", 7);
    }
    interactionElementHandler() {
        this.removeReferenceListener();
        this.addReferenceListener();
    }
    offsetDistanceOffsetHandler() {
        this.reposition();
    }
    offsetSkiddingHandler() {
        this.reposition();
    }
    openHandler(open) {
        if (open) {
            this.createPopper();
            this.calcitePopoverOpen.emit();
        }
        else {
            this.destroyPopper();
            this.calcitePopoverClose.emit();
        }
    }
    placementHandler() {
        this.reposition();
    }
    referenceElementHandler() {
        this.removeReferenceListener();
        this._referenceElement = this.getReferenceElement();
        this.addReferenceListener();
        this.addReferenceAria();
        this.createPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        this.createPopper();
        this.addReferenceListener();
        this.addReferenceAria();
    }
    componentDidUnload() {
        this.removeReferenceListener();
        this.destroyPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async reposition() {
        const { popper, el, placement } = this;
        const modifiers = this.getModifiers();
        popper
            ? updatePopper({
                el,
                modifiers,
                placement,
                popper
            })
            : this.createPopper();
    }
    async setFocus(focusId) {
        var _a, _b;
        if (focusId === "close-button") {
            (_a = this.closeButtonEl) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        (_b = this.el) === null || _b === void 0 ? void 0 : _b.focus();
    }
    async toggle() {
        this.open = !this.open;
    }
    getReferenceElement() {
        const { referenceElement } = this;
        return ((typeof referenceElement === "string"
            ? document.getElementById(referenceElement)
            : referenceElement) || null);
    }
    getModifiers() {
        const { arrowEl, flipPlacements, disableFlip, disablePointer, offsetDistance, offsetSkidding } = this;
        const flipModifier = {
            name: "flip",
            enabled: !disableFlip
        };
        if (flipPlacements) {
            flipModifier.options = {
                fallbackPlacements: flipPlacements
            };
        }
        const arrowModifier = {
            name: "arrow",
            enabled: !disablePointer
        };
        if (arrowEl) {
            arrowModifier.options = {
                element: arrowEl
            };
        }
        const offsetModifier = {
            name: "offset",
            enabled: true,
            options: {
                offset: [offsetSkidding, offsetDistance]
            }
        };
        return [arrowModifier, flipModifier, offsetModifier];
    }
    createPopper() {
        this.destroyPopper();
        const { el, open, placement, _referenceElement: referenceEl } = this;
        const modifiers = this.getModifiers();
        this.popper = createPopper$1({
            el,
            modifiers,
            open,
            placement,
            referenceEl
        });
    }
    destroyPopper() {
        const { popper } = this;
        if (popper) {
            popper.destroy();
        }
        this.popper = null;
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderImage() {
        return this.el.querySelector("[slot=image]") ? (h("div", { class: CSS$3.imageContainer }, h("slot", { name: "image" }))) : null;
    }
    renderCloseButton() {
        const { closeButton, textClose } = this;
        return closeButton ? (h("button", { ref: closeButtonEl => (this.closeButtonEl = closeButtonEl), "aria-label": textClose, title: textClose, class: { [CSS$3.closeButton]: true }, onClick: this.hide }, h("calcite-icon", { icon: "x", scale: "s" }))) : null;
    }
    render() {
        const { _referenceElement, open, disablePointer } = this;
        const displayed = _referenceElement && open;
        const arrowNode = !disablePointer ? (h("div", { class: CSS$3.arrow, ref: arrowEl => (this.arrowEl = arrowEl) })) : null;
        return (h(Host, { role: "dialog", class: {
                [HOST_CSS.hydratedInvisible]: !displayed
            }, "aria-hidden": !displayed ? "true" : "false", id: this.getId() }, arrowNode, h("div", { class: CSS$3.container }, this.renderImage(), h("div", { class: CSS$3.content }, h("slot", null), this.renderCloseButton()))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "addClickHandle": ["interactionElementHandler"],
        "offsetDistance": ["offsetDistanceOffsetHandler"],
        "offsetSkidding": ["offsetSkiddingHandler"],
        "open": ["openHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-popover",
        "$members$": {
            "addClickHandle": [516, "add-click-handle"],
            "closeButton": [516, "close-button"],
            "disableFlip": [516, "disable-flip"],
            "disablePointer": [516, "disable-pointer"],
            "flipPlacements": [16],
            "offsetDistance": [514, "offset-distance"],
            "offsetSkidding": [514, "offset-skidding"],
            "open": [516],
            "placement": [513],
            "referenceElement": [1, "reference-element"],
            "textClose": [1, "text-close"],
            "theme": [513],
            "_referenceElement": [32],
            "reposition": [64],
            "setFocus": [64],
            "toggle": [64]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteProgress {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Use indeterminate if finding actual progress value is impossible
         */
        this.type = "determinate";
        /**
         * Percent complete of 100
         */
        this.value = 0;
        /**
         * Text label for the progress indicator
         */
        this.text = null;
        /**
         * Fill bar in the opposite direction
         */
        this.reversed = false;
        /** Select theme (light or dark) */
        this.theme = "light";
    }
    render() {
        const theme = getElementTheme(this.el);
        return (h(Host, { class: "calcite-progress", type: this.type, reversed: this.reversed, style: {
                "--percentage-value": `${this.value * 100}%`
            }, theme: theme }, h("div", { class: "calcite-progress--track" }), h("div", { class: {
                "calcite-progress--bar": true,
                "--indeterminate": this.type === "indeterminate",
                "--determinate": this.type === "determinate"
            } }), this.text ? (h("div", { class: "calcite-progress--text" }, this.text)) : null));
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-progress",
        "$members$": {
            "type": [1],
            "value": [2],
            "text": [1],
            "reversed": [4],
            "theme": [513]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const navigationKeys = {
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    space: " "
};
class CalciteRadioGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** The component's theme. */
        this.theme = "light";
        /** The scale of the button */
        this.scale = "m";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.hiddenInput = (() => {
            const input = document.createElement("input");
            input.type = "hidden";
            this.el.appendChild(input);
            return input;
        })();
        this.calciteRadioGroupChange = createEvent(this, "calciteRadioGroupChange", 7);
    }
    handleNameChange(value) {
        this.hiddenInput.name = value;
    }
    handleSelectedItemChange(newItem, oldItem) {
        if (newItem === oldItem) {
            return;
        }
        const items = this.getItems();
        const match = Array.from(items)
            .filter(item => item === newItem)
            .pop();
        if (match) {
            this.selectItem(match);
            this.calciteRadioGroupChange.emit();
        }
        else if (items[0]) {
            items[0].tabIndex = 0;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        const items = this.getItems();
        let lastChecked = Array.from(items)
            .filter(item => item.checked)
            .pop();
        if (lastChecked) {
            this.selectItem(lastChecked);
        }
        else if (items[0]) {
            items[0].tabIndex = 0;
        }
        const { hiddenInput, name } = this;
        if (name) {
            hiddenInput.name = name;
        }
        if (lastChecked) {
            hiddenInput.value = lastChecked.value;
        }
    }
    componentDidLoad() {
        this.hasLoaded = true;
    }
    render() {
        return (h(Host, { role: "radiogroup" }, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    handleClick(event) {
        if (event.target.localName === "calcite-radio-group-item") {
            this.selectItem(event.target);
        }
    }
    handleSelected(event) {
        // only fire after initial setup to prevent semi-infinite loops
        if (this.hasLoaded) {
            event.stopPropagation();
            event.preventDefault();
            this.selectItem(event.target);
        }
    }
    handleKeyDown(event) {
        const { key } = event;
        if (Object.values(navigationKeys).indexOf(key) === -1) {
            return;
        }
        event.preventDefault();
        const { el, selectedItem } = this;
        const dir = getElementDir(el);
        const moveBackwardKey = (dir === "rtl"
            ? key === navigationKeys.right
            : key === navigationKeys.left) || key === navigationKeys.up;
        const items = this.getItems();
        let selectedIndex = -1;
        items.forEach((item, index) => {
            if (item === selectedItem) {
                selectedIndex = index;
            }
        });
        if (moveBackwardKey) {
            const previous = selectedIndex === -1 || selectedIndex === 0
                ? items.item(items.length - 1)
                : items.item(selectedIndex - 1);
            this.selectItem(previous);
            return;
        }
        const moveForwardKey = (dir === "rtl"
            ? key === navigationKeys.left
            : key === navigationKeys.right) || key === navigationKeys.down;
        if (moveForwardKey) {
            const next = selectedIndex === -1
                ? items.item(1)
                : items.item(selectedIndex + 1) || items.item(0);
            this.selectItem(next);
            return;
        }
        if (key === navigationKeys.space) {
            this.selectItem(event.target);
            return;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getItems() {
        return this.el.querySelectorAll("calcite-radio-group-item");
    }
    selectItem(selected) {
        if (selected === this.selectedItem) {
            return;
        }
        const items = this.getItems();
        let match = null;
        items.forEach(item => {
            const matches = item.value === selected.value;
            if ((matches && !item.checked) || (!matches && item.checked)) {
                item.checked = matches;
            }
            item.tabIndex = matches ? 0 : -1;
            if (matches) {
                match = item;
            }
        });
        this.selectedItem = match;
        this.syncWithInputProxy(match);
    }
    syncWithInputProxy(item) {
        this.hiddenInput.value = item ? item.value : "";
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": ["handleNameChange"],
        "selectedItem": ["handleSelectedItemChange"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-radio-group",
        "$members$": {
            "name": [1],
            "selectedItem": [8, "selected-item"],
            "theme": [513],
            "scale": [513]
        },
        "$listeners$": [[0, "click", "handleClick"], [0, "calciteRadioGroupItemChange", "handleSelected"], [0, "keydown", "handleKeyDown"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteRadioGroupItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Indicates whether the control is checked.
         */
        this.checked = false;
        this.mutationObserver = this.getMutationObserver();
        this.calciteRadioGroupItemChange = createEvent(this, "calciteRadioGroupItemChange", 7);
    }
    handleCheckedChange() {
        this.calciteRadioGroupItemChange.emit();
        this.syncToExternalInput();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        let inputProxy = this.el.querySelector(`input[slot="input"]`);
        if (inputProxy) {
            this.value = inputProxy.value;
            this.checked = inputProxy.checked;
        }
        this.inputProxy = inputProxy;
    }
    disconnectedCallback() {
        this.mutationObserver.disconnect();
    }
    render() {
        const { checked, value } = this;
        const scale = getElementProp(this.el, "scale", "m");
        return (h(Host, { role: "radio", "aria-checked": checked.toString(), scale: scale }, h("label", null, h("slot", null, value), h("slot", { name: "input" }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getMutationObserver() {
        return (Build.isBrowser );
    }
    syncFromExternalInput() {
        if (this.inputProxy) {
            this.value = this.inputProxy.value;
            this.checked = this.inputProxy.checked;
        }
    }
    syncToExternalInput() {
        if (!this.inputProxy) {
            return;
        }
        this.inputProxy.value = this.value;
        this.inputProxy.toggleAttribute("checked", this.checked);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-radio-group-item",
        "$members$": {
            "checked": [1540],
            "value": [8]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteSlider {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** Select theme (light or dark) */
        this.theme = "light";
        /** Disable and gray out the slider */
        this.disabled = false;
        /** Minimum selectable value */
        this.min = 0;
        /** Maximum selectable value */
        this.max = 100;
        /** Currently selected number (if single select) */
        this.value = null;
        /** Snap selection along the step interval */
        this.snap = true;
        /** Interval to move on up/down keys */
        this.step = 1;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.guid = `calcite-slider-${guid()}`;
        /**
         * @internal
         */
        this.isRange = false;
        /**
         * @internal
         */
        this.tickValues = [];
        /**
         * @internal
         */
        this.activeProp = "value";
        this.calciteSliderUpdate = createEvent(this, "calciteSliderUpdate", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        this.isRange = !!(this.maxValue || this.maxValue === 0);
        this.tickValues = this.generateTickValues();
        this.value = this.bound(this.value);
        if (this.snap) {
            this.value = this.getClosestStep(this.value);
        }
        this.calciteSliderUpdate.emit();
    }
    render() {
        const id = this.el.id || this.guid;
        const dir = getElementDir(this.el);
        const theme = getElementTheme(this.el);
        const min = this.minValue || this.min;
        const max = this.maxValue || this.value;
        const maxProp = this.isRange ? "maxValue" : "value";
        return (h(Host, { dir: dir, theme: theme, id: id, "is-range": this.isRange, style: {
                "--calcite-slider-range-max": `${100 -
                    this.getUnitInterval(max) * 100}%`,
                "--calcite-slider-range-min": `${this.getUnitInterval(min) * 100}%`
            } }, h("div", { class: "slider__track" }, h("div", { class: "slider__track__range" }), h("div", { class: "slider__ticks" }, this.tickValues.map(number => (h("span", { class: {
                slider__tick: true,
                "slider__tick--active": number >= min && number <= max
            }, style: {
                "--calcite-slider-tick-offset": `${this.getUnitInterval(number) * 100}%`
            } }, this.labelTicks ? (h("span", { class: {
                slider__tick__label: true,
                "slider__tick__label--min": number === this.min,
                "slider__tick__label--max": number === this.max
            } }, number)) : ("")))))), this.isRange ? (h("button", { ref: el => (this.minHandle = el), onFocus: () => (this.activeProp = "minValue"), onBlur: () => (this.activeProp = null), onMouseDown: () => this.dragStart("minValue"), onTouchStart: e => this.dragStart("minValue", e), role: "slider", "aria-orientation": "horizontal", "aria-label": this.minLabel, "aria-valuenow": this.minValue, "aria-valuemin": this.min, "aria-valuemax": this.max, disabled: this.disabled, class: {
                slider__thumb: true,
                "slider__thumb--min": true,
                "slider__thumb--active": this.dragProp === "minValue",
                "slider__thumb--precise": this.precise
            } }, h("span", { class: "slider__handle" }), this.labelHandles ? (h("span", { class: "slider__handle__label", "aria-hidden": "true" }, this.minValue)) : (""))) : (""), h("button", { ref: el => (this.maxHandle = el), onFocus: () => (this.activeProp = maxProp), onBlur: () => (this.activeProp = null), onMouseDown: () => this.dragStart(maxProp), onTouchStart: e => this.dragStart(maxProp, e), role: "slider", "aria-orientation": "horizontal", "aria-label": this.isRange ? this.maxLabel : this.minLabel, "aria-valuenow": this[maxProp], "aria-valuemin": this.min, "aria-valuemax": this.max, disabled: this.disabled, class: {
                slider__thumb: true,
                "slider__thumb--max": true,
                "slider__thumb--active": this.dragProp === maxProp,
                "slider__thumb--precise": this.precise
            } }, h("span", { class: "slider__handle" }), this.labelHandles ? (h("span", { class: "slider__handle__label", "aria-hidden": "true" }, this[maxProp])) : (""))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        const value = this[this.activeProp];
        switch (e.keyCode) {
            case UP:
            case RIGHT:
                e.preventDefault();
                this[this.activeProp] = this.bound(value + this.step, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case DOWN:
            case LEFT:
                e.preventDefault();
                this[this.activeProp] = this.bound(value - this.step, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case PAGE_UP:
                if (this.pageStep) {
                    e.preventDefault();
                    this[this.activeProp] = this.bound(value + this.pageStep, this.activeProp);
                    this.calciteSliderUpdate.emit();
                }
                break;
            case PAGE_DOWN:
                if (this.pageStep) {
                    e.preventDefault();
                    this[this.activeProp] = this.bound(value - this.pageStep, this.activeProp);
                    this.calciteSliderUpdate.emit();
                }
                break;
            case HOME:
                e.preventDefault();
                this[this.activeProp] = this.bound(this.min, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
            case END:
                e.preventDefault();
                this[this.activeProp] = this.bound(this.max, this.activeProp);
                this.calciteSliderUpdate.emit();
                break;
        }
    }
    clickHandler(e) {
        const x = e.clientX || e.pageX;
        const num = this.translate(x);
        let prop = "value";
        if (this.isRange) {
            const closerToMax = Math.abs(this.maxValue - num) < Math.abs(this.minValue - num);
            prop = closerToMax ? "maxValue" : "minValue";
        }
        this[prop] = this.bound(num, prop);
        this.calciteSliderUpdate.emit();
        const handle = prop === "minValue" ? this.minHandle : this.maxHandle;
        handle.focus();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    generateTickValues() {
        const ticks = [];
        let current = this.min;
        while (this.ticks && current < this.max + this.ticks) {
            ticks.push(current);
            current = current + this.ticks;
        }
        return ticks;
    }
    dragStart(prop, e) {
        if (e) {
            e.preventDefault();
        }
        if (this.dragListener) {
            this.dragEnd();
        }
        this.dragProp = prop;
        this.activeProp = prop;
        this.dragListener = this.dragListener || this.dragUpdate.bind(this);
        document.addEventListener("mousemove", this.dragListener);
        document.addEventListener("touchmove", this.dragListener, {
            capture: false
        });
        document.addEventListener("mouseup", this.dragEnd.bind(this));
        document.addEventListener("touchend", this.dragEnd.bind(this), false);
        document.addEventListener("touchcancel", this.dragEnd.bind(this));
    }
    dragUpdate(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.dragProp) {
            const value = this.translate(e.clientX || e.pageX);
            this[this.dragProp] = this.bound(value, this.dragProp);
            this.calciteSliderUpdate.emit();
        }
    }
    dragEnd() {
        this.dragProp = null;
        document.removeEventListener("mousemove", this.dragListener);
        document.removeEventListener("touchmove", this.dragListener);
    }
    /**
     * If number is outside range, constrain to min or max
     * @internal
     */
    bound(num, prop) {
        num = Math.min(num, this.max);
        num = Math.max(num, this.min);
        // ensure that maxValue and minValue don't swap positions
        if (prop === "maxValue") {
            num = Math.max(num, this.minValue);
        }
        if (prop === "minValue") {
            num = Math.min(num, this.maxValue);
        }
        return num;
    }
    /**
     * Translate a pixel position to value along the range
     * @internal
     */
    translate(x) {
        const range = this.max - this.min;
        const { left, width } = this.el.getBoundingClientRect();
        const percent = (x - left) / width;
        let value = this.bound(this.min + range * percent);
        if (this.snap && this.step) {
            value = this.getClosestStep(value);
        }
        return value;
    }
    /**
     * Get closest allowed value along stepped values
     * @internal
     */
    getClosestStep(num) {
        num = this.bound(num);
        if (this.step) {
            const step = Math.round(num / this.step) * this.step;
            num = this.bound(step);
        }
        return num;
    }
    /**
     * Get position of value along range as fractional value
     * @return {number} number in the unit interval [0,1]
     * @internal
     */
    getUnitInterval(num) {
        num = this.bound(num);
        const range = this.max - this.min;
        return (num - this.min) / range;
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-slider",
        "$members$": {
            "theme": [513],
            "disabled": [1540],
            "min": [1538],
            "max": [1538],
            "value": [1538],
            "minValue": [2, "min-value"],
            "maxValue": [2, "max-value"],
            "minLabel": [1, "min-label"],
            "maxLabel": [1, "max-label"],
            "snap": [4],
            "step": [2],
            "pageStep": [2, "page-step"],
            "ticks": [2],
            "labelTicks": [516, "label-ticks"],
            "labelHandles": [516, "label-handles"],
            "precise": [4],
            "tickValues": [32],
            "activeProp": [32]
        },
        "$listeners$": [[0, "keydown", "keyDownHandler"], [0, "click", "clickHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteSwitch {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** True if the switch is initially on */
        this.switched = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** What color the switch should be */
        this.color = "blue";
        /** The scale of the button */
        this.scale = "m";
        /** The component's theme. */
        this.theme = "light";
        this.syncThisToProxyInput = () => {
            this.switched = this.inputProxy.hasAttribute("checked");
            this.name = this.inputProxy.name;
            this.value = this.inputProxy.value;
        };
        this.syncProxyInputToThis = () => {
            this.switched
                ? this.inputProxy.setAttribute("checked", "")
                : this.inputProxy.removeAttribute("checked");
            this.inputProxy.setAttribute("name", this.name);
            this.inputProxy.setAttribute("value", this.value);
        };
        this.calciteSwitchChange = createEvent(this, "calciteSwitchChange", 7);
    }
    onClick(e) {
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && e.target === this.inputProxy) ||
            (!this.el.closest("label") && e.target === this.el)) {
            this.switched = !this.switched;
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.switched = !this.switched;
        }
    }
    switchWatcher() {
        this.calciteSwitchChange.emit();
        this.switched
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    }
    connectedCallback() {
        // prop validations
        let color = ["blue", "red"];
        if (!color.includes(this.color))
            this.color = "blue";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { role: "checkbox", dir: dir, "aria-checked": this.switched.toString(), tabIndex: this.tabIndex }, h("div", { class: "track" }, h("div", { class: "handle" })), h("slot", null)));
    }
    get tabIndex() {
        const hasTabIndex = this.el.hasAttribute("tabindex");
        if (hasTabIndex) {
            return Number(this.el.getAttribute("tabindex"));
        }
        return 0;
    }
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "switched": ["switchWatcher"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-switch",
        "$members$": {
            "switched": [1540],
            "name": [1537],
            "value": [1537],
            "color": [1537],
            "scale": [1537],
            "theme": [1537]
        },
        "$listeners$": [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteTab {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Show this tab
         */
        this.isActive = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.guid = `calcite-tab-title-${guid()}`;
        this.calciteTabRegister = createEvent(this, "calciteTabRegister", 7);
        this.calciteTabUnregister = createEvent(this, "calciteTabUnregister", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const id = this.el.id || this.guid;
        return (h(Host, { id: id, "aria-labeledby": this.labeledBy, "aria-expanded": this.isActive.toString(), role: "tabpanel" }, h("section", null, h("slot", null))));
    }
    componentDidLoad() {
        this.calciteTabRegister.emit();
    }
    componentDidUnload() {
        this.calciteTabUnregister.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    tabChangeHandler(event) {
        // to allow `<calcite-tabs>` to be nested we need to make sure this
        // `calciteTabChange` event was actually fired from a title that is a
        // child of the `<calcite-tabs>` that is the a parent of this tab.
        if (event.target.closest("calcite-tabs") !==
            this.el.closest("calcite-tabs")) {
            return;
        }
        if (this.tab) {
            this.isActive = this.tab === event.detail.tab;
        }
        else {
            this.getTabIndex().then(index => {
                this.isActive = index === event.detail.tab;
            });
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the index of this tab within the tab array
     */
    async getTabIndex() {
        return Promise.resolve(Array.prototype.indexOf.call(nodeListToArray(this.el.parentElement.children).filter(e => e.matches("calcite-tab")), this.el));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    updateAriaInfo(tabIds = [], titleIds = []) {
        this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
        return Promise.resolve();
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-tab",
        "$members$": {
            "tab": [1537],
            "isActive": [1540, "is-active"],
            "labeledBy": [32],
            "getTabIndex": [64],
            "updateAriaInfo": [64]
        },
        "$listeners$": [[16, "calciteTabChange", "tabChangeHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteTabNav {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.calciteTabChange = createEvent(this, "calciteTabChange", 7);
    }
    selectedTabChanged() {
        if (localStorage &&
            this.storageId &&
            this.selectedTab !== undefined &&
            this.selectedTab !== null) {
            localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTab));
        }
        this.calciteTabChange.emit({
            tab: this.selectedTab
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        const storageKey = `calcite-tab-nav-${this.storageId}`;
        if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
            this.selectedTab = JSON.parse(localStorage.getItem(storageKey));
            this.calciteTabChange.emit({
                tab: this.selectedTab
            });
        }
    }
    render() {
        return (h(Host, { role: "tablist" }, h("nav", { class: "tab-nav", ref: el => (this.tabNavEl = el) }, h("slot", null))));
    }
    componentDidRender() {
        // if every tab title is active select the first tab.
        if (this.tabTitles.length &&
            this.tabTitles.every(title => !title.isActive) &&
            !this.selectedTab) {
            this.tabTitles[0].getTabIdentifier().then(tab => {
                this.calciteTabChange.emit({
                    tab
                });
            });
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Events Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    focusPreviousTabHandler(e) {
        const currentIndex = this.getIndexOfTabTitle(e.target);
        const previousTab = this.tabTitles[currentIndex - 1] ||
            this.tabTitles[this.tabTitles.length - 1];
        previousTab.focus();
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * @internal
     */
    focusNextTabHandler(e) {
        const currentIndex = this.getIndexOfTabTitle(e.target);
        const nextTab = this.tabTitles[currentIndex + 1] || this.tabTitles[0];
        nextTab.focus();
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * @internal
     */
    activateTabHandler(e) {
        if (e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
        else {
            this.selectedTab = this.getIndexOfTabTitle(e.target);
        }
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * @internal
     */
    globalTabChangeHandler(e) {
        if (this.syncId &&
            e.target !== this.el &&
            e.target.syncId === this.syncId &&
            this.selectedTab !== e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getIndexOfTabTitle(el) {
        return this.tabTitles.indexOf(el);
    }
    get tabTitles() {
        if (this.tabNavEl) {
            return getSlottedElements(this.tabNavEl, "calcite-tab-title");
        }
        return [];
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selectedTab": ["selectedTabChanged"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-tab-nav",
        "$members$": {
            "storageId": [1, "storage-id"],
            "syncId": [1, "sync-id"],
            "selectedTab": [32]
        },
        "$listeners$": [[0, "calciteTabsFocusPrevious", "focusPreviousTabHandler"], [0, "calciteTabsFocusNext", "focusNextTabHandler"], [0, "calciteTabsActivate", "activateTabHandler"], [32, "calciteTabChange", "globalTabChangeHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteTabTitle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Show this tab title as selected
         */
        this.isActive = false;
        /**
         * @internal
         */
        this.guid = `calcite-tab-title-${guid()}`;
        this.calciteTabsActivate = createEvent(this, "calciteTabsActivate", 7);
        this.calciteTabsFocusNext = createEvent(this, "calciteTabsFocusNext", 7);
        this.calciteTabsFocusPrevious = createEvent(this, "calciteTabsFocusPrevious", 7);
        this.calciteTabTitleRegister = createEvent(this, "calciteTabTitleRegister", 7);
        this.calciteTabTitleUnregister = createEvent(this, "calciteTabTitleUnregister", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        if (this.tab && this.isActive) {
            this.calciteTabsActivate.emit({
                tab: this.tab
            });
        }
    }
    render() {
        const id = this.el.id || this.guid;
        return (h(Host, { id: id, "aria-controls": this.controls, "aria-expanded": this.isActive.toString(), role: "tab", tabindex: "0" }, h("a", null, h("slot", null))));
    }
    componentDidLoad() {
        this.calciteTabTitleRegister.emit();
    }
    componentDidUnload() {
        this.calciteTabTitleUnregister.emit();
    }
    //--------------------------------------------------------------------------
    //
    //  Events Listeners
    //
    //--------------------------------------------------------------------------
    tabChangeHandler(event) {
        if (this.tab) {
            this.isActive = this.tab === event.detail.tab;
        }
        else {
            this.getTabIndex().then(index => {
                this.isActive = index === event.detail.tab;
            });
        }
    }
    onClick() {
        this.calciteTabsActivate.emit({
            tab: this.tab
        });
    }
    keyDownHandler(e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.calciteTabsActivate.emit({
                    tab: this.tab
                });
                e.preventDefault();
                break;
            case RIGHT:
                if (getElementDir(this.el) === "ltr") {
                    this.calciteTabsFocusNext.emit();
                }
                else {
                    this.calciteTabsFocusPrevious.emit();
                }
                break;
            case LEFT:
                if (getElementDir(this.el) === "ltr") {
                    this.calciteTabsFocusPrevious.emit();
                }
                else {
                    this.calciteTabsFocusNext.emit();
                }
                break;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the index of this title within the nav
     */
    async getTabIndex() {
        return Promise.resolve(Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"), this.el));
    }
    /**
     * @internal
     */
    async getTabIdentifier() {
        return this.tab ? Promise.resolve(this.tab) : this.getTabIndex();
    }
    /**
     * @internal
     */
    async updateAriaInfo(tabIds = [], titleIds = []) {
        this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
        return Promise.resolve();
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-tab-title",
        "$members$": {
            "tab": [1537],
            "isActive": [1540, "is-active"],
            "controls": [32],
            "getTabIndex": [64],
            "getTabIdentifier": [64],
            "updateAriaInfo": [64]
        },
        "$listeners$": [[16, "calciteTabChange", "tabChangeHandler"], [0, "click", "onClick"], [0, "keydown", "keyDownHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteTabs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Select theme (light or dark)
         */
        this.theme = "light";
        /**
         * Align tab titles to the edge or fully justify them across the tab nav ("center")
         */
        this.layout = "inline";
        //--------------------------------------------------------------------------
        //
        //  Events
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab-titles>`s to match up ARIA
         * attributes.
         */
        this.titles = [];
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab>`s to match up ARIA attributes.
         */
        this.tabs = [];
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", null, h("slot", { name: "tab-nav" }), h("section", null, h("slot", null)))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    calciteTabTitleRegister(e) {
        this.titles = [...this.titles, e.target];
        this.registryHandler();
        e.stopPropagation();
    }
    /**
     * @internal
     */
    calciteTabTitleUnregister(e) {
        this.titles = this.titles.filter(el => el !== e.target);
        this.registryHandler();
        e.stopPropagation();
    }
    /**
     * @internal
     */
    calciteTabRegister(e) {
        this.tabs = [...this.tabs, e.target];
        this.registryHandler();
        e.stopPropagation();
    }
    /**
     * @internal
     */
    calciteTabUnregister(e) {
        this.tabs = this.tabs.filter(el => el !== e.target);
        this.registryHandler();
        e.stopPropagation();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     *
     * Matches up elements from the internal `tabs` and `titles` to automatically
     * update the ARIA attributes and link `<calcite-tab>` and
     * `<calcite-tab-title>` components.
     */
    async registryHandler() {
        var tabIds;
        var titleIds;
        // determine if we are using `tab` based or `index` based tab identifiers.
        if (this.tabs.some(e => e.tab) || this.titles.some(e => e.tab)) {
            // if we are using `tab` based identifiers sort by `tab` to account for
            // possible out of order tabs and get the id of each tab
            tabIds = this.tabs
                .sort((a, b) => a.tab.localeCompare(b.tab))
                .map(e => e.id);
            titleIds = this.titles
                .sort((a, b) => a.tab.localeCompare(b.tab))
                .map(e => e.id);
        }
        else {
            // if we are using index based tabs then the `<calcite-tab>` and
            // `<calcite-tab-title>` might have been rendered out of order so the
            // order of `this.tabs` and `this.titles` might not reflect the DOM state,
            // and might not match each other so we need to get the index of all the
            // tabs and titles in the DOM order to match them up as a source of truth
            const tabDomIndexes = await Promise.all(this.tabs.map(el => el.getTabIndex()));
            const titleDomIndexes = await Promise.all(this.titles.map(el => el.getTabIndex()));
            // once we have the DOM order as a source of truth we can build the
            // matching tabIds and titleIds arrays
            tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
                ids[indexInDOM] = this.tabs[registryIndex].id;
                return ids;
            }, []);
            titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
                ids[indexInDOM] = this.titles[registryIndex].id;
                return ids;
            }, []);
        }
        // pass all our new aria information to each `<calcite-tab>` and
        // `<calcite-tab-title>` which will check if they can update their internal
        // `controlled` or `labeledBy` states and re-render if necessary
        this.tabs.forEach(el => el.updateAriaInfo(tabIds, titleIds));
        this.titles.forEach(el => el.updateAriaInfo(tabIds, titleIds));
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-tabs",
        "$members$": {
            "theme": [513],
            "layout": [513],
            "titles": [32],
            "tabs": [32]
        },
        "$listeners$": [[0, "calciteTabTitleRegister", "calciteTabTitleRegister"], [0, "calciteTabTitleUnregister", "calciteTabTitleUnregister"], [0, "calciteTabRegister", "calciteTabRegister"], [0, "calciteTabUnregister", "calciteTabUnregister"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const CSS$4 = {
    container: "container",
    arrow: "arrow"
};

class CalciteTooltip {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * Offset the position of the popover away from the reference element.
         */
        this.offsetDistance = defaultOffsetDistance;
        /**
         * Offset the position of the popover along the reference element.
         */
        this.offsetSkidding = 0;
        /**
         * Display and position the component.
         */
        this.open = false;
        /**
         * Determines where the component will be positioned relative to the referenceElement.
         */
        this.placement = "auto";
        /** Select theme (light or dark) */
        this.theme = "light";
        this._referenceElement = this.getReferenceElement();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.getId = () => {
            return this.el.id || `calcite-tooltip-${guid()}`;
        };
        this.addReferenceAria = () => {
            const { _referenceElement } = this;
            if (_referenceElement &&
                !_referenceElement.hasAttribute("aria-describedby")) {
                _referenceElement.setAttribute("aria-describedby", this.getId());
            }
        };
        this.addReferenceListeners = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.addEventListener("mouseenter", this.show);
            _referenceElement.addEventListener("mouseleave", this.hide);
            _referenceElement.addEventListener("focus", this.show);
            _referenceElement.addEventListener("blur", this.hide);
        };
        this.removeReferenceListeners = () => {
            const { _referenceElement } = this;
            if (!_referenceElement) {
                return;
            }
            _referenceElement.removeEventListener("mouseenter", this.show);
            _referenceElement.removeEventListener("mouseleave", this.hide);
            _referenceElement.removeEventListener("focus", this.show);
            _referenceElement.removeEventListener("blur", this.hide);
        };
        this.show = () => {
            this.open = true;
        };
        this.hide = () => {
            this.open = false;
        };
    }
    offsetDistanceOffsetHandler() {
        this.reposition();
    }
    offsetSkiddingHandler() {
        this.reposition();
    }
    openHandler(open) {
        if (open) {
            this.createPopper();
        }
        else {
            this.destroyPopper();
        }
    }
    placementHandler() {
        this.reposition();
    }
    referenceElementHandler() {
        this.removeReferenceListeners();
        this._referenceElement = this.getReferenceElement();
        this.addReferenceListeners();
        this.addReferenceAria();
        this.createPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        this.addReferenceListeners();
        this.addReferenceAria();
        this.createPopper();
    }
    componentDidUnload() {
        this.removeReferenceListeners();
        this.destroyPopper();
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    async reposition() {
        const { popper, el, placement } = this;
        const modifiers = this.getModifiers();
        popper
            ? updatePopper({
                el,
                modifiers,
                placement,
                popper
            })
            : this.createPopper();
    }
    getReferenceElement() {
        const { referenceElement } = this;
        return ((typeof referenceElement === "string"
            ? document.getElementById(referenceElement)
            : referenceElement) || null);
    }
    getModifiers() {
        const { arrowEl, offsetDistance, offsetSkidding } = this;
        const arrowModifier = {
            name: "arrow",
            enabled: true,
            options: {
                element: arrowEl
            }
        };
        const offsetModifier = {
            name: "offset",
            enabled: true,
            options: {
                offset: [offsetSkidding, offsetDistance]
            }
        };
        return [arrowModifier, offsetModifier];
    }
    createPopper() {
        this.destroyPopper();
        const { el, open, placement, _referenceElement: referenceEl } = this;
        const modifiers = this.getModifiers();
        this.popper = createPopper$1({
            el,
            modifiers,
            open,
            placement,
            referenceEl
        });
    }
    destroyPopper() {
        const { popper } = this;
        if (popper) {
            popper.destroy();
        }
        this.popper = null;
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { _referenceElement, open } = this;
        const displayed = _referenceElement && open;
        return (h(Host, { role: "tooltip", class: {
                [HOST_CSS.hydratedInvisible]: !displayed
            }, "aria-hidden": !displayed ? "true" : "false", id: this.getId() }, h("div", { class: CSS$4.arrow, ref: arrowEl => (this.arrowEl = arrowEl) }), h("div", { class: CSS$4.container }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "offsetDistance": ["offsetDistanceOffsetHandler"],
        "offsetSkidding": ["offsetSkiddingHandler"],
        "open": ["openHandler"],
        "placement": ["placementHandler"],
        "referenceElement": ["referenceElementHandler"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-tooltip",
        "$members$": {
            "offsetDistance": [514, "offset-distance"],
            "offsetSkidding": [514, "offset-skidding"],
            "open": [516],
            "placement": [513],
            "referenceElement": [1, "reference-element"],
            "theme": [513],
            "_referenceElement": [32],
            "reposition": [64]
        },
        "$listeners$": undefined,
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

var TreeSelectionMode;
(function (TreeSelectionMode) {
    TreeSelectionMode["Single"] = "single";
    TreeSelectionMode["Multi"] = "multi";
    TreeSelectionMode["Children"] = "children";
    TreeSelectionMode["MultiChildren"] = "multi-children";
})(TreeSelectionMode || (TreeSelectionMode = {}));

class CalciteTree {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Be sure to add a jsdoc comment describing your propery for the generated readme file.
         * If your property should be hidden from documentation, you can use the `@internal` tag
         */
        this.lines = false;
        this.root = true;
        this.theme = "light";
        this.size = "m";
        this.selectionMode = TreeSelectionMode.Single;
        this.calciteTreeSelect = createEvent(this, "calciteTreeSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillUpdate() { }
    componentWillRender() {
        const parent = this.el.parentElement.closest("calcite-tree");
        this.theme = getElementTheme(this.el);
        this.lines = parent ? parent.lines : this.lines;
        this.size = parent ? parent.size : this.size;
        this.selectionMode = parent ? parent.selectionMode : this.selectionMode;
        this.root = parent ? false : true;
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { tabindex: this.root ? "1" : undefined, dir: dir, "aria-role": this.root ? "tree" : undefined, "aria-multiselectable": this.selectionMode === TreeSelectionMode.Multi ||
                this.selectionMode === TreeSelectionMode.MultiChildren }, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onFocus() {
        if (this.root) {
            const selectedNode = this.el.querySelector("calcite-tree-item[selected]");
            const firstNode = this.el.querySelector("calcite-tree-item");
            (selectedNode || firstNode).focus();
        }
    }
    onClick(e) {
        const target = e.target;
        const childItems = nodeListToArray(target.querySelectorAll("calcite-tree-item"));
        const shouldSelect = this.selectionMode !== null &&
            (!target.hasChildren ||
                (target.hasChildren &&
                    (this.selectionMode === TreeSelectionMode.Children ||
                        this.selectionMode === TreeSelectionMode.MultiChildren)));
        const shouldModifyToCurrentSelection = e.detail.modifyCurrentSelection &&
            (this.selectionMode === TreeSelectionMode.Multi ||
                this.selectionMode === TreeSelectionMode.MultiChildren);
        const shouldSelectChildren = this.selectionMode === TreeSelectionMode.MultiChildren ||
            this.selectionMode === TreeSelectionMode.Children;
        const shouldClearCurrentSelection = !shouldModifyToCurrentSelection &&
            (((this.selectionMode === TreeSelectionMode.Single ||
                this.selectionMode === TreeSelectionMode.Multi) &&
                childItems.length <= 0) ||
                (this.selectionMode === TreeSelectionMode.Children ||
                    this.selectionMode === TreeSelectionMode.MultiChildren));
        const shouldExpandTarget = this.selectionMode === TreeSelectionMode.Children ||
            this.selectionMode === TreeSelectionMode.MultiChildren;
        if (this.root) {
            const targetItems = [];
            if (shouldSelect) {
                targetItems.push(target);
            }
            if (shouldSelectChildren) {
                childItems.forEach(treeItem => {
                    targetItems.push(treeItem);
                });
            }
            if (shouldClearCurrentSelection) {
                const selectedItems = nodeListToArray(this.el.querySelectorAll("calcite-tree-item[selected]"));
                selectedItems.forEach(treeItem => {
                    if (!targetItems.includes(treeItem)) {
                        treeItem.selected = false;
                    }
                });
            }
            if (shouldExpandTarget && !e.detail.forceToggle) {
                target.expanded = true;
            }
            if (shouldModifyToCurrentSelection) {
                window.getSelection().removeAllRanges();
            }
            if ((shouldModifyToCurrentSelection && target.selected) ||
                (shouldSelectChildren && e.detail.forceToggle)) {
                targetItems.forEach(treeItem => {
                    treeItem.selected = false;
                });
            }
            else {
                targetItems.forEach(treeItem => {
                    treeItem.selected = true;
                });
            }
        }
        if (this.root) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.calciteTreeSelect.emit({
            selected: nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter(i => i.selected)
        });
    }
    get el() { return getElement(this); }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-tree",
        "$members$": {
            "lines": [1540],
            "root": [1540],
            "theme": [1537],
            "size": [1537],
            "selectionMode": [1537, "selection-mode"]
        },
        "$listeners$": [[0, "focus", "onFocus"], [0, "calciteTreeItemSelect", "onClick"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

class CalciteTreeItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Be sure to add a jsdoc comment describing your property for the generated readme file.
         * If your property should be hidden from documentation, you can use the `@internal` tag
         */
        this.selected = false;
        this.depth = -1;
        this.hasChildren = null;
        this.expanded = false;
        this.parentExpanded = false;
        this.iconClickHandler = (event) => {
            event.stopPropagation();
            this.expanded = !this.expanded;
            this.calciteTreeItemSelect.emit({
                modifyCurrentSelection: event.shiftKey,
                forceToggle: true
            });
        };
        this.childrenClickHandler = event => event.stopPropagation();
        this.calciteTreeItemSelect = createEvent(this, "calciteTreeItemSelect", 7);
    }
    expandedHandler(newValue) {
        if (this.childrenSlotWrapper) {
            const [childTree] = getSlottedElements(this.childrenSlotWrapper, "calcite-tree");
            if (childTree) {
                const items = getSlottedElements(childTree, "calcite-tree-item");
                items.forEach(item => (item.parentExpanded = newValue));
            }
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillRender() {
        this.hasChildren = !!this.el.querySelector("calcite-tree");
        let parentTree = this.el.closest("calcite-tree");
        this.selectionMode = parentTree.selectionMode;
        this.depth = 0;
        let nextParentTree;
        while (parentTree) {
            nextParentTree = parentTree.parentElement.closest("calcite-tree");
            if (nextParentTree === parentTree) {
                break;
            }
            else {
                parentTree = nextParentTree;
                this.depth = this.depth + 1;
            }
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const icon = this.hasChildren ? (h("calcite-icon", { class: "calcite-tree-chevron", icon: "chevron-right", scale: "s", onClick: this.iconClickHandler, "data-test-id": "icon" })) : null;
        return (h(Host, { tabindex: this.parentExpanded || this.depth === 1 ? "0" : "-1", dir: dir, "aria-role": "treeitem", "aria-hidden": this.parentExpanded || this.depth === 1 ? undefined : "true", "aria-selected": this.selected
                ? "true"
                : this.selectionMode === TreeSelectionMode.Multi ||
                    this.selectionMode === TreeSelectionMode.MultiChildren
                    ? "false"
                    : undefined, "aria-expanded": this.hasChildren ? this.expanded.toString() : undefined }, h("div", { class: "calcite-tree-node", ref: el => (this.defaultSlotWrapper = el) }, icon, h("slot", null)), h("div", { class: "calcite-tree-children", "data-test-id": "calcite-tree-children", role: this.hasChildren ? "group" : undefined, ref: el => (this.childrenSlotWrapper = el), onClick: this.childrenClickHandler }, h("slot", { name: "children" }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick(e) {
        // Solve for if the item is clicked somewhere outside the slotted anchor.
        // Anchor is triggered anywhere you click
        const [link] = getSlottedElements(this.defaultSlotWrapper, "a");
        if (link && e.composedPath()[0].tagName.toLowerCase() !== "a") {
            const target = link.target === "" ? "_self" : link.target;
            window.open(link.href, target);
        }
        this.expanded = !this.expanded;
        this.calciteTreeItemSelect.emit({
            modifyCurrentSelection: e.shiftKey,
            forceToggle: false
        });
    }
    keyDownHandler(e) {
        let root;
        switch (e.keyCode) {
            case SPACE:
                this.selected = !this.selected;
                e.preventDefault();
                e.stopPropagation();
                break;
            case ENTER:
                // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
                const link = nodeListToArray(this.el.children).find(e => e.matches("a"));
                if (link) {
                    link.click();
                    this.selected = true;
                }
                else {
                    this.selected = !this.selected;
                }
                e.preventDefault();
                e.stopPropagation();
                break;
            case LEFT:
                // When focus is on an open node, closes the node.
                if (this.hasChildren && this.expanded) {
                    this.expanded = false;
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
                const parentItem = this.el.parentElement.closest("calcite-tree-item");
                if (parentItem && (!this.hasChildren || this.expanded === false)) {
                    parentItem.focus();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a root node that is also either an end node or a closed node, does nothing.
                break;
            case RIGHT:
                // When focus is on a closed node, opens the node; focus does not move.
                if (this.hasChildren && this.expanded === false) {
                    this.expanded = true;
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a open node, moves focus to the first child node.
                if (this.hasChildren && this.expanded) {
                    this.el.querySelector("calcite-tree-item").focus();
                    break;
                }
                // When focus is on an end node, does nothing.
                break;
            case UP:
                const previous = this.el
                    .previousElementSibling;
                if (previous && previous.matches("calcite-tree-item")) {
                    previous.focus();
                }
                break;
            case DOWN:
                const next = this.el.nextElementSibling;
                if (next && next.matches("calcite-tree-item")) {
                    next.focus();
                }
                break;
            case HOME:
                root = this.el.closest("calcite-tree[root]");
                const firstNode = root.querySelector("calcite-tree-item");
                firstNode.focus();
                break;
            case END:
                root = this.el.closest("calcite-tree[root]");
                let currentNode = root.children[root.children.length - 1]; // last child
                let currentTree = nodeListToArray(currentNode.children).find(e => e.matches("calcite-tree"));
                while (currentTree) {
                    currentNode = currentTree.children[root.children.length - 1];
                    currentTree = nodeListToArray(currentNode.children).find(e => e.matches("calcite-tree"));
                }
                currentNode.focus();
                break;
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "expanded": ["expandedHandler"]
    }; }
    static get cmpMeta() { return {
        "$flags$": 9,
        "$tagName$": "calcite-tree-item",
        "$members$": {
            "selected": [1540],
            "depth": [1538],
            "hasChildren": [1540, "has-children"],
            "expanded": [1540],
            "parentExpanded": [1028, "parent-expanded"],
            "selectionMode": [32]
        },
        "$listeners$": [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"]],
        "$lazyBundleIds$": "-",
        "$attrsToReflect$": []
    }; }
}

const cmps = [
  CalciteAccordion,
  CalciteAccordionItem,
  CalciteAlert,
  CalciteButton,
  CalciteCard,
  CalciteCheckbox,
  CalciteDateDay,
  CalciteDateMonth,
  CalciteDateMonthHeader,
  CalciteDatePicker,
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
  CalciteExample,
  CalciteIcon,
  CalciteLoader,
  CalciteModal,
  CalciteNotice,
  CalcitePagination,
  CalcitePopover,
  CalciteProgress,
  CalciteRadioGroup,
  CalciteRadioGroupItem,
  CalciteSlider,
  CalciteSwitch,
  CalciteTab,
  CalciteTabNav,
  CalciteTabTitle,
  CalciteTabs,
  CalciteTooltip,
  CalciteTree,
  CalciteTreeItem,
];
registerComponents(cmps);
styles.set('sc-calcite-accordion','/*!\@:root*/.sc-calcite-accordion:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-accordion-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-accordion:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-accordion-h{display:none}/*!\@body*/body.sc-calcite-accordion{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-accordion{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-accordion{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-accordion{display:block}/*!\@a*/a.sc-calcite-accordion{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-accordion{visibility:hidden}/*!\@:host([scale=s])*/[scale=s].sc-calcite-accordion-h{--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.8125rem;line-height:1.5}/*!\@:host([scale=m])*/[scale=m].sc-calcite-accordion-h{--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.875rem;line-height:1.5}/*!\@:host([scale=l])*/[scale=l].sc-calcite-accordion-h{--calcite-accordion-item-spacing-unit:1.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.9375rem;line-height:1.5}/*!\@:host([icon-position=start])*/[icon-position=start].sc-calcite-accordion-h{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-rotation:90deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:-90deg;--calcite-accordion-item-active-icon-rotation-rtl:-180deg;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-item-spacing-unit)}/*!\@:host([icon-position=end])*/[icon-position=end].sc-calcite-accordion-h{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-rotation:-90deg;--calcite-accordion-item-active-icon-rotation:-180deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:180deg;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-item-spacing-unit);--calcite-accordion-item-icon-spacing-end:0}/*!\@:host*/.sc-calcite-accordion-h{display:block;position:relative;max-width:100%;border:1px solid var(--calcite-ui-border-2);border-bottom:none;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground)}/*!\@:host([appearance=minimal])*/[appearance=minimal].sc-calcite-accordion-h{--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0;border-color:transparent}/*!\@:host([appearance=transparent])*/[appearance=transparent].sc-calcite-accordion-h{border-color:transparent;--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}');
styles.set('sc-calcite-accordion-item','/*!\@:root*/.sc-calcite-accordion-item:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-accordion-item-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-accordion-item:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-accordion-item-h{display:none}/*!\@body*/body.sc-calcite-accordion-item{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-accordion-item{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-accordion-item{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-accordion-item{display:block}/*!\@a*/a.sc-calcite-accordion-item{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-accordion-item{visibility:hidden}/*!\@:host*/.sc-calcite-accordion-item-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-accordion-item-background);color:var(--calcite-ui-text-3);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;text-decoration:none;outline:none;position:relative}/*!\@:host([active])*/[active].sc-calcite-accordion-item-h{color:var(--calcite-ui-text-1)}/*!\@:host([active]) .accordion-item-content*/[active].sc-calcite-accordion-item-h .accordion-item-content.sc-calcite-accordion-item{display:block;color:var(--calcite-ui-text-1)}/*!\@:host([active]) .accordion-item-header*/[active].sc-calcite-accordion-item-h .accordion-item-header.sc-calcite-accordion-item{border-bottom-color:transparent}/*!\@:host .accordion-item-header*/.sc-calcite-accordion-item-h .accordion-item-header.sc-calcite-accordion-item{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction);-ms-flex-align:center;align-items:center;cursor:pointer}/*!\@:host .accordion-item-content,:host .accordion-item-header*/.sc-calcite-accordion-item-h .accordion-item-content.sc-calcite-accordion-item, .sc-calcite-accordion-item-h .accordion-item-header.sc-calcite-accordion-item{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border)}/*!\@:host .accordion-item-header **/.sc-calcite-accordion-item-h .accordion-item-header.sc-calcite-accordion-item *.sc-calcite-accordion-item{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}/*!\@:host .accordion-item-content*/.sc-calcite-accordion-item-h .accordion-item-content.sc-calcite-accordion-item{display:none;color:var(--calcite-ui-text-3);padding-top:0}/*!\@:host .accordion-item-icon*/.sc-calcite-accordion-item-h .accordion-item-icon.sc-calcite-accordion-item{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end);color:var(--calcite-ui-text-3);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}/*!\@:host([dir=rtl]) .accordion-item-icon*/[dir=rtl].sc-calcite-accordion-item-h .accordion-item-icon.sc-calcite-accordion-item{margin-left:var(--calcite-accordion-item-icon-spacing-end);margin-right:var(--calcite-accordion-item-icon-spacing-start);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}/*!\@:host([active]) .accordion-item-icon*/[active].sc-calcite-accordion-item-h .accordion-item-icon.sc-calcite-accordion-item{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}/*!\@:host([active][dir=rtl]) .accordion-item-icon*/[active][dir=rtl].sc-calcite-accordion-item-h .accordion-item-icon.sc-calcite-accordion-item{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}/*!\@:host .accordion-item-header-text*/.sc-calcite-accordion-item-h .accordion-item-header-text.sc-calcite-accordion-item{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}/*!\@:host([dir=rtl]) .accordion-item-header-text*/[dir=rtl].sc-calcite-accordion-item-h .accordion-item-header-text.sc-calcite-accordion-item{margin-left:auto;margin-right:0}/*!\@:host .accordion-item-subtitle,:host .accordion-item-title*/.sc-calcite-accordion-item-h .accordion-item-subtitle.sc-calcite-accordion-item, .sc-calcite-accordion-item-h .accordion-item-title.sc-calcite-accordion-item{display:-ms-flexbox;display:flex;width:100%}/*!\@:host .accordion-item-title*/.sc-calcite-accordion-item-h .accordion-item-title.sc-calcite-accordion-item{color:var(--calcite-ui-text-2)}/*!\@:host .accordion-item-subtitle*/.sc-calcite-accordion-item-h .accordion-item-subtitle.sc-calcite-accordion-item{color:var(--calcite-ui-text-3)}/*!\@:host([dir=rtl]) .accordion-item-title*/[dir=rtl].sc-calcite-accordion-item-h .accordion-item-title.sc-calcite-accordion-item{margin-right:0;margin-left:auto}/*!\@:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title*/.sc-calcite-accordion-item-h:focus .accordion-item-title.sc-calcite-accordion-item, .sc-calcite-accordion-item-h:hover .accordion-item-title.sc-calcite-accordion-item{color:var(--calcite-ui-text-1)}/*!\@:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle*/.sc-calcite-accordion-item-h:focus .accordion-item-subtitle.sc-calcite-accordion-item, .sc-calcite-accordion-item-h:hover .accordion-item-subtitle.sc-calcite-accordion-item{color:var(--calcite-ui-text-2)}/*!\@:host(:active) .accordion-item-title,:host(:focus) .accordion-item-title,:host([active]) .accordion-item-title*/.sc-calcite-accordion-item-h:active .accordion-item-title.sc-calcite-accordion-item, .sc-calcite-accordion-item-h:focus .accordion-item-title.sc-calcite-accordion-item, [active].sc-calcite-accordion-item-h .accordion-item-title.sc-calcite-accordion-item{color:var(--calcite-ui-text-1);font-weight:500}/*!\@:host(:active) .accordion-item-subtitle,:host(:focus) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle*/.sc-calcite-accordion-item-h:active .accordion-item-subtitle.sc-calcite-accordion-item, .sc-calcite-accordion-item-h:focus .accordion-item-subtitle.sc-calcite-accordion-item, [active].sc-calcite-accordion-item-h .accordion-item-subtitle.sc-calcite-accordion-item{color:var(--calcite-ui-text-2)}');
styles.set('sc-calcite-alert','/*!\@:root*/.sc-calcite-alert:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-alert-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-alert:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-alert-h{display:none}/*!\@body*/body.sc-calcite-alert{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-alert{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-alert{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-alert{display:block}/*!\@a*/a.sc-calcite-alert{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-alert{visibility:hidden}/*!\@:host*/.sc-calcite-alert-h{--calcite-alert-dismiss-progress-background:hsla(0,0%,100%,0.8)}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-alert-h{--calcite-alert-dismiss-progress-background:rgba(43,43,43,0.8)}/*!\@:host([scale=s])*/[scale=s].sc-calcite-alert-h{--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}/*!\@:host([scale=s]) div::slotted([slot=alert-title]),:host([scale=s]) slot[name=alert-title]::slotted(div)*/.sc-calcite-alert-h[scale=s] div.sc-calcite-alert-s > [slot=alert-title], .sc-calcite-alert-h[scale=s] slot[name=alert-title].sc-calcite-alert-s > div{font-size:.875rem;line-height:1.5}/*!\@:host([scale=s]) ::slotted(calcite-button),:host([scale=s]) div::slotted([slot=alert-message]),:host([scale=s]) slot[name=alert-message]::slotted(div)*/.sc-calcite-alert-h[scale=s] .sc-calcite-alert-s > calcite-button, .sc-calcite-alert-h[scale=s] div.sc-calcite-alert-s > [slot=alert-message], .sc-calcite-alert-h[scale=s] slot[name=alert-message].sc-calcite-alert-s > div{font-size:.8125rem;line-height:1.5}/*!\@:host([scale=m])*/[scale=m].sc-calcite-alert-h{--calcite-alert-width:50em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.5rem}/*!\@:host([scale=m]) div::slotted([slot=alert-title]),:host([scale=m]) slot[name=alert-title]::slotted(div)*/.sc-calcite-alert-h[scale=m] div.sc-calcite-alert-s > [slot=alert-title], .sc-calcite-alert-h[scale=m] slot[name=alert-title].sc-calcite-alert-s > div{font-size:.9375rem;line-height:1.5}/*!\@:host([scale=m]) ::slotted(calcite-button),:host([scale=m]) div::slotted([slot=alert-message]),:host([scale=m]) slot[name=alert-message]::slotted(div)*/.sc-calcite-alert-h[scale=m] .sc-calcite-alert-s > calcite-button, .sc-calcite-alert-h[scale=m] div.sc-calcite-alert-s > [slot=alert-message], .sc-calcite-alert-h[scale=m] slot[name=alert-message].sc-calcite-alert-s > div{font-size:.875rem;line-height:1.5}/*!\@:host([scale=l])*/[scale=l].sc-calcite-alert-h{--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1.2rem;--calcite-alert-spacing-token-large:1.875rem}/*!\@:host([scale=l]) div::slotted([slot=alert-title]),:host([scale=l]) slot[name=alert-title]::slotted(div)*/.sc-calcite-alert-h[scale=l] div.sc-calcite-alert-s > [slot=alert-title], .sc-calcite-alert-h[scale=l] slot[name=alert-title].sc-calcite-alert-s > div{font-size:1rem;line-height:1.5}/*!\@:host([scale=l]) ::slotted(calcite-button),:host([scale=l]) div::slotted([slot=alert-message]),:host([scale=l]) slot[name=alert-message]::slotted(div)*/.sc-calcite-alert-h[scale=l] .sc-calcite-alert-s > calcite-button, .sc-calcite-alert-h[scale=l] div.sc-calcite-alert-s > [slot=alert-message], .sc-calcite-alert-h[scale=l] slot[name=alert-message].sc-calcite-alert-s > div{font-size:.9375rem;line-height:1.5}/*!\@:host*/.sc-calcite-alert-h{display:-ms-flexbox;display:flex;position:fixed;-ms-flex-pack:center;justify-content:center;margin:0 auto;width:var(--calcite-alert-width);max-width:90%;max-height:0;background-color:var(--calcite-ui-foreground);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);border-radius:var(--calcite-border-radius);opacity:0;left:0;right:0;bottom:0;pointer-events:none;z-index:101;-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;border-top:0 solid transparent}\@media only screen and (max-width:860px){/*!\@:host*/.sc-calcite-alert-h{width:100%;max-width:100%;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}/*!\@:host:host(.hydrated)*/.sc-calcite-alert-h (.hydrated).sc-calcite-alert-h{visibility:hidden!important}/*!\@:host([active])*/[active].sc-calcite-alert-h{opacity:1;max-height:100%;-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);pointer-events:auto;border-top-width:3px}/*!\@:host([active]):host(.hydrated)*/[active].sc-calcite-alert-h (.hydrated).sc-calcite-alert-h{visibility:visible!important}\@media only screen and (max-width:860px){/*!\@:host([active])*/[active].sc-calcite-alert-h{-webkit-transform:translateZ(0);transform:translateZ(0)}}/*!\@div::slotted([slot=alert-title]),slot[name=alert-title]::slotted(div)*/div.sc-calcite-alert-s > [slot=alert-title], slot[name=alert-title].sc-calcite-alert-s > div{font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-1);font-weight:500}/*!\@div::slotted([slot=alert-message]),slot[name=alert-message]::slotted(div)*/div.sc-calcite-alert-s > [slot=alert-message], slot[name=alert-message].sc-calcite-alert-s > div{display:inline;margin-right:.75rem;font-size:.9375rem;line-height:1.5;color:var(--calcite-ui-text-2)}/*!\@:host([dir=rtl]) div::slotted([slot=alert-message]),:host([dir=rtl]) slot[name=alert-message]::slotted(div)*/.sc-calcite-alert-h[dir=rtl] div.sc-calcite-alert-s > [slot=alert-message], .sc-calcite-alert-h[dir=rtl] slot[name=alert-message].sc-calcite-alert-s > div{margin-right:unset;margin-left:.75rem}/*!\@.alert-content*/.alert-content.sc-calcite-alert{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) 0}\@media only screen and (max-width:860px){/*!\@.alert-content*/.alert-content.sc-calcite-alert{padding:1.5rem}}/*!\@.alert-content:first-of-type:not(:only-child)*/.alert-content.sc-calcite-alert:first-of-type:not(:only-child){padding-left:var(--calcite-alert-spacing-token-large)}/*!\@.alert-content:only-child*/.alert-content.sc-calcite-alert:only-child{padding:var(--calcite-alert-spacing-token-small)}\@media only screen and (max-width:860px){/*!\@.alert-content*/.alert-content.sc-calcite-alert{padding:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large) 0}}/*!\@:host([dir=rtl]) .alert-content*/[dir=rtl].sc-calcite-alert-h .alert-content.sc-calcite-alert{padding:var(--calcite-alert-spacing-token-small) 0 var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small)}/*!\@:host([dir=rtl]) .alert-content:first-of-type:not(:only-child)*/[dir=rtl].sc-calcite-alert-h .alert-content.sc-calcite-alert:first-of-type:not(:only-child){padding-right:var(--calcite-alert-spacing-token-large)}\@media only screen and (max-width:860px){/*!\@:host([dir=rtl]) .alert-content*/[dir=rtl].sc-calcite-alert-h .alert-content.sc-calcite-alert{padding:var(--calcite-alert-spacing-token-large) 0 var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}}/*!\@.alert-icon*/.alert-icon.sc-calcite-alert{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media only screen and (max-width:860px){/*!\@.alert-icon*/.alert-icon.sc-calcite-alert{padding:1.5rem}}/*!\@.alert-close*/.alert-close.sc-calcite-alert{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3);overflow:hidden;border-radius:0 0 var(--calcite-border-radius) 0}\@media only screen and (max-width:860px){/*!\@.alert-close*/.alert-close.sc-calcite-alert{padding:1.5rem}}/*!\@.alert-close:focus,.alert-close:hover*/.alert-close.sc-calcite-alert:focus, .alert-close.sc-calcite-alert:hover{background-color:var(--calcite-ui-foreground-hover)}/*!\@.alert-close:active*/.alert-close.sc-calcite-alert:active{background-color:var(--calcite-ui-foreground-press)}\@media only screen and (max-width:860px){/*!\@.alert-close*/.alert-close.sc-calcite-alert{border-radius:0}}/*!\@:host([dir=rtl]) .alert-close*/[dir=rtl].sc-calcite-alert-h .alert-close.sc-calcite-alert{border-radius:0 0 0 var(--calcite-border-radius)}/*!\@.alert-count*/.alert-count.sc-calcite-alert{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-ui-text-2);opacity:0;border-left:0 solid transparent;border-right:0 solid transparent;cursor:default;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}/*!\@.alert-count.active*/.alert-count.active.sc-calcite-alert{visibility:visible;opacity:1;padding:0 .375rem;width:3rem;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3)}/*!\@.alert-count.active:last-child*/.alert-count.active.sc-calcite-alert:last-child{border-right:0 solid transparent}\@media only screen and (max-width:860px){/*!\@.alert-count*/.alert-count.sc-calcite-alert{border-radius:0}}/*!\@:host([dir=rtl]).active:last-child*/[dir=rtl].active.sc-calcite-alert-h:last-child{border-left:1px solid var(--calcite-ui-border-3);border-right:0 solid transparent}/*!\@.alert-dismiss-progress*/.alert-dismiss-progress.sc-calcite-alert{display:block;position:absolute;left:0;right:0;top:0;width:100%;height:3px;z-index:103}/*!\@.alert-dismiss-progress:after*/.alert-dismiss-progress.sc-calcite-alert:after{height:3px;top:-3px;right:0;display:block;position:absolute;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0;content:\"\";background-color:var(--calcite-alert-dismiss-progress-background);z-index:104}/*!\@:host([color=blue])*/[color=blue].sc-calcite-alert-h{border-top-color:var(--calcite-ui-blue)}/*!\@:host([color=blue]) .alert-icon*/[color=blue].sc-calcite-alert-h .alert-icon.sc-calcite-alert{color:var(--calcite-ui-blue)}/*!\@:host([color=red])*/[color=red].sc-calcite-alert-h{border-top-color:var(--calcite-ui-red)}/*!\@:host([color=red]) .alert-icon*/[color=red].sc-calcite-alert-h .alert-icon.sc-calcite-alert{color:var(--calcite-ui-red)}/*!\@:host([color=yellow])*/[color=yellow].sc-calcite-alert-h{border-top-color:var(--calcite-ui-yellow)}/*!\@:host([color=yellow]) .alert-icon*/[color=yellow].sc-calcite-alert-h .alert-icon.sc-calcite-alert{color:var(--calcite-ui-yellow)}/*!\@:host([color=green])*/[color=green].sc-calcite-alert-h{border-top-color:var(--calcite-ui-green)}/*!\@:host([color=green]) .alert-icon*/[color=green].sc-calcite-alert-h .alert-icon.sc-calcite-alert{color:var(--calcite-ui-green)}/*!\@:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after*/[auto-dismiss-duration=fast].sc-calcite-alert-h .alert-dismiss-progress.sc-calcite-alert:after{-webkit-animation:dismissProgress 6s ease-out;animation:dismissProgress 6s ease-out}/*!\@:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after*/[auto-dismiss-duration=medium].sc-calcite-alert-h .alert-dismiss-progress.sc-calcite-alert:after{-webkit-animation:dismissProgress 10s ease-out;animation:dismissProgress 10s ease-out}/*!\@:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after*/[auto-dismiss-duration=slow].sc-calcite-alert-h .alert-dismiss-progress.sc-calcite-alert:after{-webkit-animation:dismissProgress 14s ease-out;animation:dismissProgress 14s ease-out}\@-webkit-keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}\@keyframes dismissProgress{0%{width:0;opacity:.8}to{width:100%;opacity:1}}');
styles.set('sc-calcite-button','/*!\@:root*/.sc-calcite-button:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-button-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-button:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-button-h{display:none}/*!\@body*/body.sc-calcite-button{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-button{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-button{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-button{display:block}/*!\@a*/a.sc-calcite-button{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-button{visibility:hidden}/*!\@:host*/.sc-calcite-button-h{display:inline-block;width:auto;vertical-align:middle;--calcite-blue-accessible:#00619b;--calcite-red-accessible:#a82b1e;--calcite-button-light:#f3f3f3;--calcite-button-light-hover:#fff;--calcite-button-light-press:#eaeaea;--calcite-button-dark:#353535;--calcite-button-dark-hover:#404040;--calcite-button-dark-press:#2b2b2b;--calcite-button-blue-inline-underline:rgba(0,122,194,0.2);--calcite-button-red-inline-underline:rgba(216,48,32,0.2);--calcite-button-blue-solid-color:#fff;--calcite-button-red-solid-color:#fff;--calcite-button-outline-background:#fff;--calcite-button-outline-color:#0b0b0b;--calcite-button-outline-color-press:#0b0b0b}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-button-h{--calcite-blue-accessible:#00a0ff;--calcite-red-accessible:#fe583e;--calcite-button-light:#f3f3f3;--calcite-button-light-hover:#eaeaea;--calcite-button-light-press:#fff;--calcite-button-dark:#353535;--calcite-button-dark-hover:#2b2b2b;--calcite-button-dark-press:#404040;--calcite-button-blue-inline-underline:rgba(0,160,255,0.2);--calcite-button-red-inline-underline:rgba(254,88,62,0.2);--calcite-button-blue-solid-color:#0b0b0b;--calcite-button-red-solid-color:#0b0b0b;--calcite-button-outline-background:#151515;--calcite-button-outline-color:#fff;--calcite-button-outline-color-press:#fff}/*!\@:host([appearance=inline])*/[appearance=inline].sc-calcite-button-h{display:inline}/*!\@:host([round]),:host([round]) a,:host([round]) button*/[round].sc-calcite-button-h, [round].sc-calcite-button-h a.sc-calcite-button, [round].sc-calcite-button-h button.sc-calcite-button{border-radius:50px}/*!\@:host([floating]) a,:host([floating]) button*/[floating].sc-calcite-button-h a.sc-calcite-button, [floating].sc-calcite-button-h button.sc-calcite-button{-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([floating]) a:hover,:host([floating]) button:hover*/[floating].sc-calcite-button-h a.sc-calcite-button:hover, [floating].sc-calcite-button-h button.sc-calcite-button:hover{-webkit-box-shadow:0 0 32px 0 rgba(0,0,0,.16);box-shadow:0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([floating]) a:active,:host([floating]) button:active*/[floating].sc-calcite-button-h a.sc-calcite-button:active, [floating].sc-calcite-button-h button.sc-calcite-button:active{-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.32);box-shadow:0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host a,:host button,:host span*/.sc-calcite-button-h a.sc-calcite-button, .sc-calcite-button-h button.sc-calcite-button, .sc-calcite-button-h span.sc-calcite-button{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:.375rem 1rem;text-decoration:none;width:100%;height:100%;border-radius:0;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:inherit;font-family:inherit;-webkit-appearance:none;cursor:pointer;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}/*!\@:host a:hover,:host button:hover,:host span:hover*/.sc-calcite-button-h a.sc-calcite-button:hover, .sc-calcite-button-h button.sc-calcite-button:hover, .sc-calcite-button-h span.sc-calcite-button:hover{text-decoration:none}/*!\@:host([width=auto])*/[width=auto].sc-calcite-button-h{width:auto}/*!\@:host([width=half])*/[width=half].sc-calcite-button-h{width:50%}/*!\@:host([width=full])*/[width=full].sc-calcite-button-h{width:100%}/*!\@.calcite-button--icon*/.calcite-button--icon.sc-calcite-button{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}/*!\@:host([disabled]) a,:host([disabled]) button,:host([disabled]) span*/[disabled].sc-calcite-button-h a.sc-calcite-button, [disabled].sc-calcite-button-h button.sc-calcite-button, [disabled].sc-calcite-button-h span.sc-calcite-button{pointer-events:none;opacity:.4}/*!\@:host([hastext][icon-position=start]) .calcite-button--icon*/[hastext][icon-position=start].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-right:.5rem}/*!\@:host([hastext][icon-position=start][dir=rtl]) .calcite-button--icon*/[hastext][icon-position=start][dir=rtl].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-right:0;margin-left:.5rem}/*!\@:host([hastext][icon-position=end]) .calcite-button--icon*/[hastext][icon-position=end].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-left:.5rem}/*!\@:host([hastext][icon-position=end][dir=rtl]) .calcite-button--icon*/[hastext][icon-position=end][dir=rtl].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-left:0;margin-right:.5rem}/*!\@:host([appearance=inline][icon-position=start]) .calcite-button--icon*/[appearance=inline][icon-position=start].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-right:.375rem}/*!\@:host([appearance=inline][icon-position=start][dir=rtl]) .calcite-button--icon*/[appearance=inline][icon-position=start][dir=rtl].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-left:.375rem;margin-right:0}/*!\@:host([appearance=inline][icon-position=end]) .calcite-button--icon*/[appearance=inline][icon-position=end].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-left:.375rem}/*!\@:host([appearance=inline][icon-position=end][dir=rtl]) .calcite-button--icon*/[appearance=inline][icon-position=end][dir=rtl].sc-calcite-button-h .calcite-button--icon.sc-calcite-button{margin-left:0;margin-right:.375rem}/*!\@.calcite-button--loader*/.calcite-button--loader.sc-calcite-button{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}/*!\@.calcite-button--loader calcite-loader*/.calcite-button--loader.sc-calcite-button calcite-loader.sc-calcite-button{margin:0}/*!\@:host([loading]) a,:host([loading]) button*/[loading].sc-calcite-button-h a.sc-calcite-button, [loading].sc-calcite-button-h button.sc-calcite-button{color:transparent!important;pointer-events:none}/*!\@:host([loading]) a .calcite-button--icon,:host([loading]) button .calcite-button--icon*/[loading].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [loading].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{opacity:0}/*!\@:host([appearance=solid][color=blue]) a,:host([appearance=solid][color=blue]) button*/[appearance=solid][color=blue].sc-calcite-button-h a.sc-calcite-button, [appearance=solid][color=blue].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-button-blue-solid-color);background-color:var(--calcite-ui-blue);border:1px solid transparent}/*!\@:host([appearance=solid][color=blue]) a:focus,:host([appearance=solid][color=blue]) a:hover,:host([appearance=solid][color=blue]) button:focus,:host([appearance=solid][color=blue]) button:hover*/[appearance=solid][color=blue].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=solid][color=blue].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=solid][color=blue].sc-calcite-button-h button.sc-calcite-button:focus, [appearance=solid][color=blue].sc-calcite-button-h button.sc-calcite-button:hover{background-color:var(--calcite-ui-blue-hover)}/*!\@:host([appearance=solid][color=blue]) a:active,:host([appearance=solid][color=blue]) button:active*/[appearance=solid][color=blue].sc-calcite-button-h a.sc-calcite-button:active, [appearance=solid][color=blue].sc-calcite-button-h button.sc-calcite-button:active{background-color:var(--calcite-ui-blue)}/*!\@:host([appearance=solid][color=blue]) a .calcite-button--icon,:host([appearance=solid][color=blue]) button .calcite-button--icon*/[appearance=solid][color=blue].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=solid][color=blue].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-blue-solid-color)}/*!\@:host([appearance=solid][color=blue]) a calcite-loader,:host([appearance=solid][color=blue]) button calcite-loader*/[appearance=solid][color=blue].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=solid][color=blue].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-button-blue-solid-color)}/*!\@:host([appearance=solid][color=red]) a,:host([appearance=solid][color=red]) button*/[appearance=solid][color=red].sc-calcite-button-h a.sc-calcite-button, [appearance=solid][color=red].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-button-red-solid-color);background-color:var(--calcite-ui-red);border:1px solid transparent}/*!\@:host([appearance=solid][color=red]) a:focus,:host([appearance=solid][color=red]) a:hover,:host([appearance=solid][color=red]) button:focus,:host([appearance=solid][color=red]) button:hover*/[appearance=solid][color=red].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=solid][color=red].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=solid][color=red].sc-calcite-button-h button.sc-calcite-button:focus, [appearance=solid][color=red].sc-calcite-button-h button.sc-calcite-button:hover{background-color:var(--calcite-ui-red-hover)}/*!\@:host([appearance=solid][color=red]) a:active,:host([appearance=solid][color=red]) button:active*/[appearance=solid][color=red].sc-calcite-button-h a.sc-calcite-button:active, [appearance=solid][color=red].sc-calcite-button-h button.sc-calcite-button:active{background-color:var(--calcite-ui-red)}/*!\@:host([appearance=solid][color=red]) a .calcite-button--icon,:host([appearance=solid][color=red]) button .calcite-button--icon*/[appearance=solid][color=red].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=solid][color=red].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-red-solid-color)}/*!\@:host([appearance=solid][color=red]) a calcite-loader,:host([appearance=solid][color=red]) button calcite-loader*/[appearance=solid][color=red].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=solid][color=red].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-button-red-solid-color)}/*!\@:host([appearance=solid][color=light]) a,:host([appearance=solid][color=light]) button*/[appearance=solid][color=light].sc-calcite-button-h a.sc-calcite-button, [appearance=solid][color=light].sc-calcite-button-h button.sc-calcite-button{color:#151515;background-color:var(--calcite-button-light);border:1px solid transparent}/*!\@:host([appearance=solid][color=light]) a:focus,:host([appearance=solid][color=light]) a:hover,:host([appearance=solid][color=light]) button:focus,:host([appearance=solid][color=light]) button:hover*/[appearance=solid][color=light].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=solid][color=light].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=solid][color=light].sc-calcite-button-h button.sc-calcite-button:focus, [appearance=solid][color=light].sc-calcite-button-h button.sc-calcite-button:hover{background-color:var(--calcite-button-light-hover)}/*!\@:host([appearance=solid][color=light]) a:active,:host([appearance=solid][color=light]) button:active*/[appearance=solid][color=light].sc-calcite-button-h a.sc-calcite-button:active, [appearance=solid][color=light].sc-calcite-button-h button.sc-calcite-button:active{background-color:var(--calcite-button-light)}/*!\@:host([appearance=solid][color=light]) a .calcite-button--icon,:host([appearance=solid][color=light]) button .calcite-button--icon*/[appearance=solid][color=light].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=solid][color=light].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:#151515}/*!\@:host([appearance=solid][color=light]) a calcite-loader,:host([appearance=solid][color=light]) button calcite-loader*/[appearance=solid][color=light].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=solid][color=light].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:#151515}/*!\@:host([appearance=solid][color=dark]) a,:host([appearance=solid][color=dark]) button*/[appearance=solid][color=dark].sc-calcite-button-h a.sc-calcite-button, [appearance=solid][color=dark].sc-calcite-button-h button.sc-calcite-button{color:#fff;background-color:var(--calcite-button-dark);border:1px solid transparent}/*!\@:host([appearance=solid][color=dark]) a:focus,:host([appearance=solid][color=dark]) a:hover,:host([appearance=solid][color=dark]) button:focus,:host([appearance=solid][color=dark]) button:hover*/[appearance=solid][color=dark].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=solid][color=dark].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=solid][color=dark].sc-calcite-button-h button.sc-calcite-button:focus, [appearance=solid][color=dark].sc-calcite-button-h button.sc-calcite-button:hover{background-color:var(--calcite-button-dark-hover)}/*!\@:host([appearance=solid][color=dark]) a:active,:host([appearance=solid][color=dark]) button:active*/[appearance=solid][color=dark].sc-calcite-button-h a.sc-calcite-button:active, [appearance=solid][color=dark].sc-calcite-button-h button.sc-calcite-button:active{background-color:var(--calcite-button-dark)}/*!\@:host([appearance=solid][color=dark]) a .calcite-button--icon,:host([appearance=solid][color=dark]) button .calcite-button--icon*/[appearance=solid][color=dark].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=solid][color=dark].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:#fff}/*!\@:host([appearance=solid][color=dark]) a calcite-loader,:host([appearance=solid][color=dark]) button calcite-loader*/[appearance=solid][color=dark].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=solid][color=dark].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:#fff}/*!\@:host([appearance=outline][color=blue]:not([floating])) a,:host([appearance=outline][color=blue]:not([floating])) button*/[appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:var(--calcite-blue-accessible);background-color:var(--calcite-button-outline-background);border:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=outline][color=blue]:not([floating])) a:hover,:host([appearance=outline][color=blue]:not([floating])) button:hover*/[appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible);box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible)}/*!\@:host([appearance=outline][color=blue]:not([floating])) a:active,:host([appearance=outline][color=blue]:not([floating])) a:focus,:host([appearance=outline][color=blue]:not([floating])) button:active,:host([appearance=outline][color=blue]:not([floating])) button:focus*/[appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:var(--calcite-ui-blue-press);border-color:var(--calcite-ui-blue-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press)}/*!\@:host([appearance=outline][color=blue]:not([floating])) a:active .calcite-button--icon,:host([appearance=outline][color=blue]:not([floating])) a:focus .calcite-button--icon,:host([appearance=outline][color=blue]:not([floating])) button:active .calcite-button--icon,:host([appearance=outline][color=blue]:not([floating])) button:focus .calcite-button--icon*/[appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-blue-press)}/*!\@:host([appearance=outline][color=blue]:not([floating])) a .calcite-button--icon,:host([appearance=outline][color=blue]:not([floating])) button .calcite-button--icon*/[appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-blue-accessible)}/*!\@:host([appearance=outline][color=blue]:not([floating])) a calcite-loader,:host([appearance=outline][color=blue]:not([floating])) button calcite-loader*/[appearance=outline][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-blue-accessible)}/*!\@:host([appearance=outline][color=red]:not([floating])) a,:host([appearance=outline][color=red]:not([floating])) button*/[appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:var(--calcite-red-accessible);background-color:var(--calcite-button-outline-background);border:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=outline][color=red]:not([floating])) a:hover,:host([appearance=outline][color=red]:not([floating])) button:hover*/[appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-red-accessible);box-shadow:inset 0 0 0 1px var(--calcite-red-accessible)}/*!\@:host([appearance=outline][color=red]:not([floating])) a:active,:host([appearance=outline][color=red]:not([floating])) a:focus,:host([appearance=outline][color=red]:not([floating])) button:active,:host([appearance=outline][color=red]:not([floating])) button:focus*/[appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:var(--calcite-ui-red-press);border-color:var(--calcite-ui-red-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press)}/*!\@:host([appearance=outline][color=red]:not([floating])) a:active .calcite-button--icon,:host([appearance=outline][color=red]:not([floating])) a:focus .calcite-button--icon,:host([appearance=outline][color=red]:not([floating])) button:active .calcite-button--icon,:host([appearance=outline][color=red]:not([floating])) button:focus .calcite-button--icon*/[appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-red-press)}/*!\@:host([appearance=outline][color=red]:not([floating])) a .calcite-button--icon,:host([appearance=outline][color=red]:not([floating])) button .calcite-button--icon*/[appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-red-accessible)}/*!\@:host([appearance=outline][color=red]:not([floating])) a calcite-loader,:host([appearance=outline][color=red]:not([floating])) button calcite-loader*/[appearance=outline][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-red-accessible)}/*!\@:host([appearance=outline][color=light]:not([floating])) a,:host([appearance=outline][color=light]:not([floating])) button*/[appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:var(--calcite-button-outline-color);background-color:var(--calcite-button-outline-background);border:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=outline][color=light]:not([floating])) a:hover,:host([appearance=outline][color=light]:not([floating])) button:hover*/[appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px #f3f3f3;box-shadow:inset 0 0 0 1px #f3f3f3}/*!\@:host([appearance=outline][color=light]:not([floating])) a:active,:host([appearance=outline][color=light]:not([floating])) a:focus,:host([appearance=outline][color=light]:not([floating])) button:active,:host([appearance=outline][color=light]:not([floating])) button:focus*/[appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:var(--calcite-button-outline-press);border-color:#eaeaea;-webkit-box-shadow:inset 0 0 0 2px #eaeaea;box-shadow:inset 0 0 0 2px #eaeaea}/*!\@:host([appearance=outline][color=light]:not([floating])) a:active .calcite-button--icon,:host([appearance=outline][color=light]:not([floating])) a:focus .calcite-button--icon,:host([appearance=outline][color=light]:not([floating])) button:active .calcite-button--icon,:host([appearance=outline][color=light]:not([floating])) button:focus .calcite-button--icon*/[appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-press)}/*!\@:host([appearance=outline][color=light]:not([floating])) a .calcite-button--icon,:host([appearance=outline][color=light]:not([floating])) button .calcite-button--icon*/[appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-color)}/*!\@:host([appearance=outline][color=light]:not([floating])) a calcite-loader,:host([appearance=outline][color=light]:not([floating])) button calcite-loader*/[appearance=outline][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-button-outline-color)}/*!\@:host([appearance=outline][color=dark]:not([floating])) a,:host([appearance=outline][color=dark]:not([floating])) button*/[appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:var(--calcite-button-outline-color);background-color:var(--calcite-button-outline-background);border:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=outline][color=dark]:not([floating])) a:hover,:host([appearance=outline][color=dark]:not([floating])) button:hover*/[appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px #2b2b2b;box-shadow:inset 0 0 0 1px #2b2b2b}/*!\@:host([appearance=outline][color=dark]:not([floating])) a:active,:host([appearance=outline][color=dark]:not([floating])) a:focus,:host([appearance=outline][color=dark]:not([floating])) button:active,:host([appearance=outline][color=dark]:not([floating])) button:focus*/[appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:var(--calcite-button-outline-press);border-color:#151515;-webkit-box-shadow:inset 0 0 0 2px #151515;box-shadow:inset 0 0 0 2px #151515}/*!\@:host([appearance=outline][color=dark]:not([floating])) a:active .calcite-button--icon,:host([appearance=outline][color=dark]:not([floating])) a:focus .calcite-button--icon,:host([appearance=outline][color=dark]:not([floating])) button:active .calcite-button--icon,:host([appearance=outline][color=dark]:not([floating])) button:focus .calcite-button--icon*/[appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-press)}/*!\@:host([appearance=outline][color=dark]:not([floating])) a .calcite-button--icon,:host([appearance=outline][color=dark]:not([floating])) button .calcite-button--icon*/[appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-color)}/*!\@:host([appearance=outline][color=dark]:not([floating])) a calcite-loader,:host([appearance=outline][color=dark]:not([floating])) button calcite-loader*/[appearance=outline][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-button-outline-color)}/*!\@:host([appearance=clear][color=blue]:not([floating])) a,:host([appearance=clear][color=blue]:not([floating])) button*/[appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:var(--calcite-blue-accessible);background-color:transparent;border:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=clear][color=blue]:not([floating])) a:hover,:host([appearance=clear][color=blue]:not([floating])) button:hover*/[appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible);box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible)}/*!\@:host([appearance=clear][color=blue]:not([floating])) a:active,:host([appearance=clear][color=blue]:not([floating])) a:focus,:host([appearance=clear][color=blue]:not([floating])) button:active,:host([appearance=clear][color=blue]:not([floating])) button:focus*/[appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:var(--calcite-ui-blue-press);border-color:var(--calcite-ui-blue-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press)}/*!\@:host([appearance=clear][color=blue]:not([floating])) a:active .calcite-button--icon,:host([appearance=clear][color=blue]:not([floating])) a:focus .calcite-button--icon,:host([appearance=clear][color=blue]:not([floating])) button:active .calcite-button--icon,:host([appearance=clear][color=blue]:not([floating])) button:focus .calcite-button--icon*/[appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-blue-press)}/*!\@:host([appearance=clear][color=blue]:not([floating])) a .calcite-button--icon,:host([appearance=clear][color=blue]:not([floating])) button .calcite-button--icon*/[appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-blue-accessible)}/*!\@:host([appearance=clear][color=blue]:not([floating])) a calcite-loader,:host([appearance=clear][color=blue]:not([floating])) button calcite-loader*/[appearance=clear][color=blue].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-blue-accessible)}/*!\@:host([appearance=clear][color=red]:not([floating])) a,:host([appearance=clear][color=red]:not([floating])) button*/[appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:var(--calcite-red-accessible);background-color:transparent;border:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=clear][color=red]:not([floating])) a:hover,:host([appearance=clear][color=red]:not([floating])) button:hover*/[appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-red-accessible);box-shadow:inset 0 0 0 1px var(--calcite-red-accessible)}/*!\@:host([appearance=clear][color=red]:not([floating])) a:active,:host([appearance=clear][color=red]:not([floating])) a:focus,:host([appearance=clear][color=red]:not([floating])) button:active,:host([appearance=clear][color=red]:not([floating])) button:focus*/[appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:var(--calcite-ui-red-press);border-color:var(--calcite-ui-red-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press)}/*!\@:host([appearance=clear][color=red]:not([floating])) a:active .calcite-button--icon,:host([appearance=clear][color=red]:not([floating])) a:focus .calcite-button--icon,:host([appearance=clear][color=red]:not([floating])) button:active .calcite-button--icon,:host([appearance=clear][color=red]:not([floating])) button:focus .calcite-button--icon*/[appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-red-press)}/*!\@:host([appearance=clear][color=red]:not([floating])) a .calcite-button--icon,:host([appearance=clear][color=red]:not([floating])) button .calcite-button--icon*/[appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-red-accessible)}/*!\@:host([appearance=clear][color=red]:not([floating])) a calcite-loader,:host([appearance=clear][color=red]:not([floating])) button calcite-loader*/[appearance=clear][color=red].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-red-accessible)}/*!\@:host([appearance=clear][color=light]:not([floating])) a,:host([appearance=clear][color=light]:not([floating])) button*/[appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:#f8f8f8;background-color:transparent;border:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=clear][color=light]:not([floating])) a:hover,:host([appearance=clear][color=light]:not([floating])) button:hover*/[appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px #f3f3f3;box-shadow:inset 0 0 0 1px #f3f3f3}/*!\@:host([appearance=clear][color=light]:not([floating])) a:active,:host([appearance=clear][color=light]:not([floating])) a:focus,:host([appearance=clear][color=light]:not([floating])) button:active,:host([appearance=clear][color=light]:not([floating])) button:focus*/[appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:#fff;border-color:#eaeaea;-webkit-box-shadow:inset 0 0 0 2px #eaeaea;box-shadow:inset 0 0 0 2px #eaeaea}/*!\@:host([appearance=clear][color=light]:not([floating])) a:active .calcite-button--icon,:host([appearance=clear][color=light]:not([floating])) a:focus .calcite-button--icon,:host([appearance=clear][color=light]:not([floating])) button:active .calcite-button--icon,:host([appearance=clear][color=light]:not([floating])) button:focus .calcite-button--icon*/[appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:#fff}/*!\@:host([appearance=clear][color=light]:not([floating])) a .calcite-button--icon,:host([appearance=clear][color=light]:not([floating])) button .calcite-button--icon*/[appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:#f8f8f8}/*!\@:host([appearance=clear][color=light]:not([floating])) a calcite-loader,:host([appearance=clear][color=light]:not([floating])) button calcite-loader*/[appearance=clear][color=light].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:#f8f8f8}/*!\@:host([appearance=clear][color=dark]:not([floating])) a,:host([appearance=clear][color=dark]:not([floating])) button*/[appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button{color:#151515;background-color:transparent;border:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px transparent;box-shadow:inset 0 0 0 1px transparent}/*!\@:host([appearance=clear][color=dark]:not([floating])) a:hover,:host([appearance=clear][color=dark]:not([floating])) button:hover*/[appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:hover, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:hover{border-color:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px #2b2b2b;box-shadow:inset 0 0 0 1px #2b2b2b}/*!\@:host([appearance=clear][color=dark]:not([floating])) a:active,:host([appearance=clear][color=dark]:not([floating])) a:focus,:host([appearance=clear][color=dark]:not([floating])) button:active,:host([appearance=clear][color=dark]:not([floating])) button:focus*/[appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus{color:#151515;border-color:#151515;-webkit-box-shadow:inset 0 0 0 2px #151515;box-shadow:inset 0 0 0 2px #151515}/*!\@:host([appearance=clear][color=dark]:not([floating])) a .calcite-button--icon,:host([appearance=clear][color=dark]:not([floating])) a:active .calcite-button--icon,:host([appearance=clear][color=dark]:not([floating])) a:focus .calcite-button--icon,:host([appearance=clear][color=dark]:not([floating])) button .calcite-button--icon,:host([appearance=clear][color=dark]:not([floating])) button:active .calcite-button--icon,:host([appearance=clear][color=dark]:not([floating])) button:focus .calcite-button--icon*/[appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:#151515}/*!\@:host([appearance=clear][color=dark]:not([floating])) a calcite-loader,:host([appearance=clear][color=dark]:not([floating])) button calcite-loader*/[appearance=clear][color=dark].sc-calcite-button-h:not([floating]) a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h:not([floating]) button.sc-calcite-button calcite-loader.sc-calcite-button{color:#151515}/*!\@:host([appearance=outline][color=blue]) a,:host([appearance=outline][color=blue]) button*/[appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-blue-accessible);background-color:var(--calcite-button-outline-background);border:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=blue]) a:hover,:host([appearance=outline][color=blue]) button:hover*/[appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible),0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible),0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=blue]) a:active,:host([appearance=outline][color=blue]) a:focus,:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) button:focus*/[appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button:active, [appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button:active, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-ui-blue-press);border-color:var(--calcite-ui-blue-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press),0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press),0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=outline][color=blue]) a:active .calcite-button--icon,:host([appearance=outline][color=blue]) a:focus .calcite-button--icon,:host([appearance=outline][color=blue]) button:active .calcite-button--icon,:host([appearance=outline][color=blue]) button:focus .calcite-button--icon*/[appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-blue-press)}/*!\@:host([appearance=outline][color=blue]) a .calcite-button--icon,:host([appearance=outline][color=blue]) button .calcite-button--icon*/[appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-blue-accessible)}/*!\@:host([appearance=outline][color=blue]) a calcite-loader,:host([appearance=outline][color=blue]) button calcite-loader*/[appearance=outline][color=blue].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=blue].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-blue-accessible)}/*!\@:host([appearance=outline][color=red]) a,:host([appearance=outline][color=red]) button*/[appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-red-accessible);background-color:var(--calcite-button-outline-background);border:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=red]) a:hover,:host([appearance=outline][color=red]) button:hover*/[appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-red-accessible),0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px var(--calcite-red-accessible),0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=red]) a:active,:host([appearance=outline][color=red]) a:focus,:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) button:focus*/[appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button:active, [appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button:active, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-ui-red-press);border-color:var(--calcite-ui-red-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press),0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press),0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=outline][color=red]) a:active .calcite-button--icon,:host([appearance=outline][color=red]) a:focus .calcite-button--icon,:host([appearance=outline][color=red]) button:active .calcite-button--icon,:host([appearance=outline][color=red]) button:focus .calcite-button--icon*/[appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-red-press)}/*!\@:host([appearance=outline][color=red]) a .calcite-button--icon,:host([appearance=outline][color=red]) button .calcite-button--icon*/[appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-red-accessible)}/*!\@:host([appearance=outline][color=red]) a calcite-loader,:host([appearance=outline][color=red]) button calcite-loader*/[appearance=outline][color=red].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=red].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-red-accessible)}/*!\@:host([appearance=outline][color=light]) a,:host([appearance=outline][color=light]) button*/[appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-button-outline-color);background-color:var(--calcite-button-outline-background);border:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=light]) a:hover,:host([appearance=outline][color=light]) button:hover*/[appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px #f3f3f3,0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px #f3f3f3,0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=light]) a:active,:host([appearance=outline][color=light]) a:focus,:host([appearance=outline][color=light]) button:active,:host([appearance=outline][color=light]) button:focus*/[appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button:active, [appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button:active, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-button-outline-press);border-color:#eaeaea;-webkit-box-shadow:inset 0 0 0 2px #eaeaea,0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px #eaeaea,0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=outline][color=light]) a:active .calcite-button--icon,:host([appearance=outline][color=light]) a:focus .calcite-button--icon,:host([appearance=outline][color=light]) button:active .calcite-button--icon,:host([appearance=outline][color=light]) button:focus .calcite-button--icon*/[appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-press)}/*!\@:host([appearance=outline][color=light]) a .calcite-button--icon,:host([appearance=outline][color=light]) button .calcite-button--icon*/[appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-color)}/*!\@:host([appearance=outline][color=light]) a calcite-loader,:host([appearance=outline][color=light]) button calcite-loader*/[appearance=outline][color=light].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=light].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-button-outline-color)}/*!\@:host([appearance=outline][color=dark]) a,:host([appearance=outline][color=dark]) button*/[appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-button-outline-color);background-color:var(--calcite-button-outline-background);border:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=dark]) a:hover,:host([appearance=outline][color=dark]) button:hover*/[appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px #2b2b2b,0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px #2b2b2b,0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=outline][color=dark]) a:active,:host([appearance=outline][color=dark]) a:focus,:host([appearance=outline][color=dark]) button:active,:host([appearance=outline][color=dark]) button:focus*/[appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button:active, [appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button:active, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-button-outline-press);border-color:#151515;-webkit-box-shadow:inset 0 0 0 2px #151515,0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px #151515,0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=outline][color=dark]) a:active .calcite-button--icon,:host([appearance=outline][color=dark]) a:focus .calcite-button--icon,:host([appearance=outline][color=dark]) button:active .calcite-button--icon,:host([appearance=outline][color=dark]) button:focus .calcite-button--icon*/[appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-press)}/*!\@:host([appearance=outline][color=dark]) a .calcite-button--icon,:host([appearance=outline][color=dark]) button .calcite-button--icon*/[appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-button-outline-color)}/*!\@:host([appearance=outline][color=dark]) a calcite-loader,:host([appearance=outline][color=dark]) button calcite-loader*/[appearance=outline][color=dark].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=outline][color=dark].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-button-outline-color)}/*!\@:host([appearance=clear][color=blue]) a,:host([appearance=clear][color=blue]) button*/[appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-blue-accessible);background-color:transparent;border:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=blue]) a:hover,:host([appearance=clear][color=blue]) button:hover*/[appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid var(--calcite-blue-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible),0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px var(--calcite-blue-accessible),0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=blue]) a:active,:host([appearance=clear][color=blue]) a:focus,:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) button:focus*/[appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button:active, [appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button:active, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-ui-blue-press);border-color:var(--calcite-ui-blue-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press),0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px var(--calcite-ui-blue-press),0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=clear][color=blue]) a:active .calcite-button--icon,:host([appearance=clear][color=blue]) a:focus .calcite-button--icon,:host([appearance=clear][color=blue]) button:active .calcite-button--icon,:host([appearance=clear][color=blue]) button:focus .calcite-button--icon*/[appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-blue-press)}/*!\@:host([appearance=clear][color=blue]) a .calcite-button--icon,:host([appearance=clear][color=blue]) button .calcite-button--icon*/[appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-blue-accessible)}/*!\@:host([appearance=clear][color=blue]) a calcite-loader,:host([appearance=clear][color=blue]) button calcite-loader*/[appearance=clear][color=blue].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=blue].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-blue-accessible)}/*!\@:host([appearance=clear][color=red]) a,:host([appearance=clear][color=red]) button*/[appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-red-accessible);background-color:transparent;border:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=red]) a:hover,:host([appearance=clear][color=red]) button:hover*/[appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid var(--calcite-red-accessible);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-red-accessible),0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px var(--calcite-red-accessible),0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=red]) a:active,:host([appearance=clear][color=red]) a:focus,:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) button:focus*/[appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button:active, [appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button:active, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-ui-red-press);border-color:var(--calcite-ui-red-press);-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press),0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px var(--calcite-ui-red-press),0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=clear][color=red]) a:active .calcite-button--icon,:host([appearance=clear][color=red]) a:focus .calcite-button--icon,:host([appearance=clear][color=red]) button:active .calcite-button--icon,:host([appearance=clear][color=red]) button:focus .calcite-button--icon*/[appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-red-press)}/*!\@:host([appearance=clear][color=red]) a .calcite-button--icon,:host([appearance=clear][color=red]) button .calcite-button--icon*/[appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-red-accessible)}/*!\@:host([appearance=clear][color=red]) a calcite-loader,:host([appearance=clear][color=red]) button calcite-loader*/[appearance=clear][color=red].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=red].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-red-accessible)}/*!\@:host([appearance=clear][color=light]) a,:host([appearance=clear][color=light]) button*/[appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button{color:#f8f8f8;background-color:transparent;border:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=light]) a:hover,:host([appearance=clear][color=light]) button:hover*/[appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid #f3f3f3;-webkit-box-shadow:inset 0 0 0 1px #f3f3f3,0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px #f3f3f3,0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=light]) a:active,:host([appearance=clear][color=light]) a:focus,:host([appearance=clear][color=light]) button:active,:host([appearance=clear][color=light]) button:focus*/[appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button:active, [appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button:active, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button:focus{color:#fff;border-color:#eaeaea;-webkit-box-shadow:inset 0 0 0 2px #eaeaea,0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px #eaeaea,0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=clear][color=light]) a:active .calcite-button--icon,:host([appearance=clear][color=light]) a:focus .calcite-button--icon,:host([appearance=clear][color=light]) button:active .calcite-button--icon,:host([appearance=clear][color=light]) button:focus .calcite-button--icon*/[appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:#fff}/*!\@:host([appearance=clear][color=light]) a .calcite-button--icon,:host([appearance=clear][color=light]) button .calcite-button--icon*/[appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:#f8f8f8}/*!\@:host([appearance=clear][color=light]) a calcite-loader,:host([appearance=clear][color=light]) button calcite-loader*/[appearance=clear][color=light].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=light].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:#f8f8f8}/*!\@:host([appearance=clear][color=dark]) a,:host([appearance=clear][color=dark]) button*/[appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button{color:#151515;background-color:transparent;border:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px transparent,0 0 16px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=dark]) a:hover,:host([appearance=clear][color=dark]) button:hover*/[appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button:hover{border-color:1px solid #2b2b2b;-webkit-box-shadow:inset 0 0 0 1px #2b2b2b,0 0 32px 0 rgba(0,0,0,.16);box-shadow:inset 0 0 0 1px #2b2b2b,0 0 32px 0 rgba(0,0,0,.16)}/*!\@:host([appearance=clear][color=dark]) a:active,:host([appearance=clear][color=dark]) a:focus,:host([appearance=clear][color=dark]) button:active,:host([appearance=clear][color=dark]) button:focus*/[appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button:active, [appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button:active, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button:focus{color:#151515;border-color:#151515;-webkit-box-shadow:inset 0 0 0 2px #151515,0 0 16px 0 rgba(0,0,0,.32);box-shadow:inset 0 0 0 2px #151515,0 0 16px 0 rgba(0,0,0,.32)}/*!\@:host([appearance=clear][color=dark]) a .calcite-button--icon,:host([appearance=clear][color=dark]) a:active .calcite-button--icon,:host([appearance=clear][color=dark]) a:focus .calcite-button--icon,:host([appearance=clear][color=dark]) button .calcite-button--icon,:host([appearance=clear][color=dark]) button:active .calcite-button--icon,:host([appearance=clear][color=dark]) button:focus .calcite-button--icon*/[appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:#151515}/*!\@:host([appearance=clear][color=dark]) a calcite-loader,:host([appearance=clear][color=dark]) button calcite-loader*/[appearance=clear][color=dark].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=clear][color=dark].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:#151515}/*!\@:host([appearance=transparent][color=blue]) a,:host([appearance=transparent][color=blue]) button*/[appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-blue-accessible);background-color:transparent;border:1px solid transparent}/*!\@:host([appearance=transparent][color=blue]) a:hover,:host([appearance=transparent][color=blue]) button:hover*/[appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button:hover{color:var(--calcite-ui-blue-hover)}/*!\@:host([appearance=transparent][color=blue]) a:hover .calcite-button--icon,:host([appearance=transparent][color=blue]) button:hover .calcite-button--icon*/[appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-blue-hover)}/*!\@:host([appearance=transparent][color=blue]) a:active,:host([appearance=transparent][color=blue]) a:focus,:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) button:focus*/[appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button:active, [appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button:active, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-ui-blue-press)}/*!\@:host([appearance=transparent][color=blue]) a:active .calcite-button--icon,:host([appearance=transparent][color=blue]) a:focus .calcite-button--icon,:host([appearance=transparent][color=blue]) button:active .calcite-button--icon,:host([appearance=transparent][color=blue]) button:focus .calcite-button--icon*/[appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-blue-press)}/*!\@:host([appearance=transparent][color=blue]) a .calcite-button--icon,:host([appearance=transparent][color=blue]) button .calcite-button--icon*/[appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-blue-accessible)}/*!\@:host([appearance=transparent][color=blue]) a calcite-loader,:host([appearance=transparent][color=blue]) button calcite-loader*/[appearance=transparent][color=blue].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=transparent][color=blue].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-blue-accessible)}/*!\@:host([appearance=transparent][color=red]) a,:host([appearance=transparent][color=red]) button*/[appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button{color:var(--calcite-red-accessible);background-color:transparent;border:1px solid transparent}/*!\@:host([appearance=transparent][color=red]) a:hover,:host([appearance=transparent][color=red]) button:hover*/[appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button:hover{color:var(--calcite-ui-red-hover)}/*!\@:host([appearance=transparent][color=red]) a:hover .calcite-button--icon,:host([appearance=transparent][color=red]) button:hover .calcite-button--icon*/[appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-red-hover)}/*!\@:host([appearance=transparent][color=red]) a:active,:host([appearance=transparent][color=red]) a:focus,:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) button:focus*/[appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button:active, [appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button:active, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button:focus{color:var(--calcite-ui-red-press)}/*!\@:host([appearance=transparent][color=red]) a:active .calcite-button--icon,:host([appearance=transparent][color=red]) a:focus .calcite-button--icon,:host([appearance=transparent][color=red]) button:active .calcite-button--icon,:host([appearance=transparent][color=red]) button:focus .calcite-button--icon*/[appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-red-press)}/*!\@:host([appearance=transparent][color=red]) a .calcite-button--icon,:host([appearance=transparent][color=red]) button .calcite-button--icon*/[appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:var(--calcite-red-accessible)}/*!\@:host([appearance=transparent][color=red]) a calcite-loader,:host([appearance=transparent][color=red]) button calcite-loader*/[appearance=transparent][color=red].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=transparent][color=red].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-red-accessible)}/*!\@:host([appearance=transparent][color=light]) a,:host([appearance=transparent][color=light]) button*/[appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button{color:#f3f3f3;background-color:transparent;border:1px solid transparent}/*!\@:host([appearance=transparent][color=light]) a:hover,:host([appearance=transparent][color=light]) button:hover*/[appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button:hover{color:#fff}/*!\@:host([appearance=transparent][color=light]) a:hover .calcite-button--icon,:host([appearance=transparent][color=light]) button:hover .calcite-button--icon*/[appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:#fff}/*!\@:host([appearance=transparent][color=light]) a:active,:host([appearance=transparent][color=light]) a:focus,:host([appearance=transparent][color=light]) button:active,:host([appearance=transparent][color=light]) button:focus*/[appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button:active, [appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button:active, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button:focus{color:#eaeaea}/*!\@:host([appearance=transparent][color=light]) a:active .calcite-button--icon,:host([appearance=transparent][color=light]) a:focus .calcite-button--icon,:host([appearance=transparent][color=light]) button:active .calcite-button--icon,:host([appearance=transparent][color=light]) button:focus .calcite-button--icon*/[appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:#eaeaea}/*!\@:host([appearance=transparent][color=light]) a .calcite-button--icon,:host([appearance=transparent][color=light]) button .calcite-button--icon*/[appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:#f3f3f3}/*!\@:host([appearance=transparent][color=light]) a calcite-loader,:host([appearance=transparent][color=light]) button calcite-loader*/[appearance=transparent][color=light].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=transparent][color=light].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:#f3f3f3}/*!\@:host([appearance=transparent][color=dark]) a,:host([appearance=transparent][color=dark]) button*/[appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button{color:#2b2b2b;background-color:transparent;border:1px solid transparent}/*!\@:host([appearance=transparent][color=dark]) a:hover,:host([appearance=transparent][color=dark]) button:hover*/[appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button:hover{color:#404040}/*!\@:host([appearance=transparent][color=dark]) a:hover .calcite-button--icon,:host([appearance=transparent][color=dark]) button:hover .calcite-button--icon*/[appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:#404040}/*!\@:host([appearance=transparent][color=dark]) a:active,:host([appearance=transparent][color=dark]) a:focus,:host([appearance=transparent][color=dark]) button:active,:host([appearance=transparent][color=dark]) button:focus*/[appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button:active, [appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button:active, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button:focus{color:#151515}/*!\@:host([appearance=transparent][color=dark]) a:active .calcite-button--icon,:host([appearance=transparent][color=dark]) a:focus .calcite-button--icon,:host([appearance=transparent][color=dark]) button:active .calcite-button--icon,:host([appearance=transparent][color=dark]) button:focus .calcite-button--icon*/[appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button:active .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button{fill:#151515}/*!\@:host([appearance=transparent][color=dark]) a .calcite-button--icon,:host([appearance=transparent][color=dark]) button .calcite-button--icon*/[appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button .calcite-button--icon.sc-calcite-button, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button .calcite-button--icon.sc-calcite-button{fill:#2b2b2b}/*!\@:host([appearance=transparent][color=dark]) a calcite-loader,:host([appearance=transparent][color=dark]) button calcite-loader*/[appearance=transparent][color=dark].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=transparent][color=dark].sc-calcite-button-h button.sc-calcite-button calcite-loader.sc-calcite-button{color:#2b2b2b}/*!\@:host([appearance=inline][color=blue]) a,:host([appearance=inline][color=blue]) span*/[appearance=inline][color=blue].sc-calcite-button-h a.sc-calcite-button, [appearance=inline][color=blue].sc-calcite-button-h span.sc-calcite-button{display:inline;padding:0;outline:none;border:none;color:var(--calcite-blue-accessible);font-weight:500;font-size:inherit;line-height:inherit;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(var(--calcite-button-blue-inline-underline)),to(var(--calcite-button-blue-inline-underline)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(var(--calcite-button-blue-inline-underline),var(--calcite-button-blue-inline-underline));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}/*!\@:host([appearance=inline][color=blue]) a:focus,:host([appearance=inline][color=blue]) a:hover,:host([appearance=inline][color=blue]) span:focus,:host([appearance=inline][color=blue]) span:hover*/[appearance=inline][color=blue].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=inline][color=blue].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=inline][color=blue].sc-calcite-button-h span.sc-calcite-button:focus, [appearance=inline][color=blue].sc-calcite-button-h span.sc-calcite-button:hover{color:var(--calcite-ui-blue-hover);background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=blue]) a:focus .calcite-button--icon,:host([appearance=inline][color=blue]) a:hover .calcite-button--icon,:host([appearance=inline][color=blue]) span:focus .calcite-button--icon,:host([appearance=inline][color=blue]) span:hover .calcite-button--icon*/[appearance=inline][color=blue].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=blue].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=inline][color=blue].sc-calcite-button-h span.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=blue].sc-calcite-button-h span.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-blue-hover)}/*!\@:host([appearance=inline][color=blue]) a:active,:host([appearance=inline][color=blue]) span:active*/[appearance=inline][color=blue].sc-calcite-button-h a.sc-calcite-button:active, [appearance=inline][color=blue].sc-calcite-button-h span.sc-calcite-button:active{color:var(--calcite-blue-accessible);background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=blue]) a calcite-loader,:host([appearance=inline][color=blue]) span calcite-loader*/[appearance=inline][color=blue].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=inline][color=blue].sc-calcite-button-h span.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-blue-accessible)}/*!\@:host([appearance=inline][color=red]) a,:host([appearance=inline][color=red]) span*/[appearance=inline][color=red].sc-calcite-button-h a.sc-calcite-button, [appearance=inline][color=red].sc-calcite-button-h span.sc-calcite-button{display:inline;padding:0;outline:none;border:none;color:var(--calcite-red-accessible);font-weight:500;font-size:inherit;line-height:inherit;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(var(--calcite-button-red-inline-underline)),to(var(--calcite-button-red-inline-underline)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(var(--calcite-button-red-inline-underline),var(--calcite-button-red-inline-underline));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}/*!\@:host([appearance=inline][color=red]) a:focus,:host([appearance=inline][color=red]) a:hover,:host([appearance=inline][color=red]) span:focus,:host([appearance=inline][color=red]) span:hover*/[appearance=inline][color=red].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=inline][color=red].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=inline][color=red].sc-calcite-button-h span.sc-calcite-button:focus, [appearance=inline][color=red].sc-calcite-button-h span.sc-calcite-button:hover{color:var(--calcite-ui-red-hover);background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=red]) a:focus .calcite-button--icon,:host([appearance=inline][color=red]) a:hover .calcite-button--icon,:host([appearance=inline][color=red]) span:focus .calcite-button--icon,:host([appearance=inline][color=red]) span:hover .calcite-button--icon*/[appearance=inline][color=red].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=red].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=inline][color=red].sc-calcite-button-h span.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=red].sc-calcite-button-h span.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:var(--calcite-ui-red-hover)}/*!\@:host([appearance=inline][color=red]) a:active,:host([appearance=inline][color=red]) span:active*/[appearance=inline][color=red].sc-calcite-button-h a.sc-calcite-button:active, [appearance=inline][color=red].sc-calcite-button-h span.sc-calcite-button:active{color:var(--calcite-red-accessible);background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=red]) a calcite-loader,:host([appearance=inline][color=red]) span calcite-loader*/[appearance=inline][color=red].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=inline][color=red].sc-calcite-button-h span.sc-calcite-button calcite-loader.sc-calcite-button{color:var(--calcite-red-accessible)}/*!\@:host([appearance=inline][color=light]) a,:host([appearance=inline][color=light]) span*/[appearance=inline][color=light].sc-calcite-button-h a.sc-calcite-button, [appearance=inline][color=light].sc-calcite-button-h span.sc-calcite-button{display:inline;padding:0;outline:none;border:none;color:#f3f3f3;font-weight:500;font-size:inherit;line-height:inherit;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,.2)),to(hsla(0,0%,100%,.2)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(hsla(0,0%,100%,.2),hsla(0,0%,100%,.2));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}/*!\@:host([appearance=inline][color=light]) a:focus,:host([appearance=inline][color=light]) a:hover,:host([appearance=inline][color=light]) span:focus,:host([appearance=inline][color=light]) span:hover*/[appearance=inline][color=light].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=inline][color=light].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=inline][color=light].sc-calcite-button-h span.sc-calcite-button:focus, [appearance=inline][color=light].sc-calcite-button-h span.sc-calcite-button:hover{color:#fff;background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=light]) a:focus .calcite-button--icon,:host([appearance=inline][color=light]) a:hover .calcite-button--icon,:host([appearance=inline][color=light]) span:focus .calcite-button--icon,:host([appearance=inline][color=light]) span:hover .calcite-button--icon*/[appearance=inline][color=light].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=light].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=inline][color=light].sc-calcite-button-h span.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=light].sc-calcite-button-h span.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:#fff}/*!\@:host([appearance=inline][color=light]) a:active,:host([appearance=inline][color=light]) span:active*/[appearance=inline][color=light].sc-calcite-button-h a.sc-calcite-button:active, [appearance=inline][color=light].sc-calcite-button-h span.sc-calcite-button:active{color:#f3f3f3;background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=light]) a calcite-loader,:host([appearance=inline][color=light]) span calcite-loader*/[appearance=inline][color=light].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=inline][color=light].sc-calcite-button-h span.sc-calcite-button calcite-loader.sc-calcite-button{color:#f3f3f3}/*!\@:host([appearance=inline][color=dark]) a,:host([appearance=inline][color=dark]) span*/[appearance=inline][color=dark].sc-calcite-button-h a.sc-calcite-button, [appearance=inline][color=dark].sc-calcite-button-h span.sc-calcite-button{display:inline;padding:0;outline:none;border:none;color:#2b2b2b;font-weight:500;font-size:inherit;line-height:inherit;white-space:normal;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;background-color:transparent;position:relative;background-image:-webkit-gradient(linear,left top,left bottom,from(currentColor),to(currentColor)),-webkit-gradient(linear,left top,left bottom,from(rgba(64,64,64,.2)),to(rgba(64,64,64,.2)));background-image:linear-gradient(currentColor,currentColor),linear-gradient(rgba(64,64,64,.2),rgba(64,64,64,.2));background-position:0 100%,100% 100%;background-repeat:no-repeat,no-repeat;background-size:0 1px,100% 1px;-webkit-transition:all .15s ease-in-out,background-size .3s ease-in-out;transition:all .15s ease-in-out,background-size .3s ease-in-out}/*!\@:host([appearance=inline][color=dark]) a:focus,:host([appearance=inline][color=dark]) a:hover,:host([appearance=inline][color=dark]) span:focus,:host([appearance=inline][color=dark]) span:hover*/[appearance=inline][color=dark].sc-calcite-button-h a.sc-calcite-button:focus, [appearance=inline][color=dark].sc-calcite-button-h a.sc-calcite-button:hover, [appearance=inline][color=dark].sc-calcite-button-h span.sc-calcite-button:focus, [appearance=inline][color=dark].sc-calcite-button-h span.sc-calcite-button:hover{color:#404040;background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=dark]) a:focus .calcite-button--icon,:host([appearance=inline][color=dark]) a:hover .calcite-button--icon,:host([appearance=inline][color=dark]) span:focus .calcite-button--icon,:host([appearance=inline][color=dark]) span:hover .calcite-button--icon*/[appearance=inline][color=dark].sc-calcite-button-h a.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=dark].sc-calcite-button-h a.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button, [appearance=inline][color=dark].sc-calcite-button-h span.sc-calcite-button:focus .calcite-button--icon.sc-calcite-button, [appearance=inline][color=dark].sc-calcite-button-h span.sc-calcite-button:hover .calcite-button--icon.sc-calcite-button{fill:#404040}/*!\@:host([appearance=inline][color=dark]) a:active,:host([appearance=inline][color=dark]) span:active*/[appearance=inline][color=dark].sc-calcite-button-h a.sc-calcite-button:active, [appearance=inline][color=dark].sc-calcite-button-h span.sc-calcite-button:active{color:#2b2b2b;background-size:100% 1px,100% 1px}/*!\@:host([appearance=inline][color=dark]) a calcite-loader,:host([appearance=inline][color=dark]) span calcite-loader*/[appearance=inline][color=dark].sc-calcite-button-h a.sc-calcite-button calcite-loader.sc-calcite-button, [appearance=inline][color=dark].sc-calcite-button-h span.sc-calcite-button calcite-loader.sc-calcite-button{color:#2b2b2b}/*!\@:host([appearance=inline][dir=rtl]) a,:host([appearance=inline][dir=rtl]) span*/[appearance=inline][dir=rtl].sc-calcite-button-h a.sc-calcite-button, [appearance=inline][dir=rtl].sc-calcite-button-h span.sc-calcite-button{background-position:100% 100%,100% 100%}/*!\@:host([hastext][scale=xs]:not([appearance=inline])) a,:host([hastext][scale=xs]:not([appearance=inline])) button*/[hastext][scale=xs].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=xs].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{padding:calc(1.5rem/ 6) calc(1.5rem* .3);font-size:.8125rem;line-height:1.5}/*!\@:host([hastext][scale=s]:not([appearance=inline])) a,:host([hastext][scale=s]:not([appearance=inline])) button*/[hastext][scale=s].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=s].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{padding:calc(1.5rem/ 4) calc(1.5rem* .5);font-size:.875rem;line-height:1.5}/*!\@:host([hastext][scale=m]:not([appearance=inline])) a,:host([hastext][scale=m]:not([appearance=inline])) button*/[hastext][scale=m].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=m].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{padding:calc(1.5rem/ 3) calc(1.5rem* .75);font-size:.9375rem;line-height:1.5}/*!\@:host([hastext][scale=l]:not([appearance=inline])) a,:host([hastext][scale=l]:not([appearance=inline])) button*/[hastext][scale=l].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=l].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{padding:calc(1.5rem / 2) calc(1.5rem* 1);font-size:1.2019rem;line-height:1.5}\@media screen and (max-width:859px){/*!\@:host([hastext][scale=l]:not([appearance=inline])) a,:host([hastext][scale=l]:not([appearance=inline])) button*/[hastext][scale=l].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=l].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{font-size:1.1305rem}}\@media screen and (max-width:479px){/*!\@:host([hastext][scale=l]:not([appearance=inline])) a,:host([hastext][scale=l]:not([appearance=inline])) button*/[hastext][scale=l].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=l].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{font-size:1.0625rem}}/*!\@:host([hastext][scale=xl]:not([appearance=inline])) a,:host([hastext][scale=xl]:not([appearance=inline])) button*/[hastext][scale=xl].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=xl].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{padding:calc(1.5rem / 1.5) calc(1.5rem* 1.25);font-size:1.414rem;line-height:1.5}\@media screen and (max-width:859px){/*!\@:host([hastext][scale=xl]:not([appearance=inline])) a,:host([hastext][scale=xl]:not([appearance=inline])) button*/[hastext][scale=xl].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=xl].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{font-size:1.33rem}}\@media screen and (max-width:479px){/*!\@:host([hastext][scale=xl]:not([appearance=inline])) a,:host([hastext][scale=xl]:not([appearance=inline])) button*/[hastext][scale=xl].sc-calcite-button-h:not([appearance=inline]) a.sc-calcite-button, [hastext][scale=xl].sc-calcite-button-h:not([appearance=inline]) button.sc-calcite-button{font-size:1.25rem}}/*!\@:host([scale=xs]:not([hastext])) a,:host([scale=xs]:not([hastext])) button*/[scale=xs].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=xs].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{height:calc(1.5rem* 1.5);width:calc(1.5rem* 1.5);padding:.1875rem;font-size:.8125rem;line-height:1.5}/*!\@:host([scale=s]:not([hastext])) a,:host([scale=s]:not([hastext])) button*/[scale=s].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=s].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{height:calc(1.5rem* 1.75);width:calc(1.5rem* 1.75);padding:.1875rem;font-size:.875rem;line-height:1.5}/*!\@:host([scale=m]:not([hastext])) a,:host([scale=m]:not([hastext])) button*/[scale=m].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=m].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{height:calc(1.5rem* 2);width:calc(1.5rem* 2);padding:.1875rem;font-size:.9375rem;line-height:1.5}/*!\@:host([scale=l]:not([hastext])) a,:host([scale=l]:not([hastext])) button*/[scale=l].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=l].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{height:calc(1.5rem * 2.25);width:calc(1.5rem * 2.25);padding:.1875rem;font-size:1.2019rem;line-height:1.5}\@media screen and (max-width:859px){/*!\@:host([scale=l]:not([hastext])) a,:host([scale=l]:not([hastext])) button*/[scale=l].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=l].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{font-size:1.1305rem}}\@media screen and (max-width:479px){/*!\@:host([scale=l]:not([hastext])) a,:host([scale=l]:not([hastext])) button*/[scale=l].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=l].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{font-size:1.0625rem}}/*!\@:host([scale=xl]:not([hastext])) a,:host([scale=xl]:not([hastext])) button*/[scale=xl].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=xl].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{height:calc(1.5rem * 2.5);width:calc(1.5rem * 2.5);padding:.1875rem;font-size:1.414rem;line-height:1.5}\@media screen and (max-width:859px){/*!\@:host([scale=xl]:not([hastext])) a,:host([scale=xl]:not([hastext])) button*/[scale=xl].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=xl].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{font-size:1.33rem}}\@media screen and (max-width:479px){/*!\@:host([scale=xl]:not([hastext])) a,:host([scale=xl]:not([hastext])) button*/[scale=xl].sc-calcite-button-h:not([hastext]) a.sc-calcite-button, [scale=xl].sc-calcite-button-h:not([hastext]) button.sc-calcite-button{font-size:1.25rem}}');
styles.set('sc-calcite-card','/*!\@:root*/.sc-calcite-card:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-card-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-card:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-card-h{display:none}/*!\@body*/body.sc-calcite-card{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-card{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-card{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-card{display:block}/*!\@a*/a.sc-calcite-card{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-card{visibility:hidden}/*!\@:host*/.sc-calcite-card-h{max-width:100%}/*!\@:host .calcite-card-container*/.sc-calcite-card-h .calcite-card-container.sc-calcite-card{display:-ms-flexbox;display:flex;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;position:relative;border:1px solid var(--calcite-ui-border-2);color:var(--calcite-ui-text-3);-webkit-box-shadow:0 0 0 transparent;box-shadow:0 0 0 transparent}/*!\@:host .calcite-card-container:hover*/.sc-calcite-card-h .calcite-card-container.sc-calcite-card:hover{-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08);z-index:1}/*!\@:host .calcite-card-container:active*/.sc-calcite-card-h .calcite-card-container.sc-calcite-card:active{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16);z-index:1}/*!\@:host([loading]) .calcite-card-container :not(calcite-loader):not(.calcite-card-loader-container)*/[loading].sc-calcite-card-h .calcite-card-container.sc-calcite-card .sc-calcite-card:not(calcite-loader):not(.calcite-card-loader-container){opacity:0;pointer-events:none}/*!\@:host([loading]) .calcite-card-loader-container*/[loading].sc-calcite-card-h .calcite-card-loader-container.sc-calcite-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;left:0;right:0;top:0;bottom:0}/*!\@:host([loading]) .calcite-card-loader*/[loading].sc-calcite-card-h .calcite-card-loader.sc-calcite-card{position:absolute;left:0;right:0;z-index:9}/*!\@:host .footer,:host .header*/.sc-calcite-card-h .footer.sc-calcite-card, .sc-calcite-card-h .header.sc-calcite-card{padding:.75rem;display:-ms-flexbox;display:flex}/*!\@:host .header*/.sc-calcite-card-h .header.sc-calcite-card{-ms-flex-direction:column;flex-direction:column}/*!\@:host .footer*/.sc-calcite-card-h .footer.sc-calcite-card{padding:.75rem;-ms-flex-direction:row;flex-direction:row}/*!\@:host .card-content*/.sc-calcite-card-h .card-content.sc-calcite-card{padding:0 .75rem;color:var(--calcite-ui-text-3);font-size:.875rem;line-height:1.5}/*!\@:host([selectable]) .calcite-card-container:active*/[selectable].sc-calcite-card-h .calcite-card-container.sc-calcite-card:active{-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16)}/*!\@:host([selected]) .calcite-card-container*/[selected].sc-calcite-card-h .calcite-card-container.sc-calcite-card{border-color:var(--calcite-ui-blue)}/*!\@::slotted([slot=title]),slot[name=title]::slotted(*)*/.sc-calcite-card-s > [slot=title], slot[name=title].sc-calcite-card-s > *{font-weight:500;color:var(--calcite-ui-text-1);margin:0;font-size:.9375rem;line-height:1.5}/*!\@::slotted([slot=subtitle]),slot[name=subtitle]::slotted(*)*/.sc-calcite-card-s > [slot=subtitle], slot[name=subtitle].sc-calcite-card-s > *{font-weight:400;color:var(--calcite-ui-text-2);margin:0;margin-top:.375rem;font-size:.875rem;line-height:1.5}/*!\@img::slotted([slot=thumbnail]),slot[name=thumbnail]::slotted(img)*/img.sc-calcite-card-s > [slot=thumbnail], slot[name=thumbnail].sc-calcite-card-s > img{max-width:100%;min-width:100%}/*!\@::slotted([slot=footer-leading]),slot[name=footer-leading]::slotted(*)*/.sc-calcite-card-s > [slot=footer-leading], slot[name=footer-leading].sc-calcite-card-s > *{-webkit-margin-end:auto;margin-inline-end:auto}/*!\@::slotted([slot=footer-leading]),::slotted([slot=footer-trailing]),slot[name=footer-leading]::slotted(*),slot[name=footer-trailing]::slotted(*)*/.sc-calcite-card-s > [slot=footer-leading], .sc-calcite-card-s > [slot=footer-trailing], slot[name=footer-leading].sc-calcite-card-s > *, slot[name=footer-trailing].sc-calcite-card-s > *{-ms-flex-item-align:center;align-self:center;font-size:.875rem;line-height:1.5}/*!\@:host .thumbnail-wrapper*/.sc-calcite-card-h .thumbnail-wrapper.sc-calcite-card{font-size:0}/*!\@:host .card-checkbox-wrapper*/.sc-calcite-card-h .card-checkbox-wrapper.sc-calcite-card{position:absolute;top:.375rem;right:.375rem;margin:0;padding:0}/*!\@:host([dir=rtl]) .card-checkbox-wrapper*/[dir=rtl].sc-calcite-card-h .card-checkbox-wrapper.sc-calcite-card{left:.375rem;right:auto}');
styles.set('sc-calcite-checkbox','/*!\@:root*/.sc-calcite-checkbox:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-checkbox-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-checkbox:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-checkbox-h{display:none}/*!\@body*/body.sc-calcite-checkbox{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-checkbox{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-checkbox{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-checkbox{display:block}/*!\@a*/a.sc-calcite-checkbox{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-checkbox{visibility:hidden}/*!\@::slotted(input)*/.sc-calcite-checkbox-s > input{display:none}/*!\@:host*/.sc-calcite-checkbox-h{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}/*!\@.check-svg,:host*/.check-svg.sc-calcite-checkbox, .sc-calcite-checkbox-h{display:inline-block}/*!\@.check-svg*/.check-svg.sc-calcite-checkbox{width:20px;height:20px;overflow:hidden;background-color:#fff;border:1px solid #757575;border-radius:2px;vertical-align:-.25em;margin-right:.25em;pointer-events:none;-webkit-transition:all .15s linear;transition:all .15s linear;-webkit-box-sizing:border-box;box-sizing:border-box}/*!\@:host([theme=dark]) .check-svg*/[theme=dark].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{background-color:transparent;border-color:#eaeaea}/*!\@:host([theme=dark][disabled]) .check-svg*/[theme=dark][disabled].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{border-color:#757575;background-color:#2b2b2b}/*!\@:host([theme=dark][checked]) .check-svg,:host([theme=dark][indeterminate]) .check-svg*/[theme=dark][checked].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox, [theme=dark][indeterminate].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{background-color:#3db8ff}/*!\@:host([size=large]) .check-svg*/[size=large].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{width:24px;height:24px;border-radius:4px}/*!\@:host([size=small]) .check-svg*/[size=small].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{width:16px;height:16px}/*!\@:host([disabled])*/[disabled].sc-calcite-checkbox-h{pointer-events:none;cursor:default}/*!\@:host([disabled]) .check-svg*/[disabled].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{background-color:#f3f3f3;border-color:#eaeaea}/*!\@:host([disabled][checked]) .check-svg,:host([disabled][indeterminate]) .check-svg*/[disabled][checked].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox, [disabled][indeterminate].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{background-color:#84c1e8;border-color:#84c1e8}/*!\@:host([checked]) .check-svg,:host([indeterminate]) .check-svg*/[checked].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox, [indeterminate].sc-calcite-checkbox-h .check-svg.sc-calcite-checkbox{background-color:#007ac2;border:1px solid #007ac2}/*!\@:host(:focus),:host(:hover)*/.sc-calcite-checkbox-h:focus, .sc-calcite-checkbox-h:hover{outline:none}/*!\@:host(:focus) .check-svg,:host(:hover) .check-svg*/.sc-calcite-checkbox-h:focus .check-svg.sc-calcite-checkbox, .sc-calcite-checkbox-h:hover .check-svg.sc-calcite-checkbox{border-color:#0079c1!important;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(81,167,232,.5),0 0 5px rgba(81,167,232,.5);box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(81,167,232,.5),0 0 5px rgba(81,167,232,.5)}');
styles.set('sc-calcite-date-day','/*!\@:root*/.sc-calcite-date-day:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-date-day-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-date-day:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-date-day-h{display:none}/*!\@body*/body.sc-calcite-date-day{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-date-day{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-date-day{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-date-day{display:block}/*!\@a*/a.sc-calcite-date-day{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-date-day{visibility:hidden}/*!\@:host*/.sc-calcite-date-day-h{display:-ms-flexbox;display:flex;outline:none;color:var(--calcite-ui-text-3);padding:.3rem .4rem;cursor:pointer;width:calc(100% / 7)}/*!\@:host .disabled*/.sc-calcite-date-day-h .disabled.sc-calcite-date-day{pointer-events:none}/*!\@:host .day*/.sc-calcite-date-day-h .day.sc-calcite-date-day{display:-ms-flexbox;display:flex;width:100%;border-radius:100%;font-size:14px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:2rem;width:2rem}/*!\@:host(.active) .day,:host(:focus) .day,:host(:hover) .day*/.active.sc-calcite-date-day-h .day.sc-calcite-date-day, .sc-calcite-date-day-h:focus .day.sc-calcite-date-day, .sc-calcite-date-day-h:hover .day.sc-calcite-date-day{background-color:var(--calcite-ui-foreground-hover);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-ui-text-1)}/*!\@:host(.selected-day) .day,:host(:focus.active) .day*/.selected-day.sc-calcite-date-day-h .day.sc-calcite-date-day, .sc-calcite-date-day-h:focus.active .day.sc-calcite-date-day{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:var(--calcite-ui-blue);border-radius:100%;color:var(--calcite-ui-foreground);font-weight:500}/*!\@:host(.disabled)*/.disabled.sc-calcite-date-day-h{cursor:default}/*!\@:host(.active) .disabled .day,:host(.disabled) .day,:host(:focus.active) .disabled .day,:host(:hover) .disabled .day*/.active.sc-calcite-date-day-h .disabled.sc-calcite-date-day .day.sc-calcite-date-day, .disabled.sc-calcite-date-day-h .day.sc-calcite-date-day, .sc-calcite-date-day-h:focus.active .disabled.sc-calcite-date-day .day.sc-calcite-date-day, .sc-calcite-date-day-h:hover .disabled.sc-calcite-date-day .day.sc-calcite-date-day{color:#bfbfbf;background:none}');
styles.set('sc-calcite-date-month','/*!\@:root*/.sc-calcite-date-month:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-date-month-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-date-month:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-date-month-h{display:none}/*!\@body*/body.sc-calcite-date-month{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-date-month{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-date-month{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-date-month{display:block}/*!\@a*/a.sc-calcite-date-month{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-date-month{visibility:hidden}/*!\@.calender .week-headers*/.calender.sc-calcite-date-month .week-headers.sc-calcite-date-month{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-bottom:1px solid var(--calcite-ui-border-3);border-top:1px solid var(--calcite-ui-border-3)}/*!\@.calender .week-headers .week-header*/.calender.sc-calcite-date-month .week-headers.sc-calcite-date-month .week-header.sc-calcite-date-month{color:var(--calcite-ui-text-2);padding:.75rem 0;text-transform:uppercase;font-weight:600;font-size:11px;width:calc(100% / 7);text-align:center}/*!\@.calender .week-days*/.calender.sc-calcite-date-month .week-days.sc-calcite-date-month{outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}');
styles.set('sc-calcite-date-month-header','/*!\@:root*/.sc-calcite-date-month-header:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-date-month-header-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-date-month-header:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-date-month-header-h{display:none}/*!\@body*/body.sc-calcite-date-month-header{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-date-month-header{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-date-month-header{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-date-month-header{display:block}/*!\@a*/a.sc-calcite-date-month-header{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-date-month-header{visibility:hidden}/*!\@.month-year*/.month-year.sc-calcite-date-month-header{display:-ms-flexbox;display:flex}/*!\@input*/input.sc-calcite-date-month-header{font-family:inherit;text-align:center}/*!\@.left-icon,.right-icon*/.left-icon.sc-calcite-date-month-header, .right-icon.sc-calcite-date-month-header{fill:var(--calcite-ui-text-3);-ms-flex-positive:1;flex-grow:1;outline:none;padding:0;border:none;color:inherit;background-color:var(--calcite-ui-foreground);cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}/*!\@.left-icon:focus,.left-icon:hover,.right-icon:focus,.right-icon:hover*/.left-icon.sc-calcite-date-month-header:focus, .left-icon.sc-calcite-date-month-header:hover, .right-icon.sc-calcite-date-month-header:focus, .right-icon.sc-calcite-date-month-header:hover{fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-hover)}/*!\@.left-icon:active,.right-icon:active*/.left-icon.sc-calcite-date-month-header:active, .right-icon.sc-calcite-date-month-header:active{background-color:var(--calcite-ui-foreground-pressed)}/*!\@.month-year-text*/.month-year-text.sc-calcite-date-month-header{padding:.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-positive:1;flex-grow:1;width:50%;-ms-flex-pack:center;justify-content:center}/*!\@.month,.year*/.month.sc-calcite-date-month-header, .year.sc-calcite-date-month-header{color:var(--calcite-ui-text-1);background:var(--calcite-ui-foreground);font-size:1rem;line-height:1.5;font-weight:500}/*!\@.year*/.year.sc-calcite-date-month-header{border:none;width:60px;padding:0;margin:0}/*!\@input[type=number]*/input[type=number].sc-calcite-date-month-header{-moz-appearance:textfield}/*!\@input::-webkit-inner-spin-button,input::-webkit-outer-spin-button*/input.sc-calcite-date-month-header::-webkit-inner-spin-button, input.sc-calcite-date-month-header::-webkit-outer-spin-button{-webkit-appearance:none}');
styles.set('sc-calcite-date-picker','/*!\@:root*/.sc-calcite-date-picker:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-date-picker-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-date-picker:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-date-picker-h{display:none}/*!\@body*/body.sc-calcite-date-picker{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-date-picker{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-date-picker{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-date-picker{display:block}/*!\@a*/a.sc-calcite-date-picker{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-date-picker{visibility:hidden}/*!\@::slotted(input)*/.sc-calcite-date-picker-s > input{display:none}/*!\@:host*/.sc-calcite-date-picker-h{display:inline-block;vertical-align:top}/*!\@:host .date-input-wrapper*/.sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker{border:1px solid var(--calcite-ui-border-1);position:relative}/*!\@:host .date-input-wrapper.expanded*/.sc-calcite-date-picker-h .date-input-wrapper.expanded.sc-calcite-date-picker{border:none;border-bottom:1px solid var(--calcite-ui-border-1)}/*!\@:host .date-input-wrapper.open,:host .date-input-wrapper:active,:host .date-input-wrapper:focus*/.sc-calcite-date-picker-h .date-input-wrapper.open.sc-calcite-date-picker, .sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker:active, .sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker:focus{border-color:transparent;border-bottom:1px solid var(--calcite-ui-border-1)}/*!\@:host .date-input-wrapper .calendar-icon*/.sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker .calendar-icon.sc-calcite-date-picker{fill:var(--calcite-ui-text-3);position:absolute;top:.8333333333rem;left:1.3043478261rem}/*!\@:host .date-input-wrapper .date-input*/.sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker .date-input.sc-calcite-date-picker{color:var(--calcite-ui-text-3);background:var(--calcite-ui-foreground);-webkit-box-sizing:border-box;box-sizing:border-box;border:none;font-weight:400;font-size:16px;font-family:inherit;padding:.75rem;width:100%;margin:0;padding-left:3rem}/*!\@:host .date-input-wrapper .date-input:active,:host .date-input-wrapper .date-input:focus*/.sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker .date-input.sc-calcite-date-picker:active, .sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker .date-input.sc-calcite-date-picker:focus{outline:none}/*!\@:host .date-input-wrapper .date-input::-webkit-calendar-picker-indicator,:host .date-input-wrapper .date-input::-webkit-inner-spin-button*/.sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker .date-input.sc-calcite-date-picker::-webkit-calendar-picker-indicator, .sc-calcite-date-picker-h .date-input-wrapper.sc-calcite-date-picker .date-input.sc-calcite-date-picker::-webkit-inner-spin-button{display:none;-webkit-appearance:none}/*!\@:host([expanded])*/[expanded].sc-calcite-date-picker-h{background-color:var(--calcite-ui-foreground);border-radius:var(--calcite-border-radius);border:1px solid var(--calcite-ui-border-2);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);overflow:hidden}');
styles.set('sc-calcite-dropdown','/*!\@:root*/.sc-calcite-dropdown:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-dropdown-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-dropdown:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-dropdown-h{display:none}/*!\@body*/body.sc-calcite-dropdown{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-dropdown{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-dropdown{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-dropdown{display:block}/*!\@a*/a.sc-calcite-dropdown{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-dropdown{visibility:hidden}/*!\@:host([width=s])*/[width=s].sc-calcite-dropdown-h{--calcite-dropdown-width:12.5em}/*!\@:host([width=m])*/[width=m].sc-calcite-dropdown-h{--calcite-dropdown-width:15em}/*!\@:host([width=l])*/[width=l].sc-calcite-dropdown-h{--calcite-dropdown-width:20em}/*!\@:host([scale=s])*/[scale=s].sc-calcite-dropdown-h{--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}/*!\@:host([scale=m])*/[scale=m].sc-calcite-dropdown-h{--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}/*!\@:host([scale=l])*/[scale=l].sc-calcite-dropdown-h{--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}/*!\@:host([dir=rtl][scale=s])*/[dir=rtl][scale=s].sc-calcite-dropdown-h{--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}/*!\@:host([dir=rtl][scale=m])*/[dir=rtl][scale=m].sc-calcite-dropdown-h{--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}/*!\@:host([dir=rtl][scale=l])*/[dir=rtl][scale=l].sc-calcite-dropdown-h{--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}/*!\@:host*/.sc-calcite-dropdown-h{position:relative;display:inline-block}/*!\@:host([active]) .calcite-dropdown-wrapper*/[active].sc-calcite-dropdown-h .calcite-dropdown-wrapper.sc-calcite-dropdown{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;max-height:100vh;visibility:visible;pointer-events:auto}/*!\@:host .calcite-dropdown-wrapper*/.sc-calcite-dropdown-h .calcite-dropdown-wrapper.sc-calcite-dropdown{-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);pointer-events:none}/*!\@:host([alignment=right]) .calcite-dropdown-wrapper,:host([dir=rtl]) .calcite-dropdown-wrapper*/[alignment=right].sc-calcite-dropdown-h .calcite-dropdown-wrapper.sc-calcite-dropdown, [dir=rtl].sc-calcite-dropdown-h .calcite-dropdown-wrapper.sc-calcite-dropdown{right:0;left:unset}/*!\@:host([dir=rtl][alignment=right]) .calcite-dropdown-wrapper*/[dir=rtl][alignment=right].sc-calcite-dropdown-h .calcite-dropdown-wrapper.sc-calcite-dropdown{right:unset;left:0}/*!\@:host([alignment=center]) .calcite-dropdown-wrapper*/[alignment=center].sc-calcite-dropdown-h .calcite-dropdown-wrapper.sc-calcite-dropdown{right:0;left:0;margin-right:auto;margin-left:auto}');
styles.set('sc-calcite-dropdown-group','/*!\@:root*/.sc-calcite-dropdown-group:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-dropdown-group-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-dropdown-group:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-dropdown-group-h{display:none}/*!\@body*/body.sc-calcite-dropdown-group{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-dropdown-group{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-dropdown-group{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-dropdown-group{display:block}/*!\@a*/a.sc-calcite-dropdown-group{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-dropdown-group{visibility:hidden}/*!\@:host .dropdown-title*/.sc-calcite-dropdown-group-h .dropdown-title.sc-calcite-dropdown-group{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default;font-size:.875rem;line-height:1.5}');
styles.set('sc-calcite-dropdown-item','\@charset \"UTF-8\";/*!\@:root*/.sc-calcite-dropdown-item:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-dropdown-item-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-dropdown-item:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-dropdown-item-h{display:none}/*!\@body*/body.sc-calcite-dropdown-item{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-dropdown-item{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-dropdown-item{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-dropdown-item{display:block}/*!\@a*/a.sc-calcite-dropdown-item{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-dropdown-item{visibility:hidden}/*!\@:host*/.sc-calcite-dropdown-item-h{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.5;color:var(--calcite-ui-text-3);padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}/*!\@:host,:host:before*/.sc-calcite-dropdown-item-h, .sc-calcite-dropdown-item-h:before{-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}/*!\@:host:before*/.sc-calcite-dropdown-item-h:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey}/*!\@:host(:active),:host(:focus),:host(:hover)*/.sc-calcite-dropdown-item-h:active, .sc-calcite-dropdown-item-h:focus, .sc-calcite-dropdown-item-h:hover{background-color:var(--calcite-ui-foreground-hover);color:var(--calcite-ui-text-1);text-decoration:none}/*!\@:host(:active)*/.sc-calcite-dropdown-item-h:active{background-color:var(--calcite-ui-foreground-press)}/*!\@:host(:active):before,:host(:focus):before,:host(:hover):before*/.sc-calcite-dropdown-item-h:active:before, .sc-calcite-dropdown-item-h:focus:before, .sc-calcite-dropdown-item-h:hover:before{opacity:1}/*!\@:host([dir=rtl]):before*/[dir=rtl].sc-calcite-dropdown-item-h:before{left:unset;right:1rem}/*!\@:host([active])*/[active].sc-calcite-dropdown-item-h{color:var(--calcite-ui-text-1);font-weight:500}/*!\@:host([active]):before*/[active].sc-calcite-dropdown-item-h:before{opacity:1}/*!\@:host([active]):before,:host([active]) calcite-icon*/[active].sc-calcite-dropdown-item-h:before, [active].sc-calcite-dropdown-item-h calcite-icon.sc-calcite-dropdown-item{color:var(--calcite-ui-blue)}/*!\@:host([islink])*/[islink].sc-calcite-dropdown-item-h{padding:0}/*!\@:host([islink]):before*/[islink].sc-calcite-dropdown-item-h:before{display:none}/*!\@:host([islink]) a*/[islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.5;color:var(--calcite-ui-text-3);padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}/*!\@:host([islink]) a,:host([islink]) a:before*/[islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item, [islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:before{-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}/*!\@:host([islink]) a:before*/[islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey}/*!\@:host([islink]) a:active,:host([islink]) a:focus,:host([islink]) a:hover*/[islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:active, [islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:focus, [islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:hover{background-color:var(--calcite-ui-foreground-hover);text-decoration:none}/*!\@:host([islink]) a:active:before,:host([islink]) a:focus:before,:host([islink]) a:hover:before*/[islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:active:before, [islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:focus:before, [islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:hover:before{opacity:1}/*!\@:host([islink]) a:active*/[islink].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:active{background-color:var(--calcite-ui-foreground-press)}/*!\@:host([islink][active]) a*/[islink][active].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item{color:var(--calcite-ui-text-1);font-weight:500}/*!\@:host([islink][active]) a:before*/[islink][active].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:before{opacity:1;color:var(--calcite-ui-blue)}/*!\@:host([islink][dir=rtl]) a*/[islink][dir=rtl].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item{padding:var(--calcite-dropdown-item-padding)}/*!\@:host([islink][dir=rtl]) a:before*/[islink][dir=rtl].sc-calcite-dropdown-item-h a.sc-calcite-dropdown-item:before{left:unset;right:1rem}/*!\@:host .dropdown-item-icon-start*/.sc-calcite-dropdown-item-h .dropdown-item-icon-start.sc-calcite-dropdown-item{margin-right:1rem}/*!\@:host .dropdown-item-icon-end*/.sc-calcite-dropdown-item-h .dropdown-item-icon-end.sc-calcite-dropdown-item{margin-left:auto;padding-left:1rem}/*!\@:host([dir=rtl]) .dropdown-item-icon-start,:host([dir=rtl]) calcite-icon*/[dir=rtl].sc-calcite-dropdown-item-h .dropdown-item-icon-start.sc-calcite-dropdown-item, [dir=rtl].sc-calcite-dropdown-item-h calcite-icon.sc-calcite-dropdown-item{margin-right:0;margin-left:1rem}/*!\@:host([dir=rtl]) .dropdown-item-icon-end*/[dir=rtl].sc-calcite-dropdown-item-h .dropdown-item-icon-end.sc-calcite-dropdown-item{margin-right:auto;padding-right:1rem;margin-left:0;padding-left:0}');
styles.set('sc-calcite-example','/*!\@:root*/.sc-calcite-example:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-example-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-example:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-example-h{display:none}/*!\@body*/body.sc-calcite-example{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-example{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-example{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-example{display:block}/*!\@a*/a.sc-calcite-example{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-example{visibility:hidden}');
styles.set('sc-calcite-icon','/*!\@:root*/.sc-calcite-icon:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-icon-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-icon:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-icon-h{display:none}/*!\@body*/body.sc-calcite-icon{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-icon{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-icon{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-icon{display:block}/*!\@a*/a.sc-calcite-icon{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-icon{visibility:hidden}/*!\@:host*/.sc-calcite-icon-h{display:-ms-inline-flexbox;display:inline-flex}/*!\@.mirror*/.mirror.sc-calcite-icon{-webkit-transform:scaleX(-1);transform:scaleX(-1)}');
styles.set('sc-calcite-loader','/*!\@:root*/.sc-calcite-loader:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-loader-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-loader:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-loader-h{display:none}/*!\@body*/body.sc-calcite-loader{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-loader{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-loader{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-loader{display:block}/*!\@a*/a.sc-calcite-loader{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-loader{visibility:hidden}/*!\@:host*/.sc-calcite-loader-h{--calcite-loader-spot:var(--calcite-ui-blue);--calcite-loader-spot-light:var(--calcite-ui-blue);--calcite-loader-spot-dark:var(--calcite-ui-blue);--calcite-loader-neutral:#eaeaea;--calcite-loader-padding:4rem}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-loader-h{--calcite-loader-neutral:#151515}/*!\@:host([no-padding])*/[no-padding].sc-calcite-loader-h{--calcite-loader-padding:0}/*!\@:host*/.sc-calcite-loader-h{position:relative;display:none;padding-bottom:var(--calcite-loader-padding);padding-top:var(--calcite-loader-padding);margin-left:auto;margin-right:auto;min-height:54px;stroke:var(--calcite-loader-light);stroke-width:6px;stroke-dashoffset:0;fill:none;animation:loader-color-shift 2s linear infinite alternate-reverse}/*!\@:host([is-active])*/[is-active].sc-calcite-loader-h{display:block}/*!\@.loader__text*/.loader__text.sc-calcite-loader{margin-top:var(--calcite-loader-padding);line-height:1.5}/*!\@.loader__percentage,.loader__text*/.loader__percentage.sc-calcite-loader, .loader__text.sc-calcite-loader{display:block;text-align:center;font-size:.875rem}/*!\@.loader__percentage*/.loader__percentage.sc-calcite-loader{left:50%;margin-top:27px;line-height:.25}/*!\@.loader__percentage,.loader__square*/.loader__percentage.sc-calcite-loader, .loader__square.sc-calcite-loader{width:54px;position:absolute;top:var(--calcite-loader-padding);margin-left:-27px}/*!\@.loader__square*/.loader__square.sc-calcite-loader{height:54px;left:0;left:50%;stroke-dasharray:50% 350%;-webkit-animation:loader-clockwise 2s linear infinite;animation:loader-clockwise 2s linear infinite}/*!\@.loader__square--2*/.loader__square--2.sc-calcite-loader{stroke-dasharray:100% 225% 50% 25%;-webkit-animation:loader-clockwise 1s linear infinite;animation:loader-clockwise 1s linear infinite}/*!\@.loader__square--3*/.loader__square--3.sc-calcite-loader{stroke-dasharray:50% 50% 75% 225%;-webkit-animation:loader-clockwise 1.85s linear infinite;animation:loader-clockwise 1.85s linear infinite}\@supports (-ms-ime-align:auto){/*!\@.loader__square*/.loader__square.sc-calcite-loader{stroke-dashoffset:var(--calcite-loader-offset);-webkit-animation:none;animation:none}/*!\@.loader__square--2*/.loader__square--2.sc-calcite-loader{stroke-dashoffset:var(--calcite-loader-offset2)}/*!\@.loader__square--3*/.loader__square--3.sc-calcite-loader{stroke-dashoffset:var(--calcite-loader-offset3)}}/*!\@:host([type=determinate])*/[type=determinate].sc-calcite-loader-h{stroke:var(--calcite-loader-neutral);-webkit-animation:none;animation:none}/*!\@:host([type=determinate]) .loader__square--3*/[type=determinate].sc-calcite-loader-h .loader__square--3.sc-calcite-loader{stroke:var(--calcite-loader-spot);stroke-dasharray:400%;stroke-dashoffset:var(--calcite-loader-progress);-webkit-transition:all 50ms linear;transition:all 50ms linear;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation:none;animation:none}/*!\@:host([inline])*/[inline].sc-calcite-loader-h{stroke:currentColor;stroke-width:4px;-webkit-animation:none;animation:none;margin:0;padding-bottom:0;padding-top:0;position:relative;height:16px;min-height:16px;width:16px;margin-right:8px;vertical-align:-2px}/*!\@:host([inline][dir=rtl])*/[inline][dir=rtl].sc-calcite-loader-h{margin-left:8px;margin-right:0}/*!\@:host([is-active][inline])*/[is-active][inline].sc-calcite-loader-h{display:inline-block}/*!\@:host([inline]) .loader__square*/[inline].sc-calcite-loader-h .loader__square.sc-calcite-loader{margin:0;position:absolute;top:0;left:0;width:16px;height:16px}\@-webkit-keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@keyframes loader-color-shift{0%{stroke:var(--calcite-loader-spot-light)}to{stroke:var(--calcite-loader-spot-dark)}}\@-webkit-keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}\@keyframes loader-clockwise{0%{stroke-dashoffset:0}to{stroke-dashoffset:-400%}}');
styles.set('sc-calcite-modal','/*!\@:root*/.sc-calcite-modal:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-modal-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-modal:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-modal-h{display:none}/*!\@body*/body.sc-calcite-modal{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-modal{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-modal{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-modal{display:block}/*!\@a*/a.sc-calcite-modal{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-modal{visibility:hidden}/*!\@:host*/.sc-calcite-modal-h{--calcite-modal-scrim:rgba(0,0,0,0.75);position:fixed;top:0;right:0;bottom:0;left:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);visibility:hidden!important;background:var(--calcite-modal-scrim);-webkit-transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);z-index:101}/*!\@.modal,:host*/.modal.sc-calcite-modal, .sc-calcite-modal-h{display:-ms-flexbox;display:flex;opacity:0}/*!\@.modal*/.modal.sc-calcite-modal{-webkit-box-sizing:border-box;box-sizing:border-box;z-index:102;float:none;text-align:left;-webkit-overflow-scrolling:touch;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:row-wrap;flex-wrap:row-wrap;visibility:hidden;-webkit-transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear .3s,opacity .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);background-color:var(--calcite-ui-foreground);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.32);box-shadow:0 0 16px 0 rgba(0,0,0,.32);border-radius:var(--calcite-border-radius);margin:1.5rem;width:100%}/*!\@:host(.is-active)*/.is-active.sc-calcite-modal-h{visibility:visible!important;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms}/*!\@:host(.is-active) .modal*/.is-active.sc-calcite-modal-h .modal.sc-calcite-modal{visibility:visible;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88);transition:transform .3s cubic-bezier(.215,.44,.42,.88),visibility 0ms linear,opacity .3s cubic-bezier(.215,.44,.42,.88),max-width .3s cubic-bezier(.215,.44,.42,.88),max-height .3s cubic-bezier(.215,.44,.42,.88),-webkit-transform .3s cubic-bezier(.215,.44,.42,.88)}/*!\@:host([dir=rtl]) .modal*/[dir=rtl].sc-calcite-modal-h .modal.sc-calcite-modal{text-align:right}/*!\@.modal__header*/.modal__header.sc-calcite-modal{background-color:var(--calcite-ui-foreground);-ms-flex:0;flex:0;display:-ms-flexbox;display:flex;max-width:100%;min-width:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}/*!\@.modal__close*/.modal__close.sc-calcite-modal{padding:1.125rem;margin:0;-ms-flex-order:2;order:2;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;color:var(--calcite-ui-text-1);outline:none;cursor:pointer;border-radius:0 var(--calcite-border-radius) 0 0}/*!\@.modal__close svg*/.modal__close.sc-calcite-modal svg.sc-calcite-modal{pointer-events:none}/*!\@.modal__close:focus,.modal__close:hover*/.modal__close.sc-calcite-modal:focus, .modal__close.sc-calcite-modal:hover{background-color:var(--calcite-ui-foreground-hover)}/*!\@.modal__close:active*/.modal__close.sc-calcite-modal:active{background-color:var(--calcite-ui-foreground-press)}/*!\@:host([dir=rtl]) .modal__close*/[dir=rtl].sc-calcite-modal-h .modal__close.sc-calcite-modal{border-radius:var(--calcite-border-radius) 0 0 0}/*!\@.modal__title*/.modal__title.sc-calcite-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.75rem 1.5rem;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:1;order:1;min-width:0}/*!\@::slotted([slot=header]),slot[name=header]::slotted(*)*/.sc-calcite-modal-s > [slot=header], slot[name=header].sc-calcite-modal-s > *{margin:0;font-weight:400;font-size:1.414rem;line-height:1.5;color:var(--calcite-ui-text-1)}\@media screen and (max-width:859px){/*!\@::slotted([slot=header]),slot[name=header]::slotted(*)*/.sc-calcite-modal-s > [slot=header], slot[name=header].sc-calcite-modal-s > *{font-size:1.33rem}}\@media screen and (max-width:479px){/*!\@::slotted([slot=header]),slot[name=header]::slotted(*)*/.sc-calcite-modal-s > [slot=header], slot[name=header].sc-calcite-modal-s > *{font-size:1.25rem}}/*!\@.modal__content*/.modal__content.sc-calcite-modal{position:relative;padding:0;height:100%;overflow:auto;max-height:calc(100vh - 12rem);overflow-y:auto;display:block;background-color:var(--calcite-ui-foreground);z-index:1}/*!\@.modal__content--spaced*/.modal__content--spaced.sc-calcite-modal{padding:1.5rem}/*!\@::slotted([slot=content]),slot[name=content]::slotted(*)*/.sc-calcite-modal-s > [slot=content], slot[name=content].sc-calcite-modal-s > *{font-size:1rem;line-height:1.5}/*!\@.modal__footer*/.modal__footer.sc-calcite-modal{display:-ms-flexbox;display:flex;-ms-flex:0;flex:0;-ms-flex-pack:end;justify-content:flex-end;padding:1.2rem 1.125rem;margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0 0 var(--calcite-border-radius) var(--calcite-border-radius);width:100%;background-color:var(--calcite-ui-foreground);border-top:1px solid var(--calcite-ui-border-3);z-index:2}/*!\@.modal__footer--hide-back .modal__back,.modal__footer--hide-secondary .modal__secondary*/.modal__footer--hide-back.sc-calcite-modal .modal__back.sc-calcite-modal, .modal__footer--hide-secondary.sc-calcite-modal .modal__secondary.sc-calcite-modal{display:none}/*!\@.modal__back*/.modal__back.sc-calcite-modal{display:block;margin-right:auto}/*!\@:host([dir=rtl]) .modal__back*/[dir=rtl].sc-calcite-modal-h .modal__back.sc-calcite-modal{margin-left:auto;margin-right:unset}/*!\@.modal__secondary*/.modal__secondary.sc-calcite-modal{display:block;margin:0 .375rem}/*!\@slot[name=primary]*/slot[name=primary].sc-calcite-modal{display:block}/*!\@:host([size=small]) .modal*/[size=small].sc-calcite-modal-h .modal.sc-calcite-modal{width:auto;max-width:32rem}\@media screen and (max-width:35rem){/*!\@:host([size=small]) .modal*/[size=small].sc-calcite-modal-h .modal.sc-calcite-modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0;border-radius:0}/*!\@:host([size=small]) .modal__content*/[size=small].sc-calcite-modal-h .modal__content.sc-calcite-modal{-ms-flex:1 1 0px;flex:1 1 0;max-height:unset}/*!\@:host([size=small]) .modal__footer,:host([size=small]) .modal__header*/[size=small].sc-calcite-modal-h .modal__footer.sc-calcite-modal, [size=small].sc-calcite-modal-h .modal__header.sc-calcite-modal{-ms-flex:inherit;flex:inherit}/*!\@:host([size=small][docked])*/[size=small][docked].sc-calcite-modal-h{-ms-flex-align:end;align-items:flex-end}}/*!\@:host([size=medium]) .modal*/[size=medium].sc-calcite-modal-h .modal.sc-calcite-modal{max-width:48rem}\@media screen and (max-width:51rem){/*!\@:host([size=medium]) .modal*/[size=medium].sc-calcite-modal-h .modal.sc-calcite-modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0;border-radius:0}/*!\@:host([size=medium]) .modal__content*/[size=medium].sc-calcite-modal-h .modal__content.sc-calcite-modal{-ms-flex:1 1 0px;flex:1 1 0;max-height:unset}/*!\@:host([size=medium]) .modal__footer,:host([size=medium]) .modal__header*/[size=medium].sc-calcite-modal-h .modal__footer.sc-calcite-modal, [size=medium].sc-calcite-modal-h .modal__header.sc-calcite-modal{-ms-flex:inherit;flex:inherit}/*!\@:host([size=medium][docked])*/[size=medium][docked].sc-calcite-modal-h{-ms-flex-align:end;align-items:flex-end}}/*!\@:host([size=large]) .modal*/[size=large].sc-calcite-modal-h .modal.sc-calcite-modal{max-width:94rem}\@media screen and (max-width:97rem){/*!\@:host([size=large]) .modal*/[size=large].sc-calcite-modal-h .modal.sc-calcite-modal{height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0;border-radius:0}/*!\@:host([size=large]) .modal__content*/[size=large].sc-calcite-modal-h .modal__content.sc-calcite-modal{-ms-flex:1 1 0px;flex:1 1 0;max-height:unset}/*!\@:host([size=large]) .modal__footer,:host([size=large]) .modal__header*/[size=large].sc-calcite-modal-h .modal__footer.sc-calcite-modal, [size=large].sc-calcite-modal-h .modal__header.sc-calcite-modal{-ms-flex:inherit;flex:inherit}/*!\@:host([size=large][docked])*/[size=large][docked].sc-calcite-modal-h{-ms-flex-align:end;align-items:flex-end}}/*!\@:host([size=fullscreen])*/[size=fullscreen].sc-calcite-modal-h{background-color:transparent}/*!\@:host([size=fullscreen]) .modal*/[size=fullscreen].sc-calcite-modal-h .modal.sc-calcite-modal{-webkit-transform:translate3D(0,20px,0) scale(.95);transform:translate3D(0,20px,0) scale(.95);height:100vh;max-height:100vh;width:100vw;max-width:100vw;margin:0}/*!\@:host([size=fullscreen]) .modal__content*/[size=fullscreen].sc-calcite-modal-h .modal__content.sc-calcite-modal{-ms-flex:1 1 auto;flex:1 1 auto}/*!\@:host([size=fullscreen]) .modal__footer,:host([size=fullscreen]) .modal__header*/[size=fullscreen].sc-calcite-modal-h .modal__footer.sc-calcite-modal, [size=fullscreen].sc-calcite-modal-h .modal__header.sc-calcite-modal{-ms-flex:inherit;flex:inherit}/*!\@:host(.is-active[size=fullscreen]) .modal*/.is-active[size=fullscreen].sc-calcite-modal-h .modal.sc-calcite-modal{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}/*!\@:host(.is-active[size=fullscreen]) .modal__footer,:host(.is-active[size=fullscreen]) .modal__header*/.is-active[size=fullscreen].sc-calcite-modal-h .modal__footer.sc-calcite-modal, .is-active[size=fullscreen].sc-calcite-modal-h .modal__header.sc-calcite-modal{border-radius:0}/*!\@:host([docked]) .modal*/[docked].sc-calcite-modal-h .modal.sc-calcite-modal{height:auto!important}/*!\@:host([docked]) .modal__content*/[docked].sc-calcite-modal-h .modal__content.sc-calcite-modal{height:auto;-ms-flex:1;flex:1}\@media screen and (max-width:860px){/*!\@:host([docked]) .modal*/[docked].sc-calcite-modal-h .modal.sc-calcite-modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}/*!\@:host([docked]) .modal__close*/[docked].sc-calcite-modal-h .modal__close.sc-calcite-modal{border-radius:0 var(--calcite-border-radius) 0 0}}\@media screen and (max-width:860px){/*!\@:host([docked][dir=rtl]) .modal__close*/[docked][dir=rtl].sc-calcite-modal-h .modal__close.sc-calcite-modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}/*!\@:host([color=red]) .modal*/[color=red].sc-calcite-modal-h .modal.sc-calcite-modal{border-top:4px solid var(--calcite-ui-red)}/*!\@:host([color=blue]) .modal*/[color=blue].sc-calcite-modal-h .modal.sc-calcite-modal{border-top:4px solid var(--calcite-ui-blue)}/*!\@:host([color=blue]) .modal__header,:host([color=red]) .modal__header*/[color=blue].sc-calcite-modal-h .modal__header.sc-calcite-modal, [color=red].sc-calcite-modal-h .modal__header.sc-calcite-modal{border-radius:var(--calcite-border-radius)}\@media screen and (max-width:860px){/*!\@::slotted([slot=header]),slot[name=header]::slotted(*)*/.sc-calcite-modal-s > [slot=header], slot[name=header].sc-calcite-modal-s > *{font-size:1.2019rem;line-height:1.5}}\@media screen and (max-width:860px) and (max-width:859px){/*!\@::slotted([slot=header]),slot[name=header]::slotted(*)*/.sc-calcite-modal-s > [slot=header], slot[name=header].sc-calcite-modal-s > *{font-size:1.1305rem}}\@media screen and (max-width:860px) and (max-width:479px){/*!\@::slotted([slot=header]),slot[name=header]::slotted(*)*/.sc-calcite-modal-s > [slot=header], slot[name=header].sc-calcite-modal-s > *{font-size:1.0625rem}}\@media screen and (max-width:860px){/*!\@.modal__title*/.modal__title.sc-calcite-modal{padding:.375rem 1.0125rem}}\@media screen and (max-width:860px){/*!\@.modal__close,.modal__content--spaced*/.modal__close.sc-calcite-modal, .modal__content--spaced.sc-calcite-modal{padding:1.0125rem}}\@media screen and (max-width:860px){/*!\@.modal__footer*/.modal__footer.sc-calcite-modal{position:-webkit-sticky;position:sticky;bottom:0}}\@media screen and (max-width:480px){/*!\@.modal__footer*/.modal__footer.sc-calcite-modal{-ms-flex-direction:column;flex-direction:column}/*!\@.modal__back,.modal__secondary*/.modal__back.sc-calcite-modal, .modal__secondary.sc-calcite-modal{margin:0;margin-bottom:.375rem}}');
styles.set('sc-calcite-notice','/*!\@:root*/.sc-calcite-notice:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-notice-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-notice:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-notice-h{display:none}/*!\@body*/body.sc-calcite-notice{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-notice{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-notice{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-notice{display:block}/*!\@a*/a.sc-calcite-notice{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-notice{visibility:hidden}/*!\@:host([scale=s])*/[scale=s].sc-calcite-notice-h{--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}/*!\@:host([scale=s]) div::slotted([slot=notice-title]),:host([scale=s]) slot[name=notice-title]::slotted(div)*/.sc-calcite-notice-h[scale=s] div.sc-calcite-notice-s > [slot=notice-title], .sc-calcite-notice-h[scale=s] slot[name=notice-title].sc-calcite-notice-s > div{font-size:.875rem;line-height:1.5}/*!\@:host([scale=s]) ::slotted(calcite-button),:host([scale=s]) div::slotted([slot=notice-message]),:host([scale=s]) slot[name=notice-message]::slotted(div)*/.sc-calcite-notice-h[scale=s] .sc-calcite-notice-s > calcite-button, .sc-calcite-notice-h[scale=s] div.sc-calcite-notice-s > [slot=notice-message], .sc-calcite-notice-h[scale=s] slot[name=notice-message].sc-calcite-notice-s > div{font-size:.8125rem;line-height:1.5}/*!\@:host([scale=m])*/[scale=m].sc-calcite-notice-h{--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.5rem}/*!\@:host([scale=m]) div::slotted([slot=notice-title]),:host([scale=m]) slot[name=notice-title]::slotted(div)*/.sc-calcite-notice-h[scale=m] div.sc-calcite-notice-s > [slot=notice-title], .sc-calcite-notice-h[scale=m] slot[name=notice-title].sc-calcite-notice-s > div{font-size:.9375rem;line-height:1.5}/*!\@:host([scale=m]) ::slotted(calcite-button),:host([scale=m]) div::slotted([slot=notice-message]),:host([scale=m]) slot[name=notice-message]::slotted(div)*/.sc-calcite-notice-h[scale=m] .sc-calcite-notice-s > calcite-button, .sc-calcite-notice-h[scale=m] div.sc-calcite-notice-s > [slot=notice-message], .sc-calcite-notice-h[scale=m] slot[name=notice-message].sc-calcite-notice-s > div{font-size:.875rem;line-height:1.5}/*!\@:host([scale=l])*/[scale=l].sc-calcite-notice-h{--calcite-notice-spacing-token-small:1.2rem;--calcite-notice-spacing-token-large:1.875rem}/*!\@:host([scale=l]) div::slotted([slot=notice-title]),:host([scale=l]) slot[name=notice-title]::slotted(div)*/.sc-calcite-notice-h[scale=l] div.sc-calcite-notice-s > [slot=notice-title], .sc-calcite-notice-h[scale=l] slot[name=notice-title].sc-calcite-notice-s > div{font-size:1rem;line-height:1.5}/*!\@:host([scale=l]) ::slotted(calcite-button),:host([scale=l]) div::slotted([slot=notice-message]),:host([scale=l]) slot[name=notice-message]::slotted(div)*/.sc-calcite-notice-h[scale=l] .sc-calcite-notice-s > calcite-button, .sc-calcite-notice-h[scale=l] div.sc-calcite-notice-s > [slot=notice-message], .sc-calcite-notice-h[scale=l] slot[name=notice-message].sc-calcite-notice-s > div{font-size:.9375rem;line-height:1.5}/*!\@:host([width=auto])*/[width=auto].sc-calcite-notice-h{--calcite-notice-width:auto}/*!\@:host([width=half])*/[width=half].sc-calcite-notice-h{--calcite-notice-width:50%}/*!\@:host([width=full])*/[width=full].sc-calcite-notice-h{--calcite-notice-width:100%}/*!\@:host*/.sc-calcite-notice-h{display:none;text-align:left;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--calcite-notice-width);max-height:0;background-color:var(--calcite-ui-foreground);opacity:0;pointer-events:none;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;border-left:0 solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}/*!\@:host([dir=rtl])*/[dir=rtl].sc-calcite-notice-h{text-align:right;border-left:none;border-right:0 solid}/*!\@:host([active])*/[active].sc-calcite-notice-h{display:-ms-inline-flexbox;display:inline-flex;opacity:1;max-height:100%;pointer-events:auto;border-width:3px;-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.08);box-shadow:0 0 8px 0 rgba(0,0,0,.08)}/*!\@div::slotted([slot=notice-title]),slot[name=notice-title]::slotted(div)*/div.sc-calcite-notice-s > [slot=notice-title], slot[name=notice-title].sc-calcite-notice-s > div{color:var(--calcite-ui-text-1);font-weight:500}/*!\@div::slotted([slot=notice-message]),slot[name=notice-message]::slotted(div)*/div.sc-calcite-notice-s > [slot=notice-message], slot[name=notice-message].sc-calcite-notice-s > div{display:inline;margin-right:var(--calcite-notice-spacing-token-small);color:var(--calcite-ui-text-2)}/*!\@:host([dir=rtl]) div::slotted([slot=notice-message]),:host([dir=rtl]) slot[name=notice-message]::slotted(div)*/.sc-calcite-notice-h[dir=rtl] div.sc-calcite-notice-s > [slot=notice-message], .sc-calcite-notice-h[dir=rtl] slot[name=notice-message].sc-calcite-notice-s > div{margin-right:unset;margin-left:var(--calcite-notice-spacing-token-small)}/*!\@.notice-content*/.notice-content.sc-calcite-notice{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small) 0}/*!\@.notice-content:first-of-type:not(:only-child)*/.notice-content.sc-calcite-notice:first-of-type:not(:only-child){padding-left:var(--calcite-notice-spacing-token-large)}/*!\@.notice-content:only-child*/.notice-content.sc-calcite-notice:only-child{padding:var(--calcite-notice-spacing-token-small)}/*!\@:host([dir=rtl]) .notice-content*/[dir=rtl].sc-calcite-notice-h .notice-content.sc-calcite-notice{padding:var(--calcite-notice-spacing-token-small) 0 var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-small)}/*!\@:host([dir=rtl]) .notice-content:first-of-type:not(:only-child)*/[dir=rtl].sc-calcite-notice-h .notice-content.sc-calcite-notice:first-of-type:not(:only-child){padding-right:var(--calcite-notice-spacing-token-large)}/*!\@.notice-icon*/.notice-icon.sc-calcite-notice{-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}/*!\@.notice-close,.notice-icon*/.notice-close.sc-calcite-notice, .notice-icon.sc-calcite-notice{-webkit-box-sizing:border-box;box-sizing:border-box;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}/*!\@.notice-close*/.notice-close.sc-calcite-notice{-ms-flex:0 0 auto;flex:0 0 auto;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3)}/*!\@.notice-close:focus,.notice-close:hover*/.notice-close.sc-calcite-notice:focus, .notice-close.sc-calcite-notice:hover{background-color:var(--calcite-ui-foreground-hover)}/*!\@.notice-close:active*/.notice-close.sc-calcite-notice:active{background-color:var(--calcite-ui-foreground-press)}/*!\@:host([color=blue])*/[color=blue].sc-calcite-notice-h{border-color:var(--calcite-ui-blue)}/*!\@:host([color=blue]) .notice-icon*/[color=blue].sc-calcite-notice-h .notice-icon.sc-calcite-notice{color:var(--calcite-ui-blue)}/*!\@:host([color=red])*/[color=red].sc-calcite-notice-h{border-color:var(--calcite-ui-red)}/*!\@:host([color=red]) .notice-icon*/[color=red].sc-calcite-notice-h .notice-icon.sc-calcite-notice{color:var(--calcite-ui-red)}/*!\@:host([color=yellow])*/[color=yellow].sc-calcite-notice-h{border-color:var(--calcite-ui-yellow)}/*!\@:host([color=yellow]) .notice-icon*/[color=yellow].sc-calcite-notice-h .notice-icon.sc-calcite-notice{color:var(--calcite-ui-yellow)}/*!\@:host([color=green])*/[color=green].sc-calcite-notice-h{border-color:var(--calcite-ui-green)}/*!\@:host([color=green]) .notice-icon*/[color=green].sc-calcite-notice-h .notice-icon.sc-calcite-notice{color:var(--calcite-ui-green)}');
styles.set('sc-calcite-pagination','/*!\@:root*/.sc-calcite-pagination:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-pagination-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-pagination:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-pagination-h{display:none}/*!\@body*/body.sc-calcite-pagination{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-pagination{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-pagination{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-pagination{display:block}/*!\@a*/a.sc-calcite-pagination{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-pagination{visibility:hidden}/*!\@:host*/.sc-calcite-pagination-h{display:-ms-inline-flexbox;display:inline-flex;background-color:var(--calcite-ui-foreground);-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}/*!\@:host(.backgroundColor)*/.backgroundColor.sc-calcite-pagination-h{background-color:var(--calcite-ui-background)}/*!\@.next,.page,.previous*/.next.sc-calcite-pagination, .page.sc-calcite-pagination, .previous.sc-calcite-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:3px solid transparent;border-bottom:3px solid transparent;color:var(--calcite-ui-text-3);cursor:pointer}/*!\@.next:hover,.page:hover,.previous:hover*/.next.sc-calcite-pagination:hover, .page.sc-calcite-pagination:hover, .previous.sc-calcite-pagination:hover{color:var(--calcite-ui-text-1);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}/*!\@.page:hover*/.page.sc-calcite-pagination:hover{border-bottom-color:var(--calcite-ui-border-2)}/*!\@.page.is-selected*/.page.is-selected.sc-calcite-pagination{font-weight:500;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue)}/*!\@.next,.previous*/.next.sc-calcite-pagination, .previous.sc-calcite-pagination{padding:.75em 1em}/*!\@.next:hover,.previous:hover*/.next.sc-calcite-pagination:hover, .previous.sc-calcite-pagination:hover{color:var(--calcite-ui-blue);background-color:var(--calcite-ui-foreground-hover)}/*!\@.next:active,.previous:active*/.next.sc-calcite-pagination:active, .previous.sc-calcite-pagination:active{background-color:var(--calcite-ui-foreground-press)}/*!\@.next.is-disabled,.previous.is-disabled*/.next.is-disabled.sc-calcite-pagination, .previous.is-disabled.sc-calcite-pagination{background-color:transparent}/*!\@.next.is-disabled>svg,.previous.is-disabled>svg*/.next.is-disabled.sc-calcite-pagination > svg.sc-calcite-pagination, .previous.is-disabled.sc-calcite-pagination > svg.sc-calcite-pagination{opacity:.3}/*!\@.next*/.next.sc-calcite-pagination{margin-right:0}/*!\@.ellipsis,.page*/.ellipsis.sc-calcite-pagination, .page.sc-calcite-pagination{padding:.75em 1em}/*!\@.ellipsis*/.ellipsis.sc-calcite-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end;color:var(--calcite-ui-text-3)}');
styles.set('sc-calcite-popover','/*!\@:root*/.sc-calcite-popover:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-popover-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-popover:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-popover-h{display:none}/*!\@body*/body.sc-calcite-popover{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-popover{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-popover{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-popover{display:block}/*!\@a*/a.sc-calcite-popover{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-popover{visibility:hidden}/*!\@:host*/.sc-calcite-popover-h{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}/*!\@:host([aria-hidden=true])*/[aria-hidden=true].sc-calcite-popover-h{pointer-events:none}/*!\@:host([aria-hidden=false])*/[aria-hidden=false].sc-calcite-popover-h{-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}/*!\@.arrow,.arrow:before*/.arrow.sc-calcite-popover, .arrow.sc-calcite-popover:before{position:absolute;width:8px;height:8px;z-index:-1}/*!\@.arrow:before*/.arrow.sc-calcite-popover:before{content:\"\";-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground)}/*!\@:host([data-popper-placement^=top])>.arrow*/[data-popper-placement^=top].sc-calcite-popover-h > .arrow.sc-calcite-popover{bottom:-4px}/*!\@:host([data-popper-placement^=bottom])>.arrow*/[data-popper-placement^=bottom].sc-calcite-popover-h > .arrow.sc-calcite-popover{top:-4px}/*!\@:host([data-popper-placement^=left])>.arrow*/[data-popper-placement^=left].sc-calcite-popover-h > .arrow.sc-calcite-popover{right:-4px}/*!\@:host([data-popper-placement^=right])>.arrow*/[data-popper-placement^=right].sc-calcite-popover-h > .arrow.sc-calcite-popover{left:-4px}/*!\@.container*/.container.sc-calcite-popover{border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground);position:relative;max-width:350px;overflow:hidden;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-1)}/*!\@.container,.content*/.container.sc-calcite-popover, .content.sc-calcite-popover{display:-ms-flexbox;display:flex}/*!\@.content*/.content.sc-calcite-popover{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;line-height:24px}/*!\@.close-button*/.close-button.sc-calcite-popover{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:40px;height:50px;z-index:1;color:var(--calcite-ui-text-1);padding:16px 12px;border:none;border-radius:0 var(--calcite-border-radius) 0 0;display:block;cursor:pointer;background:var(--calcite-ui-foreground)}/*!\@.close-button:hover*/.close-button.sc-calcite-popover:hover{background:var(--calcite-ui-foreground-hover)}/*!\@.close-button:active*/.close-button.sc-calcite-popover:active{background:var(--calcite-ui-foreground-press)}/*!\@:host([dir=rtl]) .close-button*/[dir=rtl].sc-calcite-popover-h .close-button.sc-calcite-popover{border-radius:var(--calcite-border-radius) 0 0 0}/*!\@.image-container*/.image-container.sc-calcite-popover{overflow:hidden;max-height:200px;margin:5px}/*!\@slot[name=image]::slotted(img)*/slot[name=image].sc-calcite-popover-s > img{height:auto;width:100%;max-height:200px;-o-object-position:50% 50%;object-position:50% 50%;-o-object-fit:cover;object-fit:cover}');
styles.set('sc-calcite-progress','/*!\@:root*/.sc-calcite-progress:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-progress-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-progress:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-progress-h{display:none}/*!\@body*/body.sc-calcite-progress{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-progress{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-progress{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-progress{display:block}/*!\@a*/a.sc-calcite-progress{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-progress{visibility:hidden}/*!\@:host*/.sc-calcite-progress-h{--calcite-track-color:#eaeaea;position:relative;display:block}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-progress-h{--calcite-track-color:#353535}/*!\@.calcite-progress--bar,.calcite-progress--track*/.calcite-progress--bar.sc-calcite-progress, .calcite-progress--track.sc-calcite-progress{content:\"\";opacity:1;position:absolute;height:2px;top:0;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}/*!\@.calcite-progress--track*/.calcite-progress--track.sc-calcite-progress{background:var(--calcite-track-color);z-index:0;width:100%}/*!\@.calcite-progress--bar*/.calcite-progress--bar.sc-calcite-progress{background-color:var(--calcite-ui-blue);z-index:0}/*!\@.--indeterminate*/.--indeterminate.sc-calcite-progress{width:20%;-webkit-animation:looping-progress-bar-ani 1.5s linear infinite;animation:looping-progress-bar-ani 1.5s linear infinite}/*!\@.--determinate*/.--determinate.sc-calcite-progress{width:var(--percentage-value)}/*!\@.calcite-progress--text*/.calcite-progress--text.sc-calcite-progress{padding:20px 0 0 0}\@-webkit-keyframes looping-progress-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}\@keyframes looping-progress-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}');
styles.set('sc-calcite-radio-group','/*!\@:root*/.sc-calcite-radio-group:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-radio-group-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-radio-group:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-radio-group-h{display:none}/*!\@body*/body.sc-calcite-radio-group{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-radio-group{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-radio-group{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-radio-group{display:block}/*!\@a*/a.sc-calcite-radio-group{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-radio-group{visibility:hidden}/*!\@:host*/.sc-calcite-radio-group-h{display:-ms-flexbox;display:flex;--calcite-radio-group-text-color-active:#fff;--calcite-radio-group-padding:0.5rem 1rem}/*!\@:host([scale=s])*/[scale=s].sc-calcite-radio-group-h{--calcite-radio-group-padding:0.25rem 0.75rem}/*!\@:host([scale=m])*/[scale=m].sc-calcite-radio-group-h{--calcite-radio-group-padding:0.4rem 1rem}/*!\@:host([scale=l])*/[scale=l].sc-calcite-radio-group-h{--calcite-radio-group-padding:0.5rem 1.5rem}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-radio-group-h{--calcite-radio-group-text-color-active:#0b0b0b}/*!\@::slotted(calcite-radio-group-item:focus),::slotted(calcite-radio-group-item[checked])*/.sc-calcite-radio-group-s > calcite-radio-group-item:focus, .sc-calcite-radio-group-s > calcite-radio-group-item[checked]{z-index:0}');
styles.set('sc-calcite-radio-group-item','/*!\@:root*/.sc-calcite-radio-group-item:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-radio-group-item-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-radio-group-item:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-radio-group-item-h{display:none}/*!\@body*/body.sc-calcite-radio-group-item{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-radio-group-item{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-radio-group-item{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-radio-group-item{display:block}/*!\@a*/a.sc-calcite-radio-group-item{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-radio-group-item{visibility:hidden}/*!\@:host*/.sc-calcite-radio-group-item-h{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground);color:var(--calcite-ui-text-3);padding:var(--calcite-radio-group-padding);line-height:1.25;margin:.25rem -1px 0 0;border:1px solid var(--calcite-ui-border-1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background .1s ease-in-out,border-color .1s ease-in-out;transition:background .1s ease-in-out,border-color .1s ease-in-out;cursor:pointer}/*!\@:host([scale=s])*/[scale=s].sc-calcite-radio-group-item-h{font-size:.8125rem;line-height:1.5}/*!\@:host([scale=m])*/[scale=m].sc-calcite-radio-group-item-h{font-size:.9375rem;line-height:1.5}/*!\@:host([scale=l])*/[scale=l].sc-calcite-radio-group-item-h{font-size:1rem;line-height:1.5}/*!\@:host(:hover)*/.sc-calcite-radio-group-item-h:hover{background-color:var(--calcite-ui-foreground-hover)}/*!\@:host(:active)*/.sc-calcite-radio-group-item-h:active{background-color:var(--calcite-ui-foreground-press)}/*!\@:host([checked])*/[checked].sc-calcite-radio-group-item-h{background-color:var(--calcite-ui-blue);border-color:var(--calcite-ui-blue);color:var(--calcite-radio-group-text-color-active);cursor:default}/*!\@label*/label.sc-calcite-radio-group-item{pointer-events:none}/*!\@::slotted(input)*/.sc-calcite-radio-group-item-s > input{display:none}');
styles.set('sc-calcite-slider','/*!\@:root*/.sc-calcite-slider:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-slider-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-slider:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-slider-h{display:none}/*!\@body*/body.sc-calcite-slider{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-slider{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-slider{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-slider{display:block}/*!\@a*/a.sc-calcite-slider{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-slider{visibility:hidden}/*!\@:host*/.sc-calcite-slider-h{--calcite-slider-tick:#959595;--calcite-slider-label:#6a6a6a;--calcite-slider-track:#d4d4d4;--calcite-slider-handle:#fff;--calcite-slider-handle-border:#6a6a6a;display:block;padding:7px 0;margin:7px 0;position:relative}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-slider-h{--calcite-slider-tick:#6a6a6a;--calcite-slider-label:#9f9f9f;--calcite-slider-track:#4a4a4a;--calcite-slider-handle:#2b2b2b;--calcite-slider-handle-border:#9f9f9f}/*!\@:host([disabled])*/[disabled].sc-calcite-slider-h{opacity:.5;pointer-events:none}/*!\@:host([label-handles]),:host([precise])*/[label-handles].sc-calcite-slider-h, [precise].sc-calcite-slider-h{margin-top:21px}/*!\@:host([label-ticks]),:host([precise][is-range])*/[label-ticks].sc-calcite-slider-h, [precise][is-range].sc-calcite-slider-h{margin-bottom:21px}/*!\@:host([precise][label-handles])*/[precise][label-handles].sc-calcite-slider-h{margin-top:35px}/*!\@:host([precise][label-handles][is-range])*/[precise][label-handles][is-range].sc-calcite-slider-h{margin-bottom:35px}/*!\@.slider__thumb*/.slider__thumb.sc-calcite-slider{position:absolute;right:var(--calcite-slider-range-max);height:28px;width:28px;margin:-14px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:3}/*!\@.slider__thumb--min*/.slider__thumb--min.sc-calcite-slider{right:auto;left:var(--calcite-slider-range-min)}/*!\@.slider__handle*/.slider__handle.sc-calcite-slider{position:absolute;top:0;left:0;height:14px;width:14px;margin:7px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-slider-handle);border:2px solid var(--calcite-slider-handle-border);-webkit-transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,-webkit-box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease;transition:border .25s ease,background-color .25s ease,box-shadow .25s ease,-webkit-box-shadow .25s ease}/*!\@.slider__handle__label*/.slider__handle__label.sc-calcite-slider{position:absolute;left:0;bottom:28px;width:28px;height:.75em;font-size:.8125rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-slider-label);text-align:center}/*!\@.slider__thumb:hover .slider__handle*/.slider__thumb.sc-calcite-slider:hover .slider__handle.sc-calcite-slider{border-width:3px;border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08)}/*!\@.slider__thumb--active,.slider__thumb:focus*/.slider__thumb--active.sc-calcite-slider, .slider__thumb.sc-calcite-slider:focus{outline:none;z-index:4}/*!\@.slider__thumb--active .slider__handle,.slider__thumb:focus .slider__handle*/.slider__thumb--active.sc-calcite-slider .slider__handle.sc-calcite-slider, .slider__thumb.sc-calcite-slider:focus .slider__handle.sc-calcite-slider{background-color:var(--calcite-ui-blue);border-color:var(--calcite-ui-blue);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.16);box-shadow:0 0 8px 0 rgba(0,0,0,.16)}/*!\@.slider__thumb--precise*/.slider__thumb--precise.sc-calcite-slider{margin-top:-28px}/*!\@.slider__thumb--precise:after*/.slider__thumb--precise.sc-calcite-slider:after{content:\"\";display:block;position:absolute;top:14px;left:50%;width:2px;height:7px;background-color:var(--calcite-slider-handle-border);margin-left:-1px;margin-top:7px;z-index:2}/*!\@.slider__thumb--active.slider__thumb--precise:after,.slider__thumb:focus.slider__thumb--precise:after,.slider__thumb:hover.slider__thumb--precise:after*/.slider__thumb--active.slider__thumb--precise.sc-calcite-slider:after, .slider__thumb.sc-calcite-slider:focus.slider__thumb--precise:after, .slider__thumb.sc-calcite-slider:hover.slider__thumb--precise:after{background-color:var(--calcite-ui-blue)}/*!\@.slider__thumb--precise.slider__thumb--min*/.slider__thumb--precise.slider__thumb--min.sc-calcite-slider{margin-top:-2px}/*!\@.slider__thumb--precise.slider__thumb--min .slider__handle__label*/.slider__thumb--precise.slider__thumb--min.sc-calcite-slider .slider__handle__label.sc-calcite-slider{bottom:unset;top:28px}/*!\@.slider__thumb--precise.slider__thumb--min:after*/.slider__thumb--precise.slider__thumb--min.sc-calcite-slider:after{top:0;margin-top:0}/*!\@.slider__track*/.slider__track.sc-calcite-slider{height:2px;border-radius:0;z-index:2;background-color:var(--calcite-slider-track);-webkit-transition:all .25s ease-in;transition:all .25s ease-in;position:relative}/*!\@.slider__track__range*/.slider__track__range.sc-calcite-slider{position:absolute;top:0;right:var(--calcite-slider-range-max);left:var(--calcite-slider-range-min);height:2px;background-color:var(--calcite-ui-blue)}/*!\@.slider__tick*/.slider__tick.sc-calcite-slider{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-slider-tick-offset);margin-left:-3px;border:1px solid var(--calcite-slider-handle);border-right-width:2px;border-left-width:2px;background-color:var(--calcite-slider-tick)}/*!\@.slider__tick--active*/.slider__tick--active.sc-calcite-slider{background-color:var(--calcite-ui-blue)}/*!\@.slider__tick__label*/.slider__tick__label.sc-calcite-slider{position:absolute;font-size:.8125rem;line-height:1.5;font-weight:500;color:var(--calcite-slider-label);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}/*!\@.slider__tick__label--min*/.slider__tick__label--min.sc-calcite-slider{left:0;margin:14px -3px;text-align:left}/*!\@.slider__tick__label--max*/.slider__tick__label--max.sc-calcite-slider{left:unset;right:0;margin:14px -3px;text-align:right}');
styles.set('sc-calcite-switch','/*!\@:root*/.sc-calcite-switch:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-switch-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-switch:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-switch-h{display:none}/*!\@body*/body.sc-calcite-switch{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-switch{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-switch{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-switch{display:block}/*!\@a*/a.sc-calcite-switch{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-switch{visibility:hidden}/*!\@:host*/.sc-calcite-switch-h{--calcite-switch-track-background:#f3f3f3;--calcite-switch-track-border:#d4d4d4;--calcite-switch-handle-background:#fff;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:var(--calcite-ui-blue-hover);--calcite-switch-hover-track-background:#eaeaea;--calcite-switch-hover-track-border:#bfbfbf;--calcite-switch-switched-track-background:var(--calcite-ui-blue-hover);--calcite-switch-switched-track-border:var(--calcite-ui-blue-press);--calcite-switch-switched-handle-border:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-background:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-border:var(--calcite-ui-blue-hover);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-blue-press);--calcite-switch-box-shadow-color:hsla(0,0%,45.9%,0.5);--calcite-switch-switched-box-shadow-color:rgba(0,122,194,0.5)}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-switch-h{--calcite-switch-track-background:#353535;--calcite-switch-track-border:#555;--calcite-switch-handle-background:#2b2b2b;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:var(--calcite-ui-blue-hover);--calcite-switch-hover-track-background:#404040;--calcite-switch-hover-track-border:grey;--calcite-switch-switched-track-background:var(--calcite-ui-blue-hover);--calcite-switch-switched-track-border:var(--calcite-ui-blue);--calcite-switch-switched-handle-border:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-background:var(--calcite-ui-blue);--calcite-switch-switched-hover-track-border:var(--calcite-ui-blue);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-blue-hover);--calcite-switch-switched-box-shadow-color:rgba(0,160,255,0.5)}/*!\@:host([color=red])*/[color=red].sc-calcite-switch-h{--calcite-switch-switched-track-background:var(--calcite-ui-red-hover);--calcite-switch-switched-track-border:var(--calcite-ui-red);--calcite-switch-hover-handle-border:var(--calcite-ui-red-hover);--calcite-switch-switched-handle-border:var(--calcite-ui-red);--calcite-switch-switched-hover-track-background:var(--calcite-ui-red);--calcite-switch-switched-hover-track-border:var(--calcite-ui-red-hover);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-red-press);--calcite-switch-switched-box-shadow-color:rgba(216,48,32,0.5)}/*!\@:host([theme=dark][color=red])*/[theme=dark][color=red].sc-calcite-switch-h{--calcite-switch-switched-track-background:var(--calcite-ui-red-hover);--calcite-switch-switched-track-border:var(--calcite-ui-red);--calcite-switch-hover-handle-border:var(--calcite-ui-red-hover);--calcite-switch-switched-handle-border:var(--calcite-ui-red);--calcite-switch-switched-hover-track-background:var(--calcite-ui-red);--calcite-switch-switched-hover-track-border:var(--calcite-ui-red-press);--calcite-switch-switched-hover-handle-border:var(--calcite-ui-red-press);--calcite-switch-switched-box-shadow-color:rgba(254,88,62,0.5)}/*!\@:host([scale=s])*/[scale=s].sc-calcite-switch-h{--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}/*!\@:host([scale=m])*/[scale=m].sc-calcite-switch-h{--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}/*!\@:host([scale=l])*/[scale=l].sc-calcite-switch-h{--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}/*!\@::slotted(input)*/.sc-calcite-switch-s > input{display:none}/*!\@:host*/.sc-calcite-switch-h{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;top:-.1em;tap-highlight-color:transparent;margin-right:.5em}/*!\@.track*/.track.sc-calcite-switch{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-switch-track-background);border-radius:30px;border:1px solid var(--calcite-switch-track-border)}/*!\@.handle,.track*/.handle.sc-calcite-switch, .track.sc-calcite-switch{pointer-events:none;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}/*!\@.handle*/.handle.sc-calcite-switch{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-switch-handle-background);border-radius:30px;border:2px solid var(--calcite-switch-handle-border)}/*!\@:host(:focus),:host(:hover)*/.sc-calcite-switch-h:focus, .sc-calcite-switch-h:hover{outline:none}/*!\@:host(:focus) .track,:host(:hover) .track*/.sc-calcite-switch-h:focus .track.sc-calcite-switch, .sc-calcite-switch-h:hover .track.sc-calcite-switch{background-color:var(--calcite-switch-hover-track-background);border-color:var(--calcite-switch-hover-track-border);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.08);box-shadow:0 0 16px 0 rgba(0,0,0,.08)}/*!\@:host(:focus) .handle,:host(:hover) .handle*/.sc-calcite-switch-h:focus .handle.sc-calcite-switch, .sc-calcite-switch-h:hover .handle.sc-calcite-switch{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.08);box-shadow:0 0 8px 0 rgba(0,0,0,.08);right:auto}/*!\@:host([switched]) .track*/[switched].sc-calcite-switch-h .track.sc-calcite-switch{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}/*!\@:host([switched]) .handle*/[switched].sc-calcite-switch-h .handle.sc-calcite-switch{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border);-webkit-box-shadow:0 0 8px 0 rgba(0,0,0,.08);box-shadow:0 0 8px 0 rgba(0,0,0,.08)}/*!\@:host([switched]:focus) .track*/[switched].sc-calcite-switch-h:focus .track.sc-calcite-switch{-webkit-box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color)}/*!\@:host([switched]:hover) .track*/[switched].sc-calcite-switch-h:hover .track.sc-calcite-switch{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}/*!\@:host([switched]:hover) .handle*/[switched].sc-calcite-switch-h:hover .handle.sc-calcite-switch{border-color:var(--calcite-switch-switched-hover-handle-border)}/*!\@:host([dir=rtl])*/[dir=rtl].sc-calcite-switch-h{margin-right:0;margin-left:.5em}/*!\@:host([dir=rtl]) .handle*/[dir=rtl].sc-calcite-switch-h .handle.sc-calcite-switch{left:auto;right:-1px}/*!\@:host([dir=rtl]:hover) .handle*/[dir=rtl].sc-calcite-switch-h:hover .handle.sc-calcite-switch{right:1px;left:auto}/*!\@:host([dir=rtl][switched]) .handle,:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle*/[dir=rtl][switched].sc-calcite-switch-h .handle.sc-calcite-switch, [dir=rtl][switched].sc-calcite-switch-h:active .handle.sc-calcite-switch, [dir=rtl][switched].sc-calcite-switch-h:focus .handle.sc-calcite-switch{right:auto;left:-1px}');
styles.set('sc-calcite-tab','/*!\@:root*/.sc-calcite-tab:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tab-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-tab:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-tab-h{display:none}/*!\@body*/body.sc-calcite-tab{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-tab{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-tab{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-tab{display:block}/*!\@a*/a.sc-calcite-tab{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-tab{visibility:hidden}/*!\@:host([is-active]) section*/[is-active].sc-calcite-tab-h section.sc-calcite-tab{display:block}/*!\@section*/section.sc-calcite-tab{display:none}');
styles.set('sc-calcite-tab-nav','/*!\@:root*/.sc-calcite-tab-nav:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tab-nav-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-tab-nav:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-tab-nav-h{display:none}/*!\@body*/body.sc-calcite-tab-nav{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-tab-nav{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-tab-nav{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-tab-nav{display:block}/*!\@a*/a.sc-calcite-tab-nav{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-tab-nav{visibility:hidden}/*!\@.tab-nav*/.tab-nav.sc-calcite-tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}/*!\@::slotted(calcite-tab-title)*/.sc-calcite-tab-nav-s > calcite-tab-title{margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}/*!\@:host([dir=rtl]) ::slotted(calcite-tab-title)*/.sc-calcite-tab-nav-h[dir=rtl] .sc-calcite-tab-nav-s > calcite-tab-title{margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}');
styles.set('sc-calcite-tab-title','/*!\@:root*/.sc-calcite-tab-title:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tab-title-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-tab-title:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-tab-title-h{display:none}/*!\@body*/body.sc-calcite-tab-title{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-tab-title{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-tab-title{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-tab-title{display:block}/*!\@a*/a.sc-calcite-tab-title{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-tab-title{visibility:hidden}/*!\@:host*/.sc-calcite-tab-title-h{-ms-flex:0 1 var(--calcite-tabs-tab-basis);flex:0 1 var(--calcite-tabs-tab-basis);outline:none}/*!\@:host(:active) a,:host(:focus) a,:host(:hover) a*/.sc-calcite-tab-title-h:active a.sc-calcite-tab-title, .sc-calcite-tab-title-h:focus a.sc-calcite-tab-title, .sc-calcite-tab-title-h:hover a.sc-calcite-tab-title{outline:none;text-decoration:none;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-border-2)}/*!\@:host([is-active]) a*/[is-active].sc-calcite-tab-title-h a.sc-calcite-tab-title{color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue);font-weight:500}/*!\@a*/a.sc-calcite-tab-title{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.875rem;line-height:1.5;padding:.75rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-ui-text-3);outline:none;width:100%;display:block;text-align:var(--calcite-tabs-tab-text-align)}');
styles.set('sc-calcite-tabs','/*!\@:root*/.sc-calcite-tabs:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tabs-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-tabs:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-tabs-h{display:none}/*!\@body*/body.sc-calcite-tabs{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-tabs{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-tabs{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-tabs{display:block}/*!\@a*/a.sc-calcite-tabs{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-tabs{visibility:hidden}/*!\@:host*/.sc-calcite-tabs-h{display:block;--calcite-tabs-layout:flex-start;--calcite-tabs-tab-basis:auto;--calcite-tabs-tab-text-align:start;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:0}/*!\@:host([dir=rtl])*/[dir=rtl].sc-calcite-tabs-h{--calcite-tabs-tab-margin-start:0;--calcite-tabs-tab-margin-end:1.25rem}/*!\@:host([layout=center])*/[layout=center].sc-calcite-tabs-h{--calcite-tabs-layout:center;--calcite-tabs-tab-basis:200px;--calcite-tabs-tab-text-align:center;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:1.25rem}/*!\@section*/section.sc-calcite-tabs{border-top:1px solid var(--calcite-ui-border-1)}');
styles.set('sc-calcite-tooltip','/*!\@:root*/.sc-calcite-tooltip:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tooltip-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-tooltip:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-tooltip-h{display:none}/*!\@body*/body.sc-calcite-tooltip{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-tooltip{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-tooltip{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-tooltip{display:block}/*!\@a*/a.sc-calcite-tooltip{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-tooltip{visibility:hidden}/*!\@:host*/.sc-calcite-tooltip-h{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}/*!\@:host([aria-hidden=true])*/[aria-hidden=true].sc-calcite-tooltip-h{pointer-events:none}/*!\@:host([aria-hidden=false])*/[aria-hidden=false].sc-calcite-tooltip-h{-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}/*!\@.arrow,.arrow:before*/.arrow.sc-calcite-tooltip, .arrow.sc-calcite-tooltip:before{position:absolute;width:8px;height:8px;z-index:-1}/*!\@.arrow:before*/.arrow.sc-calcite-tooltip:before{content:\"\";-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground)}/*!\@:host([data-popper-placement^=top])>.arrow*/[data-popper-placement^=top].sc-calcite-tooltip-h > .arrow.sc-calcite-tooltip{bottom:-4px}/*!\@:host([data-popper-placement^=bottom])>.arrow*/[data-popper-placement^=bottom].sc-calcite-tooltip-h > .arrow.sc-calcite-tooltip{top:-4px}/*!\@:host([data-popper-placement^=left])>.arrow*/[data-popper-placement^=left].sc-calcite-tooltip-h > .arrow.sc-calcite-tooltip{right:-4px}/*!\@:host([data-popper-placement^=right])>.arrow*/[data-popper-placement^=right].sc-calcite-tooltip-h > .arrow.sc-calcite-tooltip{left:-4px}/*!\@.container*/.container.sc-calcite-tooltip{position:relative;border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:.8125rem;line-height:1.5}');
styles.set('sc-calcite-tree','/*!\@:root*/.sc-calcite-tree:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tree-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-tree:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-tree-h{display:none}/*!\@body*/body.sc-calcite-tree{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-tree{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-tree{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-tree{display:block}/*!\@a*/a.sc-calcite-tree{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-tree{visibility:hidden}/*!\@:host*/.sc-calcite-tree-h{display:block;outline:none;--calcite-tree-text:#404040;--calcite-tree-text-hover:#151515;--calcite-tree-text-active:#0b0b0b;--calcite-tree-chevron:#bfbfbf;--calcite-tree-chevron-hover:#6a6a6a;--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:#bfbfbf;--calcite-tree-indicator-active:var(--calcite-ui-blue);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tree-h{--calcite-tree-text:#d4d4d4;--calcite-tree-text-hover:#eaeaea;--calcite-tree-text-active:#f3f3f3;--calcite-tree-chevron:#555;--calcite-tree-chevron-hover:#959595;--calcite-tree-indicator:#555;--calcite-tree-indicator-active:var(--calcite-ui-blue)}/*!\@:host([lines])*/[lines].sc-calcite-tree-h{--calcite-tree-line:#eaeaea;--calcite-tree-line-hover:#cacaca;--calcite-tree-line-active:var(--calcite-ui-blue)}/*!\@:host([lines][theme=dark])*/[lines][theme=dark].sc-calcite-tree-h{--calcite-tree-line:#555;--calcite-tree-line-hover:grey;--calcite-tree-line-active:var(--calcite-ui-blue)}/*!\@:host([size=s])*/[size=s].sc-calcite-tree-h{--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}/*!\@:host([dir=rtl])*/[dir=rtl].sc-calcite-tree-h{--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}/*!\@:host([dir=rtl][size=s])*/[dir=rtl][size=s].sc-calcite-tree-h{--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}');
styles.set('sc-calcite-tree-item','\@charset \"UTF-8\";/*!\@:root*/.sc-calcite-tree-item:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}/*!\@:host([theme=dark])*/[theme=dark].sc-calcite-tree-item-h{--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}/*!\@:root*/.sc-calcite-tree-item:root{--calcite-border-radius:3px}/*!\@:host([hidden])*/[hidden].sc-calcite-tree-item-h{display:none}/*!\@body*/body.sc-calcite-tree-item{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}/*!\@.overflow-hidden*/.overflow-hidden.sc-calcite-tree-item{overflow:hidden}/*!\@calcite-tab*/calcite-tab.sc-calcite-tree-item{display:none}/*!\@calcite-tab[is-active]*/calcite-tab[is-active].sc-calcite-tree-item{display:block}/*!\@a*/a.sc-calcite-tree-item{color:#007ac2}/*!\@.hydrated--invisible*/.hydrated--invisible.sc-calcite-tree-item{visibility:hidden}/*!\@:host*/.sc-calcite-tree-item-h{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none}/*!\@::slotted(*),:host*/.sc-calcite-tree-item-s > *, .sc-calcite-tree-item-h{font-size:.875rem;line-height:1.5;max-width:100%}/*!\@::slotted(*)*/.sc-calcite-tree-item-s > *{color:var(--calcite-tree-text)!important;word-wrap:break-word}/*!\@::slotted(*),::slotted(*):hover*/.sc-calcite-tree-item-s > *, .sc-calcite-tree-item-s > *:hover{text-decoration:none!important}/*!\@.calcite-tree-children*/.calcite-tree-children.sc-calcite-tree-item{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}/*!\@.calcite-tree-children:after*/.calcite-tree-children.sc-calcite-tree-item:after{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}/*!\@:host([expanded])>.calcite-tree-children*/[expanded].sc-calcite-tree-item-h > .calcite-tree-children.sc-calcite-tree-item{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}/*!\@:host([has-children]) .calcite-tree-children:focus:after,:host([has-children]) .calcite-tree-children:hover:after*/[has-children].sc-calcite-tree-item-h .calcite-tree-children.sc-calcite-tree-item:focus:after, [has-children].sc-calcite-tree-item-h .calcite-tree-children.sc-calcite-tree-item:hover:after{background:var(--calcite-tree-line-hover)}/*!\@.calcite-tree-node*/.calcite-tree-node.sc-calcite-tree-item{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}/*!\@.calcite-tree-node:before*/.calcite-tree-node.sc-calcite-tree-item:before{content:\"•\";left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator)}/*!\@.calcite-tree-node:after,.calcite-tree-node:before*/.calcite-tree-node.sc-calcite-tree-item:after, .calcite-tree-node.sc-calcite-tree-item:before{position:absolute;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}/*!\@.calcite-tree-node:after*/.calcite-tree-node.sc-calcite-tree-item:after{content:\"\";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0}/*!\@:host([depth=\"1\"])>.calcite-tree-node:after*/[depth=\"1\"].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:after{display:none}/*!\@:host([has-children])>.calcite-tree-node*/[has-children].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item{padding-left:0;padding-right:0}/*!\@:host([has-children])>.calcite-tree-node:before*/[has-children].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:before{display:none}/*!\@:host([depth=\"1\"])>.calcite-tree-children:before,:host([depth=\"1\"])>.calcite-tree-node:before*/[depth=\"1\"].sc-calcite-tree-item-h > .calcite-tree-children.sc-calcite-tree-item:before, [depth=\"1\"].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}/*!\@.calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before,:host([selected]) .calcite-tree-node:hover:before*/.calcite-tree-node.sc-calcite-tree-item:hover:before, .sc-calcite-tree-item-h:focus .calcite-tree-node.sc-calcite-tree-item:before, [selected].sc-calcite-tree-item-h .calcite-tree-node.sc-calcite-tree-item:hover:before{opacity:1}/*!\@.calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after,:host([selected]) .calcite-tree-node:hover:after*/.calcite-tree-node.sc-calcite-tree-item:hover:after, .sc-calcite-tree-item-h:focus .calcite-tree-node.sc-calcite-tree-item:after, [selected].sc-calcite-tree-item-h .calcite-tree-node.sc-calcite-tree-item:hover:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}/*!\@.calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*)*/.calcite-tree-node:hover .sc-calcite-tree-item-s > *, .sc-calcite-tree-item-h:focus .calcite-tree-node .sc-calcite-tree-item-s > *, .sc-calcite-tree-item-h[selected] .calcite-tree-node:hover .sc-calcite-tree-item-s > *{color:var(--calcite-tree-text-hover)}/*!\@.calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron*/.calcite-tree-node.sc-calcite-tree-item:hover .calcite-tree-chevron.sc-calcite-tree-item, .sc-calcite-tree-item-h:focus .calcite-tree-node.sc-calcite-tree-item .calcite-tree-chevron.sc-calcite-tree-item, [selected].sc-calcite-tree-item-h .calcite-tree-node.sc-calcite-tree-item:hover .calcite-tree-chevron.sc-calcite-tree-item{fill:var(--calcite-tree-chevron-hover)}/*!\@.calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator*/.calcite-tree-node.sc-calcite-tree-item:hover .calcite-tree-indicator.sc-calcite-tree-item, .sc-calcite-tree-item-h:focus .calcite-tree-node.sc-calcite-tree-item .calcite-tree-indicator.sc-calcite-tree-item, [selected].sc-calcite-tree-item-h .calcite-tree-node.sc-calcite-tree-item:hover .calcite-tree-indicator.sc-calcite-tree-item{fill:var(--calcite-tree-indicator-hover)}/*!\@:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover*/[selected].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item, [selected].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:hover{color:var(--calcite-tree-text-active);font-weight:500}/*!\@:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before*/[selected].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:before, [selected].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}/*!\@:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after*/[selected].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:after, [selected].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:hover:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}/*!\@:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*)*/.sc-calcite-tree-item-h[selected]>.calcite-tree-node .sc-calcite-tree-item-s > *, .sc-calcite-tree-item-h[selected]>.calcite-tree-node:hover .sc-calcite-tree-item-s > *{color:var(--calcite-tree-text-active)}/*!\@:host([has-children][expanded])>.calcite-tree-node*/[has-children][expanded].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item{color:var(--calcite-tree-text-active);font-weight:500}/*!\@:host([has-children][expanded])>.calcite-tree-node:after*/[has-children][expanded].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:after{background:var(--calcite-tree-line-active)}/*!\@:host([has-children][expanded])>.calcite-tree-node:before*/[has-children][expanded].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:before{opacity:1;color:var(--calcite-tree-indicator-active)}/*!\@:host([has-children][expanded])>.calcite-tree-node ::slotted(*)*/.sc-calcite-tree-item-h[has-children][expanded]>.calcite-tree-node .sc-calcite-tree-item-s > *{color:var(--calcite-tree-text-active)}/*!\@:host([has-children][expanded][selected])>.calcite-tree-node:after*/[has-children][expanded][selected].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item:after{background:var(--calcite-tree-line-active);width:var(--calcite-tree-hover-line-width);z-index:2}/*!\@.calcite-tree-chevron*/.calcite-tree-chevron.sc-calcite-tree-item{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}/*!\@:host([dir=rtl]) .calcite-tree-chevron*/[dir=rtl].sc-calcite-tree-item-h .calcite-tree-chevron.sc-calcite-tree-item{-webkit-transform:rotate(180deg);transform:rotate(180deg)}/*!\@:host(:focus) .calcite-tree-chevron,:host(:hover) .calcite-tree-chevron*/.sc-calcite-tree-item-h:focus .calcite-tree-chevron.sc-calcite-tree-item, .sc-calcite-tree-item-h:hover .calcite-tree-chevron.sc-calcite-tree-item{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:.75}/*!\@:host([expanded])>.calcite-tree-node>.calcite-tree-chevron*/[expanded].sc-calcite-tree-item-h > .calcite-tree-node.sc-calcite-tree-item > .calcite-tree-chevron.sc-calcite-tree-item{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-blue);stroke-width:.75;stroke:var(--calcite-ui-blue)}');

exports.hydrateApp = hydrateApp;


    hydrateApp(window, opts, results, afterHydrate, resolve);
  }

  hydrateAppClosure(win);
}

const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const XLINK_NS = 'http://www.w3.org/1999/xlink';

class MockAttributeMap {
    constructor(caseInsensitive = false) {
        this.caseInsensitive = caseInsensitive;
        this.items = [];
    }
    get length() {
        return this.items.length;
    }
    item(index) {
        return this.items[index] || null;
    }
    setNamedItem(attr) {
        attr.namespaceURI = null;
        this.setNamedItemNS(attr);
    }
    setNamedItemNS(attr) {
        if (attr != null && attr.value != null) {
            attr.value = String(attr.value);
        }
        const existingAttr = this.items.find(a => a.name === attr.name && a.namespaceURI === attr.namespaceURI);
        if (existingAttr != null) {
            existingAttr.value = attr.value;
        }
        else {
            this.items.push(attr);
        }
    }
    getNamedItem(attrName) {
        if (this.caseInsensitive) {
            attrName = attrName.toLowerCase();
        }
        return this.getNamedItemNS(null, attrName);
    }
    getNamedItemNS(namespaceURI, attrName) {
        namespaceURI = getNamespaceURI(namespaceURI);
        return this.items.find(attr => attr.name === attrName && getNamespaceURI(attr.namespaceURI) === namespaceURI) || null;
    }
    removeNamedItem(attr) {
        this.removeNamedItemNS(attr);
    }
    removeNamedItemNS(attr) {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i].name === attr.name && this.items[i].namespaceURI === attr.namespaceURI) {
                this.items.splice(i, 1);
                break;
            }
        }
    }
}
function getNamespaceURI(namespaceURI) {
    return namespaceURI === XLINK_NS ? null : namespaceURI;
}
function cloneAttributes(srcAttrs, sortByName = false) {
    const dstAttrs = new MockAttributeMap(srcAttrs.caseInsensitive);
    if (srcAttrs != null) {
        const attrLen = srcAttrs.length;
        if (sortByName && attrLen > 1) {
            const sortedAttrs = [];
            for (let i = 0; i < attrLen; i++) {
                const srcAttr = srcAttrs.item(i);
                const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
                sortedAttrs.push(dstAttr);
            }
            sortedAttrs.sort(sortAttributes).forEach(attr => {
                dstAttrs.setNamedItemNS(attr);
            });
        }
        else {
            for (let i = 0; i < attrLen; i++) {
                const srcAttr = srcAttrs.item(i);
                const dstAttr = new MockAttr(srcAttr.name, srcAttr.value, srcAttr.namespaceURI);
                dstAttrs.setNamedItemNS(dstAttr);
            }
        }
    }
    return dstAttrs;
}
function sortAttributes(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}
class MockAttr {
    constructor(attrName, attrValue, namespaceURI = null) {
        this._name = attrName;
        this._value = String(attrValue);
        this._namespaceURI = namespaceURI;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = String(value);
    }
    get nodeName() {
        return this._name;
    }
    set nodeName(value) {
        this._name = value;
    }
    get nodeValue() {
        return this._value;
    }
    set nodeValue(value) {
        this._value = String(value);
    }
    get namespaceURI() {
        return this._namespaceURI;
    }
    set namespaceURI(namespaceURI) {
        this._namespaceURI = namespaceURI;
    }
}

class MockCustomElementRegistry {
    constructor(win) {
        this.win = win;
    }
    define(tagName, cstr, options) {
        if (tagName.toLowerCase() !== tagName) {
            throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': "${tagName}" is not a valid custom element name`);
        }
        if (this.__registry == null) {
            this.__registry = new Map();
        }
        this.__registry.set(tagName, { cstr, options });
        if (this.__whenDefined != null) {
            const whenDefinedResolveFns = this.__whenDefined.get(tagName);
            if (whenDefinedResolveFns != null) {
                whenDefinedResolveFns.forEach(whenDefinedResolveFn => {
                    whenDefinedResolveFn();
                });
                whenDefinedResolveFns.length = 0;
                this.__whenDefined.delete(tagName);
            }
        }
        const doc = this.win.document;
        if (doc != null) {
            const hosts = doc.querySelectorAll(tagName);
            hosts.forEach(host => {
                if (upgradedElements.has(host) === false) {
                    tempDisableCallbacks.add(doc);
                    const upgradedCmp = createCustomElement(this, doc, tagName);
                    for (let i = 0; i < host.childNodes.length; i++) {
                        const childNode = host.childNodes[i];
                        childNode.remove();
                        upgradedCmp.appendChild(childNode);
                    }
                    tempDisableCallbacks.delete(doc);
                    if (proxyElements.has(host)) {
                        proxyElements.set(host, upgradedCmp);
                    }
                }
                fireConnectedCallback(host);
            });
        }
    }
    get(tagName) {
        if (this.__registry != null) {
            const def = this.__registry.get(tagName.toLowerCase());
            if (def != null) {
                return def.cstr;
            }
        }
        return undefined;
    }
    upgrade(_rootNode) {
        //
    }
    clear() {
        if (this.__registry != null) {
            this.__registry.clear();
        }
        if (this.__whenDefined != null) {
            this.__whenDefined.clear();
        }
    }
    whenDefined(tagName) {
        tagName = tagName.toLowerCase();
        if (this.__registry != null && this.__registry.has(tagName) === true) {
            return Promise.resolve();
        }
        return new Promise(resolve => {
            if (this.__whenDefined == null) {
                this.__whenDefined = new Map();
            }
            let whenDefinedResolveFns = this.__whenDefined.get(tagName);
            if (whenDefinedResolveFns == null) {
                whenDefinedResolveFns = [];
                this.__whenDefined.set(tagName, whenDefinedResolveFns);
            }
            whenDefinedResolveFns.push(resolve);
        });
    }
}
function createCustomElement(customElements, ownerDocument, tagName) {
    const Cstr = customElements.get(tagName);
    if (Cstr != null) {
        const cmp = new Cstr(ownerDocument);
        cmp.nodeName = tagName.toUpperCase();
        upgradedElements.add(cmp);
        return cmp;
    }
    const host = new Proxy({}, {
        get(obj, prop) {
            const elm = proxyElements.get(host);
            if (elm != null) {
                return elm[prop];
            }
            return obj[prop];
        },
        set(obj, prop, val) {
            const elm = proxyElements.get(host);
            if (elm != null) {
                elm[prop] = val;
            }
            else {
                obj[prop] = val;
            }
            return true;
        },
        has(obj, prop) {
            const elm = proxyElements.get(host);
            if (prop in elm) {
                return true;
            }
            if (prop in obj) {
                return true;
            }
            return false;
        }
    });
    const elm = new MockHTMLElement(ownerDocument, tagName);
    proxyElements.set(host, elm);
    return host;
}
const proxyElements = new WeakMap();
const upgradedElements = new WeakSet();
function connectNode(ownerDocument, node) {
    node.ownerDocument = ownerDocument;
    if (node.nodeType === 1 /* ELEMENT_NODE */) {
        if (ownerDocument != null && node.nodeName.includes('-')) {
            const win = ownerDocument.defaultView;
            if (win != null && win.customElements != null) {
                if (typeof node.connectedCallback === 'function' && node.isConnected) {
                    fireConnectedCallback(node);
                }
            }
            const shadowRoot = node.shadowRoot;
            if (shadowRoot != null) {
                shadowRoot.childNodes.forEach(childNode => {
                    connectNode(ownerDocument, childNode);
                });
            }
        }
        node.childNodes.forEach(childNode => {
            connectNode(ownerDocument, childNode);
        });
    }
    else {
        node.childNodes.forEach(childNode => {
            childNode.ownerDocument = ownerDocument;
        });
    }
}
function fireConnectedCallback(node) {
    if (typeof node.connectedCallback === 'function') {
        if (tempDisableCallbacks.has(node.ownerDocument) === false) {
            try {
                node.connectedCallback();
            }
            catch (e) {
                console.error(e);
            }
        }
    }
}
function disconnectNode(node) {
    if (node.nodeType === 1 /* ELEMENT_NODE */) {
        if (node.nodeName.includes('-') === true && typeof node.disconnectedCallback === 'function') {
            if (tempDisableCallbacks.has(node.ownerDocument) === false) {
                try {
                    node.disconnectedCallback();
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        node.childNodes.forEach(disconnectNode);
    }
}
function attributeChanged(node, attrName, oldValue, newValue) {
    attrName = attrName.toLowerCase();
    const observedAttributes = node.constructor.observedAttributes;
    if (Array.isArray(observedAttributes) === true && observedAttributes.some(obs => obs.toLowerCase() === attrName) === true) {
        try {
            node.attributeChangedCallback(attrName, oldValue, newValue);
        }
        catch (e) {
            console.error(e);
        }
    }
}
function checkAttributeChanged(node) {
    return (node.nodeName.includes('-') === true && typeof node.attributeChangedCallback === 'function');
}
const tempDisableCallbacks = new Set();

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var parse_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parse;
var reName = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/, reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, 
//modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
reAttr = /^\s*((?:\\.|[\w\u00b0-\uFFFF-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF-])*)|)|)\s*(i)?\]/;
var actionTypes = {
    undefined: "exists",
    "": "equals",
    "~": "element",
    "^": "start",
    $: "end",
    "*": "any",
    "!": "not",
    "|": "hyphen"
};
var Traversals = {
    ">": "child",
    "<": "parent",
    "~": "sibling",
    "+": "adjacent"
};
var attribSelectors = {
    "#": ["id", "equals"],
    ".": ["class", "element"]
};
//pseudos, whose data-property is parsed as well
var unpackPseudos = new Set(["has", "not", "matches"]);
var stripQuotesFromPseudos = new Set(["contains", "icontains"]);
var quotes = new Set(['"', "'"]);
//unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    var high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace
        ? escaped
        : high < 0
            ? // BMP codepoint
                String.fromCharCode(high + 0x10000)
            : // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isWhitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
function parse(selector, options) {
    var subselects = [];
    selector = parseSelector(subselects, selector + "", options);
    if (selector !== "") {
        throw new Error("Unmatched selector: " + selector);
    }
    return subselects;
}
function parseSelector(subselects, selector, options) {
    var tokens = [], sawWS = false;
    function getName() {
        var match = selector.match(reName);
        if (!match) {
            throw new Error("Expected name, found " + selector);
        }
        var sub = match[0];
        selector = selector.substr(sub.length);
        return unescapeCSS(sub);
    }
    function stripWhitespace(start) {
        while (isWhitespace(selector.charAt(start)))
            start++;
        selector = selector.substr(start);
    }
    function isEscaped(pos) {
        var slashCount = 0;
        while (selector.charAt(--pos) === "\\")
            slashCount++;
        return (slashCount & 1) === 1;
    }
    stripWhitespace(0);
    while (selector !== "") {
        var firstChar = selector.charAt(0);
        if (isWhitespace(firstChar)) {
            sawWS = true;
            stripWhitespace(1);
        }
        else if (firstChar in Traversals) {
            tokens.push({ type: Traversals[firstChar] });
            sawWS = false;
            stripWhitespace(1);
        }
        else if (firstChar === ",") {
            if (tokens.length === 0) {
                throw new Error("Empty sub-selector");
            }
            subselects.push(tokens);
            tokens = [];
            sawWS = false;
            stripWhitespace(1);
        }
        else {
            if (sawWS) {
                if (tokens.length > 0) {
                    tokens.push({ type: "descendant" });
                }
                sawWS = false;
            }
            if (firstChar === "*") {
                selector = selector.substr(1);
                tokens.push({ type: "universal" });
            }
            else if (firstChar in attribSelectors) {
                var _a = attribSelectors[firstChar], name_1 = _a[0], action = _a[1];
                selector = selector.substr(1);
                tokens.push({
                    type: "attribute",
                    name: name_1,
                    action: action,
                    value: getName(),
                    ignoreCase: false
                });
            }
            else if (firstChar === "[") {
                selector = selector.substr(1);
                var data = selector.match(reAttr);
                if (!data) {
                    throw new Error("Malformed attribute selector: " + selector);
                }
                selector = selector.substr(data[0].length);
                var name_2 = unescapeCSS(data[1]);
                if (!options ||
                    ("lowerCaseAttributeNames" in options
                        ? options.lowerCaseAttributeNames
                        : !options.xmlMode)) {
                    name_2 = name_2.toLowerCase();
                }
                tokens.push({
                    type: "attribute",
                    name: name_2,
                    action: actionTypes[data[2]],
                    value: unescapeCSS(data[4] || data[5] || ""),
                    ignoreCase: !!data[6]
                });
            }
            else if (firstChar === ":") {
                if (selector.charAt(1) === ":") {
                    selector = selector.substr(2);
                    tokens.push({
                        type: "pseudo-element",
                        name: getName().toLowerCase()
                    });
                    continue;
                }
                selector = selector.substr(1);
                var name_3 = getName().toLowerCase();
                var data = null;
                if (selector.charAt(0) === "(") {
                    if (unpackPseudos.has(name_3)) {
                        var quot = selector.charAt(1);
                        var quoted = quotes.has(quot);
                        selector = selector.substr(quoted ? 2 : 1);
                        data = [];
                        selector = parseSelector(data, selector, options);
                        if (quoted) {
                            if (selector.charAt(0) !== quot) {
                                throw new Error("Unmatched quotes in :" + name_3);
                            }
                            else {
                                selector = selector.substr(1);
                            }
                        }
                        if (selector.charAt(0) !== ")") {
                            throw new Error("Missing closing parenthesis in :" + name_3 + " (" + selector + ")");
                        }
                        selector = selector.substr(1);
                    }
                    else {
                        var pos = 1, counter = 1;
                        for (; counter > 0 && pos < selector.length; pos++) {
                            if (selector.charAt(pos) === "(" && !isEscaped(pos))
                                counter++;
                            else if (selector.charAt(pos) === ")" &&
                                !isEscaped(pos))
                                counter--;
                        }
                        if (counter) {
                            throw new Error("Parenthesis not matched");
                        }
                        data = selector.substr(1, pos - 2);
                        selector = selector.substr(pos);
                        if (stripQuotesFromPseudos.has(name_3)) {
                            var quot = data.charAt(0);
                            if (quot === data.slice(-1) && quotes.has(quot)) {
                                data = data.slice(1, -1);
                            }
                            data = unescapeCSS(data);
                        }
                    }
                }
                tokens.push({ type: "pseudo", name: name_3, data: data });
            }
            else if (reName.test(selector)) {
                var name_4 = getName();
                if (!options ||
                    ("lowerCaseTags" in options
                        ? options.lowerCaseTags
                        : !options.xmlMode)) {
                    name_4 = name_4.toLowerCase();
                }
                tokens.push({ type: "tag", name: name_4 });
            }
            else {
                if (tokens.length &&
                    tokens[tokens.length - 1].type === "descendant") {
                    tokens.pop();
                }
                addToken(subselects, tokens);
                return selector;
            }
        }
    }
    addToken(subselects, tokens);
    return selector;
}
function addToken(subselects, tokens) {
    if (subselects.length > 0 && tokens.length === 0) {
        throw new Error("Empty sub-selector");
    }
    subselects.push(tokens);
}
});

unwrapExports(parse_1);

var stringify_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes = {
    equals: "",
    element: "~",
    start: "^",
    end: "$",
    any: "*",
    not: "!",
    hyphen: "|"
};
var simpleSelectors = {
    child: " > ",
    parent: " < ",
    sibling: " ~ ",
    adjacent: " + ",
    descendant: " ",
    universal: "*"
};
function stringify(token) {
    return token.map(stringifySubselector).join(", ");
}
exports.default = stringify;
function stringifySubselector(token) {
    return token.map(stringifyToken).join("");
}
function stringifyToken(token) {
    if (token.type in simpleSelectors)
        return simpleSelectors[token.type];
    if (token.type === "tag")
        return escapeName(token.name);
    if (token.type === "pseudo-element")
        return "::" + escapeName(token.name);
    if (token.type === "attribute") {
        if (token.action === "exists")
            return "[" + escapeName(token.name) + "]";
        if (token.name === "id" &&
            token.action === "equals" &&
            !token.ignoreCase)
            return "#" + escapeName(token.value);
        if (token.name === "class" &&
            token.action === "element" &&
            !token.ignoreCase)
            return "." + escapeName(token.value);
        return ("[" +
            escapeName(token.name) +
            actionTypes[token.action] +
            "='" +
            escapeName(token.value) +
            "'" +
            (token.ignoreCase ? "i" : "") +
            "]");
    }
    if (token.type === "pseudo") {
        if (token.data === null)
            return ":" + escapeName(token.name);
        if (typeof token.data === "string") {
            return ":" + escapeName(token.name) + "(" + token.data + ")";
        }
        return ":" + escapeName(token.name) + "(" + stringify(token.data) + ")";
    }
    throw new Error("Unknown type");
}
function escapeName(str) {
    //TODO
    return str;
}
});

unwrapExports(stringify_1);

var lib = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(parse_1);
var parse_1$1 = parse_1;
exports.parse = parse_1$1.default;

exports.stringify = stringify_1.default;
});

unwrapExports(lib);
var lib_1 = lib.parse;
var lib_2 = lib.stringify;

function closest(selector, elm) {
    while (elm != null) {
        if (elm.matches(selector)) {
            return elm;
        }
        elm = elm.parentNode;
    }
    return null;
}
function matches(selector, elm) {
    const selectors = lib_1(selector);
    return matchesSelectors(selectors, elm);
}
function selectOne(selector, elm) {
    const selectors = lib_1(selector);
    return selectOneRecursion(selectors, elm);
}
function selectOneRecursion(selectors, elm) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        if (matchesSelectors(selectors, children[i]) === true) {
            return children[i];
        }
        const childMatch = selectOneRecursion(selectors, children[i]);
        if (childMatch != null) {
            return childMatch;
        }
    }
    return null;
}
function selectAll(selector, elm) {
    const selectors = lib_1(selector);
    const foundElms = [];
    selectAllRecursion(selectors, elm, foundElms);
    return foundElms;
}
function selectAllRecursion(selectors, elm, found) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        if (matchesSelectors(selectors, children[i]) === true) {
            found.push(children[i]);
        }
        selectAllRecursion(selectors, children[i], found);
    }
}
function matchesSelectors(selectors, elm) {
    for (let i = 0, ii = selectors.length; i < ii; i++) {
        if (matchesEverySelector(selectors[i], elm) === true) {
            return true;
        }
    }
    return false;
}
function matchesEverySelector(selectorData, elm) {
    for (let i = 0, ii = selectorData.length; i < ii; i++) {
        if (matchesSelector(selectorData[i], elm) === false) {
            return false;
        }
    }
    return true;
}
function matchesSelector(selectorData, elm) {
    switch (selectorData.type) {
        case 'tag':
            return elm.nodeName.toLowerCase() === selectorData.name.toLowerCase();
        case 'attribute':
            if (selectorData.name === 'class') {
                return elm.classList.contains(selectorData.value);
            }
            if (selectorData.action === 'exists') {
                return elm.hasAttribute(selectorData.name);
            }
            if (selectorData.action === 'equals') {
                return elm.getAttribute(selectorData.name) === selectorData.value;
            }
            return false;
        case 'child':
            // TODO
            return true;
    }
    return false;
}

class CSSStyleDeclaration {
    constructor() {
        this._styles = new Map();
    }
    setProperty(prop, value) {
        prop = jsCaseToCssCase(prop);
        if (value == null || value === '') {
            this._styles.delete(prop);
        }
        else {
            this._styles.set(prop, String(value));
        }
    }
    getPropertyValue(prop) {
        prop = jsCaseToCssCase(prop);
        return String(this._styles.get(prop) || '');
    }
    removeProperty(prop) {
        prop = jsCaseToCssCase(prop);
        this._styles.delete(prop);
    }
    get length() {
        return this._styles.size;
    }
    get cssText() {
        const cssText = [];
        this._styles.forEach((value, prop) => {
            cssText.push(`${prop}: ${value};`);
        });
        return cssText.join(' ').trim();
    }
    set cssText(cssText) {
        if (cssText == null || cssText === '') {
            this._styles.clear();
            return;
        }
        cssText.split(';').forEach(rule => {
            rule = rule.trim();
            if (rule.length > 0) {
                const splt = rule.split(':');
                if (splt.length > 1) {
                    const prop = splt[0].trim();
                    const value = splt[1].trim();
                    if (prop !== '' && value !== '') {
                        this._styles.set(jsCaseToCssCase(prop), value);
                    }
                }
            }
        });
    }
}
function createCSSStyleDeclaration() {
    return new Proxy(new CSSStyleDeclaration(), cssProxyHandler);
}
const cssProxyHandler = {
    get(cssStyle, prop) {
        if (prop in cssStyle) {
            return cssStyle[prop];
        }
        prop = cssCaseToJsCase(prop);
        return cssStyle.getPropertyValue(prop);
    },
    set(cssStyle, prop, value) {
        if (prop in cssStyle) {
            cssStyle[prop] = value;
        }
        else {
            cssStyle.setProperty(prop, value);
        }
        return true;
    }
};
function cssCaseToJsCase(str) {
    // font-size to fontSize
    if (str.length > 1 && str.includes('-') === true) {
        str = str.toLowerCase().split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join('');
        str = str.substr(0, 1).toLowerCase() + str.substr(1);
    }
    return str;
}
function jsCaseToCssCase(str) {
    // fontSize to font-size
    if (str.length > 1 && (str.includes('-') === false && /[A-Z]/.test(str) === true)) {
        str = str.replace(/([A-Z])/g, g => ' ' + g[0]).trim().replace(/ /g, '-').toLowerCase();
    }
    return str;
}

function dataset(elm) {
    const ds = {};
    const attributes = elm.attributes;
    const attrLen = attributes.length;
    for (let i = 0; i < attrLen; i++) {
        const attr = attributes.item(i);
        const nodeName = attr.nodeName;
        if (nodeName.startsWith('data-')) {
            ds[dashToPascalCase(nodeName)] = attr.nodeValue;
        }
    }
    return new Proxy(ds, {
        get(_obj, camelCaseProp) {
            return ds[camelCaseProp];
        },
        set(_obj, camelCaseProp, value) {
            const dataAttr = toDataAttribute(camelCaseProp);
            elm.setAttribute(dataAttr, value);
            return true;
        }
    });
}
function toDataAttribute(str) {
    return 'data-' + String(str).replace(/([A-Z0-9])/g, g => ' ' + g[0]).trim().replace(/ /g, '-').toLowerCase();
}
function dashToPascalCase(str) {
    str = String(str).substr(5);
    return str.split('-').map((segment, index) => {
        if (index === 0) {
            return segment.charAt(0).toLowerCase() + segment.slice(1);
        }
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    }).join('');
}

class MockClassList {
    constructor(elm) {
        this.elm = elm;
    }
    add(...classNames) {
        const clsNames = getItems(this.elm);
        let updated = false;
        classNames.forEach(className => {
            className = String(className);
            validateClass(className);
            if (clsNames.includes(className) === false) {
                clsNames.push(className);
                updated = true;
            }
        });
        if (updated) {
            this.elm.setAttributeNS(null, 'class', clsNames.join(' '));
        }
    }
    remove(...classNames) {
        const clsNames = getItems(this.elm);
        let updated = false;
        classNames.forEach(className => {
            className = String(className);
            validateClass(className);
            const index = clsNames.indexOf(className);
            if (index > -1) {
                clsNames.splice(index, 1);
                updated = true;
            }
        });
        if (updated) {
            this.elm.setAttributeNS(null, 'class', clsNames.filter(c => c.length > 0).join(' '));
        }
    }
    contains(className) {
        className = String(className);
        return getItems(this.elm).includes(className);
    }
    toggle(className) {
        className = String(className);
        if (this.contains(className) === true) {
            this.remove(className);
        }
        else {
            this.add(className);
        }
    }
    get length() {
        return getItems(this.elm).length;
    }
    item(index) {
        return getItems(this.elm)[index];
    }
    toString() {
        return getItems(this.elm).join(' ');
    }
}
function validateClass(className) {
    if (className === '') {
        throw new Error('The token provided must not be empty.');
    }
    if (/\s/.test(className)) {
        throw new Error(`The token provided ('${className}') contains HTML space characters, which are not valid in tokens.`);
    }
}
function getItems(elm) {
    const className = elm.getAttribute('class');
    if (typeof className === 'string' && className.length > 0) {
        return className.trim().split(' ').filter(c => c.length > 0);
    }
    return [];
}

class MockEvent {
    constructor(type, eventInitDict) {
        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.composed = false;
        this.currentTarget = null;
        this.defaultPrevented = false;
        this.srcElement = null;
        this.target = null;
        if (typeof type !== 'string') {
            throw new Error(`Event type required`);
        }
        this.type = type;
        this.timeStamp = Date.now();
        if (eventInitDict != null) {
            Object.assign(this, eventInitDict);
        }
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    stopPropagation() {
        this.cancelBubble = true;
    }
    stopImmediatePropagation() {
        this.cancelBubble = true;
    }
}
class MockCustomEvent extends MockEvent {
    constructor(type, customEventInitDic) {
        super(type);
        this.detail = null;
        if (customEventInitDic != null) {
            Object.assign(this, customEventInitDic);
        }
    }
}
class MockKeyboardEvent extends MockEvent {
    constructor(type, keyboardEventInitDic) {
        super(type);
        this.code = '';
        this.key = '';
        this.altKey = false;
        this.ctrlKey = false;
        this.metaKey = false;
        this.shiftKey = false;
        this.location = 0;
        this.repeat = false;
        if (keyboardEventInitDic != null) {
            Object.assign(this, keyboardEventInitDic);
        }
    }
}
class MockMouseEvent extends MockEvent {
    constructor(type, mouseEventInitDic) {
        super(type);
        this.screenX = 0;
        this.screenY = 0;
        this.clientX = 0;
        this.clientY = 0;
        this.ctrlKey = false;
        this.shiftKey = false;
        this.altKey = false;
        this.metaKey = false;
        this.button = 0;
        this.buttons = 0;
        this.relatedTarget = null;
        if (mouseEventInitDic != null) {
            Object.assign(this, mouseEventInitDic);
        }
    }
}
class MockEventListener {
    constructor(type, handler) {
        this.type = type;
        this.handler = handler;
    }
}
function addEventListener(elm, type, handler) {
    const target = elm;
    if (target.__listeners == null) {
        target.__listeners = [];
    }
    target.__listeners.push(new MockEventListener(type, handler));
}
function removeEventListener(elm, type, handler) {
    const target = elm;
    if (target != null && Array.isArray(target.__listeners) === true) {
        const elmListener = target.__listeners.find(e => e.type === type && e.handler === handler);
        if (elmListener != null) {
            const index = target.__listeners.indexOf(elmListener);
            target.__listeners.splice(index, 1);
        }
    }
}
function resetEventListeners(target) {
    if (target != null && target.__listeners != null) {
        target.__listeners = null;
    }
}
function triggerEventListener(elm, ev) {
    if (elm == null || ev.cancelBubble === true) {
        return;
    }
    const target = elm;
    ev.currentTarget = elm;
    if (Array.isArray(target.__listeners) === true) {
        const listeners = target.__listeners.filter(e => e.type === ev.type);
        listeners.forEach(listener => {
            try {
                listener.handler.call(target, ev);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    if (ev.bubbles === false) {
        return;
    }
    if (elm.nodeName === "#document" /* DOCUMENT_NODE */) {
        triggerEventListener(elm.defaultView, ev);
    }
    else {
        triggerEventListener(elm.parentElement, ev);
    }
}
function dispatchEvent(currentTarget, ev) {
    ev.target = currentTarget;
    triggerEventListener(currentTarget, ev);
    return true;
}

function serializeNodeToHtml(elm, opts = {}) {
    const output = {
        currentLineWidth: 0,
        indent: 0,
        isWithinBody: false,
        text: [],
    };
    if (opts.prettyHtml) {
        if (typeof opts.indentSpaces !== 'number') {
            opts.indentSpaces = 2;
        }
        if (typeof opts.newLines !== 'boolean') {
            opts.newLines = true;
        }
        opts.approximateLineWidth = -1;
    }
    else {
        opts.prettyHtml = false;
        if (typeof opts.newLines !== 'boolean') {
            opts.newLines = false;
        }
        if (typeof opts.indentSpaces !== 'number') {
            opts.indentSpaces = 0;
        }
    }
    if (typeof opts.approximateLineWidth !== 'number') {
        opts.approximateLineWidth = -1;
    }
    if (typeof opts.removeEmptyAttributes !== 'boolean') {
        opts.removeEmptyAttributes = true;
    }
    if (typeof opts.removeAttributeQuotes !== 'boolean') {
        opts.removeAttributeQuotes = false;
    }
    if (typeof opts.removeBooleanAttributeQuotes !== 'boolean') {
        opts.removeBooleanAttributeQuotes = false;
    }
    if (typeof opts.removeHtmlComments !== 'boolean') {
        opts.removeHtmlComments = false;
    }
    if (typeof opts.serializeShadowRoot !== 'boolean') {
        opts.serializeShadowRoot = false;
    }
    if (opts.outerHtml) {
        serializeToHtml(elm, opts, output, false);
    }
    else {
        for (let i = 0, ii = elm.childNodes.length; i < ii; i++) {
            serializeToHtml(elm.childNodes[i], opts, output, false);
        }
    }
    if (output.text[0] === '\n') {
        output.text.shift();
    }
    if (output.text[output.text.length - 1] === '\n') {
        output.text.pop();
    }
    return output.text.join('');
}
function serializeToHtml(node, opts, output, isShadowRoot) {
    if (node.nodeType === 1 /* ELEMENT_NODE */ || isShadowRoot) {
        const tagName = isShadowRoot ? 'mock:shadow-root' : getTagName(node);
        if (tagName === 'body') {
            output.isWithinBody = true;
        }
        const ignoreTag = (opts.excludeTags != null && opts.excludeTags.includes(tagName));
        if (ignoreTag === false) {
            if (opts.newLines) {
                output.text.push('\n');
                output.currentLineWidth = 0;
            }
            if (opts.indentSpaces > 0) {
                for (let i = 0; i < output.indent; i++) {
                    output.text.push(' ');
                }
                output.currentLineWidth += output.indent;
            }
            output.text.push('<' + tagName);
            output.currentLineWidth += (tagName.length + 1);
            const attrsLength = node.attributes.length;
            const attributes = (opts.prettyHtml && attrsLength > 1) ?
                cloneAttributes(node.attributes, true) :
                node.attributes;
            for (let i = 0; i < attrsLength; i++) {
                const attr = attributes.item(i);
                const attrName = attr.name;
                if (attrName === 'style') {
                    continue;
                }
                let attrValue = attr.value;
                if (opts.removeEmptyAttributes && attrValue === '' && REMOVE_EMPTY_ATTR.has(attrName)) {
                    continue;
                }
                const attrNamespaceURI = attr.namespaceURI;
                if (attrNamespaceURI == null) {
                    output.currentLineWidth += (attrName.length + 1);
                    if (opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
                        output.text.push('\n' + attrName);
                        output.currentLineWidth = 0;
                    }
                    else {
                        output.text.push(' ' + attrName);
                    }
                }
                else if (attrNamespaceURI === 'http://www.w3.org/XML/1998/namespace') {
                    output.text.push(' xml:' + attrName);
                    output.currentLineWidth += (attrName.length + 5);
                }
                else if (attrNamespaceURI === 'http://www.w3.org/2000/xmlns/') {
                    if (attrName !== 'xmlns') {
                        output.text.push(' xmlns:' + attrName);
                        output.currentLineWidth += (attrName.length + 7);
                    }
                    else {
                        output.text.push(' ' + attrName);
                        output.currentLineWidth += (attrName.length + 1);
                    }
                }
                else if (attrNamespaceURI === XLINK_NS) {
                    output.text.push(' xlink:' + attrName);
                    output.currentLineWidth += (attrName.length + 7);
                }
                else {
                    output.text.push(' ' + attrNamespaceURI + ':' + attrName);
                    output.currentLineWidth += (attrNamespaceURI.length + attrName.length + 2);
                }
                if (opts.prettyHtml && attrName === 'class') {
                    attrValue = attr.value = attrValue.split(' ').filter(t => t !== '').sort().join(' ').trim();
                }
                if (attrValue === '') {
                    if (opts.removeBooleanAttributeQuotes && BOOLEAN_ATTR.has(attrName)) {
                        continue;
                    }
                    if (opts.removeEmptyAttributes && attrName.startsWith('data-')) {
                        continue;
                    }
                }
                if (opts.removeAttributeQuotes && CAN_REMOVE_ATTR_QUOTES.test(attrValue)) {
                    output.text.push('=' + escapeString(attrValue, true));
                    output.currentLineWidth += (attrValue.length + 1);
                }
                else {
                    output.text.push('="' + escapeString(attrValue, true) + '"');
                    output.currentLineWidth += (attrValue.length + 3);
                }
            }
            if (node.hasAttribute('style')) {
                const cssText = node.style.cssText;
                if (opts.approximateLineWidth > 0 && (output.currentLineWidth + cssText.length + 10) > opts.approximateLineWidth) {
                    output.text.push(`\nstyle="${cssText}">`);
                    output.currentLineWidth = 0;
                }
                else {
                    output.text.push(` style="${cssText}">`);
                    output.currentLineWidth += (cssText.length + 10);
                }
            }
            else {
                output.text.push('>');
                output.currentLineWidth += 1;
            }
        }
        if (EMPTY_ELEMENTS.has(tagName) === false) {
            if (opts.serializeShadowRoot && node.shadowRoot != null) {
                output.indent = output.indent + opts.indentSpaces;
                serializeToHtml(node.shadowRoot, opts, output, true);
                output.indent = output.indent - opts.indentSpaces;
                if (opts.newLines && (node.childNodes.length === 0 || (node.childNodes.length === 1 && node.childNodes[0].nodeType === 3 /* TEXT_NODE */ && node.childNodes[0].nodeValue.trim() === ''))) {
                    output.text.push('\n');
                    output.currentLineWidth = 0;
                    for (let i = 0; i < output.indent; i++) {
                        output.text.push(' ');
                    }
                    output.currentLineWidth += output.indent;
                }
            }
            if (opts.excludeTagContent == null || opts.excludeTagContent.includes(tagName) === false) {
                const childNodes = tagName === 'template' ? node.content.childNodes : (node.childNodes);
                const childNodeLength = childNodes.length;
                if (childNodeLength > 0) {
                    if (childNodeLength === 1 && childNodes[0].nodeType === 3 /* TEXT_NODE */ && (typeof childNodes[0].nodeValue !== 'string' || childNodes[0].nodeValue.trim() === '')) ;
                    else {
                        if (opts.indentSpaces > 0 && ignoreTag === false) {
                            output.indent = output.indent + opts.indentSpaces;
                        }
                        for (let i = 0; i < childNodeLength; i++) {
                            serializeToHtml(childNodes[i], opts, output, false);
                        }
                        if (ignoreTag === false) {
                            if (opts.newLines) {
                                output.text.push('\n');
                                output.currentLineWidth = 0;
                            }
                            if (opts.indentSpaces > 0) {
                                output.indent = output.indent - opts.indentSpaces;
                                for (let i = 0; i < output.indent; i++) {
                                    output.text.push(' ');
                                }
                                output.currentLineWidth += output.indent;
                            }
                        }
                    }
                }
                if (ignoreTag === false) {
                    output.text.push('</' + tagName + '>');
                    output.currentLineWidth += (tagName.length + 3);
                }
            }
        }
        if (opts.approximateLineWidth > 0 && STRUCTURE_ELEMENTS.has(tagName)) {
            output.text.push('\n');
            output.currentLineWidth = 0;
        }
        if (tagName === 'body') {
            output.isWithinBody = false;
        }
    }
    else if (node.nodeType === 3 /* TEXT_NODE */) {
        let textContent = node.nodeValue;
        if (typeof textContent === 'string') {
            const trimmedTextContent = textContent.trim();
            if (trimmedTextContent === '') {
                // this text node is whitespace only
                if (isWithinWhitespaceSensitive(node)) {
                    // whitespace matters within this element
                    // just add the exact text we were given
                    output.text.push(textContent);
                    output.currentLineWidth += textContent.length;
                }
                else if (opts.approximateLineWidth > 0 && !output.isWithinBody) ;
                else if (!opts.prettyHtml) {
                    // this text node is only whitespace, and it's not
                    // within a whitespace sensitive element like <pre> or <code>
                    // so replace the entire white space with a single new line
                    output.currentLineWidth += 1;
                    if (opts.approximateLineWidth > 0 && output.currentLineWidth > opts.approximateLineWidth) {
                        // good enough for a new line
                        // for perf these are all just estimates
                        // we don't care to ensure exact line lengths
                        output.text.push('\n');
                        output.currentLineWidth = 0;
                    }
                    else {
                        // let's keep it all on the same line yet
                        output.text.push(' ');
                    }
                }
            }
            else {
                // this text node has text content
                if (opts.newLines) {
                    output.text.push('\n');
                    output.currentLineWidth = 0;
                }
                if (opts.indentSpaces > 0) {
                    for (let i = 0; i < output.indent; i++) {
                        output.text.push(' ');
                    }
                    output.currentLineWidth += output.indent;
                }
                let textContentLength = textContent.length;
                if (textContentLength > 0) {
                    // this text node has text content
                    const parentTagName = (node.parentNode != null && node.parentNode.nodeType === 1 /* ELEMENT_NODE */ ? node.parentNode.nodeName : null);
                    if (NON_ESCAPABLE_CONTENT.has(parentTagName)) {
                        // this text node cannot have its content escaped since it's going
                        // into an element like <style> or <script>
                        if (isWithinWhitespaceSensitive(node)) {
                            output.text.push(textContent);
                        }
                        else {
                            output.text.push(trimmedTextContent);
                            textContentLength = trimmedTextContent.length;
                        }
                        output.currentLineWidth += textContentLength;
                    }
                    else {
                        // this text node is going into a normal element and html can be escaped
                        if (opts.prettyHtml) {
                            // pretty print the text node
                            output.text.push(escapeString(textContent.replace(/\s\s+/g, ' ').trim(), false));
                            output.currentLineWidth += textContentLength;
                        }
                        else {
                            // not pretty printing the text node
                            if (isWithinWhitespaceSensitive(node)) {
                                output.currentLineWidth += textContentLength;
                            }
                            else {
                                // this element is not a whitespace sensitive one, like <pre> or <code> so
                                // any whitespace at the start and end can be cleaned up to just be one space
                                if (/\s/.test(textContent.charAt(0))) {
                                    textContent = ' ' + textContent.trimLeft();
                                }
                                textContentLength = textContent.length;
                                if (textContentLength > 1) {
                                    if (/\s/.test(textContent.charAt(textContentLength - 1))) {
                                        if (opts.approximateLineWidth > 0 && (output.currentLineWidth + textContentLength) > opts.approximateLineWidth) {
                                            textContent = textContent.trimRight() + '\n';
                                            output.currentLineWidth = 0;
                                        }
                                        else {
                                            textContent = textContent.trimRight() + ' ';
                                        }
                                    }
                                }
                                output.currentLineWidth += textContentLength;
                            }
                            output.text.push(escapeString(textContent, false));
                        }
                    }
                }
            }
        }
    }
    else if (node.nodeType === 8 /* COMMENT_NODE */) {
        const nodeValue = node.nodeValue;
        if (opts.removeHtmlComments) {
            const isHydrateAnnotation = nodeValue.startsWith(CONTENT_REF_ID + '.') || nodeValue.startsWith(ORG_LOCATION_ID + '.') || nodeValue.startsWith(SLOT_NODE_ID + '.') || nodeValue.startsWith(TEXT_NODE_ID + '.');
            if (!isHydrateAnnotation) {
                return;
            }
        }
        if (opts.newLines) {
            output.text.push('\n');
            output.currentLineWidth = 0;
        }
        if (opts.indentSpaces > 0) {
            for (let i = 0; i < output.indent; i++) {
                output.text.push(' ');
            }
            output.currentLineWidth += output.indent;
        }
        output.text.push('<!--' + nodeValue + '-->');
        output.currentLineWidth += (nodeValue.length + 7);
    }
    else if (node.nodeType === 10 /* DOCUMENT_TYPE_NODE */) {
        output.text.push('<!doctype html>');
    }
}
const AMP_REGEX = /&/g;
const NBSP_REGEX = /\u00a0/g;
const DOUBLE_QUOTE_REGEX = /"/g;
const LT_REGEX = /</g;
const GT_REGEX = />/g;
const CAN_REMOVE_ATTR_QUOTES = /^[^ \t\n\f\r"'`=<>\/\\-]+$/;
function getTagName(element) {
    if (element.namespaceURI === 'http://www.w3.org/1999/xhtml') {
        return element.nodeName.toLowerCase();
    }
    else {
        return element.nodeName;
    }
}
function escapeString(str, attrMode) {
    str = str.replace(AMP_REGEX, '&amp;').replace(NBSP_REGEX, '&nbsp;');
    if (attrMode) {
        return str.replace(DOUBLE_QUOTE_REGEX, '&quot;');
    }
    return str.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;');
}
function isWithinWhitespaceSensitive(node) {
    while (node != null) {
        if (WHITESPACE_SENSITIVE.has(node.nodeName)) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
/*@__PURE__*/ const NON_ESCAPABLE_CONTENT = new Set(['STYLE', 'SCRIPT', 'IFRAME', 'NOSCRIPT', 'XMP', 'NOEMBED', 'NOFRAMES', 'PLAINTEXT']);
/*@__PURE__*/ const WHITESPACE_SENSITIVE = new Set(['CODE', 'OUTPUT', 'PLAINTEXT', 'PRE', 'TEMPLATE', 'TEXTAREA']);
/*@__PURE__*/ const EMPTY_ELEMENTS = new Set(['area', 'base', 'basefont', 'bgsound', 'br', 'col', 'embed', 'frame', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'trace', 'wbr']);
/*@__PURE__*/ const REMOVE_EMPTY_ATTR = new Set(['class', 'dir', 'id', 'lang', 'name', 'title']);
/*@__PURE__*/ const BOOLEAN_ATTR = new Set(['allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'nomodule', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible']);
/*@__PURE__*/ const STRUCTURE_ELEMENTS = new Set(['html', 'body', 'head', 'iframe', 'meta', 'link', 'base', 'title', 'script', 'style']);

const parse5=/*@__PURE__*/function(e){const t=[65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];var n="�",s={EOF:-1,NULL:0,TABULATION:9,CARRIAGE_RETURN:13,LINE_FEED:10,FORM_FEED:12,SPACE:32,EXCLAMATION_MARK:33,QUOTATION_MARK:34,NUMBER_SIGN:35,AMPERSAND:38,APOSTROPHE:39,HYPHEN_MINUS:45,SOLIDUS:47,DIGIT_0:48,DIGIT_9:57,SEMICOLON:59,LESS_THAN_SIGN:60,EQUALS_SIGN:61,GREATER_THAN_SIGN:62,QUESTION_MARK:63,LATIN_CAPITAL_A:65,LATIN_CAPITAL_F:70,LATIN_CAPITAL_X:88,LATIN_CAPITAL_Z:90,RIGHT_SQUARE_BRACKET:93,GRAVE_ACCENT:96,LATIN_SMALL_A:97,LATIN_SMALL_F:102,LATIN_SMALL_X:120,LATIN_SMALL_Z:122,REPLACEMENT_CHARACTER:65533},r={DASH_DASH_STRING:[45,45],DOCTYPE_STRING:[68,79,67,84,89,80,69],CDATA_START_STRING:[91,67,68,65,84,65,91],SCRIPT_STRING:[115,99,114,105,112,116],PUBLIC_STRING:[80,85,66,76,73,67],SYSTEM_STRING:[83,89,83,84,69,77]},i=function(e){return e>=55296&&e<=57343},T=function(e){return e>=56320&&e<=57343},o=function(e,t){return 1024*(e-55296)+9216+t},E=function(e){return 32!==e&&10!==e&&13!==e&&9!==e&&12!==e&&e>=1&&e<=31||e>=127&&e<=159},a=function(e){return e>=64976&&e<=65007||t.indexOf(e)>-1},_="control-character-in-input-stream",h="noncharacter-in-input-stream",A="surrogate-in-input-stream",c="non-void-html-element-start-tag-with-trailing-solidus",l="end-tag-with-attributes",m="end-tag-with-trailing-solidus",N="unexpected-solidus-in-tag",p="unexpected-null-character",u="unexpected-question-mark-instead-of-tag-name",O="invalid-first-character-of-tag-name",S="unexpected-equals-sign-before-attribute-name",C="missing-end-tag-name",d="unexpected-character-in-attribute-name",R="unknown-named-character-reference",I="missing-semicolon-after-character-reference",f="unexpected-character-after-doctype-system-identifier",M="unexpected-character-in-unquoted-attribute-value",L="eof-before-tag-name",D="eof-in-tag",g="missing-attribute-value",P="missing-whitespace-between-attributes",k="missing-whitespace-after-doctype-public-keyword",H="missing-whitespace-between-doctype-public-and-system-identifiers",U="missing-whitespace-after-doctype-system-keyword",F="missing-quote-before-doctype-public-identifier",B="missing-quote-before-doctype-system-identifier",G="missing-doctype-public-identifier",K="missing-doctype-system-identifier",b="abrupt-doctype-public-identifier",Y="abrupt-doctype-system-identifier",x="cdata-in-html-content",v="incorrectly-opened-comment",y="eof-in-script-html-comment-like-text",w="eof-in-doctype",Q="nested-comment",X="abrupt-closing-of-empty-comment",W="eof-in-comment",V="incorrectly-closed-comment",j="eof-in-cdata",z="absence-of-digits-in-numeric-character-reference",q="null-character-reference",J="surrogate-character-reference",Z="character-reference-outside-unicode-range",$="control-character-reference",ee="noncharacter-character-reference",te="missing-whitespace-before-doctype-name",ne="missing-doctype-name",se="invalid-character-sequence-after-doctype-name",re="duplicate-attribute",ie="non-conforming-doctype",Te="missing-doctype",oe="misplaced-doctype",Ee="end-tag-without-matching-open-element",ae="closing-of-element-with-open-child-elements",_e="disallowed-content-in-noscript-in-head",he="open-elements-left-after-eof",Ae="abandoned-head-element-child",ce="misplaced-start-tag-for-head-element",le="nested-noscript-in-head",me="eof-in-element-that-can-contain-only-text";const Ne=s;var pe=class{constructor(){this.html=null,this.pos=-1,this.lastGapPos=-1,this.lastCharPos=-1,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=65536;}_err(){}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos;}_processSurrogate(e){if(this.pos!==this.lastCharPos){const t=this.html.charCodeAt(this.pos+1);if(T(t))return this.pos++,this._addGap(),o(e,t)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,Ne.EOF;return this._err(A),e}dropParsedChunk(){this.pos>this.bufferWaterline&&(this.lastCharPos-=this.pos,this.html=this.html.substring(this.pos),this.pos=0,this.lastGapPos=-1,this.gapStack=[]);}write(e,t){this.html?this.html+=e:this.html=e,this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1,this.lastChunkWritten=t;}insertHtmlAtCurrentPos(e){this.html=this.html.substring(0,this.pos+1)+e+this.html.substring(this.pos+1,this.html.length),this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1;}advance(){if(this.pos++,this.pos>this.lastCharPos)return this.endOfChunkHit=!this.lastChunkWritten,Ne.EOF;let e=this.html.charCodeAt(this.pos);if(this.skipNextNewLine&&e===Ne.LINE_FEED)return this.skipNextNewLine=!1,this._addGap(),this.advance();if(e===Ne.CARRIAGE_RETURN)return this.skipNextNewLine=!0,Ne.LINE_FEED;return this.skipNextNewLine=!1,i(e)&&(e=this._processSurrogate(e)),e>31&&e<127||e===Ne.LINE_FEED||e===Ne.CARRIAGE_RETURN||e>159&&e<64976||this._checkForProblematicCharacters(e),e}_checkForProblematicCharacters(e){E(e)?this._err(_):a(e)&&this._err(h);}retreat(){this.pos===this.lastGapPos&&(this.lastGapPos=this.gapStack.pop(),this.pos--),this.pos--;}},ue=new Uint16Array([4,52,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,106,303,412,810,1432,1701,1796,1987,2114,2360,2420,2484,3170,3251,4140,4393,4575,4610,5106,5512,5728,6117,6274,6315,6345,6427,6516,7002,7910,8733,9323,9870,10170,10631,10893,11318,11386,11467,12773,13092,14474,14922,15448,15542,16419,17666,18166,18611,19004,19095,19298,19397,4,16,69,77,97,98,99,102,103,108,109,110,111,112,114,115,116,117,140,150,158,169,176,194,199,210,216,222,226,242,256,266,283,294,108,105,103,5,198,1,59,148,1,198,80,5,38,1,59,156,1,38,99,117,116,101,5,193,1,59,167,1,193,114,101,118,101,59,1,258,4,2,105,121,182,191,114,99,5,194,1,59,189,1,194,59,1,1040,114,59,3,55349,56580,114,97,118,101,5,192,1,59,208,1,192,112,104,97,59,1,913,97,99,114,59,1,256,100,59,1,10835,4,2,103,112,232,237,111,110,59,1,260,102,59,3,55349,56632,112,108,121,70,117,110,99,116,105,111,110,59,1,8289,105,110,103,5,197,1,59,264,1,197,4,2,99,115,272,277,114,59,3,55349,56476,105,103,110,59,1,8788,105,108,100,101,5,195,1,59,292,1,195,109,108,5,196,1,59,301,1,196,4,8,97,99,101,102,111,114,115,117,321,350,354,383,388,394,400,405,4,2,99,114,327,336,107,115,108,97,115,104,59,1,8726,4,2,118,119,342,345,59,1,10983,101,100,59,1,8966,121,59,1,1041,4,3,99,114,116,362,369,379,97,117,115,101,59,1,8757,110,111,117,108,108,105,115,59,1,8492,97,59,1,914,114,59,3,55349,56581,112,102,59,3,55349,56633,101,118,101,59,1,728,99,114,59,1,8492,109,112,101,113,59,1,8782,4,14,72,79,97,99,100,101,102,104,105,108,111,114,115,117,442,447,456,504,542,547,569,573,577,616,678,784,790,796,99,121,59,1,1063,80,89,5,169,1,59,454,1,169,4,3,99,112,121,464,470,497,117,116,101,59,1,262,4,2,59,105,476,478,1,8914,116,97,108,68,105,102,102,101,114,101,110,116,105,97,108,68,59,1,8517,108,101,121,115,59,1,8493,4,4,97,101,105,111,514,520,530,535,114,111,110,59,1,268,100,105,108,5,199,1,59,528,1,199,114,99,59,1,264,110,105,110,116,59,1,8752,111,116,59,1,266,4,2,100,110,553,560,105,108,108,97,59,1,184,116,101,114,68,111,116,59,1,183,114,59,1,8493,105,59,1,935,114,99,108,101,4,4,68,77,80,84,591,596,603,609,111,116,59,1,8857,105,110,117,115,59,1,8854,108,117,115,59,1,8853,105,109,101,115,59,1,8855,111,4,2,99,115,623,646,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8754,101,67,117,114,108,121,4,2,68,81,658,671,111,117,98,108,101,81,117,111,116,101,59,1,8221,117,111,116,101,59,1,8217,4,4,108,110,112,117,688,701,736,753,111,110,4,2,59,101,696,698,1,8759,59,1,10868,4,3,103,105,116,709,717,722,114,117,101,110,116,59,1,8801,110,116,59,1,8751,111,117,114,73,110,116,101,103,114,97,108,59,1,8750,4,2,102,114,742,745,59,1,8450,111,100,117,99,116,59,1,8720,110,116,101,114,67,108,111,99,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8755,111,115,115,59,1,10799,99,114,59,3,55349,56478,112,4,2,59,67,803,805,1,8915,97,112,59,1,8781,4,11,68,74,83,90,97,99,101,102,105,111,115,834,850,855,860,865,888,903,916,921,1011,1415,4,2,59,111,840,842,1,8517,116,114,97,104,100,59,1,10513,99,121,59,1,1026,99,121,59,1,1029,99,121,59,1,1039,4,3,103,114,115,873,879,883,103,101,114,59,1,8225,114,59,1,8609,104,118,59,1,10980,4,2,97,121,894,900,114,111,110,59,1,270,59,1,1044,108,4,2,59,116,910,912,1,8711,97,59,1,916,114,59,3,55349,56583,4,2,97,102,927,998,4,2,99,109,933,992,114,105,116,105,99,97,108,4,4,65,68,71,84,950,957,978,985,99,117,116,101,59,1,180,111,4,2,116,117,964,967,59,1,729,98,108,101,65,99,117,116,101,59,1,733,114,97,118,101,59,1,96,105,108,100,101,59,1,732,111,110,100,59,1,8900,102,101,114,101,110,116,105,97,108,68,59,1,8518,4,4,112,116,117,119,1021,1026,1048,1249,102,59,3,55349,56635,4,3,59,68,69,1034,1036,1041,1,168,111,116,59,1,8412,113,117,97,108,59,1,8784,98,108,101,4,6,67,68,76,82,85,86,1065,1082,1101,1189,1211,1236,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8751,111,4,2,116,119,1089,1092,59,1,168,110,65,114,114,111,119,59,1,8659,4,2,101,111,1107,1141,102,116,4,3,65,82,84,1117,1124,1136,114,114,111,119,59,1,8656,105,103,104,116,65,114,114,111,119,59,1,8660,101,101,59,1,10980,110,103,4,2,76,82,1149,1177,101,102,116,4,2,65,82,1158,1165,114,114,111,119,59,1,10232,105,103,104,116,65,114,114,111,119,59,1,10234,105,103,104,116,65,114,114,111,119,59,1,10233,105,103,104,116,4,2,65,84,1199,1206,114,114,111,119,59,1,8658,101,101,59,1,8872,112,4,2,65,68,1218,1225,114,114,111,119,59,1,8657,111,119,110,65,114,114,111,119,59,1,8661,101,114,116,105,99,97,108,66,97,114,59,1,8741,110,4,6,65,66,76,82,84,97,1264,1292,1299,1352,1391,1408,114,114,111,119,4,3,59,66,85,1276,1278,1283,1,8595,97,114,59,1,10515,112,65,114,114,111,119,59,1,8693,114,101,118,101,59,1,785,101,102,116,4,3,82,84,86,1310,1323,1334,105,103,104,116,86,101,99,116,111,114,59,1,10576,101,101,86,101,99,116,111,114,59,1,10590,101,99,116,111,114,4,2,59,66,1345,1347,1,8637,97,114,59,1,10582,105,103,104,116,4,2,84,86,1362,1373,101,101,86,101,99,116,111,114,59,1,10591,101,99,116,111,114,4,2,59,66,1384,1386,1,8641,97,114,59,1,10583,101,101,4,2,59,65,1399,1401,1,8868,114,114,111,119,59,1,8615,114,114,111,119,59,1,8659,4,2,99,116,1421,1426,114,59,3,55349,56479,114,111,107,59,1,272,4,16,78,84,97,99,100,102,103,108,109,111,112,113,115,116,117,120,1466,1470,1478,1489,1515,1520,1525,1536,1544,1593,1609,1617,1650,1664,1668,1677,71,59,1,330,72,5,208,1,59,1476,1,208,99,117,116,101,5,201,1,59,1487,1,201,4,3,97,105,121,1497,1503,1512,114,111,110,59,1,282,114,99,5,202,1,59,1510,1,202,59,1,1069,111,116,59,1,278,114,59,3,55349,56584,114,97,118,101,5,200,1,59,1534,1,200,101,109,101,110,116,59,1,8712,4,2,97,112,1550,1555,99,114,59,1,274,116,121,4,2,83,86,1563,1576,109,97,108,108,83,113,117,97,114,101,59,1,9723,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9643,4,2,103,112,1599,1604,111,110,59,1,280,102,59,3,55349,56636,115,105,108,111,110,59,1,917,117,4,2,97,105,1624,1640,108,4,2,59,84,1631,1633,1,10869,105,108,100,101,59,1,8770,108,105,98,114,105,117,109,59,1,8652,4,2,99,105,1656,1660,114,59,1,8496,109,59,1,10867,97,59,1,919,109,108,5,203,1,59,1675,1,203,4,2,105,112,1683,1689,115,116,115,59,1,8707,111,110,101,110,116,105,97,108,69,59,1,8519,4,5,99,102,105,111,115,1713,1717,1722,1762,1791,121,59,1,1060,114,59,3,55349,56585,108,108,101,100,4,2,83,86,1732,1745,109,97,108,108,83,113,117,97,114,101,59,1,9724,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9642,4,3,112,114,117,1770,1775,1781,102,59,3,55349,56637,65,108,108,59,1,8704,114,105,101,114,116,114,102,59,1,8497,99,114,59,1,8497,4,12,74,84,97,98,99,100,102,103,111,114,115,116,1822,1827,1834,1848,1855,1877,1882,1887,1890,1896,1978,1984,99,121,59,1,1027,5,62,1,59,1832,1,62,109,109,97,4,2,59,100,1843,1845,1,915,59,1,988,114,101,118,101,59,1,286,4,3,101,105,121,1863,1869,1874,100,105,108,59,1,290,114,99,59,1,284,59,1,1043,111,116,59,1,288,114,59,3,55349,56586,59,1,8921,112,102,59,3,55349,56638,101,97,116,101,114,4,6,69,70,71,76,83,84,1915,1933,1944,1953,1959,1971,113,117,97,108,4,2,59,76,1925,1927,1,8805,101,115,115,59,1,8923,117,108,108,69,113,117,97,108,59,1,8807,114,101,97,116,101,114,59,1,10914,101,115,115,59,1,8823,108,97,110,116,69,113,117,97,108,59,1,10878,105,108,100,101,59,1,8819,99,114,59,3,55349,56482,59,1,8811,4,8,65,97,99,102,105,111,115,117,2005,2012,2026,2032,2036,2049,2073,2089,82,68,99,121,59,1,1066,4,2,99,116,2018,2023,101,107,59,1,711,59,1,94,105,114,99,59,1,292,114,59,1,8460,108,98,101,114,116,83,112,97,99,101,59,1,8459,4,2,112,114,2055,2059,102,59,1,8461,105,122,111,110,116,97,108,76,105,110,101,59,1,9472,4,2,99,116,2079,2083,114,59,1,8459,114,111,107,59,1,294,109,112,4,2,68,69,2097,2107,111,119,110,72,117,109,112,59,1,8782,113,117,97,108,59,1,8783,4,14,69,74,79,97,99,100,102,103,109,110,111,115,116,117,2144,2149,2155,2160,2171,2189,2194,2198,2209,2245,2307,2329,2334,2341,99,121,59,1,1045,108,105,103,59,1,306,99,121,59,1,1025,99,117,116,101,5,205,1,59,2169,1,205,4,2,105,121,2177,2186,114,99,5,206,1,59,2184,1,206,59,1,1048,111,116,59,1,304,114,59,1,8465,114,97,118,101,5,204,1,59,2207,1,204,4,3,59,97,112,2217,2219,2238,1,8465,4,2,99,103,2225,2229,114,59,1,298,105,110,97,114,121,73,59,1,8520,108,105,101,115,59,1,8658,4,2,116,118,2251,2281,4,2,59,101,2257,2259,1,8748,4,2,103,114,2265,2271,114,97,108,59,1,8747,115,101,99,116,105,111,110,59,1,8898,105,115,105,98,108,101,4,2,67,84,2293,2300,111,109,109,97,59,1,8291,105,109,101,115,59,1,8290,4,3,103,112,116,2315,2320,2325,111,110,59,1,302,102,59,3,55349,56640,97,59,1,921,99,114,59,1,8464,105,108,100,101,59,1,296,4,2,107,109,2347,2352,99,121,59,1,1030,108,5,207,1,59,2358,1,207,4,5,99,102,111,115,117,2372,2386,2391,2397,2414,4,2,105,121,2378,2383,114,99,59,1,308,59,1,1049,114,59,3,55349,56589,112,102,59,3,55349,56641,4,2,99,101,2403,2408,114,59,3,55349,56485,114,99,121,59,1,1032,107,99,121,59,1,1028,4,7,72,74,97,99,102,111,115,2436,2441,2446,2452,2467,2472,2478,99,121,59,1,1061,99,121,59,1,1036,112,112,97,59,1,922,4,2,101,121,2458,2464,100,105,108,59,1,310,59,1,1050,114,59,3,55349,56590,112,102,59,3,55349,56642,99,114,59,3,55349,56486,4,11,74,84,97,99,101,102,108,109,111,115,116,2508,2513,2520,2562,2585,2981,2986,3004,3011,3146,3167,99,121,59,1,1033,5,60,1,59,2518,1,60,4,5,99,109,110,112,114,2532,2538,2544,2548,2558,117,116,101,59,1,313,98,100,97,59,1,923,103,59,1,10218,108,97,99,101,116,114,102,59,1,8466,114,59,1,8606,4,3,97,101,121,2570,2576,2582,114,111,110,59,1,317,100,105,108,59,1,315,59,1,1051,4,2,102,115,2591,2907,116,4,10,65,67,68,70,82,84,85,86,97,114,2614,2663,2672,2728,2735,2760,2820,2870,2888,2895,4,2,110,114,2620,2633,103,108,101,66,114,97,99,107,101,116,59,1,10216,114,111,119,4,3,59,66,82,2644,2646,2651,1,8592,97,114,59,1,8676,105,103,104,116,65,114,114,111,119,59,1,8646,101,105,108,105,110,103,59,1,8968,111,4,2,117,119,2679,2692,98,108,101,66,114,97,99,107,101,116,59,1,10214,110,4,2,84,86,2699,2710,101,101,86,101,99,116,111,114,59,1,10593,101,99,116,111,114,4,2,59,66,2721,2723,1,8643,97,114,59,1,10585,108,111,111,114,59,1,8970,105,103,104,116,4,2,65,86,2745,2752,114,114,111,119,59,1,8596,101,99,116,111,114,59,1,10574,4,2,101,114,2766,2792,101,4,3,59,65,86,2775,2777,2784,1,8867,114,114,111,119,59,1,8612,101,99,116,111,114,59,1,10586,105,97,110,103,108,101,4,3,59,66,69,2806,2808,2813,1,8882,97,114,59,1,10703,113,117,97,108,59,1,8884,112,4,3,68,84,86,2829,2841,2852,111,119,110,86,101,99,116,111,114,59,1,10577,101,101,86,101,99,116,111,114,59,1,10592,101,99,116,111,114,4,2,59,66,2863,2865,1,8639,97,114,59,1,10584,101,99,116,111,114,4,2,59,66,2881,2883,1,8636,97,114,59,1,10578,114,114,111,119,59,1,8656,105,103,104,116,97,114,114,111,119,59,1,8660,115,4,6,69,70,71,76,83,84,2922,2936,2947,2956,2962,2974,113,117,97,108,71,114,101,97,116,101,114,59,1,8922,117,108,108,69,113,117,97,108,59,1,8806,114,101,97,116,101,114,59,1,8822,101,115,115,59,1,10913,108,97,110,116,69,113,117,97,108,59,1,10877,105,108,100,101,59,1,8818,114,59,3,55349,56591,4,2,59,101,2992,2994,1,8920,102,116,97,114,114,111,119,59,1,8666,105,100,111,116,59,1,319,4,3,110,112,119,3019,3110,3115,103,4,4,76,82,108,114,3030,3058,3070,3098,101,102,116,4,2,65,82,3039,3046,114,114,111,119,59,1,10229,105,103,104,116,65,114,114,111,119,59,1,10231,105,103,104,116,65,114,114,111,119,59,1,10230,101,102,116,4,2,97,114,3079,3086,114,114,111,119,59,1,10232,105,103,104,116,97,114,114,111,119,59,1,10234,105,103,104,116,97,114,114,111,119,59,1,10233,102,59,3,55349,56643,101,114,4,2,76,82,3123,3134,101,102,116,65,114,114,111,119,59,1,8601,105,103,104,116,65,114,114,111,119,59,1,8600,4,3,99,104,116,3154,3158,3161,114,59,1,8466,59,1,8624,114,111,107,59,1,321,59,1,8810,4,8,97,99,101,102,105,111,115,117,3188,3192,3196,3222,3227,3237,3243,3248,112,59,1,10501,121,59,1,1052,4,2,100,108,3202,3213,105,117,109,83,112,97,99,101,59,1,8287,108,105,110,116,114,102,59,1,8499,114,59,3,55349,56592,110,117,115,80,108,117,115,59,1,8723,112,102,59,3,55349,56644,99,114,59,1,8499,59,1,924,4,9,74,97,99,101,102,111,115,116,117,3271,3276,3283,3306,3422,3427,4120,4126,4137,99,121,59,1,1034,99,117,116,101,59,1,323,4,3,97,101,121,3291,3297,3303,114,111,110,59,1,327,100,105,108,59,1,325,59,1,1053,4,3,103,115,119,3314,3380,3415,97,116,105,118,101,4,3,77,84,86,3327,3340,3365,101,100,105,117,109,83,112,97,99,101,59,1,8203,104,105,4,2,99,110,3348,3357,107,83,112,97,99,101,59,1,8203,83,112,97,99,101,59,1,8203,101,114,121,84,104,105,110,83,112,97,99,101,59,1,8203,116,101,100,4,2,71,76,3389,3405,114,101,97,116,101,114,71,114,101,97,116,101,114,59,1,8811,101,115,115,76,101,115,115,59,1,8810,76,105,110,101,59,1,10,114,59,3,55349,56593,4,4,66,110,112,116,3437,3444,3460,3464,114,101,97,107,59,1,8288,66,114,101,97,107,105,110,103,83,112,97,99,101,59,1,160,102,59,1,8469,4,13,59,67,68,69,71,72,76,78,80,82,83,84,86,3492,3494,3517,3536,3578,3657,3685,3784,3823,3860,3915,4066,4107,1,10988,4,2,111,117,3500,3510,110,103,114,117,101,110,116,59,1,8802,112,67,97,112,59,1,8813,111,117,98,108,101,86,101,114,116,105,99,97,108,66,97,114,59,1,8742,4,3,108,113,120,3544,3552,3571,101,109,101,110,116,59,1,8713,117,97,108,4,2,59,84,3561,3563,1,8800,105,108,100,101,59,3,8770,824,105,115,116,115,59,1,8708,114,101,97,116,101,114,4,7,59,69,70,71,76,83,84,3600,3602,3609,3621,3631,3637,3650,1,8815,113,117,97,108,59,1,8817,117,108,108,69,113,117,97,108,59,3,8807,824,114,101,97,116,101,114,59,3,8811,824,101,115,115,59,1,8825,108,97,110,116,69,113,117,97,108,59,3,10878,824,105,108,100,101,59,1,8821,117,109,112,4,2,68,69,3666,3677,111,119,110,72,117,109,112,59,3,8782,824,113,117,97,108,59,3,8783,824,101,4,2,102,115,3692,3724,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3709,3711,3717,1,8938,97,114,59,3,10703,824,113,117,97,108,59,1,8940,115,4,6,59,69,71,76,83,84,3739,3741,3748,3757,3764,3777,1,8814,113,117,97,108,59,1,8816,114,101,97,116,101,114,59,1,8824,101,115,115,59,3,8810,824,108,97,110,116,69,113,117,97,108,59,3,10877,824,105,108,100,101,59,1,8820,101,115,116,101,100,4,2,71,76,3795,3812,114,101,97,116,101,114,71,114,101,97,116,101,114,59,3,10914,824,101,115,115,76,101,115,115,59,3,10913,824,114,101,99,101,100,101,115,4,3,59,69,83,3838,3840,3848,1,8832,113,117,97,108,59,3,10927,824,108,97,110,116,69,113,117,97,108,59,1,8928,4,2,101,105,3866,3881,118,101,114,115,101,69,108,101,109,101,110,116,59,1,8716,103,104,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3900,3902,3908,1,8939,97,114,59,3,10704,824,113,117,97,108,59,1,8941,4,2,113,117,3921,3973,117,97,114,101,83,117,4,2,98,112,3933,3952,115,101,116,4,2,59,69,3942,3945,3,8847,824,113,117,97,108,59,1,8930,101,114,115,101,116,4,2,59,69,3963,3966,3,8848,824,113,117,97,108,59,1,8931,4,3,98,99,112,3981,4e3,4045,115,101,116,4,2,59,69,3990,3993,3,8834,8402,113,117,97,108,59,1,8840,99,101,101,100,115,4,4,59,69,83,84,4015,4017,4025,4037,1,8833,113,117,97,108,59,3,10928,824,108,97,110,116,69,113,117,97,108,59,1,8929,105,108,100,101,59,3,8831,824,101,114,115,101,116,4,2,59,69,4056,4059,3,8835,8402,113,117,97,108,59,1,8841,105,108,100,101,4,4,59,69,70,84,4080,4082,4089,4100,1,8769,113,117,97,108,59,1,8772,117,108,108,69,113,117,97,108,59,1,8775,105,108,100,101,59,1,8777,101,114,116,105,99,97,108,66,97,114,59,1,8740,99,114,59,3,55349,56489,105,108,100,101,5,209,1,59,4135,1,209,59,1,925,4,14,69,97,99,100,102,103,109,111,112,114,115,116,117,118,4170,4176,4187,4205,4212,4217,4228,4253,4259,4292,4295,4316,4337,4346,108,105,103,59,1,338,99,117,116,101,5,211,1,59,4185,1,211,4,2,105,121,4193,4202,114,99,5,212,1,59,4200,1,212,59,1,1054,98,108,97,99,59,1,336,114,59,3,55349,56594,114,97,118,101,5,210,1,59,4226,1,210,4,3,97,101,105,4236,4241,4246,99,114,59,1,332,103,97,59,1,937,99,114,111,110,59,1,927,112,102,59,3,55349,56646,101,110,67,117,114,108,121,4,2,68,81,4272,4285,111,117,98,108,101,81,117,111,116,101,59,1,8220,117,111,116,101,59,1,8216,59,1,10836,4,2,99,108,4301,4306,114,59,3,55349,56490,97,115,104,5,216,1,59,4314,1,216,105,4,2,108,109,4323,4332,100,101,5,213,1,59,4330,1,213,101,115,59,1,10807,109,108,5,214,1,59,4344,1,214,101,114,4,2,66,80,4354,4380,4,2,97,114,4360,4364,114,59,1,8254,97,99,4,2,101,107,4372,4375,59,1,9182,101,116,59,1,9140,97,114,101,110,116,104,101,115,105,115,59,1,9180,4,9,97,99,102,104,105,108,111,114,115,4413,4422,4426,4431,4435,4438,4448,4471,4561,114,116,105,97,108,68,59,1,8706,121,59,1,1055,114,59,3,55349,56595,105,59,1,934,59,1,928,117,115,77,105,110,117,115,59,1,177,4,2,105,112,4454,4467,110,99,97,114,101,112,108,97,110,101,59,1,8460,102,59,1,8473,4,4,59,101,105,111,4481,4483,4526,4531,1,10939,99,101,100,101,115,4,4,59,69,83,84,4498,4500,4507,4519,1,8826,113,117,97,108,59,1,10927,108,97,110,116,69,113,117,97,108,59,1,8828,105,108,100,101,59,1,8830,109,101,59,1,8243,4,2,100,112,4537,4543,117,99,116,59,1,8719,111,114,116,105,111,110,4,2,59,97,4555,4557,1,8759,108,59,1,8733,4,2,99,105,4567,4572,114,59,3,55349,56491,59,1,936,4,4,85,102,111,115,4585,4594,4599,4604,79,84,5,34,1,59,4592,1,34,114,59,3,55349,56596,112,102,59,1,8474,99,114,59,3,55349,56492,4,12,66,69,97,99,101,102,104,105,111,114,115,117,4636,4642,4650,4681,4704,4763,4767,4771,5047,5069,5081,5094,97,114,114,59,1,10512,71,5,174,1,59,4648,1,174,4,3,99,110,114,4658,4664,4668,117,116,101,59,1,340,103,59,1,10219,114,4,2,59,116,4675,4677,1,8608,108,59,1,10518,4,3,97,101,121,4689,4695,4701,114,111,110,59,1,344,100,105,108,59,1,342,59,1,1056,4,2,59,118,4710,4712,1,8476,101,114,115,101,4,2,69,85,4722,4748,4,2,108,113,4728,4736,101,109,101,110,116,59,1,8715,117,105,108,105,98,114,105,117,109,59,1,8651,112,69,113,117,105,108,105,98,114,105,117,109,59,1,10607,114,59,1,8476,111,59,1,929,103,104,116,4,8,65,67,68,70,84,85,86,97,4792,4840,4849,4905,4912,4972,5022,5040,4,2,110,114,4798,4811,103,108,101,66,114,97,99,107,101,116,59,1,10217,114,111,119,4,3,59,66,76,4822,4824,4829,1,8594,97,114,59,1,8677,101,102,116,65,114,114,111,119,59,1,8644,101,105,108,105,110,103,59,1,8969,111,4,2,117,119,4856,4869,98,108,101,66,114,97,99,107,101,116,59,1,10215,110,4,2,84,86,4876,4887,101,101,86,101,99,116,111,114,59,1,10589,101,99,116,111,114,4,2,59,66,4898,4900,1,8642,97,114,59,1,10581,108,111,111,114,59,1,8971,4,2,101,114,4918,4944,101,4,3,59,65,86,4927,4929,4936,1,8866,114,114,111,119,59,1,8614,101,99,116,111,114,59,1,10587,105,97,110,103,108,101,4,3,59,66,69,4958,4960,4965,1,8883,97,114,59,1,10704,113,117,97,108,59,1,8885,112,4,3,68,84,86,4981,4993,5004,111,119,110,86,101,99,116,111,114,59,1,10575,101,101,86,101,99,116,111,114,59,1,10588,101,99,116,111,114,4,2,59,66,5015,5017,1,8638,97,114,59,1,10580,101,99,116,111,114,4,2,59,66,5033,5035,1,8640,97,114,59,1,10579,114,114,111,119,59,1,8658,4,2,112,117,5053,5057,102,59,1,8477,110,100,73,109,112,108,105,101,115,59,1,10608,105,103,104,116,97,114,114,111,119,59,1,8667,4,2,99,104,5087,5091,114,59,1,8475,59,1,8625,108,101,68,101,108,97,121,101,100,59,1,10740,4,13,72,79,97,99,102,104,105,109,111,113,115,116,117,5134,5150,5157,5164,5198,5203,5259,5265,5277,5283,5374,5380,5385,4,2,67,99,5140,5146,72,99,121,59,1,1065,121,59,1,1064,70,84,99,121,59,1,1068,99,117,116,101,59,1,346,4,5,59,97,101,105,121,5176,5178,5184,5190,5195,1,10940,114,111,110,59,1,352,100,105,108,59,1,350,114,99,59,1,348,59,1,1057,114,59,3,55349,56598,111,114,116,4,4,68,76,82,85,5216,5227,5238,5250,111,119,110,65,114,114,111,119,59,1,8595,101,102,116,65,114,114,111,119,59,1,8592,105,103,104,116,65,114,114,111,119,59,1,8594,112,65,114,114,111,119,59,1,8593,103,109,97,59,1,931,97,108,108,67,105,114,99,108,101,59,1,8728,112,102,59,3,55349,56650,4,2,114,117,5289,5293,116,59,1,8730,97,114,101,4,4,59,73,83,85,5306,5308,5322,5367,1,9633,110,116,101,114,115,101,99,116,105,111,110,59,1,8851,117,4,2,98,112,5329,5347,115,101,116,4,2,59,69,5338,5340,1,8847,113,117,97,108,59,1,8849,101,114,115,101,116,4,2,59,69,5358,5360,1,8848,113,117,97,108,59,1,8850,110,105,111,110,59,1,8852,99,114,59,3,55349,56494,97,114,59,1,8902,4,4,98,99,109,112,5395,5420,5475,5478,4,2,59,115,5401,5403,1,8912,101,116,4,2,59,69,5411,5413,1,8912,113,117,97,108,59,1,8838,4,2,99,104,5426,5468,101,101,100,115,4,4,59,69,83,84,5440,5442,5449,5461,1,8827,113,117,97,108,59,1,10928,108,97,110,116,69,113,117,97,108,59,1,8829,105,108,100,101,59,1,8831,84,104,97,116,59,1,8715,59,1,8721,4,3,59,101,115,5486,5488,5507,1,8913,114,115,101,116,4,2,59,69,5498,5500,1,8835,113,117,97,108,59,1,8839,101,116,59,1,8913,4,11,72,82,83,97,99,102,104,105,111,114,115,5536,5546,5552,5567,5579,5602,5607,5655,5695,5701,5711,79,82,78,5,222,1,59,5544,1,222,65,68,69,59,1,8482,4,2,72,99,5558,5563,99,121,59,1,1035,121,59,1,1062,4,2,98,117,5573,5576,59,1,9,59,1,932,4,3,97,101,121,5587,5593,5599,114,111,110,59,1,356,100,105,108,59,1,354,59,1,1058,114,59,3,55349,56599,4,2,101,105,5613,5631,4,2,114,116,5619,5627,101,102,111,114,101,59,1,8756,97,59,1,920,4,2,99,110,5637,5647,107,83,112,97,99,101,59,3,8287,8202,83,112,97,99,101,59,1,8201,108,100,101,4,4,59,69,70,84,5668,5670,5677,5688,1,8764,113,117,97,108,59,1,8771,117,108,108,69,113,117,97,108,59,1,8773,105,108,100,101,59,1,8776,112,102,59,3,55349,56651,105,112,108,101,68,111,116,59,1,8411,4,2,99,116,5717,5722,114,59,3,55349,56495,114,111,107,59,1,358,4,14,97,98,99,100,102,103,109,110,111,112,114,115,116,117,5758,5789,5805,5823,5830,5835,5846,5852,5921,5937,6089,6095,6101,6108,4,2,99,114,5764,5774,117,116,101,5,218,1,59,5772,1,218,114,4,2,59,111,5781,5783,1,8607,99,105,114,59,1,10569,114,4,2,99,101,5796,5800,121,59,1,1038,118,101,59,1,364,4,2,105,121,5811,5820,114,99,5,219,1,59,5818,1,219,59,1,1059,98,108,97,99,59,1,368,114,59,3,55349,56600,114,97,118,101,5,217,1,59,5844,1,217,97,99,114,59,1,362,4,2,100,105,5858,5905,101,114,4,2,66,80,5866,5892,4,2,97,114,5872,5876,114,59,1,95,97,99,4,2,101,107,5884,5887,59,1,9183,101,116,59,1,9141,97,114,101,110,116,104,101,115,105,115,59,1,9181,111,110,4,2,59,80,5913,5915,1,8899,108,117,115,59,1,8846,4,2,103,112,5927,5932,111,110,59,1,370,102,59,3,55349,56652,4,8,65,68,69,84,97,100,112,115,5955,5985,5996,6009,6026,6033,6044,6075,114,114,111,119,4,3,59,66,68,5967,5969,5974,1,8593,97,114,59,1,10514,111,119,110,65,114,114,111,119,59,1,8645,111,119,110,65,114,114,111,119,59,1,8597,113,117,105,108,105,98,114,105,117,109,59,1,10606,101,101,4,2,59,65,6017,6019,1,8869,114,114,111,119,59,1,8613,114,114,111,119,59,1,8657,111,119,110,97,114,114,111,119,59,1,8661,101,114,4,2,76,82,6052,6063,101,102,116,65,114,114,111,119,59,1,8598,105,103,104,116,65,114,114,111,119,59,1,8599,105,4,2,59,108,6082,6084,1,978,111,110,59,1,933,105,110,103,59,1,366,99,114,59,3,55349,56496,105,108,100,101,59,1,360,109,108,5,220,1,59,6115,1,220,4,9,68,98,99,100,101,102,111,115,118,6137,6143,6148,6152,6166,6250,6255,6261,6267,97,115,104,59,1,8875,97,114,59,1,10987,121,59,1,1042,97,115,104,4,2,59,108,6161,6163,1,8873,59,1,10982,4,2,101,114,6172,6175,59,1,8897,4,3,98,116,121,6183,6188,6238,97,114,59,1,8214,4,2,59,105,6194,6196,1,8214,99,97,108,4,4,66,76,83,84,6209,6214,6220,6231,97,114,59,1,8739,105,110,101,59,1,124,101,112,97,114,97,116,111,114,59,1,10072,105,108,100,101,59,1,8768,84,104,105,110,83,112,97,99,101,59,1,8202,114,59,3,55349,56601,112,102,59,3,55349,56653,99,114,59,3,55349,56497,100,97,115,104,59,1,8874,4,5,99,101,102,111,115,6286,6292,6298,6303,6309,105,114,99,59,1,372,100,103,101,59,1,8896,114,59,3,55349,56602,112,102,59,3,55349,56654,99,114,59,3,55349,56498,4,4,102,105,111,115,6325,6330,6333,6339,114,59,3,55349,56603,59,1,926,112,102,59,3,55349,56655,99,114,59,3,55349,56499,4,9,65,73,85,97,99,102,111,115,117,6365,6370,6375,6380,6391,6405,6410,6416,6422,99,121,59,1,1071,99,121,59,1,1031,99,121,59,1,1070,99,117,116,101,5,221,1,59,6389,1,221,4,2,105,121,6397,6402,114,99,59,1,374,59,1,1067,114,59,3,55349,56604,112,102,59,3,55349,56656,99,114,59,3,55349,56500,109,108,59,1,376,4,8,72,97,99,100,101,102,111,115,6445,6450,6457,6472,6477,6501,6505,6510,99,121,59,1,1046,99,117,116,101,59,1,377,4,2,97,121,6463,6469,114,111,110,59,1,381,59,1,1047,111,116,59,1,379,4,2,114,116,6483,6497,111,87,105,100,116,104,83,112,97,99,101,59,1,8203,97,59,1,918,114,59,1,8488,112,102,59,1,8484,99,114,59,3,55349,56501,4,16,97,98,99,101,102,103,108,109,110,111,112,114,115,116,117,119,6550,6561,6568,6612,6622,6634,6645,6672,6699,6854,6870,6923,6933,6963,6974,6983,99,117,116,101,5,225,1,59,6559,1,225,114,101,118,101,59,1,259,4,6,59,69,100,105,117,121,6582,6584,6588,6591,6600,6609,1,8766,59,3,8766,819,59,1,8767,114,99,5,226,1,59,6598,1,226,116,101,5,180,1,59,6607,1,180,59,1,1072,108,105,103,5,230,1,59,6620,1,230,4,2,59,114,6628,6630,1,8289,59,3,55349,56606,114,97,118,101,5,224,1,59,6643,1,224,4,2,101,112,6651,6667,4,2,102,112,6657,6663,115,121,109,59,1,8501,104,59,1,8501,104,97,59,1,945,4,2,97,112,6678,6692,4,2,99,108,6684,6688,114,59,1,257,103,59,1,10815,5,38,1,59,6697,1,38,4,2,100,103,6705,6737,4,5,59,97,100,115,118,6717,6719,6724,6727,6734,1,8743,110,100,59,1,10837,59,1,10844,108,111,112,101,59,1,10840,59,1,10842,4,7,59,101,108,109,114,115,122,6753,6755,6758,6762,6814,6835,6848,1,8736,59,1,10660,101,59,1,8736,115,100,4,2,59,97,6770,6772,1,8737,4,8,97,98,99,100,101,102,103,104,6790,6793,6796,6799,6802,6805,6808,6811,59,1,10664,59,1,10665,59,1,10666,59,1,10667,59,1,10668,59,1,10669,59,1,10670,59,1,10671,116,4,2,59,118,6821,6823,1,8735,98,4,2,59,100,6830,6832,1,8894,59,1,10653,4,2,112,116,6841,6845,104,59,1,8738,59,1,197,97,114,114,59,1,9084,4,2,103,112,6860,6865,111,110,59,1,261,102,59,3,55349,56658,4,7,59,69,97,101,105,111,112,6886,6888,6891,6897,6900,6904,6908,1,8776,59,1,10864,99,105,114,59,1,10863,59,1,8778,100,59,1,8779,115,59,1,39,114,111,120,4,2,59,101,6917,6919,1,8776,113,59,1,8778,105,110,103,5,229,1,59,6931,1,229,4,3,99,116,121,6941,6946,6949,114,59,3,55349,56502,59,1,42,109,112,4,2,59,101,6957,6959,1,8776,113,59,1,8781,105,108,100,101,5,227,1,59,6972,1,227,109,108,5,228,1,59,6981,1,228,4,2,99,105,6989,6997,111,110,105,110,116,59,1,8755,110,116,59,1,10769,4,16,78,97,98,99,100,101,102,105,107,108,110,111,112,114,115,117,7036,7041,7119,7135,7149,7155,7219,7224,7347,7354,7463,7489,7786,7793,7814,7866,111,116,59,1,10989,4,2,99,114,7047,7094,107,4,4,99,101,112,115,7058,7064,7073,7080,111,110,103,59,1,8780,112,115,105,108,111,110,59,1,1014,114,105,109,101,59,1,8245,105,109,4,2,59,101,7088,7090,1,8765,113,59,1,8909,4,2,118,119,7100,7105,101,101,59,1,8893,101,100,4,2,59,103,7113,7115,1,8965,101,59,1,8965,114,107,4,2,59,116,7127,7129,1,9141,98,114,107,59,1,9142,4,2,111,121,7141,7146,110,103,59,1,8780,59,1,1073,113,117,111,59,1,8222,4,5,99,109,112,114,116,7167,7181,7188,7193,7199,97,117,115,4,2,59,101,7176,7178,1,8757,59,1,8757,112,116,121,118,59,1,10672,115,105,59,1,1014,110,111,117,59,1,8492,4,3,97,104,119,7207,7210,7213,59,1,946,59,1,8502,101,101,110,59,1,8812,114,59,3,55349,56607,103,4,7,99,111,115,116,117,118,119,7241,7262,7288,7305,7328,7335,7340,4,3,97,105,117,7249,7253,7258,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,4,3,100,112,116,7270,7275,7281,111,116,59,1,10752,108,117,115,59,1,10753,105,109,101,115,59,1,10754,4,2,113,116,7294,7300,99,117,112,59,1,10758,97,114,59,1,9733,114,105,97,110,103,108,101,4,2,100,117,7318,7324,111,119,110,59,1,9661,112,59,1,9651,112,108,117,115,59,1,10756,101,101,59,1,8897,101,100,103,101,59,1,8896,97,114,111,119,59,1,10509,4,3,97,107,111,7362,7436,7458,4,2,99,110,7368,7432,107,4,3,108,115,116,7377,7386,7394,111,122,101,110,103,101,59,1,10731,113,117,97,114,101,59,1,9642,114,105,97,110,103,108,101,4,4,59,100,108,114,7411,7413,7419,7425,1,9652,111,119,110,59,1,9662,101,102,116,59,1,9666,105,103,104,116,59,1,9656,107,59,1,9251,4,2,49,51,7442,7454,4,2,50,52,7448,7451,59,1,9618,59,1,9617,52,59,1,9619,99,107,59,1,9608,4,2,101,111,7469,7485,4,2,59,113,7475,7478,3,61,8421,117,105,118,59,3,8801,8421,116,59,1,8976,4,4,112,116,119,120,7499,7504,7517,7523,102,59,3,55349,56659,4,2,59,116,7510,7512,1,8869,111,109,59,1,8869,116,105,101,59,1,8904,4,12,68,72,85,86,98,100,104,109,112,116,117,118,7549,7571,7597,7619,7655,7660,7682,7708,7715,7721,7728,7750,4,4,76,82,108,114,7559,7562,7565,7568,59,1,9559,59,1,9556,59,1,9558,59,1,9555,4,5,59,68,85,100,117,7583,7585,7588,7591,7594,1,9552,59,1,9574,59,1,9577,59,1,9572,59,1,9575,4,4,76,82,108,114,7607,7610,7613,7616,59,1,9565,59,1,9562,59,1,9564,59,1,9561,4,7,59,72,76,82,104,108,114,7635,7637,7640,7643,7646,7649,7652,1,9553,59,1,9580,59,1,9571,59,1,9568,59,1,9579,59,1,9570,59,1,9567,111,120,59,1,10697,4,4,76,82,108,114,7670,7673,7676,7679,59,1,9557,59,1,9554,59,1,9488,59,1,9484,4,5,59,68,85,100,117,7694,7696,7699,7702,7705,1,9472,59,1,9573,59,1,9576,59,1,9516,59,1,9524,105,110,117,115,59,1,8863,108,117,115,59,1,8862,105,109,101,115,59,1,8864,4,4,76,82,108,114,7738,7741,7744,7747,59,1,9563,59,1,9560,59,1,9496,59,1,9492,4,7,59,72,76,82,104,108,114,7766,7768,7771,7774,7777,7780,7783,1,9474,59,1,9578,59,1,9569,59,1,9566,59,1,9532,59,1,9508,59,1,9500,114,105,109,101,59,1,8245,4,2,101,118,7799,7804,118,101,59,1,728,98,97,114,5,166,1,59,7812,1,166,4,4,99,101,105,111,7824,7829,7834,7846,114,59,3,55349,56503,109,105,59,1,8271,109,4,2,59,101,7841,7843,1,8765,59,1,8909,108,4,3,59,98,104,7855,7857,7860,1,92,59,1,10693,115,117,98,59,1,10184,4,2,108,109,7872,7885,108,4,2,59,101,7879,7881,1,8226,116,59,1,8226,112,4,3,59,69,101,7894,7896,7899,1,8782,59,1,10926,4,2,59,113,7905,7907,1,8783,59,1,8783,4,15,97,99,100,101,102,104,105,108,111,114,115,116,117,119,121,7942,8021,8075,8080,8121,8126,8157,8279,8295,8430,8446,8485,8491,8707,8726,4,3,99,112,114,7950,7956,8007,117,116,101,59,1,263,4,6,59,97,98,99,100,115,7970,7972,7977,7984,7998,8003,1,8745,110,100,59,1,10820,114,99,117,112,59,1,10825,4,2,97,117,7990,7994,112,59,1,10827,112,59,1,10823,111,116,59,1,10816,59,3,8745,65024,4,2,101,111,8013,8017,116,59,1,8257,110,59,1,711,4,4,97,101,105,117,8031,8046,8056,8061,4,2,112,114,8037,8041,115,59,1,10829,111,110,59,1,269,100,105,108,5,231,1,59,8054,1,231,114,99,59,1,265,112,115,4,2,59,115,8069,8071,1,10828,109,59,1,10832,111,116,59,1,267,4,3,100,109,110,8088,8097,8104,105,108,5,184,1,59,8095,1,184,112,116,121,118,59,1,10674,116,5,162,2,59,101,8112,8114,1,162,114,100,111,116,59,1,183,114,59,3,55349,56608,4,3,99,101,105,8134,8138,8154,121,59,1,1095,99,107,4,2,59,109,8146,8148,1,10003,97,114,107,59,1,10003,59,1,967,114,4,7,59,69,99,101,102,109,115,8174,8176,8179,8258,8261,8268,8273,1,9675,59,1,10691,4,3,59,101,108,8187,8189,8193,1,710,113,59,1,8791,101,4,2,97,100,8200,8223,114,114,111,119,4,2,108,114,8210,8216,101,102,116,59,1,8634,105,103,104,116,59,1,8635,4,5,82,83,97,99,100,8235,8238,8241,8246,8252,59,1,174,59,1,9416,115,116,59,1,8859,105,114,99,59,1,8858,97,115,104,59,1,8861,59,1,8791,110,105,110,116,59,1,10768,105,100,59,1,10991,99,105,114,59,1,10690,117,98,115,4,2,59,117,8288,8290,1,9827,105,116,59,1,9827,4,4,108,109,110,112,8305,8326,8376,8400,111,110,4,2,59,101,8313,8315,1,58,4,2,59,113,8321,8323,1,8788,59,1,8788,4,2,109,112,8332,8344,97,4,2,59,116,8339,8341,1,44,59,1,64,4,3,59,102,108,8352,8354,8358,1,8705,110,59,1,8728,101,4,2,109,120,8365,8371,101,110,116,59,1,8705,101,115,59,1,8450,4,2,103,105,8382,8395,4,2,59,100,8388,8390,1,8773,111,116,59,1,10861,110,116,59,1,8750,4,3,102,114,121,8408,8412,8417,59,3,55349,56660,111,100,59,1,8720,5,169,2,59,115,8424,8426,1,169,114,59,1,8471,4,2,97,111,8436,8441,114,114,59,1,8629,115,115,59,1,10007,4,2,99,117,8452,8457,114,59,3,55349,56504,4,2,98,112,8463,8474,4,2,59,101,8469,8471,1,10959,59,1,10961,4,2,59,101,8480,8482,1,10960,59,1,10962,100,111,116,59,1,8943,4,7,100,101,108,112,114,118,119,8507,8522,8536,8550,8600,8697,8702,97,114,114,4,2,108,114,8516,8519,59,1,10552,59,1,10549,4,2,112,115,8528,8532,114,59,1,8926,99,59,1,8927,97,114,114,4,2,59,112,8545,8547,1,8630,59,1,10557,4,6,59,98,99,100,111,115,8564,8566,8573,8587,8592,8596,1,8746,114,99,97,112,59,1,10824,4,2,97,117,8579,8583,112,59,1,10822,112,59,1,10826,111,116,59,1,8845,114,59,1,10821,59,3,8746,65024,4,4,97,108,114,118,8610,8623,8663,8672,114,114,4,2,59,109,8618,8620,1,8631,59,1,10556,121,4,3,101,118,119,8632,8651,8656,113,4,2,112,115,8639,8645,114,101,99,59,1,8926,117,99,99,59,1,8927,101,101,59,1,8910,101,100,103,101,59,1,8911,101,110,5,164,1,59,8670,1,164,101,97,114,114,111,119,4,2,108,114,8684,8690,101,102,116,59,1,8630,105,103,104,116,59,1,8631,101,101,59,1,8910,101,100,59,1,8911,4,2,99,105,8713,8721,111,110,105,110,116,59,1,8754,110,116,59,1,8753,108,99,116,121,59,1,9005,4,19,65,72,97,98,99,100,101,102,104,105,106,108,111,114,115,116,117,119,122,8773,8778,8783,8821,8839,8854,8887,8914,8930,8944,9036,9041,9058,9197,9227,9258,9281,9297,9305,114,114,59,1,8659,97,114,59,1,10597,4,4,103,108,114,115,8793,8799,8805,8809,103,101,114,59,1,8224,101,116,104,59,1,8504,114,59,1,8595,104,4,2,59,118,8816,8818,1,8208,59,1,8867,4,2,107,108,8827,8834,97,114,111,119,59,1,10511,97,99,59,1,733,4,2,97,121,8845,8851,114,111,110,59,1,271,59,1,1076,4,3,59,97,111,8862,8864,8880,1,8518,4,2,103,114,8870,8876,103,101,114,59,1,8225,114,59,1,8650,116,115,101,113,59,1,10871,4,3,103,108,109,8895,8902,8907,5,176,1,59,8900,1,176,116,97,59,1,948,112,116,121,118,59,1,10673,4,2,105,114,8920,8926,115,104,116,59,1,10623,59,3,55349,56609,97,114,4,2,108,114,8938,8941,59,1,8643,59,1,8642,4,5,97,101,103,115,118,8956,8986,8989,8996,9001,109,4,3,59,111,115,8965,8967,8983,1,8900,110,100,4,2,59,115,8975,8977,1,8900,117,105,116,59,1,9830,59,1,9830,59,1,168,97,109,109,97,59,1,989,105,110,59,1,8946,4,3,59,105,111,9009,9011,9031,1,247,100,101,5,247,2,59,111,9020,9022,1,247,110,116,105,109,101,115,59,1,8903,110,120,59,1,8903,99,121,59,1,1106,99,4,2,111,114,9048,9053,114,110,59,1,8990,111,112,59,1,8973,4,5,108,112,116,117,119,9070,9076,9081,9130,9144,108,97,114,59,1,36,102,59,3,55349,56661,4,5,59,101,109,112,115,9093,9095,9109,9116,9122,1,729,113,4,2,59,100,9102,9104,1,8784,111,116,59,1,8785,105,110,117,115,59,1,8760,108,117,115,59,1,8724,113,117,97,114,101,59,1,8865,98,108,101,98,97,114,119,101,100,103,101,59,1,8966,110,4,3,97,100,104,9153,9160,9172,114,114,111,119,59,1,8595,111,119,110,97,114,114,111,119,115,59,1,8650,97,114,112,111,111,110,4,2,108,114,9184,9190,101,102,116,59,1,8643,105,103,104,116,59,1,8642,4,2,98,99,9203,9211,107,97,114,111,119,59,1,10512,4,2,111,114,9217,9222,114,110,59,1,8991,111,112,59,1,8972,4,3,99,111,116,9235,9248,9252,4,2,114,121,9241,9245,59,3,55349,56505,59,1,1109,108,59,1,10742,114,111,107,59,1,273,4,2,100,114,9264,9269,111,116,59,1,8945,105,4,2,59,102,9276,9278,1,9663,59,1,9662,4,2,97,104,9287,9292,114,114,59,1,8693,97,114,59,1,10607,97,110,103,108,101,59,1,10662,4,2,99,105,9311,9315,121,59,1,1119,103,114,97,114,114,59,1,10239,4,18,68,97,99,100,101,102,103,108,109,110,111,112,113,114,115,116,117,120,9361,9376,9398,9439,9444,9447,9462,9495,9531,9585,9598,9614,9659,9755,9771,9792,9808,9826,4,2,68,111,9367,9372,111,116,59,1,10871,116,59,1,8785,4,2,99,115,9382,9392,117,116,101,5,233,1,59,9390,1,233,116,101,114,59,1,10862,4,4,97,105,111,121,9408,9414,9430,9436,114,111,110,59,1,283,114,4,2,59,99,9421,9423,1,8790,5,234,1,59,9428,1,234,108,111,110,59,1,8789,59,1,1101,111,116,59,1,279,59,1,8519,4,2,68,114,9453,9458,111,116,59,1,8786,59,3,55349,56610,4,3,59,114,115,9470,9472,9482,1,10906,97,118,101,5,232,1,59,9480,1,232,4,2,59,100,9488,9490,1,10902,111,116,59,1,10904,4,4,59,105,108,115,9505,9507,9515,9518,1,10905,110,116,101,114,115,59,1,9191,59,1,8467,4,2,59,100,9524,9526,1,10901,111,116,59,1,10903,4,3,97,112,115,9539,9544,9564,99,114,59,1,275,116,121,4,3,59,115,118,9554,9556,9561,1,8709,101,116,59,1,8709,59,1,8709,112,4,2,49,59,9571,9583,4,2,51,52,9577,9580,59,1,8196,59,1,8197,1,8195,4,2,103,115,9591,9594,59,1,331,112,59,1,8194,4,2,103,112,9604,9609,111,110,59,1,281,102,59,3,55349,56662,4,3,97,108,115,9622,9635,9640,114,4,2,59,115,9629,9631,1,8917,108,59,1,10723,117,115,59,1,10865,105,4,3,59,108,118,9649,9651,9656,1,949,111,110,59,1,949,59,1,1013,4,4,99,115,117,118,9669,9686,9716,9747,4,2,105,111,9675,9680,114,99,59,1,8790,108,111,110,59,1,8789,4,2,105,108,9692,9696,109,59,1,8770,97,110,116,4,2,103,108,9705,9710,116,114,59,1,10902,101,115,115,59,1,10901,4,3,97,101,105,9724,9729,9734,108,115,59,1,61,115,116,59,1,8799,118,4,2,59,68,9741,9743,1,8801,68,59,1,10872,112,97,114,115,108,59,1,10725,4,2,68,97,9761,9766,111,116,59,1,8787,114,114,59,1,10609,4,3,99,100,105,9779,9783,9788,114,59,1,8495,111,116,59,1,8784,109,59,1,8770,4,2,97,104,9798,9801,59,1,951,5,240,1,59,9806,1,240,4,2,109,114,9814,9822,108,5,235,1,59,9820,1,235,111,59,1,8364,4,3,99,105,112,9834,9838,9843,108,59,1,33,115,116,59,1,8707,4,2,101,111,9849,9859,99,116,97,116,105,111,110,59,1,8496,110,101,110,116,105,97,108,101,59,1,8519,4,12,97,99,101,102,105,106,108,110,111,112,114,115,9896,9910,9914,9921,9954,9960,9967,9989,9994,10027,10036,10164,108,108,105,110,103,100,111,116,115,101,113,59,1,8786,121,59,1,1092,109,97,108,101,59,1,9792,4,3,105,108,114,9929,9935,9950,108,105,103,59,1,64259,4,2,105,108,9941,9945,103,59,1,64256,105,103,59,1,64260,59,3,55349,56611,108,105,103,59,1,64257,108,105,103,59,3,102,106,4,3,97,108,116,9975,9979,9984,116,59,1,9837,105,103,59,1,64258,110,115,59,1,9649,111,102,59,1,402,4,2,112,114,1e4,10005,102,59,3,55349,56663,4,2,97,107,10011,10016,108,108,59,1,8704,4,2,59,118,10022,10024,1,8916,59,1,10969,97,114,116,105,110,116,59,1,10765,4,2,97,111,10042,10159,4,2,99,115,10048,10155,4,6,49,50,51,52,53,55,10062,10102,10114,10135,10139,10151,4,6,50,51,52,53,54,56,10076,10083,10086,10093,10096,10099,5,189,1,59,10081,1,189,59,1,8531,5,188,1,59,10091,1,188,59,1,8533,59,1,8537,59,1,8539,4,2,51,53,10108,10111,59,1,8532,59,1,8534,4,3,52,53,56,10122,10129,10132,5,190,1,59,10127,1,190,59,1,8535,59,1,8540,53,59,1,8536,4,2,54,56,10145,10148,59,1,8538,59,1,8541,56,59,1,8542,108,59,1,8260,119,110,59,1,8994,99,114,59,3,55349,56507,4,17,69,97,98,99,100,101,102,103,105,106,108,110,111,114,115,116,118,10206,10217,10247,10254,10268,10273,10358,10363,10374,10380,10385,10406,10458,10464,10470,10497,10610,4,2,59,108,10212,10214,1,8807,59,1,10892,4,3,99,109,112,10225,10231,10244,117,116,101,59,1,501,109,97,4,2,59,100,10239,10241,1,947,59,1,989,59,1,10886,114,101,118,101,59,1,287,4,2,105,121,10260,10265,114,99,59,1,285,59,1,1075,111,116,59,1,289,4,4,59,108,113,115,10283,10285,10288,10308,1,8805,59,1,8923,4,3,59,113,115,10296,10298,10301,1,8805,59,1,8807,108,97,110,116,59,1,10878,4,4,59,99,100,108,10318,10320,10324,10345,1,10878,99,59,1,10921,111,116,4,2,59,111,10332,10334,1,10880,4,2,59,108,10340,10342,1,10882,59,1,10884,4,2,59,101,10351,10354,3,8923,65024,115,59,1,10900,114,59,3,55349,56612,4,2,59,103,10369,10371,1,8811,59,1,8921,109,101,108,59,1,8503,99,121,59,1,1107,4,4,59,69,97,106,10395,10397,10400,10403,1,8823,59,1,10898,59,1,10917,59,1,10916,4,4,69,97,101,115,10416,10419,10434,10453,59,1,8809,112,4,2,59,112,10426,10428,1,10890,114,111,120,59,1,10890,4,2,59,113,10440,10442,1,10888,4,2,59,113,10448,10450,1,10888,59,1,8809,105,109,59,1,8935,112,102,59,3,55349,56664,97,118,101,59,1,96,4,2,99,105,10476,10480,114,59,1,8458,109,4,3,59,101,108,10489,10491,10494,1,8819,59,1,10894,59,1,10896,5,62,6,59,99,100,108,113,114,10512,10514,10527,10532,10538,10545,1,62,4,2,99,105,10520,10523,59,1,10919,114,59,1,10874,111,116,59,1,8919,80,97,114,59,1,10645,117,101,115,116,59,1,10876,4,5,97,100,101,108,115,10557,10574,10579,10599,10605,4,2,112,114,10563,10570,112,114,111,120,59,1,10886,114,59,1,10616,111,116,59,1,8919,113,4,2,108,113,10586,10592,101,115,115,59,1,8923,108,101,115,115,59,1,10892,101,115,115,59,1,8823,105,109,59,1,8819,4,2,101,110,10616,10626,114,116,110,101,113,113,59,3,8809,65024,69,59,3,8809,65024,4,10,65,97,98,99,101,102,107,111,115,121,10653,10658,10713,10718,10724,10760,10765,10786,10850,10875,114,114,59,1,8660,4,4,105,108,109,114,10668,10674,10678,10684,114,115,112,59,1,8202,102,59,1,189,105,108,116,59,1,8459,4,2,100,114,10690,10695,99,121,59,1,1098,4,3,59,99,119,10703,10705,10710,1,8596,105,114,59,1,10568,59,1,8621,97,114,59,1,8463,105,114,99,59,1,293,4,3,97,108,114,10732,10748,10754,114,116,115,4,2,59,117,10741,10743,1,9829,105,116,59,1,9829,108,105,112,59,1,8230,99,111,110,59,1,8889,114,59,3,55349,56613,115,4,2,101,119,10772,10779,97,114,111,119,59,1,10533,97,114,111,119,59,1,10534,4,5,97,109,111,112,114,10798,10803,10809,10839,10844,114,114,59,1,8703,116,104,116,59,1,8763,107,4,2,108,114,10816,10827,101,102,116,97,114,114,111,119,59,1,8617,105,103,104,116,97,114,114,111,119,59,1,8618,102,59,3,55349,56665,98,97,114,59,1,8213,4,3,99,108,116,10858,10863,10869,114,59,3,55349,56509,97,115,104,59,1,8463,114,111,107,59,1,295,4,2,98,112,10881,10887,117,108,108,59,1,8259,104,101,110,59,1,8208,4,15,97,99,101,102,103,105,106,109,110,111,112,113,115,116,117,10925,10936,10958,10977,10990,11001,11039,11045,11101,11192,11220,11226,11237,11285,11299,99,117,116,101,5,237,1,59,10934,1,237,4,3,59,105,121,10944,10946,10955,1,8291,114,99,5,238,1,59,10953,1,238,59,1,1080,4,2,99,120,10964,10968,121,59,1,1077,99,108,5,161,1,59,10975,1,161,4,2,102,114,10983,10986,59,1,8660,59,3,55349,56614,114,97,118,101,5,236,1,59,10999,1,236,4,4,59,105,110,111,11011,11013,11028,11034,1,8520,4,2,105,110,11019,11024,110,116,59,1,10764,116,59,1,8749,102,105,110,59,1,10716,116,97,59,1,8489,108,105,103,59,1,307,4,3,97,111,112,11053,11092,11096,4,3,99,103,116,11061,11065,11088,114,59,1,299,4,3,101,108,112,11073,11076,11082,59,1,8465,105,110,101,59,1,8464,97,114,116,59,1,8465,104,59,1,305,102,59,1,8887,101,100,59,1,437,4,5,59,99,102,111,116,11113,11115,11121,11136,11142,1,8712,97,114,101,59,1,8453,105,110,4,2,59,116,11129,11131,1,8734,105,101,59,1,10717,100,111,116,59,1,305,4,5,59,99,101,108,112,11154,11156,11161,11179,11186,1,8747,97,108,59,1,8890,4,2,103,114,11167,11173,101,114,115,59,1,8484,99,97,108,59,1,8890,97,114,104,107,59,1,10775,114,111,100,59,1,10812,4,4,99,103,112,116,11202,11206,11211,11216,121,59,1,1105,111,110,59,1,303,102,59,3,55349,56666,97,59,1,953,114,111,100,59,1,10812,117,101,115,116,5,191,1,59,11235,1,191,4,2,99,105,11243,11248,114,59,3,55349,56510,110,4,5,59,69,100,115,118,11261,11263,11266,11271,11282,1,8712,59,1,8953,111,116,59,1,8949,4,2,59,118,11277,11279,1,8948,59,1,8947,59,1,8712,4,2,59,105,11291,11293,1,8290,108,100,101,59,1,297,4,2,107,109,11305,11310,99,121,59,1,1110,108,5,239,1,59,11316,1,239,4,6,99,102,109,111,115,117,11332,11346,11351,11357,11363,11380,4,2,105,121,11338,11343,114,99,59,1,309,59,1,1081,114,59,3,55349,56615,97,116,104,59,1,567,112,102,59,3,55349,56667,4,2,99,101,11369,11374,114,59,3,55349,56511,114,99,121,59,1,1112,107,99,121,59,1,1108,4,8,97,99,102,103,104,106,111,115,11404,11418,11433,11438,11445,11450,11455,11461,112,112,97,4,2,59,118,11413,11415,1,954,59,1,1008,4,2,101,121,11424,11430,100,105,108,59,1,311,59,1,1082,114,59,3,55349,56616,114,101,101,110,59,1,312,99,121,59,1,1093,99,121,59,1,1116,112,102,59,3,55349,56668,99,114,59,3,55349,56512,4,23,65,66,69,72,97,98,99,100,101,102,103,104,106,108,109,110,111,112,114,115,116,117,118,11515,11538,11544,11555,11560,11721,11780,11818,11868,12136,12160,12171,12203,12208,12246,12275,12327,12509,12523,12569,12641,12732,12752,4,3,97,114,116,11523,11528,11532,114,114,59,1,8666,114,59,1,8656,97,105,108,59,1,10523,97,114,114,59,1,10510,4,2,59,103,11550,11552,1,8806,59,1,10891,97,114,59,1,10594,4,9,99,101,103,109,110,112,113,114,116,11580,11586,11594,11600,11606,11624,11627,11636,11694,117,116,101,59,1,314,109,112,116,121,118,59,1,10676,114,97,110,59,1,8466,98,100,97,59,1,955,103,4,3,59,100,108,11615,11617,11620,1,10216,59,1,10641,101,59,1,10216,59,1,10885,117,111,5,171,1,59,11634,1,171,114,4,8,59,98,102,104,108,112,115,116,11655,11657,11669,11673,11677,11681,11685,11690,1,8592,4,2,59,102,11663,11665,1,8676,115,59,1,10527,115,59,1,10525,107,59,1,8617,112,59,1,8619,108,59,1,10553,105,109,59,1,10611,108,59,1,8610,4,3,59,97,101,11702,11704,11709,1,10923,105,108,59,1,10521,4,2,59,115,11715,11717,1,10925,59,3,10925,65024,4,3,97,98,114,11729,11734,11739,114,114,59,1,10508,114,107,59,1,10098,4,2,97,107,11745,11758,99,4,2,101,107,11752,11755,59,1,123,59,1,91,4,2,101,115,11764,11767,59,1,10635,108,4,2,100,117,11774,11777,59,1,10639,59,1,10637,4,4,97,101,117,121,11790,11796,11811,11815,114,111,110,59,1,318,4,2,100,105,11802,11807,105,108,59,1,316,108,59,1,8968,98,59,1,123,59,1,1083,4,4,99,113,114,115,11828,11832,11845,11864,97,59,1,10550,117,111,4,2,59,114,11840,11842,1,8220,59,1,8222,4,2,100,117,11851,11857,104,97,114,59,1,10599,115,104,97,114,59,1,10571,104,59,1,8626,4,5,59,102,103,113,115,11880,11882,12008,12011,12031,1,8804,116,4,5,97,104,108,114,116,11895,11913,11935,11947,11996,114,114,111,119,4,2,59,116,11905,11907,1,8592,97,105,108,59,1,8610,97,114,112,111,111,110,4,2,100,117,11925,11931,111,119,110,59,1,8637,112,59,1,8636,101,102,116,97,114,114,111,119,115,59,1,8647,105,103,104,116,4,3,97,104,115,11959,11974,11984,114,114,111,119,4,2,59,115,11969,11971,1,8596,59,1,8646,97,114,112,111,111,110,115,59,1,8651,113,117,105,103,97,114,114,111,119,59,1,8621,104,114,101,101,116,105,109,101,115,59,1,8907,59,1,8922,4,3,59,113,115,12019,12021,12024,1,8804,59,1,8806,108,97,110,116,59,1,10877,4,5,59,99,100,103,115,12043,12045,12049,12070,12083,1,10877,99,59,1,10920,111,116,4,2,59,111,12057,12059,1,10879,4,2,59,114,12065,12067,1,10881,59,1,10883,4,2,59,101,12076,12079,3,8922,65024,115,59,1,10899,4,5,97,100,101,103,115,12095,12103,12108,12126,12131,112,112,114,111,120,59,1,10885,111,116,59,1,8918,113,4,2,103,113,12115,12120,116,114,59,1,8922,103,116,114,59,1,10891,116,114,59,1,8822,105,109,59,1,8818,4,3,105,108,114,12144,12150,12156,115,104,116,59,1,10620,111,111,114,59,1,8970,59,3,55349,56617,4,2,59,69,12166,12168,1,8822,59,1,10897,4,2,97,98,12177,12198,114,4,2,100,117,12184,12187,59,1,8637,4,2,59,108,12193,12195,1,8636,59,1,10602,108,107,59,1,9604,99,121,59,1,1113,4,5,59,97,99,104,116,12220,12222,12227,12235,12241,1,8810,114,114,59,1,8647,111,114,110,101,114,59,1,8990,97,114,100,59,1,10603,114,105,59,1,9722,4,2,105,111,12252,12258,100,111,116,59,1,320,117,115,116,4,2,59,97,12267,12269,1,9136,99,104,101,59,1,9136,4,4,69,97,101,115,12285,12288,12303,12322,59,1,8808,112,4,2,59,112,12295,12297,1,10889,114,111,120,59,1,10889,4,2,59,113,12309,12311,1,10887,4,2,59,113,12317,12319,1,10887,59,1,8808,105,109,59,1,8934,4,8,97,98,110,111,112,116,119,122,12345,12359,12364,12421,12446,12467,12474,12490,4,2,110,114,12351,12355,103,59,1,10220,114,59,1,8701,114,107,59,1,10214,103,4,3,108,109,114,12373,12401,12409,101,102,116,4,2,97,114,12382,12389,114,114,111,119,59,1,10229,105,103,104,116,97,114,114,111,119,59,1,10231,97,112,115,116,111,59,1,10236,105,103,104,116,97,114,114,111,119,59,1,10230,112,97,114,114,111,119,4,2,108,114,12433,12439,101,102,116,59,1,8619,105,103,104,116,59,1,8620,4,3,97,102,108,12454,12458,12462,114,59,1,10629,59,3,55349,56669,117,115,59,1,10797,105,109,101,115,59,1,10804,4,2,97,98,12480,12485,115,116,59,1,8727,97,114,59,1,95,4,3,59,101,102,12498,12500,12506,1,9674,110,103,101,59,1,9674,59,1,10731,97,114,4,2,59,108,12517,12519,1,40,116,59,1,10643,4,5,97,99,104,109,116,12535,12540,12548,12561,12564,114,114,59,1,8646,111,114,110,101,114,59,1,8991,97,114,4,2,59,100,12556,12558,1,8651,59,1,10605,59,1,8206,114,105,59,1,8895,4,6,97,99,104,105,113,116,12583,12589,12594,12597,12614,12635,113,117,111,59,1,8249,114,59,3,55349,56513,59,1,8624,109,4,3,59,101,103,12606,12608,12611,1,8818,59,1,10893,59,1,10895,4,2,98,117,12620,12623,59,1,91,111,4,2,59,114,12630,12632,1,8216,59,1,8218,114,111,107,59,1,322,5,60,8,59,99,100,104,105,108,113,114,12660,12662,12675,12680,12686,12692,12698,12705,1,60,4,2,99,105,12668,12671,59,1,10918,114,59,1,10873,111,116,59,1,8918,114,101,101,59,1,8907,109,101,115,59,1,8905,97,114,114,59,1,10614,117,101,115,116,59,1,10875,4,2,80,105,12711,12716,97,114,59,1,10646,4,3,59,101,102,12724,12726,12729,1,9667,59,1,8884,59,1,9666,114,4,2,100,117,12739,12746,115,104,97,114,59,1,10570,104,97,114,59,1,10598,4,2,101,110,12758,12768,114,116,110,101,113,113,59,3,8808,65024,69,59,3,8808,65024,4,14,68,97,99,100,101,102,104,105,108,110,111,112,115,117,12803,12809,12893,12908,12914,12928,12933,12937,13011,13025,13032,13049,13052,13069,68,111,116,59,1,8762,4,4,99,108,112,114,12819,12827,12849,12887,114,5,175,1,59,12825,1,175,4,2,101,116,12833,12836,59,1,9794,4,2,59,101,12842,12844,1,10016,115,101,59,1,10016,4,2,59,115,12855,12857,1,8614,116,111,4,4,59,100,108,117,12869,12871,12877,12883,1,8614,111,119,110,59,1,8615,101,102,116,59,1,8612,112,59,1,8613,107,101,114,59,1,9646,4,2,111,121,12899,12905,109,109,97,59,1,10793,59,1,1084,97,115,104,59,1,8212,97,115,117,114,101,100,97,110,103,108,101,59,1,8737,114,59,3,55349,56618,111,59,1,8487,4,3,99,100,110,12945,12954,12985,114,111,5,181,1,59,12952,1,181,4,4,59,97,99,100,12964,12966,12971,12976,1,8739,115,116,59,1,42,105,114,59,1,10992,111,116,5,183,1,59,12983,1,183,117,115,4,3,59,98,100,12995,12997,13e3,1,8722,59,1,8863,4,2,59,117,13006,13008,1,8760,59,1,10794,4,2,99,100,13017,13021,112,59,1,10971,114,59,1,8230,112,108,117,115,59,1,8723,4,2,100,112,13038,13044,101,108,115,59,1,8871,102,59,3,55349,56670,59,1,8723,4,2,99,116,13058,13063,114,59,3,55349,56514,112,111,115,59,1,8766,4,3,59,108,109,13077,13079,13087,1,956,116,105,109,97,112,59,1,8888,97,112,59,1,8888,4,24,71,76,82,86,97,98,99,100,101,102,103,104,105,106,108,109,111,112,114,115,116,117,118,119,13142,13165,13217,13229,13247,13330,13359,13414,13420,13508,13513,13579,13602,13626,13631,13762,13767,13855,13936,13995,14214,14285,14312,14432,4,2,103,116,13148,13152,59,3,8921,824,4,2,59,118,13158,13161,3,8811,8402,59,3,8811,824,4,3,101,108,116,13173,13200,13204,102,116,4,2,97,114,13181,13188,114,114,111,119,59,1,8653,105,103,104,116,97,114,114,111,119,59,1,8654,59,3,8920,824,4,2,59,118,13210,13213,3,8810,8402,59,3,8810,824,105,103,104,116,97,114,114,111,119,59,1,8655,4,2,68,100,13235,13241,97,115,104,59,1,8879,97,115,104,59,1,8878,4,5,98,99,110,112,116,13259,13264,13270,13275,13308,108,97,59,1,8711,117,116,101,59,1,324,103,59,3,8736,8402,4,5,59,69,105,111,112,13287,13289,13293,13298,13302,1,8777,59,3,10864,824,100,59,3,8779,824,115,59,1,329,114,111,120,59,1,8777,117,114,4,2,59,97,13316,13318,1,9838,108,4,2,59,115,13325,13327,1,9838,59,1,8469,4,2,115,117,13336,13344,112,5,160,1,59,13342,1,160,109,112,4,2,59,101,13352,13355,3,8782,824,59,3,8783,824,4,5,97,101,111,117,121,13371,13385,13391,13407,13411,4,2,112,114,13377,13380,59,1,10819,111,110,59,1,328,100,105,108,59,1,326,110,103,4,2,59,100,13399,13401,1,8775,111,116,59,3,10861,824,112,59,1,10818,59,1,1085,97,115,104,59,1,8211,4,7,59,65,97,100,113,115,120,13436,13438,13443,13466,13472,13478,13494,1,8800,114,114,59,1,8663,114,4,2,104,114,13450,13454,107,59,1,10532,4,2,59,111,13460,13462,1,8599,119,59,1,8599,111,116,59,3,8784,824,117,105,118,59,1,8802,4,2,101,105,13484,13489,97,114,59,1,10536,109,59,3,8770,824,105,115,116,4,2,59,115,13503,13505,1,8708,59,1,8708,114,59,3,55349,56619,4,4,69,101,115,116,13523,13527,13563,13568,59,3,8807,824,4,3,59,113,115,13535,13537,13559,1,8817,4,3,59,113,115,13545,13547,13551,1,8817,59,3,8807,824,108,97,110,116,59,3,10878,824,59,3,10878,824,105,109,59,1,8821,4,2,59,114,13574,13576,1,8815,59,1,8815,4,3,65,97,112,13587,13592,13597,114,114,59,1,8654,114,114,59,1,8622,97,114,59,1,10994,4,3,59,115,118,13610,13612,13623,1,8715,4,2,59,100,13618,13620,1,8956,59,1,8954,59,1,8715,99,121,59,1,1114,4,7,65,69,97,100,101,115,116,13647,13652,13656,13661,13665,13737,13742,114,114,59,1,8653,59,3,8806,824,114,114,59,1,8602,114,59,1,8229,4,4,59,102,113,115,13675,13677,13703,13725,1,8816,116,4,2,97,114,13684,13691,114,114,111,119,59,1,8602,105,103,104,116,97,114,114,111,119,59,1,8622,4,3,59,113,115,13711,13713,13717,1,8816,59,3,8806,824,108,97,110,116,59,3,10877,824,4,2,59,115,13731,13734,3,10877,824,59,1,8814,105,109,59,1,8820,4,2,59,114,13748,13750,1,8814,105,4,2,59,101,13757,13759,1,8938,59,1,8940,105,100,59,1,8740,4,2,112,116,13773,13778,102,59,3,55349,56671,5,172,3,59,105,110,13787,13789,13829,1,172,110,4,4,59,69,100,118,13800,13802,13806,13812,1,8713,59,3,8953,824,111,116,59,3,8949,824,4,3,97,98,99,13820,13823,13826,59,1,8713,59,1,8951,59,1,8950,105,4,2,59,118,13836,13838,1,8716,4,3,97,98,99,13846,13849,13852,59,1,8716,59,1,8958,59,1,8957,4,3,97,111,114,13863,13892,13899,114,4,4,59,97,115,116,13874,13876,13883,13888,1,8742,108,108,101,108,59,1,8742,108,59,3,11005,8421,59,3,8706,824,108,105,110,116,59,1,10772,4,3,59,99,101,13907,13909,13914,1,8832,117,101,59,1,8928,4,2,59,99,13920,13923,3,10927,824,4,2,59,101,13929,13931,1,8832,113,59,3,10927,824,4,4,65,97,105,116,13946,13951,13971,13982,114,114,59,1,8655,114,114,4,3,59,99,119,13961,13963,13967,1,8603,59,3,10547,824,59,3,8605,824,103,104,116,97,114,114,111,119,59,1,8603,114,105,4,2,59,101,13990,13992,1,8939,59,1,8941,4,7,99,104,105,109,112,113,117,14011,14036,14060,14080,14085,14090,14106,4,4,59,99,101,114,14021,14023,14028,14032,1,8833,117,101,59,1,8929,59,3,10928,824,59,3,55349,56515,111,114,116,4,2,109,112,14045,14050,105,100,59,1,8740,97,114,97,108,108,101,108,59,1,8742,109,4,2,59,101,14067,14069,1,8769,4,2,59,113,14075,14077,1,8772,59,1,8772,105,100,59,1,8740,97,114,59,1,8742,115,117,4,2,98,112,14098,14102,101,59,1,8930,101,59,1,8931,4,3,98,99,112,14114,14157,14171,4,4,59,69,101,115,14124,14126,14130,14133,1,8836,59,3,10949,824,59,1,8840,101,116,4,2,59,101,14141,14144,3,8834,8402,113,4,2,59,113,14151,14153,1,8840,59,3,10949,824,99,4,2,59,101,14164,14166,1,8833,113,59,3,10928,824,4,4,59,69,101,115,14181,14183,14187,14190,1,8837,59,3,10950,824,59,1,8841,101,116,4,2,59,101,14198,14201,3,8835,8402,113,4,2,59,113,14208,14210,1,8841,59,3,10950,824,4,4,103,105,108,114,14224,14228,14238,14242,108,59,1,8825,108,100,101,5,241,1,59,14236,1,241,103,59,1,8824,105,97,110,103,108,101,4,2,108,114,14254,14269,101,102,116,4,2,59,101,14263,14265,1,8938,113,59,1,8940,105,103,104,116,4,2,59,101,14279,14281,1,8939,113,59,1,8941,4,2,59,109,14291,14293,1,957,4,3,59,101,115,14301,14303,14308,1,35,114,111,59,1,8470,112,59,1,8199,4,9,68,72,97,100,103,105,108,114,115,14332,14338,14344,14349,14355,14369,14376,14408,14426,97,115,104,59,1,8877,97,114,114,59,1,10500,112,59,3,8781,8402,97,115,104,59,1,8876,4,2,101,116,14361,14365,59,3,8805,8402,59,3,62,8402,110,102,105,110,59,1,10718,4,3,65,101,116,14384,14389,14393,114,114,59,1,10498,59,3,8804,8402,4,2,59,114,14399,14402,3,60,8402,105,101,59,3,8884,8402,4,2,65,116,14414,14419,114,114,59,1,10499,114,105,101,59,3,8885,8402,105,109,59,3,8764,8402,4,3,65,97,110,14440,14445,14468,114,114,59,1,8662,114,4,2,104,114,14452,14456,107,59,1,10531,4,2,59,111,14462,14464,1,8598,119,59,1,8598,101,97,114,59,1,10535,4,18,83,97,99,100,101,102,103,104,105,108,109,111,112,114,115,116,117,118,14512,14515,14535,14560,14597,14603,14618,14643,14657,14662,14701,14741,14747,14769,14851,14877,14907,14916,59,1,9416,4,2,99,115,14521,14531,117,116,101,5,243,1,59,14529,1,243,116,59,1,8859,4,2,105,121,14541,14557,114,4,2,59,99,14548,14550,1,8858,5,244,1,59,14555,1,244,59,1,1086,4,5,97,98,105,111,115,14572,14577,14583,14587,14591,115,104,59,1,8861,108,97,99,59,1,337,118,59,1,10808,116,59,1,8857,111,108,100,59,1,10684,108,105,103,59,1,339,4,2,99,114,14609,14614,105,114,59,1,10687,59,3,55349,56620,4,3,111,114,116,14626,14630,14640,110,59,1,731,97,118,101,5,242,1,59,14638,1,242,59,1,10689,4,2,98,109,14649,14654,97,114,59,1,10677,59,1,937,110,116,59,1,8750,4,4,97,99,105,116,14672,14677,14693,14698,114,114,59,1,8634,4,2,105,114,14683,14687,114,59,1,10686,111,115,115,59,1,10683,110,101,59,1,8254,59,1,10688,4,3,97,101,105,14709,14714,14719,99,114,59,1,333,103,97,59,1,969,4,3,99,100,110,14727,14733,14736,114,111,110,59,1,959,59,1,10678,117,115,59,1,8854,112,102,59,3,55349,56672,4,3,97,101,108,14755,14759,14764,114,59,1,10679,114,112,59,1,10681,117,115,59,1,8853,4,7,59,97,100,105,111,115,118,14785,14787,14792,14831,14837,14841,14848,1,8744,114,114,59,1,8635,4,4,59,101,102,109,14802,14804,14817,14824,1,10845,114,4,2,59,111,14811,14813,1,8500,102,59,1,8500,5,170,1,59,14822,1,170,5,186,1,59,14829,1,186,103,111,102,59,1,8886,114,59,1,10838,108,111,112,101,59,1,10839,59,1,10843,4,3,99,108,111,14859,14863,14873,114,59,1,8500,97,115,104,5,248,1,59,14871,1,248,108,59,1,8856,105,4,2,108,109,14884,14893,100,101,5,245,1,59,14891,1,245,101,115,4,2,59,97,14901,14903,1,8855,115,59,1,10806,109,108,5,246,1,59,14914,1,246,98,97,114,59,1,9021,4,12,97,99,101,102,104,105,108,109,111,114,115,117,14948,14992,14996,15033,15038,15068,15090,15189,15192,15222,15427,15441,114,4,4,59,97,115,116,14959,14961,14976,14989,1,8741,5,182,2,59,108,14968,14970,1,182,108,101,108,59,1,8741,4,2,105,108,14982,14986,109,59,1,10995,59,1,11005,59,1,8706,121,59,1,1087,114,4,5,99,105,109,112,116,15009,15014,15019,15024,15027,110,116,59,1,37,111,100,59,1,46,105,108,59,1,8240,59,1,8869,101,110,107,59,1,8241,114,59,3,55349,56621,4,3,105,109,111,15046,15057,15063,4,2,59,118,15052,15054,1,966,59,1,981,109,97,116,59,1,8499,110,101,59,1,9742,4,3,59,116,118,15076,15078,15087,1,960,99,104,102,111,114,107,59,1,8916,59,1,982,4,2,97,117,15096,15119,110,4,2,99,107,15103,15115,107,4,2,59,104,15110,15112,1,8463,59,1,8462,118,59,1,8463,115,4,9,59,97,98,99,100,101,109,115,116,15140,15142,15148,15151,15156,15168,15171,15179,15184,1,43,99,105,114,59,1,10787,59,1,8862,105,114,59,1,10786,4,2,111,117,15162,15165,59,1,8724,59,1,10789,59,1,10866,110,5,177,1,59,15177,1,177,105,109,59,1,10790,119,111,59,1,10791,59,1,177,4,3,105,112,117,15200,15208,15213,110,116,105,110,116,59,1,10773,102,59,3,55349,56673,110,100,5,163,1,59,15220,1,163,4,10,59,69,97,99,101,105,110,111,115,117,15244,15246,15249,15253,15258,15334,15347,15367,15416,15421,1,8826,59,1,10931,112,59,1,10935,117,101,59,1,8828,4,2,59,99,15264,15266,1,10927,4,6,59,97,99,101,110,115,15280,15282,15290,15299,15303,15329,1,8826,112,112,114,111,120,59,1,10935,117,114,108,121,101,113,59,1,8828,113,59,1,10927,4,3,97,101,115,15311,15319,15324,112,112,114,111,120,59,1,10937,113,113,59,1,10933,105,109,59,1,8936,105,109,59,1,8830,109,101,4,2,59,115,15342,15344,1,8242,59,1,8473,4,3,69,97,115,15355,15358,15362,59,1,10933,112,59,1,10937,105,109,59,1,8936,4,3,100,102,112,15375,15378,15404,59,1,8719,4,3,97,108,115,15386,15392,15398,108,97,114,59,1,9006,105,110,101,59,1,8978,117,114,102,59,1,8979,4,2,59,116,15410,15412,1,8733,111,59,1,8733,105,109,59,1,8830,114,101,108,59,1,8880,4,2,99,105,15433,15438,114,59,3,55349,56517,59,1,968,110,99,115,112,59,1,8200,4,6,102,105,111,112,115,117,15462,15467,15472,15478,15485,15491,114,59,3,55349,56622,110,116,59,1,10764,112,102,59,3,55349,56674,114,105,109,101,59,1,8279,99,114,59,3,55349,56518,4,3,97,101,111,15499,15520,15534,116,4,2,101,105,15506,15515,114,110,105,111,110,115,59,1,8461,110,116,59,1,10774,115,116,4,2,59,101,15528,15530,1,63,113,59,1,8799,116,5,34,1,59,15540,1,34,4,21,65,66,72,97,98,99,100,101,102,104,105,108,109,110,111,112,114,115,116,117,120,15586,15609,15615,15620,15796,15855,15893,15931,15977,16001,16039,16183,16204,16222,16228,16285,16312,16318,16363,16408,16416,4,3,97,114,116,15594,15599,15603,114,114,59,1,8667,114,59,1,8658,97,105,108,59,1,10524,97,114,114,59,1,10511,97,114,59,1,10596,4,7,99,100,101,110,113,114,116,15636,15651,15656,15664,15687,15696,15770,4,2,101,117,15642,15646,59,3,8765,817,116,101,59,1,341,105,99,59,1,8730,109,112,116,121,118,59,1,10675,103,4,4,59,100,101,108,15675,15677,15680,15683,1,10217,59,1,10642,59,1,10661,101,59,1,10217,117,111,5,187,1,59,15694,1,187,114,4,11,59,97,98,99,102,104,108,112,115,116,119,15721,15723,15727,15739,15742,15746,15750,15754,15758,15763,15767,1,8594,112,59,1,10613,4,2,59,102,15733,15735,1,8677,115,59,1,10528,59,1,10547,115,59,1,10526,107,59,1,8618,112,59,1,8620,108,59,1,10565,105,109,59,1,10612,108,59,1,8611,59,1,8605,4,2,97,105,15776,15781,105,108,59,1,10522,111,4,2,59,110,15788,15790,1,8758,97,108,115,59,1,8474,4,3,97,98,114,15804,15809,15814,114,114,59,1,10509,114,107,59,1,10099,4,2,97,107,15820,15833,99,4,2,101,107,15827,15830,59,1,125,59,1,93,4,2,101,115,15839,15842,59,1,10636,108,4,2,100,117,15849,15852,59,1,10638,59,1,10640,4,4,97,101,117,121,15865,15871,15886,15890,114,111,110,59,1,345,4,2,100,105,15877,15882,105,108,59,1,343,108,59,1,8969,98,59,1,125,59,1,1088,4,4,99,108,113,115,15903,15907,15914,15927,97,59,1,10551,100,104,97,114,59,1,10601,117,111,4,2,59,114,15922,15924,1,8221,59,1,8221,104,59,1,8627,4,3,97,99,103,15939,15966,15970,108,4,4,59,105,112,115,15950,15952,15957,15963,1,8476,110,101,59,1,8475,97,114,116,59,1,8476,59,1,8477,116,59,1,9645,5,174,1,59,15975,1,174,4,3,105,108,114,15985,15991,15997,115,104,116,59,1,10621,111,111,114,59,1,8971,59,3,55349,56623,4,2,97,111,16007,16028,114,4,2,100,117,16014,16017,59,1,8641,4,2,59,108,16023,16025,1,8640,59,1,10604,4,2,59,118,16034,16036,1,961,59,1,1009,4,3,103,110,115,16047,16167,16171,104,116,4,6,97,104,108,114,115,116,16063,16081,16103,16130,16143,16155,114,114,111,119,4,2,59,116,16073,16075,1,8594,97,105,108,59,1,8611,97,114,112,111,111,110,4,2,100,117,16093,16099,111,119,110,59,1,8641,112,59,1,8640,101,102,116,4,2,97,104,16112,16120,114,114,111,119,115,59,1,8644,97,114,112,111,111,110,115,59,1,8652,105,103,104,116,97,114,114,111,119,115,59,1,8649,113,117,105,103,97,114,114,111,119,59,1,8605,104,114,101,101,116,105,109,101,115,59,1,8908,103,59,1,730,105,110,103,100,111,116,115,101,113,59,1,8787,4,3,97,104,109,16191,16196,16201,114,114,59,1,8644,97,114,59,1,8652,59,1,8207,111,117,115,116,4,2,59,97,16214,16216,1,9137,99,104,101,59,1,9137,109,105,100,59,1,10990,4,4,97,98,112,116,16238,16252,16257,16278,4,2,110,114,16244,16248,103,59,1,10221,114,59,1,8702,114,107,59,1,10215,4,3,97,102,108,16265,16269,16273,114,59,1,10630,59,3,55349,56675,117,115,59,1,10798,105,109,101,115,59,1,10805,4,2,97,112,16291,16304,114,4,2,59,103,16298,16300,1,41,116,59,1,10644,111,108,105,110,116,59,1,10770,97,114,114,59,1,8649,4,4,97,99,104,113,16328,16334,16339,16342,113,117,111,59,1,8250,114,59,3,55349,56519,59,1,8625,4,2,98,117,16348,16351,59,1,93,111,4,2,59,114,16358,16360,1,8217,59,1,8217,4,3,104,105,114,16371,16377,16383,114,101,101,59,1,8908,109,101,115,59,1,8906,105,4,4,59,101,102,108,16394,16396,16399,16402,1,9657,59,1,8885,59,1,9656,116,114,105,59,1,10702,108,117,104,97,114,59,1,10600,59,1,8478,4,19,97,98,99,100,101,102,104,105,108,109,111,112,113,114,115,116,117,119,122,16459,16466,16472,16572,16590,16672,16687,16746,16844,16850,16924,16963,16988,17115,17121,17154,17206,17614,17656,99,117,116,101,59,1,347,113,117,111,59,1,8218,4,10,59,69,97,99,101,105,110,112,115,121,16494,16496,16499,16513,16518,16531,16536,16556,16564,16569,1,8827,59,1,10932,4,2,112,114,16505,16508,59,1,10936,111,110,59,1,353,117,101,59,1,8829,4,2,59,100,16524,16526,1,10928,105,108,59,1,351,114,99,59,1,349,4,3,69,97,115,16544,16547,16551,59,1,10934,112,59,1,10938,105,109,59,1,8937,111,108,105,110,116,59,1,10771,105,109,59,1,8831,59,1,1089,111,116,4,3,59,98,101,16582,16584,16587,1,8901,59,1,8865,59,1,10854,4,7,65,97,99,109,115,116,120,16606,16611,16634,16642,16646,16652,16668,114,114,59,1,8664,114,4,2,104,114,16618,16622,107,59,1,10533,4,2,59,111,16628,16630,1,8600,119,59,1,8600,116,5,167,1,59,16640,1,167,105,59,1,59,119,97,114,59,1,10537,109,4,2,105,110,16659,16665,110,117,115,59,1,8726,59,1,8726,116,59,1,10038,114,4,2,59,111,16679,16682,3,55349,56624,119,110,59,1,8994,4,4,97,99,111,121,16697,16702,16716,16739,114,112,59,1,9839,4,2,104,121,16708,16713,99,121,59,1,1097,59,1,1096,114,116,4,2,109,112,16724,16729,105,100,59,1,8739,97,114,97,108,108,101,108,59,1,8741,5,173,1,59,16744,1,173,4,2,103,109,16752,16770,109,97,4,3,59,102,118,16762,16764,16767,1,963,59,1,962,59,1,962,4,8,59,100,101,103,108,110,112,114,16788,16790,16795,16806,16817,16828,16832,16838,1,8764,111,116,59,1,10858,4,2,59,113,16801,16803,1,8771,59,1,8771,4,2,59,69,16812,16814,1,10910,59,1,10912,4,2,59,69,16823,16825,1,10909,59,1,10911,101,59,1,8774,108,117,115,59,1,10788,97,114,114,59,1,10610,97,114,114,59,1,8592,4,4,97,101,105,116,16860,16883,16891,16904,4,2,108,115,16866,16878,108,115,101,116,109,105,110,117,115,59,1,8726,104,112,59,1,10803,112,97,114,115,108,59,1,10724,4,2,100,108,16897,16900,59,1,8739,101,59,1,8995,4,2,59,101,16910,16912,1,10922,4,2,59,115,16918,16920,1,10924,59,3,10924,65024,4,3,102,108,112,16932,16938,16958,116,99,121,59,1,1100,4,2,59,98,16944,16946,1,47,4,2,59,97,16952,16954,1,10692,114,59,1,9023,102,59,3,55349,56676,97,4,2,100,114,16970,16985,101,115,4,2,59,117,16978,16980,1,9824,105,116,59,1,9824,59,1,8741,4,3,99,115,117,16996,17028,17089,4,2,97,117,17002,17015,112,4,2,59,115,17009,17011,1,8851,59,3,8851,65024,112,4,2,59,115,17022,17024,1,8852,59,3,8852,65024,117,4,2,98,112,17035,17062,4,3,59,101,115,17043,17045,17048,1,8847,59,1,8849,101,116,4,2,59,101,17056,17058,1,8847,113,59,1,8849,4,3,59,101,115,17070,17072,17075,1,8848,59,1,8850,101,116,4,2,59,101,17083,17085,1,8848,113,59,1,8850,4,3,59,97,102,17097,17099,17112,1,9633,114,4,2,101,102,17106,17109,59,1,9633,59,1,9642,59,1,9642,97,114,114,59,1,8594,4,4,99,101,109,116,17131,17136,17142,17148,114,59,3,55349,56520,116,109,110,59,1,8726,105,108,101,59,1,8995,97,114,102,59,1,8902,4,2,97,114,17160,17172,114,4,2,59,102,17167,17169,1,9734,59,1,9733,4,2,97,110,17178,17202,105,103,104,116,4,2,101,112,17188,17197,112,115,105,108,111,110,59,1,1013,104,105,59,1,981,115,59,1,175,4,5,98,99,109,110,112,17218,17351,17420,17423,17427,4,9,59,69,100,101,109,110,112,114,115,17238,17240,17243,17248,17261,17267,17279,17285,17291,1,8834,59,1,10949,111,116,59,1,10941,4,2,59,100,17254,17256,1,8838,111,116,59,1,10947,117,108,116,59,1,10945,4,2,69,101,17273,17276,59,1,10955,59,1,8842,108,117,115,59,1,10943,97,114,114,59,1,10617,4,3,101,105,117,17299,17335,17339,116,4,3,59,101,110,17308,17310,17322,1,8834,113,4,2,59,113,17317,17319,1,8838,59,1,10949,101,113,4,2,59,113,17330,17332,1,8842,59,1,10955,109,59,1,10951,4,2,98,112,17345,17348,59,1,10965,59,1,10963,99,4,6,59,97,99,101,110,115,17366,17368,17376,17385,17389,17415,1,8827,112,112,114,111,120,59,1,10936,117,114,108,121,101,113,59,1,8829,113,59,1,10928,4,3,97,101,115,17397,17405,17410,112,112,114,111,120,59,1,10938,113,113,59,1,10934,105,109,59,1,8937,105,109,59,1,8831,59,1,8721,103,59,1,9834,4,13,49,50,51,59,69,100,101,104,108,109,110,112,115,17455,17462,17469,17476,17478,17481,17496,17509,17524,17530,17536,17548,17554,5,185,1,59,17460,1,185,5,178,1,59,17467,1,178,5,179,1,59,17474,1,179,1,8835,59,1,10950,4,2,111,115,17487,17491,116,59,1,10942,117,98,59,1,10968,4,2,59,100,17502,17504,1,8839,111,116,59,1,10948,115,4,2,111,117,17516,17520,108,59,1,10185,98,59,1,10967,97,114,114,59,1,10619,117,108,116,59,1,10946,4,2,69,101,17542,17545,59,1,10956,59,1,8843,108,117,115,59,1,10944,4,3,101,105,117,17562,17598,17602,116,4,3,59,101,110,17571,17573,17585,1,8835,113,4,2,59,113,17580,17582,1,8839,59,1,10950,101,113,4,2,59,113,17593,17595,1,8843,59,1,10956,109,59,1,10952,4,2,98,112,17608,17611,59,1,10964,59,1,10966,4,3,65,97,110,17622,17627,17650,114,114,59,1,8665,114,4,2,104,114,17634,17638,107,59,1,10534,4,2,59,111,17644,17646,1,8601,119,59,1,8601,119,97,114,59,1,10538,108,105,103,5,223,1,59,17664,1,223,4,13,97,98,99,100,101,102,104,105,111,112,114,115,119,17694,17709,17714,17737,17742,17749,17754,17860,17905,17957,17964,18090,18122,4,2,114,117,17700,17706,103,101,116,59,1,8982,59,1,964,114,107,59,1,9140,4,3,97,101,121,17722,17728,17734,114,111,110,59,1,357,100,105,108,59,1,355,59,1,1090,111,116,59,1,8411,108,114,101,99,59,1,8981,114,59,3,55349,56625,4,4,101,105,107,111,17764,17805,17836,17851,4,2,114,116,17770,17786,101,4,2,52,102,17777,17780,59,1,8756,111,114,101,59,1,8756,97,4,3,59,115,118,17795,17797,17802,1,952,121,109,59,1,977,59,1,977,4,2,99,110,17811,17831,107,4,2,97,115,17818,17826,112,112,114,111,120,59,1,8776,105,109,59,1,8764,115,112,59,1,8201,4,2,97,115,17842,17846,112,59,1,8776,105,109,59,1,8764,114,110,5,254,1,59,17858,1,254,4,3,108,109,110,17868,17873,17901,100,101,59,1,732,101,115,5,215,3,59,98,100,17884,17886,17898,1,215,4,2,59,97,17892,17894,1,8864,114,59,1,10801,59,1,10800,116,59,1,8749,4,3,101,112,115,17913,17917,17953,97,59,1,10536,4,4,59,98,99,102,17927,17929,17934,17939,1,8868,111,116,59,1,9014,105,114,59,1,10993,4,2,59,111,17945,17948,3,55349,56677,114,107,59,1,10970,97,59,1,10537,114,105,109,101,59,1,8244,4,3,97,105,112,17972,17977,18082,100,101,59,1,8482,4,7,97,100,101,109,112,115,116,17993,18051,18056,18059,18066,18072,18076,110,103,108,101,4,5,59,100,108,113,114,18009,18011,18017,18032,18035,1,9653,111,119,110,59,1,9663,101,102,116,4,2,59,101,18026,18028,1,9667,113,59,1,8884,59,1,8796,105,103,104,116,4,2,59,101,18045,18047,1,9657,113,59,1,8885,111,116,59,1,9708,59,1,8796,105,110,117,115,59,1,10810,108,117,115,59,1,10809,98,59,1,10701,105,109,101,59,1,10811,101,122,105,117,109,59,1,9186,4,3,99,104,116,18098,18111,18116,4,2,114,121,18104,18108,59,3,55349,56521,59,1,1094,99,121,59,1,1115,114,111,107,59,1,359,4,2,105,111,18128,18133,120,116,59,1,8812,104,101,97,100,4,2,108,114,18143,18154,101,102,116,97,114,114,111,119,59,1,8606,105,103,104,116,97,114,114,111,119,59,1,8608,4,18,65,72,97,98,99,100,102,103,104,108,109,111,112,114,115,116,117,119,18204,18209,18214,18234,18250,18268,18292,18308,18319,18343,18379,18397,18413,18504,18547,18553,18584,18603,114,114,59,1,8657,97,114,59,1,10595,4,2,99,114,18220,18230,117,116,101,5,250,1,59,18228,1,250,114,59,1,8593,114,4,2,99,101,18241,18245,121,59,1,1118,118,101,59,1,365,4,2,105,121,18256,18265,114,99,5,251,1,59,18263,1,251,59,1,1091,4,3,97,98,104,18276,18281,18287,114,114,59,1,8645,108,97,99,59,1,369,97,114,59,1,10606,4,2,105,114,18298,18304,115,104,116,59,1,10622,59,3,55349,56626,114,97,118,101,5,249,1,59,18317,1,249,4,2,97,98,18325,18338,114,4,2,108,114,18332,18335,59,1,8639,59,1,8638,108,107,59,1,9600,4,2,99,116,18349,18374,4,2,111,114,18355,18369,114,110,4,2,59,101,18363,18365,1,8988,114,59,1,8988,111,112,59,1,8975,114,105,59,1,9720,4,2,97,108,18385,18390,99,114,59,1,363,5,168,1,59,18395,1,168,4,2,103,112,18403,18408,111,110,59,1,371,102,59,3,55349,56678,4,6,97,100,104,108,115,117,18427,18434,18445,18470,18475,18494,114,114,111,119,59,1,8593,111,119,110,97,114,114,111,119,59,1,8597,97,114,112,111,111,110,4,2,108,114,18457,18463,101,102,116,59,1,8639,105,103,104,116,59,1,8638,117,115,59,1,8846,105,4,3,59,104,108,18484,18486,18489,1,965,59,1,978,111,110,59,1,965,112,97,114,114,111,119,115,59,1,8648,4,3,99,105,116,18512,18537,18542,4,2,111,114,18518,18532,114,110,4,2,59,101,18526,18528,1,8989,114,59,1,8989,111,112,59,1,8974,110,103,59,1,367,114,105,59,1,9721,99,114,59,3,55349,56522,4,3,100,105,114,18561,18566,18572,111,116,59,1,8944,108,100,101,59,1,361,105,4,2,59,102,18579,18581,1,9653,59,1,9652,4,2,97,109,18590,18595,114,114,59,1,8648,108,5,252,1,59,18601,1,252,97,110,103,108,101,59,1,10663,4,15,65,66,68,97,99,100,101,102,108,110,111,112,114,115,122,18643,18648,18661,18667,18847,18851,18857,18904,18909,18915,18931,18937,18943,18949,18996,114,114,59,1,8661,97,114,4,2,59,118,18656,18658,1,10984,59,1,10985,97,115,104,59,1,8872,4,2,110,114,18673,18679,103,114,116,59,1,10652,4,7,101,107,110,112,114,115,116,18695,18704,18711,18720,18742,18754,18810,112,115,105,108,111,110,59,1,1013,97,112,112,97,59,1,1008,111,116,104,105,110,103,59,1,8709,4,3,104,105,114,18728,18732,18735,105,59,1,981,59,1,982,111,112,116,111,59,1,8733,4,2,59,104,18748,18750,1,8597,111,59,1,1009,4,2,105,117,18760,18766,103,109,97,59,1,962,4,2,98,112,18772,18791,115,101,116,110,101,113,4,2,59,113,18784,18787,3,8842,65024,59,3,10955,65024,115,101,116,110,101,113,4,2,59,113,18803,18806,3,8843,65024,59,3,10956,65024,4,2,104,114,18816,18822,101,116,97,59,1,977,105,97,110,103,108,101,4,2,108,114,18834,18840,101,102,116,59,1,8882,105,103,104,116,59,1,8883,121,59,1,1074,97,115,104,59,1,8866,4,3,101,108,114,18865,18884,18890,4,3,59,98,101,18873,18875,18880,1,8744,97,114,59,1,8891,113,59,1,8794,108,105,112,59,1,8942,4,2,98,116,18896,18901,97,114,59,1,124,59,1,124,114,59,3,55349,56627,116,114,105,59,1,8882,115,117,4,2,98,112,18923,18927,59,3,8834,8402,59,3,8835,8402,112,102,59,3,55349,56679,114,111,112,59,1,8733,116,114,105,59,1,8883,4,2,99,117,18955,18960,114,59,3,55349,56523,4,2,98,112,18966,18981,110,4,2,69,101,18973,18977,59,3,10955,65024,59,3,8842,65024,110,4,2,69,101,18988,18992,59,3,10956,65024,59,3,8843,65024,105,103,122,97,103,59,1,10650,4,7,99,101,102,111,112,114,115,19020,19026,19061,19066,19072,19075,19089,105,114,99,59,1,373,4,2,100,105,19032,19055,4,2,98,103,19038,19043,97,114,59,1,10847,101,4,2,59,113,19050,19052,1,8743,59,1,8793,101,114,112,59,1,8472,114,59,3,55349,56628,112,102,59,3,55349,56680,59,1,8472,4,2,59,101,19081,19083,1,8768,97,116,104,59,1,8768,99,114,59,3,55349,56524,4,14,99,100,102,104,105,108,109,110,111,114,115,117,118,119,19125,19146,19152,19157,19173,19176,19192,19197,19202,19236,19252,19269,19286,19291,4,3,97,105,117,19133,19137,19142,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,116,114,105,59,1,9661,114,59,3,55349,56629,4,2,65,97,19163,19168,114,114,59,1,10234,114,114,59,1,10231,59,1,958,4,2,65,97,19182,19187,114,114,59,1,10232,114,114,59,1,10229,97,112,59,1,10236,105,115,59,1,8955,4,3,100,112,116,19210,19215,19230,111,116,59,1,10752,4,2,102,108,19221,19225,59,3,55349,56681,117,115,59,1,10753,105,109,101,59,1,10754,4,2,65,97,19242,19247,114,114,59,1,10233,114,114,59,1,10230,4,2,99,113,19258,19263,114,59,3,55349,56525,99,117,112,59,1,10758,4,2,112,116,19275,19281,108,117,115,59,1,10756,114,105,59,1,9651,101,101,59,1,8897,101,100,103,101,59,1,8896,4,8,97,99,101,102,105,111,115,117,19316,19335,19349,19357,19362,19367,19373,19379,99,4,2,117,121,19323,19332,116,101,5,253,1,59,19330,1,253,59,1,1103,4,2,105,121,19341,19346,114,99,59,1,375,59,1,1099,110,5,165,1,59,19355,1,165,114,59,3,55349,56630,99,121,59,1,1111,112,102,59,3,55349,56682,99,114,59,3,55349,56526,4,2,99,109,19385,19389,121,59,1,1102,108,5,255,1,59,19395,1,255,4,10,97,99,100,101,102,104,105,111,115,119,19419,19426,19441,19446,19462,19467,19472,19480,19486,19492,99,117,116,101,59,1,378,4,2,97,121,19432,19438,114,111,110,59,1,382,59,1,1079,111,116,59,1,380,4,2,101,116,19452,19458,116,114,102,59,1,8488,97,59,1,950,114,59,3,55349,56631,99,121,59,1,1078,103,114,97,114,114,59,1,8669,112,102,59,3,55349,56683,99,114,59,3,55349,56527,4,2,106,110,19498,19501,59,1,8205,106,59,1,8204]);const Oe=s,Se=r,Ce={128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},de="DATA_STATE";function Re(e){return e===Oe.SPACE||e===Oe.LINE_FEED||e===Oe.TABULATION||e===Oe.FORM_FEED}function Ie(e){return e>=Oe.DIGIT_0&&e<=Oe.DIGIT_9}function fe(e){return e>=Oe.LATIN_CAPITAL_A&&e<=Oe.LATIN_CAPITAL_Z}function Me(e){return e>=Oe.LATIN_SMALL_A&&e<=Oe.LATIN_SMALL_Z}function Le(e){return Me(e)||fe(e)}function De(e){return Le(e)||Ie(e)}function ge(e){return e>=Oe.LATIN_CAPITAL_A&&e<=Oe.LATIN_CAPITAL_F}function Pe(e){return e>=Oe.LATIN_SMALL_A&&e<=Oe.LATIN_SMALL_F}function ke(e){return e+32}function He(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(e>>>10&1023|55296)+String.fromCharCode(56320|1023&e))}function Ue(e){return String.fromCharCode(ke(e))}function Fe(e,t){const n=ue[++e];let s=++e,r=s+n-1;for(;s<=r;){const e=s+r>>>1,i=ue[e];if(i<t)s=e+1;else{if(!(i>t))return ue[e+n];r=e-1;}}return -1}class Be{constructor(){this.preprocessor=new pe,this.tokenQueue=[],this.allowCDATA=!1,this.state=de,this.returnState="",this.charRefCode=-1,this.tempBuff=[],this.lastStartTagName="",this.consumedAfterSnapshot=-1,this.active=!1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr=null;}_err(){}_errOnNextCodePoint(e){this._consume(),this._err(e),this._unconsume();}getNextToken(){for(;!this.tokenQueue.length&&this.active;){this.consumedAfterSnapshot=0;const e=this._consume();this._ensureHibernation()||this[this.state](e);}return this.tokenQueue.shift()}write(e,t){this.active=!0,this.preprocessor.write(e,t);}insertHtmlAtCurrentPos(e){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(e);}_ensureHibernation(){if(this.preprocessor.endOfChunkHit){for(;this.consumedAfterSnapshot>0;this.consumedAfterSnapshot--)this.preprocessor.retreat();return this.active=!1,this.tokenQueue.push({type:Be.HIBERNATION_TOKEN}),!0}return !1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_unconsume(){this.consumedAfterSnapshot--,this.preprocessor.retreat();}_reconsumeInState(e){this.state=e,this._unconsume();}_consumeSequenceIfMatch(e,t,n){let s=0,r=!0;const i=e.length;let T=0,o=t,E=void 0;for(;T<i;T++){if(T>0&&(o=this._consume(),s++),o===Oe.EOF){r=!1;break}if(E=e[T],o!==E&&(n||o!==ke(E))){r=!1;break}}if(!r)for(;s--;)this._unconsume();return r}_isTempBufferEqualToScriptString(){if(this.tempBuff.length!==Se.SCRIPT_STRING.length)return !1;for(let e=0;e<this.tempBuff.length;e++)if(this.tempBuff[e]!==Se.SCRIPT_STRING[e])return !1;return !0}_createStartTagToken(){this.currentToken={type:Be.START_TAG_TOKEN,tagName:"",selfClosing:!1,ackSelfClosing:!1,attrs:[]};}_createEndTagToken(){this.currentToken={type:Be.END_TAG_TOKEN,tagName:"",selfClosing:!1,attrs:[]};}_createCommentToken(){this.currentToken={type:Be.COMMENT_TOKEN,data:""};}_createDoctypeToken(e){this.currentToken={type:Be.DOCTYPE_TOKEN,name:e,forceQuirks:!1,publicId:null,systemId:null};}_createCharacterToken(e,t){this.currentCharacterToken={type:e,chars:t};}_createEOFToken(){this.currentToken={type:Be.EOF_TOKEN};}_createAttr(e){this.currentAttr={name:e,value:""};}_leaveAttrName(e){null===Be.getTokenAttr(this.currentToken,this.currentAttr.name)?this.currentToken.attrs.push(this.currentAttr):this._err(re),this.state=e;}_leaveAttrValue(e){this.state=e;}_emitCurrentToken(){this._emitCurrentCharacterToken();const e=this.currentToken;this.currentToken=null,e.type===Be.START_TAG_TOKEN?this.lastStartTagName=e.tagName:e.type===Be.END_TAG_TOKEN&&(e.attrs.length>0&&this._err(l),e.selfClosing&&this._err(m)),this.tokenQueue.push(e);}_emitCurrentCharacterToken(){this.currentCharacterToken&&(this.tokenQueue.push(this.currentCharacterToken),this.currentCharacterToken=null);}_emitEOFToken(){this._createEOFToken(),this._emitCurrentToken();}_appendCharToCurrentCharacterToken(e,t){this.currentCharacterToken&&this.currentCharacterToken.type!==e&&this._emitCurrentCharacterToken(),this.currentCharacterToken?this.currentCharacterToken.chars+=t:this._createCharacterToken(e,t);}_emitCodePoint(e){let t=Be.CHARACTER_TOKEN;Re(e)?t=Be.WHITESPACE_CHARACTER_TOKEN:e===Oe.NULL&&(t=Be.NULL_CHARACTER_TOKEN),this._appendCharToCurrentCharacterToken(t,He(e));}_emitSeveralCodePoints(e){for(let t=0;t<e.length;t++)this._emitCodePoint(e[t]);}_emitChars(e){this._appendCharToCurrentCharacterToken(Be.CHARACTER_TOKEN,e);}_matchNamedCharacterReference(e){let t=null,n=1,s=Fe(0,e);for(this.tempBuff.push(e);s>-1;){const e=ue[s],r=e<7;r&&1&e&&(t=2&e?[ue[++s],ue[++s]]:[ue[++s]],n=0);const i=this._consume();if(this.tempBuff.push(i),n++,i===Oe.EOF)break;s=r?4&e?Fe(s,i):-1:i===e?++s:-1;}for(;n--;)this.tempBuff.pop(),this._unconsume();return t}_isCharacterReferenceInAttribute(){return "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE"===this.returnState||"ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE"===this.returnState||"ATTRIBUTE_VALUE_UNQUOTED_STATE"===this.returnState}_isCharacterReferenceAttributeQuirk(e){if(!e&&this._isCharacterReferenceInAttribute()){const e=this._consume();return this._unconsume(),e===Oe.EQUALS_SIGN||De(e)}return !1}_flushCodePointsConsumedAsCharacterReference(){if(this._isCharacterReferenceInAttribute())for(let e=0;e<this.tempBuff.length;e++)this.currentAttr.value+=He(this.tempBuff[e]);else this._emitSeveralCodePoints(this.tempBuff);this.tempBuff=[];}[de](e){this.preprocessor.dropParsedChunk(),e===Oe.LESS_THAN_SIGN?this.state="TAG_OPEN_STATE":e===Oe.AMPERSAND?(this.returnState=de,this.state="CHARACTER_REFERENCE_STATE"):e===Oe.NULL?(this._err(p),this._emitCodePoint(e)):e===Oe.EOF?this._emitEOFToken():this._emitCodePoint(e);}RCDATA_STATE(e){this.preprocessor.dropParsedChunk(),e===Oe.AMPERSAND?(this.returnState="RCDATA_STATE",this.state="CHARACTER_REFERENCE_STATE"):e===Oe.LESS_THAN_SIGN?this.state="RCDATA_LESS_THAN_SIGN_STATE":e===Oe.NULL?(this._err(p),this._emitChars(n)):e===Oe.EOF?this._emitEOFToken():this._emitCodePoint(e);}RAWTEXT_STATE(e){this.preprocessor.dropParsedChunk(),e===Oe.LESS_THAN_SIGN?this.state="RAWTEXT_LESS_THAN_SIGN_STATE":e===Oe.NULL?(this._err(p),this._emitChars(n)):e===Oe.EOF?this._emitEOFToken():this._emitCodePoint(e);}SCRIPT_DATA_STATE(e){this.preprocessor.dropParsedChunk(),e===Oe.LESS_THAN_SIGN?this.state="SCRIPT_DATA_LESS_THAN_SIGN_STATE":e===Oe.NULL?(this._err(p),this._emitChars(n)):e===Oe.EOF?this._emitEOFToken():this._emitCodePoint(e);}PLAINTEXT_STATE(e){this.preprocessor.dropParsedChunk(),e===Oe.NULL?(this._err(p),this._emitChars(n)):e===Oe.EOF?this._emitEOFToken():this._emitCodePoint(e);}TAG_OPEN_STATE(e){e===Oe.EXCLAMATION_MARK?this.state="MARKUP_DECLARATION_OPEN_STATE":e===Oe.SOLIDUS?this.state="END_TAG_OPEN_STATE":Le(e)?(this._createStartTagToken(),this._reconsumeInState("TAG_NAME_STATE")):e===Oe.QUESTION_MARK?(this._err(u),this._createCommentToken(),this._reconsumeInState("BOGUS_COMMENT_STATE")):e===Oe.EOF?(this._err(L),this._emitChars("<"),this._emitEOFToken()):(this._err(O),this._emitChars("<"),this._reconsumeInState(de));}END_TAG_OPEN_STATE(e){Le(e)?(this._createEndTagToken(),this._reconsumeInState("TAG_NAME_STATE")):e===Oe.GREATER_THAN_SIGN?(this._err(C),this.state=de):e===Oe.EOF?(this._err(L),this._emitChars("</"),this._emitEOFToken()):(this._err(O),this._createCommentToken(),this._reconsumeInState("BOGUS_COMMENT_STATE"));}TAG_NAME_STATE(e){Re(e)?this.state="BEFORE_ATTRIBUTE_NAME_STATE":e===Oe.SOLIDUS?this.state="SELF_CLOSING_START_TAG_STATE":e===Oe.GREATER_THAN_SIGN?(this.state=de,this._emitCurrentToken()):fe(e)?this.currentToken.tagName+=Ue(e):e===Oe.NULL?(this._err(p),this.currentToken.tagName+=n):e===Oe.EOF?(this._err(D),this._emitEOFToken()):this.currentToken.tagName+=He(e);}RCDATA_LESS_THAN_SIGN_STATE(e){e===Oe.SOLIDUS?(this.tempBuff=[],this.state="RCDATA_END_TAG_OPEN_STATE"):(this._emitChars("<"),this._reconsumeInState("RCDATA_STATE"));}RCDATA_END_TAG_OPEN_STATE(e){Le(e)?(this._createEndTagToken(),this._reconsumeInState("RCDATA_END_TAG_NAME_STATE")):(this._emitChars("</"),this._reconsumeInState("RCDATA_STATE"));}RCDATA_END_TAG_NAME_STATE(e){if(fe(e))this.currentToken.tagName+=Ue(e),this.tempBuff.push(e);else if(Me(e))this.currentToken.tagName+=He(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(Re(e))return void(this.state="BEFORE_ATTRIBUTE_NAME_STATE");if(e===Oe.SOLIDUS)return void(this.state="SELF_CLOSING_START_TAG_STATE");if(e===Oe.GREATER_THAN_SIGN)return this.state=de,void this._emitCurrentToken()}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState("RCDATA_STATE");}}RAWTEXT_LESS_THAN_SIGN_STATE(e){e===Oe.SOLIDUS?(this.tempBuff=[],this.state="RAWTEXT_END_TAG_OPEN_STATE"):(this._emitChars("<"),this._reconsumeInState("RAWTEXT_STATE"));}RAWTEXT_END_TAG_OPEN_STATE(e){Le(e)?(this._createEndTagToken(),this._reconsumeInState("RAWTEXT_END_TAG_NAME_STATE")):(this._emitChars("</"),this._reconsumeInState("RAWTEXT_STATE"));}RAWTEXT_END_TAG_NAME_STATE(e){if(fe(e))this.currentToken.tagName+=Ue(e),this.tempBuff.push(e);else if(Me(e))this.currentToken.tagName+=He(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(Re(e))return void(this.state="BEFORE_ATTRIBUTE_NAME_STATE");if(e===Oe.SOLIDUS)return void(this.state="SELF_CLOSING_START_TAG_STATE");if(e===Oe.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=de)}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState("RAWTEXT_STATE");}}SCRIPT_DATA_LESS_THAN_SIGN_STATE(e){e===Oe.SOLIDUS?(this.tempBuff=[],this.state="SCRIPT_DATA_END_TAG_OPEN_STATE"):e===Oe.EXCLAMATION_MARK?(this.state="SCRIPT_DATA_ESCAPE_START_STATE",this._emitChars("<!")):(this._emitChars("<"),this._reconsumeInState("SCRIPT_DATA_STATE"));}SCRIPT_DATA_END_TAG_OPEN_STATE(e){Le(e)?(this._createEndTagToken(),this._reconsumeInState("SCRIPT_DATA_END_TAG_NAME_STATE")):(this._emitChars("</"),this._reconsumeInState("SCRIPT_DATA_STATE"));}SCRIPT_DATA_END_TAG_NAME_STATE(e){if(fe(e))this.currentToken.tagName+=Ue(e),this.tempBuff.push(e);else if(Me(e))this.currentToken.tagName+=He(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(Re(e))return void(this.state="BEFORE_ATTRIBUTE_NAME_STATE");if(e===Oe.SOLIDUS)return void(this.state="SELF_CLOSING_START_TAG_STATE");if(e===Oe.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=de)}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState("SCRIPT_DATA_STATE");}}SCRIPT_DATA_ESCAPE_START_STATE(e){e===Oe.HYPHEN_MINUS?(this.state="SCRIPT_DATA_ESCAPE_START_DASH_STATE",this._emitChars("-")):this._reconsumeInState("SCRIPT_DATA_STATE");}SCRIPT_DATA_ESCAPE_START_DASH_STATE(e){e===Oe.HYPHEN_MINUS?(this.state="SCRIPT_DATA_ESCAPED_DASH_DASH_STATE",this._emitChars("-")):this._reconsumeInState("SCRIPT_DATA_STATE");}SCRIPT_DATA_ESCAPED_STATE(e){e===Oe.HYPHEN_MINUS?(this.state="SCRIPT_DATA_ESCAPED_DASH_STATE",this._emitChars("-")):e===Oe.LESS_THAN_SIGN?this.state="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE":e===Oe.NULL?(this._err(p),this._emitChars(n)):e===Oe.EOF?(this._err(y),this._emitEOFToken()):this._emitCodePoint(e);}SCRIPT_DATA_ESCAPED_DASH_STATE(e){e===Oe.HYPHEN_MINUS?(this.state="SCRIPT_DATA_ESCAPED_DASH_DASH_STATE",this._emitChars("-")):e===Oe.LESS_THAN_SIGN?this.state="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE":e===Oe.NULL?(this._err(p),this.state="SCRIPT_DATA_ESCAPED_STATE",this._emitChars(n)):e===Oe.EOF?(this._err(y),this._emitEOFToken()):(this.state="SCRIPT_DATA_ESCAPED_STATE",this._emitCodePoint(e));}SCRIPT_DATA_ESCAPED_DASH_DASH_STATE(e){e===Oe.HYPHEN_MINUS?this._emitChars("-"):e===Oe.LESS_THAN_SIGN?this.state="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE":e===Oe.GREATER_THAN_SIGN?(this.state="SCRIPT_DATA_STATE",this._emitChars(">")):e===Oe.NULL?(this._err(p),this.state="SCRIPT_DATA_ESCAPED_STATE",this._emitChars(n)):e===Oe.EOF?(this._err(y),this._emitEOFToken()):(this.state="SCRIPT_DATA_ESCAPED_STATE",this._emitCodePoint(e));}SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE(e){e===Oe.SOLIDUS?(this.tempBuff=[],this.state="SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE"):Le(e)?(this.tempBuff=[],this._emitChars("<"),this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE")):(this._emitChars("<"),this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE"));}SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE(e){Le(e)?(this._createEndTagToken(),this._reconsumeInState("SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE")):(this._emitChars("</"),this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE"));}SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE(e){if(fe(e))this.currentToken.tagName+=Ue(e),this.tempBuff.push(e);else if(Me(e))this.currentToken.tagName+=He(e),this.tempBuff.push(e);else{if(this.lastStartTagName===this.currentToken.tagName){if(Re(e))return void(this.state="BEFORE_ATTRIBUTE_NAME_STATE");if(e===Oe.SOLIDUS)return void(this.state="SELF_CLOSING_START_TAG_STATE");if(e===Oe.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=de)}this._emitChars("</"),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");}}SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE(e){Re(e)||e===Oe.SOLIDUS||e===Oe.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?"SCRIPT_DATA_DOUBLE_ESCAPED_STATE":"SCRIPT_DATA_ESCAPED_STATE",this._emitCodePoint(e)):fe(e)?(this.tempBuff.push(ke(e)),this._emitCodePoint(e)):Me(e)?(this.tempBuff.push(e),this._emitCodePoint(e)):this._reconsumeInState("SCRIPT_DATA_ESCAPED_STATE");}SCRIPT_DATA_DOUBLE_ESCAPED_STATE(e){e===Oe.HYPHEN_MINUS?(this.state="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE",this._emitChars("-")):e===Oe.LESS_THAN_SIGN?(this.state="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE",this._emitChars("<")):e===Oe.NULL?(this._err(p),this._emitChars(n)):e===Oe.EOF?(this._err(y),this._emitEOFToken()):this._emitCodePoint(e);}SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE(e){e===Oe.HYPHEN_MINUS?(this.state="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE",this._emitChars("-")):e===Oe.LESS_THAN_SIGN?(this.state="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE",this._emitChars("<")):e===Oe.NULL?(this._err(p),this.state="SCRIPT_DATA_DOUBLE_ESCAPED_STATE",this._emitChars(n)):e===Oe.EOF?(this._err(y),this._emitEOFToken()):(this.state="SCRIPT_DATA_DOUBLE_ESCAPED_STATE",this._emitCodePoint(e));}SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE(e){e===Oe.HYPHEN_MINUS?this._emitChars("-"):e===Oe.LESS_THAN_SIGN?(this.state="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE",this._emitChars("<")):e===Oe.GREATER_THAN_SIGN?(this.state="SCRIPT_DATA_STATE",this._emitChars(">")):e===Oe.NULL?(this._err(p),this.state="SCRIPT_DATA_DOUBLE_ESCAPED_STATE",this._emitChars(n)):e===Oe.EOF?(this._err(y),this._emitEOFToken()):(this.state="SCRIPT_DATA_DOUBLE_ESCAPED_STATE",this._emitCodePoint(e));}SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE(e){e===Oe.SOLIDUS?(this.tempBuff=[],this.state="SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE",this._emitChars("/")):this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE");}SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE(e){Re(e)||e===Oe.SOLIDUS||e===Oe.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?"SCRIPT_DATA_ESCAPED_STATE":"SCRIPT_DATA_DOUBLE_ESCAPED_STATE",this._emitCodePoint(e)):fe(e)?(this.tempBuff.push(ke(e)),this._emitCodePoint(e)):Me(e)?(this.tempBuff.push(e),this._emitCodePoint(e)):this._reconsumeInState("SCRIPT_DATA_DOUBLE_ESCAPED_STATE");}BEFORE_ATTRIBUTE_NAME_STATE(e){Re(e)||(e===Oe.SOLIDUS||e===Oe.GREATER_THAN_SIGN||e===Oe.EOF?this._reconsumeInState("AFTER_ATTRIBUTE_NAME_STATE"):e===Oe.EQUALS_SIGN?(this._err(S),this._createAttr("="),this.state="ATTRIBUTE_NAME_STATE"):(this._createAttr(""),this._reconsumeInState("ATTRIBUTE_NAME_STATE")));}ATTRIBUTE_NAME_STATE(e){Re(e)||e===Oe.SOLIDUS||e===Oe.GREATER_THAN_SIGN||e===Oe.EOF?(this._leaveAttrName("AFTER_ATTRIBUTE_NAME_STATE"),this._unconsume()):e===Oe.EQUALS_SIGN?this._leaveAttrName("BEFORE_ATTRIBUTE_VALUE_STATE"):fe(e)?this.currentAttr.name+=Ue(e):e===Oe.QUOTATION_MARK||e===Oe.APOSTROPHE||e===Oe.LESS_THAN_SIGN?(this._err(d),this.currentAttr.name+=He(e)):e===Oe.NULL?(this._err(p),this.currentAttr.name+=n):this.currentAttr.name+=He(e);}AFTER_ATTRIBUTE_NAME_STATE(e){Re(e)||(e===Oe.SOLIDUS?this.state="SELF_CLOSING_START_TAG_STATE":e===Oe.EQUALS_SIGN?this.state="BEFORE_ATTRIBUTE_VALUE_STATE":e===Oe.GREATER_THAN_SIGN?(this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(D),this._emitEOFToken()):(this._createAttr(""),this._reconsumeInState("ATTRIBUTE_NAME_STATE")));}BEFORE_ATTRIBUTE_VALUE_STATE(e){Re(e)||(e===Oe.QUOTATION_MARK?this.state="ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE":e===Oe.APOSTROPHE?this.state="ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE":e===Oe.GREATER_THAN_SIGN?(this._err(g),this.state=de,this._emitCurrentToken()):this._reconsumeInState("ATTRIBUTE_VALUE_UNQUOTED_STATE"));}ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE(e){e===Oe.QUOTATION_MARK?this.state="AFTER_ATTRIBUTE_VALUE_QUOTED_STATE":e===Oe.AMPERSAND?(this.returnState="ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE",this.state="CHARACTER_REFERENCE_STATE"):e===Oe.NULL?(this._err(p),this.currentAttr.value+=n):e===Oe.EOF?(this._err(D),this._emitEOFToken()):this.currentAttr.value+=He(e);}ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE(e){e===Oe.APOSTROPHE?this.state="AFTER_ATTRIBUTE_VALUE_QUOTED_STATE":e===Oe.AMPERSAND?(this.returnState="ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE",this.state="CHARACTER_REFERENCE_STATE"):e===Oe.NULL?(this._err(p),this.currentAttr.value+=n):e===Oe.EOF?(this._err(D),this._emitEOFToken()):this.currentAttr.value+=He(e);}ATTRIBUTE_VALUE_UNQUOTED_STATE(e){Re(e)?this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE"):e===Oe.AMPERSAND?(this.returnState="ATTRIBUTE_VALUE_UNQUOTED_STATE",this.state="CHARACTER_REFERENCE_STATE"):e===Oe.GREATER_THAN_SIGN?(this._leaveAttrValue(de),this._emitCurrentToken()):e===Oe.NULL?(this._err(p),this.currentAttr.value+=n):e===Oe.QUOTATION_MARK||e===Oe.APOSTROPHE||e===Oe.LESS_THAN_SIGN||e===Oe.EQUALS_SIGN||e===Oe.GRAVE_ACCENT?(this._err(M),this.currentAttr.value+=He(e)):e===Oe.EOF?(this._err(D),this._emitEOFToken()):this.currentAttr.value+=He(e);}AFTER_ATTRIBUTE_VALUE_QUOTED_STATE(e){Re(e)?this._leaveAttrValue("BEFORE_ATTRIBUTE_NAME_STATE"):e===Oe.SOLIDUS?this._leaveAttrValue("SELF_CLOSING_START_TAG_STATE"):e===Oe.GREATER_THAN_SIGN?(this._leaveAttrValue(de),this._emitCurrentToken()):e===Oe.EOF?(this._err(D),this._emitEOFToken()):(this._err(P),this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE"));}SELF_CLOSING_START_TAG_STATE(e){e===Oe.GREATER_THAN_SIGN?(this.currentToken.selfClosing=!0,this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(D),this._emitEOFToken()):(this._err(N),this._reconsumeInState("BEFORE_ATTRIBUTE_NAME_STATE"));}BOGUS_COMMENT_STATE(e){e===Oe.GREATER_THAN_SIGN?(this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._emitCurrentToken(),this._emitEOFToken()):e===Oe.NULL?(this._err(p),this.currentToken.data+=n):this.currentToken.data+=He(e);}MARKUP_DECLARATION_OPEN_STATE(e){this._consumeSequenceIfMatch(Se.DASH_DASH_STRING,e,!0)?(this._createCommentToken(),this.state="COMMENT_START_STATE"):this._consumeSequenceIfMatch(Se.DOCTYPE_STRING,e,!1)?this.state="DOCTYPE_STATE":this._consumeSequenceIfMatch(Se.CDATA_START_STRING,e,!0)?this.allowCDATA?this.state="CDATA_SECTION_STATE":(this._err(x),this._createCommentToken(),this.currentToken.data="[CDATA[",this.state="BOGUS_COMMENT_STATE"):this._ensureHibernation()||(this._err(v),this._createCommentToken(),this._reconsumeInState("BOGUS_COMMENT_STATE"));}COMMENT_START_STATE(e){e===Oe.HYPHEN_MINUS?this.state="COMMENT_START_DASH_STATE":e===Oe.GREATER_THAN_SIGN?(this._err(X),this.state=de,this._emitCurrentToken()):this._reconsumeInState("COMMENT_STATE");}COMMENT_START_DASH_STATE(e){e===Oe.HYPHEN_MINUS?this.state="COMMENT_END_STATE":e===Oe.GREATER_THAN_SIGN?(this._err(X),this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(W),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="-",this._reconsumeInState("COMMENT_STATE"));}COMMENT_STATE(e){e===Oe.HYPHEN_MINUS?this.state="COMMENT_END_DASH_STATE":e===Oe.LESS_THAN_SIGN?(this.currentToken.data+="<",this.state="COMMENT_LESS_THAN_SIGN_STATE"):e===Oe.NULL?(this._err(p),this.currentToken.data+=n):e===Oe.EOF?(this._err(W),this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.data+=He(e);}COMMENT_LESS_THAN_SIGN_STATE(e){e===Oe.EXCLAMATION_MARK?(this.currentToken.data+="!",this.state="COMMENT_LESS_THAN_SIGN_BANG_STATE"):e===Oe.LESS_THAN_SIGN?this.currentToken.data+="!":this._reconsumeInState("COMMENT_STATE");}COMMENT_LESS_THAN_SIGN_BANG_STATE(e){e===Oe.HYPHEN_MINUS?this.state="COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE":this._reconsumeInState("COMMENT_STATE");}COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE(e){e===Oe.HYPHEN_MINUS?this.state="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE":this._reconsumeInState("COMMENT_END_DASH_STATE");}COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE(e){e!==Oe.GREATER_THAN_SIGN&&e!==Oe.EOF&&this._err(Q),this._reconsumeInState("COMMENT_END_STATE");}COMMENT_END_DASH_STATE(e){e===Oe.HYPHEN_MINUS?this.state="COMMENT_END_STATE":e===Oe.EOF?(this._err(W),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="-",this._reconsumeInState("COMMENT_STATE"));}COMMENT_END_STATE(e){e===Oe.GREATER_THAN_SIGN?(this.state=de,this._emitCurrentToken()):e===Oe.EXCLAMATION_MARK?this.state="COMMENT_END_BANG_STATE":e===Oe.HYPHEN_MINUS?this.currentToken.data+="-":e===Oe.EOF?(this._err(W),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="--",this._reconsumeInState("COMMENT_STATE"));}COMMENT_END_BANG_STATE(e){e===Oe.HYPHEN_MINUS?(this.currentToken.data+="--!",this.state="COMMENT_END_DASH_STATE"):e===Oe.GREATER_THAN_SIGN?(this._err(V),this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(W),this._emitCurrentToken(),this._emitEOFToken()):(this.currentToken.data+="--!",this._reconsumeInState("COMMENT_STATE"));}DOCTYPE_STATE(e){Re(e)?this.state="BEFORE_DOCTYPE_NAME_STATE":e===Oe.GREATER_THAN_SIGN?this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE"):e===Oe.EOF?(this._err(w),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(te),this._reconsumeInState("BEFORE_DOCTYPE_NAME_STATE"));}BEFORE_DOCTYPE_NAME_STATE(e){Re(e)||(fe(e)?(this._createDoctypeToken(Ue(e)),this.state="DOCTYPE_NAME_STATE"):e===Oe.NULL?(this._err(p),this._createDoctypeToken(n),this.state="DOCTYPE_NAME_STATE"):e===Oe.GREATER_THAN_SIGN?(this._err(ne),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=de):e===Oe.EOF?(this._err(w),this._createDoctypeToken(null),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._createDoctypeToken(He(e)),this.state="DOCTYPE_NAME_STATE"));}DOCTYPE_NAME_STATE(e){Re(e)?this.state="AFTER_DOCTYPE_NAME_STATE":e===Oe.GREATER_THAN_SIGN?(this.state=de,this._emitCurrentToken()):fe(e)?this.currentToken.name+=Ue(e):e===Oe.NULL?(this._err(p),this.currentToken.name+=n):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.name+=He(e);}AFTER_DOCTYPE_NAME_STATE(e){Re(e)||(e===Oe.GREATER_THAN_SIGN?(this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this._consumeSequenceIfMatch(Se.PUBLIC_STRING,e,!1)?this.state="AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE":this._consumeSequenceIfMatch(Se.SYSTEM_STRING,e,!1)?this.state="AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE":this._ensureHibernation()||(this._err(se),this.currentToken.forceQuirks=!0,this._reconsumeInState("BOGUS_DOCTYPE_STATE")));}AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE(e){Re(e)?this.state="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE":e===Oe.QUOTATION_MARK?(this._err(k),this.currentToken.publicId="",this.state="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE"):e===Oe.APOSTROPHE?(this._err(k),this.currentToken.publicId="",this.state="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE"):e===Oe.GREATER_THAN_SIGN?(this._err(G),this.currentToken.forceQuirks=!0,this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(F),this.currentToken.forceQuirks=!0,this._reconsumeInState("BOGUS_DOCTYPE_STATE"));}BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE(e){Re(e)||(e===Oe.QUOTATION_MARK?(this.currentToken.publicId="",this.state="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE"):e===Oe.APOSTROPHE?(this.currentToken.publicId="",this.state="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE"):e===Oe.GREATER_THAN_SIGN?(this._err(G),this.currentToken.forceQuirks=!0,this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(F),this.currentToken.forceQuirks=!0,this._reconsumeInState("BOGUS_DOCTYPE_STATE")));}DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE(e){e===Oe.QUOTATION_MARK?this.state="AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE":e===Oe.NULL?(this._err(p),this.currentToken.publicId+=n):e===Oe.GREATER_THAN_SIGN?(this._err(b),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=de):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=He(e);}DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE(e){e===Oe.APOSTROPHE?this.state="AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE":e===Oe.NULL?(this._err(p),this.currentToken.publicId+=n):e===Oe.GREATER_THAN_SIGN?(this._err(b),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=de):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=He(e);}AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE(e){Re(e)?this.state="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE":e===Oe.GREATER_THAN_SIGN?(this.state=de,this._emitCurrentToken()):e===Oe.QUOTATION_MARK?(this._err(H),this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE"):e===Oe.APOSTROPHE?(this._err(H),this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE"):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(B),this.currentToken.forceQuirks=!0,this._reconsumeInState("BOGUS_DOCTYPE_STATE"));}BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE(e){Re(e)||(e===Oe.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=de):e===Oe.QUOTATION_MARK?(this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE"):e===Oe.APOSTROPHE?(this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE"):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(B),this.currentToken.forceQuirks=!0,this._reconsumeInState("BOGUS_DOCTYPE_STATE")));}AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE(e){Re(e)?this.state="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE":e===Oe.QUOTATION_MARK?(this._err(U),this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE"):e===Oe.APOSTROPHE?(this._err(U),this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE"):e===Oe.GREATER_THAN_SIGN?(this._err(K),this.currentToken.forceQuirks=!0,this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(B),this.currentToken.forceQuirks=!0,this._reconsumeInState("BOGUS_DOCTYPE_STATE"));}BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE(e){Re(e)||(e===Oe.QUOTATION_MARK?(this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE"):e===Oe.APOSTROPHE?(this.currentToken.systemId="",this.state="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE"):e===Oe.GREATER_THAN_SIGN?(this._err(K),this.currentToken.forceQuirks=!0,this.state=de,this._emitCurrentToken()):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(B),this.currentToken.forceQuirks=!0,this._reconsumeInState("BOGUS_DOCTYPE_STATE")));}DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE(e){e===Oe.QUOTATION_MARK?this.state="AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE":e===Oe.NULL?(this._err(p),this.currentToken.systemId+=n):e===Oe.GREATER_THAN_SIGN?(this._err(Y),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=de):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=He(e);}DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE(e){e===Oe.APOSTROPHE?this.state="AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE":e===Oe.NULL?(this._err(p),this.currentToken.systemId+=n):e===Oe.GREATER_THAN_SIGN?(this._err(Y),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this.state=de):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=He(e);}AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE(e){Re(e)||(e===Oe.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=de):e===Oe.EOF?(this._err(w),this.currentToken.forceQuirks=!0,this._emitCurrentToken(),this._emitEOFToken()):(this._err(f),this._reconsumeInState("BOGUS_DOCTYPE_STATE")));}BOGUS_DOCTYPE_STATE(e){e===Oe.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=de):e===Oe.NULL?this._err(p):e===Oe.EOF&&(this._emitCurrentToken(),this._emitEOFToken());}CDATA_SECTION_STATE(e){e===Oe.RIGHT_SQUARE_BRACKET?this.state="CDATA_SECTION_BRACKET_STATE":e===Oe.EOF?(this._err(j),this._emitEOFToken()):this._emitCodePoint(e);}CDATA_SECTION_BRACKET_STATE(e){e===Oe.RIGHT_SQUARE_BRACKET?this.state="CDATA_SECTION_END_STATE":(this._emitChars("]"),this._reconsumeInState("CDATA_SECTION_STATE"));}CDATA_SECTION_END_STATE(e){e===Oe.GREATER_THAN_SIGN?this.state=de:e===Oe.RIGHT_SQUARE_BRACKET?this._emitChars("]"):(this._emitChars("]]"),this._reconsumeInState("CDATA_SECTION_STATE"));}CHARACTER_REFERENCE_STATE(e){this.tempBuff=[Oe.AMPERSAND],e===Oe.NUMBER_SIGN?(this.tempBuff.push(e),this.state="NUMERIC_CHARACTER_REFERENCE_STATE"):De(e)?this._reconsumeInState("NAMED_CHARACTER_REFERENCE_STATE"):(this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState));}NAMED_CHARACTER_REFERENCE_STATE(e){const t=this._matchNamedCharacterReference(e);if(this._ensureHibernation())this.tempBuff=[Oe.AMPERSAND];else if(t){const e=this.tempBuff[this.tempBuff.length-1]===Oe.SEMICOLON;this._isCharacterReferenceAttributeQuirk(e)||(e||this._errOnNextCodePoint(I),this.tempBuff=t),this._flushCodePointsConsumedAsCharacterReference(),this.state=this.returnState;}else this._flushCodePointsConsumedAsCharacterReference(),this.state="AMBIGUOS_AMPERSAND_STATE";}AMBIGUOS_AMPERSAND_STATE(e){De(e)?this._isCharacterReferenceInAttribute()?this.currentAttr.value+=He(e):this._emitCodePoint(e):(e===Oe.SEMICOLON&&this._err(R),this._reconsumeInState(this.returnState));}NUMERIC_CHARACTER_REFERENCE_STATE(e){this.charRefCode=0,e===Oe.LATIN_SMALL_X||e===Oe.LATIN_CAPITAL_X?(this.tempBuff.push(e),this.state="HEXADEMICAL_CHARACTER_REFERENCE_START_STATE"):this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_START_STATE");}HEXADEMICAL_CHARACTER_REFERENCE_START_STATE(e){!function(e){return Ie(e)||ge(e)||Pe(e)}(e)?(this._err(z),this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState)):this._reconsumeInState("HEXADEMICAL_CHARACTER_REFERENCE_STATE");}DECIMAL_CHARACTER_REFERENCE_START_STATE(e){Ie(e)?this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_STATE"):(this._err(z),this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState));}HEXADEMICAL_CHARACTER_REFERENCE_STATE(e){ge(e)?this.charRefCode=16*this.charRefCode+e-55:Pe(e)?this.charRefCode=16*this.charRefCode+e-87:Ie(e)?this.charRefCode=16*this.charRefCode+e-48:e===Oe.SEMICOLON?this.state="NUMERIC_CHARACTER_REFERENCE_END_STATE":(this._err(I),this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE"));}DECIMAL_CHARACTER_REFERENCE_STATE(e){Ie(e)?this.charRefCode=10*this.charRefCode+e-48:e===Oe.SEMICOLON?this.state="NUMERIC_CHARACTER_REFERENCE_END_STATE":(this._err(I),this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE"));}NUMERIC_CHARACTER_REFERENCE_END_STATE(){if(this.charRefCode===Oe.NULL)this._err(q),this.charRefCode=Oe.REPLACEMENT_CHARACTER;else if(this.charRefCode>1114111)this._err(Z),this.charRefCode=Oe.REPLACEMENT_CHARACTER;else if(i(this.charRefCode))this._err(J),this.charRefCode=Oe.REPLACEMENT_CHARACTER;else if(a(this.charRefCode))this._err(ee);else if(E(this.charRefCode)||this.charRefCode===Oe.CARRIAGE_RETURN){this._err($);const e=Ce[this.charRefCode];e&&(this.charRefCode=e);}this.tempBuff=[this.charRefCode],this._flushCodePointsConsumedAsCharacterReference(),this._reconsumeInState(this.returnState);}}Be.CHARACTER_TOKEN="CHARACTER_TOKEN",Be.NULL_CHARACTER_TOKEN="NULL_CHARACTER_TOKEN",Be.WHITESPACE_CHARACTER_TOKEN="WHITESPACE_CHARACTER_TOKEN",Be.START_TAG_TOKEN="START_TAG_TOKEN",Be.END_TAG_TOKEN="END_TAG_TOKEN",Be.COMMENT_TOKEN="COMMENT_TOKEN",Be.DOCTYPE_TOKEN="DOCTYPE_TOKEN",Be.EOF_TOKEN="EOF_TOKEN",Be.HIBERNATION_TOKEN="HIBERNATION_TOKEN",Be.MODE={DATA:de,RCDATA:"RCDATA_STATE",RAWTEXT:"RAWTEXT_STATE",SCRIPT_DATA:"SCRIPT_DATA_STATE",PLAINTEXT:"PLAINTEXT_STATE"},Be.getTokenAttr=function(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null};var Ge=Be;function Ke(e,t){return e(t={exports:{}},t.exports),t.exports}var be=Ke((function(e,t){const n=t.NAMESPACES={HTML:"http://www.w3.org/1999/xhtml",MATHML:"http://www.w3.org/1998/Math/MathML",SVG:"http://www.w3.org/2000/svg",XLINK:"http://www.w3.org/1999/xlink",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"};t.ATTRS={TYPE:"type",ACTION:"action",ENCODING:"encoding",PROMPT:"prompt",NAME:"name",COLOR:"color",FACE:"face",SIZE:"size"},t.DOCUMENT_MODE={NO_QUIRKS:"no-quirks",QUIRKS:"quirks",LIMITED_QUIRKS:"limited-quirks"};const s=t.TAG_NAMES={A:"a",ADDRESS:"address",ANNOTATION_XML:"annotation-xml",APPLET:"applet",AREA:"area",ARTICLE:"article",ASIDE:"aside",B:"b",BASE:"base",BASEFONT:"basefont",BGSOUND:"bgsound",BIG:"big",BLOCKQUOTE:"blockquote",BODY:"body",BR:"br",BUTTON:"button",CAPTION:"caption",CENTER:"center",CODE:"code",COL:"col",COLGROUP:"colgroup",DD:"dd",DESC:"desc",DETAILS:"details",DIALOG:"dialog",DIR:"dir",DIV:"div",DL:"dl",DT:"dt",EM:"em",EMBED:"embed",FIELDSET:"fieldset",FIGCAPTION:"figcaption",FIGURE:"figure",FONT:"font",FOOTER:"footer",FOREIGN_OBJECT:"foreignObject",FORM:"form",FRAME:"frame",FRAMESET:"frameset",H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",HEAD:"head",HEADER:"header",HGROUP:"hgroup",HR:"hr",HTML:"html",I:"i",IMG:"img",IMAGE:"image",INPUT:"input",IFRAME:"iframe",KEYGEN:"keygen",LABEL:"label",LI:"li",LINK:"link",LISTING:"listing",MAIN:"main",MALIGNMARK:"malignmark",MARQUEE:"marquee",MATH:"math",MENU:"menu",META:"meta",MGLYPH:"mglyph",MI:"mi",MO:"mo",MN:"mn",MS:"ms",MTEXT:"mtext",NAV:"nav",NOBR:"nobr",NOFRAMES:"noframes",NOEMBED:"noembed",NOSCRIPT:"noscript",OBJECT:"object",OL:"ol",OPTGROUP:"optgroup",OPTION:"option",P:"p",PARAM:"param",PLAINTEXT:"plaintext",PRE:"pre",RB:"rb",RP:"rp",RT:"rt",RTC:"rtc",RUBY:"ruby",S:"s",SCRIPT:"script",SECTION:"section",SELECT:"select",SOURCE:"source",SMALL:"small",SPAN:"span",STRIKE:"strike",STRONG:"strong",STYLE:"style",SUB:"sub",SUMMARY:"summary",SUP:"sup",TABLE:"table",TBODY:"tbody",TEMPLATE:"template",TEXTAREA:"textarea",TFOOT:"tfoot",TD:"td",TH:"th",THEAD:"thead",TITLE:"title",TR:"tr",TRACK:"track",TT:"tt",U:"u",UL:"ul",SVG:"svg",VAR:"var",WBR:"wbr",XMP:"xmp"};t.SPECIAL_ELEMENTS={[n.HTML]:{[s.ADDRESS]:!0,[s.APPLET]:!0,[s.AREA]:!0,[s.ARTICLE]:!0,[s.ASIDE]:!0,[s.BASE]:!0,[s.BASEFONT]:!0,[s.BGSOUND]:!0,[s.BLOCKQUOTE]:!0,[s.BODY]:!0,[s.BR]:!0,[s.BUTTON]:!0,[s.CAPTION]:!0,[s.CENTER]:!0,[s.COL]:!0,[s.COLGROUP]:!0,[s.DD]:!0,[s.DETAILS]:!0,[s.DIR]:!0,[s.DIV]:!0,[s.DL]:!0,[s.DT]:!0,[s.EMBED]:!0,[s.FIELDSET]:!0,[s.FIGCAPTION]:!0,[s.FIGURE]:!0,[s.FOOTER]:!0,[s.FORM]:!0,[s.FRAME]:!0,[s.FRAMESET]:!0,[s.H1]:!0,[s.H2]:!0,[s.H3]:!0,[s.H4]:!0,[s.H5]:!0,[s.H6]:!0,[s.HEAD]:!0,[s.HEADER]:!0,[s.HGROUP]:!0,[s.HR]:!0,[s.HTML]:!0,[s.IFRAME]:!0,[s.IMG]:!0,[s.INPUT]:!0,[s.LI]:!0,[s.LINK]:!0,[s.LISTING]:!0,[s.MAIN]:!0,[s.MARQUEE]:!0,[s.MENU]:!0,[s.META]:!0,[s.NAV]:!0,[s.NOEMBED]:!0,[s.NOFRAMES]:!0,[s.NOSCRIPT]:!0,[s.OBJECT]:!0,[s.OL]:!0,[s.P]:!0,[s.PARAM]:!0,[s.PLAINTEXT]:!0,[s.PRE]:!0,[s.SCRIPT]:!0,[s.SECTION]:!0,[s.SELECT]:!0,[s.SOURCE]:!0,[s.STYLE]:!0,[s.SUMMARY]:!0,[s.TABLE]:!0,[s.TBODY]:!0,[s.TD]:!0,[s.TEMPLATE]:!0,[s.TEXTAREA]:!0,[s.TFOOT]:!0,[s.TH]:!0,[s.THEAD]:!0,[s.TITLE]:!0,[s.TR]:!0,[s.TRACK]:!0,[s.UL]:!0,[s.WBR]:!0,[s.XMP]:!0},[n.MATHML]:{[s.MI]:!0,[s.MO]:!0,[s.MN]:!0,[s.MS]:!0,[s.MTEXT]:!0,[s.ANNOTATION_XML]:!0},[n.SVG]:{[s.TITLE]:!0,[s.FOREIGN_OBJECT]:!0,[s.DESC]:!0}};}));be.NAMESPACES,be.ATTRS,be.DOCUMENT_MODE,be.TAG_NAMES,be.SPECIAL_ELEMENTS;const Ye=be.TAG_NAMES,xe=be.NAMESPACES;function ve(e){switch(e.length){case 1:return e===Ye.P;case 2:return e===Ye.RB||e===Ye.RP||e===Ye.RT||e===Ye.DD||e===Ye.DT||e===Ye.LI;case 3:return e===Ye.RTC;case 6:return e===Ye.OPTION;case 8:return e===Ye.OPTGROUP}return !1}function ye(e){switch(e.length){case 1:return e===Ye.P;case 2:return e===Ye.RB||e===Ye.RP||e===Ye.RT||e===Ye.DD||e===Ye.DT||e===Ye.LI||e===Ye.TD||e===Ye.TH||e===Ye.TR;case 3:return e===Ye.RTC;case 5:return e===Ye.TBODY||e===Ye.TFOOT||e===Ye.THEAD;case 6:return e===Ye.OPTION;case 7:return e===Ye.CAPTION;case 8:return e===Ye.OPTGROUP||e===Ye.COLGROUP}return !1}function we(e,t){switch(e.length){case 2:if(e===Ye.TD||e===Ye.TH)return t===xe.HTML;if(e===Ye.MI||e===Ye.MO||e===Ye.MN||e===Ye.MS)return t===xe.MATHML;break;case 4:if(e===Ye.HTML)return t===xe.HTML;if(e===Ye.DESC)return t===xe.SVG;break;case 5:if(e===Ye.TABLE)return t===xe.HTML;if(e===Ye.MTEXT)return t===xe.MATHML;if(e===Ye.TITLE)return t===xe.SVG;break;case 6:return (e===Ye.APPLET||e===Ye.OBJECT)&&t===xe.HTML;case 7:return (e===Ye.CAPTION||e===Ye.MARQUEE)&&t===xe.HTML;case 8:return e===Ye.TEMPLATE&&t===xe.HTML;case 13:return e===Ye.FOREIGN_OBJECT&&t===xe.SVG;case 14:return e===Ye.ANNOTATION_XML&&t===xe.MATHML}return !1}var Qe=class{constructor(e,t){this.stackTop=-1,this.items=[],this.current=e,this.currentTagName=null,this.currentTmplContent=null,this.tmplCount=0,this.treeAdapter=t;}_indexOf(e){let t=-1;for(let n=this.stackTop;n>=0;n--)if(this.items[n]===e){t=n;break}return t}_isInTemplate(){return this.currentTagName===Ye.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===xe.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagName=this.current&&this.treeAdapter.getTagName(this.current),this.currentTmplContent=this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):null;}push(e){this.items[++this.stackTop]=e,this._updateCurrentElement(),this._isInTemplate()&&this.tmplCount++;}pop(){this.stackTop--,this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this._updateCurrentElement();}replace(e,t){const n=this._indexOf(e);this.items[n]=t,n===this.stackTop&&this._updateCurrentElement();}insertAfter(e,t){const n=this._indexOf(e)+1;this.items.splice(n,0,t),n===++this.stackTop&&this._updateCurrentElement();}popUntilTagNamePopped(e){for(;this.stackTop>-1;){const t=this.currentTagName,n=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),t===e&&n===xe.HTML)break}}popUntilElementPopped(e){for(;this.stackTop>-1;){const t=this.current;if(this.pop(),t===e)break}}popUntilNumberedHeaderPopped(){for(;this.stackTop>-1;){const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),e===Ye.H1||e===Ye.H2||e===Ye.H3||e===Ye.H4||e===Ye.H5||e===Ye.H6&&t===xe.HTML)break}}popUntilTableCellPopped(){for(;this.stackTop>-1;){const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current);if(this.pop(),e===Ye.TD||e===Ye.TH&&t===xe.HTML)break}}popAllUpToHtmlElement(){this.stackTop=0,this._updateCurrentElement();}clearBackToTableContext(){for(;this.currentTagName!==Ye.TABLE&&this.currentTagName!==Ye.TEMPLATE&&this.currentTagName!==Ye.HTML||this.treeAdapter.getNamespaceURI(this.current)!==xe.HTML;)this.pop();}clearBackToTableBodyContext(){for(;this.currentTagName!==Ye.TBODY&&this.currentTagName!==Ye.TFOOT&&this.currentTagName!==Ye.THEAD&&this.currentTagName!==Ye.TEMPLATE&&this.currentTagName!==Ye.HTML||this.treeAdapter.getNamespaceURI(this.current)!==xe.HTML;)this.pop();}clearBackToTableRowContext(){for(;this.currentTagName!==Ye.TR&&this.currentTagName!==Ye.TEMPLATE&&this.currentTagName!==Ye.HTML||this.treeAdapter.getNamespaceURI(this.current)!==xe.HTML;)this.pop();}remove(e){for(let t=this.stackTop;t>=0;t--)if(this.items[t]===e){this.items.splice(t,1),this.stackTop--,this._updateCurrentElement();break}}tryPeekProperlyNestedBodyElement(){const e=this.items[1];return e&&this.treeAdapter.getTagName(e)===Ye.BODY?e:null}contains(e){return this._indexOf(e)>-1}getCommonAncestor(e){let t=this._indexOf(e);return --t>=0?this.items[t]:null}isRootHtmlElementCurrent(){return 0===this.stackTop&&this.currentTagName===Ye.HTML}hasInScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]),s=this.treeAdapter.getNamespaceURI(this.items[t]);if(n===e&&s===xe.HTML)return !0;if(we(n,s))return !1}return !0}hasNumberedHeaderInScope(){for(let e=this.stackTop;e>=0;e--){const t=this.treeAdapter.getTagName(this.items[e]),n=this.treeAdapter.getNamespaceURI(this.items[e]);if((t===Ye.H1||t===Ye.H2||t===Ye.H3||t===Ye.H4||t===Ye.H5||t===Ye.H6)&&n===xe.HTML)return !0;if(we(t,n))return !1}return !0}hasInListItemScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]),s=this.treeAdapter.getNamespaceURI(this.items[t]);if(n===e&&s===xe.HTML)return !0;if((n===Ye.UL||n===Ye.OL)&&s===xe.HTML||we(n,s))return !1}return !0}hasInButtonScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]),s=this.treeAdapter.getNamespaceURI(this.items[t]);if(n===e&&s===xe.HTML)return !0;if(n===Ye.BUTTON&&s===xe.HTML||we(n,s))return !1}return !0}hasInTableScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]);if(this.treeAdapter.getNamespaceURI(this.items[t])===xe.HTML){if(n===e)return !0;if(n===Ye.TABLE||n===Ye.TEMPLATE||n===Ye.HTML)return !1}}return !0}hasTableBodyContextInTableScope(){for(let e=this.stackTop;e>=0;e--){const t=this.treeAdapter.getTagName(this.items[e]);if(this.treeAdapter.getNamespaceURI(this.items[e])===xe.HTML){if(t===Ye.TBODY||t===Ye.THEAD||t===Ye.TFOOT)return !0;if(t===Ye.TABLE||t===Ye.HTML)return !1}}return !0}hasInSelectScope(e){for(let t=this.stackTop;t>=0;t--){const n=this.treeAdapter.getTagName(this.items[t]);if(this.treeAdapter.getNamespaceURI(this.items[t])===xe.HTML){if(n===e)return !0;if(n!==Ye.OPTION&&n!==Ye.OPTGROUP)return !1}}return !0}generateImpliedEndTags(){for(;ve(this.currentTagName);)this.pop();}generateImpliedEndTagsThoroughly(){for(;ye(this.currentTagName);)this.pop();}generateImpliedEndTagsWithExclusion(e){for(;ve(this.currentTagName)&&this.currentTagName!==e;)this.pop();}};class Xe{constructor(e){this.length=0,this.entries=[],this.treeAdapter=e,this.bookmark=null;}_getNoahArkConditionCandidates(e){const t=[];if(this.length>=3){const n=this.treeAdapter.getAttrList(e).length,s=this.treeAdapter.getTagName(e),r=this.treeAdapter.getNamespaceURI(e);for(let e=this.length-1;e>=0;e--){const i=this.entries[e];if(i.type===Xe.MARKER_ENTRY)break;const T=i.element,o=this.treeAdapter.getAttrList(T);this.treeAdapter.getTagName(T)===s&&this.treeAdapter.getNamespaceURI(T)===r&&o.length===n&&t.push({idx:e,attrs:o});}}return t.length<3?[]:t}_ensureNoahArkCondition(e){const t=this._getNoahArkConditionCandidates(e);let n=t.length;if(n){const s=this.treeAdapter.getAttrList(e),r=s.length,i=Object.create(null);for(let e=0;e<r;e++){const t=s[e];i[t.name]=t.value;}for(let e=0;e<r;e++)for(let s=0;s<n;s++){const r=t[s].attrs[e];if(i[r.name]!==r.value&&(t.splice(s,1),n--),t.length<3)return}for(let e=n-1;e>=2;e--)this.entries.splice(t[e].idx,1),this.length--;}}insertMarker(){this.entries.push({type:Xe.MARKER_ENTRY}),this.length++;}pushElement(e,t){this._ensureNoahArkCondition(e),this.entries.push({type:Xe.ELEMENT_ENTRY,element:e,token:t}),this.length++;}insertElementAfterBookmark(e,t){let n=this.length-1;for(;n>=0&&this.entries[n]!==this.bookmark;n--);this.entries.splice(n+1,0,{type:Xe.ELEMENT_ENTRY,element:e,token:t}),this.length++;}removeEntry(e){for(let t=this.length-1;t>=0;t--)if(this.entries[t]===e){this.entries.splice(t,1),this.length--;break}}clearToLastMarker(){for(;this.length;){const e=this.entries.pop();if(this.length--,e.type===Xe.MARKER_ENTRY)break}}getElementEntryInScopeWithTagName(e){for(let t=this.length-1;t>=0;t--){const n=this.entries[t];if(n.type===Xe.MARKER_ENTRY)return null;if(this.treeAdapter.getTagName(n.element)===e)return n}return null}getElementEntry(e){for(let t=this.length-1;t>=0;t--){const n=this.entries[t];if(n.type===Xe.ELEMENT_ENTRY&&n.element===e)return n}return null}}Xe.MARKER_ENTRY="MARKER_ENTRY",Xe.ELEMENT_ENTRY="ELEMENT_ENTRY";var We=Xe;class Ve{constructor(e){const t={},n=this._getOverriddenMethods(this,t);for(const s of Object.keys(n))"function"==typeof n[s]&&(t[s]=e[s],e[s]=n[s]);}_getOverriddenMethods(){throw new Error("Not implemented")}}Ve.install=function(e,t,n){e.__mixins||(e.__mixins=[]);for(let n=0;n<e.__mixins.length;n++)if(e.__mixins[n].constructor===t)return e.__mixins[n];const s=new t(e,n);return e.__mixins.push(s),s};var je=Ve;var ze=class extends je{constructor(e){super(e),this.preprocessor=e,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.offset=0,this.col=0,this.line=1;}_getOverriddenMethods(e,t){return {advance(){const n=this.pos+1,s=this.html[n];return e.isEol&&(e.isEol=!1,e.line++,e.lineStartPos=n),("\n"===s||"\r"===s&&"\n"!==this.html[n+1])&&(e.isEol=!0),e.col=n-e.lineStartPos+1,e.offset=e.droppedBufferSize+n,t.advance.call(this)},retreat(){t.retreat.call(this),e.isEol=!1,e.col=this.pos-e.lineStartPos+1;},dropParsedChunk(){const n=this.pos;t.dropParsedChunk.call(this);const s=n-this.pos;e.lineStartPos-=s,e.droppedBufferSize+=s,e.offset=e.droppedBufferSize+this.pos;}}}};var qe=class extends je{constructor(e){super(e),this.tokenizer=e,this.posTracker=je.install(e.preprocessor,ze),this.currentAttrLocation=null,this.ctLoc=null;}_getCurrentLocation(){return {startLine:this.posTracker.line,startCol:this.posTracker.col,startOffset:this.posTracker.offset,endLine:-1,endCol:-1,endOffset:-1}}_attachCurrentAttrLocationInfo(){this.currentAttrLocation.endLine=this.posTracker.line,this.currentAttrLocation.endCol=this.posTracker.col,this.currentAttrLocation.endOffset=this.posTracker.offset;const e=this.tokenizer.currentToken,t=this.tokenizer.currentAttr;e.location.attrs||(e.location.attrs=Object.create(null)),e.location.attrs[t.name]=this.currentAttrLocation;}_getOverriddenMethods(e,t){const n={_createStartTagToken(){t._createStartTagToken.call(this),this.currentToken.location=e.ctLoc;},_createEndTagToken(){t._createEndTagToken.call(this),this.currentToken.location=e.ctLoc;},_createCommentToken(){t._createCommentToken.call(this),this.currentToken.location=e.ctLoc;},_createDoctypeToken(n){t._createDoctypeToken.call(this,n),this.currentToken.location=e.ctLoc;},_createCharacterToken(n,s){t._createCharacterToken.call(this,n,s),this.currentCharacterToken.location=e.ctLoc;},_createEOFToken(){t._createEOFToken.call(this),this.currentToken.location=e._getCurrentLocation();},_createAttr(n){t._createAttr.call(this,n),e.currentAttrLocation=e._getCurrentLocation();},_leaveAttrName(n){t._leaveAttrName.call(this,n),e._attachCurrentAttrLocationInfo();},_leaveAttrValue(n){t._leaveAttrValue.call(this,n),e._attachCurrentAttrLocationInfo();},_emitCurrentToken(){const n=this.currentToken.location;this.currentCharacterToken&&(this.currentCharacterToken.location.endLine=n.startLine,this.currentCharacterToken.location.endCol=n.startCol,this.currentCharacterToken.location.endOffset=n.startOffset),this.currentToken.type===Ge.EOF_TOKEN?(n.endLine=n.startLine,n.endCol=n.startCol,n.endOffset=n.startOffset):(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col+1,n.endOffset=e.posTracker.offset+1),t._emitCurrentToken.call(this);},_emitCurrentCharacterToken(){const n=this.currentCharacterToken&&this.currentCharacterToken.location;n&&-1===n.endOffset&&(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col,n.endOffset=e.posTracker.offset),t._emitCurrentCharacterToken.call(this);}};return Object.keys(Ge.MODE).forEach(s=>{const r=Ge.MODE[s];n[r]=function(n){e.ctLoc=e._getCurrentLocation(),t[r].call(this,n);};}),n}};var Je=class extends je{constructor(e,t){super(e),this.onItemPop=t.onItemPop;}_getOverriddenMethods(e,t){return {pop(){e.onItemPop(this.current),t.pop.call(this);},popAllUpToHtmlElement(){for(let t=this.stackTop;t>0;t--)e.onItemPop(this.items[t]);t.popAllUpToHtmlElement.call(this);},remove(n){e.onItemPop(this.current),t.remove.call(this,n);}}}};const Ze=be.TAG_NAMES;var $e=class extends je{constructor(e){super(e),this.parser=e,this.treeAdapter=this.parser.treeAdapter,this.posTracker=null,this.lastStartTagToken=null,this.lastFosterParentingLocation=null,this.currentToken=null;}_setStartLocation(e){let t=null;this.lastStartTagToken&&(t=Object.assign({},this.lastStartTagToken.location),t.startTag=this.lastStartTagToken.location),this.treeAdapter.setNodeSourceCodeLocation(e,t);}_setEndLocation(e,t){const n=this.treeAdapter.getNodeSourceCodeLocation(e);if(n&&t.location){const s=t.location,r=this.treeAdapter.getTagName(e);t.type===Ge.END_TAG_TOKEN&&r===t.tagName?(n.endTag=Object.assign({},s),n.endLine=s.endLine,n.endCol=s.endCol,n.endOffset=s.endOffset):(n.endLine=s.startLine,n.endCol=s.startCol,n.endOffset=s.startOffset);}}_getOverriddenMethods(e,t){return {_bootstrap(n,s){t._bootstrap.call(this,n,s),e.lastStartTagToken=null,e.lastFosterParentingLocation=null,e.currentToken=null;const r=je.install(this.tokenizer,qe);e.posTracker=r.posTracker,je.install(this.openElements,Je,{onItemPop:function(t){e._setEndLocation(t,e.currentToken);}});},_runParsingLoop(n){t._runParsingLoop.call(this,n);for(let t=this.openElements.stackTop;t>=0;t--)e._setEndLocation(this.openElements.items[t],e.currentToken);},_processTokenInForeignContent(n){e.currentToken=n,t._processTokenInForeignContent.call(this,n);},_processToken(n){if(e.currentToken=n,t._processToken.call(this,n),n.type===Ge.END_TAG_TOKEN&&(n.tagName===Ze.HTML||n.tagName===Ze.BODY&&this.openElements.hasInScope(Ze.BODY)))for(let t=this.openElements.stackTop;t>=0;t--){const s=this.openElements.items[t];if(this.treeAdapter.getTagName(s)===n.tagName){e._setEndLocation(s,n);break}}},_setDocumentType(e){t._setDocumentType.call(this,e);const n=this.treeAdapter.getChildNodes(this.document),s=n.length;for(let t=0;t<s;t++){const s=n[t];if(this.treeAdapter.isDocumentTypeNode(s)){this.treeAdapter.setNodeSourceCodeLocation(s,e.location);break}}},_attachElementToTree(n){e._setStartLocation(n),e.lastStartTagToken=null,t._attachElementToTree.call(this,n);},_appendElement(n,s){e.lastStartTagToken=n,t._appendElement.call(this,n,s);},_insertElement(n,s){e.lastStartTagToken=n,t._insertElement.call(this,n,s);},_insertTemplate(n){e.lastStartTagToken=n,t._insertTemplate.call(this,n);const s=this.treeAdapter.getTemplateContent(this.openElements.current);this.treeAdapter.setNodeSourceCodeLocation(s,null);},_insertFakeRootElement(){t._insertFakeRootElement.call(this),this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current,null);},_appendCommentNode(e,n){t._appendCommentNode.call(this,e,n);const s=this.treeAdapter.getChildNodes(n),r=s[s.length-1];this.treeAdapter.setNodeSourceCodeLocation(r,e.location);},_findFosterParentingLocation(){return e.lastFosterParentingLocation=t._findFosterParentingLocation.call(this),e.lastFosterParentingLocation},_insertCharacters(n){t._insertCharacters.call(this,n);const s=this._shouldFosterParentOnInsertion(),r=s&&e.lastFosterParentingLocation.parent||this.openElements.currentTmplContent||this.openElements.current,i=this.treeAdapter.getChildNodes(r),T=s&&e.lastFosterParentingLocation.beforeElement?i.indexOf(e.lastFosterParentingLocation.beforeElement)-1:i.length-1,o=i[T],E=this.treeAdapter.getNodeSourceCodeLocation(o);E?(E.endLine=n.location.endLine,E.endCol=n.location.endCol,E.endOffset=n.location.endOffset):this.treeAdapter.setNodeSourceCodeLocation(o,n.location);}}}};var et=class extends je{constructor(e,t){super(e),this.posTracker=null,this.onParseError=t.onParseError;}_setErrorLocation(e){e.startLine=e.endLine=this.posTracker.line,e.startCol=e.endCol=this.posTracker.col,e.startOffset=e.endOffset=this.posTracker.offset;}_reportError(e){const t={code:e,startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1};this._setErrorLocation(t),this.onParseError(t);}_getOverriddenMethods(e){return {_err(t){e._reportError(t);}}}};var tt=class extends et{constructor(e,t){super(e,t),this.posTracker=je.install(e,ze),this.lastErrOffset=-1;}_reportError(e){this.lastErrOffset!==this.posTracker.offset&&(this.lastErrOffset=this.posTracker.offset,super._reportError(e));}};var nt=class extends et{constructor(e,t){super(e,t);const n=je.install(e.preprocessor,tt,t);this.posTracker=n.posTracker;}};var st=class extends et{constructor(e,t){super(e,t),this.opts=t,this.ctLoc=null,this.locBeforeToken=!1;}_setErrorLocation(e){this.ctLoc&&(e.startLine=this.ctLoc.startLine,e.startCol=this.ctLoc.startCol,e.startOffset=this.ctLoc.startOffset,e.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine,e.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol,e.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset);}_getOverriddenMethods(e,t){return {_bootstrap(n,s){t._bootstrap.call(this,n,s),je.install(this.tokenizer,nt,e.opts),je.install(this.tokenizer,qe);},_processInputToken(n){e.ctLoc=n.location,t._processInputToken.call(this,n);},_err(t,n){e.locBeforeToken=n&&n.beforeToken,e._reportError(t);}}}},rt=Ke((function(e,t){const{DOCUMENT_MODE:n}=be;t.createDocument=function(){return {nodeName:"#document",mode:n.NO_QUIRKS,childNodes:[]}},t.createDocumentFragment=function(){return {nodeName:"#document-fragment",childNodes:[]}},t.createElement=function(e,t,n){return {nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},t.createCommentNode=function(e){return {nodeName:"#comment",data:e,parentNode:null}};const s=function(e){return {nodeName:"#text",value:e,parentNode:null}},r=t.appendChild=function(e,t){e.childNodes.push(t),t.parentNode=e;},i=t.insertBefore=function(e,t,n){const s=e.childNodes.indexOf(n);e.childNodes.splice(s,0,t),t.parentNode=e;};t.setTemplateContent=function(e,t){e.content=t;},t.getTemplateContent=function(e){return e.content},t.setDocumentType=function(e,t,n,s){let i=null;for(let t=0;t<e.childNodes.length;t++)if("#documentType"===e.childNodes[t].nodeName){i=e.childNodes[t];break}i?(i.name=t,i.publicId=n,i.systemId=s):r(e,{nodeName:"#documentType",name:t,publicId:n,systemId:s});},t.setDocumentMode=function(e,t){e.mode=t;},t.getDocumentMode=function(e){return e.mode},t.detachNode=function(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null;}},t.insertText=function(e,t){if(e.childNodes.length){const n=e.childNodes[e.childNodes.length-1];if("#text"===n.nodeName)return void(n.value+=t)}r(e,s(t));},t.insertTextBefore=function(e,t,n){const r=e.childNodes[e.childNodes.indexOf(n)-1];r&&"#text"===r.nodeName?r.value+=t:i(e,s(t),n);},t.adoptAttributes=function(e,t){const n=[];for(let t=0;t<e.attrs.length;t++)n.push(e.attrs[t].name);for(let s=0;s<t.length;s++)-1===n.indexOf(t[s].name)&&e.attrs.push(t[s]);},t.getFirstChild=function(e){return e.childNodes[0]},t.getChildNodes=function(e){return e.childNodes},t.getParentNode=function(e){return e.parentNode},t.getAttrList=function(e){return e.attrs},t.getTagName=function(e){return e.tagName},t.getNamespaceURI=function(e){return e.namespaceURI},t.getTextNodeContent=function(e){return e.value},t.getCommentNodeContent=function(e){return e.data},t.getDocumentTypeNodeName=function(e){return e.name},t.getDocumentTypeNodePublicId=function(e){return e.publicId},t.getDocumentTypeNodeSystemId=function(e){return e.systemId},t.isTextNode=function(e){return "#text"===e.nodeName},t.isCommentNode=function(e){return "#comment"===e.nodeName},t.isDocumentTypeNode=function(e){return "#documentType"===e.nodeName},t.isElementNode=function(e){return !!e.tagName},t.setNodeSourceCodeLocation=function(e,t){e.sourceCodeLocation=t;},t.getNodeSourceCodeLocation=function(e){return e.sourceCodeLocation};}));rt.createDocument,rt.createDocumentFragment,rt.createElement,rt.createCommentNode,rt.appendChild,rt.insertBefore,rt.setTemplateContent,rt.getTemplateContent,rt.setDocumentType,rt.setDocumentMode,rt.getDocumentMode,rt.detachNode,rt.insertText,rt.insertTextBefore,rt.adoptAttributes,rt.getFirstChild,rt.getChildNodes,rt.getParentNode,rt.getAttrList,rt.getTagName,rt.getNamespaceURI,rt.getTextNodeContent,rt.getCommentNodeContent,rt.getDocumentTypeNodeName,rt.getDocumentTypeNodePublicId,rt.getDocumentTypeNodeSystemId,rt.isTextNode,rt.isCommentNode,rt.isDocumentTypeNode,rt.isElementNode,rt.setNodeSourceCodeLocation,rt.getNodeSourceCodeLocation;const{DOCUMENT_MODE:it}=be,Tt=["+//silmaril//dtd html pro v0r11 19970101//en","-//advasoft ltd//dtd html 3.0 aswedit + extensions//en","-//as//dtd html 3.0 aswedit + extensions//en","-//ietf//dtd html 2.0 level 1//en","-//ietf//dtd html 2.0 level 2//en","-//ietf//dtd html 2.0 strict level 1//en","-//ietf//dtd html 2.0 strict level 2//en","-//ietf//dtd html 2.0 strict//en","-//ietf//dtd html 2.0//en","-//ietf//dtd html 2.1e//en","-//ietf//dtd html 3.0//en","-//ietf//dtd html 3.0//en//","-//ietf//dtd html 3.2 final//en","-//ietf//dtd html 3.2//en","-//ietf//dtd html 3//en","-//ietf//dtd html level 0//en","-//ietf//dtd html level 0//en//2.0","-//ietf//dtd html level 1//en","-//ietf//dtd html level 1//en//2.0","-//ietf//dtd html level 2//en","-//ietf//dtd html level 2//en//2.0","-//ietf//dtd html level 3//en","-//ietf//dtd html level 3//en//3.0","-//ietf//dtd html strict level 0//en","-//ietf//dtd html strict level 0//en//2.0","-//ietf//dtd html strict level 1//en","-//ietf//dtd html strict level 1//en//2.0","-//ietf//dtd html strict level 2//en","-//ietf//dtd html strict level 2//en//2.0","-//ietf//dtd html strict level 3//en","-//ietf//dtd html strict level 3//en//3.0","-//ietf//dtd html strict//en","-//ietf//dtd html strict//en//2.0","-//ietf//dtd html strict//en//3.0","-//ietf//dtd html//en","-//ietf//dtd html//en//2.0","-//ietf//dtd html//en//3.0","-//metrius//dtd metrius presentational//en","-//microsoft//dtd internet explorer 2.0 html strict//en","-//microsoft//dtd internet explorer 2.0 html//en","-//microsoft//dtd internet explorer 2.0 tables//en","-//microsoft//dtd internet explorer 3.0 html strict//en","-//microsoft//dtd internet explorer 3.0 html//en","-//microsoft//dtd internet explorer 3.0 tables//en","-//netscape comm. corp.//dtd html//en","-//netscape comm. corp.//dtd strict html//en","-//o'reilly and associates//dtd html 2.0//en","-//o'reilly and associates//dtd html extended 1.0//en","-//spyglass//dtd html 2.0 extended//en","-//sq//dtd html 2.0 hotmetal + extensions//en","-//sun microsystems corp.//dtd hotjava html//en","-//sun microsystems corp.//dtd hotjava strict html//en","-//w3c//dtd html 3 1995-03-24//en","-//w3c//dtd html 3.2 draft//en","-//w3c//dtd html 3.2 final//en","-//w3c//dtd html 3.2//en","-//w3c//dtd html 3.2s draft//en","-//w3c//dtd html 4.0 frameset//en","-//w3c//dtd html 4.0 transitional//en","-//w3c//dtd html experimental 19960712//en","-//w3c//dtd html experimental 970421//en","-//w3c//dtd w3 html//en","-//w3o//dtd w3 html 3.0//en","-//w3o//dtd w3 html 3.0//en//","-//webtechs//dtd mozilla html 2.0//en","-//webtechs//dtd mozilla html//en"],ot=Tt.concat(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),Et=["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"],at=["-//W3C//DTD XHTML 1.0 Frameset//","-//W3C//DTD XHTML 1.0 Transitional//"],_t=at.concat(["-//W3C//DTD HTML 4.01 Frameset//","-//W3C//DTD HTML 4.01 Transitional//"]);function ht(e,t){for(let n=0;n<t.length;n++)if(0===e.indexOf(t[n]))return !0;return !1}var At=function(e){return "html"===e.name&&null===e.publicId&&(null===e.systemId||"about:legacy-compat"===e.systemId)},ct=function(e){if("html"!==e.name)return it.QUIRKS;const t=e.systemId;if(t&&"http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"===t.toLowerCase())return it.QUIRKS;let n=e.publicId;if(null!==n){if(n=n.toLowerCase(),Et.indexOf(n)>-1)return it.QUIRKS;let e=null===t?ot:Tt;if(ht(n,e))return it.QUIRKS;if(e=null===t?at:_t,ht(n,e))return it.LIMITED_QUIRKS}return it.NO_QUIRKS},lt=Ke((function(e,t){const n=be.TAG_NAMES,s=be.NAMESPACES,r=be.ATTRS,i="text/html",T="application/xhtml+xml",o={attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},E={"xlink:actuate":{prefix:"xlink",name:"actuate",namespace:s.XLINK},"xlink:arcrole":{prefix:"xlink",name:"arcrole",namespace:s.XLINK},"xlink:href":{prefix:"xlink",name:"href",namespace:s.XLINK},"xlink:role":{prefix:"xlink",name:"role",namespace:s.XLINK},"xlink:show":{prefix:"xlink",name:"show",namespace:s.XLINK},"xlink:title":{prefix:"xlink",name:"title",namespace:s.XLINK},"xlink:type":{prefix:"xlink",name:"type",namespace:s.XLINK},"xml:base":{prefix:"xml",name:"base",namespace:s.XML},"xml:lang":{prefix:"xml",name:"lang",namespace:s.XML},"xml:space":{prefix:"xml",name:"space",namespace:s.XML},xmlns:{prefix:"",name:"xmlns",namespace:s.XMLNS},"xmlns:xlink":{prefix:"xmlns",name:"xlink",namespace:s.XMLNS}},a=t.SVG_TAG_NAMES_ADJUSTMENT_MAP={altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},_={[n.B]:!0,[n.BIG]:!0,[n.BLOCKQUOTE]:!0,[n.BODY]:!0,[n.BR]:!0,[n.CENTER]:!0,[n.CODE]:!0,[n.DD]:!0,[n.DIV]:!0,[n.DL]:!0,[n.DT]:!0,[n.EM]:!0,[n.EMBED]:!0,[n.H1]:!0,[n.H2]:!0,[n.H3]:!0,[n.H4]:!0,[n.H5]:!0,[n.H6]:!0,[n.HEAD]:!0,[n.HR]:!0,[n.I]:!0,[n.IMG]:!0,[n.LI]:!0,[n.LISTING]:!0,[n.MENU]:!0,[n.META]:!0,[n.NOBR]:!0,[n.OL]:!0,[n.P]:!0,[n.PRE]:!0,[n.RUBY]:!0,[n.S]:!0,[n.SMALL]:!0,[n.SPAN]:!0,[n.STRONG]:!0,[n.STRIKE]:!0,[n.SUB]:!0,[n.SUP]:!0,[n.TABLE]:!0,[n.TT]:!0,[n.U]:!0,[n.UL]:!0,[n.VAR]:!0};t.causesExit=function(e){const t=e.tagName;return !!(t===n.FONT&&(null!==Ge.getTokenAttr(e,r.COLOR)||null!==Ge.getTokenAttr(e,r.SIZE)||null!==Ge.getTokenAttr(e,r.FACE)))||_[t]},t.adjustTokenMathMLAttrs=function(e){for(let t=0;t<e.attrs.length;t++)if("definitionurl"===e.attrs[t].name){e.attrs[t].name="definitionURL";break}},t.adjustTokenSVGAttrs=function(e){for(let t=0;t<e.attrs.length;t++){const n=o[e.attrs[t].name];n&&(e.attrs[t].name=n);}},t.adjustTokenXMLAttrs=function(e){for(let t=0;t<e.attrs.length;t++){const n=E[e.attrs[t].name];n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace);}},t.adjustTokenSVGTagName=function(e){const t=a[e.tagName];t&&(e.tagName=t);},t.isIntegrationPoint=function(e,t,o,E){return !(E&&E!==s.HTML||!function(e,t,o){if(t===s.MATHML&&e===n.ANNOTATION_XML)for(let e=0;e<o.length;e++)if(o[e].name===r.ENCODING){const t=o[e].value.toLowerCase();return t===i||t===T}return t===s.SVG&&(e===n.FOREIGN_OBJECT||e===n.DESC||e===n.TITLE)}(e,t,o))||!(E&&E!==s.MATHML||!function(e,t){return t===s.MATHML&&(e===n.MI||e===n.MO||e===n.MN||e===n.MS||e===n.MTEXT)}(e,t))};}));lt.SVG_TAG_NAMES_ADJUSTMENT_MAP,lt.causesExit,lt.adjustTokenMathMLAttrs,lt.adjustTokenSVGAttrs,lt.adjustTokenXMLAttrs,lt.adjustTokenSVGTagName,lt.isIntegrationPoint;const mt=be.TAG_NAMES,Nt=be.NAMESPACES,pt=be.ATTRS,ut={scriptingEnabled:!0,sourceCodeLocationInfo:!1,onParseError:null,treeAdapter:rt},Ot="IN_TABLE_MODE",St={[mt.TR]:"IN_ROW_MODE",[mt.TBODY]:"IN_TABLE_BODY_MODE",[mt.THEAD]:"IN_TABLE_BODY_MODE",[mt.TFOOT]:"IN_TABLE_BODY_MODE",[mt.CAPTION]:"IN_CAPTION_MODE",[mt.COLGROUP]:"IN_COLUMN_GROUP_MODE",[mt.TABLE]:Ot,[mt.BODY]:"IN_BODY_MODE",[mt.FRAMESET]:"IN_FRAMESET_MODE"},Ct={[mt.CAPTION]:Ot,[mt.COLGROUP]:Ot,[mt.TBODY]:Ot,[mt.TFOOT]:Ot,[mt.THEAD]:Ot,[mt.COL]:"IN_COLUMN_GROUP_MODE",[mt.TR]:"IN_TABLE_BODY_MODE",[mt.TD]:"IN_ROW_MODE",[mt.TH]:"IN_ROW_MODE"},dt={INITIAL_MODE:{[Ge.CHARACTER_TOKEN]:Kt,[Ge.NULL_CHARACTER_TOKEN]:Kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:kt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:function(e,t){e._setDocumentType(t);const n=t.forceQuirks?be.DOCUMENT_MODE.QUIRKS:ct(t);At(t)||e._err(ie);e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode="BEFORE_HTML_MODE";},[Ge.START_TAG_TOKEN]:Kt,[Ge.END_TAG_TOKEN]:Kt,[Ge.EOF_TOKEN]:Kt},BEFORE_HTML_MODE:{[Ge.CHARACTER_TOKEN]:bt,[Ge.NULL_CHARACTER_TOKEN]:bt,[Ge.WHITESPACE_CHARACTER_TOKEN]:kt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){t.tagName===mt.HTML?(e._insertElement(t,Nt.HTML),e.insertionMode="BEFORE_HEAD_MODE"):bt(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n!==mt.HTML&&n!==mt.HEAD&&n!==mt.BODY&&n!==mt.BR||bt(e,t);},[Ge.EOF_TOKEN]:bt},BEFORE_HEAD_MODE:{[Ge.CHARACTER_TOKEN]:Yt,[Ge.NULL_CHARACTER_TOKEN]:Yt,[Ge.WHITESPACE_CHARACTER_TOKEN]:kt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:Ht,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.HEAD?(e._insertElement(t,Nt.HTML),e.headElement=e.openElements.current,e.insertionMode="IN_HEAD_MODE"):Yt(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HEAD||n===mt.BODY||n===mt.HTML||n===mt.BR?Yt(e,t):e._err(Ee);},[Ge.EOF_TOKEN]:Yt},IN_HEAD_MODE:{[Ge.CHARACTER_TOKEN]:yt,[Ge.NULL_CHARACTER_TOKEN]:yt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:Ht,[Ge.START_TAG_TOKEN]:xt,[Ge.END_TAG_TOKEN]:vt,[Ge.EOF_TOKEN]:yt},IN_HEAD_NO_SCRIPT_MODE:{[Ge.CHARACTER_TOKEN]:wt,[Ge.NULL_CHARACTER_TOKEN]:wt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:Ht,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.BASEFONT||n===mt.BGSOUND||n===mt.HEAD||n===mt.LINK||n===mt.META||n===mt.NOFRAMES||n===mt.STYLE?xt(e,t):n===mt.NOSCRIPT?e._err(le):wt(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.NOSCRIPT?(e.openElements.pop(),e.insertionMode="IN_HEAD_MODE"):n===mt.BR?wt(e,t):e._err(Ee);},[Ge.EOF_TOKEN]:wt},AFTER_HEAD_MODE:{[Ge.CHARACTER_TOKEN]:Qt,[Ge.NULL_CHARACTER_TOKEN]:Qt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:Ht,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.BODY?(e._insertElement(t,Nt.HTML),e.framesetOk=!1,e.insertionMode="IN_BODY_MODE"):n===mt.FRAMESET?(e._insertElement(t,Nt.HTML),e.insertionMode="IN_FRAMESET_MODE"):n===mt.BASE||n===mt.BASEFONT||n===mt.BGSOUND||n===mt.LINK||n===mt.META||n===mt.NOFRAMES||n===mt.SCRIPT||n===mt.STYLE||n===mt.TEMPLATE||n===mt.TITLE?(e._err(Ae),e.openElements.push(e.headElement),xt(e,t),e.openElements.remove(e.headElement)):n===mt.HEAD?e._err(ce):Qt(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.BODY||n===mt.HTML||n===mt.BR?Qt(e,t):n===mt.TEMPLATE?vt(e,t):e._err(Ee);},[Ge.EOF_TOKEN]:Qt},IN_BODY_MODE:{[Ge.CHARACTER_TOKEN]:Wt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Xt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:sn,[Ge.END_TAG_TOKEN]:En,[Ge.EOF_TOKEN]:an},TEXT_MODE:{[Ge.CHARACTER_TOKEN]:Bt,[Ge.NULL_CHARACTER_TOKEN]:Bt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:kt,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:kt,[Ge.END_TAG_TOKEN]:function(e,t){t.tagName===mt.SCRIPT&&(e.pendingScript=e.openElements.current);e.openElements.pop(),e.insertionMode=e.originalInsertionMode;},[Ge.EOF_TOKEN]:function(e,t){e._err(me),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e._processToken(t);}},[Ot]:{[Ge.CHARACTER_TOKEN]:_n,[Ge.NULL_CHARACTER_TOKEN]:_n,[Ge.WHITESPACE_CHARACTER_TOKEN]:_n,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:hn,[Ge.END_TAG_TOKEN]:An,[Ge.EOF_TOKEN]:an},IN_TABLE_TEXT_MODE:{[Ge.CHARACTER_TOKEN]:function(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0;},[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:function(e,t){e.pendingCharacterTokens.push(t);},[Ge.COMMENT_TOKEN]:ln,[Ge.DOCTYPE_TOKEN]:ln,[Ge.START_TAG_TOKEN]:ln,[Ge.END_TAG_TOKEN]:ln,[Ge.EOF_TOKEN]:ln},IN_CAPTION_MODE:{[Ge.CHARACTER_TOKEN]:Wt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Xt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.CAPTION||n===mt.COL||n===mt.COLGROUP||n===mt.TBODY||n===mt.TD||n===mt.TFOOT||n===mt.TH||n===mt.THEAD||n===mt.TR?e.openElements.hasInTableScope(mt.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(mt.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=Ot,e._processToken(t)):sn(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.CAPTION||n===mt.TABLE?e.openElements.hasInTableScope(mt.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(mt.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=Ot,n===mt.TABLE&&e._processToken(t)):n!==mt.BODY&&n!==mt.COL&&n!==mt.COLGROUP&&n!==mt.HTML&&n!==mt.TBODY&&n!==mt.TD&&n!==mt.TFOOT&&n!==mt.TH&&n!==mt.THEAD&&n!==mt.TR&&En(e,t);},[Ge.EOF_TOKEN]:an},IN_COLUMN_GROUP_MODE:{[Ge.CHARACTER_TOKEN]:mn,[Ge.NULL_CHARACTER_TOKEN]:mn,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.COL?(e._appendElement(t,Nt.HTML),t.ackSelfClosing=!0):n===mt.TEMPLATE?xt(e,t):mn(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.COLGROUP?e.openElements.currentTagName===mt.COLGROUP&&(e.openElements.pop(),e.insertionMode=Ot):n===mt.TEMPLATE?vt(e,t):n!==mt.COL&&mn(e,t);},[Ge.EOF_TOKEN]:an},IN_TABLE_BODY_MODE:{[Ge.CHARACTER_TOKEN]:_n,[Ge.NULL_CHARACTER_TOKEN]:_n,[Ge.WHITESPACE_CHARACTER_TOKEN]:_n,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.TR?(e.openElements.clearBackToTableBodyContext(),e._insertElement(t,Nt.HTML),e.insertionMode="IN_ROW_MODE"):n===mt.TH||n===mt.TD?(e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(mt.TR),e.insertionMode="IN_ROW_MODE",e._processToken(t)):n===mt.CAPTION||n===mt.COL||n===mt.COLGROUP||n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=Ot,e._processToken(t)):hn(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD?e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=Ot):n===mt.TABLE?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=Ot,e._processToken(t)):(n!==mt.BODY&&n!==mt.CAPTION&&n!==mt.COL&&n!==mt.COLGROUP||n!==mt.HTML&&n!==mt.TD&&n!==mt.TH&&n!==mt.TR)&&An(e,t);},[Ge.EOF_TOKEN]:an},IN_ROW_MODE:{[Ge.CHARACTER_TOKEN]:_n,[Ge.NULL_CHARACTER_TOKEN]:_n,[Ge.WHITESPACE_CHARACTER_TOKEN]:_n,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.TH||n===mt.TD?(e.openElements.clearBackToTableRowContext(),e._insertElement(t,Nt.HTML),e.insertionMode="IN_CELL_MODE",e.activeFormattingElements.insertMarker()):n===mt.CAPTION||n===mt.COL||n===mt.COLGROUP||n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD||n===mt.TR?e.openElements.hasInTableScope(mt.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode="IN_TABLE_BODY_MODE",e._processToken(t)):hn(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.TR?e.openElements.hasInTableScope(mt.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode="IN_TABLE_BODY_MODE"):n===mt.TABLE?e.openElements.hasInTableScope(mt.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode="IN_TABLE_BODY_MODE",e._processToken(t)):n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD?(e.openElements.hasInTableScope(n)||e.openElements.hasInTableScope(mt.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode="IN_TABLE_BODY_MODE",e._processToken(t)):(n!==mt.BODY&&n!==mt.CAPTION&&n!==mt.COL&&n!==mt.COLGROUP||n!==mt.HTML&&n!==mt.TD&&n!==mt.TH)&&An(e,t);},[Ge.EOF_TOKEN]:an},IN_CELL_MODE:{[Ge.CHARACTER_TOKEN]:Wt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Xt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.CAPTION||n===mt.COL||n===mt.COLGROUP||n===mt.TBODY||n===mt.TD||n===mt.TFOOT||n===mt.TH||n===mt.THEAD||n===mt.TR?(e.openElements.hasInTableScope(mt.TD)||e.openElements.hasInTableScope(mt.TH))&&(e._closeTableCell(),e._processToken(t)):sn(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.TD||n===mt.TH?e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode="IN_ROW_MODE"):n===mt.TABLE||n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD||n===mt.TR?e.openElements.hasInTableScope(n)&&(e._closeTableCell(),e._processToken(t)):n!==mt.BODY&&n!==mt.CAPTION&&n!==mt.COL&&n!==mt.COLGROUP&&n!==mt.HTML&&En(e,t);},[Ge.EOF_TOKEN]:an},IN_SELECT_MODE:{[Ge.CHARACTER_TOKEN]:Bt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:Nn,[Ge.END_TAG_TOKEN]:pn,[Ge.EOF_TOKEN]:an},IN_SELECT_IN_TABLE_MODE:{[Ge.CHARACTER_TOKEN]:Bt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.CAPTION||n===mt.TABLE||n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD||n===mt.TR||n===mt.TD||n===mt.TH?(e.openElements.popUntilTagNamePopped(mt.SELECT),e._resetInsertionMode(),e._processToken(t)):Nn(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.CAPTION||n===mt.TABLE||n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD||n===mt.TR||n===mt.TD||n===mt.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(mt.SELECT),e._resetInsertionMode(),e._processToken(t)):pn(e,t);},[Ge.EOF_TOKEN]:an},IN_TEMPLATE_MODE:{[Ge.CHARACTER_TOKEN]:Wt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Xt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;if(n===mt.BASE||n===mt.BASEFONT||n===mt.BGSOUND||n===mt.LINK||n===mt.META||n===mt.NOFRAMES||n===mt.SCRIPT||n===mt.STYLE||n===mt.TEMPLATE||n===mt.TITLE)xt(e,t);else{const s=Ct[n]||"IN_BODY_MODE";e._popTmplInsertionMode(),e._pushTmplInsertionMode(s),e.insertionMode=s,e._processToken(t);}},[Ge.END_TAG_TOKEN]:function(e,t){t.tagName===mt.TEMPLATE&&vt(e,t);},[Ge.EOF_TOKEN]:un},AFTER_BODY_MODE:{[Ge.CHARACTER_TOKEN]:On,[Ge.NULL_CHARACTER_TOKEN]:On,[Ge.WHITESPACE_CHARACTER_TOKEN]:Xt,[Ge.COMMENT_TOKEN]:function(e,t){e._appendCommentNode(t,e.openElements.items[0]);},[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){t.tagName===mt.HTML?sn(e,t):On(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){t.tagName===mt.HTML?e.fragmentContext||(e.insertionMode="AFTER_AFTER_BODY_MODE"):On(e,t);},[Ge.EOF_TOKEN]:Gt},IN_FRAMESET_MODE:{[Ge.CHARACTER_TOKEN]:kt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.FRAMESET?e._insertElement(t,Nt.HTML):n===mt.FRAME?(e._appendElement(t,Nt.HTML),t.ackSelfClosing=!0):n===mt.NOFRAMES&&xt(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){t.tagName!==mt.FRAMESET||e.openElements.isRootHtmlElementCurrent()||(e.openElements.pop(),e.fragmentContext||e.openElements.currentTagName===mt.FRAMESET||(e.insertionMode="AFTER_FRAMESET_MODE"));},[Ge.EOF_TOKEN]:Gt},AFTER_FRAMESET_MODE:{[Ge.CHARACTER_TOKEN]:kt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Bt,[Ge.COMMENT_TOKEN]:Ut,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.NOFRAMES&&xt(e,t);},[Ge.END_TAG_TOKEN]:function(e,t){t.tagName===mt.HTML&&(e.insertionMode="AFTER_AFTER_FRAMESET_MODE");},[Ge.EOF_TOKEN]:Gt},AFTER_AFTER_BODY_MODE:{[Ge.CHARACTER_TOKEN]:Sn,[Ge.NULL_CHARACTER_TOKEN]:Sn,[Ge.WHITESPACE_CHARACTER_TOKEN]:Xt,[Ge.COMMENT_TOKEN]:Ft,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){t.tagName===mt.HTML?sn(e,t):Sn(e,t);},[Ge.END_TAG_TOKEN]:Sn,[Ge.EOF_TOKEN]:Gt},AFTER_AFTER_FRAMESET_MODE:{[Ge.CHARACTER_TOKEN]:kt,[Ge.NULL_CHARACTER_TOKEN]:kt,[Ge.WHITESPACE_CHARACTER_TOKEN]:Xt,[Ge.COMMENT_TOKEN]:Ft,[Ge.DOCTYPE_TOKEN]:kt,[Ge.START_TAG_TOKEN]:function(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.NOFRAMES&&xt(e,t);},[Ge.END_TAG_TOKEN]:kt,[Ge.EOF_TOKEN]:Gt}};var Rt=class{constructor(e){this.options=function(e,t){return [e,t=t||Object.create(null)].reduce((e,t)=>(Object.keys(t).forEach(n=>{e[n]=t[n];}),e),Object.create(null))}(ut,e),this.treeAdapter=this.options.treeAdapter,this.pendingScript=null,this.options.sourceCodeLocationInfo&&je.install(this,$e),this.options.onParseError&&je.install(this,st,{onParseError:this.options.onParseError});}parse(e){const t=this.treeAdapter.createDocument();return this._bootstrap(t,null),this.tokenizer.write(e,!0),this._runParsingLoop(null),t}parseFragment(e,t){t||(t=this.treeAdapter.createElement(mt.TEMPLATE,Nt.HTML,[]));const n=this.treeAdapter.createElement("documentmock",Nt.HTML,[]);this._bootstrap(n,t),this.treeAdapter.getTagName(t)===mt.TEMPLATE&&this._pushTmplInsertionMode("IN_TEMPLATE_MODE"),this._initTokenizerForFragmentParsing(),this._insertFakeRootElement(),this._resetInsertionMode(),this._findFormInFragmentContext(),this.tokenizer.write(e,!0),this._runParsingLoop(null);const s=this.treeAdapter.getFirstChild(n),r=this.treeAdapter.createDocumentFragment();return this._adoptNodes(s,r),r}_bootstrap(e,t){this.tokenizer=new Ge(this.options),this.stopped=!1,this.insertionMode="INITIAL_MODE",this.originalInsertionMode="",this.document=e,this.fragmentContext=t,this.headElement=null,this.formElement=null,this.openElements=new Qe(this.document,this.treeAdapter),this.activeFormattingElements=new We(this.treeAdapter),this.tmplInsertionModeStack=[],this.tmplInsertionModeStackTop=-1,this.currentTmplInsertionMode=null,this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1;}_err(){}_runParsingLoop(e){for(;!this.stopped;){this._setupTokenizerCDATAMode();const t=this.tokenizer.getNextToken();if(t.type===Ge.HIBERNATION_TOKEN)break;if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.type===Ge.WHITESPACE_CHARACTER_TOKEN&&"\n"===t.chars[0])){if(1===t.chars.length)continue;t.chars=t.chars.substr(1);}if(this._processInputToken(t),e&&this.pendingScript)break}}runParsingLoopForCurrentChunk(e,t){if(this._runParsingLoop(t),t&&this.pendingScript){const e=this.pendingScript;return this.pendingScript=null,void t(e)}e&&e();}_setupTokenizerCDATAMode(){const e=this._getAdjustedCurrentElement();this.tokenizer.allowCDATA=e&&e!==this.document&&this.treeAdapter.getNamespaceURI(e)!==Nt.HTML&&!this._isIntegrationPoint(e);}_switchToTextParsing(e,t){this._insertElement(e,Nt.HTML),this.tokenizer.state=t,this.originalInsertionMode=this.insertionMode,this.insertionMode="TEXT_MODE";}switchToPlaintextParsing(){this.insertionMode="TEXT_MODE",this.originalInsertionMode="IN_BODY_MODE",this.tokenizer.state=Ge.MODE.PLAINTEXT;}_getAdjustedCurrentElement(){return 0===this.openElements.stackTop&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let e=this.fragmentContext;do{if(this.treeAdapter.getTagName(e)===mt.FORM){this.formElement=e;break}e=this.treeAdapter.getParentNode(e);}while(e)}_initTokenizerForFragmentParsing(){if(this.treeAdapter.getNamespaceURI(this.fragmentContext)===Nt.HTML){const e=this.treeAdapter.getTagName(this.fragmentContext);e===mt.TITLE||e===mt.TEXTAREA?this.tokenizer.state=Ge.MODE.RCDATA:e===mt.STYLE||e===mt.XMP||e===mt.IFRAME||e===mt.NOEMBED||e===mt.NOFRAMES||e===mt.NOSCRIPT?this.tokenizer.state=Ge.MODE.RAWTEXT:e===mt.SCRIPT?this.tokenizer.state=Ge.MODE.SCRIPT_DATA:e===mt.PLAINTEXT&&(this.tokenizer.state=Ge.MODE.PLAINTEXT);}}_setDocumentType(e){const t=e.name||"",n=e.publicId||"",s=e.systemId||"";this.treeAdapter.setDocumentType(this.document,t,n,s);}_attachElementToTree(e){if(this._shouldFosterParentOnInsertion())this._fosterParentElement(e);else{const t=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.appendChild(t,e);}}_appendElement(e,t){const n=this.treeAdapter.createElement(e.tagName,t,e.attrs);this._attachElementToTree(n);}_insertElement(e,t){const n=this.treeAdapter.createElement(e.tagName,t,e.attrs);this._attachElementToTree(n),this.openElements.push(n);}_insertFakeElement(e){const t=this.treeAdapter.createElement(e,Nt.HTML,[]);this._attachElementToTree(t),this.openElements.push(t);}_insertTemplate(e){const t=this.treeAdapter.createElement(e.tagName,Nt.HTML,e.attrs),n=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(t,n),this._attachElementToTree(t),this.openElements.push(t);}_insertFakeRootElement(){const e=this.treeAdapter.createElement(mt.HTML,Nt.HTML,[]);this.treeAdapter.appendChild(this.openElements.current,e),this.openElements.push(e);}_appendCommentNode(e,t){const n=this.treeAdapter.createCommentNode(e.data);this.treeAdapter.appendChild(t,n);}_insertCharacters(e){if(this._shouldFosterParentOnInsertion())this._fosterParentText(e.chars);else{const t=this.openElements.currentTmplContent||this.openElements.current;this.treeAdapter.insertText(t,e.chars);}}_adoptNodes(e,t){for(let n=this.treeAdapter.getFirstChild(e);n;n=this.treeAdapter.getFirstChild(e))this.treeAdapter.detachNode(n),this.treeAdapter.appendChild(t,n);}_shouldProcessTokenInForeignContent(e){const t=this._getAdjustedCurrentElement();if(!t||t===this.document)return !1;const n=this.treeAdapter.getNamespaceURI(t);if(n===Nt.HTML)return !1;if(this.treeAdapter.getTagName(t)===mt.ANNOTATION_XML&&n===Nt.MATHML&&e.type===Ge.START_TAG_TOKEN&&e.tagName===mt.SVG)return !1;const s=e.type===Ge.CHARACTER_TOKEN||e.type===Ge.NULL_CHARACTER_TOKEN||e.type===Ge.WHITESPACE_CHARACTER_TOKEN;return (!(e.type===Ge.START_TAG_TOKEN&&e.tagName!==mt.MGLYPH&&e.tagName!==mt.MALIGNMARK)&&!s||!this._isIntegrationPoint(t,Nt.MATHML))&&((e.type!==Ge.START_TAG_TOKEN&&!s||!this._isIntegrationPoint(t,Nt.HTML))&&e.type!==Ge.EOF_TOKEN)}_processToken(e){dt[this.insertionMode][e.type](this,e);}_processTokenInBodyMode(e){dt.IN_BODY_MODE[e.type](this,e);}_processTokenInForeignContent(e){e.type===Ge.CHARACTER_TOKEN?function(e,t){e._insertCharacters(t),e.framesetOk=!1;}(this,e):e.type===Ge.NULL_CHARACTER_TOKEN?function(e,t){t.chars=n,e._insertCharacters(t);}(this,e):e.type===Ge.WHITESPACE_CHARACTER_TOKEN?Bt(this,e):e.type===Ge.COMMENT_TOKEN?Ut(this,e):e.type===Ge.START_TAG_TOKEN?function(e,t){if(lt.causesExit(t)&&!e.fragmentContext){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==Nt.HTML&&!e._isIntegrationPoint(e.openElements.current);)e.openElements.pop();e._processToken(t);}else{const n=e._getAdjustedCurrentElement(),s=e.treeAdapter.getNamespaceURI(n);s===Nt.MATHML?lt.adjustTokenMathMLAttrs(t):s===Nt.SVG&&(lt.adjustTokenSVGTagName(t),lt.adjustTokenSVGAttrs(t)),lt.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,s):e._insertElement(t,s),t.ackSelfClosing=!0;}}(this,e):e.type===Ge.END_TAG_TOKEN&&function(e,t){for(let n=e.openElements.stackTop;n>0;n--){const s=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(s)===Nt.HTML){e._processToken(t);break}if(e.treeAdapter.getTagName(s).toLowerCase()===t.tagName){e.openElements.popUntilElementPopped(s);break}}}(this,e);}_processInputToken(e){this._shouldProcessTokenInForeignContent(e)?this._processTokenInForeignContent(e):this._processToken(e),e.type===Ge.START_TAG_TOKEN&&e.selfClosing&&!e.ackSelfClosing&&this._err(c);}_isIntegrationPoint(e,t){const n=this.treeAdapter.getTagName(e),s=this.treeAdapter.getNamespaceURI(e),r=this.treeAdapter.getAttrList(e);return lt.isIntegrationPoint(n,s,r,t)}_reconstructActiveFormattingElements(){const e=this.activeFormattingElements.length;if(e){let t=e,n=null;do{if(t--,n=this.activeFormattingElements.entries[t],n.type===We.MARKER_ENTRY||this.openElements.contains(n.element)){t++;break}}while(t>0);for(let s=t;s<e;s++)n=this.activeFormattingElements.entries[s],this._insertElement(n.token,this.treeAdapter.getNamespaceURI(n.element)),n.element=this.openElements.current;}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode="IN_ROW_MODE";}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(mt.P),this.openElements.popUntilTagNamePopped(mt.P);}_resetInsertionMode(){for(let e=this.openElements.stackTop,t=!1;e>=0;e--){let n=this.openElements.items[e];0===e&&(t=!0,this.fragmentContext&&(n=this.fragmentContext));const s=this.treeAdapter.getTagName(n),r=St[s];if(r){this.insertionMode=r;break}if(!(t||s!==mt.TD&&s!==mt.TH)){this.insertionMode="IN_CELL_MODE";break}if(!t&&s===mt.HEAD){this.insertionMode="IN_HEAD_MODE";break}if(s===mt.SELECT){this._resetInsertionModeForSelect(e);break}if(s===mt.TEMPLATE){this.insertionMode=this.currentTmplInsertionMode;break}if(s===mt.HTML){this.insertionMode=this.headElement?"AFTER_HEAD_MODE":"BEFORE_HEAD_MODE";break}if(t){this.insertionMode="IN_BODY_MODE";break}}}_resetInsertionModeForSelect(e){if(e>0)for(let t=e-1;t>0;t--){const e=this.openElements.items[t],n=this.treeAdapter.getTagName(e);if(n===mt.TEMPLATE)break;if(n===mt.TABLE)return void(this.insertionMode="IN_SELECT_IN_TABLE_MODE")}this.insertionMode="IN_SELECT_MODE";}_pushTmplInsertionMode(e){this.tmplInsertionModeStack.push(e),this.tmplInsertionModeStackTop++,this.currentTmplInsertionMode=e;}_popTmplInsertionMode(){this.tmplInsertionModeStack.pop(),this.tmplInsertionModeStackTop--,this.currentTmplInsertionMode=this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];}_isElementCausesFosterParenting(e){const t=this.treeAdapter.getTagName(e);return t===mt.TABLE||t===mt.TBODY||t===mt.TFOOT||t===mt.THEAD||t===mt.TR}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this._isElementCausesFosterParenting(this.openElements.current)}_findFosterParentingLocation(){const e={parent:null,beforeElement:null};for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t],s=this.treeAdapter.getTagName(n),r=this.treeAdapter.getNamespaceURI(n);if(s===mt.TEMPLATE&&r===Nt.HTML){e.parent=this.treeAdapter.getTemplateContent(n);break}if(s===mt.TABLE){e.parent=this.treeAdapter.getParentNode(n),e.parent?e.beforeElement=n:e.parent=this.openElements.items[t-1];break}}return e.parent||(e.parent=this.openElements.items[0]),e}_fosterParentElement(e){const t=this._findFosterParentingLocation();t.beforeElement?this.treeAdapter.insertBefore(t.parent,e,t.beforeElement):this.treeAdapter.appendChild(t.parent,e);}_fosterParentText(e){const t=this._findFosterParentingLocation();t.beforeElement?this.treeAdapter.insertTextBefore(t.parent,e,t.beforeElement):this.treeAdapter.insertText(t.parent,e);}_isSpecialElement(e){const t=this.treeAdapter.getTagName(e),n=this.treeAdapter.getNamespaceURI(e);return be.SPECIAL_ELEMENTS[n][t]}};function It(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagName)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):on(e,t),n}function ft(e,t){let n=null;for(let s=e.openElements.stackTop;s>=0;s--){const r=e.openElements.items[s];if(r===t.element)break;e._isSpecialElement(r)&&(n=r);}return n||(e.openElements.popUntilElementPopped(t.element),e.activeFormattingElements.removeEntry(t)),n}function Mt(e,t,n){let s=t,r=e.openElements.getCommonAncestor(t);for(let i=0,T=r;T!==n;i++,T=r){r=e.openElements.getCommonAncestor(T);const n=e.activeFormattingElements.getElementEntry(T),o=n&&i>=3;!n||o?(o&&e.activeFormattingElements.removeEntry(n),e.openElements.remove(T)):(T=Lt(e,n),s===t&&(e.activeFormattingElements.bookmark=n),e.treeAdapter.detachNode(s),e.treeAdapter.appendChild(T,s),s=T);}return s}function Lt(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),s=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,s),t.element=s,s}function Dt(e,t,n){if(e._isElementCausesFosterParenting(t))e._fosterParentElement(n);else{const s=e.treeAdapter.getTagName(t),r=e.treeAdapter.getNamespaceURI(t);s===mt.TEMPLATE&&r===Nt.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n);}}function gt(e,t,n){const s=e.treeAdapter.getNamespaceURI(n.element),r=n.token,i=e.treeAdapter.createElement(r.tagName,s,r.attrs);e._adoptNodes(t,i),e.treeAdapter.appendChild(t,i),e.activeFormattingElements.insertElementAfterBookmark(i,n.token),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,i);}function Pt(e,t){let n;for(let s=0;s<8&&(n=It(e,t),n);s++){const t=ft(e,n);if(!t)break;e.activeFormattingElements.bookmark=n;const s=Mt(e,t,n.element),r=e.openElements.getCommonAncestor(n.element);e.treeAdapter.detachNode(s),Dt(e,r,s),gt(e,t,n);}}function kt(){}function Ht(e){e._err(oe);}function Ut(e,t){e._appendCommentNode(t,e.openElements.currentTmplContent||e.openElements.current);}function Ft(e,t){e._appendCommentNode(t,e.document);}function Bt(e,t){e._insertCharacters(t);}function Gt(e){e.stopped=!0;}function Kt(e,t){e._err(Te,{beforeToken:!0}),e.treeAdapter.setDocumentMode(e.document,be.DOCUMENT_MODE.QUIRKS),e.insertionMode="BEFORE_HTML_MODE",e._processToken(t);}function bt(e,t){e._insertFakeRootElement(),e.insertionMode="BEFORE_HEAD_MODE",e._processToken(t);}function Yt(e,t){e._insertFakeElement(mt.HEAD),e.headElement=e.openElements.current,e.insertionMode="IN_HEAD_MODE",e._processToken(t);}function xt(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.BASE||n===mt.BASEFONT||n===mt.BGSOUND||n===mt.LINK||n===mt.META?(e._appendElement(t,Nt.HTML),t.ackSelfClosing=!0):n===mt.TITLE?e._switchToTextParsing(t,Ge.MODE.RCDATA):n===mt.NOSCRIPT?e.options.scriptingEnabled?e._switchToTextParsing(t,Ge.MODE.RAWTEXT):(e._insertElement(t,Nt.HTML),e.insertionMode="IN_HEAD_NO_SCRIPT_MODE"):n===mt.NOFRAMES||n===mt.STYLE?e._switchToTextParsing(t,Ge.MODE.RAWTEXT):n===mt.SCRIPT?e._switchToTextParsing(t,Ge.MODE.SCRIPT_DATA):n===mt.TEMPLATE?(e._insertTemplate(t,Nt.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode="IN_TEMPLATE_MODE",e._pushTmplInsertionMode("IN_TEMPLATE_MODE")):n===mt.HEAD?e._err(ce):yt(e,t);}function vt(e,t){const n=t.tagName;n===mt.HEAD?(e.openElements.pop(),e.insertionMode="AFTER_HEAD_MODE"):n===mt.BODY||n===mt.BR||n===mt.HTML?yt(e,t):n===mt.TEMPLATE&&e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagName!==mt.TEMPLATE&&e._err(ae),e.openElements.popUntilTagNamePopped(mt.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e._popTmplInsertionMode(),e._resetInsertionMode()):e._err(Ee);}function yt(e,t){e.openElements.pop(),e.insertionMode="AFTER_HEAD_MODE",e._processToken(t);}function wt(e,t){const n=t.type===Ge.EOF_TOKEN?he:_e;e._err(n),e.openElements.pop(),e.insertionMode="IN_HEAD_MODE",e._processToken(t);}function Qt(e,t){e._insertFakeElement(mt.BODY),e.insertionMode="IN_BODY_MODE",e._processToken(t);}function Xt(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t);}function Wt(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1;}function Vt(e,t){e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._insertElement(t,Nt.HTML);}function jt(e,t){e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._insertElement(t,Nt.HTML),e.skipNextNewLine=!0,e.framesetOk=!1;}function zt(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Nt.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t);}function qt(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Nt.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1;}function Jt(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,Nt.HTML),e.framesetOk=!1,t.ackSelfClosing=!0;}function Zt(e,t){e._appendElement(t,Nt.HTML),t.ackSelfClosing=!0;}function $t(e,t){e._switchToTextParsing(t,Ge.MODE.RAWTEXT);}function en(e,t){e.openElements.currentTagName===mt.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,Nt.HTML);}function tn(e,t){e.openElements.hasInScope(mt.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,Nt.HTML);}function nn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Nt.HTML);}function sn(e,t){const n=t.tagName;switch(n.length){case 1:n===mt.I||n===mt.S||n===mt.B||n===mt.U?zt(e,t):n===mt.P?Vt(e,t):n===mt.A?function(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(mt.A);n&&(Pt(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,Nt.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t);}(e,t):nn(e,t);break;case 2:n===mt.DL||n===mt.OL||n===mt.UL?Vt(e,t):n===mt.H1||n===mt.H2||n===mt.H3||n===mt.H4||n===mt.H5||n===mt.H6?function(e,t){e.openElements.hasInButtonScope(mt.P)&&e._closePElement();const n=e.openElements.currentTagName;n!==mt.H1&&n!==mt.H2&&n!==mt.H3&&n!==mt.H4&&n!==mt.H5&&n!==mt.H6||e.openElements.pop(),e._insertElement(t,Nt.HTML);}(e,t):n===mt.LI||n===mt.DD||n===mt.DT?function(e,t){e.framesetOk=!1;const n=t.tagName;for(let t=e.openElements.stackTop;t>=0;t--){const s=e.openElements.items[t],r=e.treeAdapter.getTagName(s);let i=null;if(n===mt.LI&&r===mt.LI?i=mt.LI:n!==mt.DD&&n!==mt.DT||r!==mt.DD&&r!==mt.DT||(i=r),i){e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i);break}if(r!==mt.ADDRESS&&r!==mt.DIV&&r!==mt.P&&e._isSpecialElement(s))break}e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._insertElement(t,Nt.HTML);}(e,t):n===mt.EM||n===mt.TT?zt(e,t):n===mt.BR?Jt(e,t):n===mt.HR?function(e,t){e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._appendElement(t,Nt.HTML),e.framesetOk=!1,e.ackSelfClosing=!0;}(e,t):n===mt.RB?tn(e,t):n===mt.RT||n===mt.RP?function(e,t){e.openElements.hasInScope(mt.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(mt.RTC),e._insertElement(t,Nt.HTML);}(e,t):n!==mt.TH&&n!==mt.TD&&n!==mt.TR&&nn(e,t);break;case 3:n===mt.DIV||n===mt.DIR||n===mt.NAV?Vt(e,t):n===mt.PRE?jt(e,t):n===mt.BIG?zt(e,t):n===mt.IMG||n===mt.WBR?Jt(e,t):n===mt.XMP?function(e,t){e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,Ge.MODE.RAWTEXT);}(e,t):n===mt.SVG?function(e,t){e._reconstructActiveFormattingElements(),lt.adjustTokenSVGAttrs(t),lt.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,Nt.SVG):e._insertElement(t,Nt.SVG),t.ackSelfClosing=!0;}(e,t):n===mt.RTC?tn(e,t):n!==mt.COL&&nn(e,t);break;case 4:n===mt.HTML?function(e,t){0===e.openElements.tmplCount&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs);}(e,t):n===mt.BASE||n===mt.LINK||n===mt.META?xt(e,t):n===mt.BODY?function(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&0===e.openElements.tmplCount&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs));}(e,t):n===mt.MAIN||n===mt.MENU?Vt(e,t):n===mt.FORM?function(e,t){const n=e.openElements.tmplCount>0;e.formElement&&!n||(e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._insertElement(t,Nt.HTML),n||(e.formElement=e.openElements.current));}(e,t):n===mt.CODE||n===mt.FONT?zt(e,t):n===mt.NOBR?function(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(mt.NOBR)&&(Pt(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,Nt.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t);}(e,t):n===mt.AREA?Jt(e,t):n===mt.MATH?function(e,t){e._reconstructActiveFormattingElements(),lt.adjustTokenMathMLAttrs(t),lt.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,Nt.MATHML):e._insertElement(t,Nt.MATHML),t.ackSelfClosing=!0;}(e,t):n===mt.MENU?function(e,t){e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._insertElement(t,Nt.HTML);}(e,t):n!==mt.HEAD&&nn(e,t);break;case 5:n===mt.STYLE||n===mt.TITLE?xt(e,t):n===mt.ASIDE?Vt(e,t):n===mt.SMALL?zt(e,t):n===mt.TABLE?function(e,t){e.treeAdapter.getDocumentMode(e.document)!==be.DOCUMENT_MODE.QUIRKS&&e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._insertElement(t,Nt.HTML),e.framesetOk=!1,e.insertionMode=Ot;}(e,t):n===mt.EMBED?Jt(e,t):n===mt.INPUT?function(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,Nt.HTML);const n=Ge.getTokenAttr(t,pt.TYPE);n&&"hidden"===n.toLowerCase()||(e.framesetOk=!1),t.ackSelfClosing=!0;}(e,t):n===mt.PARAM||n===mt.TRACK?Zt(e,t):n===mt.IMAGE?function(e,t){t.tagName=mt.IMG,Jt(e,t);}(e,t):n!==mt.FRAME&&n!==mt.TBODY&&n!==mt.TFOOT&&n!==mt.THEAD&&nn(e,t);break;case 6:n===mt.SCRIPT?xt(e,t):n===mt.CENTER||n===mt.FIGURE||n===mt.FOOTER||n===mt.HEADER||n===mt.HGROUP||n===mt.DIALOG?Vt(e,t):n===mt.BUTTON?function(e,t){e.openElements.hasInScope(mt.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(mt.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,Nt.HTML),e.framesetOk=!1;}(e,t):n===mt.STRIKE||n===mt.STRONG?zt(e,t):n===mt.APPLET||n===mt.OBJECT?qt(e,t):n===mt.KEYGEN?Jt(e,t):n===mt.SOURCE?Zt(e,t):n===mt.IFRAME?function(e,t){e.framesetOk=!1,e._switchToTextParsing(t,Ge.MODE.RAWTEXT);}(e,t):n===mt.SELECT?function(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,Nt.HTML),e.framesetOk=!1,e.insertionMode===Ot||"IN_CAPTION_MODE"===e.insertionMode||"IN_TABLE_BODY_MODE"===e.insertionMode||"IN_ROW_MODE"===e.insertionMode||"IN_CELL_MODE"===e.insertionMode?e.insertionMode="IN_SELECT_IN_TABLE_MODE":e.insertionMode="IN_SELECT_MODE";}(e,t):n===mt.OPTION?en(e,t):nn(e,t);break;case 7:n===mt.BGSOUND?xt(e,t):n===mt.DETAILS||n===mt.ADDRESS||n===mt.ARTICLE||n===mt.SECTION||n===mt.SUMMARY?Vt(e,t):n===mt.LISTING?jt(e,t):n===mt.MARQUEE?qt(e,t):n===mt.NOEMBED?$t(e,t):n!==mt.CAPTION&&nn(e,t);break;case 8:n===mt.BASEFONT?xt(e,t):n===mt.FRAMESET?function(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,Nt.HTML),e.insertionMode="IN_FRAMESET_MODE");}(e,t):n===mt.FIELDSET?Vt(e,t):n===mt.TEXTAREA?function(e,t){e._insertElement(t,Nt.HTML),e.skipNextNewLine=!0,e.tokenizer.state=Ge.MODE.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode="TEXT_MODE";}(e,t):n===mt.TEMPLATE?xt(e,t):n===mt.NOSCRIPT?e.options.scriptingEnabled?$t(e,t):nn(e,t):n===mt.OPTGROUP?en(e,t):n!==mt.COLGROUP&&nn(e,t);break;case 9:n===mt.PLAINTEXT?function(e,t){e.openElements.hasInButtonScope(mt.P)&&e._closePElement(),e._insertElement(t,Nt.HTML),e.tokenizer.state=Ge.MODE.PLAINTEXT;}(e,t):nn(e,t);break;case 10:n===mt.BLOCKQUOTE||n===mt.FIGCAPTION?Vt(e,t):nn(e,t);break;default:nn(e,t);}}function rn(e,t){const n=t.tagName;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n));}function Tn(e,t){const n=t.tagName;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker());}function on(e,t){const n=t.tagName;for(let t=e.openElements.stackTop;t>0;t--){const s=e.openElements.items[t];if(e.treeAdapter.getTagName(s)===n){e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilElementPopped(s);break}if(e._isSpecialElement(s))break}}function En(e,t){const n=t.tagName;switch(n.length){case 1:n===mt.A||n===mt.B||n===mt.I||n===mt.S||n===mt.U?Pt(e,t):n===mt.P?function(e){e.openElements.hasInButtonScope(mt.P)||e._insertFakeElement(mt.P),e._closePElement();}(e):on(e,t);break;case 2:n===mt.DL||n===mt.UL||n===mt.OL?rn(e,t):n===mt.LI?function(e){e.openElements.hasInListItemScope(mt.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(mt.LI),e.openElements.popUntilTagNamePopped(mt.LI));}(e):n===mt.DD||n===mt.DT?function(e,t){const n=t.tagName;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n));}(e,t):n===mt.H1||n===mt.H2||n===mt.H3||n===mt.H4||n===mt.H5||n===mt.H6?function(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped());}(e):n===mt.BR?function(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(mt.BR),e.openElements.pop(),e.framesetOk=!1;}(e):n===mt.EM||n===mt.TT?Pt(e,t):on(e,t);break;case 3:n===mt.BIG?Pt(e,t):n===mt.DIR||n===mt.DIV||n===mt.NAV||n===mt.PRE?rn(e,t):on(e,t);break;case 4:n===mt.BODY?function(e){e.openElements.hasInScope(mt.BODY)&&(e.insertionMode="AFTER_BODY_MODE");}(e):n===mt.HTML?function(e,t){e.openElements.hasInScope(mt.BODY)&&(e.insertionMode="AFTER_BODY_MODE",e._processToken(t));}(e,t):n===mt.FORM?function(e){const t=e.openElements.tmplCount>0,n=e.formElement;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(mt.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(mt.FORM):e.openElements.remove(n));}(e):n===mt.CODE||n===mt.FONT||n===mt.NOBR?Pt(e,t):n===mt.MAIN||n===mt.MENU?rn(e,t):on(e,t);break;case 5:n===mt.ASIDE?rn(e,t):n===mt.SMALL?Pt(e,t):on(e,t);break;case 6:n===mt.CENTER||n===mt.FIGURE||n===mt.FOOTER||n===mt.HEADER||n===mt.HGROUP||n===mt.DIALOG?rn(e,t):n===mt.APPLET||n===mt.OBJECT?Tn(e,t):n===mt.STRIKE||n===mt.STRONG?Pt(e,t):on(e,t);break;case 7:n===mt.ADDRESS||n===mt.ARTICLE||n===mt.DETAILS||n===mt.SECTION||n===mt.SUMMARY||n===mt.LISTING?rn(e,t):n===mt.MARQUEE?Tn(e,t):on(e,t);break;case 8:n===mt.FIELDSET?rn(e,t):n===mt.TEMPLATE?vt(e,t):on(e,t);break;case 10:n===mt.BLOCKQUOTE||n===mt.FIGCAPTION?rn(e,t):on(e,t);break;default:on(e,t);}}function an(e,t){e.tmplInsertionModeStackTop>-1?un(e,t):e.stopped=!0;}function _n(e,t){const n=e.openElements.currentTagName;n===mt.TABLE||n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD||n===mt.TR?(e.pendingCharacterTokens=[],e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode="IN_TABLE_TEXT_MODE",e._processToken(t)):cn(e,t);}function hn(e,t){const n=t.tagName;switch(n.length){case 2:n===mt.TD||n===mt.TH||n===mt.TR?function(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(mt.TBODY),e.insertionMode="IN_TABLE_BODY_MODE",e._processToken(t);}(e,t):cn(e,t);break;case 3:n===mt.COL?function(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(mt.COLGROUP),e.insertionMode="IN_COLUMN_GROUP_MODE",e._processToken(t);}(e,t):cn(e,t);break;case 4:n===mt.FORM?function(e,t){e.formElement||0!==e.openElements.tmplCount||(e._insertElement(t,Nt.HTML),e.formElement=e.openElements.current,e.openElements.pop());}(e,t):cn(e,t);break;case 5:n===mt.TABLE?function(e,t){e.openElements.hasInTableScope(mt.TABLE)&&(e.openElements.popUntilTagNamePopped(mt.TABLE),e._resetInsertionMode(),e._processToken(t));}(e,t):n===mt.STYLE?xt(e,t):n===mt.TBODY||n===mt.TFOOT||n===mt.THEAD?function(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,Nt.HTML),e.insertionMode="IN_TABLE_BODY_MODE";}(e,t):n===mt.INPUT?function(e,t){const n=Ge.getTokenAttr(t,pt.TYPE);n&&"hidden"===n.toLowerCase()?e._appendElement(t,Nt.HTML):cn(e,t),t.ackSelfClosing=!0;}(e,t):cn(e,t);break;case 6:n===mt.SCRIPT?xt(e,t):cn(e,t);break;case 7:n===mt.CAPTION?function(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,Nt.HTML),e.insertionMode="IN_CAPTION_MODE";}(e,t):cn(e,t);break;case 8:n===mt.COLGROUP?function(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,Nt.HTML),e.insertionMode="IN_COLUMN_GROUP_MODE";}(e,t):n===mt.TEMPLATE?xt(e,t):cn(e,t);break;default:cn(e,t);}}function An(e,t){const n=t.tagName;n===mt.TABLE?e.openElements.hasInTableScope(mt.TABLE)&&(e.openElements.popUntilTagNamePopped(mt.TABLE),e._resetInsertionMode()):n===mt.TEMPLATE?vt(e,t):n!==mt.BODY&&n!==mt.CAPTION&&n!==mt.COL&&n!==mt.COLGROUP&&n!==mt.HTML&&n!==mt.TBODY&&n!==mt.TD&&n!==mt.TFOOT&&n!==mt.TH&&n!==mt.THEAD&&n!==mt.TR&&cn(e,t);}function cn(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,e._processTokenInBodyMode(t),e.fosterParentingEnabled=n;}function ln(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)cn(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t);}function mn(e,t){e.openElements.currentTagName===mt.COLGROUP&&(e.openElements.pop(),e.insertionMode=Ot,e._processToken(t));}function Nn(e,t){const n=t.tagName;n===mt.HTML?sn(e,t):n===mt.OPTION?(e.openElements.currentTagName===mt.OPTION&&e.openElements.pop(),e._insertElement(t,Nt.HTML)):n===mt.OPTGROUP?(e.openElements.currentTagName===mt.OPTION&&e.openElements.pop(),e.openElements.currentTagName===mt.OPTGROUP&&e.openElements.pop(),e._insertElement(t,Nt.HTML)):n===mt.INPUT||n===mt.KEYGEN||n===mt.TEXTAREA||n===mt.SELECT?e.openElements.hasInSelectScope(mt.SELECT)&&(e.openElements.popUntilTagNamePopped(mt.SELECT),e._resetInsertionMode(),n!==mt.SELECT&&e._processToken(t)):n!==mt.SCRIPT&&n!==mt.TEMPLATE||xt(e,t);}function pn(e,t){const n=t.tagName;if(n===mt.OPTGROUP){const t=e.openElements.items[e.openElements.stackTop-1],n=t&&e.treeAdapter.getTagName(t);e.openElements.currentTagName===mt.OPTION&&n===mt.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagName===mt.OPTGROUP&&e.openElements.pop();}else n===mt.OPTION?e.openElements.currentTagName===mt.OPTION&&e.openElements.pop():n===mt.SELECT&&e.openElements.hasInSelectScope(mt.SELECT)?(e.openElements.popUntilTagNamePopped(mt.SELECT),e._resetInsertionMode()):n===mt.TEMPLATE&&vt(e,t);}function un(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(mt.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e._popTmplInsertionMode(),e._resetInsertionMode(),e._processToken(t)):e.stopped=!0;}function On(e,t){e.insertionMode="IN_BODY_MODE",e._processToken(t);}function Sn(e,t){e.insertionMode="IN_BODY_MODE",e._processToken(t);}be.TAG_NAMES,be.NAMESPACES;return e.parse=function(e,t){return new Rt(t).parse(e)},e.parseFragment=function(e,t,n){return "string"==typeof e&&(n=t,t=e,e=null),new Rt(n).parseFragment(t,e)},e}({});function parse(e,t){return parse5.parse(e,t)}function parseFragment(e,t){return parse5.parseFragment(e,t)}

const docParser = new WeakMap();
function parseDocumentUtil(ownerDocument, html) {
    const doc = parse(html.trim(), getParser(ownerDocument));
    doc.documentElement = doc.firstElementChild;
    doc.head = doc.documentElement.firstElementChild;
    doc.body = doc.head.nextElementSibling;
    return doc;
}
function parseFragmentUtil(ownerDocument, html) {
    if (typeof html === 'string') {
        html = html.trim();
    }
    else {
        html = '';
    }
    const frag = parseFragment(html, getParser(ownerDocument));
    return frag;
}
function getParser(ownerDocument) {
    let parseOptions = docParser.get(ownerDocument);
    if (parseOptions != null) {
        return parseOptions;
    }
    const treeAdapter = {
        createDocument() {
            const doc = ownerDocument.createElement("#document" /* DOCUMENT_NODE */);
            doc['x-mode'] = 'no-quirks';
            return doc;
        },
        createDocumentFragment() {
            return ownerDocument.createDocumentFragment();
        },
        createElement(tagName, namespaceURI, attrs) {
            const elm = ownerDocument.createElementNS(namespaceURI, tagName);
            for (let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                if (attr.namespace == null || attr.namespace === 'http://www.w3.org/1999/xhtml') {
                    elm.setAttribute(attr.name, attr.value);
                }
                else {
                    elm.setAttributeNS(attr.namespace, attr.name, attr.value);
                }
            }
            return elm;
        },
        createCommentNode(data) {
            return ownerDocument.createComment(data);
        },
        appendChild(parentNode, newNode) {
            parentNode.appendChild(newNode);
        },
        insertBefore(parentNode, newNode, referenceNode) {
            parentNode.insertBefore(newNode, referenceNode);
        },
        setTemplateContent(templateElement, contentElement) {
            templateElement.content = contentElement;
        },
        getTemplateContent(templateElement) {
            return templateElement.content;
        },
        setDocumentType(doc, name, publicId, systemId) {
            let doctypeNode = doc.childNodes.find(n => n.nodeType === 10 /* DOCUMENT_TYPE_NODE */);
            if (doctypeNode == null) {
                doctypeNode = ownerDocument.createDocumentTypeNode();
                doc.insertBefore(doctypeNode, doc.firstChild);
            }
            doctypeNode.nodeValue = '!DOCTYPE';
            doctypeNode['x-name'] = name;
            doctypeNode['x-publicId'] = publicId;
            doctypeNode['x-systemId'] = systemId;
        },
        setDocumentMode(doc, mode) {
            doc['x-mode'] = mode;
        },
        getDocumentMode(doc) {
            return doc['x-mode'];
        },
        detachNode(node) {
            node.remove();
        },
        insertText(parentNode, text) {
            const lastChild = parentNode.lastChild;
            if (lastChild != null && lastChild.nodeType === 3 /* TEXT_NODE */) {
                lastChild.nodeValue += text;
            }
            else {
                parentNode.appendChild(ownerDocument.createTextNode(text));
            }
        },
        insertTextBefore(parentNode, text, referenceNode) {
            const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
            if (prevNode != null && prevNode.nodeType === 3 /* TEXT_NODE */) {
                prevNode.nodeValue += text;
            }
            else {
                parentNode.insertBefore(ownerDocument.createTextNode(text), referenceNode);
            }
        },
        adoptAttributes(recipient, attrs) {
            for (let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                if (recipient.hasAttributeNS(attr.namespace, attr.name) === false) {
                    recipient.setAttributeNS(attr.namespace, attr.name, attr.value);
                }
            }
        },
        getFirstChild(node) {
            return node.childNodes[0];
        },
        getChildNodes(node) {
            return node.childNodes;
        },
        getParentNode(node) {
            return node.parentNode;
        },
        getAttrList(element) {
            const attrs = element.attributes.items.map(attr => {
                return {
                    name: attr.name,
                    value: attr.value,
                    namespace: attr.namespaceURI,
                    prefix: null
                };
            });
            return attrs;
        },
        getTagName(element) {
            if (element.namespaceURI === 'http://www.w3.org/1999/xhtml') {
                return element.nodeName.toLowerCase();
            }
            else {
                return element.nodeName;
            }
        },
        getNamespaceURI(element) {
            return element.namespaceURI;
        },
        getTextNodeContent(textNode) {
            return textNode.nodeValue;
        },
        getCommentNodeContent(commentNode) {
            return commentNode.nodeValue;
        },
        getDocumentTypeNodeName(doctypeNode) {
            return doctypeNode['x-name'];
        },
        getDocumentTypeNodePublicId(doctypeNode) {
            return doctypeNode['x-publicId'];
        },
        getDocumentTypeNodeSystemId(doctypeNode) {
            return doctypeNode['x-systemId'];
        },
        isTextNode(node) {
            return node.nodeType === 3 /* TEXT_NODE */;
        },
        isCommentNode(node) {
            return node.nodeType === 8 /* COMMENT_NODE */;
        },
        isDocumentTypeNode(node) {
            return node.nodeType === 10 /* DOCUMENT_TYPE_NODE */;
        },
        isElementNode(node) {
            return node.nodeType === 1 /* ELEMENT_NODE */;
        }
    };
    parseOptions = {
        treeAdapter: treeAdapter
    };
    docParser.set(ownerDocument, parseOptions);
    return parseOptions;
}

class MockNode {
    constructor(ownerDocument, nodeType, nodeName, nodeValue) {
        this.ownerDocument = ownerDocument;
        this.nodeType = nodeType;
        this.nodeName = nodeName;
        this.nodeValue = nodeValue;
        this.parentNode = null;
        this.childNodes = [];
    }
    appendChild(newNode) {
        if (newNode.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
            const nodes = newNode.childNodes.slice();
            for (const child of nodes) {
                this.appendChild(child);
            }
        }
        else {
            newNode.remove();
            newNode.parentNode = this;
            this.childNodes.push(newNode);
            connectNode(this.ownerDocument, newNode);
        }
        return newNode;
    }
    append(...items) {
        items.forEach(item => {
            const isNode = typeof item === 'object' && item !== null && 'nodeType' in item;
            this.appendChild(isNode ? item : this.ownerDocument.createTextNode(String(item)));
        });
    }
    prepend(...items) {
        const firstChild = this.firstChild;
        items.forEach(item => {
            const isNode = typeof item === 'object' && item !== null && 'nodeType' in item;
            this.insertBefore(isNode ? item : this.ownerDocument.createTextNode(String(item)), firstChild);
        });
    }
    cloneNode(deep) {
        throw new Error(`invalid node type to clone: ${this.nodeType}, deep: ${deep}`);
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    insertBefore(newNode, referenceNode) {
        if (newNode.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
            for (let i = 0, ii = newNode.childNodes.length; i < ii; i++) {
                insertBefore(this, newNode.childNodes[i], referenceNode);
            }
        }
        else {
            insertBefore(this, newNode, referenceNode);
        }
        return newNode;
    }
    get isConnected() {
        let node = this;
        while (node != null) {
            if (node.nodeType === 9 /* DOCUMENT_NODE */) {
                return true;
            }
            node = node.parentNode;
            if (node != null && node.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */) {
                node = node.host;
            }
        }
        return false;
    }
    isSameNode(node) {
        return this === node;
    }
    get lastChild() {
        return this.childNodes[this.childNodes.length - 1] || null;
    }
    get nextSibling() {
        if (this.parentNode != null) {
            const index = this.parentNode.childNodes.indexOf(this) + 1;
            return this.parentNode.childNodes[index] || null;
        }
        return null;
    }
    get parentElement() {
        return this.parentNode || null;
    }
    set parentElement(value) {
        this.parentNode = value;
    }
    get previousSibling() {
        if (this.parentNode != null) {
            const index = this.parentNode.childNodes.indexOf(this) - 1;
            return this.parentNode.childNodes[index] || null;
        }
        return null;
    }
    contains(otherNode) {
        return this.childNodes.includes(otherNode);
    }
    removeChild(childNode) {
        const index = this.childNodes.indexOf(childNode);
        if (index > -1) {
            this.childNodes.splice(index, 1);
            if (this.nodeType === 1 /* ELEMENT_NODE */) {
                const wasConnected = this.isConnected;
                childNode.parentNode = null;
                if (wasConnected === true) {
                    disconnectNode(childNode);
                }
            }
            else {
                childNode.parentNode = null;
            }
        }
        else {
            throw new Error(`node not found within childNodes during removeChild`);
        }
        return childNode;
    }
    remove() {
        if (this.parentNode != null) {
            this.parentNode.removeChild(this);
        }
    }
    replaceChild(newChild, oldChild) {
        if (oldChild.parentNode === this) {
            this.insertBefore(newChild, oldChild);
            oldChild.remove();
            return newChild;
        }
        return null;
    }
    get textContent() {
        return this.nodeValue;
    }
    set textContent(value) {
        this.nodeValue = String(value);
    }
}
MockNode.ELEMENT_NODE = 1;
MockNode.TEXT_NODE = 3;
MockNode.PROCESSING_INSTRUCTION_NODE = 7;
MockNode.COMMENT_NODE = 8;
MockNode.DOCUMENT_NODE = 9;
MockNode.DOCUMENT_TYPE_NODE = 10;
MockNode.DOCUMENT_FRAGMENT_NODE = 11;
class MockNodeList {
    constructor(ownerDocument, childNodes, length) {
        this.ownerDocument = ownerDocument;
        this.childNodes = childNodes;
        this.length = length;
    }
}
class MockElement extends MockNode {
    constructor(ownerDocument, nodeName) {
        super(ownerDocument, 1 /* ELEMENT_NODE */, typeof nodeName === 'string' ? nodeName : null, null);
        this.namespaceURI = null;
    }
    addEventListener(type, handler) {
        addEventListener(this, type, handler);
    }
    attachShadow(_opts) {
        const shadowRoot = this.ownerDocument.createDocumentFragment();
        this.shadowRoot = shadowRoot;
        return shadowRoot;
    }
    get shadowRoot() {
        return this.__shadowRoot || null;
    }
    set shadowRoot(shadowRoot) {
        if (shadowRoot != null) {
            shadowRoot.host = this;
            this.__shadowRoot = shadowRoot;
        }
        else {
            delete this.__shadowRoot;
        }
    }
    get attributes() {
        if (this.__attributeMap == null) {
            this.__attributeMap = new MockAttributeMap();
        }
        return this.__attributeMap;
    }
    set attributes(attrs) {
        this.__attributeMap = attrs;
    }
    get children() {
        return this.childNodes.filter(n => n.nodeType === 1 /* ELEMENT_NODE */);
    }
    get childElementCount() {
        return this.childNodes.filter(n => n.nodeType === 1 /* ELEMENT_NODE */).length;
    }
    get className() { return this.getAttributeNS(null, 'class') || ''; }
    set className(value) { this.setAttributeNS(null, 'class', value); }
    get classList() {
        return new MockClassList(this);
    }
    click() {
        dispatchEvent(this, new MockEvent('click', { bubbles: true, cancelable: true, composed: true }));
    }
    cloneNode(_deep) {
        // implemented on MockElement.prototype from within element.ts
        return null;
    }
    closest(selector) {
        return closest(selector, this);
    }
    get dataset() {
        return dataset(this);
    }
    get dir() { return this.getAttributeNS(null, 'dir') || ''; }
    set dir(value) { this.setAttributeNS(null, 'dir', value); }
    dispatchEvent(ev) {
        return dispatchEvent(this, ev);
    }
    get firstElementChild() {
        return this.children[0] || null;
    }
    getAttribute(attrName) {
        if (attrName === 'style') {
            if (this.__style != null && this.__style.length > 0) {
                return this.style.cssText;
            }
            return null;
        }
        const attr = this.attributes.getNamedItem(attrName);
        if (attr != null) {
            return attr.value;
        }
        return null;
    }
    getAttributeNS(namespaceURI, attrName) {
        const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
        if (attr != null) {
            return attr.value;
        }
        return null;
    }
    getBoundingClientRect() {
        return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    }
    getRootNode(opts) {
        const isComposed = (opts != null && opts.composed === true);
        let node = this;
        while (node.parentNode != null) {
            node = node.parentNode;
            if (isComposed === true && node.parentNode == null && node.host != null) {
                node = node.host;
            }
        }
        return node;
    }
    hasChildNodes() {
        return (this.childNodes.length > 0);
    }
    get id() { return this.getAttributeNS(null, 'id') || ''; }
    set id(value) { this.setAttributeNS(null, 'id', value); }
    get innerHTML() {
        if (this.childNodes.length === 0) {
            return '';
        }
        return serializeNodeToHtml(this, {
            newLines: false,
            indentSpaces: 0
        });
    }
    set innerHTML(html) {
        if (NON_ESCAPABLE_CONTENT.has(this.nodeName) === true) {
            setTextContent(this, html);
        }
        else {
            for (let i = this.childNodes.length - 1; i >= 0; i--) {
                this.removeChild(this.childNodes[i]);
            }
            if (typeof html === 'string') {
                const frag = parseFragmentUtil(this.ownerDocument, html);
                while (frag.childNodes.length > 0) {
                    this.appendChild(frag.childNodes[0]);
                }
            }
        }
    }
    get innerText() {
        const text = [];
        getTextContent(this.childNodes, text);
        return text.join('');
    }
    set innerText(value) {
        setTextContent(this, value);
    }
    hasAttribute(attrName) {
        if (attrName === 'style') {
            return (this.__style != null && this.__style.length > 0);
        }
        return this.getAttribute(attrName) !== null;
    }
    hasAttributeNS(namespaceURI, name) {
        return this.getAttributeNS(namespaceURI, name) !== null;
    }
    get hidden() { return this.hasAttributeNS(null, 'hidden'); }
    set hidden(isHidden) {
        if (isHidden === true) {
            this.setAttributeNS(null, 'hidden', '');
        }
        else {
            this.removeAttributeNS(null, 'hidden');
        }
    }
    get lang() { return this.getAttributeNS(null, 'lang') || ''; }
    set lang(value) { this.setAttributeNS(null, 'lang', value); }
    get lastElementChild() {
        const children = this.children;
        return children[children.length - 1] || null;
    }
    matches(selector) {
        return matches(selector, this);
    }
    get nextElementSibling() {
        const parentElement = this.parentElement;
        if (parentElement != null && (parentElement.nodeType === 1 /* ELEMENT_NODE */ || parentElement.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */ || parentElement.nodeType === 9 /* DOCUMENT_NODE */)) {
            const children = parentElement.children;
            const index = children.indexOf(this) + 1;
            return parentElement.children[index] || null;
        }
        return null;
    }
    get outerHTML() {
        return serializeNodeToHtml(this, {
            newLines: false,
            outerHtml: true,
            indentSpaces: 0
        });
    }
    get previousElementSibling() {
        const parentElement = this.parentElement;
        if (parentElement != null && (parentElement.nodeType === 1 /* ELEMENT_NODE */ || parentElement.nodeType === 11 /* DOCUMENT_FRAGMENT_NODE */ || parentElement.nodeType === 9 /* DOCUMENT_NODE */)) {
            const children = parentElement.children;
            const index = children.indexOf(this) - 1;
            return parentElement.children[index] || null;
        }
        return null;
    }
    getElementsByClassName(classNames) {
        const classes = classNames.trim().split(' ').filter(c => c.length > 0);
        return getElementsByClassName(this, classes);
    }
    getElementsByTagName(tagName) {
        return getElementsByTagName(this, tagName.toLowerCase());
    }
    querySelector(selector) {
        return selectOne(selector, this);
    }
    querySelectorAll(selector) {
        return selectAll(selector, this);
    }
    removeAttribute(attrName) {
        if (attrName === 'style') {
            delete this.__style;
        }
        else {
            const attr = this.attributes.getNamedItem(attrName);
            if (attr != null) {
                this.attributes.removeNamedItemNS(attr);
                if (checkAttributeChanged(this) === true) {
                    attributeChanged(this, attrName, attr.value, null);
                }
            }
        }
    }
    removeAttributeNS(namespaceURI, attrName) {
        const attr = this.attributes.getNamedItemNS(namespaceURI, attrName);
        if (attr != null) {
            this.attributes.removeNamedItemNS(attr);
            if (checkAttributeChanged(this) === true) {
                attributeChanged(this, attrName, attr.value, null);
            }
        }
    }
    removeEventListener(type, handler) {
        removeEventListener(this, type, handler);
    }
    setAttribute(attrName, value) {
        if (attrName === 'style') {
            this.style = value;
        }
        else {
            const attributes = this.attributes;
            let attr = attributes.getNamedItem(attrName);
            const checkAttrChanged = checkAttributeChanged(this);
            if (attr != null) {
                if (checkAttrChanged === true) {
                    const oldValue = attr.value;
                    attr.value = value;
                    if (oldValue !== attr.value) {
                        attributeChanged(this, attr.name, oldValue, attr.value);
                    }
                }
                else {
                    attr.value = value;
                }
            }
            else {
                if (attributes.caseInsensitive) {
                    attrName = attrName.toLowerCase();
                }
                attr = new MockAttr(attrName, value);
                attributes.items.push(attr);
                if (checkAttrChanged === true) {
                    attributeChanged(this, attrName, null, attr.value);
                }
            }
        }
    }
    setAttributeNS(namespaceURI, attrName, value) {
        const attributes = this.attributes;
        let attr = attributes.getNamedItemNS(namespaceURI, attrName);
        const checkAttrChanged = checkAttributeChanged(this);
        if (attr != null) {
            if (checkAttrChanged === true) {
                const oldValue = attr.value;
                attr.value = value;
                if (oldValue !== attr.value) {
                    attributeChanged(this, attr.name, oldValue, attr.value);
                }
            }
            else {
                attr.value = value;
            }
        }
        else {
            attr = new MockAttr(attrName, value, namespaceURI);
            attributes.items.push(attr);
            if (checkAttrChanged === true) {
                attributeChanged(this, attrName, null, attr.value);
            }
        }
    }
    get style() {
        if (this.__style == null) {
            this.__style = createCSSStyleDeclaration();
        }
        return this.__style;
    }
    set style(val) {
        if (typeof val === 'string') {
            if (this.__style == null) {
                this.__style = createCSSStyleDeclaration();
            }
            this.__style.cssText = val;
        }
        else {
            this.__style = val;
        }
    }
    get tabIndex() { return parseInt(this.getAttributeNS(null, 'tabindex') || '-1', 10); }
    set tabIndex(value) { this.setAttributeNS(null, 'tabindex', value); }
    get tagName() { return this.nodeName; }
    set tagName(value) { this.nodeName = value; }
    get textContent() {
        const text = [];
        getTextContent(this.childNodes, text);
        return text.join('');
    }
    set textContent(value) {
        setTextContent(this, value);
    }
    get title() { return this.getAttributeNS(null, 'title') || ''; }
    set title(value) { this.setAttributeNS(null, 'title', value); }
    onanimationstart() { }
    onanimationend() { }
    onanimationiteration() { }
    onabort() { }
    onauxclick() { }
    onbeforecopy() { }
    onbeforecut() { }
    onbeforepaste() { }
    onblur() { }
    oncancel() { }
    oncanplay() { }
    oncanplaythrough() { }
    onchange() { }
    onclick() { }
    onclose() { }
    oncontextmenu() { }
    oncopy() { }
    oncuechange() { }
    oncut() { }
    ondblclick() { }
    ondrag() { }
    ondragend() { }
    ondragenter() { }
    ondragleave() { }
    ondragover() { }
    ondragstart() { }
    ondrop() { }
    ondurationchange() { }
    onemptied() { }
    onended() { }
    onerror() { }
    onfocus() { }
    onformdata() { }
    onfullscreenchange() { }
    onfullscreenerror() { }
    ongotpointercapture() { }
    oninput() { }
    oninvalid() { }
    onkeydown() { }
    onkeypress() { }
    onkeyup() { }
    onload() { }
    onloadeddata() { }
    onloadedmetadata() { }
    onloadstart() { }
    onlostpointercapture() { }
    onmousedown() { }
    onmouseenter() { }
    onmouseleave() { }
    onmousemove() { }
    onmouseout() { }
    onmouseover() { }
    onmouseup() { }
    onmousewheel() { }
    onpaste() { }
    onpause() { }
    onplay() { }
    onplaying() { }
    onpointercancel() { }
    onpointerdown() { }
    onpointerenter() { }
    onpointerleave() { }
    onpointermove() { }
    onpointerout() { }
    onpointerover() { }
    onpointerup() { }
    onprogress() { }
    onratechange() { }
    onreset() { }
    onresize() { }
    onscroll() { }
    onsearch() { }
    onseeked() { }
    onseeking() { }
    onselect() { }
    onselectstart() { }
    onstalled() { }
    onsubmit() { }
    onsuspend() { }
    ontimeupdate() { }
    ontoggle() { }
    onvolumechange() { }
    onwaiting() { }
    onwebkitfullscreenchange() { }
    onwebkitfullscreenerror() { }
    onwheel() { }
    toString(opts) {
        return serializeNodeToHtml(this, opts);
    }
}
function getElementsByClassName(elm, classNames, foundElms = []) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        for (let j = 0, jj = classNames.length; j < jj; j++) {
            if (childElm.classList.contains(classNames[j])) {
                foundElms.push(childElm);
            }
        }
        getElementsByClassName(childElm, classNames, foundElms);
    }
    return foundElms;
}
function getElementsByTagName(elm, tagName, foundElms = []) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        if (childElm.nodeName.toLowerCase() === tagName) {
            foundElms.push(childElm);
        }
        getElementsByTagName(childElm, tagName, foundElms);
    }
    return foundElms;
}
function resetElement(elm) {
    resetEventListeners(elm);
    delete elm.__attributeMap;
    delete elm.__shadowRoot;
    delete elm.__style;
}
function insertBefore(parentNode, newNode, referenceNode) {
    if (newNode !== referenceNode) {
        newNode.remove();
        newNode.parentNode = parentNode;
        newNode.ownerDocument = parentNode.ownerDocument;
        if (referenceNode != null) {
            const index = parentNode.childNodes.indexOf(referenceNode);
            if (index > -1) {
                parentNode.childNodes.splice(index, 0, newNode);
            }
            else {
                throw new Error(`referenceNode not found in parentNode.childNodes`);
            }
        }
        else {
            parentNode.childNodes.push(newNode);
        }
        connectNode(parentNode.ownerDocument, newNode);
    }
    return newNode;
}
class MockHTMLElement extends MockElement {
    constructor(ownerDocument, nodeName) {
        super(ownerDocument, typeof nodeName === 'string' ? nodeName.toUpperCase() : null);
        this.namespaceURI = 'http://www.w3.org/1999/xhtml';
    }
    get tagName() { return this.nodeName; }
    set tagName(value) { this.nodeName = value; }
    get attributes() {
        if (this.__attributeMap == null) {
            this.__attributeMap = new MockAttributeMap(true);
        }
        return this.__attributeMap;
    }
    set attributes(attrs) {
        this.__attributeMap = attrs;
    }
}
class MockTextNode extends MockNode {
    constructor(ownerDocument, text) {
        super(ownerDocument, 3 /* TEXT_NODE */, "#text" /* TEXT_NODE */, text);
    }
    cloneNode(_deep) {
        return new MockTextNode(null, this.nodeValue);
    }
    get textContent() {
        return this.nodeValue;
    }
    set textContent(text) {
        this.nodeValue = text;
    }
    get data() {
        return this.nodeValue;
    }
    set data(text) {
        this.nodeValue = text;
    }
    get wholeText() {
        if (this.parentNode != null) {
            const text = [];
            for (let i = 0, ii = this.parentNode.childNodes.length; i < ii; i++) {
                const childNode = this.parentNode.childNodes[i];
                if (childNode.nodeType === 3 /* TEXT_NODE */) {
                    text.push(childNode.nodeValue);
                }
            }
            return text.join('');
        }
        return this.nodeValue;
    }
}
function getTextContent(childNodes, text) {
    for (let i = 0, ii = childNodes.length; i < ii; i++) {
        const childNode = childNodes[i];
        if (childNode.nodeType === 3 /* TEXT_NODE */) {
            text.push(childNode.nodeValue);
        }
        else if (childNode.nodeType === 1 /* ELEMENT_NODE */) {
            getTextContent(childNode.childNodes, text);
        }
    }
}
function setTextContent(elm, text) {
    for (let i = elm.childNodes.length - 1; i >= 0; i--) {
        elm.removeChild(elm.childNodes[i]);
    }
    const textNode = new MockTextNode(elm.ownerDocument, text);
    elm.appendChild(textNode);
}

class MockComment extends MockNode {
    constructor(ownerDocument, data) {
        super(ownerDocument, 8 /* COMMENT_NODE */, "#comment" /* COMMENT_NODE */, data);
    }
    cloneNode(_deep) {
        return new MockComment(null, this.nodeValue);
    }
    get textContent() {
        return this.nodeValue;
    }
    set textContent(text) {
        this.nodeValue = text;
    }
}

class MockDocumentFragment extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, null);
        this.nodeName = "#document-fragment" /* DOCUMENT_FRAGMENT_NODE */;
        this.nodeType = 11 /* DOCUMENT_FRAGMENT_NODE */;
    }
    getElementById(id) {
        return getElementById(this, id);
    }
    cloneNode(deep) {
        const cloned = new MockDocumentFragment(null);
        if (deep) {
            for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
                const childNode = this.childNodes[i];
                if (childNode.nodeType === 1 /* ELEMENT_NODE */ || childNode.nodeType === 3 /* TEXT_NODE */ || childNode.nodeType === 8 /* COMMENT_NODE */) {
                    const clonedChildNode = this.childNodes[i].cloneNode(true);
                    cloned.appendChild(clonedChildNode);
                }
            }
        }
        return cloned;
    }
}

class MockDocumentTypeNode extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, '!DOCTYPE');
        this.nodeType = 10 /* DOCUMENT_TYPE_NODE */;
        this.setAttribute('html', '');
    }
}

class MockCSSRule {
    constructor(parentStyleSheet) {
        this.parentStyleSheet = parentStyleSheet;
        this.cssText = '';
        this.type = 0;
    }
}
class MockCSSStyleSheet {
    constructor(ownerNode) {
        this.type = 'text/css';
        this.parentStyleSheet = null;
        this.cssRules = [];
        this.ownerNode = ownerNode;
    }
    get rules() {
        return this.cssRules;
    }
    set rules(rules) {
        this.cssRules = rules;
    }
    deleteRule(index) {
        if (index >= 0 && index < this.cssRules.length) {
            this.cssRules.splice(index, 1);
            updateStyleTextNode(this.ownerNode);
        }
    }
    insertRule(rule, index = 0) {
        if (typeof index !== 'number') {
            index = 0;
        }
        if (index < 0) {
            index = 0;
        }
        if (index > this.cssRules.length) {
            index = this.cssRules.length;
        }
        const cssRule = new MockCSSRule(this);
        cssRule.cssText = rule;
        this.cssRules.splice(index, 0, cssRule);
        updateStyleTextNode(this.ownerNode);
        return index;
    }
}
function getStyleElementText(styleElm) {
    const output = [];
    for (let i = 0; i < styleElm.childNodes.length; i++) {
        output.push(styleElm.childNodes[i].nodeValue);
    }
    return output.join('');
}
function setStyleElementText(styleElm, text) {
    // keeping the innerHTML and the sheet.cssRules connected
    // is not technically correct, but since we're doing
    // SSR we'll need to turn any assigned cssRules into
    // real text, not just properties that aren't rendered
    const sheet = styleElm.sheet;
    sheet.cssRules.length = 0;
    sheet.insertRule(text);
    updateStyleTextNode(styleElm);
}
function updateStyleTextNode(styleElm) {
    const childNodeLen = styleElm.childNodes.length;
    if (childNodeLen > 1) {
        for (let i = childNodeLen - 1; i >= 1; i--) {
            styleElm.removeChild(styleElm.childNodes[i]);
        }
    }
    else if (childNodeLen < 1) {
        styleElm.appendChild(styleElm.ownerDocument.createTextNode(''));
    }
    const textNode = styleElm.childNodes[0];
    textNode.nodeValue = styleElm.sheet.cssRules.map(r => r.cssText).join('\n');
}

const URL_ = /*@__PURE__*/(function(){
  if (typeof URL === 'function') {
    return URL;
  }
  const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
  if (typeof requireFunc === 'function') {
    try {
      return requireFunc('url').URL;
    } catch (e) {}
  }
  return function() {}
})();

function createElement(ownerDocument, tagName) {
    if (typeof tagName !== 'string' || tagName === '' || !(/^[a-z0-9-_:]+$/i.test(tagName))) {
        throw new Error(`The tag name provided (${tagName}) is not a valid name.`);
    }
    tagName = tagName.toLowerCase();
    switch (tagName) {
        case 'a':
            return new MockAnchorElement(ownerDocument);
        case 'base':
            return new MockBaseElement(ownerDocument);
        case 'button':
            return new MockButtonElement(ownerDocument);
        case 'form':
            return new MockFormElement(ownerDocument);
        case 'img':
            return new MockImgElement(ownerDocument);
        case 'input':
            return new MockInputElement(ownerDocument);
        case 'link':
            return new MockLinkElement(ownerDocument);
        case 'meta':
            return new MockMetaElement(ownerDocument);
        case 'script':
            return new MockScriptElement(ownerDocument);
        case 'style':
            return new MockStyleElement(ownerDocument);
        case 'template':
            return new MockTemplateElement(ownerDocument);
        case 'title':
            return new MockTitleElement(ownerDocument);
        case 'canvas':
            return new MockCanvasElement(ownerDocument);
    }
    if (ownerDocument != null && tagName.includes('-')) {
        const win = ownerDocument.defaultView;
        if (win != null && win.customElements != null) {
            return createCustomElement(win.customElements, ownerDocument, tagName);
        }
    }
    return new MockHTMLElement(ownerDocument, tagName);
}
function createElementNS(ownerDocument, namespaceURI, tagName) {
    if (namespaceURI === 'http://www.w3.org/1999/xhtml') {
        return createElement(ownerDocument, tagName);
    }
    else if (namespaceURI === 'http://www.w3.org/2000/svg') {
        return new MockSVGElement(ownerDocument, tagName);
    }
    else {
        return new MockElement(ownerDocument, tagName);
    }
}
class MockAnchorElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'a');
    }
    get href() {
        return fullUrl(this, 'href');
    }
    set href(value) {
        this.setAttribute('href', value);
    }
}
class MockButtonElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'button');
    }
}
patchPropAttributes(MockButtonElement.prototype, {
    type: String
}, {
    type: 'submit'
});
class MockImgElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'img');
    }
    get src() {
        return fullUrl(this, 'src');
    }
    set src(value) {
        this.setAttribute('src', value);
    }
}
patchPropAttributes(MockImgElement.prototype, {
    height: Number,
    width: Number
});
class MockInputElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'input');
    }
    get list() {
        const listId = this.getAttribute('list');
        if (listId) {
            return this.ownerDocument.getElementById(listId);
        }
        return null;
    }
}
patchPropAttributes(MockInputElement.prototype, {
    accept: String,
    autocomplete: String,
    autofocus: Boolean,
    capture: String,
    checked: Boolean,
    disabled: Boolean,
    form: String,
    formaction: String,
    formenctype: String,
    formmethod: String,
    formnovalidate: String,
    formtarget: String,
    height: Number,
    inputmode: String,
    max: String,
    maxLength: Number,
    min: String,
    minLength: Number,
    multiple: Boolean,
    name: String,
    pattern: String,
    placeholder: String,
    required: Boolean,
    readOnly: Boolean,
    size: Number,
    spellCheck: Boolean,
    src: String,
    step: String,
    type: String,
    value: String,
    width: Number
}, {
    type: 'text'
});
class MockFormElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'form');
    }
}
patchPropAttributes(MockFormElement.prototype, {
    name: String
});
class MockLinkElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'link');
    }
    get href() {
        return fullUrl(this, 'href');
    }
    set href(value) {
        this.setAttribute('href', value);
    }
}
patchPropAttributes(MockLinkElement.prototype, {
    crossorigin: String,
    media: String,
    rel: String,
    type: String
});
class MockMetaElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'meta');
    }
}
patchPropAttributes(MockMetaElement.prototype, {
    charset: String,
    content: String,
    name: String
});
class MockScriptElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'script');
    }
    get src() {
        return fullUrl(this, 'src');
    }
    set src(value) {
        this.setAttribute('src', value);
    }
}
patchPropAttributes(MockScriptElement.prototype, {
    type: String
});
class MockStyleElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'style');
        this.sheet = new MockCSSStyleSheet(this);
    }
    get innerHTML() {
        return getStyleElementText(this);
    }
    set innerHTML(value) {
        setStyleElementText(this, value);
    }
    get innerText() {
        return getStyleElementText(this);
    }
    set innerText(value) {
        setStyleElementText(this, value);
    }
    get textContent() {
        return getStyleElementText(this);
    }
    set textContent(value) {
        setStyleElementText(this, value);
    }
}
class MockSVGElement extends MockElement {
    // SVGElement properties and methods
    get ownerSVGElement() { return null; }
    get viewportElement() { return null; }
    focus() { }
    onunload() { }
    // SVGGeometryElement properties and methods
    get pathLength() { return 0; }
    isPointInFill(_pt) { return false; }
    isPointInStroke(_pt) { return false; }
    getTotalLength() { return 0; }
}
class MockBaseElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'base');
    }
    get href() {
        return fullUrl(this, 'href');
    }
    set href(value) {
        this.setAttribute('href', value);
    }
}
class MockTemplateElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'template');
        this.content = new MockDocumentFragment(ownerDocument);
    }
    get innerHTML() {
        return this.content.innerHTML;
    }
    set innerHTML(html) {
        this.content.innerHTML = html;
    }
    cloneNode(deep) {
        const cloned = new MockTemplateElement(null);
        cloned.attributes = cloneAttributes(this.attributes);
        const styleCssText = this.getAttribute('style');
        if (styleCssText != null && styleCssText.length > 0) {
            cloned.setAttribute('style', styleCssText);
        }
        cloned.content = this.content.cloneNode(deep);
        if (deep) {
            for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
                const clonedChildNode = this.childNodes[i].cloneNode(true);
                cloned.appendChild(clonedChildNode);
            }
        }
        return cloned;
    }
}
class MockTitleElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'title');
    }
    get text() {
        return this.textContent;
    }
    set text(value) {
        this.textContent = value;
    }
}
class MockCanvasElement extends MockHTMLElement {
    constructor(ownerDocument) {
        super(ownerDocument, 'canvas');
    }
    getContext() {
        return {
            fillRect: function () { return; },
            clearRect: function () { return; },
            getImageData: function (_, __, w, h) {
                return {
                    data: new Array(w * h * 4)
                };
            },
            putImageData: function () { return; },
            createImageData: function () { return []; },
            setTransform: function () { return; },
            drawImage: function () { return; },
            save: function () { return; },
            fillText: function () { return; },
            restore: function () { return; },
            beginPath: function () { return; },
            moveTo: function () { return; },
            lineTo: function () { return; },
            closePath: function () { return; },
            stroke: function () { return; },
            translate: function () { return; },
            scale: function () { return; },
            rotate: function () { return; },
            arc: function () { return; },
            fill: function () { return; },
            measureText: function () {
                return { width: 0 };
            },
            transform: function () { return; },
            rect: function () { return; },
            clip: function () { return; },
        };
    }
}
function fullUrl(elm, attrName) {
    const val = elm.getAttribute(attrName) || '';
    if (elm.ownerDocument != null) {
        const win = elm.ownerDocument.defaultView;
        if (win != null) {
            const loc = win.location;
            if (loc != null) {
                const url = new URL_(val, loc.href);
                return url.href;
            }
        }
    }
    return val.replace(/\'|\"/g, '').trim();
}
function patchPropAttributes(prototype, attrs, defaults = {}) {
    Object.keys(attrs).forEach(propName => {
        const attr = attrs[propName];
        const defaultValue = defaults[propName];
        if (attr === Boolean) {
            Object.defineProperty(prototype, propName, {
                get() {
                    return this.hasAttribute(propName);
                },
                set(value) {
                    if (value) {
                        this.setAttribute(propName, '');
                    }
                    else {
                        this.removeAttribute(propName);
                    }
                }
            });
        }
        else if (attr === Number) {
            Object.defineProperty(prototype, propName, {
                get() {
                    const value = this.getAttribute(propName);
                    return (value
                        ? parseInt(value, 10)
                        : defaultValue === undefined ? 0 : defaultValue);
                },
                set(value) {
                    this.setAttribute(propName, value);
                }
            });
        }
        else {
            Object.defineProperty(prototype, propName, {
                get() {
                    return this.hasAttribute(propName)
                        ? this.getAttribute(propName)
                        : defaultValue || '';
                },
                set(value) {
                    this.setAttribute(propName, value);
                }
            });
        }
    });
}
MockElement.prototype.cloneNode = function (deep) {
    // because we're creating elements, which extending specific HTML base classes there
    // is a MockElement circular reference that bundling has trouble dealing with so
    // the fix is to add cloneNode() to MockElement's prototype after the HTML classes
    const cloned = createElement(this.ownerDocument, this.nodeName);
    cloned.attributes = cloneAttributes(this.attributes);
    const styleCssText = this.getAttribute('style');
    if (styleCssText != null && styleCssText.length > 0) {
        cloned.setAttribute('style', styleCssText);
    }
    if (deep) {
        for (let i = 0, ii = this.childNodes.length; i < ii; i++) {
            const clonedChildNode = this.childNodes[i].cloneNode(true);
            cloned.appendChild(clonedChildNode);
        }
    }
    return cloned;
};

let sharedDocument;
function parseHtmlToDocument(html, ownerDocument = null) {
    if (ownerDocument == null) {
        if (sharedDocument == null) {
            sharedDocument = new MockDocument();
        }
        ownerDocument = sharedDocument;
    }
    return parseDocumentUtil(ownerDocument, html);
}
function parseHtmlToFragment(html, ownerDocument = null) {
    if (ownerDocument == null) {
        if (sharedDocument == null) {
            sharedDocument = new MockDocument();
        }
        ownerDocument = sharedDocument;
    }
    return parseFragmentUtil(ownerDocument, html);
}

const consoleNoop = () => { };
function createConsole() {
    return {
        debug: consoleNoop,
        error: consoleNoop,
        info: consoleNoop,
        log: consoleNoop,
        warn: consoleNoop,
        dir: consoleNoop,
        dirxml: consoleNoop,
        table: consoleNoop,
        trace: consoleNoop,
        group: consoleNoop,
        groupCollapsed: consoleNoop,
        groupEnd: consoleNoop,
        clear: consoleNoop,
        count: consoleNoop,
        countReset: consoleNoop,
        assert: consoleNoop,
        profile: consoleNoop,
        profileEnd: consoleNoop,
        time: consoleNoop,
        timeLog: consoleNoop,
        timeEnd: consoleNoop,
        timeStamp: consoleNoop,
        context: consoleNoop,
        memory: consoleNoop
    };
}

class MockHistory {
    constructor() {
        this.items = [];
    }
    get length() {
        return this.items.length;
    }
    back() {
        this.go(-1);
    }
    forward() {
        this.go(1);
    }
    go(_value) {
        //
    }
    pushState(_state, _title, _url) {
        //
    }
    replaceState(_state, _title, _url) {
        //
    }
}

class MockIntersectionObserver {
    constructor() { }
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}

class MockLocation {
    constructor() {
        this.ancestorOrigins = null;
        this.protocol = '';
        this.host = '';
        this.hostname = '';
        this.port = '';
        this.pathname = '';
        this.search = '';
        this.hash = '';
        this.username = '';
        this.password = '';
        this.origin = '';
        this._href = '';
    }
    get href() {
        return this._href;
    }
    set href(value) {
        const url = new URL_(value, 'http://mockdoc.stenciljs.com');
        this._href = url.href;
        this.protocol = url.protocol;
        this.host = url.host;
        this.port = url.port;
        this.pathname = url.pathname;
        this.search = url.search;
        this.hash = url.hash;
        this.username = url.username;
        this.password = url.password;
        this.origin = url.origin;
    }
    assign(_url) {
        //
    }
    reload(_forcedReload) {
        //
    }
    replace(_url) {
        //
    }
    toString() {
        return this.href;
    }
}

class MockNavigator {
    constructor() {
        this.appCodeName = 'MockNavigator';
        this.appName = 'MockNavigator';
        this.appVersion = 'MockNavigator';
        this.platform = 'MockNavigator';
        this.userAgent = 'MockNavigator';
    }
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Performance
 */
class MockPerformance {
    constructor() {
        this.timeOrigin = Date.now();
    }
    addEventListener() {
        //
    }
    clearMarks() {
        //
    }
    clearMeasures() {
        //
    }
    clearResourceTimings() {
        //
    }
    dispatchEvent() {
        return true;
    }
    getEntries() {
        return [];
    }
    getEntriesByName() {
        return [];
    }
    getEntriesByType() {
        return [];
    }
    mark() {
        //
    }
    measure() {
        //
    }
    get navigation() {
        return {};
    }
    now() {
        return Date.now() - this.timeOrigin;
    }
    get onresourcetimingbufferfull() {
        return null;
    }
    removeEventListener() {
        //
    }
    setResourceTimingBufferSize() {
        //
    }
    get timing() {
        return {};
    }
    toJSON() {
        //
    }
}
function resetPerformance(perf) {
    if (perf != null) {
        try {
            perf.timeOrigin = Date.now();
        }
        catch (e) { }
    }
}

class MockStorage {
    constructor() {
        this.items = new Map();
    }
    key(_value) {
        //
    }
    getItem(key) {
        key = String(key);
        if (this.items.has(key)) {
            return this.items.get(key);
        }
        return null;
    }
    setItem(key, value) {
        if (value == null) {
            value = 'null';
        }
        this.items.set(String(key), String(value));
    }
    removeItem(key) {
        this.items.delete(String(key));
    }
    clear() {
        this.items.clear();
    }
}

const nativeClearInterval = clearInterval;
const nativeClearTimeout = clearTimeout;
const nativeSetInterval = setInterval;
const nativeSetTimeout = setTimeout;
const nativeURL = URL_;
class MockWindow {
    constructor(html = null) {
        if (html !== false) {
            this.document = new MockDocument(html, this);
        }
        else {
            this.document = null;
        }
        this.performance = new MockPerformance();
        this.customElements = new MockCustomElementRegistry(this);
        this.console = createConsole();
        resetWindowDefaults(this);
        resetWindowDimensions(this);
    }
    addEventListener(type, handler) {
        addEventListener(this, type, handler);
    }
    alert(msg) {
        if (this.console) {
            this.console.debug(msg);
        }
        else {
            console.debug(msg);
        }
    }
    blur() { }
    cancelAnimationFrame(id) {
        this.__clearTimeout(id);
    }
    cancelIdleCallback(id) {
        this.__clearTimeout(id);
    }
    clearInterval(id) {
        this.__clearInterval(id);
    }
    clearTimeout(id) {
        this.__clearTimeout(id);
    }
    close() {
        resetWindow(this);
    }
    confirm() {
        return false;
    }
    get CSS() {
        return {
            supports: () => true
        };
    }
    get CustomEvent() {
        if (this.__customEventClass != null) {
            return this.__customEventClass;
        }
        return MockCustomEvent;
    }
    set CustomEvent(custEvClass) {
        this.__customEventClass = custEvClass;
    }
    dispatchEvent(ev) {
        return dispatchEvent(this, ev);
    }
    get Element() {
        if (this.__elementCstr == null) {
            const ownerDocument = this.document;
            this.__elementCstr = class extends MockElement {
                constructor() {
                    super(ownerDocument, '');
                    throw (new Error('Illegal constructor: cannot construct Element'));
                }
            };
        }
        return this.__elementCstr;
    }
    get Event() {
        if (this.__eventClass != null) {
            return this.__eventClass;
        }
        return MockEvent;
    }
    set Event(ev) {
        this.__eventClass = ev;
    }
    focus() { }
    getComputedStyle(_) {
        return {
            cssText: '',
            length: 0,
            parentRule: null,
            getPropertyPriority() {
                return null;
            },
            getPropertyValue() {
                return '';
            },
            item() {
                return null;
            },
            removeProperty() {
                return null;
            },
            setProperty() {
                return null;
            }
        };
    }
    get globalThis() {
        return this;
    }
    get history() {
        if (this.__history == null) {
            this.__history = new MockHistory();
        }
        return this.__history;
    }
    set history(hsty) {
        this.__history = hsty;
    }
    get JSON() {
        return JSON;
    }
    get KeyboardEvent() {
        if (this.__keyboardEventClass != null) {
            return this.__keyboardEventClass;
        }
        return MockKeyboardEvent;
    }
    set KeyboardEvent(kbEvClass) {
        this.__keyboardEventClass = kbEvClass;
    }
    get HTMLElement() {
        if (this.__htmlElementCstr == null) {
            const ownerDocument = this.document;
            this.__htmlElementCstr = class extends MockHTMLElement {
                constructor() {
                    super(ownerDocument, '');
                    const observedAttributes = this.constructor.observedAttributes;
                    if (Array.isArray(observedAttributes) && typeof this.attributeChangedCallback === 'function') {
                        observedAttributes.forEach(attrName => {
                            const attrValue = this.getAttribute(attrName);
                            if (attrValue != null) {
                                this.attributeChangedCallback(attrName, null, attrValue);
                            }
                        });
                    }
                }
            };
        }
        return this.__htmlElementCstr;
    }
    get IntersectionObserver() {
        return MockIntersectionObserver;
    }
    get localStorage() {
        if (this.__localStorage == null) {
            this.__localStorage = new MockStorage();
        }
        return this.__localStorage;
    }
    set localStorage(locStorage) {
        this.__localStorage = locStorage;
    }
    get location() {
        if (this.__location == null) {
            this.__location = new MockLocation();
        }
        return this.__location;
    }
    set location(val) {
        if (typeof val === 'string') {
            if (this.__location == null) {
                this.__location = new MockLocation();
            }
            this.__location.href = val;
        }
        else {
            this.__location = val;
        }
    }
    matchMedia() {
        return {
            matches: false
        };
    }
    get MouseEvent() {
        if (this.__mouseEventClass != null) {
            return this.__mouseEventClass;
        }
        return MockMouseEvent;
    }
    set MouseEvent(mouseEvClass) {
        this.__mouseEventClass = mouseEvClass;
    }
    get Node() {
        if (this.__nodeCstr == null) {
            const ownerDocument = this.document;
            this.__nodeCstr = class extends MockNode {
                constructor() {
                    super(ownerDocument, 0, 'test', '');
                    throw (new Error('Illegal constructor: cannot construct Node'));
                }
            };
        }
        return this.__nodeCstr;
    }
    get NodeList() {
        if (this.__nodeListCstr == null) {
            const ownerDocument = this.document;
            this.__nodeListCstr = class extends MockNodeList {
                constructor() {
                    super(ownerDocument, [], 0);
                    throw (new Error('Illegal constructor: cannot construct NodeList'));
                }
            };
        }
        return this.__nodeListCstr;
    }
    get navigator() {
        if (this.__navigator == null) {
            this.__navigator = new MockNavigator();
        }
        return this.__navigator;
    }
    set navigator(nav) {
        this.__navigator = nav;
    }
    get parent() {
        return null;
    }
    prompt() {
        return '';
    }
    open() {
        return null;
    }
    get origin() {
        return this.location.origin;
    }
    removeEventListener(type, handler) {
        removeEventListener(this, type, handler);
    }
    requestAnimationFrame(callback) {
        return this.setTimeout(() => {
            callback(Date.now());
        }, 0);
    }
    requestIdleCallback(callback) {
        return this.setTimeout(() => {
            callback({
                didTimeout: false,
                timeRemaining: () => 0
            });
        }, 0);
    }
    scroll(_x, _y) { }
    scrollBy(_x, _y) { }
    scrollTo(_x, _y) { }
    get self() {
        return this;
    }
    get sessionStorage() {
        if (this.__sessionStorage == null) {
            this.__sessionStorage = new MockStorage();
        }
        return this.__sessionStorage;
    }
    set sessionStorage(locStorage) {
        this.__sessionStorage = locStorage;
    }
    setInterval(callback, ms, ...args) {
        if (this.__timeouts == null) {
            this.__timeouts = new Set();
        }
        ms = Math.min(ms, this.__maxTimeout);
        if (this.__allowInterval) {
            const intervalId = this.__setInterval(() => {
                this.__timeouts.delete(intervalId);
                try {
                    callback(...args);
                }
                catch (e) {
                    if (this.console) {
                        this.console.error(e);
                    }
                    else {
                        console.error(e);
                    }
                }
            }, ms);
            this.__timeouts.add(intervalId);
            return intervalId;
        }
        const timeoutId = this.__setTimeout(() => {
            this.__timeouts.delete(timeoutId);
            try {
                callback(...args);
            }
            catch (e) {
                if (this.console) {
                    this.console.error(e);
                }
                else {
                    console.error(e);
                }
            }
        }, ms);
        this.__timeouts.add(timeoutId);
        return timeoutId;
    }
    setTimeout(callback, ms, ...args) {
        if (this.__timeouts == null) {
            this.__timeouts = new Set();
        }
        ms = Math.min(ms, this.__maxTimeout);
        const timeoutId = this.__setTimeout(() => {
            this.__timeouts.delete(timeoutId);
            try {
                callback(...args);
            }
            catch (e) {
                if (this.console) {
                    this.console.error(e);
                }
                else {
                    console.error(e);
                }
            }
        }, ms);
        this.__timeouts.add(timeoutId);
        return timeoutId;
    }
    get top() {
        return this;
    }
    get window() {
        return this;
    }
    onanimationstart() { }
    onanimationend() { }
    onanimationiteration() { }
    onabort() { }
    onauxclick() { }
    onbeforecopy() { }
    onbeforecut() { }
    onbeforepaste() { }
    onblur() { }
    oncancel() { }
    oncanplay() { }
    oncanplaythrough() { }
    onchange() { }
    onclick() { }
    onclose() { }
    oncontextmenu() { }
    oncopy() { }
    oncuechange() { }
    oncut() { }
    ondblclick() { }
    ondrag() { }
    ondragend() { }
    ondragenter() { }
    ondragleave() { }
    ondragover() { }
    ondragstart() { }
    ondrop() { }
    ondurationchange() { }
    onemptied() { }
    onended() { }
    onerror() { }
    onfocus() { }
    onformdata() { }
    onfullscreenchange() { }
    onfullscreenerror() { }
    ongotpointercapture() { }
    oninput() { }
    oninvalid() { }
    onkeydown() { }
    onkeypress() { }
    onkeyup() { }
    onload() { }
    onloadeddata() { }
    onloadedmetadata() { }
    onloadstart() { }
    onlostpointercapture() { }
    onmousedown() { }
    onmouseenter() { }
    onmouseleave() { }
    onmousemove() { }
    onmouseout() { }
    onmouseover() { }
    onmouseup() { }
    onmousewheel() { }
    onpaste() { }
    onpause() { }
    onplay() { }
    onplaying() { }
    onpointercancel() { }
    onpointerdown() { }
    onpointerenter() { }
    onpointerleave() { }
    onpointermove() { }
    onpointerout() { }
    onpointerover() { }
    onpointerup() { }
    onprogress() { }
    onratechange() { }
    onreset() { }
    onresize() { }
    onscroll() { }
    onsearch() { }
    onseeked() { }
    onseeking() { }
    onselect() { }
    onselectstart() { }
    onstalled() { }
    onsubmit() { }
    onsuspend() { }
    ontimeupdate() { }
    ontoggle() { }
    onvolumechange() { }
    onwaiting() { }
    onwebkitfullscreenchange() { }
    onwebkitfullscreenerror() { }
    onwheel() { }
}
function resetWindowDefaults(win) {
    win.__clearInterval = nativeClearInterval;
    win.__clearTimeout = nativeClearTimeout;
    win.__setInterval = nativeSetInterval;
    win.__setTimeout = nativeSetTimeout;
    win.__maxTimeout = 30000;
    win.__allowInterval = true;
    win.URL = nativeURL;
}
function cloneWindow(srcWin) {
    if (srcWin == null) {
        return null;
    }
    const clonedWin = new MockWindow(false);
    if (srcWin.document != null) {
        const clonedDoc = new MockDocument(false, clonedWin);
        clonedWin.document = clonedDoc;
        clonedDoc.documentElement = srcWin.document.documentElement.cloneNode(true);
    }
    else {
        clonedWin.document = new MockDocument(null, clonedWin);
    }
    return clonedWin;
}
function cloneDocument(srcDoc) {
    if (srcDoc == null) {
        return null;
    }
    const dstWin = cloneWindow(srcDoc.defaultView);
    return dstWin.document;
}
/**
 * Constrain setTimeout() to 1ms, but still async. Also
 * only allow setInterval() to fire once, also constrained to 1ms.
 */
function constrainTimeouts(win) {
    win.__allowInterval = false;
    win.__maxTimeout = 0;
}
function resetWindow(win) {
    if (win != null) {
        if (win.__timeouts) {
            win.__timeouts.forEach(timeoutId => {
                nativeClearInterval(timeoutId);
                nativeClearTimeout(timeoutId);
            });
            win.__timeouts.clear();
        }
        if (win.customElements && win.customElements.clear) {
            win.customElements.clear();
        }
        resetDocument(win.document);
        resetPerformance(win.performance);
        for (const key in win) {
            if (win.hasOwnProperty(key) && key !== 'document' && key !== 'performance' && key !== 'customElements') {
                delete win[key];
            }
        }
        resetWindowDefaults(win);
        resetWindowDimensions(win);
        resetEventListeners(win);
        if (win.document != null) {
            try {
                win.document.defaultView = win;
            }
            catch (e) { }
        }
    }
}
function resetWindowDimensions(win) {
    try {
        win.devicePixelRatio = 1;
        win.innerHeight = 768;
        win.innerWidth = 1366;
        win.pageXOffset = 0;
        win.pageYOffset = 0;
        win.screenLeft = 0;
        win.screenTop = 0;
        win.screenX = 0;
        win.screenY = 0;
        win.scrollX = 0;
        win.scrollY = 0;
        win.screen = {
            availHeight: win.innerHeight,
            availLeft: 0,
            availTop: 0,
            availWidth: win.innerWidth,
            colorDepth: 24,
            height: win.innerHeight,
            keepAwake: false,
            orientation: {
                angle: 0,
                type: 'portrait-primary'
            },
            pixelDepth: 24,
            width: win.innerWidth
        };
    }
    catch (e) { }
}

class MockDocument extends MockHTMLElement {
    constructor(html = null, win = null) {
        super(null, null);
        this.nodeName = "#document" /* DOCUMENT_NODE */;
        this.nodeType = 9 /* DOCUMENT_NODE */;
        this.defaultView = win;
        this.cookie = '';
        this.referrer = '';
        this.appendChild(this.createDocumentTypeNode());
        if (typeof html === 'string') {
            const parsedDoc = parseDocumentUtil(this, html);
            const documentElement = parsedDoc.children.find(elm => elm.nodeName === 'HTML');
            if (documentElement != null) {
                this.appendChild(documentElement);
                setOwnerDocument(documentElement, this);
            }
        }
        else if (html !== false) {
            const documentElement = new MockHTMLElement(this, 'html');
            this.appendChild(documentElement);
            documentElement.appendChild(new MockHTMLElement(this, 'head'));
            documentElement.appendChild(new MockHTMLElement(this, 'body'));
        }
    }
    get location() {
        if (this.defaultView != null) {
            return this.defaultView.location;
        }
        return null;
    }
    set location(val) {
        if (this.defaultView != null) {
            this.defaultView.location = val;
        }
    }
    get baseURI() {
        const baseNode = this.head.childNodes.find(node => node.nodeName === 'BASE');
        if (baseNode) {
            return baseNode.href;
        }
        return this.URL;
    }
    get URL() {
        return this.location.href;
    }
    get styleSheets() {
        return this.querySelectorAll('style');
    }
    get scripts() {
        return this.querySelectorAll('script');
    }
    get forms() {
        return this.querySelectorAll('form');
    }
    get images() {
        return this.querySelectorAll('img');
    }
    get scrollingElement() {
        return this.documentElement;
    }
    get documentElement() {
        for (let i = this.childNodes.length - 1; i >= 0; i--) {
            if (this.childNodes[i].nodeName === 'HTML') {
                return this.childNodes[i];
            }
        }
        const documentElement = new MockHTMLElement(this, 'html');
        this.appendChild(documentElement);
        return documentElement;
    }
    set documentElement(documentElement) {
        for (let i = this.childNodes.length - 1; i >= 0; i--) {
            if (this.childNodes[i].nodeType !== 10 /* DOCUMENT_TYPE_NODE */) {
                this.childNodes[i].remove();
            }
        }
        if (documentElement != null) {
            this.appendChild(documentElement);
            setOwnerDocument(documentElement, this);
        }
    }
    get head() {
        const documentElement = this.documentElement;
        for (let i = 0; i < documentElement.childNodes.length; i++) {
            if (documentElement.childNodes[i].nodeName === 'HEAD') {
                return documentElement.childNodes[i];
            }
        }
        const head = new MockHTMLElement(this, 'head');
        documentElement.insertBefore(head, documentElement.firstChild);
        return head;
    }
    set head(head) {
        const documentElement = this.documentElement;
        for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'HEAD') {
                documentElement.childNodes[i].remove();
            }
        }
        if (head != null) {
            documentElement.insertBefore(head, documentElement.firstChild);
            setOwnerDocument(head, this);
        }
    }
    get body() {
        const documentElement = this.documentElement;
        for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'BODY') {
                return documentElement.childNodes[i];
            }
        }
        const body = new MockHTMLElement(this, 'body');
        documentElement.appendChild(body);
        return body;
    }
    set body(body) {
        const documentElement = this.documentElement;
        for (let i = documentElement.childNodes.length - 1; i >= 0; i--) {
            if (documentElement.childNodes[i].nodeName === 'BODY') {
                documentElement.childNodes[i].remove();
            }
        }
        if (body != null) {
            documentElement.appendChild(body);
            setOwnerDocument(body, this);
        }
    }
    appendChild(newNode) {
        newNode.remove();
        newNode.parentNode = this;
        this.childNodes.push(newNode);
        return newNode;
    }
    createComment(data) {
        return new MockComment(this, data);
    }
    createAttribute(attrName) {
        return new MockAttr(attrName.toLowerCase(), '');
    }
    createAttributeNS(namespaceURI, attrName) {
        return new MockAttr(attrName, '', namespaceURI);
    }
    createElement(tagName) {
        if (tagName === "#document" /* DOCUMENT_NODE */) {
            const doc = new MockDocument(false);
            doc.nodeName = tagName;
            doc.parentNode = null;
            return doc;
        }
        return createElement(this, tagName);
    }
    createElementNS(namespaceURI, tagName) {
        const elmNs = createElementNS(this, namespaceURI, tagName);
        elmNs.namespaceURI = namespaceURI;
        return elmNs;
    }
    createTextNode(text) {
        return new MockTextNode(this, text);
    }
    createDocumentFragment() {
        return new MockDocumentFragment(this);
    }
    createDocumentTypeNode() {
        return new MockDocumentTypeNode(this);
    }
    getElementById(id) {
        return getElementById(this, id);
    }
    getElementsByName(elmName) {
        return getElementsByName(this, elmName.toLowerCase());
    }
    get title() {
        const title = this.head.childNodes.find(elm => elm.nodeName === 'TITLE');
        if (title != null) {
            return title.textContent;
        }
        return '';
    }
    set title(value) {
        const head = this.head;
        let title = head.childNodes.find(elm => elm.nodeName === 'TITLE');
        if (title == null) {
            title = this.createElement('title');
            head.appendChild(title);
        }
        title.textContent = value;
    }
}
function createDocument(html = null) {
    return new MockWindow(html).document;
}
function createFragment(html) {
    return parseHtmlToFragment(html, null);
}
function resetDocument(doc) {
    if (doc != null) {
        resetEventListeners(doc);
        const documentElement = doc.documentElement;
        if (documentElement != null) {
            resetElement(documentElement);
            for (let i = 0, ii = documentElement.childNodes.length; i < ii; i++) {
                const childNode = documentElement.childNodes[i];
                resetElement(childNode);
                childNode.childNodes.length = 0;
            }
        }
        for (const key in doc) {
            if (doc.hasOwnProperty(key) && !DOC_KEY_KEEPERS.has(key)) {
                delete doc[key];
            }
        }
        try {
            doc.nodeName = "#document" /* DOCUMENT_NODE */;
        }
        catch (e) { }
        try {
            doc.nodeType = 9 /* DOCUMENT_NODE */;
        }
        catch (e) { }
        try {
            doc.cookie = '';
        }
        catch (e) { }
        try {
            doc.referrer = '';
        }
        catch (e) { }
    }
}
const DOC_KEY_KEEPERS = new Set([
    'nodeName',
    'nodeType',
    'nodeValue',
    'ownerDocument',
    'parentNode',
    'childNodes',
    '_shadowRoot'
]);
function getElementById(elm, id) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        if (childElm.id === id) {
            return childElm;
        }
        const childElmFound = getElementById(childElm, id);
        if (childElmFound != null) {
            return childElmFound;
        }
    }
    return null;
}
function getElementsByName(elm, elmName, foundElms = []) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        if (childElm.name && childElm.name.toLowerCase() === elmName) {
            foundElms.push(childElm);
        }
        getElementsByName(childElm, elmName, foundElms);
    }
    return foundElms;
}
function setOwnerDocument(elm, ownerDocument) {
    for (let i = 0, ii = elm.childNodes.length; i < ii; i++) {
        elm.childNodes[i].ownerDocument = ownerDocument;
        if (elm.childNodes[i].nodeType === 1 /* ELEMENT_NODE */) {
            setOwnerDocument(elm.childNodes[i], ownerDocument);
        }
    }
}

function setupGlobal(gbl) {
    if (gbl.window == null) {
        const win = gbl.window = new MockWindow();
        WINDOW_FUNCTIONS.forEach(fnName => {
            if (!(fnName in gbl)) {
                gbl[fnName] = win[fnName].bind(win);
            }
        });
        WINDOW_PROPS.forEach(propName => {
            if (!(propName in gbl)) {
                Object.defineProperty(gbl, propName, {
                    get() { return win[propName]; },
                    set(val) { win[propName] = val; },
                    configurable: true,
                    enumerable: true
                });
            }
        });
    }
    return gbl.window;
}
function teardownGlobal(gbl) {
    const win = gbl.window;
    if (win && typeof win.close === 'function') {
        win.close();
    }
}
function patchWindow(winToBePatched) {
    const mockWin = new MockWindow(false);
    WINDOW_FUNCTIONS.forEach(fnName => {
        if (typeof winToBePatched[fnName] !== 'function') {
            winToBePatched[fnName] = mockWin[fnName].bind(mockWin);
        }
    });
    WINDOW_PROPS.forEach(propName => {
        if (winToBePatched === undefined) {
            Object.defineProperty(winToBePatched, propName, {
                get() { return mockWin[propName]; },
                set(val) { mockWin[propName] = val; },
                configurable: true,
                enumerable: true
            });
        }
    });
}
const WINDOW_FUNCTIONS = [
    'addEventListener',
    'alert',
    'blur',
    'cancelAnimationFrame',
    'cancelIdleCallback',
    'clearInterval',
    'clearTimeout',
    'close',
    'confirm',
    'dispatchEvent',
    'focus',
    'getComputedStyle',
    'matchMedia',
    'open',
    'prompt',
    'removeEventListener',
    'requestAnimationFrame',
    'requestIdleCallback',
    'URL'
];
const WINDOW_PROPS = [
    'customElements',
    'devicePixelRatio',
    'document',
    'history',
    'innerHeight',
    'innerWidth',
    'localStorage',
    'location',
    'navigator',
    'pageXOffset',
    'pageYOffset',
    'performance',
    'screenLeft',
    'screenTop',
    'screenX',
    'screenY',
    'scrollX',
    'scrollY',
    'sessionStorage',
    'CSS',
    'CustomEvent',
    'Event',
    'Element',
    'HTMLElement',
    'Node',
    'NodeList',
    'KeyboardEvent',
    'MouseEvent'
];

const URL_$1 = /*@__PURE__*/(function(){
  if (typeof URL === 'function') {
    return URL;
  }
  const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
  if (typeof requireFunc === 'function') {
    try {
      return requireFunc('url').URL;
    } catch (e) {}
  }
  return function() {}
})();

function normalizeHydrateOptions(inputOpts) {
    const outputOpts = Object.assign({
        hasTimedOut: false,
        serializeToHtml: false,
        destroyWindow: false,
        destroyDocument: false,
    }, inputOpts || {});
    if (typeof outputOpts.clientHydrateAnnotations !== 'boolean') {
        outputOpts.clientHydrateAnnotations = true;
    }
    if (typeof outputOpts.constrainTimeouts !== 'boolean') {
        outputOpts.constrainTimeouts = true;
    }
    if (typeof outputOpts.maxHydrateCount !== 'number') {
        outputOpts.maxHydrateCount = 300;
    }
    if (typeof outputOpts.timeout !== 'number') {
        outputOpts.timeout = 15000;
    }
    return outputOpts;
}
function generateHydrateResults(opts) {
    if (typeof opts.url !== 'string') {
        opts.url = `https://hydrate.stenciljs.com/`;
    }
    const results = {
        diagnostics: [],
        url: opts.url,
        host: null,
        hostname: null,
        href: null,
        port: null,
        pathname: null,
        search: null,
        hash: null,
        html: null,
        hydratedCount: 0,
        anchors: [],
        components: [],
        imgs: [],
        scripts: [],
        styles: [],
        title: null
    };
    try {
        const url = new URL_$1(opts.url, `https://hydrate.stenciljs.com/`);
        results.url = url.href;
        results.host = url.host;
        results.hostname = url.hostname;
        results.href = url.href;
        results.port = url.port;
        results.pathname = url.pathname;
        results.search = url.search;
        results.hash = url.hash;
    }
    catch (e) {
        renderCatchError(results, e);
    }
    return results;
}
function renderBuildError(results, msg) {
    const diagnostic = {
        level: 'error',
        type: 'build',
        header: 'Hydrate Error',
        messageText: msg,
        relFilePath: null,
        absFilePath: null,
        lines: []
    };
    if (results.pathname) {
        if (results.pathname !== '/') {
            diagnostic.header += ': ' + results.pathname;
        }
    }
    else if (results.url) {
        diagnostic.header += ': ' + results.url;
    }
    results.diagnostics.push(diagnostic);
    return diagnostic;
}
function renderCatchError(results, err) {
    const diagnostic = renderBuildError(results, null);
    if (err != null) {
        if (err.stack != null) {
            diagnostic.messageText = err.stack.toString();
        }
        else {
            if (err.message != null) {
                diagnostic.messageText = err.message.toString();
            }
            else {
                diagnostic.messageText = err.toString();
            }
        }
    }
    return diagnostic;
}

function initializeWindow(win, opts, results) {
    try {
        win.location.href = opts.url;
    }
    catch (e) {
        renderCatchError(results, e);
    }
    if (typeof opts.userAgent === 'string') {
        try {
            win.navigator.userAgent = opts.userAgent;
        }
        catch (e) { }
    }
    if (typeof opts.cookie === 'string') {
        try {
            win.document.cookie = opts.cookie;
        }
        catch (e) { }
    }
    if (typeof opts.referrer === 'string') {
        try {
            win.document.referrer = opts.referrer;
        }
        catch (e) { }
    }
    if (typeof opts.direction === 'string') {
        try {
            win.document.documentElement.setAttribute('dir', opts.direction);
        }
        catch (e) { }
    }
    if (typeof opts.language === 'string') {
        try {
            win.document.documentElement.setAttribute('lang', opts.language);
        }
        catch (e) { }
    }
    try {
        win.customElements = null;
    }
    catch (e) { }
    if (opts.constrainTimeouts) {
        constrainTimeouts(win);
    }
    try {
        win.console.error = function () {
            renderCatchError(results, [...arguments].join(', '));
        };
        win.console.debug = function () {
            const diagnostic = renderCatchError(results, [...arguments].join(', '));
            diagnostic.level = 'debug';
            diagnostic.messageText = 'Hydrate Debug';
        };
    }
    catch (e) {
        renderCatchError(results, e);
    }
    return win;
}

function inspectElement(results, elm, depth) {
    const children = elm.children;
    for (let i = 0, ii = children.length; i < ii; i++) {
        const childElm = children[i];
        const tagName = childElm.nodeName.toLowerCase();
        if (tagName.includes('-')) {
            const cmp = results.components.find(c => c.tag === tagName);
            if (cmp != null) {
                cmp.count++;
                if (depth > cmp.depth) {
                    cmp.depth = depth;
                }
            }
        }
        else {
            switch (tagName) {
                case 'a':
                    const anchor = collectAttributes(childElm);
                    anchor.href = childElm.href;
                    if (typeof anchor.href === 'string') {
                        if (!results.anchors.some(a => a.href === anchor.href)) {
                            results.anchors.push(anchor);
                        }
                    }
                    break;
                case 'img':
                    const img = collectAttributes(childElm);
                    img.src = childElm.src;
                    if (typeof img.src === 'string') {
                        if (!results.imgs.some(a => a.src === img.src)) {
                            results.imgs.push(img);
                        }
                    }
                    break;
                case 'link':
                    const link = collectAttributes(childElm);
                    link.href = childElm.href;
                    if (typeof link.rel === 'string' && link.rel.toLowerCase() === 'stylesheet') {
                        if (typeof link.href === 'string') {
                            if (!results.styles.some(s => s.link === link.href)) {
                                delete link.rel;
                                delete link.type;
                                results.styles.push(link);
                            }
                        }
                    }
                    break;
                case 'script':
                    const script = collectAttributes(childElm);
                    script.src = childElm.src;
                    if (typeof script.src === 'string') {
                        if (!results.scripts.some(s => s.src === script.src)) {
                            results.scripts.push(script);
                        }
                    }
                    break;
            }
        }
        depth++;
        inspectElement(results, childElm, depth);
    }
}
function collectAttributes(node) {
    const parsedElm = {};
    const attrs = node.attributes;
    for (let i = 0, ii = attrs.length; i < ii; i++) {
        const attr = attrs.item(i);
        const attrName = attr.nodeName.toLowerCase();
        if (SKIP_ATTRS.has(attrName)) {
            continue;
        }
        const attrValue = attr.nodeValue;
        if (attrName === 'class' && attrValue === '') {
            continue;
        }
        parsedElm[attrName] = attrValue;
    }
    return parsedElm;
}
const SKIP_ATTRS = new Set([
    's-id', 'c-id'
]);

function patchDomImplementation(doc, opts) {
    let win;
    if (doc.defaultView != null) {
        opts.destroyWindow = true;
        patchWindow(doc.defaultView);
        win = doc.defaultView;
    }
    else {
        opts.destroyWindow = true;
        opts.destroyDocument = false;
        win = new MockWindow(false);
    }
    if (win.document !== doc) {
        win.document = doc;
    }
    if (doc.defaultView !== win) {
        doc.defaultView = win;
    }
    const HTMLElement = doc.documentElement.constructor.prototype;
    if (typeof HTMLElement.getRootNode !== 'function') {
        const elm = doc.createElement('unknown-element');
        const HTMLUnknownElement = elm.constructor.prototype;
        HTMLUnknownElement.getRootNode = getRootNode;
    }
    if (typeof doc.createEvent === 'function') {
        const CustomEvent = doc.createEvent('CustomEvent').constructor;
        if (win.CustomEvent !== CustomEvent) {
            win.CustomEvent = CustomEvent;
        }
    }
    try {
        doc.baseURI;
    }
    catch (e) {
        Object.defineProperty(doc, 'baseURI', {
            get() {
                const baseElm = doc.querySelector('base[href]');
                if (baseElm) {
                    return (new URL(baseElm.getAttribute('href'), win.location.href)).href;
                }
                return win.location.href;
            }
        });
    }
    return win;
}
function getRootNode(opts) {
    const isComposed = (opts != null && opts.composed === true);
    let node = this;
    while (node.parentNode != null) {
        node = node.parentNode;
        if (isComposed === true && node.parentNode == null && node.host != null) {
            node = node.host;
        }
    }
    return node;
}

function relocateMetaCharset(doc) {
    const head = doc.head;
    let charsetElm = head.querySelector('meta[charset]');
    if (charsetElm == null) {
        charsetElm = doc.createElement('meta');
        charsetElm.setAttribute('charset', 'utf-8');
    }
    else {
        charsetElm.remove();
    }
    head.insertBefore(charsetElm, head.firstChild);
}

const commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parseCss(css, filePath) {
    var lineno = 1;
    var column = 1;
    var srcLines;
    function updatePosition(str) {
        const lines = str.match(/\n/g);
        if (lines)
            lineno += lines.length;
        const i = str.lastIndexOf('\n');
        column = ~i ? str.length - i : column + str.length;
    }
    function position() {
        const start = { line: lineno, column: column };
        return function (node) {
            node.position = new ParsePosition(start);
            whitespace();
            return node;
        };
    }
    class ParsePosition {
        constructor(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = filePath;
        }
    }
    ParsePosition.prototype.content = css;
    const diagnostics = [];
    function error(msg) {
        if (!srcLines) {
            srcLines = css.split('\n');
        }
        const d = {
            level: 'error',
            type: 'css',
            language: 'css',
            header: 'CSS Parse',
            messageText: msg,
            absFilePath: filePath,
            lines: [{
                    lineIndex: lineno - 1,
                    lineNumber: lineno,
                    errorCharStart: column,
                    text: css[lineno - 1],
                }]
        };
        if (lineno > 1) {
            const previousLine = {
                lineIndex: lineno - 1,
                lineNumber: lineno - 1,
                text: css[lineno - 2],
                errorCharStart: -1,
                errorLength: -1
            };
            d.lines.unshift(previousLine);
        }
        if (lineno + 2 < srcLines.length) {
            const nextLine = {
                lineIndex: lineno,
                lineNumber: lineno + 1,
                text: srcLines[lineno],
                errorCharStart: -1,
                errorLength: -1
            };
            d.lines.push(nextLine);
        }
        diagnostics.push(d);
    }
    function stylesheet() {
        const rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: filePath,
                rules: rulesList,
                diagnostics: diagnostics
            }
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        const rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node !== false) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        const m = re.exec(css);
        if (!m)
            return;
        const str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        var c;
        rules = rules || [];
        while (c = comment()) {
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    function comment() {
        const pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1))
            return;
        var i = 2;
        while ('' !== css.charAt(i) && ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1)))
            ++i;
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        const str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str
        });
    }
    function selector() {
        const m = match(/^([^{]+)/);
        if (!m)
            return;
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        const pos = position();
        var prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!prop)
            return;
        prop = trim(prop[0]);
        if (!match(/^:\s*/))
            return error(`property missing ':'`);
        const val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        const ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : ''
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        const decls = [];
        if (!open())
            return error(`missing '{'`);
        comments(decls);
        var decl;
        while (decl = declaration()) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        if (!close())
            return error(`missing '}'`);
        return decls;
    }
    function keyframe() {
        var m;
        const vals = [];
        const pos = position();
        while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length)
            return;
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations()
        });
    }
    function atkeyframes() {
        const pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m)
            return;
        const vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m)
            return error(`@keyframes missing name`);
        const name = m[1];
        if (!open())
            return error(`@keyframes missing '{'`);
        var frame;
        var frames = comments();
        while (frame = keyframe()) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close())
            return error(`@keyframes missing '}'`);
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames
        });
    }
    function atsupports() {
        const pos = position();
        const m = match(/^@supports *([^{]+)/);
        if (!m)
            return;
        const supports = trim(m[1]);
        if (!open())
            return error(`@supports missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@supports missing '}'`);
        return pos({
            type: 'supports',
            supports: supports,
            rules: style
        });
    }
    function athost() {
        const pos = position();
        const m = match(/^@host\s*/);
        if (!m)
            return;
        if (!open())
            return error(`@host missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@host missing '}'`);
        return pos({
            type: 'host',
            rules: style
        });
    }
    function atmedia() {
        const pos = position();
        const m = match(/^@media *([^{]+)/);
        if (!m)
            return;
        const media = trim(m[1]);
        if (!open())
            return error(`@media missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@media missing '}'`);
        return pos({
            type: 'media',
            media: media,
            rules: style
        });
    }
    function atcustommedia() {
        const pos = position();
        const m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m)
            return;
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2])
        });
    }
    function atpage() {
        const pos = position();
        const m = match(/^@page */);
        if (!m)
            return;
        const sel = selector() || [];
        if (!open())
            return error(`@page missing '{'`);
        var decls = comments();
        var decl;
        while (decl = declaration()) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close())
            return error(`@page missing '}'`);
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls
        });
    }
    function atdocument() {
        const pos = position();
        const m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m)
            return;
        const vendor = trim(m[1]);
        const doc = trim(m[2]);
        if (!open())
            return error(`@document missing '{'`);
        const style = comments().concat(rules());
        if (!close())
            return error(`@document missing '}'`);
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style
        });
    }
    function atfontface() {
        const pos = position();
        const m = match(/^@font-face\s*/);
        if (!m)
            return;
        if (!open())
            return error(`@font-face missing '{'`);
        var decls = comments();
        var decl;
        while (decl = declaration()) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close())
            return error(`@font-face missing '}'`);
        return pos({
            type: 'font-face',
            declarations: decls
        });
    }
    const atimport = _compileAtrule('import');
    const atcharset = _compileAtrule('charset');
    const atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        const re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            const pos = position();
            const m = match(re);
            if (!m)
                return;
            const ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@')
            return;
        return atkeyframes()
            || atmedia()
            || atcustommedia()
            || atsupports()
            || atimport()
            || atcharset()
            || atnamespace()
            || atdocument()
            || atpage()
            || athost()
            || atfontface();
    }
    function rule() {
        const pos = position();
        const sel = selector();
        if (!sel)
            return error('selector missing');
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations()
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.trim() : '';
}
function addParent(obj, parent) {
    const isNode = obj && typeof obj.type === 'string';
    const childParent = isNode ? obj : parent;
    for (const k in obj) {
        const value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) { addParent(v, childParent); });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
        });
    }
    return obj;
}

function getSelectors(sel) {
    SELECTORS.all.length = SELECTORS.tags.length = SELECTORS.classNames.length = SELECTORS.ids.length = SELECTORS.attrs.length = 0;
    sel = sel.replace(/\./g, ' .')
        .replace(/\#/g, ' #')
        .replace(/\[/g, ' [')
        .replace(/\>/g, ' > ')
        .replace(/\+/g, ' + ')
        .replace(/\~/g, ' ~ ')
        .replace(/\*/g, ' * ')
        .replace(/\:not\((.*?)\)/g, ' ');
    const items = sel.split(' ');
    for (var i = 0; i < items.length; i++) {
        items[i] = items[i].split(':')[0];
        if (items[i].length === 0)
            continue;
        if (items[i].charAt(0) === '.') {
            SELECTORS.classNames.push(items[i].substr(1));
        }
        else if (items[i].charAt(0) === '#') {
            SELECTORS.ids.push(items[i].substr(1));
        }
        else if (items[i].charAt(0) === '[') {
            items[i] = items[i].substr(1).split('=')[0].split(']')[0].trim();
            SELECTORS.attrs.push(items[i].toLowerCase());
        }
        else if (/[a-z]/g.test(items[i].charAt(0))) {
            SELECTORS.tags.push(items[i].toLowerCase());
        }
    }
    SELECTORS.classNames = SELECTORS.classNames.sort((a, b) => {
        if (a.length < b.length)
            return -1;
        if (a.length > b.length)
            return 1;
        return 0;
    });
    return SELECTORS;
}
const SELECTORS = {
    all: [],
    tags: [],
    classNames: [],
    ids: [],
    attrs: []
};

class StringifyCss {
    constructor(usedSelectors) {
        this.usedSelectors = usedSelectors;
        this.hasUsedAttrs = usedSelectors.attrs.size > 0;
        this.hasUsedClassNames = usedSelectors.classNames.size > 0;
        this.hasUsedIds = usedSelectors.ids.size > 0;
        this.hasUsedTags = usedSelectors.tags.size > 0;
    }
    visit(node) {
        return this[node.type](node);
    }
    mapVisit(nodes, delim) {
        let buf = '';
        delim = delim || '';
        for (let i = 0, length = nodes.length; i < length; i++) {
            buf += this.visit(nodes[i]);
            if (delim && i < length - 1)
                buf += delim;
        }
        return buf;
    }
    compile(node) {
        return node.stylesheet
            .rules.map(this.visit, this)
            .join('');
    }
    comment() {
        return '';
    }
    import(node) {
        return '@import ' + node.import + ';';
    }
    media(node) {
        const mediaCss = this.mapVisit(node.rules);
        if (mediaCss === '') {
            return '';
        }
        return '@media ' + node.media + '{' + this.mapVisit(node.rules) + '}';
    }
    document(node) {
        const documentCss = this.mapVisit(node.rules);
        if (documentCss === '') {
            return '';
        }
        const doc = '@' + (node.vendor || '') + 'document ' + node.document;
        return doc + '{' + documentCss + '}';
    }
    charset(node) {
        return '@charset ' + node.charset + ';';
    }
    namespace(node) {
        return '@namespace ' + node.namespace + ';';
    }
    supports(node) {
        const supportsCss = this.mapVisit(node.rules);
        if (supportsCss === '') {
            return '';
        }
        return '@supports ' + node.supports + '{' + supportsCss + '}';
    }
    keyframes(node) {
        const keyframesCss = this.mapVisit(node.keyframes);
        if (keyframesCss === '') {
            return '';
        }
        return '@' + (node.vendor || '') + 'keyframes ' + node.name + '{' + keyframesCss + '}';
    }
    keyframe(node) {
        const decls = node.declarations;
        return node.values.join(',') + '{' + this.mapVisit(decls) + '}';
    }
    page(node) {
        const sel = node.selectors.length
            ? node.selectors.join(', ')
            : '';
        return '@page ' + sel + '{' + this.mapVisit(node.declarations) + '}';
    }
    ['font-face'](node) {
        const fontCss = this.mapVisit(node.declarations);
        if (fontCss === '') {
            return '';
        }
        return '@font-face{' + fontCss + '}';
    }
    host(node) {
        return '@host{' + this.mapVisit(node.rules) + '}';
    }
    ['custom-media'](node) {
        return '@custom-media ' + node.name + ' ' + node.media + ';';
    }
    rule(node) {
        const decls = node.declarations;
        if (decls == null || decls.length === 0) {
            return '';
        }
        const usedSelectors = this.usedSelectors;
        let i;
        let j;
        for (i = node.selectors.length - 1; i >= 0; i--) {
            const sel = getSelectors(node.selectors[i]);
            let include = true;
            let jlen = sel.classNames.length;
            if (jlen > 0 && this.hasUsedClassNames) {
                for (j = 0; j < jlen; j++) {
                    if (!usedSelectors.classNames.has(sel.classNames[j])) {
                        include = false;
                        break;
                    }
                }
            }
            if (include && this.hasUsedTags) {
                jlen = sel.tags.length;
                if (jlen > 0) {
                    for (j = 0; j < jlen; j++) {
                        if (!usedSelectors.tags.has(sel.tags[j])) {
                            include = false;
                            break;
                        }
                    }
                }
            }
            if (include && this.hasUsedAttrs) {
                jlen = sel.attrs.length;
                if (jlen > 0) {
                    for (j = 0; j < jlen; j++) {
                        if (!usedSelectors.attrs.has(sel.attrs[j])) {
                            include = false;
                            break;
                        }
                    }
                }
            }
            if (include && this.hasUsedIds) {
                jlen = sel.ids.length;
                if (jlen > 0) {
                    for (j = 0; j < jlen; j++) {
                        if (!usedSelectors.ids.has(sel.ids[j])) {
                            include = false;
                            break;
                        }
                    }
                }
            }
            if (!include) {
                node.selectors.splice(i, 1);
            }
        }
        if (node.selectors.length === 0) {
            return '';
        }
        return `${node.selectors}{${this.mapVisit(decls)}}`;
    }
    declaration(node) {
        return node.property + ':' + node.value + ';';
    }
}

class UsedSelectors {
    constructor(elm) {
        this.tags = new Set();
        this.classNames = new Set();
        this.ids = new Set();
        this.attrs = new Set();
        this.collectSelectors(elm);
    }
    collectSelectors(elm) {
        if (elm != null && elm.tagName) {
            const tagName = elm.tagName.toLowerCase();
            this.tags.add(tagName);
            const attributes = elm.attributes;
            for (let i = 0, l = attributes.length; i < l; i++) {
                const attr = attributes.item(i);
                const attrName = attr.name.toLowerCase();
                if (attrName === 'class') {
                    const classList = elm.classList;
                    for (let i = 0, l = classList.length; i < l; i++) {
                        this.classNames.add(classList.item(i));
                    }
                }
                else if (attrName === 'style') {
                    continue;
                }
                else if (attrName === 'id') {
                    this.ids.add(attr.value);
                }
                else {
                    this.attrs.add(attrName);
                }
            }
            for (let i = 0, l = elm.children.length; i < l; i++) {
                this.collectSelectors(elm.children[i]);
            }
        }
    }
}

function removeUnusedStyles(doc, diagnostics) {
    const styleElms = doc.head.querySelectorAll(`style[data-styles]`);
    if (styleElms.length > 0) {
        const usedSelectors = new UsedSelectors(doc.body);
        for (let i = 0; i < styleElms.length; i++) {
            removeUnusedStyleText(usedSelectors, diagnostics, styleElms[i]);
        }
    }
}
function removeUnusedStyleText(usedSelectors, diagnostics, styleElm) {
    try {
        const cssAst = parseCss(styleElm.innerHTML);
        if (cssAst.stylesheet.diagnostics.length > 0) {
            diagnostics.push(...cssAst.stylesheet.diagnostics);
            return;
        }
        try {
            const stringify = new StringifyCss(usedSelectors);
            styleElm.innerHTML = stringify.compile(cssAst);
        }
        catch (e) {
            diagnostics.push({
                level: 'warn',
                type: 'css',
                header: 'CSS Stringify',
                messageText: e
            });
        }
    }
    catch (e) {
        diagnostics.push({
            level: 'warn',
            type: 'css',
            header: 'CSS Parse',
            messageText: e
        });
    }
}

function updateCanonicalLink(doc, href) {
    let canonicalLinkElm = doc.head.querySelector('link[rel="canonical"]');
    if (typeof href === 'string') {
        if (canonicalLinkElm == null) {
            canonicalLinkElm = doc.createElement('link');
            canonicalLinkElm.setAttribute('rel', 'canonical');
            doc.head.appendChild(canonicalLinkElm);
        }
        canonicalLinkElm.setAttribute('href', href);
    }
    else {
        if (canonicalLinkElm != null) {
            canonicalLinkElm.parentNode.removeChild(canonicalLinkElm);
        }
    }
}

function renderToString(html, userOpts) {
    const opts = normalizeHydrateOptions(userOpts);
    opts.serializeToHtml = true;
    return new Promise(resolve => {
        const results = generateHydrateResults(opts);
        if (results.diagnostics.length > 0) {
            resolve(results);
        }
        else if (typeof html === 'string') {
            try {
                opts.destroyWindow = true;
                opts.destroyDocument = true;
                const win = new MockWindow(html);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else if (isValidDocument(html)) {
            try {
                opts.destroyDocument = false;
                const win = patchDomImplementation(html, opts);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else {
            renderBuildError(results, `Invalid html or document. Must be either valid "html" string, or DOM "document".`);
            resolve(results);
        }
    });
}
function hydrateDocument(doc, userOpts) {
    const opts = normalizeHydrateOptions(userOpts);
    opts.serializeToHtml = false;
    return new Promise(resolve => {
        const results = generateHydrateResults(opts);
        if (results.diagnostics.length > 0) {
            resolve(results);
        }
        else if (typeof doc === 'string') {
            try {
                opts.destroyWindow = true;
                opts.destroyDocument = true;
                const win = new MockWindow(doc);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else if (isValidDocument(doc)) {
            try {
                opts.destroyDocument = false;
                const win = patchDomImplementation(doc, opts);
                render(win, opts, results, resolve);
            }
            catch (e) {
                renderCatchError(results, e);
                resolve(results);
            }
        }
        else {
            renderBuildError(results, `Invalid html or document. Must be either valid "html" string, or DOM "document".`);
            resolve(results);
        }
    });
}
function isValidDocument(doc) {
    return doc != null &&
        doc.nodeType === 9 &&
        doc.documentElement != null &&
        doc.documentElement.nodeType === 1 &&
        doc.body != null &&
        doc.body.nodeType === 1;
}
function render(win, opts, results, resolve) {
    if (!process.__stencilErrors) {
        process.__stencilErrors = true;
        process.on('unhandledRejection', e => {
            console.log('unhandledRejection', e);
        });
    }
    initializeWindow(win, opts, results);
    if (typeof opts.beforeHydrate === 'function') {
        try {
            const rtn = opts.beforeHydrate(win.document);
            if (rtn != null && typeof rtn.then === 'function') {
                rtn.then(() => {
                    hydrateFactory(win, opts, results, afterHydrate, resolve);
                });
            }
            else {
                hydrateFactory(win, opts, results, afterHydrate, resolve);
            }
        }
        catch (e) {
            renderCatchError(results, e);
            finalizeHydrate(win, opts, results, resolve);
        }
    }
    else {
        hydrateFactory(win, opts, results, afterHydrate, resolve);
    }
}
function afterHydrate(win, opts, results, resolve) {
    if (typeof opts.afterHydrate === 'function') {
        try {
            const rtn = opts.afterHydrate(win.document);
            if (rtn != null && typeof rtn.then === 'function') {
                rtn.then(() => {
                    finalizeHydrate(win, opts, results, resolve);
                });
            }
            else {
                finalizeHydrate(win, opts, results, resolve);
            }
        }
        catch (e) {
            renderCatchError(results, e);
            finalizeHydrate(win, opts, results, resolve);
        }
    }
    else {
        finalizeHydrate(win, opts, results, resolve);
    }
}
function finalizeHydrate(win, opts, results, resolve) {
    try {
        inspectElement(results, win.document.documentElement, 0);
        if (opts.removeUnusedStyles !== false) {
            try {
                removeUnusedStyles(win.document, results.diagnostics);
            }
            catch (e) {
                renderCatchError(results, e);
            }
        }
        if (typeof opts.title === 'string') {
            try {
                win.document.title = opts.title;
            }
            catch (e) {
                renderCatchError(results, e);
            }
        }
        results.title = win.document.title;
        if (opts.removeScripts) {
            removeScripts(win.document.documentElement);
        }
        try {
            updateCanonicalLink(win.document, opts.canonicalUrl);
        }
        catch (e) {
            renderCatchError(results, e);
        }
        try {
            relocateMetaCharset(win.document);
        }
        catch (e) { }
        try {
            const metaStatus = win.document.head.querySelector('meta[http-equiv="status"]');
            if (metaStatus != null) {
                const content = metaStatus.getAttribute('content');
                if (content != null) {
                    results.httpStatus = parseInt(content, 10);
                }
            }
        }
        catch (e) { }
        if (opts.clientHydrateAnnotations) {
            win.document.documentElement.classList.add('hydrated');
        }
        if (opts.serializeToHtml) {
            results.html = serializeNodeToHtml(win.document, {
                approximateLineWidth: opts.approximateLineWidth,
                outerHtml: false,
                prettyHtml: opts.prettyHtml,
                removeAttributeQuotes: opts.removeAttributeQuotes,
                removeBooleanAttributeQuotes: opts.removeBooleanAttributeQuotes,
                removeEmptyAttributes: opts.removeEmptyAttributes,
                removeHtmlComments: opts.removeHtmlComments,
                serializeShadowRoot: false,
            });
        }
    }
    catch (e) {
        renderCatchError(results, e);
    }
    if (opts.destroyWindow) {
        try {
            if (!opts.destroyDocument) {
                const doc = win.document;
                win.document = null;
                doc.defaultView = null;
            }
            win.close();
        }
        catch (e) {
            renderCatchError(results, e);
        }
    }
    resolve(results);
}
function removeScripts(elm) {
    const children = elm.children;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        removeScripts(child);
        if (child.nodeName === 'SCRIPT') {
            child.remove();
        }
        else if (child.nodeName === 'LINK' && child.getAttribute('rel') === 'modulepreload') {
            child.remove();
        }
    }
}

exports.hydrateDocument = hydrateDocument;
exports.renderToString = renderToString;
