
var wandow = window || self || this;

function doSoon(fun){

return setTimeout(fun,10);

}

wandow.setImpendingCallback = doSoon;
