# Errata

This document includes errata for the [Activity Streams](https://www.w3.org/TR/activitystreams-core/) and [Activity Vocabulary](https://www.w3.org/TR/activitystreams-vocabulary/) documents.

## Activity Streams

  - None yet reported.

## Activity Vocabulary

  - The range of the `units` property is given as an enumerated set of values.
    Due to a formatting error, some of these values are shown with an incorrect
    leading space character. The correct range is:
    
    ```text
    "cm" | "feet" | "inches" | "km" | "m" | "miles" | xsd:anyURI
    
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
