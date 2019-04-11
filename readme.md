# semantic-ui-react-input-file

a [semantic-ui-react](https://react.semantic-ui.com) compatible input control

![](./img/input-file.png)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/cdaringe/semantic-ui-react-input-file.svg)](https://greenkeeper.io/) [![CircleCI](https://circleci.com/gh/cdaringe/semantic-ui-react-input-file.svg?style=svg)](https://circleci.com/gh/cdaringe/semantic-ui-react-input-file) [![TypeScript package](https://img.shields.io/badge/typings-included-blue.svg)](https://www.typescriptlang.org)

## install

`yarn add semantic-ui-react-input-file`

## usage

```tsx
import { InputFile } from 'semantic-ui-react-input-file'

<InputFile
  button={{ ...buttonProps }}
  input={{
    id: 'input-control-id',
    onChange: handleUpload
  }}
/>
```
