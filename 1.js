var http = require('http'), fs = require('fs'),
  Canvas = require('canvas');

http.createServer(function (req, res) {
  fs.readFile(__dirname + '/image.jpg', function(err, data) {
    if (err) throw err;
    var img = new Canvas.Image; // Create a new Image
    img.src = data;

    // Initialiaze a new Canvas with the same dimensions
    // as the image, and get a 2D drawing context for it.
    var canvas = new Canvas(img.width, img.height);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);

    res.write('<html><body>');
    res.write('<img src="' + canvas.toDataURL() + '" />');
    res.write('</body></html>');
    res.end();
  });

}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');