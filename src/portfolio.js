/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhishek Singh",
  title: "Hi all, I'm Abhishek",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WSgx0fCl8TghcTw_VV1y00cq7HomKg2M/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/singhabhishek365",
  linkedin: "https://www.linkedin.com/in/abhishek-s-533986187/",
  gmail: "singhabhishek2735@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100007719405019",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "dart",
    //   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
    // },
    // {
    //   skillName: "flutter",
    //   fontAwesomeClassname: "fab fa-flutter"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }

      // Frontend
      {
        skillName: "HTML5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "CSS3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "ReactJS",
        fontAwesomeClassname: "fab fa-react"
      },
      {
        skillName: "Flutter",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
      },
      {
        skillName: "Dart",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
      },
      // {
      //   skillName: "Riverpod (Flutter)",
      //   imageUrl: "https://raw.githubusercontent.com/rrousselGit/riverpod/master/assets/logo.svg"
      // },
    
      // Backend
      {
        skillName: "Node.js",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "NestJS",
        imageUrl: "https://nestjs.com/img/logo-small.svg"
      },
      {
        skillName: "Express.js",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
      },
      // {
      //   skillName: "Redis",
      //   imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg"
      // },
    
      // Databases
      {
        skillName: "PostgreSQL",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
      },
      {
        skillName: "MongoDB",
        imageUrl: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
      },
      {
        skillName: "Firebase",
        fontAwesomeClassname: "fas fa-fire"
      },
      {
        skillName: "SQL",
        fontAwesomeClassname: "fas fa-database"
      },
    
      // DevOps / Tools
      {
        skillName: "AWS",
        fontAwesomeClassname: "fab fa-aws"
      },
      {
        skillName: "Docker",
        fontAwesomeClassname: "fab fa-docker"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm"
      },
      {
        skillName: "Git & GitHub",
        fontAwesomeClassname: "fab fa-github"
      },
    
      // Programming Languages
      {
        skillName: "Python",
        fontAwesomeClassname: "fab fa-python"
      },
      {
        skillName: "TypeScript",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      },
      {
        skillName: "Swift",
        fontAwesomeClassname: "fab fa-swift"
      },
    
      // Architecture / Frameworks
      // {
      //   skillName: "Clean Architecture",
      //   imageUrl: "https://miro.medium.com/v2/resize:fihttps://raw.githubusercontent.com/jasontaylordev/CleanArchitecture/main/.github/logo.pngt:1200/format:webp/1*Jq-fcKbf1m4RnPLiF2HYtA.png"
      // },
      {
        skillName: "Advanced Architecture",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
      },
      {
        skillName: "REST API",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2798/2798007.png"
      },
      // {
      //   skillName: "WebSockets",
      //   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Websockets.png"
      // },
    
      // ERP
      {
        skillName: "ERPNext",
        imageUrl: "https://avatars.githubusercontent.com/u/897077?s=200&v=4"
      },
      // {
      //   skillName: "Frappe Framework",
      //   imageUrl: "https://frappe.io/files/frappe-logo.svg"
      // }
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "College of Engineering, Chandigarh",
      logo: require("./assets/images/cgc logo.png"), // Replace with your actual college logo if available
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "August 2017 – May 2021",
      desc: "Graduated with a strong foundation in electronics, embedded systems, and signal processing. Developed a passion for software development and transitioned into mobile app development during final year.",
      descBullets: [
        "Built 5+ academic and personal projects, including IoT systems and basic Android apps.",
        "Self-learned Flutter and C++ alongside coursework, laying the groundwork for a future in software engineering."
      ]
    },
    
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Lead (Full Stack)",
      company: "Nestorbird",
      companylogo: require("./assets/images/nestorbird_logo.jpeg"),
      date: "June 2024 – Present",
      desc: "Leading the end-to-end development of scalable web and mobile applications with a focus on clean architecture, performance optimization, and cross-functional team collaboration.",
      descBullets: [
        "Architected and delivered multiple enterprise-grade applications using Flutter, Node.js, and PostgreSQL, ensuring maintainability and scalability.",
        "Led technical discussions with stakeholders, translating business requirements into robust technical solutions.",
        "Optimized application performance by implementing caching, lazy loading, and efficient database queries.",
        "Integrated third-party APIs, analytics, and cloud services (AWS, Firebase) to enhance product capabilities."
      ]
    },
    {
      role: "Software Engineer (Flutter)",
      company: "Nestorbird",
      companylogo: require("./assets/images/nestorbird_logo.jpeg"),
      date: "May 2022 – June 2024",
      desc: "Specialized in building high-performance, cross-platform mobile applications using Flutter. Focused on clean architecture, scalable codebases, and advanced state management.",
      descBullets: [
        "Developed and maintained production-grade apps with 100k+ downloads, delivering smooth user experiences and robust offline support.",
        "Implemented clean architecture with Riverpod and BLoC for scalable, maintainable code.",
        "Integrated Firebase, REST APIs, SQLite, and WebSockets for real-time and offline features.",
        "Led end-to-end development including UI/UX, animations, testing, and CI/CD automation.",
        "Contributed to architecture decisions, mentoring junior Flutter developers, and improving team workflows."
      ]
    },
    
    {
      role: "Project Engineer",
      company: "Maxval Technologies", // Replace with actual name if you'd like
      companylogo: require("./assets/images/maxval.jpg"),
      date: "Feb 2021 – May 2022",
      desc: "Worked on IoT-based projects, bridging the gap between hardware and software teams. Managed cross-functional teams to deliver smart solutions for real-world use cases.",
      descBullets: [
        "Led technical execution of IoT deployments including smart sensors and embedded systems.",
        "Collaborated with clients and vendors to ensure timely delivery and optimal integration.",
        "Created detailed documentation, conducted training sessions, and supported system troubleshooting.",
        "Transitioned into mobile development by self-learning Flutter during off-hours, showcasing initiative and a strong passion for tech."
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/460x0w.webp"),
      projectName: "Whistlr Network ",
      projectDesc: 
      "Social Media App (Flutter + Firebase)A real-time social media app built with Flutter and Firebase featuring live chat, real-time feed, follow/unfollow system, media uploads, push notifications, and Firebase Auth. Clean UI with full offline support and instant sync.",
      footerLink: [
        {
          name: "Play Store link",
          url: "https://play.google.com/store/apps/details?id=com.etaprojects.whistlr&pcampaignid=web_share&pli=1"
        },
        {
          name: "App Store link",
          url: "https://apps.apple.com/us/app/whistlr-network/id6737210342"
        }

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Screenshot 2025-08-23 at 10.36.25 PM.png"),
      projectName: "EditorsApp",
      projectDesc: "EditorsApp is a Social Networking Platform that allows users to post Updates on current events from around the world, share career opportunities, network with people who share their interests, post new developments, make public announcements, see trendy videos, News releases, upload videos, write & publish short articles. ",
      footerLink: [
        {
          name: "Play Store link",
          url: "https://play.google.com/store/apps/details?id=com.editorsapp.editorsapp&hl=en_IN"
        },
        {
          name: "App Store link",
          url: "https://apps.apple.com/de/app/editorsapp/id6476656253?l=en-GB"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Unmachable Dedication Award",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Leaders Choice Award",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "Rising Star Award",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Unmatchable Dedication Award",
      subtitle:
        "Recognized for exceptional commitment and delivery as a Software Developer.",
      image: require("./assets/images/Untitled design (1).png"),
      imageAlt: "Award Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add your certificate link here
        },
        {
          name: "Award Letter",
          url: "" // Add your award letter link here
        }
      ]
    },
    {
      title: "Leader's Choice Award",
      subtitle:
        "Awarded as an Associate for outstanding leadership, ownership, and problem-solving in team projects.",
      image: require("./assets/images/leaderchoice.png"),
      imageAlt: "Leadership Award Logo",
      footerLink: [
        {
          name: "View Award Details",
          url: "" // Add award/project link here if available
        }
      ]
    },
    {
      title: "Rising Star Award",
      subtitle:
        "Received during internship for showing rapid growth and initiative across multiple projects.",
      image: require("./assets/images/Rising Star.jpg"),
      imageAlt: "Rising Star Logo",
      footerLink: [
        {
          name: "Internship Certificate",
          url: "" // Add internship certificate link here
        },
        {
          name: "Final Project",
          url: "" // Add final project or demo link here
        }
      ]
    }
  ],
  display: true
};


// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6280790883",
  email_address: "singhabhishek2735@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
