# Sloph

This is the codebase for my personal site, which serves as an AS2 publisher. All notes, articles, and other activites are exposed as AS2 `Object`s or `Activity`s. Tag pages and photo albums are `Collection`s. Data is available as `activity+json`, `ld+json` and `text/turtle`, as well as `text/html`, according to `Accept` headers sent. It is written in PHP and permanent work-in-progress.

## Implementation details

* Application name: Sloph
* Version: 0.1
* Platform name: n/a
* License: %open source license or other%
* Main URL: https://rhiaro.co.uk/sloph
* Public: public
* Activity Streams 2.0 URL: n/a
* Application role: publisher
* Interface to other applications: website with content negotiation

## Core classes

### Object

Implemented? : y

* attachment: n
* attributedTo: y
* audience: n
* bcc: n
* bto: n
* cc: y
* content: y
* contentMap: n
* context: n
* duration: y
* endTime: y
* generator: y
* icon: n
* image: y
* inReplyTo: y
* location: y
* mediaType: n
* name: y
* nameMap: n
* preview: n
* published: y
* replies: n (planned)
* startTime: y
* summary: y
* summaryMap: n
* tag: y
* to: y
* updated: y
* url: y

### Link

Implemented? : n

* height: n
* hreflang: n
* mediaType: n
* name: n
* rel: n
* width: n

### Actor

Implemented? : y

### Activity

Implemented? : y

* actor: y
* object: y
* target: y
* origin: y
* result: n 
* instrument: n

### IntransitiveActivity

Implemented? : n

### Collection

Implemented? : y

* items: y
* totalItems: y
* first: n
* last: n
* current: n

### OrderedCollection

Implemented? : n (planned)

### CollectionPage

Implemented? : y

* partOf: y
* next: y
* prev: y

### OrderedCollectionPage

Implemented? : n

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

Implemented? : n (planned)

### Create

Implemented? : y

### Delete

Implemented? : n (planned)

### Dislike

Implemented? : n (planned)

### Flag

Implemented? : n

### Follow

Implemented? : y

### Ignore

Implemented? : n

### Invite

Implemented? : y

### Join

Implemented? : n (planned)

### Leave

Implemented? : n (planned)

### Like

Implemented? : y

### Listen

Implemented? : n

### Move

Implemented? : n (planned)

### Offer

Implemented? : n (planned)

### Question

Implemented? : n

* oneOf: n
* anyOf: n
* closed: n

### Read

Implemented? : y

### Reject

Implemented? : n

### Remove

Implemented? : n (planned)

### TentativeAccept

Implemented? : n

### TentativeReject

Implemented? : n

### Travel

Implemented? : y

### Undo

Implemented? : n

### Update

Implemented? : y

### View

Implemented? : n

### Application

Implemented? : n

### Group

Implemented? : n

### Organization

Implemented? : n

### Person

Implemented? : y

### Service

Implemented? : n

### Article

Implemented? : y

### Audio

Implemented? : n

### Document

Implemented? : n

### Event

Implemented? : y

### Image

Implemented? : y

### Note

Implemented? : y

### Page

Implemented? : n

### Place

Implemented? : y

* accuracy: 
* altitude: 
* latitude: 
* longitude: 
* radius: 
* units: 

### Profile

Implemented? : y

* describes: y

### Relationship

Implemented? : y

* subject: y
* object: y
* relationship: y

### Tombstone

Implemented? : n (probably planned)

* formerType: n
* deleted: n

### Video

Implemented? : n

## Extensions

Extensions as I add them documented at https://rhiaro.co.uk/terms/as/

### Consume 

Implemented? : y

(for when I ate or drank something)

### Acquire 

Implemented? : y

(for when I bought or was given something)

### Sleep

Implemented? : y

(for when I slept)

* inbox: y
* outbox: y
