function appendChildren() {
  
  var append_arguments_length = arguments.length;
  
  for (var append_i = 0; append_i < append_arguments_length; append_i++) {
    try {
      
      var append_element = arguments[append_i];
      
      if (typeof append_element === "string") {

        this.appendChild(document.createTextNode(append_element));

      } else {

        this.appendChild(append_element);

      }

    } catch (e) { continue; }
  }

}

Node.prototype.append = Node.prototype.append || appendChildren;

