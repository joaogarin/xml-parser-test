var fs        = require('fs')
var XmlStream = require('xml-stream') ;
var stream=fs.createReadStream('feed_smaller.xml');
var xml = new XmlStream(stream);
xml.preserve('title', true);
//xml.collect('subitem');
xml.on('endElement: title', function(item) {
  console.log(item);
});
