---
slug: usage
title: Usage
---

```bash
npm install @noodl/core
```

## Diagnostics

```js
const n = require('@noodl/core')
const y = require('yaml')
const _ = require('lodash')
const fs = require('fs')
const { ObjRoot, ObjVisitor } = require('./myplugin')

const diagnostics = new n.Diagnostics()
const objRoot = new ObjRoot()
const objVisitor = new ObjVisitor()

diagnostics.use(objRoot)
diagnostics.use(objVisitor)

const results = diagnostics.run({
  enter: ({ add, key, value, path, root, data }) => {
    if (_.isPlainObject(value)) {
      if (_.has(value, 'emit')) {
        const emitObject = value.emit
        if (!_.has(emitObject, 'actions')) {
          add({
            type: 'error',
            message: `Encountered an emit object without an "actions" property`,
            key,
          })
        }
      }
    }
  },
})

fs.writeFileSync('./diagnostics.json', JSON.stringify(results), 'utf8')
```
