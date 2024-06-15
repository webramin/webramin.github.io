(function() {
  var persian = {
    0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹'
  };

  function replaceNumbers(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.data = node.data.replace(/\d/g, (match) => persian[match]);
    } else {
      if (node.classList && node.classList.contains('ir')) {
        for (var i = 0; i < node.childNodes.length; i++) {
          replaceNumbers(node.childNodes[i]);
        }
      }
    }
  }

  var irElements = document.querySelectorAll('.ir');
  for (var i = 0; i < irElements.length; i++) {
    replaceNumbers(irElements[i]);
  }
})();
