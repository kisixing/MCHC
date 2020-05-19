# README

## 开发规范

### git 规范

1. **不要** 向 master 和 dev 直接发起 push。

2. 开发代码时基于 dev 分支，checkout 自己的分支，单次 PR **必须** 确保项目可以正常运行。

3. 单次 commit **尽量** 符合如下规范：

- feat(新增功能)
- fix(修复 bug )
- refactor(重构)
- test(单元测试)
- docs(完善文档)

```
git commit -m "feat(产品页面): 新增产品页面"
```

### 文件命名规范

1. 页面文件夹采用小写，单词用 **-** 分割。
2. 组件文件和文件夹采用大驼峰。

### 类、函数命名规范

1. 类名大驼峰。
2. 函数小驼峰。
3. 命名尽量见名知意。

## 项目启动

1. 复制项目根目录下 .env.example 为 .env 文件，并根据情况修改自己的配置

2. 安装所需 packages

```bash
yarn install
# or
npm run install
```

### 开发模式

需要 mock 的情况

```bash
yarn dev
# or
npm run dev
```

不需要 mock 的情况

```bash
yarn dev:no-mock
# or
npm run dev:no-mock
```

### 生产模式

生产模式编译并运行

```bash
yarn prod
# or
npm run start
```

已编译的情况下运行生产模式

```bash
yarn start
# or
npm run start
```
