<h1>Zero-Vue3</h1>

# 1.简介
- 基于Vue3 + TypeScript + Vite + Pinia + ElementPlus + Axios + Vue Router + Sass + ESLint + Prettier + Husky + Lint-staged 技术栈
- 使用Vue3的Composition API，实现响应式数据、组件通信、路由守卫、状态管理等
- 使用ElementPlus组件库，实现UI界面
- 使用Axios进行数据请求
- 使用Vue Router进行路由管理
- 使用Sass进行样式管理
- 使用ESLint和Prettier进行代码规范和格式化
- 使用Pinia进行状态管理
- 使用Vite进行项目构建和开发
- 使用TypeScript进行类型检查和提示
- 使用Husky和Lint-staged进行代码提交前的检查和格式化

# 2.目录结构
```
├── public  // 静态资源目录
│   ├── favicon.ico // 网站图标
│   └── index.html  // 入口html文件
├── src // 源码目录
│   ├── assets  // 静态资源目录
│   ├── components  // 公共组件目录
│   ├── router  // 路由配置目录
│   ├── store   // 状态管理目录
│   ├── utils   // 工具函数目录
│   ├── views   // 页面目录
│   ├── App.vue // 根组件
│   ├── main.ts // 入口文件
│   └── shims-vue.d.ts  // ts声明文件
├── .eslintrc.js    // eslint配置文件
├── .gitignore    // git忽略文件
├── .prettierrc.js  // prettier配置文件
├── .stylelintrc.js // stylelint配置文件
├── index.html  // 入口html文件
├── package.json  // 项目配置文件
├── tsconfig.json  // ts配置文件
└── vite.config.ts  // vite配置文件
```
# 3.配置
```shell
# 克隆项目
git clone https://github.com/Zero-Team/Zero-Vue3.git
# 进入项目目录
cd Zero-Vue3
# 使用yarn配置淘宝镜像
yarn config set registry https://registry.npm.taobao.org/
# 使用yarn安装依赖
yarn install
# 使用yarn启动项目
yarn dev
# 使用yarn打包项目
yarn build
# 构建测试环境
yarn build:stage
# 构建生产环境
yarn build:prod
# 构建预发布环境
yarn build:preview
# 构建开发环境
yarn build:dev
```

# 4.技术栈
- Vue3
- TypeScript
- Vite
- Pinia
- ElementPlus
- Axios
- Vue Router
- Sass
- ESLint
- Prettier
- Husky
- Lint-staged

# 5.功能
1. 登录
   输入用户名和密码，点击登录按钮
2. 首页
   首页展示系统信息，包括系统名称、版本号、版权信息等
3. 用户管理
   用户管理展示用户列表，包括用户名、昵称、性别、邮箱、手机号、状态、创建时间、操作等
4. 角色管理
   角色管理展示角色列表，包括角色名称、角色描述、状态、创建时间、操作等
5. 菜单管理
   菜单管理展示菜单列表，包括菜单名称、菜单路径、菜单图标、菜单状态、创建时间、操作等
6. 部门管理
   部门管理展示部门列表，包括部门名称、部门描述、状态、创建时间、操作等
7. 字典管理
   字典管理展示字典列表，包括字典名称、字典类型、字典值、字典标签、状态、创建时间、操作等
8. 操作日志
   操作日志展示操作日志列表，包括操作用户、操作类型、操作时间、操作IP、操作结果、操作详情等
9. 登录日志
   登录日志展示登录日志列表，包括登录用户、登录时间、登录IP、登录结果、登录详情等
10. 通知公告
    通知公告展示通知公告列表，包括公告标题、公告内容、公告类型、公告状态、创建时间、操作等
11. 代码生成
    代码生成展示代码生成列表，包括生成模板、生成路径、生成时间、操作等
12. 系统监控
    系统监控展示系统监控信息，包括CPU使用率、内存使用率、磁盘使用率、网络使用率等
13. 个人中心
    个人中心展示个人信息，包括用户名、昵称、性别、邮箱、手机号、头像、操作等
14. 其他功能
    其他功能展示其他功能列表，包括功能名称、功能描述、功能状态、创建时间、操作等

# 注意事项
- 请确保您的开发环境已经安装了Node.js和npm
