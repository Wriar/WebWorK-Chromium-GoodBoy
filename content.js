(() => {
  const TARGET_CLASSES = "progress-bar correct-progress set-id-tooltip";

  const PERFECT_REGEX = /\bperfect\b/gi;

  function replacePerfectInTextNodes(rootEl) {
    if (!rootEl) return false;

    if (rootEl.textContent && !/perfect/i.test(rootEl.textContent)) {
      return false;
    }

    let changed = false;
    const walker = document.createTreeWalker(
      rootEl,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          //only consider what needs to be found
          return /perfect/i.test(node.nodeValue)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach(node => {
      const before = node.nodeValue;
      const after = before.replace(PERFECT_REGEX, " good boy! "); //here
      if (after !== before) {
        node.nodeValue = after;
        changed = true;
      }
    });

    return changed;
  }

  function getTargetElement() {
    return document.getElementsByClassName(TARGET_CLASSES)[0] || null;
  }

  function applyAndObserve(target) {
    //pass 1
    replacePerfectInTextNodes(target);

    //observe changes in status text via mutations
    const mo = new MutationObserver(mutations => {
      for (const m of mutations) {
        if (m.type === "childList" || m.type === "characterData" || m.type === "subtree") {
          replacePerfectInTextNodes(target);
        }
      }
    });

    mo.observe(target, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  function init() {
    const existing = getTargetElement();
    if (existing) {
      applyAndObserve(existing);
      return;
    }

    //add element to DOM if needed
    const domObserver = new MutationObserver(() => {
      const el = getTargetElement();
      if (el) {
        domObserver.disconnect();
        applyAndObserve(el);
      }
    });

    domObserver.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
