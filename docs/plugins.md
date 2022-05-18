---
id: plugins
sidebar_position: 4
title: Plugins
tags:
  - plugins
---

## Working with Plugins

### Modules

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

To see an example of a plugin implementation see the `Diagnostics` module:

```ts
class Diagnostics extends Builder implements IDiagnostics {}

interface IDiagnostics {
  run<Async extends boolean = false>(
    options?: RunDiagnosticsOptions<Async>,
  ): Async extends true ? Promise<Diagnostic[]> : Diagnostic[]
}

interface RunDiagnosticsOptions<Async extends boolean = false> {
  async?: Async
  init?: (args: { data: Record<string, any> }) => any
  beforeEnter?: (enterValue: any) => any
  enter?: AVisitor<
    Async extends true ? Promise<Diagnostic[]> : Diagnostic[],
    DiagnosticsHelpers
  >['callback']
}

interface DiagnosticsHelpers {
  add(opts: Partial<DiagnosticObject>): void
}

interface DiagnosticRule {}

type DiagnosticObject<O extends Record<string, any> = Record<string, any>> = {
  page: string
  key: null | string | number
  value: any
  path?: any[]
  root: ARoot
  messages: {
    type: ValidatorType
    message: string[]
  }[]
} & O
```
