# Activity Streams 2.0

Activity Streams 2.0 (AS2) is a social data format. Its types represent activities, content objects, and actors like people or groups on the social web.

It is an extensible format; the Activity Vocabulary provides a structure for social applications, but more focused or innovative objects can be represented in AS2 by extending the vocabulary.

## Key Links

* The [Core specification](https://www.w3.org/TR/activitystreams-core/) describes the basic structure of AS2 and the core classes like `Object` and `Link`.
* The [Vocabulary specification](https://www.w3.org/TR/activitystreams-vocabulary/) expands on the core specification with definitions of several dozen activity and object types, as well as many properties of those types.
* The [SocialCG](https://www.w3.org/Social/WG) is the W3C Social Web Working Group, which is the home of AS2.
* [ActivityPub](https://www.w3.org/TR/activitypub/) is a protocol that uses AS2 for communication between social systems.
* The [Activity Streams Primer](https://www.w3.org/wiki/Activity_Streams/Primer) includes some expanded examples and explanations of AS2. If it's unclear how to use a type or property, the primer is a good place to start.
* The [Extensions registry](https://www.w3.org/wiki/Activity_Streams_extensions) lists known extensions to AS2.
* Popular extensions can be integrated into the AS2 vocabulary document, making them practically part of the spec. The [Extensions Policy](https://swicg.github.io/extensions-policy/) describes how to propose extensions for inclusion in AS2.

## Editors

The currently active editors of the AS2 specification(s) are:

- [Evan Prodromou](https://github.com/evanp)

## Supported deliverables

These files are maintained by the editor(s) under the supervision of the SocialCG:

* The Core specification.
* The Vocabulary specification.
* The JSON-LD context document.
* The OWL ontology document.

The documentation is primary; the JSON-LD context and OWL ontology follow from the documentation.

Other documents included here are informational and provided on a best-effort basis, or to support the processes of the W3C.

## Contributions

Because AS2 is a W3C Recommendation, its published documents are stable and changes are highly controlled. If you'd like to contribute, the best way is to open a [GitHub issue](https://github.com/w3c/activitystreams/issues) or join the [SocialCG](https://www.w3.org/Social/WG) and participate in discussions there.

Pull requests are generally *not* helpful, unless you're an editor or have been asked to submit a pull request by an editor. The editors are responsible for the content of the documents, and they will make changes based on the issues and discussions.

AS2 provides the vocabulary for ActivityPub, but many of the protocol details are not part of AS2. Issues with the protocol and ActivityPub API should be created in the [ActivityPub repository](https://github.com/w3c/activitypub). If you're not sure, it's okay to open an issue in the AS2 repository and the editors will navigate it to the right place.

## Processes

### Questions and clarifications

If you have a question about the specification(s), including text or terms that are unclear or ambiguous, please open a [GitHub issue](https://github.com/w3c/activitystreams/issues).

Clarifying questions may influence future versions of the document, but they aren't usually treated as errors that need to be updated as errata. A typical resolution for a clarifying question is to add a page to the [Activity Streams Primer](https://www.w3.org/wiki/Activity_Streams/Primer).

### Editorial changes

If you find a textual error in the specification(s), please open a [GitHub issue](https://github.com/w3c/activitystreams/issues). Examples of textual errors:

- Spelling mistakes
- Grammar mistakes
- Broken links
- Incorrect references to other parts of the document
- Semantic mistakes
- Misleading or confusing language
- Syntax errors in the JSON-LD of examples in the documents

The process for making editorial changes is as follows:

1. A GitHub issue is opened.
2. Participants discuss the issue in the comments.
3. The editor(s) open a pull request to add the correction to the ERRATA document.
4. At a future meeting of the SocialCG, the editor(s) propose to accept the pull request. The SocialCG discusses the proposal and votes to accept or reject it.
5. If it's accepted, the editor(s) merge the pull request and close the issue.
6. The editor(s) update the editor's draft of the document to include the correction.
7. Periodically, updated non-normative editorial changes are published as a new version of the document at the canonical URL.

### Backwards-compatible changes

Social networking changes every year, and AS2 is designed to be keep up with that pace of change. Backwards-compatible changes are those that don't break existing implementations of AS2.

The most important type of backwards-compatible normative change is adding types and properties to the vocabulary.

The primary way to create a backwards-compatible change is to create a new extension to Activity Streams 2.0. You can create a GitHub issue to discuss the extension idea, which can help with building consensus around the change.

Extensions are documented on the [Extensions registry](https://www.w3.org/wiki/Activity_Streams_extensions). Before starting a new extension, it's a good idea to check the registry to see if someone else has already created a similar extension.

The [Fediverse Enhancement Proposals](https://codeberg.org/fediverse/fep) process is a lightweight collaboration process for creating and documenting Activity Streams 2.0 extensions (and other changes to the Fediverse). It's a good place to start if you're considering a backwards-compatible change.

There are many ideas for backwards-compatible changes to ActivityPub that have not yet been written up as a FEP or other document. These are marked [Needs FEP](https://github.com/w3c/activitystreams/issues?q=is%3Aissue+label%3A%22needs-fep%22) in the ActivityPub GitHub issue repository, and contributors are welcome to [submit a FEP](https://codeberg.org/fediverse/fep/src/branch/main#submitting-a-fep) on the topic. Note that issues may be closed without the FEP being created; that does not mean that the FEP is no longer needed.

Extensions that become popular can be integrated into the AS2 vocabulary document, making them practically part of the spec. The [Extensions Policy](https://swicg.github.io/extensions-policy/) describes how to propose extensions for inclusion in AS2.

Future versions of the AS2 specification(s) may include popular extensions as part of the core specs; see below.

### Non-backwards-compatible changes

Non-backwards-compatible changes to the specification require chartering a new working group at the W3C. They also require making changes in dozens of ActivityPub implementations and tens of thousands of running servers. This is a lot of work and is not done lightly.

Non-backwards-compatible changes include:

- Making optional behaviour mandatory
- Loosening requirements for existing types or properties
- Deprecating types or properties
- Removing types or properties from the vocabulary

If you think a non-backwards-compatible change is necessary, please open a [GitHub issue](https://github.com/w3c/activitystreams/issues) to discuss it. It will be marked as a "next version" issue, so when a new working group is chartered, the issue can be considered for the new version of the specification(s).
