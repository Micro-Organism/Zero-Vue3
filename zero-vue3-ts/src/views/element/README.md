<h1>Element Plus</h1>

# 1. 概述
[Element Plus](https://element-plus.org/zh-CN/guide/design.html)，一套为开发者、设计师和产品经理准备的基于 Vue 3 的桌面端组件库。

# 2. 设计原则
- 一致 Consistency
- 反馈 Feedback
- 效率 Efficiency
- 可控 Controllability

# 3. 导航
- 侧栏导航
- 顶部导航

# 4. 安装
- 包管理器
```bash
# npm
npm install element-plus --save
# yarn
yarn add element-plus
# pnpm
pnpm add element-plus
```
- CDN
```vue
<!-- unpkg -->
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>

<!-- jsDelivr -->
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"/>
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

# 5. 引入
- 完整引入
```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
//在引入 ElementPlus 时，可以传入一个包含 size 和 zIndex 属性的全局配置对象。 
//size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。
//app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
```
- 按需引入
- 自动导入
```shell
# 首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件
npm install -D unplugin-vue-components unplugin-auto-import
```
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    // ...
    plugins: [
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
})
```
```ts
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

# 6. 国际化
## 6.1. 全局配置
## 6.2. ConfigProvider
## 6.3. 日期和时间本地化
## 6.4. CDN 用法

# 7. 自定义主题
# 8. 暗黑模式
# 9. 自定义命名空间
# 10. SSR
# 11. 内置过渡动画
# 12. 开发指南
# 13. 常见问题
# 14. 提交规范
## 14.1. 提交规则
```
feat: 新增功能
fix: 修复 bug
docs: 文档更新
style: 代码格式（不影响代码运行的变动）
refactor: 代码重构（不影响代码运行的变动）
perf: 性能优化
test: 增加测试
build: 构建流程、外部依赖变更（例如 webpack、npm 等）的修改
ci: 持续集成
chore: 修改工具相关（包括但不限于 npm、yarn、lints、editorconfig 等）
revert: 回滚到上一个版本
```
## 14.2. 提交模板
```
feat(components): [button] 我用按钮实现了某些功能

主体行和主体内容之间用空白行隔开(可以有预期时间)
通过一行或多行描述你的修改信息
每一行的首字母大写
且每一行的总字符数限制在72个以内最优, 超过了将不易于他人理解

- 你也可以通过添加子项列表符号来为内容布局
```
## 14.3. 提交格式
```
[type](scope 域): [messages]
```
