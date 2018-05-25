// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var elements = [];
  node = node || document.body;

  if(node.classList && node.classList.contains(className)) {
    elements.push(node);
  }

  var children = node.childNodes;

  if(!children)
  {
    return elements;
  } else {
    for(var i=0; i<children.length; i++) {
      elements = elements.concat(getElementsByClassName(className, children[i]));
    }
    return elements;
  }
};
