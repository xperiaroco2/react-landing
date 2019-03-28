import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import Header from "./containers/Header/Header";
import FirstBlock from "./containers/FirstBlock/FirstBlock";
import SecondBlock from "./containers/SecondBlock/SecondBlock";
import ThirdBlock from "./containers/ThirdBlock/ThirdBlock";
import Footer from "./containers/Footer/Footer";
import logo from "./assets/Logo/logo.png";
import ThirdBlockMobile from "./containers_mobile/ThirdBlock";

const CloudDownloadIcon = () => (<i className="material-icons">cloud_download</i>);
const PlayIcon = () => (<i className="material-icons">play_circle_outline</i>);

const onClick = () => {};

//HEADER DATA
const headerItems = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
const headerButtonData = {
  text: 'button text',
  onClick,
};
//FIRST BLOCK DATA
const firstBlockTitle = 'virginia travel for kids';
const firstBlockButtonsData = [
  {
    text: 'button text',
    onClick,
    icon: <CloudDownloadIcon />,
  },
  {
    text: 'button text',
    onClick,
    icon: <CloudDownloadIcon />,
  },
  {
    text: 'watch video',
    onClick,
    icon: <PlayIcon />,
  },
];
const firstBlockBlueBlockData = {
  text: 'title block',
  data: [
    { title: 'days', value: 12 },
    { title: 'hours', value: 9 },
    { title: 'minutes', value: 45 },
    { title: 'seconds', value: 0 },
  ],
};
//MIDDLE BLOCK DATA
const middleBlockText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip exea commodo consequat.
`;
const middleBlockDeveloper = {
  name: 'Roy Rivera',
  position: 'FrontEnd Developer',
  company: 'S-PRO',
};
//THIRD BLOCK DATA
const thirdBlockTitleBlockData = {
  backgroundTitle: 'roadmap',
  title: 'party jokes startling but unnecessary'
};
const thirdBlockItems = [
  {
    title: 's1 2018',
    list: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt',
      'Ut enim ad minim veniam',
    ],
    status: 'checked',
  },
  {
    title: 's2 2018',
    list: [
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt',
      'Ut enim ad minim veniam',
    ],
    status: 'current',
  },
  {
    title: 's3 2018',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing',
      'Ut enim ad minim veniam, quis nostrud exercitation',
    ],
    status: 'disabled',
  },
  {
    title: 's1 2019',
    list: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt',
      'Ut enim ad minim veniam',
    ],
    status: 'disabled',
  },
  {
    title: 's2 2019',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Ut enim ad minim veniam, quis nostrud exercitation',
      'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    status: 'disabled',
  },
  {
    title: 's3 2019',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      'sed do eiusmod tempor incididunt ut labore et dolore',
      'Ut enim ad minim veniam, quis nostrud exercitation',
      'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    status: 'disabled',
  },
  {
    title: 's4 2019',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Ut enim ad minim veniam, quis nostrud exercitation',
    ],
    status: 'disabled',
  }
];
const thirdBlockFinalItem = {
  title: '2020',
  list: [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
  ],
};

class App extends Component {
  render() {
    return (
      <div className="MainContainer">
        <MediaQuery minDeviceWidth={500}>
          <Header logo={ logo } items={ headerItems } buttonData={ headerButtonData } />
          <FirstBlock
            title={ firstBlockTitle }
            buttonsData={ firstBlockButtonsData }
            blueBlockData={ firstBlockBlueBlockData }
          />
          <SecondBlock text={ middleBlockText } developer={ middleBlockDeveloper } />
          <ThirdBlock
            items={ thirdBlockItems }
            titleBlockData={ thirdBlockTitleBlockData }
            finalItem={ thirdBlockFinalItem }
          />
          <Footer />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={500}>
          <Header logo={ logo } items={ headerItems } buttonData={ headerButtonData } isMobile={ true }/>
          <FirstBlock
            title={ firstBlockTitle }
            buttonsData={ firstBlockButtonsData }
            blueBlockData={ firstBlockBlueBlockData }
            isMobile={ true }
          />
          <SecondBlock text={ middleBlockText } developer={ middleBlockDeveloper } isMobile={ true } />
          <ThirdBlockMobile
            items={ thirdBlockItems }
            titleBlockData={ thirdBlockTitleBlockData }
            finalItem={ thirdBlockFinalItem }
          />
          <Footer isMobile={ true }/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
