// Projects section configuration
const projectsConfig = {
  title: "Projects",
  projects: [
    {
      title: "Calendar Curator",
      date: "February 2025 - May 2025 (entrepreneurship project)",
      description:
        "Calendar Curator lets you clean up your synced calendar by picking which events to keep and removing the rest.",
      whatIs:
        "Calendar Curator is a web app that helps you clean up your synced calendar feeds, especially for students who import their entire university class schedules. It connects to your live calendar link, lets you pick which events you actually want to keep or ignore, and automatically removes the rest from your calendar.",
      whyBuilt:
        "This was an entrepreneurial project to solve my own problem: my agenda kept getting cluttered with classes I rarely attended, but editing a synced calendar removed the benefits of live updates. I made Calendar Curator so I could review my events and only keep the ones I cared about while still syncing new changes from my uni’s feed.",
      technicalDescription:
        "The backend is a Flask app that fetches live ICS feeds and connects to Google Calendar or Outlook Calendar APIs to update your events in real time. The frontend is vanilla JS and lets you confirm which events you’ll attend. The platform taught me a lot about OAuth, third-party calendar APIs, and webhooks. Over 6,000 visitors tried it, though only a few signed up long-term. I eventually paused updates after usage dropped.",
      demo: "./lib/demos/calendarcurator.mp4",
      demoIsVideo: true,
      demoAlt: "Calendar Curator promo video",
      externalLink: "https://calendarcurator.com",
      linkType: "url",
      linkText: "View website",
    },
    {
      title: "SnapTag",
      date: "November 2024 - February 2025 (bachelor)",
      description:
        "A prototype app that turns physical activity into a photo-based game of tag. Snap a player to tag them; lobbies update in real time.",
      whatIs:
        "SnapTag is a mobile application that combines physical activity with technology by creating a photo-based game of tag. Players use their phones to take photos of other players to tag them, and game lobbies update in real-time.",
      whyBuilt:
        "As part of a project focused on promoting physical activity and social interaction among youth, we set out to create a game that would get people moving and connecting in creative ways. Using photos as the mechanism for tagging adds a modern, interactive element to the classic game of tag, making it especially appealing and engaging for younger players.",
      technicalDescription:
        "Developed using React Native with Expo for cross-platform mobile development. Firebase Realtime Database handles synchronized game state and lobby management. The app uses device cameras for photo capture and integrates AI for player recognition. Real-time updates ensure all players see the current game state instantly.",
      demo: "./lib/demos/SnapTag.mp4",
      demoIsVideo: true,
      demoAlt: "SnapTag promo video",
      externalLink:
        "./lib/docu/SnapTagReport.docx",
      linkType: "file",
      linkText: "Read Report",
    },
    { 
      title: "CrowdTag",
      date: "September 2024 - December 2024 (entrepreneurship project)",
      description:
        "We tried to build a business where, after an event, you’d only get the photos you actually appear in. We experimented with different ways to identify people in photos and ended up using facial recognition.",
      whatIs:
        "CrowdTag was a platform that used AI facial recognition to match people to their photos at events. Attendees could join with a code and selfie, and get a personal gallery with only the photos they actually appeared in. We ran both test and pilot events, and got positive feedback in our survey and analytics. People liked not having to search through hundreds of photos.",
      whyBuilt:
        "This started as a business idea because we wanted to solve the annoying problem of finding yourself in event photos. However, even though users liked the result, it wasn't a big enough problem for people to pay for it, so we decided not to continue.",
      technicalDescription:
        "The backend is Flask with AI-powered facial recognition to process images. The frontend uses JavaScript, Tailwind, and HTML for the gallery and upload flows. There's basic encryption for event passwords and uploaded images. We hosted the app and ran surveys to gather feedback during the tests.",
      demo: "./lib/demos/crowdtag.mp4",
      demoIsVideo: true,
      demoAlt: "CrowdTag demo video",
      externalLink: "https://docs.google.com/forms/d/1IWRGWPOD1vverfFg4fOilxB4TX6y1AwPm8yMOgBpQsI/viewanalytics",
      linkType: "url",
      linkText: "View Survey Results",
    },
    {
      title: "JETBOT",
      date: "February 2024 - April 2024 (bachelor)",
      description:
        "A speech-to-speech chatbot in a physical embodiment, built for Just Eat Takeaway (JET). Includes a custom chatbot interface in pygame and a hardware chassis we designed from scratch.",
      whatIs:
        "JETBOT is a physical interactive agent with a screen and speech-to-speech capability, developed as a university project for the client Just Eat Takeaway (JET). Our team designed and built both the hardware chassis and the conversational agent, integrating a custom chatbot interface in pygame and a real speech-to-speech pipeline.",
      whyBuilt:
        "This project was created for JET as part of a university module, giving us the opportunity to work directly with a real client. We aimed to push our skills in hardware prototyping, conversational AI, custom interface design, and user experience research. We delivered the bot to JET, conducted tests on-site, and used surveys to gain insight into user behavior and improve the system's UX.",
      technicalDescription:
        "We designed and assembled the hardware (including chassis modeling, electronics, and screen integration) and built a Python-based speech-to-speech agent using multiple APIs. The custom chatbot interface was implemented in pygame.",
      demo: "./lib/demos/jetbot.mp4",
      demoIsVideo: true,
      demoAlt: "JETBOT physical agent image",
      externalLink: "./lib/docu/JetBotReport.docx",
      linkType: "file",
      linkText: "Read Research Paper",
    },
    {
      title: "Drone delivery",
      date: "July 2022 - January 2023 (highschool)",
      description:
        "Research project exploring the feasibility and complexity of drone delivery, including a working prototype.",
      whatIs:
        "A comprehensive research project that explores the feasibility and technical challenges of autonomous drone delivery systems. The project includes a working simulation prototype demonstrating route planning, obstacle avoidance, and package delivery.",
      whyBuilt:
        "This was a high school research project where I wanted to explore emerging technology and understand the engineering challenges behind autonomous delivery systems. The project combined my interests in AI, robotics, and real-world problem solving.",
      technicalDescription:
        "The project includes a Unity-based simulation environment with AI pathfinding algorithms for autonomous navigation. Microcontrollers were used to control physical drone components in a prototype. 3D modeling was used to create the drone chassis.",
      demo: "./lib/demos/drone-delivery.png",
      demoIsVideo: false,
      demoAlt: "Final drone prototype",
      externalLink: "./lib/docu/DroneDelivery.docx",
      linkType: "file",
      linkText: "Read Research Paper",
    },
    {
      title: "WFC map generation",
      date: "July 2022 - August 2023 (highschool)",
      description:
        "A rule-based terrain generator inspired by Wave Function Collapse. Generates maps with adjacency constraints.",
      whatIs:
        "A web-based procedural terrain generator that uses the Wave Function Collapse algorithm to create maps with adjacency constraints. The generator creates coherent, rule-based terrains that respect predefined tile connection rules.",
      whyBuilt:
        "I was fascinated by procedural generation and wanted to understand how algorithms like Wave Function Collapse work. This project allowed me to explore creative coding and algorithmic art while learning about constraint-based generation.",
      technicalDescription:
        "Built with P5.js for canvas rendering and visualization. The implementation uses a constraint-based approach where each tile has rules about which tiles can be adjacent. The algorithm collapses possibilities until a valid map is generated, ensuring visual coherence and respecting the predefined rules.",
      demo: "./lib/demos/map-generation.mp4",
      demoIsVideo: true,
      demoAlt: "WFC map generation example",
      externalLink: "https://map.noahvp.dev",
      linkType: "url",
      linkText: "View Live Demo",
    },
    {
      title: "Nodejs multiplayer game",
      date: "January 2022 - June 2022 (highschool)",
      description:
        "A 4-player browser battle royale built with Node.js and p5.js.",
      whatIs:
        "A real-time multiplayer battle royale game that runs entirely in the browser. Up to 4 players can join simultaneously and compete in a shared game world with synchronized gameplay.",
      whyBuilt:
        "This was a specialization project in high school where I wanted to learn about real-time networking and multiplayer game development. Building a battle royale was a great challenge to understand WebSocket communication and game state synchronization.",
      technicalDescription:
        "Built with Node.js server handling WebSocket connections for real-time communication between players. The frontend uses P5.js for rendering and game logic. The server maintains game state and synchronizes player positions, actions, and game events across all connected clients. The architecture handles latency compensation and ensures fair gameplay.",
      demo: "./lib/demos/nodejs-game.mp4",
      demoIsVideo: true,
      demoAlt: "Nodejs multiplayer game screenshot",
      externalLink: "https://github.com/Noah-vp/Nodejs-SocketIO-Multiplayer-game",
      linkType: "url",
      linkText: "View Source Code",
    },
    {
      title: "8 bit ALU",
      date: "August 2022 - January 2022 (highschool)",
      description:
        "Following Ben Eater's series, I implemented an 8-bit ALU on breadboards using discrete ICs.",
      whatIs:
        "An 8-bit Arithmetic Logic Unit (ALU) built entirely on breadboards using discrete integrated circuits. This project demonstrates fundamental computer architecture principles at the hardware level.",
      whyBuilt:
        "I wanted to understand how computers work at the most fundamental level. Building an ALU from scratch helped me grasp the connection between electrical circuits and computation, providing deep insight into computer architecture.",
      technicalDescription:
        "Implemented using 74LS series ICs on breadboards following Ben Eater's educational series. The ALU performs basic arithmetic operations (addition, subtraction) and logic operations (AND, OR, XOR) on 8-bit inputs. The circuit uses discrete logic gates and demonstrates how binary operations are performed at the hardware level.",
      demo: "./lib/demos/8-bit-ALU.png",
      demoIsVideo: false,
      demoAlt: "8-bit ALU breadboard",
      externalLink: "https://eater.net/8bit/",
      linkType: "url",
      linkText: "View Tutorial Series",
    },
    {
      title: "AI learns to drive",
      date: "August 2021 - January 2021 (highschool)",
      description:
        "A browser-based AI driving demo where a car learns to avoid obstacles using ray casting and a neural network. Inspired by The Coding Train, with custom mutation and ray-casting functions.",
      whatIs:
        "A browser-based simulation where a neural network learns to control a car and navigate around obstacles. The AI uses ray casting to sense its environment and evolves through a custom genetic algorithm.",
      whyBuilt:
        "This was my introduction to machine learning and neural networks. Inspired by The Coding Train, I wanted to understand how AI learns through trial and error, and visualize the learning process in real-time.",
      technicalDescription:
        "Built with P5.js for visualization and simulation. The neural network uses ray casting to detect obstacles and make steering decisions. A genetic algorithm evolves the population over generations, with custom mutation functions to improve learning. The system demonstrates how simple neural networks can learn complex behaviors through evolution.",
      demo: "./lib/demos/ai-learns-to-drive.mp4",
      demoIsVideo: true,
      demoAlt: "AI learns to drive simulation",
      externalLink: "https://ai.noahvp.dev",
      linkType: "url",
      linkText: "View Live Demo",
    },
  ],
};
