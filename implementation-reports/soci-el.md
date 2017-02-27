# soci-el

## Implementation details

* Application name: soci-el
* Version: 0.1-pre
* Platform name: Emacs
* License: GPLv3+
* Main URL: https://gitlab.com/dustyweb/soci-el
* Public: public
* Activity Streams 2.0 URL: https://gitlab.com/dustyweb/soci-el/blob/master/soci.el
* Application role: both
* Interface to other applications: client (with minimal library)

## Core classes

### Object

Implemented? : y

* attachment: n
* attributedTo: n
* audience: n
* bcc: y
* bto: y
* cc: y
* content: y
* contentMap: n
* context: y
* duration: n
* endTime: n
* generator: n
* icon: n
* image: n
* inReplyTo: n
* location: n
* mediaType: n
* name: y
* nameMap: n
* preview: n
* published: n
* replies: n
* startTime: n
* summary: n
* summaryMap: n
* tag: n
* to: y
* updated: n
* url: y

### Link

Implemented? : y

* height: n
* hreflang: n
* href: y
* mediaType: n
* name: y
* rel: n
* width: n

### Actor

Implemented? : y

### Activity

Implemented? : y

* actor: y
* object: y
* target: n
* origin: n
* result: n
* instrument: n

### IntransitiveActivity

Implemented? : y

### Collection

Implemented? : y

* items: y
* totalItems: n
* first: y
* last: y
* current: n

### OrderedCollection

Implemented? : y

* orderedItems: y

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

* oneOf: n
* anyOf: n
* closed: n

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

* accuracy: n
* altitude: n
* latitude: n
* longitude: n
* radius: n
* units: n

### Profile

Implemented? : y

* describes: n

### Relationship

Implemented? : y

* subject: n
* object: n
* relationship: n

### Tombstone

Implemented? : y

* formerType: n
* deleted: y

### Video

Implemented? : y

### Tombstone

Implemented? : y

## Extensions

soci-el permits extensions and uses ActivityPub's vocabulary extensions.

