/* <![CDATA[/* */
var MATHForge = document.createElement('div');
MATHForge.style.visibility = 'hidden';
MATHForge.style.maxHeight = '0px';
MATHForge.innerHTML = '<math id="MATHForge" style="visibility: hidden; max-height: 0px;"></math>';

var MATHStage = document.createElement('div');
MATHStage.id = 'MATHStage';
MATHStage.style.visibility = 'hidden';
MATHStage.style.maxHeight = '0px';

document.body.appendChild(MATHForge);
document.body.appendChild(MATHStage);

document.createMATHElement = function(tag) {
  document.getElementById('MATHForge').innerHTML = '<' + tag + '></' + tag + '>';
  let tg = document.getElementById('MATHForge').firstElementChild;
  document.getElementById('MATHStage').appendChild(tg);
  return tg;
}
 /* ]]>/* */
