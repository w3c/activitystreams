Apache Streams

Apache Streams (incubating) unifies a diverse world of digital profiles and online activities into common formats and vocabularies, and makes these datasets accessible across a variety of databases, devices, and platforms for streaming, browsing, search, sharing, and analytics use-cases.

Apache Streams contains JRE-based modules that developers can use to easily integrate with online data sources and build polyglot indexes of activities, entities, and relationships - all based on public standards such as Activity Streams, or other published organizational standards.

Streams contains libraries and patterns for specifying, publishing, and inter-linking schemas, and assists with conversion of activities (posts, shares, likes, follows, etc.) and objects (profiles, pages, photos, videos, etc.) between the representation, format, and encoding preferred by supported data providers (Twitter, Instagram, etc.), and storage services (Cassandra, Elasticsearch, HBase, HDFS, Neo4J, etc.)

The project aims to provide simple two-way data interchange with all popular REST APIs in activity streams formats using a universal protocol. No other active open-source project has this ambitious goal, as well as production-worthy implementations for >10 services. Streams compatibility with multiple storage back-ends and ability to be embedded within any java-based real-time or batch data processing platform ensures that its interoperability features come with little technical baggage.

Apache Streams is an effort undergoing incubation at The Apache Software Foundation (ASF) sponsored by the Apache Incubator PMC. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.

Implementation details

Application name: Apache Streams
Version: 0.4 (?)
Platform name: N/A
License: Apache License 2.0
Main URL: http://streams.incubator.apache.org
Public: public
Activity Streams 2.0 URL: http://streams.incubator.apache.org/ns/streams-schemas-activitystreams2 (?)
Application role: both
Interface to other applications: library

Core classes

Object

Implemented? : y (most providers use as1 'ActivityObject' class)

attachment: y (googleplus provider handles upstream 'Attachment')
attributedTo: n
audience: n
bcc: n
bto: n
cc: n
content: y (most providers use as1 'content')
contentMap: n
context: n
duration: y (some providers use as1 'media_link.duration')
endTime: n
generator: n
icon: n
image: y (most providers use as1 'image.url')
inReplyTo: n
location: y (some providers use as1 'displayName')
mediaType: y (multiple providers use non-standardized fields for 'mediaType')
name: y (most providers use as1 'displayName')
nameMap: n
preview: n
published: y (most providers use as1 'published')
replies: n
startTime: n
summary: y (most providers use as1 'summary')
summaryMap: n
tag: n
to: n
updated: n
url: y (most providers use as1 'url')

Link

Implemented? : y (some providers use as1 'links' field)

height: y (some providers use as1 'media_link.height')
hreflang: n
mediaType: y (multiple providers use non-standardized fields for 'mediaType')
name: n
rel: y
width: y (some providers use as1 'media_link.width')

Actor

Implemented? : y (most providers use as1 'Actor' class)

Activity

Implemented? : y (most providers use as1 'Activity' class)

actor: y (all providers populate as1 'actor' sub-object)
object: y (some providers populate as1 'object' sub-object)
target: y (some providers populate as1 'target' sub-object)
origin: n
result: n
instrument: n

IntransitiveActivity

Implemented? : y (most providers create activities without an 'object' sub-object)

Collection

Implemented? : y (multiple providers serialize lists of 'Activity' and/or 'ActivityObject')

items: y
totalItems: y
first: n
last: n
current: n

OrderedCollection

Implemented? : y (lists may have already been sorted and order matters)

CollectionPage

Implemented? : y (most providers page through upstream collections but lack paging semantics)

partOf: n
next: n
prev: n

OrderedCollectionPage

Implemented? : n (but this capability would be useful)

Extended classes

Accept

Implemented? : n

Add

Implemented? : y (twitter provider: 'Page' actor uses as1 'Add' verb with 'Page' object and 'Group' target)

Announce

Implemented? : n

Arrive

Implemented? : n

Block

Implemented? : y (twitter provider: 'Page' actor uses as1 'Block' verb with 'Page' object)

Create

Implemented? : y (twitter provider: 'Page' actor uses as1 'Create' verb with 'Collection' object)

Delete

Implemented? : y (twitter provider: 'Page' actor uses as1 'Delete' verb with 'Activity' object)

Dislike

Implemented? : y (youtube provider: 'Page' actor has a normalized dislike count extended field)

Flag

Implemented? : n

Follow

Implemented? : y (twitter provider: 'Page' actor uses as1 'Follow' verb with 'Page' object)

Ignore

Implemented? : n

Invite

Implemented? : n

Join

Implemented? : n

Leave

Implemented? : n

Like

Implemented? : y (multiple providers have a normalized like count extended field)

Listen

Implemented? : n

Move

Implemented? : n

Offer

Implemented? : n

Question

Implemented? : n

oneOf: n
anyOf: n
closed: n

Read

Implemented? : n

Reject

Implemented? : n

Remove

Implemented? : y (twitter provider: 'Page' actor uses as1 'Remove' verb with 'Page' object and 'Group' target)

TentativeAccept

Implemented? : n

TentativeReject

Implemented? : n

Travel

Implemented? : n

Undo

Implemented? : n

Update

Implemented? : y (googleplus provider uses as1 'Update' verb)

View

Implemented? : n

Application

Implemented? : n

Group

Implemented? : y

Organization

Implemented? : n

Person

Implemented? : n

Service

Implemented? : n

Article

Implemented? : y (moreover provider uses 'Article' objects)

Audio

Implemented? : n

Document

Implemented? : n

Event

Implemented? : n

Image

Implemented? : y (multiple providers handle image metadata)

Note

Implemented? : n

Page

Implemented? : n (most providers use as1 'Page' but they really mean 'Profile')

Place

Implemented? : y (multiple providers handle upstream 'Place' representations)

accuracy: n
altitude: n
latitude: y
longitude: y
radius: n
units: n

Profile

Implemented? : y (most providers use as1 'Page' but they really mean 'Profile')

describes: n (linking profiles to real-world entities is currently outside the scope of Apache Streams, but this is a highly useful construct)

Relationship

Implemented? : y (twitter provider: 'Page' actor uses an as1 'Follow' verb with 'Page' object with no published date to express an on-going relationship, but it would be useful to have a way to seperate the event that began a relationship from the relationship itself)

subject: y
object: y
relationship: y

Tombstone

Implemented? : n

formerType: n
deleted: n

Video

Implemented? : y (multiple providers handle video metadata)

Tombstone

Implemented? : n

Extensions

streams-pojo-extensions/activity.json

    {
      "$schema": "http://json-schema.org/draft-03/schema",
      "$license": [
        "http://www.apache.org/licenses/LICENSE-2.0"
      ],
      "id": "#",
      "type": "object",
      "title": "activity",
      "javaType": "org.apache.streams.pojo.extensions.Activity",
      "javaInterfaces": ["java.io.Serializable"],
      "extends": {
        "$ref": "../../../../streams-pojo/src/main/jsonschema/activity.json"
      },
      "description": "Activity with Apache Streams extended fields.",
      "properties": {
        "extensions": {
          "javaType": "org.apache.streams.pojo.extensions.ActivityExtensions",
          "javaInterfaces": ["java.io.Serializable"],
          "type": "object",
          "properties": {
            "likes": {
              "type": "integer",
              "description": "The number of +1, Like, favorites, etc that the post has received"
            },
            "rebroadcasts": {
              "type": "integer",
              "description": "The number of retweets, shares, etc that the post has received"
            },
            "language": {
              "type": "string",
              "description": "The ISO language code of the post"
            },
            "location": {
              "type": "object",
              "description": "Location that the post was made",
              "properties": {
                "country": {
                  "type": "string",
                  "description": "Country"
                },
                "coordinates": {
                  "type": "array",
                  "items": "number",
                  "description": "Specific Geo-JSON coordinates (long,lat)"
                }
              }
            }
          }
        }
      }
    }

streams-pojo-extensions/object.json

    {
      "$schema": "http://json-schema.org/draft-03/schema",
      "$license": [
        "http://www.apache.org/licenses/LICENSE-2.0"
      ],
      "id": "#",
      "type": "object",
      "title": "activity",
      "javaType": "org.apache.streams.pojo.extensions.ActivityObject",
      "javaInterfaces": ["java.io.Serializable"],
      "extends": {
        "$ref": "../../../../streams-pojo/src/main/jsonschema/object.json"
      },
      "description": "ActivityObject with Apache Streams extended fields.",
      "properties": {
        "extensions": {
          "javaType": "org.apache.streams.pojo.extensions.ObjectExtensions",
          "javaInterfaces": ["java.io.Serializable"],
          "type": "object",
          "properties": {
            "followers": {
              "type": "integer",
              "description": "The number of followers that the actor/object has"
            },
            "friends": {
              "type": "integer",
              "description": "The number of followers that the actor/object has"
            },
            "handle": {
              "type": "string",
              "description": "Screen name of the actor/object, distinct from displayName"
            },
            "language": {
              "type": "string",
              "description": "The ISO language code the actor/object prefers"
            },
            "likes": {
              "type": "integer",
              "description": "The number of likes that the actor/object has"
            },
            "location": {
              "type": "object",
              "description": "Location from which the actor/object most frequently posts",
              "properties": {
                "country": {
                  "type": "string",
                  "description": "Country"
                },
                "coordinates": {
                  "type": "array",
                  "items": "number",
                  "description": "Specific Geo-JSON coordinates (long,lat)"
                }
              }
            },
            "posts": {
              "type": "integer",
              "description": "The number of posts that the actor/object has"
            }
          }
        }
      }
    }