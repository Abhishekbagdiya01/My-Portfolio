import happyTails from "../assets/projects/HappyTails.png"
import taskmanager from "../assets/projects/Task-Manager.png"
import bookai from "../assets/projects/BookAI.png"
import carvaan from "../assets/projects/Carvaan.jpg"
import notecraft from "../assets/projects/NoteCraft.jpg"
import trackNgo from "../assets/projects/Track-N-Go.jpg"
import echo from "../assets/projects/Echo.jpg"

export const NAME = `Abhishek Bagdiya`

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable applications. I have honed my skills in front-end technologies like Flutter, React Native and React, as well as back-end technologies like Firebase, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `A highly motivated and results-oriented recent MCA graduate eager to contribute my skills and passion for mobile application development to a challenging and rewarding role.  Proficient in Flutter, React Native, and Expo, I possess a strong foundation in building cross-platform mobile applications. My expertise extends beyond front-end development, encompassing back-end technologies such as Node.js, Express.js, MongoDB, and PostgreSQL. I am familiar with architectural patterns like MVVM and adhere to clean code principles, ensuring maintainable and scalable applications.  My academic background has provided me with a solid understanding of software development methodologies, and I am a quick learner, always eager to explore and master new technologies. I thrive in collaborative environments and am confident in my ability to contribute effectively to a team.  Beyond coding, I am passionate about staying up-to-date with the latest industry trends and enjoy exploring innovative solutions.  I am excited to begin my career in mobile development and make a meaningful impact.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - May 2024",
    role: "Flutter Developer Intern",
    company: "YugaTechno ",
    description: `• Developed and optimized desktop applications for local business owners to manage customer data and generate invoices, enhancing business operations. \n
• Implemented custom keyboard bindings to streamline workflows and minimize mouse usage, tailoring the application to the owner’s specific preferences. \n
• Built mobile applications using Flutter and Firebase, focusing on seamless integration and user-friendly interfaces. \n
• Acquired proficiency in Linux, mastering Vim motions, and configuring Neovim for an efficient development environment.`,
    technologies: ["Flutter", "Dart", "Firebase", "Hive"],
  },

];

export const PROJECTS = [
  {
    title: "Task Manager App ",
    image: taskmanager,
    description:
      "A simple offline-first Task Manager App built with Flutter for the frontend and Node with Express and PostgreSQL for the backend. The app supports offline data management with automatic online synchronization when the connection is restored. Containerized using Docker for easy deployment. ",
    technologies: ["Flutter", "Sqlite", "Node.js", "Express", "PostgreSQL", "Docker"],
    url: "https://github.com/Abhishekbagdiya01/Task-Manager-App"
  },
  {
    title: "BookAI Summary App",
    image: bookai,
    description:
      "BookAI Summary is a React Native Expo app designed to make book discovery and understanding easier. By leveraging the Google Books API and AI technology, the app allows users to search for books, fetch detailed book information, and generate concise AI-powered summaries for each book. ",
    technologies: ["React Native", "Expo", "Typescript", "Gemini API", "Google Book API"],
    url: "https://github.com/Abhishekbagdiya01/BookAI-Summary"
  },
  {
    title: "HappyTails",
    image: happyTails,
    description:
      "HappyTails is a pet healthcare application designed to bridge the gap between pet owners and veterinary professionals. It caters to two user types: pet owners and doctors. ",
    technologies: ["Flutter", "Dart", "Firebase"],
    url: "https://github.com/Abhishekbagdiya01/HappyTails-Pet-appointment-app"
  },
  {
    title: "Track-N-Go ",
    image: trackNgo,
    description:
      "Track-N-Go is proud to be the first city app of Jodhpur, Rajasthan, India. We are dedicated to catering to the needs of Jodhpur citizens and visitors alike, providing valuable information about city bus routes to make navigating Jodhpur effortless. ",
    technologies: ["Flutter", "Dart", "Firebase"],
    url: "https://github.com/Abhishekbagdiya01/Bus-tracker-app"
  },
  {
    title: "Echo",
    image: echo,
    description:
      "Echo - The Unwritten Share the Unheard is more than just a social media app; it's a platform for the untold stories and unheard voices. Powered by Flutter, Echo empowers users to share their unfiltered life journeys through text and audio podcasts. Dive into a world where authenticity is celebrated, and connections are formed through experiences ",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    url: "https://github.com/Abhishekbagdiya01/Echo"
  },
  {
    title: "Carvaan",
    image: carvaan,
    description:
      "Carvaan Radio is a Flutter app that allows you to listen to radio stations from all over the world. It features a simple and user-friendly interface, with a list of radio stations that you can browse and select from. You can also play and pause the radio, and adjust the volume. ",
    technologies: ["React Native", "Expo", "Typescript", "Gemini API", "Google Book API"],
    url: "https://github.com/Abhishekbagdiya01/carvaan_radio_app"
  },
  {
    title: "NoteCraft",
    image: notecraft,
    description:
      "Full-stack note app built with Node, Express, MongoDB ,Typescript and Flutter. The app allows users to create, edit, and delete notes.The backend is implemented using Node.js and Express, and the MongoDB database is used to store the notes and categories. The frontend is implemented using Flutter, and Cubit is used for state management. ",
    technologies: ["Flutter", "Dart", "Typescript", "Node.js", "Express", "MongoDB"],
    url: "https://github.com/Abhishekbagdiya01/HappyTails-Pet-appointment-app"
  },
  // {
  //   title: "Gullak",
  //   image: gullak,
  //   description:
  //     "Gullak is a simple and easy-to-use expense tracker app developed with Flutter. It uses sqflite for local data storage and bloc for state management. The app allows users to track their expenses by adding and categorizing transactions. It also provides useful visualizations and insights on the user's spending habits ",
  //   technologies: ["Flutter", "Dart", "sqflite"],
  //   url: "https://github.com/Abhishekbagdiya01/Bus-tracker-app"
  // },

];

export const CONTACT = {
  address: "82, 80 feet road Gandhi Nagar, Jodhpur, Rajasthan ",
  phoneNo: "+918824155463",
  email: "abhishekbagdiya9079@gmail.com",
};
