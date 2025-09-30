import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

const customElements = ["mjx-container"];

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
});
