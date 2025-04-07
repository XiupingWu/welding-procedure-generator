# 焊接工艺参数生成器

这是一个基于Next.js构建的焊接工艺参数生成应用，用于根据输入的材料特性和焊接条件，生成推荐的焊接工艺参数。

## 功能特点

- 支持多种材料类型（碳钢、不锈钢等）
- 根据板材厚度、坡口角度、钝边、间隙等参数生成焊接建议
- 可配置增透剂使用选项
- 实时计算并显示推荐的焊接角度和峰值电流

## 快速开始

首先，克隆项目并安装依赖：

```bash
git clone https://github.com/your-username/welding-procedure-generator.git
cd welding-procedure-generator
npm install
```

然后，运行开发服务器：

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 使用说明

1. 在表单中选择材质类型（碳钢/不锈钢）
2. 输入焊接工件的相关参数：
   - 厚度 (mm)
   - 坡口角度 (°)
   - 钝边 (mm)
   - 间隙 (mm)
   - 直径 (mm)
3. 选择是否使用增透剂
4. 点击"生成焊接参数"按钮
5. 查看系统推荐的焊接角度和峰值电流

## 技术栈

- [Next.js](https://nextjs.org/) - React框架
- [React](https://reactjs.org/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式

## 部署

本应用可以部署到Vercel平台：

```bash
npm run build
npm run start
```

或者使用Vercel的一键部署功能：[部署到Vercel](https://vercel.com/new)

## 贡献指南

欢迎提交问题和拉取请求来完善此项目。

## 许可证

[MIT](LICENSE)