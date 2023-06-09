function removeBanner() {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const addedNodes = mutation.addedNodes;
        for (let node of addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const modals = node.querySelectorAll('.modal_show__b7uvj');
            for (let m of modals) {
              m.remove();
              console.log("Annoying thing removed");
            }
          }
        }
      }
    }
  });

  observer.observe(targetNode, config);
}


window.addEventListener('load', () => {
  removeBanner();
});


