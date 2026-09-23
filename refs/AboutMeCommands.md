Build a high-conversion, professional personal brand and portfolio website following the modern personal website blueprint (clear positioning, personal narrative, problem-solving showcase, and high-impact CTA) without any external social links (no LinkedIn, no GitHub).

### Deployment Requirement (GitHub Pages)
- **Deployment Target**: GitHub Pages (Static Hosting).
- **Configuration Requirement**: Must be built as a fully static export (e.g., if using Next.js, configure `output: 'export'`, `images: { unoptimized: true }`, and proper relative/base paths in `next.config.js`; or output clean static HTML/CSS/JS via Vite). Ensure all asset links work seamlessly under GitHub Pages domain structure (`https://<username>.github.io/<repo>/` or custom domain).

---

### Target Positioning
Senior Software Engineer (5+ yrs) specializing in Android OEM Systems, XR Middleware (WaveXR/OpenXR), and Unity Runtime Optimization, transitioning into Product Quality Verification (SDET) and Technical Product Planning (TPM).

---

### Important Constraints
- **NO LinkedIn, GitHub, or social media links**.
- The primary Call-to-Action (CTA) across the entire site should guide visitors directly to the **Interactive Game Projects (Live Demos hosted on GCP)**.

---

### Page Architecture & Flow (Based on Personal Brand Best Practices)

#### 1. Hero Section (Above the Fold - Clear Value Proposition)
- **Headline**: 李育齊 (Yu-Chi Li)
- **Value Hook**: 5 年跨 Android 系統層、XR SDK 與 Unity 效能實戰，為產品打造流暢、穩定的互動體驗。
- **Sub-headline**: 從底層事件排查到前端 3D 渲染，用嚴謹的工程直覺把關產品質量與技術落地。
- **Primary CTA**: "立即試玩作品 (Play Demos)" -> Smooth scroll to Section 3.
- **Secondary CTA**: "聯絡我 (Get in Touch)" -> Smooth scroll to Contact section.

#### 2. About Me: The Story & Vision (個人故事與理念)
Focus on the narrative rather than repeating a static resume:
- **STAGE 01 (研發根基與 XR 啟航)**: 從中央大學軟工碩士投入 VR 軟硬整合與 EEG 腦電信號即時回饋研究，到 5 年深入 Android OEM 系統服務與 XR SDK 開發。
- **STAGE 02 (底層磨練與架構自覺)**:
  - **0 到 1 多媒體管線研發**：自主打造底層投屏、原生錄影與 RTMP 直播推流管線，打通硬體編碼與雙緩衝機制。
  - **Unity 記憶體與效能攻堅**：深入 Profiler 追蹤瓶頸，攻克高負載 OOM 記憶體崩潰、GC 負擔與瞬間掉幀 (Jank)。
  - **架構自覺與源頭防護**：嚴格把關邊界條件與物件生命週期，體會「好產品始於嚴謹邊界」，重在源頭預防缺陷。
- **STAGE 03 (產品質量與技術規劃)**: 目前致力於將深厚的底層除錯直覺與架構思維，投注於「產品質量把關 (SDET / System QA)」與「功能規劃可行性評估 (TPM)」，在產品早期預防問題，打造市場級的高品質應用。
- **STAGE 04 (AI 賦能與創新實踐)**:
  - **玩法機制原型極速驗證**：借助生成式 AI 輔助核心機制設計與邏輯原型實作，大幅縮短發想到可玩版本的迭代週期。
  - **演算法調優與數值平衡**：結合 AI 調校地城隨機生成、消除矩陣判斷與彈幕波次數值曲線，確保體感流暢平衡。
  - **極致人效獨立落地研發**：整合 AI 代碼重構、概念視覺生成與雲端容器化部署，以極高人效獨立完成多款上線遊戲。

#### 3. Core Engineering Projects (代表性工程實績與核心專案)
Present 3 core high-level architectural projects:
1. **VR 系統級多媒體管線與 RTMP 直播系統 (0 到 1 自主研發)**:
   - 整合 Android `MediaCodec` 硬體編碼與 RTMP 協定，重構 Surface 生命週期與雙緩衝管線，打通低延遲 YouTube 直播、原生錄影與 Miracast 投屏，確保前台 3D 渲染與後台管線互不干擾、長期穩定運行。
2. **WaveXR / OpenXR 跨平台 Unity SDK 架構與硬體整合**:
   - 負責雙版本 SDK 介面擴充與硬體輸入事件轉接層抽象，支援周邊外設熱插拔與即時鍵位映射，大幅加速新硬體適配進度並維持企業客戶相容性。
3. **VIVE Sync 企業級虛擬協作效能調優**:
   - 深入排查多人虛擬會議應用中的效能痛點，重構相機快照管線，推動 ASTC 紋理壓縮規範、動態降採樣與視野遮擋剔除 (Occlusion Culling)，全面解決高負載掉幀與記憶體突波問題。

#### 4. Core Competencies & Skills (核心能力矩陣)
Clean categorized visual tags:
- **Languages**: C#, Java, C/C++, Python, TypeScript/JS
- **Platforms & Frameworks**: Android OS (System UI / OEM Service), Unity Engine, WaveXR, OpenXR, VR/XR HMDs (Standalone & PCVR), IPC & Architecture, GCP Cloud Run
- **Testing & Diagnostics (SDET)**: Unity & Memory Profiler, Snapdragon Profiler, Draw Call & GC Opt, Android Logcat/ADB, RenderDoc/GLES, Systrace/Perfetto
- **Multimedia Architecture**: MediaCodec, RTMP Live Streaming, Miracast (Wi-Fi Display), Surface Lifecycle, EGL/GLES Context

#### 5. Academic Background (學術背景)
- **國立中央大學 (NCU) - 軟體工程碩士**: 專注於 EEG 腦波信號處理結合 VR 虛擬實境之生理回饋與互動復健系統。

#### 6. Professional Work Experience (產業經歷與工作實績)
- **宏達國際電子股份有限公司 (HTC) - RD 軟體研發工程師 (2021/04 – 2026/02・5 年)**:
  - **Android OEM 系統層應用與多媒體架構開發**：負責 VR 裝置之 OEM 系統級應用與 System UI 全生命週期維護，深入排查跨系統硬體事件（Input Dispatching）與穩定度問題；自主打造系統級多媒體管線，整合原生截圖錄影、Miracast 無線投屏與 RTMP 即時推流功能。
  - **XR 跨平台 SDK 架構客製化與硬體整合**：維護與擴充 WaveXR 及 Wave OpenXR Unity SDK，針對新硬體配件設計輸入事件映射與擴充功能，確保底層驅動至 Unity C# API 的高相容性、熱插拔機制與企業客戶穩定度。
  - **Unity 3D 執行期深度優化 (VIVE Sync)**：主導企業級虛擬協作 VR 專案「VIVE Sync」之效能與記憶體調校。善用 Profiler 工具定位瓶頸，優化記憶體拷貝管線、RenderTexture 生命週期管理、推動 ASTC 壓縮規範及引入 Occlusion Culling，有效消除操作卡頓並降低記憶體峰值。

#### 7. Featured Interactive Works: AI Game 開發經歷 (GCP Live Demos)
A visually appealing 3-card showcase for AI-assisted personal game builds with live play buttons:
- **Game Project 1**:
  - Title: GreedTemple (貪婪神廟)
  - Tag: AI 輔助獨立研發 / Roguelike 遺跡探索
  - Elevator Pitch: 深度導入 AI 協同開發工作流：透過 AI 進行地城數值曲線設計、隨機房間生成邏輯重構與快速代碼迭代，並輔助生成概念氛圍海報與視覺素材，高效完成從玩法構想、雲端部署到即時運行的完整閉環。
  - Tech: AI 協同開發 / Unity / C# / GCP Cloud Run
  - Live Link: `https://greedtemple-311470842578.asia-east1.run.app/`
  - Button Text: "線上直接試玩 (Play in Browser)"
- **Game Project 2**:
  - Title: 蛇來蛇去 (Snake Tetris)
  - Tag: AI 輔助機制創新 / 貪食蛇 × 俄羅斯方塊
  - Elevator Pitch: 結合 AI 程式碼輔助重構與快速機制原型驗證，巧妙將經典貪食蛇的機動走位與俄羅斯方塊的空間消行邏輯結合；借助 AI 工具加速碰撞矩陣判斷與計分演算法調校，以極高效率完成輕量流暢的創新雙核心遊戲體驗。
  - Tech: AI 原型迭代 / TypeScript / React / HTML5 Canvas / GCP Cloud Run
  - Live Link: `https://snake-tetris-32984756579.asia-east1.run.app/`
  - Button Text: "線上直接試玩 (Play in Browser)"
- **Game Project 3**:
  - Title: ElementSurvivor (元素倖存者)
  - Tag: AI 輔助技能設計 / 割草 Roguelite
  - Elevator Pitch: 在多元素合成與技能封印機制的設計中，運用 AI 協助規劃九重印訣施法邏輯與怪物彈幕波次數值；結合物件池管理與渲染批次架構，兼具豐富技能流派演繹與極速流暢打擊反饋。
  - Tech: AI 數值平衡 / Unity 3D / C# / Shader Graph / Unity Play
  - Live Link: `https://play.unity.com/en/games/0e121b82-8f17-426b-8b15-3cb9d3f72570/elementsurvivor`
  - Button Text: "線上直接試玩 (Play in Browser)"

#### 8. Contact & Footer (極簡無干擾結尾)
- **Direct Mailto**: Header, Hero CTA, and Mobile Nav direct to `mailto:yuchi.li.dev@gmail.com`.
- **Resume Preview**: Footer button triggers clean interactive modal with complete HTC experience & Future Career Vision.
- **Strict Rule**: NO external social media, NO LinkedIn, NO GitHub links. Bottom contact banner removed per user preference.

---

### UI & Aesthetics
- **Style**: Modern, clean dark mode (`#0a0a0c` background, slate cards `#18181b`, vibrant indigo/cyan accents).
- **Typography**: Clean sans-serif with readable line spacing for narrative storytelling.
- **Interactions**: Smooth scroll transitions, subtle hover elevations on project cards, and sticky navigation for easy access.