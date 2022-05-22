---
title: assertRef
tags:
  - plugins
  - diagnostics
  - assertRef
---

Asserter for reference nodes.

This asserter will:

- Replace references with their actual value while visiting
- Report references that are unable to be fully resolved

It's important to `mark` the `rootConfig`, `appConfig`, `preload` and `pages` in the `markers` object using `DocDiagnostics` prior to visiting to ensure that references will be resolved in order of precedence.

Read [here](/diagnostics) to find out why this is recommended.

## Example

Given this current root state:

```json
{
  "Resource": {
    "user": ".Resource.formValues",
    "formValues": "..currentFormValues",
    "currentFormValues": ".Tiger.incorrect.Path.toFormValues"
  },
  "Tiger": {
    "formData": {
      "profile": "..profile"
    },
    "profile": {
      "user": ".Resource.user"
    },
    "formValues": {
      "firstName": "Bob",
      "lastName": "Gonzalez"
    }
  }
}
```

`assertRef` will generate these diagnostic messages:

```json
[
  {
    "page": "Tiger",
    "messages": [
      {
        "message": "Root reference '.Resource.user' was not resolvable",
        "type": "error",
        "results": [
          {
            "depth": 0,
            "initiator": ".Resource.user",
            "key": "Resource",
            "value": {
              "user": ".Resource.formValues",
              "formValues": "..currentFormValues",
              "currentFormValues": ".Tiger.incorrect.Path.toFormValues"
            }
          },
          {
            "initiator": ".Resource.user",
            "depth": 0,
            "key": "user",
            "value": ".Resource.formValues"
          },
          {
            "depth": 1,
            "initiator": ".Resource.formValues",
            "key": "Resource",
            "value": {
              "user": ".Resource.formValues",
              "formValues": "..currentFormValues",
              "currentFormValues": ".Tiger.incorrect.Path.toFormValues"
            },
            "path": [
              "Resource",
              "formValues",
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          },
          {
            "initiator": ".Resource.formValues",
            "depth": 1,
            "key": "formValues",
            "value": "..currentFormValues",
            "prevKey": "Resource",
            "path": [
              "Resource",
              "formValues",
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          },
          {
            "initiator": ".Resource.formValues",
            "depth": 2,
            "key": "currentFormValues",
            "value": ".Tiger.incorrect.Path.toFormValues",
            "path": [
              "Resource",
              "formValues",
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ],
            "prevKey": "formValues"
          },
          {
            "depth": 3,
            "initiator": ".Resource.formValues",
            "key": "Tiger",
            "value": {
              "formData": { "profile": { "user": ".Resource.user" } },
              "profile": { "user": ".Resource.user" },
              "formValues": { "firstName": "Bob", "lastName": "Gonzalez" }
            },
            "path": [
              "Resource",
              "formValues",
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ],
            "prevKey": "currentFormValues"
          },
          {
            "initiator": ".Resource.formValues",
            "depth": 3,
            "key": "incorrect",
            "value": undefined,
            "prevKey": "Tiger",
            "path": [
              "Resource",
              "formValues",
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          },
          {
            "initiator": ".Resource.formValues",
            "depth": 3,
            "key": "Path",
            "value": undefined,
            "prevKey": "incorrect",
            "path": [
              "Resource",
              "formValues",
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          },
          {
            "initiator": ".Resource.formValues",
            "depth": 3,
            "key": "toFormValues",
            "value": undefined,
            "prevKey": "Path",
            "path": [
              "Resource",
              "formValues",
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          }
        ]
      }
    ]
  },
  {
    "page": "Resource",
    "messages": [
      {
        "message": "Root reference '.Resource.formValues' was not resolvable",
        "type": "error",
        "results": [
          {
            "depth": 0,
            "initiator": ".Resource.formValues",
            "key": "Resource",
            "value": {
              "user": ".Resource.formValues",
              "formValues": "..currentFormValues",
              "currentFormValues": ".Tiger.incorrect.Path.toFormValues"
            }
          },
          {
            "initiator": ".Resource.formValues",
            "depth": 0,
            "key": "formValues",
            "value": "..currentFormValues"
          },
          {
            "initiator": "..currentFormValues",
            "depth": 1,
            "key": "currentFormValues",
            "value": ".Tiger.incorrect.Path.toFormValues",
            "path": [
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          },
          {
            "depth": 2,
            "initiator": "..currentFormValues",
            "key": "Tiger",
            "value": {
              "formData": { "profile": { "user": ".Resource.user" } },
              "profile": { "user": ".Resource.user" },
              "formValues": { "firstName": "Bob", "lastName": "Gonzalez" }
            },
            "path": [
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ],
            "prevKey": "currentFormValues"
          },
          {
            "initiator": "..currentFormValues",
            "depth": 2,
            "key": "incorrect",
            "value": undefined,
            "prevKey": "Tiger",
            "path": [
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          },
          {
            "initiator": "..currentFormValues",
            "depth": 2,
            "key": "Path",
            "value": undefined,
            "prevKey": "incorrect",
            "path": [
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          },
          {
            "initiator": "..currentFormValues",
            "depth": 2,
            "key": "toFormValues",
            "value": undefined,
            "prevKey": "Path",
            "path": [
              "currentFormValues",
              "Tiger",
              "incorrect",
              "Path",
              "toFormValues"
            ]
          }
        ]
      }
    ]
  },
  {
    "page": "Resource",
    "messages": [
      {
        "message": "Local reference '..currentFormValues' was not resolvable using root key 'Resource'",
        "type": "error",
        "results": [
          {
            "depth": 0,
            "initiator": "..currentFormValues",
            "key": "Resource",
            "value": {
              "user": ".Resource.formValues",
              "formValues": "..currentFormValues",
              "currentFormValues": ".Tiger.incorrect.Path.toFormValues"
            }
          },
          {
            "initiator": "..currentFormValues",
            "depth": 0,
            "key": "currentFormValues",
            "value": ".Tiger.incorrect.Path.toFormValues"
          },
          {
            "depth": 1,
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "key": "Tiger",
            "value": {
              "formData": { "profile": { "user": ".Resource.user" } },
              "profile": { "user": ".Resource.user" },
              "formValues": { "firstName": "Bob", "lastName": "Gonzalez" }
            },
            "path": ["Tiger", "incorrect", "Path", "toFormValues"]
          },
          {
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "depth": 1,
            "key": "incorrect",
            "value": undefined,
            "prevKey": "Tiger",
            "path": ["Tiger", "incorrect", "Path", "toFormValues"]
          },
          {
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "depth": 1,
            "key": "Path",
            "value": undefined,
            "prevKey": "incorrect",
            "path": ["Tiger", "incorrect", "Path", "toFormValues"]
          },
          {
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "depth": 1,
            "key": "toFormValues",
            "value": undefined,
            "prevKey": "Path",
            "path": ["Tiger", "incorrect", "Path", "toFormValues"]
          }
        ]
      }
    ]
  },
  {
    "page": "Resource",
    "messages": [
      {
        "message": "Root reference '.Tiger.incorrect.Path.toFormValues' was not resolvable",
        "type": "error",
        "results": [
          {
            "depth": 0,
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "key": "Tiger",
            "value": {
              "formData": { "profile": { "user": ".Resource.user" } },
              "profile": { "user": ".Resource.user" },
              "formValues": { "firstName": "Bob", "lastName": "Gonzalez" }
            }
          },
          {
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "depth": 0,
            "key": "incorrect",
            "value": undefined
          },
          {
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "depth": 0,
            "key": "Path",
            "value": undefined
          },
          {
            "initiator": ".Tiger.incorrect.Path.toFormValues",
            "depth": 0,
            "key": "toFormValues",
            "value": undefined
          }
        ]
      }
    ]
  }
]
```
