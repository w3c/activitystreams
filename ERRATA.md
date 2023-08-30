# Errata

This document includes errata for the [Activity Streams](https://www.w3.org/TR/activitystreams-core/) and [Activity Vocabulary](https://www.w3.org/TR/activitystreams-vocabulary/) documents.

## Activity Streams

  - Example 29 uses `id` as an alias for the `@id` property even though the Activity Streams 2.0 context has not been used, so that alias is not set up. The correct code would be:

    ```json
    {
        "@context": {
            "ex": "http://example.org/",
            "term": {
                "@type": "@id",
                "@id": "ex:term"
            }
        },
        "term": "ex:Foo"
    }
    ``` 

   - Section 5.1 incorrectly refers to the `id` alias for the `@id` property, and the `type` alias of the `@type` property. Paragraph 4 should read, in part, ''In JSON-LD, Compact URI expansion of values applies to properties explicitly defined as "@type": "@id" in the @context definition.''

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

  - The domain of the `attributedTo` property is both `Link` and `Object`. `attributedTo` should be included in the list of properties of a `Link`.
