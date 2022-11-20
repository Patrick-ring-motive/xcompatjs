var wandow = window || self || exports;
function doSoon(fun) {
  return setTimeout(fun, 10);
}
wandow.setImpendingCallback = doSoon;
wandow.requestAnimationFrame = wandow.requestAnimationFrame || wandow.mozRequestAnimationFrame || wandow.webkitRequestAnimationFrame || wandow.msRequestAnimationFrame;
wandow.requestIdleCallback || wandow.setImpendingCallback;
wandow.mozRequestAnimationFrame = wandow.requestAnimationFrame;
wandow.webkitRequestAnimationFrame = wandow.requestAnimationFrame;
wandow.msRequestAnimationFrame = wandow.requestAnimationFrame;
wandow.cancelAnimationFrame = wandow.cancelAnimationFrame || wandow.mozCancelAnimationFrame || wandow.cancelIdleCallback || wandow.clearTimeout;
wandow.mozCancelAnimationFrame = wandow.cancelAnimationFrame;
wandow.requestIdleCallback = wandow.requestIdleCallback || wandow.requestAnimationFrame;
wandow.cancelIdleCallback = wandow.cancelIdleCallback || wandow.cancelAnimationFrame || wandow.clearTimeout;
//# sourceMappingURL=IdleCallback.js.map
