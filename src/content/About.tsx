import profileImg from '../assets/images/profile.jpg';

interface LikeType {
  title: string;
  img: string;
}

interface CoreType {
  profileImg: string;
  coreText: string;
}

export const coreContent: CoreType = {
  profileImg: profileImg,
  coreText:
    'I am a full-stack software engineer working across React/TypeScript frontends, serverless APIs, and data engineering pipelines on AWS. Currently at Amazon in Luxembourg, I build and own features end-to-end on an internal capacity planning platform used across multiple global markets. I also have a research background in AI and autonomous systems, with five peer-reviewed publications in reinforcement learning, deep learning, and agent-based modeling. Beyond my work, I am an excellent cook, I love playing games, and I am learning to play the piano.',
};

export const likeContent: LikeType[] = [
  {
    title: 'To Cook',
    img: 'cook',
  },
  {
    title: 'World of Warcraft',
    img: 'wow',
  },
  {
    title: 'Westworld',
    img: 'westworld',
  },
  {
    title: 'Game of Thrones',
    img: 'got',
  },
  {
    title: 'FPS',
    img: 'fps',
  },
  {
    title: 'Saints',
    img: 'saints',
  },
  {
    title: 'Board Games',
    img: 'board',
  },
  {
    title: 'Sandman',
    img: 'sandman',
  },
  {
    title: 'Artificial Intelligence',
    img: 'ai',
  },
  {
    title: 'Dogs',
    img: 'dogs',
  },
  {
    title: 'Coffee',
    img: 'coffee',
  },
  {
    title: 'Apple',
    img: 'apple',
  },
  {
    title: 'Marvel',
    img: 'marvel',
  },
  {
    title: 'Python',
    img: 'python',
  },
  {
    title: 'Gardening',
    img: 'garden',
  },
  {
    title: 'Piano',
    img: 'piano',
  },
  {
    title: 'Red Hot Chilli Peppers',
    img: 'rhcp',
  },
  {
    title: 'Robotics',
    img: 'robot',
  },
  {
    title: 'Stock Markets',
    img: 'stock',
  },
  {
    title: 'Data Science',
    img: 'ds',
  },
  {
    title: 'Sushi',
    img: 'sushi',
  },
  {
    title: 'Pizza',
    img: 'pizza',
  },
  {
    title: 'Santa Barbara',
    img: 'santa',
  },
  {
    title: 'Jazz',
    img: 'jazz',
  },
  {
    title: 'Star Wars',
    img: 'jedi',
  },
];
