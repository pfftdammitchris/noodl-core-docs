---
id: api-reference
sidebar_position: 4
title: API Reference
tags:
  - api
  - reference
  - diagnostics
---

---

## Modules

### Diagnostics

> extends: `Builder`

#### Methods

##### `run`

##### `register`

Registers an `AIterator`, `ARoot`, `AVisitor` or a `Diagnostic`

When registering a `Diagnostic` to the collection of diagnostic rules, it will be used to generate a collection of diagnostic messages.

##### `createDiagnostic`

Creates a `Diagnostic`

```ts
const diagnostics = new Diagnostics()

createDiagnostic(
  opts?: Partial<DiagnosticObject | TranslatedDiagnosticObject>
): Diagnostic
```

> TODO

---

## Utilities

### `deref`

> Custom tiny state machine dereferencer for unwrapping reference strings
> TODO
