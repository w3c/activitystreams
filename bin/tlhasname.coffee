# tlhasname.coffee

# Check if the top-level object of a document has a name or nameMap property.

# Copyright © 2016 World Wide Web Consortium, (Massachusetts Institute of
# Technology, European Research Consortium for Informatics and Mathematics,
# Keio University, Beihang). All Rights Reserved. This work is distributed
# under the W3C® Software License [1] in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

# [1] http:#www.w3.org/Consortium/Legal/copyright-software

fs = require 'fs'

filename = process.argv[2]

contents = fs.readFileSync filename, 'utf8'

obj = JSON.parse contents

if obj.name? or obj.nameMap?
  console.log "#{filename} YES"
else
  console.log "#{filename} NO"
