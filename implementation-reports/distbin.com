# distbin.com

Distbin is a distributed pastebin that implements parts of Activity Streams 2.0 to describe the resources it allows end-users to author.

It's "A document publishing system" as mentioned in section 9.2.1 (example publishers). It also implements ActivityPub (which depends on AS2) to notify other web resources (or distbin installations) about replies and mentions, and receive replies to resources hosted on distbin.com.

distbin.com renders to html both AS2 documents authored on distbin.com, as well as AS2 documents received (consumed) from other hosts that deliver to its ActivityPub inbox.

distbin.com is not very strict about documents it allows end-users to publish, and does pass-through many properties without a whitelist. Classes below are only considered 'implemented' if they are explicitly authored or specially handled. Properties below are only considered 'implemented' if distbin makes use of them above and beyond simple passthrough storage/retrieval.

## Implementation details

* Application name: distbin.com
* Version: v0.0.0
* Platform name: N/A
* License: closed source
* Main URL: http://distbin.com
* Public: public
* Activity Streams 2.0 URL (request with Accept: application/activity+json): http://distbin.com/public
* Application role: both
* Interface to other applications: network service

## Core classes

### Object

Implemented? : n

* attachment: y
* attributedTo: y
* audience: n
* bcc: y (notifies LDN inbox of any bcc'd URL)
* bto: y (notifies LDN inbox of any bto'd URL)
* cc: y (notifies LDN inbox of any cc'd URL)
* content: y (sanitized, rendered as main part of HTML representation of a post)
* contentMap: n
* context: n
* duration: n
* endTime: n
* generator: y (Publishes .generator on posted items. Renders consumed .generator on any items)
* icon: n
* image: n
* inReplyTo: y (notifies LDN inbox of inReplyTo URL, renders threaded replies in HTML representation)
* location: y (User can provide geolocation when posting. Renders map in HTML)
* mediaType: y
* name: y (rendered as header in HTML representation)
* nameMap: n
* preview: n
* published: y (rendered human-friendly timestamp in HTML representation)
* replies: y (renders threaded replies in HTML representation)
* startTime: n
* summary: n
* summaryMap: n
* tag: y (can add tags to posts. Renders tags to HTML)
* to: y (notifies LDN inbox of any to'd URL)
* updated: n
* url: y (points back to permalink on distbin.com, or canonical URL of foreign activities delivered to distbin.com inbox)

### Link

Implemented? : y

* height: n
* href: y
* hreflang: n
* mediaType: y
* name: y
* rel: y
* width: n

### Actor

Implemented? : n

### Activity

Implemented? : y (primary object type)

* actor: n
* object: y
* target: n
* origin: n
* result: n
* instrument: n

### IntransitiveActivity

Implemented? : n

### Collection

Implemented? : y (/public and /:activity/replies are represented as Collections of Activities)

* items: y
* totalItems: y
* first: y
* last: n
* current: y

### OrderedCollection

Implemented? : n

### CollectionPage

Implemented? : n

* partOf: y
* next: y
* prev: n

### OrderedCollectionPage

Implemented? : y

* startIndex: y

## Extended classes

All can be published/retrieved dumbly, but only some are specially treated.

### Accept

Implemented? : n

### Add

Implemented? : n

### Announce

Implemented? : n

### Arrive

Implemented? : n

### Block

Implemented? : n

### Create

Implemented? : y (most common for input in /outbox, creating a new resource)

### Delete

Implemented? : n

### Dislike

Implemented? : n

### Flag

Implemented? : n

### Follow

Implemented? : n

### Ignore

Implemented? : n

### Invite

Implemented? : n

### Join

Implemented? : n

### Leave

Implemented? : n

### Like

Implemented? : n

### Listen

Implemented? : n

### Move

Implemented? : n

### Offer

Implemented? : n

### Question

Implemented? : n

* oneOf: n
* anyOf: n
* closed: n

### Read

Implemented? : n

### Reject

Implemented? : n

### Remove

Implemented? : n

### TentativeAccept

Implemented? : n

### TentativeReject

Implemented? : n

### Travel

Implemented? : n

### Undo

Implemented? : n

### Update

Implemented? : n

### View

Implemented? : n

### Application

Implemented? : n

### Group

Implemented? : n

### Organization

Implemented? : n

### Person

Implemented? : n

### Service

Implemented? : n

### Article

Implemented? : n

### Audio

Implemented? : n

### Document

Implemented? : n

### Event

Implemented? : n

### Image

Implemented? : n

### Note

Implemented? : y (default activity published through HTML UI is 'Create a Note')

### Page

Implemented? : n

### Place

Implemented? : y

* accuracy: y
* altitude: y
* latitude: y
* longitude: y
* radius: y
* units: y

### Profile

Implemented? : n

* describes: n

### Relationship

Implemented? : n

* subject: n
* object: n
* relationship: n

### Tombstone

Implemented? : n

* formerType: n
* deleted: n

### Video

Implemented? : n

### Tombstone

Implemented? : n

## Extensions

[ActivityPub](https://www.w3.org/ns/activitystreams#activitypub)

* inbox: y (distbin.com and all the documents it hosts have an inbox. distbin.com also delivers to inboxes of remote resources audience targeted by newly published documents)
* outbox: y (distbin.com has an outbox)
