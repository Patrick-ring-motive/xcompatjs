/* <![CDATA[/* */

var documentSource = '<?xml version="1.0" encoding="UTF-8"?><body></body>';
var blob = new Blob([documentSource], { type: "application/xml" });
XMLUrl = URL.createObjectURL(blob);

var XMLLoader = document.createElement('link');
XMLLoader.crossorigin = "anonymous";
XMLLoader.rel = 'preload';
XMLLoader.href = XMLUrl;
XMLLoader.as = 'document';
XMLLoader.type = "application/xml";
XMLLoader.fetchPriority = 'high';
XMLLoader.setAttribute('fetchpriority', 'high');
XMLLoader.loading = 'eager';
document.head.appendChild(XMLLoader);

var XMLForge = document.createElement('iframe');
XMLForge.id = 'XMLForge';
XMLForge.style.visibility = 'hidden';
XMLForge.style.maxHeight = '0px';
XMLForge.fetchPriority = 'high';
XMLForge.setAttribute('fetchpriority', 'high');
XMLForge.loading = 'eager';
XMLForge.setAttribute('loading', 'eager');
XMLForge.src = XMLUrl;

var XMLStage = document.createElement('div');
XMLStage.id = 'XMLStage';
XMLStage.style.visibility = 'hidden';
XMLStage.style.maxHeight = '0px';

document.body.prepend(XMLForge);
document.body.prepend(XMLStage);


document.createXMLElement = function(tag) {
  let xf = document.getElementById('XMLForge');
  let xfd = xf.contentDocument || xf.contentWindow.document;
  xfd.body.innerHTML = '<' + tag + '></' + tag + '>';
  let tg = xfd.body.firstElementChild;

  document.getElementById('XMLStage').appendChild(tg);
  return tg;

}

/* ]]>/* */