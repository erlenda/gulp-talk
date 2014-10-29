(function (namespace, undefined) {
  namespace.hello = function () {
    console.log('Hello world');
  };
    
  namespace.goodbye = function () {
      console.log('Goodbye');
  };

  namespace.init = function () {
    // remove loader
    namespace.getElementByClass('loader').innerHTML = '';
  };

  namespace.getElementByClass = function (matchClass) {
    // vanilla way of get element by class -function
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
      if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
        return elems[i];
      }
    }
    return undefined;
  }; 
  
  namespace.init();

})(window.gt = window.gt || {});