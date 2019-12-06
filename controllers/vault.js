var request = require('request');

exports.GET = function(req, res) {
  var data = "<body style='background-color: black;'><h1 style='color:white;font-size: 5.3em;text-align: center;font-family: &quot;ibm-plex-mono&quot;,&quot;Menlo&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,Courier,monospace !important;'>You are close!</h1></body>";
  request(data, function(err, response, body){
   // res.send(data);
  });
};
