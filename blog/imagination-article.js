const articleLangToggleButton = document.querySelector("#articleLangToggle");
const articleMetaDescription = document.querySelector('meta[name="description"]');
const articleI18nElements = Array.from(document.querySelectorAll("[data-article-i18n]"));

const articleLanguageStorageKey = "personal-homepage-language";
const articleTranslations = {
  zh: {
    documentTitle: "Imagination Is All You Need | Karry (zzuyu)",
    metaDescription:
      "当执行被 AI 不断压缩之后，真正重新变得稀缺的，也许是想象力，以及一个人想把什么带进这个世界。",
    langToggle: "EN",
    langToggleAria: "切换到英文",
    backLabel: "返回博客",
    kicker: "博客",
    title: "Imagination Is All You Need：AI 时代，想象力成为新的稀缺品",
    summary:
      "当执行被 AI 不断压缩之后，真正重新变得稀缺的，也许是想象力，以及一个人想把什么带进这个世界。",
    intro1:
      "这段时间我越来越强烈地感受到一件事：AI 时代最值得重新讨论的，不只是效率，也不只是工具，而是“人到底还剩下什么”。过去我们习惯把能力理解成一组不断叠加的技能清单，谁会更多，谁就更有竞争力；但当 AI 开始压缩从想法到结果之间的距离，这套逻辑正在被迅速重写。",
    intro2:
      "一个页面、一个 demo、一段代码、一套交互、一个工作流，越来越容易从念头直接走向雏形。这当然是一种解放，但它也把另一个问题推到台前：当执行越来越便宜，真正重新变贵的，到底是什么？",
    sec1Title: "当执行变便宜之后",
    sec1Para1:
      "如果生成变得容易，稀缺性就一定会向上游移动。你可以在一个下午生成很多界面，也可以在一个晚上做出一个看起来像样的产品原型；你可以让模型帮你写文案、写代码、拆任务、跑流程，甚至替你把很多过去必须亲自动手的事情做完。",
    sec1Para2:
      "但问题也恰恰从这里开始。AI 可以帮你生成答案，却不能替你决定哪个答案值得留下；它可以帮你完成表达，却不能替你回答这个表达为什么重要；它可以让“做出来”变得更简单，但不能直接解决“为什么要做”这件事。",
    sec1Para3:
      "所以我越来越觉得，AI 时代真正的分水岭，不是“会不会用 AI”，而是“有没有自己的问题意识、判断能力和想象力”。",
    sec2Title: "为什么我越来越在意 imagination",
    sec2Para1:
      "我不觉得想象力只是一个浪漫的词。它不是灵感一闪，也不是脱离现实的自我感动。对我来说，想象力更像是一种能力：它让一个人能够在既有路径之外，看到另一种可能；能够在工具已经足够强大的时候，依然不满足于“把旧事做得更快”。",
    sec2Para2:
      "从这个角度看，AI 其实并没有削弱人的价值，反而把人的核心价值重新暴露了出来。因为过去很多时候，一个人的能力可以被执行力掩盖；但在 AI 时代，当“做出来”越来越不难时，一个人到底有没有想法、有没有判断、有没有审美、有没有真正想推动的东西，会变得越来越明显。",
    sec2Para3:
      "所以我越来越认同一句话：未来决定人与人差异的，可能不再是执行本身，而是想象力。",
    sec3Title: "我怎么理解“超级个体”",
    sec3Para1:
      "我不觉得超级个体意味着一个人变成十个人，或者借助 AI 去无止境地榨取自己的效率。它也不是会写几个 prompt、会接几个 agent、会做几个自动化 flow，就可以自我命名的身份。",
    sec3Para2:
      "真正有价值的超级个体，首先仍然是“个体”。这意味着他有自己的问题意识，有自己的趣味，有自己的判断，有自己的欲望和执念。他不是因为工具变强才看起来强，而是因为他本来就有想表达、想创造、想验证的东西，工具只是把这种能力放大了。",
    sec3Para3:
      "所以我更愿意把“超级个体”理解成这样一种存在：他拥有更强的表达半径，也拥有更强的实现半径；他不一定什么都亲手完成，但他知道自己想做什么；他不一定是每个领域最专业的人，但他可以组织资源、调用工具、连接判断，把一个模糊的念头逐渐变成产品、内容、体验，或者某种新的可能性。",
    sec4Title: "AI Coding 作为新的表达界面",
    sec4Para1:
      "也因此，我对 AI 最感兴趣的地方，从来不只是“它能帮我更快完成任务”。我更在意的是，它能不能成为一种新的表达界面。尤其是在 AI Coding 这件事上，这种感受会更明显。",
    sec4Para2:
      "它不只是更高效地写代码，也不只是把开发变得更轻。它更像是在给人一种新的能力：你可以更直接地把想法推到现实里。你可以把脑海里一个还很模糊的念头，先变成页面；把一个判断，先变成产品雏形；把一种感受，先变成交互；把一种还说不太清楚的方向，先做成一个可以被使用、被体验、被验证的东西。",
    sec4Para3:
      "这件事本身就很有力量。因为未来真正重要的，也许不再只是“谁更会做”，而是“谁更知道自己想做什么”，以及“谁更有能力让这种想法被看见”。",
    sec5Title: "结语",
    sec5Para1:
      "如果一定要用一句话概括我现在对 AI 时代的理解，我会写：Imagination is all you need。",
    sec5Para2:
      "不是因为别的不重要，而是因为当执行、生成、分析、调度都越来越容易之后，想象力会重新回到最上游的位置。它决定你想看见什么，决定你愿意相信什么，决定你愿意花时间把什么带进这个世界。",
    sec5Para3:
      "而这部分，至少目前，依然属于人。",
  },
  en: {
    documentTitle: "Imagination Is All You Need | Karry (zzuyu)",
    metaDescription:
      "As execution keeps getting compressed by AI, what becomes scarce again may be imagination, judgment, and the courage to decide what is worth creating.",
    langToggle: "中文",
    langToggleAria: "Switch to Chinese",
    backLabel: "Back to blog",
    kicker: "Blog",
    title: "Imagination Is All You Need: When Imagination Becomes the New Scarcity in the AI Era",
    summary:
      "As execution keeps getting compressed by AI, what becomes scarce again may be imagination, judgment, and the courage to decide what is worth creating.",
    intro1:
      "Lately I have been feeling one thing more and more strongly: in the AI era, what deserves to be re-examined is not only efficiency, and not only tools, but what remains distinctly human. For a long time, we treated ability as a stack of skills. The more you mastered, the more competitive you became. But once AI starts collapsing the distance between an idea and an outcome, that logic gets rewritten very quickly.",
    intro2:
      "A page, a demo, a piece of code, an interaction, a workflow: more and more of these can move directly from a thought to a prototype. That is a real liberation. But it also pushes another question to the surface: when execution becomes cheaper and cheaper, what becomes valuable again?",
    sec1Title: "When execution becomes cheap",
    sec1Para1:
      "If generation becomes easy, scarcity has to move upstream. You can generate many interfaces in one afternoon, build a convincing prototype in a single night, and ask models to write copy, code, plans, and workflows for you. Many things that once required heavy manual effort can now be started almost instantly.",
    sec1Para2:
      "But that is exactly where the real problem begins. AI can generate answers, but it cannot decide which answer deserves to stay. It can help you complete an expression, but it cannot tell you why that expression matters. It can make producing something easier, but it does not automatically solve the question of why the thing should exist at all.",
    sec1Para3:
      "That is why I increasingly feel that the real dividing line in the AI era is not whether someone can use AI, but whether they have their own problem awareness, judgment, and imagination.",
    sec2Title: "Why I care more and more about imagination",
    sec2Para1:
      "I do not think imagination is just a romantic word. It is not a flash of inspiration, and it is not some form of unrealistic self-indulgence. To me, imagination is a capability: the ability to see another possibility beyond the existing path, and to remain unsatisfied with merely doing old things faster even when the tools become powerful enough to do exactly that.",
    sec2Para2:
      "From that perspective, AI does not weaken human value. Instead, it exposes it more clearly. In the past, a person’s real depth could be hidden behind execution. But when getting something made becomes easier and easier, whether someone has ideas, judgment, taste, and a real inner direction becomes much more visible.",
    sec2Para3:
      "So I increasingly believe that what separates people in the future may no longer be execution itself, but imagination.",
    sec3Title: "How I understand the super-individual",
    sec3Para1:
      "I do not think a super-individual means one person becoming ten people, or squeezing infinite efficiency out of themselves with AI. It is also not an identity you earn simply by writing a few prompts, wiring a few agents, or chaining a few automations together.",
    sec3Para2:
      "A truly valuable super-individual is still, first of all, an individual. That means having your own questions, your own taste, your own judgment, your own obsessions. They do not look strong only because the tools became stronger. They look strong because they already had something they wanted to express, build, or verify, and the tools merely amplified that capacity.",
    sec3Para3:
      "So I prefer to think of a super-individual as someone with a larger radius of expression and a larger radius of realization. They do not have to do everything by hand, but they know what they want. They do not have to be the deepest expert in every field, but they can organize resources, call tools, connect judgment, and gradually turn a vague thought into a product, a piece of content, an experience, or a new possibility.",
    sec4Title: "AI Coding as a new interface for expression",
    sec4Para1:
      "That is also why what interests me about AI is not just that it can help me complete tasks faster. What I care about more is whether it can become a new interface for expression. This feels especially true in AI Coding.",
    sec4Para2:
      "It is not only a more efficient way to write code, and not only a lighter development workflow. It feels more like a new capability: the ability to push ideas directly into reality. A vague thought can become a page. A judgment can become a product prototype. A feeling can become an interaction. A direction that is still hard to articulate can become something that can be used, experienced, and tested.",
    sec4Para3:
      "That is what makes it powerful. Because in the future, what matters may no longer be only who can do things better, but who knows what they want to make, and who can bring that thought into the world in a form others can see.",
    sec5Title: "Closing",
    sec5Para1:
      "If I had to summarize my current understanding of the AI era in one sentence, I would write: Imagination is all you need.",
    sec5Para2:
      "Not because everything else stops mattering, but because once execution, generation, analysis, and orchestration all become easier, imagination moves back to the very top of the stack. It determines what you want to see, what you are willing to believe, and what you are willing to spend time bringing into the world.",
    sec5Para3:
      "And that part, at least for now, still belongs to humans.",
  },
};

let articleLanguage = "zh";

try {
  const savedLanguage = window.localStorage.getItem(articleLanguageStorageKey);
  if (savedLanguage && articleTranslations[savedLanguage]) {
    articleLanguage = savedLanguage;
  }
} catch {}

const applyArticleLanguage = (language) => {
  if (!articleTranslations[language]) {
    return;
  }

  articleLanguage = language;
  const dictionary = articleTranslations[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary.documentTitle;
  articleMetaDescription?.setAttribute("content", dictionary.metaDescription);

  articleI18nElements.forEach((element) => {
    const key = element.dataset.articleI18n;
    const value = dictionary[key];

    if (value !== undefined) {
      element.textContent = value;
    }
  });

  if (articleLangToggleButton) {
    articleLangToggleButton.textContent = dictionary.langToggle;
    articleLangToggleButton.setAttribute("aria-label", dictionary.langToggleAria);
  }

  try {
    window.localStorage.setItem(articleLanguageStorageKey, language);
  } catch {}
};

articleLangToggleButton?.addEventListener("click", () => {
  applyArticleLanguage(articleLanguage === "zh" ? "en" : "zh");
});

applyArticleLanguage(articleLanguage);
