# 🌈 react-image-dangling

A React image component. Dangling interaction effect.

[![npm](https://img.shields.io/npm/v/react-image-dangling?style=flat-square&color=orange)](https://www.npmjs.com/package/react-image-dangling) [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) ![](https://github.com/image-component/react-image-dangling/workflows/CI/badge.svg) ![](https://img.shields.io/github/last-commit/image-component/react-image-dangling/main?color=%23722ed1&style=flat-square) [![codecov](https://codecov.io/gh/image-component/react-image-dangling/branch/main/graph/badge.svg?token=PYD7S8BHOB)](https://codecov.io/gh/image-component/react-image-dangling) ![](https://img.shields.io/npm/dt/react-image-dangling?color=%23eb2f96&style=flat-square) ![](https://img.shields.io/npm/l/react-image-dangling?style=flat-square&color=red)

## 📚 Example

Online: https://image-component.github.io/react-image-dangling/

## 🌀 Template

https://github.com/one-template/react-component-template

## 📦 Install

```bash
npm i react-image-dangling
# or
yarn add react-image-dangling
```

## 🎉 Usage

```js
import ImageDangling from 'react-image-dangling';
import 'react-image-dangling/assets/index.css';

const src =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

export default () => (
  <>
    <ImageDangling src={src} />
  </>
);
```

## 📔 API

| Property   | Description                                                                                                                                                                        | Type              | Required | Default | Version |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------- | ------- | ------- |
| alt        | The alt of the image.                                                                                                                                                              | string            | ✖        | -       | 1.0.0   |
| blendMode  | Whether to enable `mix-blend-mode`.<br/> When set `true`, the default is `soft-light`. More see [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode). | boolean \| string | ✖        | false   | 1.0.0   |
| className  | Component extra class.                                                                                                                                                             | string            | ✖        | -       | 1.0.0   |
| hoverScale | The hover scale of the image. Require `>= 1 && <=5`.                                                                                                                               | number            | ✖        | 1.6     | 1.0.0   |
| hoverSlope | The hover slope of the image. Require `>= 10 && <=90`.                                                                                                                             | number            | ✖        | 60      | 1.0.0   |
| shadeColor | To set the mixed background color when use `blendMode`.                                                                                                                            | string            | ✖        | `#000`  | 1.0.0   |
| radius     | The border radius of the component.                                                                                                                                                | number            | ✖        | 8       | 1.0.0   |
| src        | The src of the image.                                                                                                                                                              | string            | ✔        | -       | 1.0.0   |
| style      | Component extra style.                                                                                                                                                             | CSSProperties     | ✖        | -       | 1.0.0   |
| width      | The width of the image.                                                                                                                                                            | number            | ✖        | 300     | 1.0.0   |

## 🔨 Development

```
yarn
yarn start
```

## License

[MIT](https://github.com/image-component/react-image-dangling/blob/main/LICENSE)
