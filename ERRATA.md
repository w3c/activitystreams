# Errata

This document includes errata for the [Activity Streams](https://www.w3.org/TR/activitystreams-core/) and [Activity Vocabulary](https://www.w3.org/TR/activitystreams-vocabulary/) documents.

## Activity Streams

- Section 4.2 lists the possible properties of a `Link` object. This list omits `nameMap`, `preview`, and `attributedTo`.
  The full list should be: `id` | `name` | `nameMap` | `hreflang` | `mediaType` | `rel` | `height` | `width` | `preview` | `attributedTo`.

- In Section 2.3 "Dates and Times", the definition of `as2-partial-time` allows specifying a `time-secfrac` portion even if `time-second` is not defined. One candidate correction for this error is to replace the ABNF definition of `as2-partial-time` with a structure that requires `time-second` for `time-secfrac` to be used:

  ```json
  as2-partial-time = time-hour ":" time-minute [":" time-second [time-secfrac]]
  ```

## Activity Vocabulary

- Example 150 has `latitude` and `longitude` properties with string values.
  The range of these properties is `xsd:float`. A correct example would be:

  ```json
  {
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Place",
    "name": "San Francisco, CA",
    "longitude": 122.4167,
    "latitude": 37.7833
  }
  ```

  - Example 80 has `Image` objects with `width` and `height` properties, which
    are only allowed on `Link` objects. One alternative is to use `Link` objects
    with the correct `height` and `width` as the `url` property for each `Image`
    object.

    ```json
    {
      "@context": "https://www.w3.org/ns/activitystreams",
      "summary": "A simple note",
      "type": "Note",
      "content": "A simple note",
      "icon": [
        {
          "type": "Image",
          "summary": "Note (16x16)",
          "url": {
            "type": "Link",
            "href": "http://example.org/note1.png",
            "width": 16,
            "height": 16
          }
        },
        {
          "type": "Image",
          "summary": "Note (32x32)",
          "url": {
            "type": "Link",
            "href": "http://example.org/note2.png",
            "width": 32,
            "height": 32
          }
        }
      ]
    }
    ```

  - The range of the `units` property is given as an enumerated set of values.
    Due to a formatting error, some of these values are shown with an incorrect
    leading space character. The correct range is:

    ```text
    "cm" | "feet" | "inches" | "km" | "m" | "miles" | xsd:anyURI
    ```

  - Example 58 includes a `summary` property on a `Mention` object, which is
    not allowed. A corrected example:

    ```json
    {
      "@context": "https://www.w3.org/ns/activitystreams",
      "type": "Mention",
      "href": "http://example.org/joe",
      "name": "Joe"
    }
    ```

- Unlike `latitude` and `longitude`, the domain of the `altitude` term is the `Object` type. The `altitude` term should be included in the list of properties of an `Object`. Because `altitude` is primarily documented as a property of a `Place`, publishers should not include `altitude` on objects that are not of type `Place`, and consumers should accept objects with this property that aren't of type `Place`.

- Example 60, for the `Tombstone` type, is missing the `@context` property. The correct example should be:

  ```json
  {
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "OrderedCollection",
    "totalItems": 3,
    "name": "Vacation photos 2016",
    "orderedItems": [
      {
        "type": "Image",
        "id": "http://image.example/1"
      },
      {
        "type": "Tombstone",
        "formerType": "Image",
        "id": "http://image.example/2",
        "deleted": "2016-03-17T00:00:00Z"
      },
      {
        "type": "Image",
        "id": "http://image.example/3"
      }
    ]
  }
  ```

- The domain of the `attributedTo` property is both `Link` and `Object`. `attributedTo` should be included in the list of properties of a `Link`.

  - Example 79 has  an `Image` object with `width` and `height` properties, which
    only indicate `Link` in their Domain. One alternative is to use a `Link` object
    with the correct `height` and `width` as the `url` property for each `Image`
    object.

    ```json
    {
      "@context": "https://www.w3.org/ns/activitystreams",
      "summary": "A simple note",
      "type": "Note",
      "content": "This is all there is.",
      "icon": {
        "type": "Image",
        "name": "Note icon",
        "url": {
           "href": "http://example.org/note.png",
           "type": "Link",
           "width": 16,
           "height": 16
        }
      }
    }
    ```

- The Notes for the `to` property do not correctly identify the functionality (one or more) of the values of the property. The notes should read: "Identifies one or more entities that are part of the public primary audience of this Object."

- The Notes for the `bto` property do not correctly identify the functionality (one or more) of the values of the property. The notes should read: "Identifies one or more entities that are part of the private primary audience of this Object."

- The Notes for the `cc` property do not correctly identify the functionality (one or more) of the values of the property. The notes should read: "Identifies one or more entities that are part of the public secondary audience of this Object."

- The Notes for the `bcc` property do not correctly define the range of the property, limiting it to only the `Object` type. The notes should read: "Identifies one or more entities that are part of the private secondary audience of this Object."

- The description of the `audience` property should read "Identifies one or more entities that represent the total population of entities for which the object can be considered to be relevant."

- Example 157 is not valid JSON because the `content` property extends over multiple lines. The correct example is:

  ```json
  {
    "@context": "https://www.w3.org/ns/activitystreams",
    "name": "A thank-you note",
    "type": "Note",
    "content": "Thank you <a href='http://sally.example.org'>@sally</a> for all your hard work! <a href='http://example.org/tags/givingthanks'>#givingthanks</a>",
    "to": {
      "name": "Sally",
      "type": "Person",
      "id": "http://sally.example.org"
    },
    "tag": {
      "id": "http://example.org/tags/givingthanks",
      "name": "#givingthanks"
    }
  }
  ```

- Example 102 is missing a `type` property on the `Link` value of the `url` property. For clarity, the example should read:

  ```json
  {
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Video",
    "name": "Cool New Movie",
    "duration": "PT2H30M",
    "preview": {
      "type": "Video",
      "name": "Trailer",
      "duration": "PT1M",
      "url": {
        "type": "Link",
        "href": "http://example.org/trailer.mkv",
        "mediaType": "video/mkv"
      }
    }
  }
  ```

- In Section 4, the range of the `formerType` property is given as `Object`. The property should have the same range as the `type` property for which it forms a replacement for deleted `Tombstone` objects.

  - Example 75 erroneously includes a `summary` property on a `Link` object. The corrected example:
  
    ```json
    {
      "@context": "https://www.w3.org/ns/activitystreams",
      "summary": "Sally's blog posts",
      "type": "Collection",
      "totalItems": 3,
      "current": {
        "type": "Link",
        "name": "Most Recent Items",
        "href": "http://example.org/collection"
      },
      "items": [
        "http://example.org/posts/1",
        "http://example.org/posts/2",
        "http://example.org/posts/3"
      ]
    }
    ```

  - Example 77 erroneously includes a `summary` property on a `Link` object. The corrected example:

  ```json
  {
    "@context": "https://www.w3.org/ns/activitystreams",
    "summary": "Sally's blog posts",
    "type": "Collection",
    "totalItems": 3,
    "first": {
      "type": "Link",
      "name": "First Page",
      "href": "http://example.org/collection?page=0"
    }
  }
  ```

  - Example 87 erroneously includes a `summary` property on a `Link` object. The corrected example:

  ```json
  {
    "@context": "https://www.w3.org/ns/activitystreams",
    "summary": "A collection",
    "type": "Collection",
    "totalItems": 5,
    "last": {
      "type": "Link",
      "name": "Last Page",
      "href": "http://example.org/collection?page=1"
    }
  }
  ```
