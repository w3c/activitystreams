# Pubstrate

## Implementation details

* Application name: Pubstrate
* Version: 0.1.dev
* Platform name: Guile library and ActivityPub implementation
* License: GPLv3+
* Main URL: https://gitlab.com/dustyweb/pubstrate
* Public: public
* Activity Streams 2.0 URL: https://gitlab.com/dustyweb/pubstrate/blob/master/pubstrate/asobj.scm and https://gitlab.com/dustyweb/pubstrate/blob/master/pubstrate/vocab.scm
* Application role: both
* Interface to other applications: AS2 library, ActivityPub server implementation

## Core classes

Although Pubstrate permits any valid AS2 properties, which properties
are implemented are limited to the ones currently utilized by the
ActivityPub implementation.

### Object

Implemented? : y

* attachment: n
* attributedTo: y
* audience: n
* bcc: y
* bto: y
* cc: y
* content: y
* contentMap: n
* context: y
* duration: n
* endTime: y
* generator: n
* icon: y
* image: y
* inReplyTo: y
* location: n
* mediaType: y
* name: y
* nameMap: n
* preview: n
* published: y
* replies: n
* startTime: y
* summary: n
* summaryMap: n
* tag: y
* to: y
* updated: y
* url: y

### Link

Implemented? : y

* height: y
* hreflang: n
* href: y
* mediaType: y
* name: y
* rel: n
* width: y

### Actor

Implemented? : y

### Activity

Implemented? : y

* actor: y
* object: y
* target: n
* origin: n
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

### Mention

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

* formerType: y
* deleted: y

### Video

Implemented? : y

### Tombstone

Implemented? : y

## Extensions

Pubstrate utilizes ActivityPub's extensions to ActivityStreams and
permits adding new extensions.
