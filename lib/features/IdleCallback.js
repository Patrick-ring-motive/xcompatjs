
var wandow = window || self || this;

wandow.clearStub = function (){return;};

function doSoon(fun){
  
if(wandow.setTimeout){
return wandow.setTimeout(fun,0);
}else if (wandow.queueMicrotask){
return wandow.queueMicrotask(fun);
}else{
return fun();
}

}

wandow.setImpendingCallback = doSoon;

wandow.requestAnimationFrame = wandow.requestAnimationFrame || wandow.mozRequestAnimationFrame ||
wandow.webkitRequestAnimationFrame || wandow.msRequestAnimationFrame
wandow.requestIdleCallback || wandow.setImpendingCallback || wandow.queueMicrotask;

wandow.mozRequestAnimationFrame = wandow.requestAnimationFrame;
wandow.webkitRequestAnimationFrame = wandow.requestAnimationFrame;
wandow.msRequestAnimationFrame = wandow.requestAnimationFrame;

wandow.cancelAnimationFrame = wandow.cancelAnimationFrame || wandow.mozCancelAnimationFrame || wandow.cancelIdleCallback || wandow.clearTimeout || wandow.clearStub;

wandow.mozCancelAnimationFrame = wandow.cancelAnimationFrame;

wandow.requestIdleCallback = wandow.requestIdleCallback || wandow.requestAnimationFrame;

wandow.cancelIdleCallback = wandow.cancelIdleCallback || wandow.cancelAnimationFrame || wandow.clearTimeout || wandow.clearStub;

wandow.queueMicrotask = wandow.queueMicrotask || wandow.requestIdleCallback;























