// extract-as2-examples.js

// Extract examples from the AS2 core and vocabulary documents and write them
// out as .json files.

// extract-as2-examples.js: https://github.com/w3c-social/activitystreams-test-documents

// Copyright © 2016 World Wide Web Consortium, (Massachusetts Institute of
// Technology, European Research Consortium for Informatics and Mathematics,
// Keio University, Beihang). All Rights Reserved. This work is distributed
// under the W3C® Software License [1] in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

// [1] http://www.w3.org/Consortium/Legal/copyright-software

var fs = require("fs");
var path = require("path");

var htmlparser = require("htmlparser2");

var filename = process.argv[2];
var basename = process.argv[3];

var contents = fs.readFileSync(filename, 'utf8');

var handler = new htmlparser.DomHandler(function (err, dom) {

  if (err) {
    console.error(err);
  } else {
    htmlparser.DomUtils.findAll(function(elem) {
      var id;
      var contents;
      if (htmlparser.DomUtils.isTag(elem) && elem.name == "div") {
        id = htmlparser.DomUtils.getAttributeValue(elem, "id");
        if (id && id.match(/ex\w+-jsonld/)) {
          contents = htmlparser.DomUtils.getText(elem);
          fs.writeFile(path.join("..", basename+"-"+id+".json"), contents, function(err) {
            if (err) {
              console.error(err);
            }
          });
        }
      }
    }, dom);
  }
});

var parser = new htmlparser.Parser(handler);
parser.write(contents);
parser.done();
