# %Implementation name%

%(This is an implementation report template for Activity Streams 2.0. To use this
template, replace anything between percent boundaries with values for your
own implementation. You can safely delete any text surrounded by
percent-parenthesis pairs.)%

%(The completed implementation report can be submitted with a Github pull
request, or by email to public-socialweb-comments@w3.org.)%

## Implementation details

* Application name: %name%
* Version: %first version with Activity Streams 2.0 support%
* Platform name: %platform if this is a plugin or extension, otherwise "N/A"%
* License: %open source license or other%
* Main URL: %Main URL for the application%
* Public: %"public" or "private"%
* Activity Streams 2.0 URL: %url for features specific to AS2%
* Application role: %"publisher", "consumer", "both"%
* Interface to other applications: %"library", "network service", "other"%

## Core classes

%(For each core class your application implements, note which properties of the
class it uses. Here, "implements" means that your application uses the property
directly; just passing through unrecognized properties doesn't count as an
"implementation".)%

### Object

Implemented? : %"y", "n"% (%comments%)

* attachment: %"y", "n"% (%comments%)
* attributedTo: %"y", "n"% (%comments%)
* audience: %"y", "n"% (%comments%)
* bcc: %"y", "n"% (%comments%)
* bto: %"y", "n"% (%comments%)
* cc: %"y", "n"% (%comments%)
* content: %"y", "n"% (%comments%)
* contentMap: %"y", "n"% (%comments%)
* context: %"y", "n"% (%comments%)
* duration: %"y", "n"% (%comments%)
* endTime: %"y", "n"% (%comments%)
* generator: %"y", "n"% (%comments%)
* icon: %"y", "n"% (%comments%)
* image: %"y", "n"% (%comments%)
* inReplyTo: %"y", "n"% (%comments%)
* location: %"y", "n"% (%comments%)
* mediaType: %"y", "n"% (%comments%)
* name: %"y", "n"% (%comments%)
* nameMap: %"y", "n"% (%comments%)
* preview: %"y", "n"% (%comments%)
* published: %"y", "n"% (%comments%)
* replies: %"y", "n"% (%comments%)
* startTime: %"y", "n"% (%comments%)
* summary: %"y", "n"% (%comments%)
* summaryMap: %"y", "n"% (%comments%)
* tag: %"y", "n"% (%comments%)
* to: %"y", "n"% (%comments%)
* updated: %"y", "n"% (%comments%)
* url: %"y", "n"% (%comments%)

### Link

Implemented? : %"y", "n"% (%comments%)

* height: %"y", "n"% (%comments%)
* href: %"y", "n"% (%comments%)
* hreflang: %"y", "n"% (%comments%)
* mediaType: %"y", "n"% (%comments%)
* name: %"y", "n"% (%comments%)
* rel: %"y", "n"% (%comments%)
* width: %"y", "n"% (%comments%)

### Actor

Implemented? : %"y", "n"% (%comments%)

### Activity

Implemented? : %"y", "n"% (%comments%)

* actor: %"y", "n"% (%comments%)
* object: %"y", "n"% (%comments%)
* target: %"y", "n"% (%comments%)
* origin: %"y", "n"% (%comments%)
* result: %"y", "n"% (%comments%)
* instrument: %"y", "n"% (%comments%)

### IntransitiveActivity

Implemented? : %"y", "n"% (%comments%)

### Collection

Implemented? : %"y", "n"% (%comments%)

* items: %"y", "n"% (%comments%)
* totalItems: %"y", "n"% (%comments%)
* first: %"y", "n"% (%comments%)
* last: %"y", "n"% (%comments%)
* current: %"y", "n"% (%comments%)
* startIndex: %"y", "n"% (%comments%)

### OrderedCollection

Implemented? : %"y", "n"% (%comments%)

### CollectionPage

Implemented? : %"y", "n"% (%comments%)

* partOf: %"y", "n"% (%comments%)
* next: %"y", "n"% (%comments%)
* prev: %"y", "n"% (%comments%)

### OrderedCollectionPage

Implemented? : %"y", "n"% (%comments%)

* startIndex: %"y", "n"% (%comments%)

## Extended classes

### Accept

Implemented? : %"y", "n"% (%comments%)

### Add

Implemented? : %"y", "n"% (%comments%)

### Announce

Implemented? : %"y", "n"% (%comments%)

### Arrive

Implemented? : %"y", "n"% (%comments%)

### Block

Implemented? : %"y", "n"% (%comments%)

### Create

Implemented? : %"y", "n"% (%comments%)

### Delete

Implemented? : %"y", "n"% (%comments%)

### Dislike

Implemented? : %"y", "n"% (%comments%)

### Flag

Implemented? : %"y", "n"% (%comments%)

### Follow

Implemented? : %"y", "n"% (%comments%)

### Ignore

Implemented? : %"y", "n"% (%comments%)

### Invite

Implemented? : %"y", "n"% (%comments%)

### Join

Implemented? : %"y", "n"% (%comments%)

### Leave

Implemented? : %"y", "n"% (%comments%)

### Like

Implemented? : %"y", "n"% (%comments%)

### Listen

Implemented? : %"y", "n"% (%comments%)

### Move

Implemented? : %"y", "n"% (%comments%)

### Offer

Implemented? : %"y", "n"% (%comments%)

### Question

Implemented? : %"y", "n"% (%comments%)

* oneOf: %"y", "n"% (%comments%)
* anyOf: %"y", "n"% (%comments%)
* closed: %"y", "n"% (%comments%)

### Read

Implemented? : %"y", "n"% (%comments%)

### Reject

Implemented? : %"y", "n"% (%comments%)

### Remove

Implemented? : %"y", "n"% (%comments%)

### TentativeAccept

Implemented? : %"y", "n"% (%comments%)

### TentativeReject

Implemented? : %"y", "n"% (%comments%)

### Travel

Implemented? : %"y", "n"% (%comments%)

### Undo

Implemented? : %"y", "n"% (%comments%)

### Update

Implemented? : %"y", "n"% (%comments%)

### View

Implemented? : %"y", "n"% (%comments%)

### Application

Implemented? : %"y", "n"% (%comments%)

### Group

Implemented? : %"y", "n"% (%comments%)

### Organization

Implemented? : %"y", "n"% (%comments%)

### Person

Implemented? : %"y", "n"% (%comments%)

### Service

Implemented? : %"y", "n"% (%comments%)

### Article

Implemented? : %"y", "n"% (%comments%)

### Audio

Implemented? : %"y", "n"% (%comments%)

### Document

Implemented? : %"y", "n"% (%comments%)

### Event

Implemented? : %"y", "n"% (%comments%)

### Image

Implemented? : %"y", "n"% (%comments%)

### Note

Implemented? : %"y", "n"% (%comments%)

### Page

Implemented? : %"y", "n"% (%comments%)

### Place

Implemented? : %"y", "n"% (%comments%)

* accuracy: %"y", "n"% (%comments%)
* altitude: %"y", "n"% (%comments%)
* latitude: %"y", "n"% (%comments%)
* longitude: %"y", "n"% (%comments%)
* radius: %"y", "n"% (%comments%)
* units: %"y", "n"% (%comments%)

### Profile

Implemented? : %"y", "n"% (%comments%)

* describes: %"y", "n"% (%comments%)

### Relationship

Implemented? : %"y", "n"% (%comments%)

* subject: %"y", "n"% (%comments%)
* object: %"y", "n"% (%comments%)
* relationship: %"y", "n"% (%comments%)

### Tombstone

Implemented? : %"y", "n"% (%comments%)

* formerType: %"y", "n"% (%comments%)
* deleted: %"y", "n"% (%comments%)

### Video

Implemented? : %"y", "n"% (%comments%)

### Mention

Implemented? : %"y", "n"% (%comments%)

## Extensions

%(If you've used any extensions for your Activity Streams 2.0 implementation,
list them here, with comments.)%
