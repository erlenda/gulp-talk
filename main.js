(function (ns, undefined) {
  ns.hello = function () {
    console.log('Hello world');
  };

  ns.goodbye = function () {
    console.log('Goodbye');
  };

  ns.hide = function (selector) {
    var elems = Sizzle(selector);
    elems[0].classList.add("hidden");
  };

  ns.bindKeys = function () {
    Mousetrap.bind(['left'], function(e) {
      console.log('left');
      return false;
    });
    
    Mousetrap.bind(['right'], function(e) {
      console.log('right');
      return false;
    });
  };

  ns.hide('.loader');

})(window.gt = window.gt || {});

