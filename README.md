# navigation-bar

一个功能完善的微信小程序导航栏组件，用于修正小程序官方Demo中navigation-bar的问题，提供更灵活的样式和交互定制。

## 功能特性

- ✅ 支持自定义标题、背景色、文字颜色
- ✅ 支持返回按钮和首页按钮的显示控制
- ✅ 支持自动导航模式（根据页面深度自动调整按钮显示）
- ✅ 支持加载状态显示
- ✅ 支持动画效果
- ✅ 支持多 slot 自定义（左侧、中间、右侧）
- ✅ 适配 iOS 和 Android 系统差异
- ✅ 修复了小程序 Demo 中导航栏组件的 Bug

## 示例

![导航栏示例](screenshots/navigator-bar.jpg)

## 安装

1. 使用 npm 安装：

```shell
npm install git@github.com:xesam/navigation-bar.git
```

2. 在微信开发者工具中执行 `构建npm` 命令（IDE 工具栏 -> 工具 -> 构建 npm）。

## 使用

### 1. 引入组件

在页面的 `.json` 文件中引入组件：

```json
{
  "usingComponents": {
    "navigation-bar": "@mini-dev/navigation-bar/index"
  }
}
```

### 2. 基本使用

在页面的 `.wxml` 文件中使用组件：

```xml
<navigation-bar 
  title="页面标题" 
  back="{{false}}" 
  color="black" 
  background="#FFF" 
/>
```

### 3. 完整使用示例

```xml
<navigation-bar 
  title="首页" 
  back="{{false}}" 
  homeButton="{{true}}" 
  color="#333333" 
  background="#FFFFFF" 
  loading="{{false}}" 
  animated="{{true}}" 
  show="{{true}}" 
  delta="1" 
  autoNav="{{false}}" 
  homePage="/pages/index/index" 
  extClass="custom-nav" 
  bind:back="onBack" 
  bind:home="onHome"
>
  <!-- 自定义左侧内容 -->
  <view slot="left">
    <text>自定义左侧</text>
  </view>
  
  <!-- 自定义中间内容 -->
  <view slot="center">
    <text style="color: red;">自定义标题</text>
  </view>
  
  <!-- 自定义右侧内容 -->
  <view slot="right">
    <text>右侧按钮</text>
  </view>
</navigation-bar>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| extClass | String | '' | 自定义类名 |
| title | String | '' | 导航栏标题 |
| background | String | '' | 导航栏背景色 |
| color | String | '' | 导航栏文字颜色 |
| back | Boolean | true | 是否显示返回按钮 |
| homeButton | Boolean | false | 是否显示首页按钮 |
| loading | Boolean | false | 是否显示加载状态 |
| animated | Boolean | true | 显示/隐藏时是否启用动画效果 |
| show | Boolean | true | 是否显示导航栏（隐藏时仍保留高度占位） |
| delta | Number | 1 | 返回按钮的返回页面深度 |
| autoNav | Boolean | false | 是否启用自动导航模式（根据页面深度自动调整按钮显示） |
| homePage | String | '' | 首页按钮跳转的页面路径（仅在 autoNav 为 true 时有效） |

## 事件说明

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| back | 点击返回按钮时触发 | { delta: 返回页面深度 } |
| home | 点击首页按钮时触发 | {} |

## 插槽说明

| 插槽名 | 说明 |
| --- | --- |
| left | 左侧区域自定义内容（仅在 back 和 homeButton 都为 false 时显示） |
| center | 中间区域自定义内容（仅在 title 为空时显示） |
| right | 右侧区域自定义内容 |

## 项目结构

```
navigation-bar/
├── miniprogram/           # 组件实现目录
│   ├── index.js          # 组件逻辑
│   ├── index.json        # 组件配置
│   ├── index.wxml        # 组件结构
│   └── index.wxss        # 组件样式
├── pages/                # 示例页面
│   ├── index/            # 首页示例
│   └── not-home/         # 非首页示例
├── screenshots/          # 示例截图
├── app.js                # 小程序入口文件
├── app.json              # 小程序全局配置
├── app.wxss              # 小程序全局样式
├── package.json          # 项目依赖配置
└── project.config.json   # 微信开发者工具配置
```

## 适配说明

组件会自动适配 iOS 和 Android 系统的差异，主要体现在：
- 安全区域的处理
- 导航栏高度的计算
- 右侧内容的内边距

## ChangeLog

### 0.0.3

- 增加自动识别返回模式的配置

### 0.0.2

- 左侧区域从 width 改为 min-width，优化布局

### 0.0.1

- 修复原始 Demo 中的样式错误
- 补全 HomeButton 图标
- 实现基本的导航栏功能

## 开发

1. 克隆项目：

```shell
git clone https://github.com/xesam/navigation-bar.git
```

2. 在微信开发者工具中打开项目

3. 修改组件代码后，重新构建 npm 即可预览效果

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
