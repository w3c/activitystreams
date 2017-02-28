# Activity Streams 2.0 for NodeJS

## Implementation details

* Application name: Activity Streams 2.0 for NodeJS
* Version: 1.0.0
* Platform name: N/A
* License: Apache-2.0
* Main URL: https://github.com/jasnell/activitystrea.ms
* Public: "public"
* Activity Streams 2.0 URL: https://github.com/jasnell/activitystrea.ms
* Application role: both
* Interface to other applications: library

## Core classes

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
* url: n

### Link

Implemented? : y

* height: y
* href: y
* hreflang: y
* mediaType: y
* name: y
* rel: n
* width: y
* duration: y

### Actor

Implemented? : n

### Activity

Implemented? : y

* actor: y
* object: y
* target: y
* origin: y
* result: y
* instrument: y

### IntransitiveActivity

Implemented? : n

### Collection

Implemented? : y

* items: y
* totalItems: y
* first: y
* last: y
* current: y
* startIndex: n

### OrderedCollection

Implemented? : y

### CollectionPage

Implemented? : y

* partOf: n
* next: y
* prev: y

### OrderedCollectionPage

Implemented? : y

* startIndex: y

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

### Mention

Implemented? : y

## Extensions

* http://ns.jasnell.me/interval
* http://ns.jasnell.me/social
