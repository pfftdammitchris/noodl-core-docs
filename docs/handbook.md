---
title: Handbook
tags:
  - handbook
  - terms
  - syntax
  - descriptions
  - explanations
---

llo: 7/32

## Operations

### Basic

#### Inheritance

### Root Merge

> Pattern: `.`

#### Examples

```js
const reference = '.Dashboard.params.url'
```

```json
{
  "link": ".Dashboard.params.url"
}
```

### Local Merge

> Pattern: `..`

#### Examples

```js
const reference = '..params.url'
```

```json
{
  "link": "..params.url"
}
```

#### Extension

> Pattern: `.a: ""`

#### Examples

```js
const profile = {
  avatar: 'abc.png',
  name: {
    first: 'Bob',
    last: 'Gonzalez',
  },
}
```

```json
{
  ".profile": ""
}
```

> Result

```json

```

#### Override

> Pattern: `@`

#### Examples

> Example 1

```js
const reference = '..facility.id@'
```

```json
{
  "..facility.id@": "TzN1z0osjakzxa_a31zmk3902akklz=-"
}
```

> Example 2

Input:

```js
const facilityId = 'TzN1z0osjakzxa_a31zmk3902akklz=-'
const root = {
  Organization: {
    facility: {
      info: '',
    },
  },
}
const obj = {
  '..facility.info@': {
    fruit: 'apple',
    age: 40,
  },
}
```

Output:

```json
{
  "Organization": {
    "facility": {
      "info": {
        "fruit": "apple",
        "age": 40
      }
    }
  }
}
```

> Example 3

Input:

```js
const facilityId = 'TzN1z0osjakzxa_a31zmk3902akklz=-'
const root = {
  Organization: {
    facility: {
      info: '',
    },
  },
}
const obj = {
  '..facility.info@': {
    fruit: 'apple',
    age: 40,
  },
}
```

Output:

```json
{
  "Organization": {
    "facility": {
      "info": {
        "fruit": "apple",
        "age": 40
      }
    }
  }
}
```

#### Evaluation

#### If/Else

#### Goto

### Organic

#### Evolve

#### Elite

#### Convolve

#### Emit

---

## References

| Symbol | Description       |
| ------ | ----------------- |
| `.`    | Merge/Inheritance |
| `=`    | Evolve            |
| `@`    | Await             |
| `_.`   | Traverse          |
| `~`    | Tilde             |

Some of these characters can be combined to form certain patterns that incorporate additional behavior.

### Root evolve

> Pattern: `=.`

#### Examples

```js
const reference = '=.Dashboard.params.url'
```

```json
{
  "link": "=.Dashboard.params.url"
}
```

### Local evolve

> Pattern: `=..`

#### Examples

```js
const reference = '=..params.url'
```

```json
{
  "link": "=..params.url"
}
```

### Await

### Traverse

> Pattern: `_.`

#### Examples

```js
const reference = '___.color'
```

```json
{
  "type": "view",
  "title": "MyView",
  "style": {
    "border": {
      "color": "0x333333",
      "style": "4"
    }
  },
  "children": [
    {
      "type": "scrollView",
      "color": "0x990000",
      "children": [
        {
          "type": "list",
          "children": [
            {
              "type": "listItem",
              "itemObject": "",
              "children": [
                {
                  "type": "label",
                  "text": "___.color",
                  "style": {
                    "borderColor": "_____.style.border.color"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Objects

### Action

#### Examples

```json
{
  "actionType": "builtIn",
  "funcName": "redraw"
}
```

### Component

#### Examples

```json
{
  "type": "label",
  "dataKey": ".SignIn.formData.password"
}
```

```json
{
  "type": "button",
  "text": "Submit",
  "onClick": [
    {
      "actionType": "evalObject",
      "object": [
        {
          "=.builtIn.string.concat": {
            "dataIn": ["http://127.0.0.1", ":", "..port", "/", "..pathname"],
            "dataOut": "CreateNewAccount.request.url"
          }
        }
      ]
    }
  ]
}
```

### Emit

```json
{
  "emit": {
    "dataKey": {
      "var": "itemObject",
      "actions": [
        {
          "=.builtIn.array.getByKey": {
            "dataIn": {
              "array": "=.SelectData.businessCat",
              "key1": "name",
              "value": "var.name",
              "key2": "value"
            },
            "dataOut": "Dashboard.basicInfo.businessType"
          }
        }
      ]
    }
  }
}
```

### Goto

```json
{
  "goto": "FacilityInfo1"
}
```

### If

```json
{
  "if": [
    "=.Global.formData.providerNotesForm.id",
    { "..documentA@": "=.Global.formData.notesForm" },
    { "..documentB@": "=.Global.formData.medicalRecords" }
  ]
}
```

### Style

```json
{
  "width": "1",
  "height": "1",
  "top": "1",
  "left": "1",
  "shadow": "true",
  "textColor": "0x000033",
  "style": {
    "border": {
      "style": "2",
      "color": "0x299314",
      "width": "thin"
    }
  }
}
```

## Root / Local

```json
{
  "SignIn": {},
  "SignOut": {},
  "MenuBar": {},
  "Global": {}
}
```
