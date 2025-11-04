import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import { withMermaid } from "vitepress-plugin-mermaid";

const customElements = ["mjx-container"];

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "My Architect Tutorials",
  description: "",
  base: "/MyArchitectTutorials",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "真题解析", link: "/src/analysis/2025上半年" },
    ],

    sidebar: [
      {
        text: "笔记",
        items: [
          {
            text: "Part1-了解软考相关内容",
            link: "/src/Part1-了解软考相关内容",
          },
          {
            text: "Part2-初次尝试学习软考",
            link: "/src/Part2-初次尝试学习软考",
          },
          {
            text: "Part3-信息系统架构设计理论",
            link: "/src/Part3-信息系统架构设计理论",
          },
          {
            text: "Part4-ABSD 基于体系结构的软件设计",
            link: "/src/Part4-ABSD 基于体系结构的软件设计",
          },
          { text: "Part5-软件架构风格", link: "/src/Part5-软件架构风格" },
          {
            text: "Part6-特定领域软件体系结构",
            link: "/src/Part6-特定领域软件体系结构",
          },
          { text: "Part7-系统质量属性", link: "/src/Part7-系统质量属性" },
          { text: "Part8-架构评估", link: "/src/Part8-架构评估" },
          { text: "Part9-软件可靠性", link: "/src/Part9-软件可靠性" },
          { text: "Part10-软件工程", link: "/src/Part10-软件工程" },
          { text: "Part11-数据库设计", link: "/src/Part11-数据库设计" },
          {
            text: "Part12-信息系统架构设计",
            link: "/src/Part12-信息系统架构设计",
          },
          {
            text: "Part13-层次式架构设计",
            link: "/src/Part13-层次式架构设计",
          },
          {
            text: "Part14-云原生架构设计",
            link: "/src/Part14-云原生架构设计",
          },
          {
            text: "Part15-面向服务架构设计",
            link: "/src/Part15-面向服务架构设计",
          },
          {
            text: "Part16-嵌入式系统架构设计",
            link: "/src/Part16-嵌入式系统架构设计",
          },
          { text: "Part17-通信架构设计", link: "/src/Part17-通信架构设计" },
          { text: "Part18-安全架构设计", link: "/src/Part18-安全架构设计" },
          {
            text: "Part19-大数据架构设计",
            link: "/src/Part19-大数据架构设计",
          },
          { text: "Part20-论文", link: "/src/Part20-论文" },
          {
            text: "Part21-AI完善项目框架与技术.md",
            link: "/src/Part21-AI完善项目框架与技术.md",
          },
          {
            text: "Part22-论软件可靠性.md",
            link: "/src/Part22-论软件可靠性2.md",
          },
          {
            text: "Part23-论软件可观测性设计.md",
            link: "/src/Part23-论软件可观测性设计.md",
          },
          {
            text: "Part24-论网关在云原生微服务架构中的应用.md",
            link: "/src/Part24-论网关在云原生微服务架构中的应用.md",
          },
          {
            text: "Part25-论云原生微服务架构的应用.md",
            link: "/src/Part25-论云原生微服务架构的应用.md",
          },
          {
            text: "Part26-论系统安全架构设计及其应用.md",
            link: "/src/Part26-论系统安全架构设计及其应用.md",
          },
          {
            text: "Part27-Lambda 架构的核心思想与背景.md",
            link: "/src/Part27-Lambda 架构的核心思想与背景.md",
          },
          {
            text: "Part28-存储计算分离模式.md",
            link: "/src/Part28-存储计算分离模式.md",
          },
          {
            text: "Part29-微服务治理技术的核心范畴.md",
            link: "/src/Part29-微服务治理技术的核心范畴.md",
          },
          {
            text: "Part30-RAG 技术的核心原理.md",
            link: "/src/Part30-RAG 技术的核心原理.md",
          },
          {
            text: "Part31-缓存技术的核心类型.md",
            link: "/src/Part31-缓存技术的核心类型.md",
          },
          {
            text: "Part32-DevOps开发-运维一体化.md",
            link: "/src/Part32-DevOps开发-运维一体化.md",
          },
          {
            text: "Part33-AI 应用测试方法.md",
            link: "/src/Part33-AI 应用测试方法.md",
          },
          { text: "Part34-AI训练理论.md", link: "/src/Part34-AI训练理论.md" },
        ],
      },
      {
        text: "真题解析",
        items: [{ text: "2025上半年", link: "/src/analysis/2025上半年" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/PishoLu/MyArchitectTutorials",
      },
    ],
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  mermaid: {},
});
