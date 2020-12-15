# 🌈 react-component-template

A template for rapid development of React components, which satisfies component development, testing, packaging, release, document development, document packaging, and document deployment.

English | [简体中文](./README.zh-CN.md)

## 💖 How to use?

![](./assets/1.png)

## 💎 Catalog Introduction

```
├── assets                 Store fixed resources
├── docs                   Component documentation
│   ├── example            Demo tsx
│   ├── changelog.md       Used to display component history
│   └── demo.md            Used to display component Demo
├── src                    Component home directory
│   ├── index.ts           Component registration
│   └── template.tsx       Component implementation code
├── tests                  Component test code
│   ├── __snapshots__      Snapshot test file output without manual modification
│   ├── setup.ts           Init jest script
│   └── index.spec.tsx     Test file
├── .eslintrc.js           eslint config
├── .fatherrc.ts           father config
├── .umirc.ts              dumi config
├── jest.config.js         jest config
└── tsconfig.json          typescript config
```

The rest of the documents can be consulted by yourself.

## 🤖 Command introduction

| Name                     | Description              | Remarks                                                                                                            |
| ------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `npm run start`          | Component development    | Document usage [dumi](https://github.com/umijs/dumi), component development and documentation development together |
| `npm run test`           | Component test           | -                                                                                                                  |
| `npm run lint`           | eslint verify            | -                                                                                                                  |
| `npm run build`          | Component packaging      | Use [father](https://github.com/umijs/father)                                                                      |
| `npm run coverage`       | Code coverage review     | -                                                                                                                  |
| `npm publish`            | Component release        | It is recommended to remove prepublishOnly for the first time                                                      |
| `npm run docs:build`     | Document packaging       | -                                                                                                                  |
| `npm run docs-dev:build` | Document packaging       | Use dumi dev environment                                                                                           |
| `npm run docs:deploy`    | Document release         | The default is to use GitHub Pages                                                                                 |
| `npm run deploy`         | Document package release | -                                                                                                                  |

## 🍭 Component

### Development

```bash
npm i
npm run start
# http://localhost:8080/
```

### Test

```
npm run test
```

### Unpack

```bash
npm run build
```

- Use [father](https://github.com/umijs/father)
- More view official website configuration
- The package file is generated in the dist file by default

### Release

> `package.json` introduction

1. If you want to publish npm, `private` needs to be set to `false`.
2. The build command can be modified according to actual conditions.
3. After main decides to install the component, import points to it.
4. files Contains the files at the time of publishing, and includes README.md by default.
5. Others can be understood according to the meaning of the word.

## 📚 Documentation

### Start

```bash
npm run start
```

### Online preview

https://one-template.github.io/react-component-template/

### Description

- Use [dumi](https://github.com/umijs/dumi)
- Use basic layout, please add more by yourself
- Because the document is deployed on GitHub Pages, the `base` and `publicPath` of `.umirc.ts` are set to the project name
- One 🌰 : [ant-design-colorful](https://ant-design-colorful.github.io/ant-design-colorful/)

## 🎈 Aide

- [Quickly modify the project name](./rename.ts)
- [Issue template](https://github.com/one-template/issue-template)
- [PR template](https://github.com/one-template/pr-template)
- [Actions use](https://github.com/github-actions-workflows/.github)

## 🎉 Who are using？

- [react-image-shadow](https://github.com/image-tool/react-image-shadow)

## License

[MIT](https://github.com/one-template/react-component-template/blob/main/LICENSE)
