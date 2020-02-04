import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jennifer Williams | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jennifer Williams',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_picture.jpg',
  // coming out of a boot camp, mention that you want to help people with technology
  paragraphOne: `I have a background in Molecular Biology and a degree in Zoology. 🦉`,
  paragraphTwo: `I taught myself programming for 2 years before deciding to join Flatiron School. 
                I love building all aspects of an application especially the frontend. 
                My ultimate goal is to use coding to lower the barrier for communities and use technology to have a positive impact on the world around me.
                `,
  paragraphThree: 'In my free time I enjoy reading, watching anime, and playing with my dog!',
  resume: 'https://drive.google.com/open?id=1k_uEP3y7ENRrp059jqDGofiu2OHwFlY2', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'BookclubBuilder.png',
    title: 'Bookclub Builder',
    info: `Bookclub Builder's goal is to encourage people to read more and unite book lovers. I wanted a simple website that allowed me to create a book club and decide on which books to read through poll.`,
    info2: 'Built with React, Redux, MaterialUI, on the frontend and Ruby on Rails on the backend',
    url: 'https://bookclub-builder-client.herokuapp.com/',
    repo: 'https://github.com/Taljjaa/bookclub-builder-frontend', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'KrazyPoems.png',
    title: 'Krazy Poems',
    info:
      'Krazy Poems is a program designed to liven up poems or text by identifying nouns, adjectives, verbs, and adverbs in a sentence and replacing them with other random words. You can also have your new krazy poem read aloud by a diverse set of different voices and even add music to the reading!',
    info2:
      'Single Page Application built with JavaScript on the frontend and Ruby on Rails on the backend',
    url: '',
    repo: 'https://github.com/Taljjaa/noun-swapper-frontend', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jenken131@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Talliaa_',
    },
    {
      id: uuidv1(),
      name: 'pencil',
      url: 'https://dev.to/talia',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jennifer-m-williams/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Taljjaa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
