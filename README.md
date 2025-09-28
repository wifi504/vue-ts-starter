# Vue 3 + TypeScript + Vite 的初始化工程模板

每次开新项目都是从官方开始，但是发现有很多后续操作一模一样，而且会浪费很多配置时间，此模板是一个可以直接开始优雅写项目的初始工程

## 脚本概览

| 脚本名     | 命令行                   | 功能                                            |
| ---------- | ------------------------ | ----------------------------------------------- |
| dev        | vite                     | 启动 Vite 开发服务器                            |
| build      | vue-tsc -b && vite build | 执行 Vue SFC 类型检查后开始打包构建项目         |
| type-check | vue-tsc -b               | 只执行 Vue SFC 类型检查                         |
| build-only | vite build               | 直接打包构建项目                                |
| preview    | vite preview             | 预览打包产物                                    |
| lint       | eslint .                 | 检查项目代码格式问题                            |
| lint:fix   | eslint . --fix           | 检查项目代码格式问题并执行格式化                |
| gen-routes | gen-vue-routes           | 根据项目 `views` 目录结构生成 `Vue Router` 配置 |

## 依赖概览

- 运行时依赖

| 名称       | 版本    | 描述                |
| ---------- | ------- | ------------------- |
| vue        | ^3.5.18 | Vue.js 框架环境     |
| vue-router | 4.5.1   | Vue Router 前端路由 |
| pinia      | ^3.0.3  | Pinia 全局状态管理  |

- 开发时依赖

| 名称                   | 版本    | 描述                                                     |
| ---------------------- | ------- | -------------------------------------------------------- |
| @ezview/eslint-config  | ^1.0.0  | ESLint 配置文件                                          |
| @ezview/gen-vue-routes | ^1.1.2  | Vue Router 配置文件自动生成                              |
| @types/node            | ^24.2.0 | Node 环境类型定义                                        |
| @vitejs/plugin-vue     | ^6.0.1  | Vue 开发的 Vite 插件                                     |
| @vue/tsconfig          | ^0.7.0  | `*.ts` / `*.tsx` / `*.vue` 文件的 `tsconfig.json` 父配置 |
| eslint                 | ^9.32.0 | 代码格式化工具                                           |
| less                   | ^4.4.0  | CSS预处理器                                              |
| typescript             | ~5.9.2  | TypeScript                                               |
| vite                   | ^7.1.5  | Vite                                                     |
| vue-tsc                | ^3.0.5  | Vue SFC 类型检查                                         |

## 关于 ezview

这是一个**让前端变得 Easy 的组件/工具库**

前往 [wifi504/ezview](https://github.com/wifi504/ezview) 查看详情
