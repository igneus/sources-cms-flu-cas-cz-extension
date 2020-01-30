'use strict';

var findLinkByImage = function (src) {
  return document
    .evaluate("//a[./img/@src = '"+src+"']", document, null, XPathResult.ANY_TYPE, null )
    .iterateNext();
};

var previous = function () {
  document.location.href =
    findLinkByImage('style/page-prev.jpg').href;
};

var next = function () {
  document.location.href =
    findLinkByImage('style/page-next.jpg').href;
};

// save precious space at the top
document.getElementById('logo').style.display = 'none';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'ArrowLeft') {
    previous();
  } else if (keyName === 'ArrowRight') {
    next();
  }
}, false);
