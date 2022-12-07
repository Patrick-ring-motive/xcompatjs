var forges = document.querySelectorAll("script[xmlForgeType]");
for (let i = 0; i < forges.length; i++) {
  let txtID = forges[i].getAttribute("xmlForgeType").toUpperCase();
  if (!document.getElementById(txtID)) {
    initXMLPlus(txtID);
  }
}
function initXMLPlus(xmlType) {
  let xmlTypeSmall = xmlType.toLowerCase();
  var documentSourceXML = '<?xml version="1.0" encoding="UTF-8"?><body></body>';
  var blob = new Blob([documentSourceXML], { type: "application/" + xmlTypeSmall + "+xml" });
  XMLPlusUrl = URL.createObjectURL(blob);
  var XMLPlusForge = document.createElement("iframe");
  XMLPlusForge.id = xmlType + "Forge";
  XMLPlusForge.style.visibility = "hidden";
  XMLPlusForge.style.maxHeight = "0px";
  XMLPlusForge.fetchPriority = "high";
  XMLPlusForge.setAttribute("fetchpriority", "high");
  XMLPlusForge.loading = "eager";
  XMLPlusForge.setAttribute("loading", "eager");
  XMLPlusForge.setAttribute("sandbox", "allow-same-origin allow-scripts");
  var XMLPlusStage = document.createElement("div");
  XMLPlusStage.id = xmlType + "Stage";
  XMLPlusStage.style.visibility = "hidden";
  XMLPlusStage.style.maxHeight = "0px";
  document.body.prepend(XMLPlusForge);
  XMLPlusForge.src = XMLPlusUrl;
  document.body.prepend(XMLPlusStage);
  var xup = xmlType.toUpperCase();
  eval(`document.create` + xup + `Element=function(tag){
      
 let xf = document.getElementById('` + xmlType + `Forge');
 let xfd = xf.contentDocument || xf.contentWindow.document;
 xfd.getElementsByTagName('body')[0].innerHTML='<'+tag+'></'+tag+'>';
      let tg = xfd.getElementsByTagName('body')[0].firstElementChild;
      
        document.getElementById('` + xup + `Stage').appendChild(tg);
        return tg;
        
      }

	 `);
}
//# sourceMappingURL=xml+Forge.js.map
