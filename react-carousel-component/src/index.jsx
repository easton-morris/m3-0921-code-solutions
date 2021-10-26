import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './carousel';

const pics = [
  {
    id: 1,
    char: 'Mario',
    path: 'https://ssb.wiki.gallery/images/thumb/4/44/Mario_SSBU.png/250px-Mario_SSBU.png'
  },
  {
    id: 2,
    char: 'Luigi',
    path: 'https://ssb.wiki.gallery/images/thumb/b/bb/Luigi_SSBU.png/250px-Luigi_SSBU.png'
  },
  {
    id: 3,
    char: 'Peach',
    path: 'https://ssb.wiki.gallery/images/thumb/7/74/Peach_SSBU.png/250px-Peach_SSBU.png'
  },
  {
    id: 4,
    char: 'Bowser',
    path: 'https://ssb.wiki.gallery/images/thumb/4/49/Bowser_SSBU.png/250px-Bowser_SSBU.png'
  },
  {
    id: 5,
    char: 'Dr. Mario',
    path: 'https://ssb.wiki.gallery/images/thumb/3/3f/Dr._Mario_SSBU.png/250px-Dr._Mario_SSBU.png'
  }
];

ReactDOM.render(
  <Carousel pics={pics}/>,
  document.getElementById('root')
);
