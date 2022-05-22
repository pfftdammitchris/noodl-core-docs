---
title: Interfaces
---

## Builder

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

## RootConfig

## AppConfig
