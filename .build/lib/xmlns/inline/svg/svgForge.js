var SVGForge = document.createElement("div");
SVGForge.style.visibility = "hidden";
SVGForge.style.maxHeight = "0px";
SVGForge.innerHTML = '<svg id="SVGForge" style="visibility: hidden; max-height: 0px;"></svg>';
var SVGStage = document.createElement("div");
SVGStage.id = "SVGStage";
SVGStage.style.visibility = "hidden";
SVGStage.style.maxHeight = "0px";
document.body.appendChild(SVGForge);
document.body.appendChild(SVGStage);
document.createSVGElement = function(tag) {
  document.getElementById("SVGForge").innerHTML = "<" + tag + "></" + tag + ">";
  let tg = document.getElementById("SVGForge").firstElementChild;
  document.getElementById("SVGStage").appendChild(tg);
  return tg;
};
//# sourceMappingURL=svgForge.js.map
