// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj==='number' || typeof obj==='boolean') {
    return obj.toString();
  } else if(obj===null) {
    return 'null';
  } else if(typeof obj==='string') {
    return '"' + obj + '"';
  } else if(typeof obj==='function' || obj === undefined) {
    return undefined;
  } else if(Array.isArray(obj)) {
      var list = obj.map(x=>stringifyJSON(x));
      return '[' + list + ']';
  } else if(typeof obj==='object') {
      var objList = [];
      for(var key in obj) {
        if(obj[key]===undefined || typeof obj[key]==='function') continue;
        objList.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + objList.join() + '}';
  }

};
