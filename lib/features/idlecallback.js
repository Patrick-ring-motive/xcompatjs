
var wandow = window || self || this;

wandow.clearStub = function() { return; };


/*
This function is designed to execute a provided function as soon as possible, depending on the environment it is running in. It checks for the presence of the setTimeout and queueMicrotask functions, which are commonly used to schedule a function to be executed at a later time. If either of those functions is available, the provided function is passed to it with a 10ms delay. Otherwise, the function is executed immediately.
*/
function doSoon(fun) {

  if (wandow.setTimeout) {
    return wandow.setTimeout(fun, 10);
  } else if (wandow.queueMicrotask) {
    return wandow.queueMicrotask(fun);
  } else {
    return fun();
  }

}



/*
This function is similar to the previous one, but it schedules the provided function to be executed with a delay of 0ms. This means that the function will be executed as soon as possible, but it may not be executed immediately if the JavaScript runtime is currently busy with other tasks. If the setTimeout function is not available, the provided function is executed immediately.
*/
function doNow(fun) {

  if (wandow.setTimeout) {
    return wandow.setTimeout(fun, 0);
  } else {
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
wandow.oRequestAnimationFrame = wandow.requestAnimationFrame;

wandow.cancelAnimationFrame = wandow.cancelAnimationFrame || wandow.mozCancelAnimationFrame || wandow.cancelIdleCallback || wandow.clearTimeout || wandow.clearStub;

wandow.mozCancelAnimationFrame = wandow.cancelAnimationFrame;
wandow.webkitCancelAnimationFrame = wandow.cancelAnimationFrame;
wandow.msCancelAnimationFrame = wandow.cancelAnimationFrame;
wandow.oCancelAnimationFrame = wandow.cancelAnimationFrame;

wandow.requestIdleCallback = wandow.requestIdleCallback || wandow.requestAnimationFrame;

wandow.cancelIdleCallback = wandow.cancelIdleCallback || wandow.cancelAnimationFrame || wandow.clearTimeout || wandow.clearStub;

wandow.queueMicrotask = wandow.queueMicrotask || doNow;

/*
This code sets the setImpendingCallback property of the window object to the doSoon function defined earlier. It then defines a requestAnimationFrame function that will be used to schedule a function to be executed at the next available animation frame. This function is set to use the requestAnimationFrame function if it is available, or the queueMicrotask function if that is available, and fall back to the setImpendingCallback function if neither of those are available.

The code then sets the mozRequestAnimationFrame, webkitRequestAnimationFrame, and msRequestAnimationFrame properties of the window object to the requestAnimationFrame function.

It also defines a cancelAnimationFrame function that will be used to cancel a previously scheduled animation frame callback. This function is set to use the cancelAnimationFrame function if it is available, or the cancelIdleCallback function if that is available, and fall back to the clearTimeout function if neither of those are available. The mozCancelAnimationFrame property is then set to the cancelAnimationFrame function.

The code then sets the requestIdleCallback property of the window object to the requestAnimationFrame function if requestIdleCallback is not available, and the cancelIdleCallback property to the cancelAnimationFrame function if cancelIdleCallback is not available, and fall back to the clearTimeout function if neither of those are available.

Finally, the queueMicrotask property is set to the doNow function if queueMicrotask is not available.
*/

/*
requestAnimationFrame is a function that can be used to schedule a function to be executed at the next available animation frame. This is commonly used in JavaScript to create smooth, synchronized animations. The mozRequestAnimationFrame, webkitRequestAnimationFrame, and msRequestAnimationFrame functions are similar to requestAnimationFrame, but are specific to the Mozilla, WebKit, and Microsoft web browsers, respectively. These functions are often used to provide compatibility with different browsers.

*/

















