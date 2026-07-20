# Personal Website — 開發指引

## 技術棧
- 框架：**Astro** — 靜態網站產生器
- CSS：**Tailwind CSS**
- 套件管理：**pnpm**
- 部署：**GitHub Pages**（透過 GitHub Actions 自動部署）

## 初次設定
```bash
pnpm create astro@latest . --template basics --yes
pnpm astro add tailwind
pnpm install
```

## 常用指令
- `pnpm dev` — 啟動開發伺服器（預設 `http://localhost:4321`）
- `pnpm build` — 建置到 `dist/`
- `pnpm preview` — 本地預覽 build 結果

## 部署
建立 `.github/workflows/deploy.yml`，使用 `actions/configure-pages` + `actions/deploy-pages` 自動部署 `main` 分支。`astro.config.mjs` 需設定：
```js
site: 'https://<username>.github.io',
base: '/Personal_Website',
```

## 專案慣例
| 路徑 | 用途 |
|------|------|
| `src/pages/` | 頁面路由（index.astro, about.astro, portfolio.astro） |
| `src/components/` | 可複用元件（Navbar.astro, ProjectCard.astro） |
| `src/layouts/` | 佈局模板（Layout.astro） |
| `public/` | 靜態資源 |

## 導覽列需求
頂部導覽列兩個項目：
1. **關於我** — 個人資訊（多益分數、獎項等）
2. **作品集** — 過去作品展示

## 開發慣例
- 預設暗色系主題
- 元件使用 `.astro` 單檔案格式，除非有複雜狀態邏輯才引入 framework component
