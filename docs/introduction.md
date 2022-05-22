---
slug: introduction
title: Introduction
---

> Note: @noodl/core is currently in early development and APIs and packages are likely to change quite often.

_@noodl/core_ is an extensible JavaScript library with an emphasis on reliability, extensibility and performance. @noodl/core aims to provide an easy developer experience so you can easily build features with confidence. Combined with a highly extensible architecture, @noodl/coree allows developers to create NOODL development tools that scale in size as you develop your noodl applications.

@noodl/core works by providing a _Root_ interface that serves as a single source of truth, and from there you can work with @noodl/core's declarative APIs to make things progress without needing to worry about implementing your own analyzer checks to assert that your data is in uniformity with the noodl specification.

The core package of @noodl/core is 78kb in file size (min+gzip) and you only need to implement concrete classes that follow the abstract interfaces exposed by the package.

Furthermore, the interfaces to get started with the API only grows with data in the runtime, so you can get started quickly in every project without needing to make leaps in learning curves which can greatly help progression starting from the ground up.

## What can be built with @noodl/core?

@noodl/core makes it possible to create scalable web applications built right on top of the NOODL platform. We started @noodl/core with implementations on best practices gained from trial and error through previous experiences.

The `Diagnostics` module is the first available module built in to the @noodl/core package and is the first major development tool used to perform quality assurance for noodl applications.
