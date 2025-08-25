// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cuuthegioi',
  },
  // /portfolio/ or /
  base: '/portfolio/',
  projects: {
    github: {
      display: false,
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8,
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Telegram Gemini Bridge',
          description:
            'Talk to Gemini through Telegram, your AI assistant, always on, always context-aware',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          githubUrl: 'https://github.com/cuuthegioi/telegram-gemini-bridge',
          tech: ['ExpressJS', 'TelegramBotAPI', 'GoogleGenerativeAPI'],
        },
        {
          title: 'Instagram Marketing Platform',
          description:
            'This project develops a platform for automating Instagram comment replies. Users can create rules and templates to automatically respond to comments, while the platform manages subscriptions and payments for access to these features',
          imageUrl:
            '/portfolio/studio-one.png',
          link: 'https://studio-one-ig-marketing.com/',
          tech: ['NextJS', 'ExpressJS', 'MySQL', 'AWS SQS', 'AWS Lambda', 'StripeAPI', 'MetaBusinessAPI', 'InstagramAPIs'],
        },
        {
          title: 'Corporate Website for Industrial Company',
          description:
            'Designed and developed a corporate website for Toyo Kuni, a company specializing in manufacturing and industrial solutions. The site provides detailed product information, company insights, and service offerings, ensuring a user-friendly experience with a clean and professional design. Optimized for performance, accessibility, and SEO to enhance online presence and customer engagement',
          imageUrl:
            '/portfolio/toyokuni.png',
          link: 'https://www.toyo-kuni.co.jp/',
          tech: ['ReactJS', 'NextJS', 'TypeScript'],
        },
        {
          title: 'Flood Forecasting Platform',
          description:
            'This project focuses on flood forecasting for Tokyo over the next 10, 25, and 50 years. It analyzes rising sea levels and predicts potential flood scenarios. Additionally, it assesses the damage risk to key assets such as buildings, public offices, and administrative areas based on sea level rise data. The goal is to provide accurate insights for urban planning and disaster prevention',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          tech: ['ReactJS', 'NestJS', 'Docker', 'MySQL'],
        },
        {
          title: 'Travel Portal',
          description:
            'This project is a microservice-based travel portal designed for both travelers and travel agents. It allows users to book flights, hotel rooms, and airport transfers seamlessly. The system provides a scalable and modular architecture, enabling travel agents to efficiently manage bookings and offer personalized services',
          imageUrl:
            '/portfolio/voyager.png',
          link: 'https://hotelista.jp/',
          tech: ['VueJS', 'NestJS', 'Docker', 'Google Cloud Service', 'PostgreSQL'],
        },
        {
          title: 'Study Abroad Consulting System',
          description:
            'This project is a study abroad consulting system that helps students connect with education advisors. It allows users to schedule consultation appointments, manage scholarship consultation registrations, and provides tools for sales workshift scheduling. The system also includes a timesheet management module to efficiently track advisor availability and optimize scheduling',
          imageUrl:
            '/portfolio/CPA-1.png',
          link: 'https://reserve.cpa-net.jp/',
          tech: ['Google App Script', 'Google Cloud Service', 'JQuery', 'ExpressJS', 'GoogleChatAPI', 'GoogleCalendar', 'ZoomAPI', 'Sendgrid'],
        },
        {
          title: 'Financial Planning System',
          description:
            'This project is a comprehensive financial planning system designed to help users manage their finances and make informed decisions. By analyzing customer income, insurance policies, loan profiles, and real estate assets, the system provides personalized financial assessments and develops long-term financial plans. It offers tailored recommendations for spending, shopping, saving, and retirement',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          tech: ['ExpressJS', 'ReactJS', 'Redux', 'AWS', 'MySQL', 'Ruby'],
        },
        {
          title: 'Booking App',
          description:
            'This app provides booking services for cars, passenger, along with other great utilities',
          imageUrl:
            '/portfolio/meemo2.PNG',
          tech: ['ReactNative', 'GoogleMapAPI', 'GraphQL'],
        },
        {
          title: 'Swimming Competition Records Portal',
          description:
            'This project is an official swimming competition records portal recognized by the Japan Swimming Federation. It serves as a centralized platform for tracking swimming tournaments, athlete profiles, personal achievements, and official records. Users can search for competition results, follow live event updates, and access ranking statistics',
          imageUrl:
            '/portfolio/swimrecord.png',
          link: 'https://result.swim.or.jp/',
          tech: ['ReactJS', 'Redux', 'ReChart', 'Firebase'],
        },
        {
          title: 'PhotoAC',
          description:
            'This project aims to renovate a series of portfolio websites, namely PhotoAC, IllustAC, SilhouetteAC, for users to upload, download, and purchase photos.',
          imageUrl:
            '/portfolio/ac1.png',
          link: 'https://en.photo-ac.com/',
          tech: ['NodeJS', 'AWS', 'Serverless', 'ReactJS', 'Redux', 'Redux-saga', 'NextJS', 'Elastic Search'],
        },
        {
          title: 'Survey and Information Collection Platform',
          description:
            'This project is a survey and information collection platform designed for schools, hospitals, and nursing homes to track and manage patient and student records. The system allows nurses and caregivers to efficiently gather, update, and access CV-style information, supporting personalized care, treatment, and education planning',
          imageUrl:
            'https://pitout.co.jp/kirokuai/static/image/group-37@2x.png',
          link: 'https://pitout.co.jp/kirokuai/',
          tech: ['AWS', 'KoaJS', 'ReactJS', 'LINE CLI'],
        },
        {
          title: 'TrueBanker',
          description:
            'This portal between companies and organizations provides financial services (taxes, insurance, credit, and banking) to individuals in need of services. In charge of customer discussion, analysis.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          tech: ['Node.JS', 'AngularJS 2', 'MongoDB', 'Google Compute Engine', 'Jenkins'],
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Son Ngo', description: '', imageURL: '' },
  social: {
    linkedin: 'sonnt805',
    telegram: 'cuuthegioi',
    website: 'https://cuuthegioi.com',
    phone: '',
    email: 'sonnt00805@gmail.com',
  },
  resume: {
    fileUrl:
      '/portfolio/sonngo-resume.pdf',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Redux',
    'React Native',
    'Next.js',
    'Node.js',
    'Express.js',
    'Nest.js',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Tailwind',
    'AWS',
    'CI/CD',
    'Microservices',
    'RESTful API',
    'GraphQL',
    'Jest',
    'Serverless',
    'Event-Driven Architecture',
    'Third Party Integration',
    'Team management',
    'Project planning',
    'Scope Management'
  ],
  experiences: [
    {
      company: 'Hexabase Inc',
      position: 'Frontend Developer',
      from: '2023',
      to: '2025',
      companyLink: 'https://hexabase.com',
    },
    {
      company: 'ReactPlus Jsc',
      position: 'Full Stack Developer/Team Leader',
      from: '2018',
      to: '2023',
      companyLink: 'https://www.reactplus.vn/',
    },
    {
      company: 'Sphinx Software Jsc',
      position: 'Full Stack Developer/Team Leader',
      from: '2015',
      to: '2018',
      companyLink: 'https://sphinx.vn/',
    },
    {
      company: 'Vnext Software Jsc',
      position: 'Software Engineer',
      from: '2013',
      to: '2015',
      companyLink: 'https://vnext.vn/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'FPT University',
      degree: 'Bachelor of Information Technology',
      from: '2008',
      to: '2013',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
