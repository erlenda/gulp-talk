(function (ns, undefined) {
  ns.hello = function () {
    console.log('Hello world');
  };

  ns.goodbye = function () {
    console.log('Goodbye');
  };

  ns.hide = function (selector) {
    var elems = Sizzle(selector);
    console.log(elems.length);
    elems.forEach(function (elem) {
      elem.classList.add("hidden");
    });
  };

  ns.show = function (selector) {
    var elems = Sizzle(selector);
    console.log(elems.length);
    elems.forEach(function (elem) {
      elem.classList.remove("hidden");
    });
  };

  ns.bindKeys = function () {
    Mousetrap.bind(['left'], function(e) {
      console.log('left');
      ns.prevSlide();
      return false;
    });

    Mousetrap.bind(['right'], function(e) {
      console.log('right');
      ns.nextSlide();
      return false;
    });
  };

  ns.nextSlide = function () {
    var request = window.superagent;
    request
      .get('http://localhost:8000/next/from/' + ns.currentSlide)
      .end(function(res){
        ns.currentSlide = JSON.parse(res.text); 
        ns.reveal();
    });
  };

  ns.prevSlide = function () {
  var request = window.superagent;
    request
      .get('http://localhost:8000/prev/from/' + ns.currentSlide)
      .end(function(res){
        ns.currentSlide = JSON.parse(res.text);
        ns.reveal();
    });
  };

  ns.reveal = function () {
    console.log(ns.currentSlide);
    ns.hide('section');
    Sizzle('section')[ns.currentSlide].classList.remove("hidden");
  };

  ns.currentSlide = 0;
  ns.hide('.loader');
  ns.hide('section');
  ns.bindKeys();

})(window.gt = window.gt || {});

