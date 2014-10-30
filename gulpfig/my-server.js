exports.start = function (host, port) {
  var slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Hapi = require('hapi'),
      server = new Hapi.Server(host, port);
  
  server.route([{
    method: 'GET',
    path: '/prev/from/{slideNumber}',
    handler: function (request, reply) {
      var result = parseInt(request.params.slideNumber) - 1;
      console.log(slides);
      reply(result < 0 ? 0 : result);
    }
  },
  {
    method: 'GET',
    path: '/next/from/{slideNumber}',
    handler: function (request, reply) {
      var result = parseInt(request.params.slideNumber) + 1;
      console.log(slides);
      reply(result > slides.length - 1 ? slides.length - 1 : result);
    }
  }]);

  // start server
  server.start(function () {
    console.log('Server started at: ' + server.info.uri);
  });
};

// Stop server
exports.stop = function () {
  // server.stop();
  console.log('server stopped');
};
