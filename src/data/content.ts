export type Lang = 'en' | 'sv';

export const BASE = '/portfolio';
export const SITE_URL = 'https://mellyynda.github.io' + BASE;
export const asset = (path: string) => BASE + path;
export const EMAIL = 'melinda.sava.td@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/melindasava/';
export const GITHUB = 'https://github.com/mellyynda';

export const paths: Record<Lang, string> = { en: '/', sv: '/sv/' };

type Role = {
  title: string;
  period: string;
  start: string;
  end?: string;
  points: string[];
};

type Job = {
  org: string;
  place: string;
  roles: Role[];
};

const skillGroups = {
  en: [
    {
      name: '',
      items: ['React, Vue, TypeScript, JavaScript', 'Github Actions, CI/CD', 'Claude(CLI), Copilot(CLI), Cursor, Codex', 'Parallel AI agent workflows (git worktrees)', 'Custom AI Skills&Tool Integrations (MCP)', 'Anthropic SDK', 'RESTful API', 'SDKs & Integrations', 'Playwright, Vitest, Cypress', 'Responsive Design, Web Accessibility (a11y), WCAG', 'Styled Components, Vuetify, Tailwind, Bulma, Bootstrap, Material UI etc.', 'Coralogix, OpenSearch, Sentry', 'Git&Github&Gitlab', 'Node.js & Express.js', 'Firebase, Supabase, PostgresSQL', 'Leaflet&Here maps', 'Agile methodology (SCRUM&Kanban)'],
    },
  ],
  sv: [
    {
      name: '',
      items: ['React, Vue, TypeScript, JavaScript', 'GitHub Actions, CI/CD', 'Claude (CLI), Copilot (CLI), Cursor, Codex', 'Parallella AI-agentflöden (git worktrees)', 'Egna AI-skills och verktygsintegrationer (MCP)', 'Anthropic SDK', 'RESTful API', 'SDK:er och integrationer', 'Playwright, Vitest, Cypress', 'Responsiv design, webbtillgänglighet (a11y), WCAG', 'Styled Components, Vuetify, Tailwind, Bulma, Bootstrap, Material UI m.fl.', 'Coralogix, OpenSearch, Sentry', 'Git, GitHub och GitLab', 'Node.js och Express.js', 'Firebase, Supabase, PostgreSQL', 'Leaflet och HERE Maps', 'Agila metoder (Scrum och Kanban)'],
    },
  ],
};

const jobs: Record<Lang, Job[]> = {
  en: [
    {
      org: 'Worldline / PaymentIQ',
      place: 'Jan 2022 - Present',
      roles: [
        {
          title: 'Engineering Manager & Software Developer',
          period: 'Mar 2026 - Present',
          start: '2026-03',
          points: [
            'Leading engineering for payment products: defined code ownership across 10 repositories and automated release and review workflows.',
            'Completed stalled migration from KnockoutJS to React/TypeScript, delivering remaining views with a safe, per-merchant rollout.',
            'Led the rebuilding of the Cashier payment app from end-of-life Vue 2 to React/TypeScript: shipped V3 from first commit to production release in under 4 months, then delivered 13 releases since.',
            'Led delivery of Cashier Plus, a paid premium cashier tier, from planning to launch in about 10 weeks: refined broad product requirements and shipped a self-service Cashier Builder and Analytics in the Backoffice.',
            'Leading company-wide white-labelling for B2B branding: defined the strategy and delivery plan, coordinated frontend, backend, DevOps and shipped per-domain builds, brand-name checks in every repository and merchant setup instructions.',
            'Improved performance and reliability of payment applications through Core Web Vitals work, diagnosed and fixed issues affecting checkout conversion and did production incident analysis with Coralogix and OpenSearch (including AI driven).',
            'Strengthened quality and security through Playwright end-to-end testing, GitHub Actions CI checks, and improved vulnerability management with automated cross-repository security alerts.',
            'Designed and shared AI-assisted engineering workflows: coordinated parallel coding agents in isolated Git worktrees, reviewed and tested changes before merge, and introduced task-based model selection skills to manage token costs.',
            'Prototyped an AI-powered theme generator for Cashier Builder that generates custom styling to make the Cashier match the merchant’s website design.',
          ],
        },
        {
          title: 'Frontend Development Team Lead',
          period: 'Nov 2025 - Mar 2026',
          start: '2025-11',
          end: '2026-03',
          points: [
            'Introduced Scrum to a previously fragmented team, establishing sprint planning, daily standups, retrospectives, and stakeholder reviews to strengthen collaboration, shared ownership, and delivery visibility.',
            'Turned a quiet, siloed 5 person team into an engaged one: grew team-channel activity to 5–10 messages a day, made PR reviews a shared routine in the team channel which tripled PR volume, increased PR throughput by 50% and halved typical review wait.',
            'Led technical coordination of the Backoffice React/TypeScript migration, delivering 7 core views, improving migration workflows, cross-developer collaboration, and consistency across shared components.',
            'Improved delivery and test quality: removed manual approval from Backoffice deployments, reduced CI overhead, restructured the Cypress end-to-end suite, added unit tests to the bootstrapper(sdk) pipeline, and added regression tests for cross-origin data access.',
            'Laid the groundwork for white-labelling by preparing 5 frontend repositories and adding support for new environments.',
          ],
        },
        {
          title: 'Software Developer',
          period: 'Jan 2022 - Nov 2025',
          start: '2022-01',
          end: '2025-11',
          points: [
            'Built core Backoffice features in React/TypeScript for payment operators and merchants, including user management, role-based read-only access, PSP routing rules and configurable settings.',
            'Integrated REST APIs within a complex payment administration platform.',
            'Developed and maintained a Vue-based payment checkout and integrations: payment form validation, card-on-file flows (saved card), fee handling and adding new environments, shipping features end to end across the Cashier, its integration SDK, sandbox and documentation.',
            'Modernised CI/CD: moved builds from Jenkins to GitHub Actions, set up npm publishing workflows, led the Cashier asset move to a new CDN, and introduced SonarCloud coverage quality gates.',
            'Improved code maintainability and reliability through TypeScript refactoring, automated testing, static analysis, and test coverage improvements.',
          ],
        },
      ],
    },
    {
      org: 'Automile',
      place: 'Sept 2021 - Jan 2022',
      roles: [
        {
          title: 'Development intern',
          period: 'Sept 2021 - Jan 2022',
          start: '2021-09',
          end: '2022-01',
          points: ['Working with Typescript, Leaflet and Here Maps in order to develop new features for Automile’s web application.'],
        },
      ],
    },
    {
      org: 'Romainian Internal Affair Ministery',
      place: '2011 - 2019',
      roles: [
        {
          title: 'Operational officer',
          period: '2011 - 2019',
          start: '2011',
          end: '2019',
          points: ['Coordinated operational projects and teams, analysis, reporting and recruitment processes. Managing projects based on the national strategy and goals and coordinating the activity of 7 to 10 people.'],
        },
      ],
    },
  ],
  sv: [
    {
      org: 'Worldline / PaymentIQ',
      place: 'jan 2022 – nu',
      roles: [
        {
          title: 'Engineering Manager & mjukvaruutvecklare',
          period: 'mar 2026 – nu',
          start: '2026-03',
          points: [
            'Leder utvecklingen av betalprodukter: har definierat kodägarskap i 10 repon och automatiserat release- och review-flöden.',
            'Slutförde en avstannad migrering från KnockoutJS till React/TypeScript och levererade de återstående vyerna med en säker utrullning per handlare.',
            'Ledde ombyggnaden av betalappen Cashier från Vue 2 (end-of-life) till React/TypeScript: levererade V3 från första commit till produktionsrelease på under 4 månader, och har sedan dess levererat 13 releaser.',
            'Ledde leveransen av Cashier Plus, en betald premiumnivå av kassan, från planering till lansering på cirka 10 veckor: förfinade breda produktkrav och levererade en självbetjänad Cashier Builder och Analytics i Backoffice.',
            'Leder företagsövergripande white-labelling för B2B-varumärken: definierade strategin och leveransplanen, samordnade frontend, backend och DevOps samt levererade byggen per domän, varumärkeskontroller i alla repon och installationsinstruktioner för handlare.',
            'Förbättrade prestanda och tillförlitlighet i betalapplikationer genom arbete med Core Web Vitals, diagnostiserade och åtgärdade problem som påverkade konverteringen i kassan och gjorde incidentanalys i produktion med Coralogix och OpenSearch (även AI-driven).',
            'Stärkte kvalitet och säkerhet genom end-to-end-tester i Playwright, CI-kontroller i GitHub Actions och förbättrad sårbarhetshantering med automatiska säkerhetslarm över alla repon.',
            'Utformade och delade AI-assisterade arbetsflöden: samordnade parallella kodagenter i isolerade Git worktrees, granskade och testade ändringar före merge och införde skills för modellval per uppgift för att hantera tokenkostnader.',
            'Tog fram en prototyp för en AI-driven temagenerator för Cashier Builder som skapar anpassad styling så att Cashier matchar handlarens webbplats.',
          ],
        },
        {
          title: 'Teamlead, frontendutveckling',
          period: 'nov 2025 – mar 2026',
          start: '2025-11',
          end: '2026-03',
          points: [
            'Införde Scrum i ett tidigare splittrat team med sprintplanering, daily standups, retrospektiv och avstämningar med intressenter för att stärka samarbete, gemensamt ägarskap och insyn i leveranserna.',
            'Gjorde ett tyst och uppdelat team på 5 personer engagerat: ökade aktiviteten i teamkanalen till 5–10 meddelanden om dagen, gjorde PR-granskning till en gemensam rutin i teamkanalen vilket tredubblade antalet PR:er, ökade genomströmningen av PR:er med 50 % och halverade den typiska väntetiden på review.',
            'Ledde den tekniska samordningen av migreringen av Backoffice till React/TypeScript, levererade 7 centrala vyer och förbättrade migreringsflöden, samarbetet mellan utvecklare och enhetligheten i delade komponenter.',
            'Förbättrade leverans- och testkvalitet: tog bort manuellt godkännande av Backoffice-driftsättningar, minskade CI-overhead, strukturerade om Cypress-sviten för end-to-end-tester, lade till enhetstester i pipelinen för bootstrappern (SDK) och lade till regressionstester för dataåtkomst mellan origins.',
            'Lade grunden för white-labelling genom att förbereda 5 frontend-repon och lägga till stöd för nya miljöer.',
          ],
        },
        {
          title: 'Mjukvaruutvecklare',
          period: 'jan 2022 – nov 2025',
          start: '2022-01',
          end: '2025-11',
          points: [
            'Byggde centrala Backoffice-funktioner i React/TypeScript för betaloperatörer och handlare, bland annat användarhantering, rollbaserad läsbehörighet, routingregler för PSP:er och konfigurerbara inställningar.',
            'Integrerade REST-API:er i en komplex plattform för betaladministration.',
            'Utvecklade och förvaltade en Vue-baserad betalkassa och integrationer: validering av betalformulär, flöden för sparade kort (card-on-file), avgiftshantering och nya miljöer, och levererade funktioner hela vägen genom Cashier, dess integrations-SDK, sandbox och dokumentation.',
            'Moderniserade CI/CD: flyttade byggen från Jenkins till GitHub Actions, satte upp flöden för npm-publicering, ledde flytten av Cashier-filer till ett nytt CDN och införde kvalitetsgrindar för testtäckning i SonarCloud.',
            'Förbättrade kodens förvaltningsbarhet och tillförlitlighet genom refaktorering till TypeScript, automatiserade tester, statisk analys och ökad testtäckning.',
          ],
        },
      ],
    },
    {
      org: 'Automile',
      place: 'sep 2021 – jan 2022',
      roles: [
        {
          title: 'Utvecklarpraktikant',
          period: 'sep 2021 – jan 2022',
          start: '2021-09',
          end: '2022-01',
          points: ['Arbetade med TypeScript, Leaflet och HERE Maps för att utveckla nya funktioner i Automiles webbapplikation.'],
        },
      ],
    },
    {
      org: 'Rumäniens inrikesministerium',
      place: '2011 – 2019',
      roles: [
        {
          title: 'Operativ tjänsteman',
          period: '2011 – 2019',
          start: '2011',
          end: '2019',
          points: ['Samordnade operativa projekt och team, analys, rapportering och rekryteringsprocesser. Ledde projekt utifrån den nationella strategin och dess mål och samordnade arbetet för 7 till 10 personer.'],
        },
      ],
    },
  ],
};

type Media =
  | { kind: 'video'; src: string; poster: string; width: number; height: number; label: string }
  | { kind: 'images'; items: { src: string; width: number; height: number; alt: string }[] };

type Project = {
  id: string;
  title: string;
  context: string;
  summary: string;
  points: string[];
  tags: string[];
  media: Media;
  note?: string;
};

const projects: Record<Lang, Project[]> = {
  en: [
    {
      id: 'ai-theme',
      title: 'AI theme generator for Cashier Builder',
      context: 'Worldline / PaymentIQ · 2026 · Prototype',
      summary:
        'Merchants describe a look or paste their website’s URL, and Claude turns it into a complete payment-checkout theme they can keep refining in plain language.',
      points: [
        'Generates seed colours, fonts and design-token overrides, then applies follow-up prompts like “make the buttons yellow and the radius higher”.',
        'Live preview on phone, tablet and desktop, in light and dark mode.',
        'Bring-your-own API key, kept in memory only and never saved.',
      ],
      tags: ['React', 'TypeScript', 'Anthropic SDK', 'Design tokens'],
      media: { kind: 'video', src: '/work/cashier-ai-theme.mp4', poster: '/work/cashier-ai-theme-poster.webp', width: 1280, height: 746, label: 'Screen recording: the prompt “make the buttons yellow and the radius higher” restyles the checkout preview in Cashier Builder' },
    },
    {
      id: 'velora',
      title: 'Velora Casino: headless payments demo',
      context: 'Worldline / PaymentIQ · 2026 · Integration demo',
      summary:
        'A fictional casino built to show merchants how to integrate a headless payment cashier into their own product, end to end.',
      points: [
        'Three deposit modes side by side: iframe, no iframe, and a fully custom UI on the headless core.',
        'The casino owns its wallet, ledger and game (“Void Pong”); the payment provider is a clean seam, with live cashier events.',
        'Used in live demos and as a reference integration.',
      ],
      tags: ['React', 'TypeScript', 'Headless SDK', 'Payments'],
      media: { kind: 'video', src: '/work/velora-casino.mp4', poster: '/work/velora-casino-poster.webp', width: 1280, height: 666, label: 'Screen recording: the Velora Casino demo with game, wallet and the three deposit modes' },
    },
    {
      id: 'backoffice',
      title: 'Payment Backoffice in React',
      context: 'Worldline / PaymentIQ · 2022 – 2026',
      summary:
        'Views I built or migrated from KnockoutJS to React and TypeScript for payment operators and merchants.',
      points: [
        'Rule-based PSP routing: conditions and actions per payment method, with enable, disable and history.',
        'User management with role-based access across merchants and sub-merchants.',
        'Approval queue for pending withdrawals, with bulk actions.',
      ],
      tags: ['React', 'TypeScript', 'REST APIs', 'Migration'],
      media: {
        kind: 'images',
        items: [
          { src: '/work/backoffice-routing-rules.webp', width: 1600, height: 1056, alt: 'Routing rules editor with conditions and actions per payment method' },
          { src: '/work/backoffice-user-management.webp', width: 1600, height: 872, alt: 'User management with roles per user' },
          { src: '/work/backoffice-transactions-approval.webp', width: 1600, height: 412, alt: 'Transactions waiting for approval' },
        ],
      },
      note: 'Screenshots from a test merchant.',
    },
    {
      id: 'team',
      title: 'A team that reviews together',
      context: 'Worldline / PaymentIQ · Team leadership',
      summary:
        'How a quiet, siloed five-person frontend team became one that ships, reviews and jokes together in the open.',
      points: [
        'Introduced Scrum: sprint planning, daily stand-ups, retrospectives and stakeholder reviews.',
        'Made PR reviews a shared routine in the team channel: PR volume tripled, PR throughput rose 50% and the typical review wait halved.',
        'Team-channel activity grew to 5–10 messages a day, like this PR spree, complete with a merge-or-rebase debate.',
      ],
      tags: ['Scrum', 'Code review', 'Team leadership', 'Agile'],
      media: {
        kind: 'images',
        items: [
          { src: '/work/team-pr-spree.webp', width: 1600, height: 1254, alt: 'The team Slack channel on a busy day: a stream of pull requests with celebration reactions, a joke that all PRs need a rebase, a merge-or-rebase thread and a “PR spree!” message' },
        ],
      },
      note: 'Names, photos and repository links changed for privacy.',
    },
    {
      id: 'minimera',
      title: 'Minimera: second-hand marketplace',
      context: 'Personal project · 2026',
      summary:
        'A Swedish marketplace for second-hand goods where listing an item takes a photo and a few seconds.',
      points: [
        'Upload a photo and Claude fills in title, description, category and condition.',
        'Prices are capped at 80% of the new price, with “great deal” labels for buyers.',
        'One-time-code login, listing moderation and a privacy-first design.',
      ],
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Anthropic SDK'],
      media: { kind: 'video', src: '/work/minimera-ai-listing.mp4', poster: '/work/minimera-ai-listing-poster.webp', width: 1280, height: 882, label: 'Screen recording: creating a Minimera listing from a photo with AI' },
    },
  ],
  sv: [
    {
      id: 'ai-theme',
      title: 'AI-temagenerator för Cashier Builder',
      context: 'Worldline / PaymentIQ · 2026 · Prototyp',
      summary:
        'Handlaren beskriver ett utseende eller klistrar in sin webbplats-URL, och Claude gör om det till ett komplett tema för betalkassan som kan finjusteras med vanlig text.',
      points: [
        'Tar fram grundfärger, typsnitt och designtokens och tillämpar följdinstruktioner som ”gör knapparna gula och rundare”.',
        'Förhandsvisning direkt i mobil, surfplatta och desktop, i ljust och mörkt läge.',
        'Egen API-nyckel som bara finns i minnet och aldrig sparas.',
      ],
      tags: ['React', 'TypeScript', 'Anthropic SDK', 'Designtokens'],
      media: { kind: 'video', src: '/work/cashier-ai-theme.mp4', poster: '/work/cashier-ai-theme-poster.webp', width: 1280, height: 746, label: 'Skärminspelning: instruktionen ”gör knapparna gula och rundare” ändrar kassans förhandsvisning i Cashier Builder' },
    },
    {
      id: 'velora',
      title: 'Velora Casino: demo av headless-betalningar',
      context: 'Worldline / PaymentIQ · 2026 · Integrationsdemo',
      summary:
        'Ett fiktivt casino som visar handlare hur man integrerar en headless betalkassa i sin egen produkt, från början till slut.',
      points: [
        'Tre insättningslägen sida vid sida: iframe, utan iframe och ett helt eget gränssnitt ovanpå headless-kärnan.',
        'Casinot äger plånbok, huvudbok och spel (”Void Pong”); betalleverantören är en tydlig gräns med kassahändelser i realtid.',
        'Används i livedemos och som referensintegration.',
      ],
      tags: ['React', 'TypeScript', 'Headless SDK', 'Betalningar'],
      media: { kind: 'video', src: '/work/velora-casino.mp4', poster: '/work/velora-casino-poster.webp', width: 1280, height: 666, label: 'Skärminspelning: Velora Casino-demon med spel, plånbok och de tre insättningslägena' },
    },
    {
      id: 'backoffice',
      title: 'Backoffice för betalningar i React',
      context: 'Worldline / PaymentIQ · 2022 – 2026',
      summary:
        'Vyer som jag byggt eller migrerat från KnockoutJS till React och TypeScript för betaloperatörer och handlare.',
      points: [
        'Regelbaserad routing till PSP:er: villkor och åtgärder per betalmetod, med aktivering, inaktivering och historik.',
        'Användarhantering med rollbaserad behörighet för handlare och underhandlare.',
        'Godkännandekö för väntande uttag, med massåtgärder.',
      ],
      tags: ['React', 'TypeScript', 'REST-API:er', 'Migrering'],
      media: {
        kind: 'images',
        items: [
          { src: '/work/backoffice-routing-rules.webp', width: 1600, height: 1056, alt: 'Redigerare för routingregler med villkor och åtgärder per betalmetod' },
          { src: '/work/backoffice-user-management.webp', width: 1600, height: 872, alt: 'Användarhantering med roller per användare' },
          { src: '/work/backoffice-transactions-approval.webp', width: 1600, height: 412, alt: 'Transaktioner som väntar på godkännande' },
        ],
      },
      note: 'Skärmbilder från en testhandlare.',
    },
    {
      id: 'team',
      title: 'Ett team som granskar kod tillsammans',
      context: 'Worldline / PaymentIQ · Teamledarskap',
      summary:
        'Hur ett tyst och uppdelat frontendteam på fem personer blev ett team som levererar, granskar och skämtar tillsammans, öppet.',
      points: [
        'Införde Scrum: sprintplanering, daily stand-ups, retrospektiv och avstämningar med intressenter.',
        'Gjorde PR-granskning till en gemensam rutin i teamkanalen: antalet PR:er tredubblades, genomströmningen ökade med 50 % och den typiska väntetiden på review halverades.',
        'Aktiviteten i teamkanalen växte till 5–10 meddelanden om dagen, som den här PR-festen, komplett med en debatt om merge eller rebase.',
      ],
      tags: ['Scrum', 'Kodgranskning', 'Teamledarskap', 'Agilt'],
      media: {
        kind: 'images',
        items: [
          { src: '/work/team-pr-spree.webp', width: 1600, height: 1254, alt: 'Teamets Slack-kanal en intensiv dag: en ström av pull requests med firande reaktioner, ett skämt om att alla PR:er behöver en rebase, en tråd om merge eller rebase och meddelandet ”PR spree!”' },
        ],
      },
      note: 'Namn, bilder och repolänkar ändrade av integritetsskäl.',
    },
    {
      id: 'minimera',
      title: 'Minimera: marknadsplats för begagnat',
      context: 'Eget projekt · 2026',
      summary:
        'En svensk marknadsplats för begagnade saker där det räcker med ett foto och några sekunder för att lägga upp en annons.',
      points: [
        'Ladda upp ett foto så fyller Claude i titel, beskrivning, kategori och skick.',
        'Priset får vara högst 80 % av nypriset, och köpare ser etiketter för bra fynd.',
        'Inloggning med engångskod, moderering av annonser och integritet i första hand.',
      ],
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Anthropic SDK'],
      media: { kind: 'video', src: '/work/minimera-ai-listing.mp4', poster: '/work/minimera-ai-listing-poster.webp', width: 1280, height: 882, label: 'Skärminspelning: en annons i Minimera skapas från ett foto med AI' },
    },
  ],
};

const panelWords = {
  hero: ['WEL', 'COME'],
  about: ['AB', 'OUT'],
  projects: ['WO', 'RK'],
  work: ['EXPE', 'RIENCE'],
  skills: ['SKI', 'LLS'],
  contact: ['CON', 'TACT'],
} as const;

export const content = {
  en: {
    lang: 'en',
    locale: 'en_SE',
    title: 'Melinda Sava – Senior Software Developer & Engineering Manager, Stockholm',
    description:
      'Melinda Sava is a senior software developer and engineering manager in Stockholm, Sweden, specialising in React, TypeScript and Vue for fintech and payment platforms, with a focus on AI-assisted development.',
    nav: { projects: 'Work', work: 'Experience', skills: 'Skills', contact: 'Contact', about: 'About me', switchLabel: 'Svenska', switchHint: 'Läs på svenska' },
    eyebrow: 'Stockholm, Sweden · Fintech & payments',
    words: panelWords,
    menuLabel: 'Menu',
    closeLabel: 'Close menu',
    homeLabel: 'Welcome',
    vibe: {
      question: 'Does this page feel too boring?',
      hint: 'Same content, fresh coat of paint.',
      makeModern: 'Make it modern ✨',
      makeAccessible: 'Make it easier to read',
      dismiss: 'No thanks',
      close: 'Close',
    },
    themes: {
      label: 'Theme',
      legend: 'Choose how the page looks',
      classic: { name: 'Retro', desc: 'Warm 70s and 80s vibes' },
      modern: { name: 'Modern', desc: 'Dark with bright colours' },
      accessible: { name: 'Easy to read', desc: 'Clear text, strong contrast, no movement' },
    },
    role: ['Engineering Manager', 'Senior Software Developer'],
    roleSub: 'React · TypeScript · Engineering Manager',
    lede: 'I’m passionate about building great software, from writing the code to leading the team that ships it. I specialize in React, TypeScript and Vue, and I’ve delivered payment platforms, enterprise systems and third-party integrations.',
    cta: { primary: 'Get in touch', secondary: 'LinkedIn' },
    stats: [
      { value: '~10 wk', label: 'Cashier Plus: from planning to launch' },
      { value: '+50%', label: 'PR throughput in the team I led' },
      { value: '10×', label: 'team-channel engagement' },
      { value: '3×', label: 'PR volume in the team I led' },
    ],
    aboutTitle: 'About me',
    about: [
      'I’ve helped modernize business-critical systems, including a large-scale migration from KnockoutJS to React and the rebuilding of a production payment application.',
      'I also design AI-assisted development workflows, combining coding agents, custom automation, testing, and human oversight to improve how software is built.',
      'I enjoy solving complex problems, creating reliable and intuitive products, and working with people who care about building technology that makes a difference.',
    ],
    projectsTitle: 'Selected work',
    projectsIntro: 'Recent things I’ve built, at work and on my own.',
    playLabel: 'Play',
    pauseLabel: 'Pause',
    projects: projects.en,
    workTitle: 'Experience',
    jobs: jobs.en,
    skillsTitle: 'Skills',
    skills: skillGroups.en,
    eduTitle: 'Education',
    education: [
      { name: 'Professional Agile Leadership I (PAL I)', org: 'Scrum.org', period: 'Aug 2025' },
      { name: 'KYH Yrkeshögskola Stockholm - Front end Developer', org: '', period: '2020 - 2022' },
      { name: 'Master’s of Psychology-Intelligence', org: 'Academia Nationala de Informatii Mihai Viteazul Bucuresti', period: '2011 - 2013' },
      { name: 'Bachelor’s of Psychology-Intelligence', org: 'Academia Nationala de Informatii Mihai Viteazul Bucuresti', period: '2008 - 2011' },
    ],
    langsTitle: 'Languages',
    languages: [
      { name: 'English', level: 'C2' },
      { name: 'Swedish', level: 'C1' },
    ],
    contactTitle: 'Let’s talk',
    contactText: 'Open to conversations about senior frontend, tech lead and engineering manager roles in Sweden.',
    footer: 'Built with Astro. Static HTML, no tracking.',
  },
  sv: {
    lang: 'sv',
    locale: 'sv_SE',
    title: 'Melinda Sava – Senior systemutvecklare & Engineering Manager, Stockholm',
    description:
      'Melinda Sava är senior systemutvecklare, frontendutvecklare och engineering manager i Stockholm med fokus på React, TypeScript och Vue för fintech och betallösningar, och på AI-assisterad utveckling.',
    nav: { projects: 'Projekt', work: 'Erfarenhet', skills: 'Kompetens', contact: 'Kontakt', about: 'Om mig', switchLabel: 'English', switchHint: 'Read in English' },
    eyebrow: 'Stockholm · Fintech & betallösningar',
    // Decorative panel words stay in English in every language.
    words: panelWords,
    menuLabel: 'Meny',
    closeLabel: 'Stäng menyn',
    homeLabel: 'Välkommen',
    vibe: {
      question: 'Känns sidan för tråkig?',
      hint: 'Samma innehåll, nytt utseende.',
      makeModern: 'Gör den modern ✨',
      makeAccessible: 'Gör den lättare att läsa',
      dismiss: 'Nej tack',
      close: 'Stäng',
    },
    themes: {
      label: 'Utseende',
      legend: 'Välj hur sidan ska se ut',
      classic: { name: 'Retro', desc: 'Varm 70- och 80-talskänsla' },
      modern: { name: 'Modern', desc: 'Mörk med starka färger' },
      accessible: { name: 'Lättläst', desc: 'Tydlig text, stark kontrast, ingen rörelse' },
    },
    role: ['Engineering Manager', 'Senior mjukvaruutvecklare'],
    roleSub: 'React · TypeScript · Engineering Manager',
    lede: 'Jag brinner för att bygga riktigt bra mjukvara, från att skriva koden till att leda teamet som levererar den. Jag är specialiserad på React, TypeScript och Vue och har levererat betalplattformar, affärssystem och tredjepartsintegrationer.',
    cta: { primary: 'Hör av dig', secondary: 'LinkedIn' },
    stats: [
      { value: '~10 v', label: 'Cashier Plus: från planering till lansering' },
      { value: '+50 %', label: 'genomströmning av PR:er i teamet jag ledde' },
      { value: '10×', label: 'engagemang i teamkanalen' },
      { value: '3×', label: 'fler PR:er i teamet jag ledde' },
    ],
    aboutTitle: 'Om mig',
    about: [
      'Jag har hjälpt till att modernisera affärskritiska system, bland annat en storskalig migrering från KnockoutJS till React och ombyggnaden av en betalapplikation i produktion.',
      'Jag utformar också AI-assisterade utvecklingsflöden som kombinerar kodagenter, egen automation, tester och mänsklig tillsyn för att förbättra hur mjukvara byggs.',
      'Jag tycker om att lösa komplexa problem, skapa pålitliga och intuitiva produkter och arbeta med människor som bryr sig om att bygga teknik som gör skillnad.',
    ],
    projectsTitle: 'Utvalda projekt',
    projectsIntro: 'Sådant jag byggt nyligen, på jobbet och på egen hand.',
    playLabel: 'Spela',
    pauseLabel: 'Pausa',
    projects: projects.sv,
    workTitle: 'Erfarenhet',
    jobs: jobs.sv,
    skillsTitle: 'Kompetens',
    skills: skillGroups.sv,
    eduTitle: 'Utbildning',
    education: [
      { name: 'Professional Agile Leadership I (PAL I)', org: 'Scrum.org', period: 'aug 2025' },
      { name: 'KYH Yrkeshögskola Stockholm – Frontendutvecklare', org: '', period: '2020 – 2022' },
      { name: 'Master i psykologi – underrättelse', org: 'Academia Nationala de Informatii Mihai Viteazul, Bukarest', period: '2011 – 2013' },
      { name: 'Kandidat i psykologi – underrättelse', org: 'Academia Nationala de Informatii Mihai Viteazul, Bukarest', period: '2008 – 2011' },
    ],
    langsTitle: 'Språk',
    languages: [
      { name: 'Engelska', level: 'C2' },
      { name: 'Svenska', level: 'C1' },
    ],
    contactTitle: 'Hör av dig',
    contactText: 'Öppen för samtal om roller som senior frontendutvecklare, tech lead eller engineering manager i Sverige.',
    footer: 'Byggd med Astro. Statisk HTML, ingen spårning.',
  },
} as const;

export type Content = (typeof content)[Lang];
