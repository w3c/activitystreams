# ActivityStreams 2.0 Terms

This repo contains namespace documents for ActivityStreams 2.0, a specification of the [W3C Social Web WG](https://w3.org/wiki/Socialwg).

* [ActivityStreams 2.0 Core](https://www.w3.org/TR/activitystreams-core) (CR)
* [ActivityStreams 2.0 Vocabulary](https://www.w3.org/TR/activitystreams-vocabulary) (CR)

## Extensions

Terms for extensions which are considered stable are also to be added to this namespace. How to do this will be announced in due course.

## Generating the HTML

The file `gen.php` reads directly from the JSON-LD context (`https://www.w3.org/ns/activitystreams.jsonld`) and prints all of the terms in the following format:

```
<li><a href="https://www.w3.org/TR/activitystreams-vocabulary#dfn-{{term}}?>">{{term}}</a> (<code>{{datatype}}</code>)</li>
```

This can be copypasted into `respec.html`, but needs to be organised by hand, ie:

* Divide terms into the relevant sections (Classes, Properties, Extensions)
* Check the generated fragments are correct
* Update the URLs for extension terms which are not in the AS2 spec
* Reorder if desired

`respec.html` is the ReSpec version of the document, which generates the metadata, status, editor, last updated date, etc. Update this first, and then open it in a browser and "Save Snapshop" to create the static HTML `index.html`.