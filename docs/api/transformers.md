---
title: Transformers
tags:
  - api
  - transformers
---

## Emit

## Eval

## If

## Merge

## Replace

## Processors

### Actions

- if
- =.builtIn
- await ref
  - assign
- get
  - merge
  - eval merge
- eval ref
  - call ecos api
- boolean
- continue
- goto
- return

### User events

- emit
- action object
- goto
- if

### `=.builtIn`

#### dataIn

- get
  - merge
  - eval merge

#### dataOut

- assign

### Emit

#### dataKey

##### Valid placeholders

- listObject dataObject
  - dataKey <-- dataObject path
  - accessed by actions
