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
  
