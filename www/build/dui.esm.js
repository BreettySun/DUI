import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-B30K5aI-.js';
export { s as setNonce } from './index-B30K5aI-.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.31.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["d-button",[[1,"d-button",{"type":[1],"size":[1],"disabled":[4],"round":[4],"customClass":[1,"custom-class"],"customStyle":[16,"custom-style"]}]]],["d-carousel",[[1,"d-carousel",{"autoplay":[4],"delay":[2],"indicatorPosition":[1,"indicator-position"],"currentIndex":[32],"itemsCount":[32],"nextSlide":[64],"prevSlide":[64],"goToSlide":[64]},null,{"autoplay":["autoplayChanged"],"delay":["delayChanged"]}]]],["d-divider",[[1,"d-divider",{"direction":[1],"color":[1],"size":[1],"lineType":[1,"line-type"],"margin":[1]}]]],["d-drawer",[[1,"d-drawer",{"visible":[1040,"show"],"width":[1],"showHeader":[1540,"show-header"],"header":[1],"maskClosable":[1540,"mask-closable"],"placement":[1537],"open":[64],"close":[64]},null,{"placement":["validateName"]}]]],["d-icon",[[1,"d-icon",{"name":[1],"size":[1],"color":[1],"rotate":[2],"spin":[4]}]]]], options);
});
//# sourceMappingURL=dui.esm.js.map

//# sourceMappingURL=dui.esm.js.map