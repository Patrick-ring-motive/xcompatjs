Node.prototype.appendChildren = function() {
  var append_arguments_length = arguments.length;
  for (var append_i = 0; append_i < append_arguments_length; append_i++) {
    try {
      var append_element = arguments[append_i];
      if (typeof append_element === "string") {
        this.appendChild(document.createTextNode(append_element));
      } else {
        this.appendChild(append_element);
      }
    } catch (e) {
      continue;
    }
  }
};
Node.prototype.prependChild = function() {
  this.insertBefore(argument[0], this.firstChild);
};
Node.prototype.prependChildren = function() {
  var prepend_arguments_length = arguments.length;
  for (var prepend_i = 0; prepend_i < prepend_arguments_length; prepend_i++) {
    try {
      var prepend_element = arguments[prepend_i];
      if (typeof prepend_element === "string") {
        this.prependChild(document.createTextNode(prepend_element));
      } else {
        this.prependChild(prepend_element);
      }
    } catch (e) {
      continue;
    }
  }
};
Node.prototype.append = Node.prototype.append || Node.prototype.appendChildren;
Node.prototype.prepend = Node.prototype.prepend || Node.prototype.prependChildren;
//# sourceMappingURL=append.js.map
