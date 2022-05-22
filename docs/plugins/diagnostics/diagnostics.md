---
title: Diagnostics
tags:
  - plugins
  - diagnostics
---

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

The `Diagnostics` module extends the `Builder` and works on the `DocRoot` class which is the single source of truth which is the `Root` object.

The `Root` holds the data model of the entire application.

`Diagnostics` exposes the following methods:

### `run`

The `run` method takes the `RunDiagnosticsOptions` as its argument, an object with the following properties:

#### `init`

`init` is a callback function passed to the concrete `Visitor` class when visiting nodes of the `Root` The `Visitor` will receive this and determines _if_ or _when_ it will be called prior to visiting nodes. This can be useful to initiate data that all visitor functions will have access to:

```ts

```

### `runAsync`

### `createDiagnostic`

It's important to `mark` the `rootConfig`, `appConfig`, `preload` and `pages` in the `markers` object using `DocDiagnostics` prior to visiting to ensure that references will be resolved in order of precedence.

For example, the example below will trigger `DocDiagnostics` to visit the _preload_ nodes _before_ visiting the nodes under _pages_:

```js
const fs = require('fs-extra')
const y = require('yaml')
const { DocRoot, DocDiagnostics, DocVisitor } = require('@noodl/yaml')

const rootConfig = y.parse(fs.readFileSync('../admin.yml'))
const appConfig = y.parse(fs.readFileSync('../cadlEndpoint.yml'))
const BaseCSS = y.parse(fs.readFileSync('../BaseCSS.yml'))
const BasePage = y.parse(fs.readFileSync('../BasePage.yml'))
const Dashboard = y.parse(fs.readFileSync('../Dashboard.yml'))

const docRoot = new DocRoot()
const docDiagnostics = new DocDiagnostics()
const docVisitor = new DocVisitor()

docDiagnostics.use(docRoot)
docDiagnostics.use(docVisitor)

docDiagnostics.mark('rootConfig', 'admin')
docDiagnostics.mark('appConfig', 'cadlEndpoint')
docDiagnostics.mark('preload', 'BaseCSS')
docDiagnostics.mark('preload', 'BasePage')

docDiagnostics.run({
  enter: (args) => {...}
})
```

`DocDiagnostics` internally uses a `DocIterator` that will adjust the order of precedence to ensure that the pages will be visited in the correct order.

This is recommended otherwise the diagnostic messages will report false errors since it won't be able to resolve references that are dependent on the pages that expect them to be resolved before being visited.
