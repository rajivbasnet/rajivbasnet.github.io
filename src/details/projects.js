const projects = [
  {
    _id: "5",
    title: "Replication and Extension of 'Predicting the Present with Google Trends' by Choi and Varian",
    tools: ["R (dplyer, tidyverse, plotly)"],
    github: "https://github.com/msr-ds3/predicting-the-present-2020-group-3",
    description:
      "Reproduced the first part of the research paper; performed time-series analysis and K-fold cross validation to extend the investigation by examining alternative models and forecasting on longer horizons",
    imgsrc: "./images/projects/predicting.png",
  },
  {
    _id: "4",
    title: "Hand Tracking and Finger Detection",
    tools: ["Python", "Scikit-Learn", "OpenCV"],
    github: "https://github.com/rajivbasnet/gesture-mapped-functions",
    description:
      "Explored available CNN technologies and SVMs in order to detect human hand on a live camera and to track its motion/gesture; implemented a simple application of writing on screen",
    imgsrc: "./images/projects/handtracking.png",
  },
  {
    _id: "3",
    title: "Video Renting App Prototype",
    tools: ["React.js", "MongoDB"],
    github: "https://github.com/rajivbasnet/vidly-frontend",
    description:
      "Built a software prototype to allow users to view movies to rent; implemented sorting techniques, JWT authorizations, and Sentry API for monitoring",
    imgsrc: "./images/projects/videorenting.png",
  },

  {
    _id: "2",
    title: "Stock Analysis with Quantmod",
    tools: ["R (Quantmod)"],
    github: "https://github.com/rajivbasnet/quantmod-stock-analysis",
    description:
    "Used Quantmod and Quandl packages to analyze common indicators such as MACD, RSI, DMI to predict profitable investment in three companies",
    imgsrc: "./images/projects/quantmod.png",
  },

  {
    _id: "1",
    title: "Library Search System",
    tools: ["Java", "MySQL"],
    github: "https://github.com/rajivbasnet/SWEngineeringProjectMorganMuseum",
    description: "Designed database structure, MVC pattern and DFDs to develop a software prototype that was able to give details directions to the items in a library; Followed SDLC to implement the design with JAVA",
    imgsrc: "./images/projects/librarysearch.png",
  },

  {
    _id: "0",
    title: "Others",
    projects: [{
      title: "Let’s Make a Deal",
      tools: "PHP, Heroku",
      website: "http://letsmakeadeal.herokuapp.com/",
    },
    {
      title: "Casino Craps",
      tools: "PHP, Heroku",
      website: "http://casinocraps.herokuapp.com/",
    },
    {
      title: "Database Replication Tool", 
      tools: "Python, SQLAlchemy",
      github: "https://github.com/rajivbasnet/db-rep-tool"
    }
  ],
    imgsrc: "./images/projects/others.png",
  },
];

export function getProjects() {
  return projects;
}
