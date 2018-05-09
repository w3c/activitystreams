# Errata

This document includes errata for the [Activity Streams](https://www.w3.org/TR/activitystreams-core/) and [Activity Vocabulary](https://www.w3.org/TR/activitystreams-vocabulary/) documents.

## Activity Streams

  - None yet reported.

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
