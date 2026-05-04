const slidesTrack = document.querySelector("#slidesTrack");
const slides = Array.from(document.querySelectorAll(".slide"));
const sliderStage = document.querySelector(".slider-stage");
const prevButton = document.querySelector("#prevSlide");
const nextButton = document.querySelector("#nextSlide");
const navButtons = Array.from(document.querySelectorAll("[data-slide-target]"));
const langToggleButton = document.querySelector("#langToggle");
const slideCounter = document.querySelector("#slideCounter");
const slideName = document.querySelector("#slideName");
const siteNav = document.querySelector(".site-nav");
const metaDescription = document.querySelector('meta[name="description"]');
const i18nElements = Array.from(document.querySelectorAll("[data-i18n]"));
const i18nAriaElements = Array.from(document.querySelectorAll("[data-i18n-aria-label]"));
const i18nAltElements = Array.from(document.querySelectorAll("[data-i18n-alt]"));

const languageStorageKey = "personal-homepage-language";
const slideRouteMap = {
  home: 0,
  experience: 1,
  papers: 2,
  projects: 3,
  blog: 4,
  contact: 5,
};
const translations = {
  en: {
    documentTitle: "Karry (zzuyu) | Personal Homepage",
    metaDescription: "Karry (zzuyu)'s personal homepage, focused on AI Coding, selected works, and contact.",
    langToggle: "中文",
    langToggleAria: "Switch to Chinese",
    primaryNavAria: "Primary",
    siteMarkAria: "Go to intro",
    prevSlideAria: "Previous slide",
    nextSlideAria: "Next slide",
    introKicker: "Personal Homepage",
    heroTitle: "Hi, I'm Karry (zzuyu)",
    introLabel: "Currently",
    introText:
      "I currently work on <strong>AI-related initiatives</strong> at <strong>HUAWEI</strong>, with a focus on <strong>ToB LLM applications</strong> and <strong>product design</strong>.",
    introQuote:
      '"Beyond the instructions of a boss and the conditioning of society, what do you actually want to create?"',
    introTagCompany: "Huawei",
    introTagRole: "LLM Algorithm Engineer & Product Manager",
    introTagAICoding: "AI Coding",
    introGithub: "GitHub / coming soon",
    portraitAlt: "Zhaozuyu portrait",
    journeyAria: "Education and work path",
    navHome: "Home",
    navExperience: "Experience",
    navPapers: "Papers",
    navProjects: "Projects",
    navAbout: "About",
    navBlog: "Blog",
    navContact: "Contact",
    experienceKicker: "Experience",
    experienceTitle: "Huawei experience",
    experienceEmploymentType: "Full-time",
    experienceCurrentOrg: "Huawei ICT BG",
    experienceCurrentTeam: "AI Algorithm Department",
    experienceCurrentTime: "2023.03 - Present",
    experienceCurrentRole: "AI Algorithm Engineer & Maintenance AI Representative",
    experienceCurrentBullet1:
      "Mentored <strong>2 internal full-time employees</strong> and <strong>1 intern</strong>, and led the full <strong>0→1 delivery</strong> of LLM-enabled maintenance AI capabilities, including <strong>knowledge Q&amp;A</strong> and <strong>domain agents</strong>.",
    experienceCurrentBullet2:
      "Stayed close to the business and identified technical problems from <strong>user value</strong> and <strong>business impact</strong>, receiving <strong>4 competitiveness awards</strong>, the internal <strong>Jiaxian Spark Pioneer</strong> recognition, and inclusion in the <strong>annual article selection</strong>.",
    experienceCurrentBullet3:
      "Built hands-on experience in <strong>LLM applications</strong>, <strong>agent frameworks</strong>, and <strong>scaffolding design</strong>, with end-to-end delivery experience in how applications collaborate with models in real workflows.",
    experienceCurrentAward1: "Outstanding Individual of the Year",
    experienceCurrentAward2: "Innovation & Technology Breakthrough Award (Company)",
    experienceCurrentAward3: "R&D Competitiveness Construction & Capability Enhancement Award (ICT BG)",
    experiencePastOrg: "Huawei ICT BG",
    experiencePastTeam: "Algorithm & Technology Development Dept.",
    experiencePastTime: "2021.03 - 2023.03",
    experiencePastRole: "AI Algorithm Engineer (Natural Language Processing)",
    experiencePastBullet1:
      "Co-built a <strong>causal discovery algorithm</strong> based on self-supervised and contrastive learning, together with a <strong>document-level case extraction capability</strong> based on global pointers, reaching <strong>95%</strong> and <strong>81%</strong> accuracy, with <strong>four papers accepted</strong>.",
    experiencePastBullet2:
      "Built a <strong>causal graph</strong> from case data and landed the capability on Huawei's internal operations platform, achieving <strong>81%</strong> diagnosis accuracy and reducing annual cost by <strong>RMB 20 million</strong>.",
    experienceAwardsLabel: "Recognition",
    experiencePastAward1: "Gold Team Award",
    experiencePastAward2: "Outstanding New Employee",
    experiencePastAward3: "Technology Innovation & Breakthrough Award",
    papersKicker: "Papers",
    papersTitle: "Selected papers",
    paperRoleLabel: "Co-author",
    paperLinkLabel: "View on ACL",
    paper1Venue: "Findings of EMNLP · 2023",
    paper2Venue: "Findings of EMNLP · 2023",
    paper3Venue: "COLING · 2022",
    projectsKicker: "Projects",
    projectsTitle: "Selected projects",
    projectExpand: "View details",
    projectVideoPlaceholder: "Video demo / coming soon",
    projectRepoPlaceholder: "GitHub / private for now",
    projectPaperLink: "Papers / ACL",
    project1Label: "2026.1 - Present",
    project1Title: "IP Risk Sensing for Data Communication Networks",
    project1Desc:
      "For Huawei's <strong>data communication IP scenarios</strong>, built on the <strong>OpenCode programming agent framework</strong> and combined <strong>skills</strong> to enable network reconstruction and risk sensing.",
    project1Detail1Title: "Context",
    project1Detail1Desc:
      "Huawei's <strong>data communication IP networks</strong> contain many hidden risks, and a single large-scale failure can directly affect critical public services. Traditional rule-based, customized solutions are slow to build, narrow in coverage, and weak at detecting <strong>network-level risks</strong>.",
    project1Detail2Title: "What I built",
    project1Detail2Desc:
      "Aligned business-scenario requirements from <strong>0→1</strong> and used <strong>AI Coding</strong> to design the overall architecture and implementation approach for the AI application.",
    project1Detail3Title: "How it worked",
    project1Detail3Desc:
      "Used <strong>OpenCode</strong> and other open-source agent frameworks as the runtime, then built <strong>skills</strong> for network reconstruction modeling and risk identification based on the six-layer data communication IP architecture: <strong>Physical → Link → IGP → MPLS → BGP → VPN</strong>.",
    project1Detail4Title: "Outcome",
    project1Detail4Desc:
      "Completed the <strong>0→1 landing process</strong> while mentoring internal and external collaborators around the buildout.",
    project1Detail5Title: "Demo",
    project1Detail5Desc:
      "Reserved for a short walkthrough video showing the workflow, interface, and reasoning path.",
    project2Label: "2021 - 2023",
    project2Title: "Causal Graph for Operations Diagnosis",
    project2Desc:
      "Built a <strong>causal graph</strong> from case data and deployed it on Huawei's internal operations platform, improving diagnosis precision and turning research into measurable operational value.",
    project2Detail1Title: "Context",
    project2Detail1Desc:
      "Case knowledge was difficult to reuse, and diagnosis often depended on expert experience.",
    project2Detail2Title: "What I built",
    project2Detail2Desc:
      "Structured case data into a <strong>causal graph</strong> and pushed the capability into an internal operations workflow.",
    project2Detail3Title: "Method",
    project2Detail3Desc:
      "Connected case mining, relation construction, and graph-based reasoning into a usable diagnosis path.",
    project2Detail4Title: "Outcome",
    project2Detail4Desc:
      "Reached <strong>81% diagnosis accuracy</strong> and reduced annual cost by <strong>RMB 20 million</strong>.",
    project2Detail5Title: "Demo",
    project2Detail5Desc:
      "Reserved for a demo showing the graph structure, diagnosis path, and internal workflow.",
    project3Label: "2021 - 2023",
    project3Title: "Document-level Extraction & Causal Discovery",
    project3Desc:
      "Co-built document-level extraction and causal discovery capabilities with academic collaborators, connecting applied NLP research with production-oriented problem solving.",
    project3Detail1Title: "Context",
    project3Detail1Desc:
      "Long-form case documents needed to be converted into structured signals for downstream reasoning and diagnosis.",
    project3Detail2Title: "What I built",
    project3Detail2Desc:
      "Worked on <strong>document-level case extraction</strong> and <strong>causal discovery</strong> together with university partners.",
    project3Detail3Title: "Method",
    project3Detail3Desc:
      "Combined <strong>global pointer</strong>, <strong>self-supervised learning</strong>, and <strong>contrastive learning</strong> for applied NLP tasks.",
    project3Detail4Title: "Outcome",
    project3Detail4Desc:
      "Reached <strong>95%</strong> and <strong>81%</strong> accuracy on key tasks and contributed to <strong>four accepted papers</strong>.",
    project3Detail5Title: "Demo",
    project3Detail5Desc:
      "Reserved for a short explanation video linking the research pipeline to the actual business problem.",
    blogKicker: "Blog",
    blogTitle: "Latest writing",
    blogArticleTitle:
      "A Cooler Look Behind the AI Agent Boom: How Do We Bridge the Gap Between Technical Idealism and Business Reality?",
    blogCardSummary:
      "A ToB perspective on the gap between AI Agent hype and business reality, the trap of wrapper-style agents, and a more grounded path forward.",
    blogArticle2Title:
      "Imagination Is All You Need: When Imagination Becomes the New Scarcity in the AI Era",
    blogCard2Summary:
      "As execution keeps getting compressed by AI, what becomes scarce again may be imagination, judgment, and the courage to decide what is worth creating.",
    blogOpen: "Read article",
    blogBack: "Back to list",
    blogIntro1:
      "In 2023, AI Agents built on foundation models became a global focal point. By 2025, the industry even began calling it the first real year of AI Agents. Tech giants rushed to launch their own products, all carrying the promise of transforming productivity.",
    blogIntro2:
      "But in the enterprise market, customers care less about imagination and more about whether AI can solve core business problems. Stability, explainability, deployment cycles, and ROI are still far from mature in many real-world ToB scenarios.",
    aboutKicker: "About",
    aboutTitle: "How I work with AI",
    note1Title: "Open the problem first",
    note1Desc:
      "I prefer to treat AI as an exploration tool instead of a conclusion machine. Its best use is usually helping me see the problem space faster.",
    note2Title: "Ship the first version early",
    note2Desc:
      "Pages, scripts, interactions, small experiments, and videos are all ways for me to verify an idea. I would rather make it appear first, then decide whether it should continue.",
    note3Title: "Return to human judgment",
    note3Desc:
      "AI can amplify speed, but the final structure, language, and tone still depend on human judgment, taste, and choices.",
    panelNote:
      "What I care about is not whether someone can use AI, but what judgment still remains after AI.",
    contactKicker: "Contact",
    contactTitle: "Contact",
    contactGithub: "GitHub / coming soon",
    contactVideo: "Video / coming soon",
  },
  zh: {
    documentTitle: "Karry (zzuyu) | 个人主页",
    metaDescription: "Karry (zzuyu) 的个人主页，聚焦 AI Coding、作品与联系信息。",
    langToggle: "EN",
    langToggleAria: "切换到英文",
    primaryNavAria: "主导航",
    siteMarkAria: "回到首页",
    prevSlideAria: "上一页",
    nextSlideAria: "下一页",
    introKicker: "个人主页",
    heroTitle: "你好，我是 Karry (zzuyu)",
    introLabel: "当前关注",
    introText:
      "目前我在 <strong>HUAWEI</strong> 从事 <strong>AI 相关的工作</strong>，重点关注 <strong>ToB 领域 LLM 应用</strong> 与 <strong>产品设计</strong>。",
    introQuote: "“撇开老板的指令，撇开社会的规训，你到底想创造什么？”",
    introTagCompany: "华为",
    introTagRole: "LLM算法工程师&产品经理",
    introTagAICoding: "AI Coding",
    introGithub: "GitHub / 待补充",
    portraitAlt: "赵雨昱照片",
    journeyAria: "教育和工作路径",
    navHome: "首页",
    navExperience: "经历",
    navPapers: "论文",
    navProjects: "项目",
    navAbout: "关于",
    navBlog: "博客",
    navContact: "联系",
    experienceKicker: "经历",
    experienceTitle: "华为经历",
    experienceEmploymentType: "全职",
    experienceCurrentOrg: "华为 ICT BG",
    experienceCurrentTeam: "AI算法部",
    experienceCurrentTime: "2023.03 - 至今",
    experienceCurrentRole: "AI算法工程师 & 维保产业算法代表",
    experienceCurrentBullet1:
      "Mentor 指导内部 <strong>2 名正式员工</strong> 和 <strong>1 名实习生</strong>，主导基于 <strong>LLM</strong> 的维护 AI 数字化能力建设，构建 <strong>知识问答</strong>、<strong>领域 Agent</strong> 等多款应用，完成 <strong>0→1</strong> 落地全流程。",
    experienceCurrentBullet2:
      "业务产出持续向前，能够贴近业务，从 <strong>用户价值</strong> 与 <strong>业务价值</strong> 出发识别技术问题，累计获得 <strong>4 次竞争力构筑奖</strong>，技术输出获 <strong>稼先火花先锋</strong>，并入选 <strong>年度文章</strong>。",
    experienceCurrentBullet3:
      "熟悉当前 <strong>LLM 应用</strong> 相关技术，对 <strong>Agent 框架</strong>、<strong>脚手架设计</strong> 具备 <strong>0→1</strong> 开发和落地经验，也熟悉应用与模型协作的设计方式。",
    experienceCurrentAward1: "年度优秀个人奖",
    experienceCurrentAward2: "创新与技术突破奖（公司）",
    experienceCurrentAward3: "研发竞争力构建与能力提升奖（ICT BG）",
    experiencePastOrg: "华为 ICT BG",
    experiencePastTeam: "算法与技术开发部",
    experiencePastTime: "2021.03 - 2023.03",
    experiencePastRole: "AI 算法工程师（自然语言处理）",
    experiencePastBullet1:
      "联合高校基于<strong>自监督与对比学习</strong>构建因果发现算法，并基于<strong>全局指针</strong>实现篇章级案例文本抽取能力，准确率分别达到<strong>95%</strong>和<strong>81%</strong>，中稿<strong>四篇 paper</strong>。",
    experiencePastBullet2:
      "基于案例构建<strong>因果图谱</strong>，相关能力落地华为内部作战平台，定位准确率达到<strong>81%</strong>，每年减少成本<strong>2000 万</strong>。",
    experienceAwardsLabel: "个人及项目成果",
    experiencePastAward1: "金牌团队奖",
    experiencePastAward2: "年度优秀新员工",
    experiencePastAward3: "技术创新与突破奖",
    papersKicker: "论文",
    papersTitle: "论文与署名成果",
    paperRoleLabel: "共同作者",
    paperLinkLabel: "查看 ACL",
    paper1Venue: "EMNLP Findings · 2023",
    paper2Venue: "EMNLP Findings · 2023",
    paper3Venue: "COLING · 2022",
    projectsKicker: "项目",
    projectsTitle: "代表项目",
    projectExpand: "展开细节",
    projectVideoPlaceholder: "视频 Demo / 待补充",
    projectRepoPlaceholder: "GitHub / 暂不公开",
    projectPaperLink: "论文 / ACL",
    project1Label: "2026.1 - 至今",
    project1Title: "数通 IP 风险感知",
    project1Desc:
      "面向华为<strong>数通 IP 场景</strong>，基于 <strong>OpenCode 编程 agent 框架</strong>，结合 <strong>skill</strong> 实现 IP 数通网络的还原与风险感知。",
    project1Detail1Title: "背景",
    project1Detail1Desc:
      "华为<strong>数通 IP 网络</strong>存在着大量的隐患和风险，通常一次爆发就会直接影响国计民生。传统产品线规则方案与定制化开发覆盖面低、耗时长，也难以检测<strong>网络级风险</strong>。",
    project1Detail2Title: "我做了什么",
    project1Detail2Desc:
      "从 <strong>0→1</strong> 对齐业务场景需求，以 <strong>AI Coding</strong> 的形式设计整个 AI 应用的架构与实现方案。",
    project1Detail3Title: "实现方式",
    project1Detail3Desc:
      "以 <strong>OpenCode</strong> 等开源 agent 框架作为 runtime 运行框架，构建基于数通 IP 网络六层架构 <strong>（物理层 - 链路层 - IGP - MPLS - BGP - VPN）</strong> 的网络还原建模与风险识别 skill。",
    project1Detail4Title: "结果",
    project1Detail4Desc:
      "完成 <strong>0→1 落地</strong>，并在过程中指导内外部协作者一起推进能力建设。",
    project1Detail5Title: "Demo",
    project1Detail5Desc:
      "这里预留给后续的视频讲解，可展示完整工作流、界面形态与思考路径。",
    project2Label: "2021 - 2023",
    project2Title: "作战诊断因果图谱",
    project2Desc:
      "基于案例数据构建 <strong>因果图谱</strong> 并落地华为内部作战平台，提升定位准确率，把研究能力转成可量化的业务价值。",
    project2Detail1Title: "背景",
    project2Detail1Desc:
      "案例知识难以复用，问题定位往往依赖专家经验，效率与稳定性都受限。",
    project2Detail2Title: "我做了什么",
    project2Detail2Desc:
      "把案例数据结构化为 <strong>因果图谱</strong>，并把相关能力推进到内部作战流程中。",
    project2Detail3Title: "实现方式",
    project2Detail3Desc:
      "把案例挖掘、关系构建与图谱推理串成一条可使用的诊断路径。",
    project2Detail4Title: "结果",
    project2Detail4Desc:
      "实现 <strong>81% 定位准确率</strong>，并带来 <strong>每年节省 2000 万</strong> 的业务价值。",
    project2Detail5Title: "Demo",
    project2Detail5Desc:
      "这里可放图谱结构、诊断路径和平台工作流的视频演示。",
    project3Label: "2021 - 2023",
    project3Title: "篇章级抽取与因果发现",
    project3Desc:
      "与高校合作推进 <strong>篇章级案例抽取</strong> 与 <strong>因果发现</strong> 能力，把应用型 NLP 研究和真实问题连接起来。",
    project3Detail1Title: "背景",
    project3Detail1Desc:
      "长案例文档需要先被转成结构化信号，后续诊断和推理能力才能真正建立起来。",
    project3Detail2Title: "我做了什么",
    project3Detail2Desc:
      "参与 <strong>篇章级案例抽取</strong> 和 <strong>因果发现</strong> 能力建设，并与高校联合推进研究。",
    project3Detail3Title: "实现方式",
    project3Detail3Desc:
      "结合 <strong>全局指针</strong>、<strong>自监督学习</strong> 和 <strong>对比学习</strong>，用于应用型 NLP 任务。",
    project3Detail4Title: "结果",
    project3Detail4Desc:
      "关键任务达到 <strong>95%</strong> 与 <strong>81%</strong> 的准确率，并贡献了 <strong>四篇中稿论文</strong>。",
    project3Detail5Title: "Demo",
    project3Detail5Desc:
      "这里预留给后续的视频说明，把研究管线和真实业务问题串起来讲清楚。",
    blogKicker: "博客",
    blogTitle: "最新文章",
    blogArticleTitle: "AI Agent 大热背后的冷思考：技术理想与业务落地的鸿沟如何跨越？",
    blogCardSummary:
      "从 ToB 视角讨论 AI Agent 的冷热反差、套壳式繁荣，以及业务落地中“短期做薄、长期做厚”的实践路径。",
    blogArticle2Title: "Imagination Is All You Need：AI 时代，想象力成为新的稀缺品",
    blogCard2Summary:
      "当执行被 AI 不断压缩之后，真正重新变得稀缺的，也许是想象力，以及一个人想把什么带进这个世界。",
    blogOpen: "阅读全文",
    blogBack: "返回列表",
    blogIntro1:
      "2023 年，以大模型为基座的 AI Agent 成为全球科技领域的焦点。到了 2025 年，更被业界称作 AI Agent 的元年，各大科技巨头纷纷推出自家的 Agent 产品，仿佛通用人工智能的雏形已触手可及。",
    blogIntro2:
      "但当视角转向企业级市场时，现实并不乐观。客户和内部商业领袖真正关心的，是 AI 能否解决核心业务问题，而当前 Agent 的稳定性、可解释性、落地周期与 ROI 兑现能力，仍然与理想状态存在很大差距。",
    aboutKicker: "关于",
    aboutTitle: "我如何与 AI 协作",
    note1Title: "先打开问题",
    note1Desc: "我更愿意把 AI 当作探索工具，而不是结论机器。它最有价值的时候，通常是帮我更快看到问题空间。",
    note2Title: "先做出第一版",
    note2Desc: "页面、脚本、交互、小实验和视频，都是我验证想法的方式。先让它出现，再决定要不要继续。",
    note3Title: "回到人的判断",
    note3Desc: "AI 可以放大速度，但最后真正决定结构、语言和气质的，还是人的判断、审美和取舍。",
    panelNote: "我在意的不是“会不会用 AI”，而是“AI 之后，你还保留了什么判断”。",
    contactKicker: "联系",
    contactTitle: "联系",
    contactGithub: "GitHub / 待补充",
    contactVideo: "视频 / 待补充",
  },
};

const resolveInitialSlideIndex = () => {
  const requestedSlide = new URLSearchParams(window.location.search).get("slide");

  if (!requestedSlide) {
    return 0;
  }

  const normalized = requestedSlide.trim().toLowerCase();

  if (slideRouteMap[normalized] !== undefined && slideRouteMap[normalized] < slides.length) {
    return slideRouteMap[normalized];
  }

  const matchedIndex = slides.findIndex((slide) =>
    [slide.dataset.slideName, slide.dataset.slideNameEn, slide.dataset.slideNameZh]
      .filter(Boolean)
      .some((name) => name.trim().toLowerCase() === normalized),
  );

  return matchedIndex >= 0 ? matchedIndex : 0;
};

let activeIndex = resolveInitialSlideIndex();
let currentLanguage = "en";

try {
  const savedLanguage = window.localStorage.getItem(languageStorageKey);
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
} catch {}

const getSlideName = (slide) => {
  if (currentLanguage === "zh") {
    return slide.dataset.slideNameZh || slide.dataset.slideName || "";
  }

  return slide.dataset.slideNameEn || slide.dataset.slideName || "";
};

const updateSlider = (nextIndex) => {
  activeIndex = (nextIndex + slides.length) % slides.length;
  slidesTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

  slides.forEach((slide, index) => {
    const isActive = index === activeIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
    slide.inert = !isActive;
  });

  navButtons.forEach((button) => {
    const target = Number(button.dataset.slideTarget);
    const isActive = target === activeIndex;
    button.classList.toggle("is-active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
      return;
    }

    button.removeAttribute("aria-current");
  });

  if (slideCounter) {
    slideCounter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(
      slides.length,
    ).padStart(2, "0")}`;
  }

  if (slideName) {
    slideName.textContent = getSlideName(slides[activeIndex]);
  }
};

const applyLanguage = (language) => {
  if (!translations[language]) {
    return;
  }

  currentLanguage = language;
  const dictionary = translations[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.documentTitle;
  metaDescription?.setAttribute("content", dictionary.metaDescription);
  siteNav?.setAttribute("aria-label", dictionary.primaryNavAria);

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];

    if (value === undefined) {
      return;
    }

    if (element.dataset.i18nMode === "html") {
      element.innerHTML = value;
      return;
    }

    element.textContent = value;
  });

  i18nAriaElements.forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const value = dictionary[key];

    if (value !== undefined) {
      element.setAttribute("aria-label", value);
    }
  });

  i18nAltElements.forEach((element) => {
    const key = element.dataset.i18nAlt;
    const value = dictionary[key];

    if (value !== undefined) {
      element.setAttribute("alt", value);
    }
  });

  if (langToggleButton) {
    langToggleButton.textContent = dictionary.langToggle;
    langToggleButton.setAttribute("aria-label", dictionary.langToggleAria);
  }

  updateSlider(activeIndex);

  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {}
};

prevButton?.addEventListener("click", () => updateSlider(activeIndex - 1));
nextButton?.addEventListener("click", () => updateSlider(activeIndex + 1));

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateSlider(Number(button.dataset.slideTarget));
  });
});

const isTypingTarget = (target) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName;
  return target.isContentEditable || tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT";
};

const handleKeyNavigation = (event) => {
  if (isTypingTarget(event.target)) {
    return;
  }

  const key = event.key;
  const code = event.keyCode;

  if (key === "ArrowLeft" || key === "Left" || code === 37) {
    event.preventDefault();
    updateSlider(activeIndex - 1);
    return;
  }

  if (key === "ArrowRight" || key === "Right" || code === 39) {
    event.preventDefault();
    updateSlider(activeIndex + 1);
  }
};

document.addEventListener("keydown", handleKeyNavigation);

let touchStartX = 0;
let touchEndX = 0;
let trackpadDeltaX = 0;
let trackpadResetTimer = 0;
let lastTrackpadNavigationAt = 0;

slidesTrack?.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
});

slidesTrack?.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].clientX;
  const delta = touchEndX - touchStartX;

  if (Math.abs(delta) < 40) {
    return;
  }

  if (delta > 0) {
    updateSlider(activeIndex - 1);
    return;
  }

  updateSlider(activeIndex + 1);
});

const handleTrackpadNavigation = (event) => {
  if (isTypingTarget(event.target)) {
    return;
  }

  const absDeltaX = Math.abs(event.deltaX);
  const absDeltaY = Math.abs(event.deltaY);

  if (absDeltaX < 18 || absDeltaX <= absDeltaY) {
    return;
  }

  event.preventDefault();

  const now = Date.now();
  if (now - lastTrackpadNavigationAt < 420) {
    return;
  }

  trackpadDeltaX += event.deltaX;
  window.clearTimeout(trackpadResetTimer);
  trackpadResetTimer = window.setTimeout(() => {
    trackpadDeltaX = 0;
  }, 140);

  if (Math.abs(trackpadDeltaX) < 42) {
    return;
  }

  lastTrackpadNavigationAt = now;
  updateSlider(activeIndex + (trackpadDeltaX > 0 ? 1 : -1));
  trackpadDeltaX = 0;
};

sliderStage?.addEventListener("wheel", handleTrackpadNavigation, { passive: false });

langToggleButton?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "zh" : "en");
});

applyLanguage(currentLanguage);
