# ActiviPy

## Implementation details

* Application name: ActiviPy
* Version: 0.2
* Platform name: Python library
* License: Apache 2.0
* Main URL: http://activipy.readthedocs.io/en/latest/
* Public: public
* Activity Streams 2.0 URL: http://activipy.readthedocs.io/en/latest/ (it's an as2 library)
* Application role: both
* Interface to other applications: library

## Core classes

It wasn't clear whether or not all these properties would count as
implemented or not given implementation report guidelines.  ActiviPy
has the ability, through its json-ld support, to tell which ones are
valid (either through AS2 or an extension in the context) and which
are bogus by expanding then compacting the document.

Thus I think all the properties are "implemented", and not simply
passed through without any form of understanding.

### Object

Implemented? : y

* attachment: y
* attributedTo: y
* audience: y
* bcc: y
* bto: y
* cc: y
* content: y
* contentMap: y
* context: y
* duration: y
* endTime: y
* generator: y
* icon: y
* image: y
* inReplyTo: y
* location: y
* mediaType: y
* name: y
* nameMap: y
* preview: y
* published: y
* replies: y
* startTime: y
* summary: y
* summaryMap: y
* tag: y
* to: y
* updated: y
* url: y

### Link

Implemented? : y

* height: y
* hreflang: y
* mediaType: y
* name: y
* rel: y
* width: y

### Actor

Implemented? : y (note that we implement this, despite it being dropped from the AS2 standard, because it helps with method resolution on the type heirarchy)

### Activity

Implemented? : y

* actor: y
* object: y
* target: y
* origin: y
* result: y
* instrument: y

### IntransitiveActivity

Implemented? : y

### Collection

Implemented? : y

* items: y
* totalItems: y
* first: y
* last: y
* current: y

### OrderedCollection

Implemented? : y

### CollectionPage

Implemented? : y

* partOf: y
* next: y
* prev: y

### OrderedCollectionPage

Implemented? : y

## Extended classes

### Accept

Implemented? : y

### Add

Implemented? : y

### Announce

Implemented? : y

### Arrive

Implemented? : y

### Block

Implemented? : y

### Create

Implemented? : y

### Delete

Implemented? : y

### Dislike

Implemented? : y

### Flag

Implemented? : y

### Follow

Implemented? : y

### Ignore

Implemented? : y

### Invite

Implemented? : y

### Join

Implemented? : y

### Leave

Implemented? : y

### Like

Implemented? : y

### Listen

Implemented? : y

### Move

Implemented? : y

### Offer

Implemented? : y

### Question

Implemented? : y

* oneOf: y
* anyOf: y
* closed: y

### Read

Implemented? : y

### Reject

Implemented? : y

### Remove

Implemented? : y

### TentativeAccept

Implemented? : y

### TentativeReject

Implemented? : y

### Travel

Implemented? : y

### Undo

Implemented? : y

### Update

Implemented? : y

### View

Implemented? : y

### Application

Implemented? : y

### Group

Implemented? : y

### Organization

Implemented? : y

### Person

Implemented? : y

### Service

Implemented? : y

### Article

Implemented? : y

### Audio

Implemented? : y

### Document

Implemented? : y

### Event

Implemented? : y

### Image

Implemented? : y

### Note

Implemented? : y

### Page

Implemented? : y

### Place

Implemented? : y

* accuracy: y
* altitude: y
* latitude: y
* longitude: y
* radius: y
* units: y

### Profile

Implemented? : y

* describes: y

### Relationship

Implemented? : y

* subject: y
* object: y
* relationship: y

### Tombstone

Implemented? : y

* formerType: y
* deleted: y

### Video

Implemented? : y

### Tombstone

Implemented? : y

## Extensions

ActiviPy supports extensions by allowing to add new objects to an
environment which is aware of all available types and by extending the
json-ld context.
