# jest-bundle

A simple tool to bundle a JavaScript project using Babel.

## Usage

```bash
node index.mjs
```

## Options

- `-o, --output`: The output file.
- `-e, --entry`: The entry file.

## Example

```bash
node index.mjs -o bundle.js -e index.js
```

## TODO

- [ ] 添加一个 `--minify` 标志，该标志会在捆绑包中的每个单独文件上运行类似 `terser` 的压缩器。
- [ ] 添加一个缓存来存储转换后的文件，并且只重新编译已更改的文件。
- [ ] Medium：了解源映射并为您的包生成相应的 `.map` 文件。
- [ ] Medium：添加一个 `--dev` 选项，该选项启动一个 HTTP 服务器，通过 HTTP 端点提供打包后的代码。
- [ ] 高级：在实现 HTTP 服务器后，使用 `jest-haste-map` 的 `watch` 函数来监听更改并自动重新打包。
- [ ] 高级：了解导入映射，并将打包器从基于 `require` 的模式更改为与原生 ESM 兼容！
- [ ] 高级：热重载：调整运行时，使其能够通过先注销然后重新运行模块及其所有依赖项来更新模块。
- [ ] 高级：将上述打包器用另一种编程语言如 Rust 重写。

## 参考

1. [Building a JavaScript Bundler](https://cpojer.net/posts/building-a-javascript-bundler)
2. [jest-worker](https://github.com/jest-community/jest-worker)
