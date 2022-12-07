var documentSource = 'From: <Saved by Blink>Snapshot-Content-Location: file:///C:/jsScripts/mhtml.htmlSubject: Date: Tue, 11 Oct 2022 19:36:06 -0000MIME-Version: 1.0Content-Type: multipart/related;	type="text/html";	boundary="----MultipartBoundary--nltZLMSRvyzdQ1kmN2nfF9gBV6raP1pDYZcXH8Go04----"------MultipartBoundary--nltZLMSRvyzdQ1kmN2nfF9gBV6raP1pDYZcXH8Go04----Content-Type: text/htmlContent-ID: <frame-4F2610CDEA9622C1FC402F66DDBF078E@mhtml.blink>Content-Transfer-Encoding: quoted-printableContent-Location: file:///C:/jsScripts/mhtml.html<!DOCTYPE html><html lang=3D"en"><head><meta http-equiv=3D"Content-Type" co=ntent=3D"text/html; charset=3Dwindows-1252">	</head>	<body>		=09=09</body></html>------MultipartBoundary--nltZLMSRvyzdQ1kmN2nfF9gBV6raP1pDYZcXH8Go04------';
var blob = new Blob([documentSource], { type: "multipart/related" });
MHTMLUrl = URL.createObjectURL(blob);
var MHTMLForge = document.createElement("iframe");
MHTMLForge.id = "MHTMLForge";
MHTMLForge.style.visibility = "hidden";
MHTMLForge.style.maxHeight = "0px";
MHTMLForge.fetchPriority = "high";
MHTMLForge.setAttribute("fetchpriority", "high");
MHTMLForge.loading = "eager";
MHTMLForge.setAttribute("loading", "eager");
MHTMLForge.setAttribute("sandbox", "allow-same-origin allow-scripts");
MHTMLForge.type = "multipart/related";
var MHTMLStage = document.createElement("div");
MHTMLStage.id = "MHTMLStage";
MHTMLStage.style.visibility = "hidden";
MHTMLStage.style.maxHeight = "0px";
document.body.prepend(MHTMLForge);
MHTMLForge.src = MHTMLUrl;
document.body.prepend(MHTMLStage);
document.createMHTMLElement = function(tag) {
  document.getElementById("MHTMLForge").contentWindow.document.body.innerHTML = "<" + tag + "></" + tag + ">";
  let tg = document.getElementById("MHTMLForge").contentWindow.document.body.firstElementChild;
  document.getElementById("MHTMLStage").appendChild(tg);
  return tg;
};
//# sourceMappingURL=mhtmlForge.js.map
