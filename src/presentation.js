// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            create-react-app
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          @willslab | Will Klein
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Hi! I'm Will
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Image src="react-denver-logo.png" height="600" />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Engineer @ Workday
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Let's talk about building a React app
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            To build a React app, you need:
          </Heading>
          <List>
            <ListItem>react</ListItem>
            <ListItem>react-dom</ListItem>
            <ListItem>webpack</ListItem>
            <ListItem>babel-core</ListItem>
            <ListItem>babel-runtime</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            For testing you add:
          </Heading>
          <List>
            <ListItem>jest</ListItem>
            <ListItem>eslint</ListItem>
            <ListItem>babel-eslint</ListItem>
            <ListItem>babel-jest</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            For dev experience you want:
          </Heading>
          <List>
            <ListItem>react-dev-utils</ListItem>
            <ListItem>eslint-plugin-flowtype</ListItem>
            <ListItem>eslint-plugin-import</ListItem>
            <ListItem>eslint-plugin-jsx-ally</ListItem>
            <ListItem>eslint-plugin-react</ListItem>
            <ListItem>webpack-dev-server</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Some utilities FTW:
          </Heading>
          <List>
            <ListItem>autoprefixer</ListItem>
            <ListItem>chalk</ListItem>
            <ListItem>dotenv</ListItem>
            <ListItem>dotenv-expand</ListItem>
            <ListItem>fs-extra</ListItem>
            <ListItem>object-assign</ListItem>
            <ListItem>promise</ListItem>
            <ListItem>resolve</ListItem>
            <ListItem>whatwg-fetch</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src="facepalm.jpg" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            To load resources with webpack you'll need:
          </Heading>
          <List>
            <ListItem>babel-loader</ListItem>
            <ListItem>css-loader</ListItem>
            <ListItem>postcss-loader</ListItem>
            <ListItem>file-loader</ListItem>
            <ListItem>style-loader</ListItem>
            <ListItem>url-loader</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            More plugins?
          </Heading>
          <List>
            <ListItem>case-sensitive-paths-webpack-plugin</ListItem>
            <ListItem>extract-text-webpack-plugin</ListItem>
            <ListItem>html-webpack-plugin</ListItem>
            <ListItem>sw-precache-webpack-plugin</ListItem>
            <ListItem>webpack-manifest-plugin</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src="double-facepalm.jpg" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}>
            Webpack configs...
          </Heading>
        </Slide>



        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src="facepalm2.jpg" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>And if you gaze long into an abyss, the abyss also gazes into you.</Quote>
            <Cite>Friedrich Nietzsche, or any JavaScript developer</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}>
            Demo placeholder: create-react-app
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Tools you'll still want to add:
          </Heading>
          <List>
            <ListItem>cypress</ListItem>
            <ListItem>glamor</ListItem>
            <ListItem>moment</ListItem>
            <ListItem>redux</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src="dance.gif" />
        </Slide>


        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
          &nbsp;
          </Heading>
          <Heading size={6} textColor="primary">
            @willslab
          </Heading>
          <br />
          <Heading size={6} textColor="primary">
            http://willklein.co
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="primary">
            Thanks!
          </Heading>
          <Heading size={6} textColor="primary">
            @willslab
          </Heading>
          <br />
          <Heading size={6} textColor="primary">
            http://willklein.co
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
