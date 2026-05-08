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

const languageStorageKey = "personal-homepage-language-v2";
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
      "I currently work on <strong>AI-related initiatives</strong> at <strong>HUAWEI</strong>.",
    introQuote: "A dusted hem, softly weathered by the road. : )",
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
    experienceCurrentRole: "AI Product Manager",
    experienceCurrentBullet1:
      "Represented the department in serving Huawei's maintenance business (<strong>xxx billion RMB annual revenue</strong>), mapped engineer workflows into high-value AI scenarios such as knowledge reuse, issue handling, and risk sensing, and drove <strong>RAG</strong> / <strong>Agent</strong> applications from <strong>0→1</strong>.",
    experienceCurrentBullet2:
      "Worked deeply with <strong>sales</strong>, <strong>service</strong>, and other business stakeholders, translated frontline needs into product requirements, scenario priorities, and iteration direction, improving product fit with real maintenance workflows.",
    experienceCurrentBullet3:
      "Managed a <strong>10-person delivery team</strong> (4 internal + 6 external), driving task breakdown, delivery cadence, cross-module collaboration, and acceptance across algorithm, engineering, and knowledge-building roles.",
    experienceCurrentAward1: "Maintenance AI 0→1",
    experienceCurrentAward2: "Cross-functional delivery",
    experienceCurrentAward3: "RAG / Agent productization",
    experiencePastOrg: "Huawei ICT BG",
    experiencePastTeam: "Algorithm & Technology Development Dept.",
    experiencePastTime: "2021.03 - 2023.03",
    experiencePastRole: "AI Algorithm Engineer (Natural Language Processing)",
    experiencePastBullet1:
      "Abstracted business scenarios into <strong>algorithmic solutions</strong>, defined model evaluation, delivery acceptance, and online bad-case analysis, and embedded AI capabilities into business workflows.",
    experiencePastBullet2:
      "Served as Huawei's <strong>university collaboration project manager</strong>, connecting CUHK-Shenzhen, Fudan University, and CASIA on <strong>N+1 technical exploration</strong>, contributing to 3 accepted papers and business-platform landing.",
    experienceAwardsLabel: "Recognition",
    experiencePastAward1: "Business-to-algorithm abstraction",
    experiencePastAward2: "University collaboration manager",
    experiencePastAward3: "N+1 technical exploration",
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
    projectPaperLink: "Internal / private",
    project1Label: "2024.01 - 2025.12",
    project1Title: "Huawei Service-Domain Knowledge Extraction | AI Knowledge Engineering",
    project1Desc:
      "Built an <strong>AI knowledge-engineering</strong> product for Huawei service and maintenance scenarios, turning issue tickets, FAQs, and expert experience into reusable knowledge assets for downstream LLM applications.",
    project1Detail1Title: "Business context",
    project1Detail1Desc:
      "Huawei customer maintenance is an important ICT revenue unit. Engineers mainly rely on cases and experience when resolving issues, while case-to-ticket coverage remains low (<strong>&lt;xx%</strong>), fault-tree nodes accumulate below <strong>xx million</strong>, and Q&amp;A pairs are still largely written by experts.",
    project1Detail2Title: "Technical solution",
    project1Detail2Desc:
      "Defined cleaning, chunking, desensitization, and field-normalization flows for issue tickets and attachments; combined <strong>domain models + general models</strong>; and used multi-stage splitting, iterative extraction, and merge validation to trade compute for extraction quality.",
    project1Detail3Title: "Evaluation & feedback",
    project1Detail3Desc:
      "Built layered metrics across <strong>extraction accuracy</strong>, extraction quality, case increment, and manpower reduction; used online bad cases and expert labeling to fine-tune models; and embedded silent feedback into engineer workflows to form a data flywheel.",
    project1Detail4Title: "Business impact",
    project1Detail4Desc:
      "Shifted case production from human writing to human review, improving efficiency by <strong>xx×</strong>; improved organizational knowledge-asset accumulation by <strong>xx×</strong>, saved <strong>x person-days/year</strong>, reduced knowledge investment by <strong>xkw</strong>, and improved downstream AI accuracy by <strong>x%-xx%</strong>.",
    project2Label: "2024.03 - Present",
    project2Title: "ICT Domain Knowledge Q&A | RAG, Deep Research",
    project2Desc:
      "Productized a <strong>RAG + Deep Research</strong> knowledge assistant for ICT maintenance scenarios, helping engineers and partners retrieve experience knowledge, locate issues, and reuse answers.",
    project2Detail1Title: "Business context",
    project2Detail1Desc:
      "Knowledge acquisition through Q&amp;A is a high-frequency domain scenario, but users face scattered entry points, weak intelligence, and insufficient accuracy in traditional FAQ systems.",
    project2Detail2Title: "Technical solution",
    project2Detail2Desc:
      "Implemented intent-aware refined recall with LLM sliding-window composition, reaching <strong>90%+</strong> multi-level product-category recognition; built <strong>BM25 + vector retrieval</strong>; embedded URL/image placeholders; and used <strong>CO-STAR prompt</strong> design for structured, illustrated answers.",
    project2Detail3Title: "Evaluation & feedback",
    project2Detail3Desc:
      "Defined layered metrics for intent, retrieval, answer accuracy, deflection rate, and user experience; built an online logging and bad-case attribution mechanism to locate intent errors, recall misses, and hallucinations within minutes.",
    project2Detail4Title: "Business impact",
    project2Detail4Desc:
      "Reached <strong>100k/month</strong> partner MAU and <strong>7k/month</strong> internal MAU, with monthly retention of <strong>54%</strong> / <strong>47%</strong>, partner deflection rate of <strong>59%</strong>, and ticket-assisted resolution rate of <strong>50%</strong>.",
    project3Label: "2025.01 - Present",
    project3Title: "Network Risk Identification Assistant | AI Agent",
    project3Desc:
      "Built a <strong>network risk identification Agent</strong> for proactive customer-network risk management, combining LLM capabilities with network digital twins.",
    project3Detail1Title: "Business context",
    project3Detail1Desc:
      "As customer networks become more complex and intelligent, maintenance is shifting from reactive issue handling to proactive risk management. Traditional expert-rule solutions have low coverage (<strong>&lt;20%</strong>), insufficient accuracy (<strong>&lt;50%</strong>), and weak risk-chain explainability.",
    project3Detail2Title: "Technical solution",
    project3Detail2Desc:
      "Built a risk-identification Agent with <strong>LLM + network digital twin</strong>, decomposing expert risk investigation into scenario understanding, tool calling, link reasoning, simulation validation, and result explanation; accumulated tools/Skills, memory, validation, and model-tuning mechanisms.",
    project3Detail3Title: "Evaluation & feedback",
    project3Detail3Desc:
      "Defined an offline Agent risk benchmark and used accuracy and coverage to drive capability improvement; used online rolling validation and logs to attribute issues across Skill, Harness, and model layers.",
    project3Detail4Title: "Business impact",
    project3Detail4Desc:
      "Compared with traditional approaches, increased risk-identification volume by <strong>10×</strong>, improved deep-risk ratio by <strong>80%</strong>, and reduced customer network incident rate by <strong>12%</strong>.",
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
      "目前我在 <strong>HUAWEI</strong> 从事 <strong>AI 相关的工作</strong>。",
    introQuote: "衣角微脏，些许风霜： ）",
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
    experienceCurrentRole: "AI 产品经理",
    experienceCurrentBullet1:
      "作为部门代表对接维保产业（<strong>xxx 亿/年营收</strong>），围绕工程师作业流拆解知识复用、问题处理、风险感知等高价值场景，基于 <strong>RAG</strong>、<strong>Agent</strong> 等能力推进 AI 应用从 <strong>0→1</strong> 探索与落地。",
    experienceCurrentBullet2:
      "深度对接<strong>行销</strong>、<strong>服务</strong>等业务人群，理解维保产业业务链路与工程师作业场景，将一线诉求转译为产品需求、场景优先级和版本迭代方向。",
    experienceCurrentBullet3:
      "负责 <strong>10 人团队管理</strong>（内部 4 人 + 外部 6 人），围绕维保 AI 应用推进任务拆解、节奏把控、跨模块协同和交付验收。",
    experienceCurrentAward1: "维保 AI 0→1",
    experienceCurrentAward2: "跨业务协同交付",
    experienceCurrentAward3: "RAG / Agent 产品化",
    experiencePastOrg: "华为 ICT BG",
    experiencePastTeam: "算法与技术开发部",
    experiencePastTime: "2021.03 - 2023.03",
    experiencePastRole: "AI 算法工程师（自然语言处理）",
    experiencePastBullet1:
      "负责将<strong>业务场景抽象为算法技术方案</strong>，定义模型评测、交付验收和线上 bad case 分析，将能力嵌入业务流。",
    experiencePastBullet2:
      "担任<strong>华为高校合作项目经理</strong>，链接港中深/复旦/中科院自动化所，探索 N+1 技术，中稿 3 篇文章并落地业务平台。",
    experienceAwardsLabel: "个人及项目成果",
    experiencePastAward1: "业务到算法抽象",
    experiencePastAward2: "高校合作项目管理",
    experiencePastAward3: "N+1 技术预研",
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
    projectPaperLink: "内部 / 暂不公开",
    project1Label: "2024.01 - 2025.12",
    project1Title: "华为服务领域知识萃取 | AI 知识工程",
    project1Desc:
      "面向华为服务与维保场景，构建 <strong>AI 知识工程</strong>产品，将问题单、FAQ、专家经验沉淀为可复用知识资产，支撑下游 LLM 应用。",
    project1Detail1Title: "业务场景",
    project1Detail1Desc:
      "华为客户维保是 ICT 重要收入单元，工程师问题处理主要依赖案例和经验；工程师案例/华为问题单占比 <strong>&lt;xx%</strong>，故障树节点积累 <strong>&lt;xx 万</strong>，问答对主要靠专家编写。",
    project1Detail2Title: "技术方案",
    project1Detail2Desc:
      "定义问题单/附件清洗、切分、脱敏和字段归一流程；采用<strong>领域模型 + 通用模型组合萃取</strong>；针对长案例设计<strong>多段式拆分、迭代式萃取和合并校验链路</strong>。",
    project1Detail3Title: "评测反馈",
    project1Detail3Desc:
      "构建<strong>萃取准确率、萃取质量、案例增量、人力减少</strong>等指标；基于线上 bad case 与专家标注增训模型；嵌入工程师作业流形成无感反馈和数据飞轮。",
    project1Detail4Title: "业务收益",
    project1Detail4Desc:
      "推动案例生产从“人写”到“人审”，效率提升 <strong>xx 倍</strong>；组织资产积累效率提升 <strong>xx 倍</strong>，节省人力 <strong>x 万人天/年</strong>，下游 AI 应用准确率提升 <strong>x%-xx%</strong>。",
    project2Label: "2024.03 - 至今",
    project2Title: "ICT 领域知识问答 | RAG、Deep Research",
    project2Desc:
      "面向 ICT 维保工程师与伙伴的知识获取、问题处理和经验复用场景，建设 <strong>RAG + Deep Research</strong> 知识问答能力。",
    project2Detail1Title: "业务场景",
    project2Detail1Desc:
      "问答类知识获取属于领域高频场景，存在入口分散、传统 FAQ 问答准确率不足、智能化弱等问题。",
    project2Detail2Title: "技术方案",
    project2Detail2Desc:
      "基于 LLM 组合滑动窗口实现多级产品类别识别，准确率 <strong>90%+</strong>；构建 <strong>BM25 + 向量检索</strong>组合召回；基于 <strong>CO-STAR prompt</strong> 约束答案风格与结构，实现图文并茂输出。",
    project2Detail3Title: "评测反馈",
    project2Detail3Desc:
      "定义意图/检索/问答准确率、分流率和用户体验等分层指标；构建线上日志和 bad case 归因机制，分钟级定位意图错误、召回缺失、生成幻觉等问题。",
    project2Detail4Title: "业务收益",
    project2Detail4Desc:
      "问答月活 <strong>10w/月</strong>（伙伴）、<strong>7k/月</strong>（内部），月留存率 54%/47%，伙伴分流率 <strong>59%</strong>，问题单辅助解决率 <strong>50%</strong>。",
    project3Label: "2025.01 - 至今",
    project3Title: "网络风险识别助手 | AI Agent",
    project3Desc:
      "面向客户网络事前风险识别场景，基于 <strong>LLM + 网络数字孪生</strong> 构建 AI Agent 风险识别助手。",
    project3Detail1Title: "业务场景",
    project3Detail1Desc:
      "客户网络越来越复杂化、智能化，维保模式正从“事后管问题”转向“事前管风险”；传统风险预测依赖专家经验和定制规则，存在覆盖率低（<strong>&lt;20%</strong>）、准确率不足（<strong>&lt;50%</strong>）、风险链路难解释等痛点。",
    project3Detail2Title: "技术方案",
    project3Detail2Desc:
      "构建网络风险识别 Agent，将专家风险排查流程拆解为场景理解、工具调用、链路推理、仿真验证和结果解释任务流，沉淀工具/Skill、记忆、验证和模型增训机制。",
    project3Detail3Title: "评测反馈",
    project3Detail3Desc:
      "定义线下 Agent 风险评测集，通过准确率和覆盖率牵引能力提升；线上滚动验证，构建日志系统识别 Skill、Harness、模型侧问题，形成反馈验证闭环。",
    project3Detail4Title: "业务收益",
    project3Detail4Desc:
      "相比传统方案，风险识别数量规模提升 <strong>10 倍</strong>，识别的深度风险比例提升 <strong>80%</strong>，客户网络事故率减少 <strong>12%</strong>。",
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
let currentLanguage = "zh";

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
