---
title: github_trigger_info
description: 使用 爬蟲抓取遊戲相關最新資訊
link: https://github.com/SunwenXD/github_trigger_info
tags:
  - "@python"
  - "@爬蟲"
  - "@dc"
  - "@ai"
  - "@llm"
  - "@github action"
---

## 專案概述

這是一個基於 **httpx** 爬取遊戲想關資料並使用discord的聊天室公告出來，github會有排程定時查看是否有最新的資料，如果有資料會交由llm進行整理跟遊玩體驗相關的資料再發布 ，並且修改state.json，讓之後查看state和最新是否有差別再決定是否進行發布。

## 使用技術

- **github action** — 排程自動化
- **Groq API** — LLM 摘要生成
- **httpx** 、**beautifulsoup4**— 爬蟲
- **Discord Webhook** - 通知發送

## 核心功能

1. github action自動抓取遊戲資料
2. 透過llm做資料清洗 
3. 自動發佈在discord聊天室

## 成果

- **AI 智慧資訊萃取**：結合 Groq API (LLM) 自動清洗數據並生成摘要，過濾網頁雜訊，直接提供重點遊玩建議與體驗資訊，解決資訊過載問題。
- **零伺服器成本部署**：完全依賴 GitHub Actions 進行排程觸發，無需租用 24/7 Linux 伺服器，在實現全天候監測的同時顯著節省運算成本。
- **社群即時串聯**：透過 Discord Webhook 實現秒級通知，讓社群成員能第一時間掌握遊戲更新動態，大幅減少社群管理者的維護時間。
- **智能去重機制**：導入 state.json 狀態比對機制，系統會自動判斷與歷史紀錄的差異，消除重複推播干擾，確保使用者僅收到有效的新資訊。