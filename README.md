# 许强的课程网站

本项目以课程 Recap 2–4 提供的八个完整代码文件为基础，保留四页结构，完成个人信息、选题草案、图标和轻量样式优化。初始化由 AI 协助，不声称完全手写。

## 打开与运行

1. 用 VS Code 打开本目录 `my-site`。
2. 右键 `index.html` → **Open with Live Server**。
3. 浏览器地址应为 `http://127.0.0.1:5500`，不要双击 HTML 使用 `file://`；共享导航和页脚通过 fetch 加载，需要 HTTP。

## 文件说明

- `index.html`：首页及三个页面入口。
- `quotes.html`：课堂两条引用示例，练习 article、blockquote、cite；后续挑选并注明来源，扩展至二十条。
- `project.html`：五个选题方向及读者草案；已选择个人作品集，记录最终四页与最小范围。
- `about.html`：学习介绍及联系方式。个人背景尚需自己补充。
- `style.css`：共享样式；前半段是课程基础，后半段是轻量美化与手机适配。
- `nav.html` / `footer.html`：共享片段，不是独立完整页面。
- `nav.js`：加载共享片段；新增当前页高亮。
- `favicon-32.png` / `apple-touch-icon.png`：32×32 与 180×180 图标，由 512×512 母版生成。

## 下一步（不属于已完成初始化）

- 添加自己的介绍、作品和照片；按课件允许的方式，当前没有个人照片时不放 img，避免损坏图片。
- 确认五个选题和读者草案确实反映自己的想法。
- 画个人作品集 Home / Work / About / Contact 草图，优先做 Work。
- 制作 1200×630、低于 100 KB 的 Open Graph JPG/PNG；上线后每页加入完整 HTTPS 地址的 meta 标签。
- 持续真实提交 Git。当前仅为本地仓库，没有 GitHub remote，尚未 push、部署或提交课程平台。

## 课程在讲什么

HTML 描述内容是什么；CSS 控制外观；JavaScript 添加行为。header、nav、main、footer 表达页面结构。导航及页脚单独存储，避免多个页面重复维护（DRY）。Git 记录可回退的开发过程。

Your Project 是最终个人网站任务：至少四页、原创或注明来源、语义化 HTML、手机适配、至少一项交互、真实线上地址、持续 Git 历史、分享封面与图标。当前课堂四页只是起点，初始化不等于完成最终作品。

课件暂定权重：过程 20%、网站 40%、笔试 25%、答辩 15%；权重仍待批准。答辩五分钟：三分钟演示，两分钟解释设计决定。

## 来源

- [课程入口](https://webtech.landrock.io/sessions)
- [Lesson 1: Web Fundamentals](https://webtech.landrock.io/slides/phase-1-fundamentals.html)
- [Lesson 4: Structure, Navigation & DRY](https://webtech.landrock.io/slides/lesson-4-structure-nav.html)
- [Recap 2–4: 完整初始化代码](https://webtech.landrock.io/slides/recap-2-4.html)
- [Your Project](https://webtech.landrock.io/slides/project.html)
