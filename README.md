# teager-vite-template

该模板为开发web时可使用的通用模板，当PC端和移动端要求整合为一个项目时可使用该模板

1. 使用框架：Vue3
2. 构建打包工具：Vite
3. 组件库：ElementPlus+Vant
4. 页面管理插件：Vue-Router
5. 状态管理工具：Pinia
6. 开发语言：Typescript

# Tips

1. 虽然该模板可同时开发移动端与PC端，但出于库的引用优化与性能考虑建议使用单端开发模板
2. 可以使用yarn和pnpm，但考虑到部分库可能支持的版本不同，建议使用npm（新版npm与yarn性能已经相差不多了）
3. 添加新的引用库或插件时记得锁定版本

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
