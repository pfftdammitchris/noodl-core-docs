---
title: Plugins
tags:
  - plugins
---

## Working with Plugins

@noodl/core supports custom modules as plugins.

To create a custom module, extend the abstract `Builder` class.

Modules must implement the `Builder` interface:

```ts
class Builder {
  data: any
  iterator: AIterator
  root: ARoot
  visitor: AVisitor

  createHelpers(helpers?: any): any
  createData(data?: any): any
  createProps<P = any>(props: P & { value: any }): P & { value: any }

  use(value: AIterator | ARoot | AVisitor): this
}
```

> TODO - Complete documentation

To see an example of a plugin implementation continue on to read on the `Diagnostics` module.
