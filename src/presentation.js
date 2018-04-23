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
            To build a React app, you will need:
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
            For testing you can add:
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
            For dev experience you will want:
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
            Don't forget:
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

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            What can we customize?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}>
            <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#installing-a-dependency">
              Installing a Dependency
            </a>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}>
            <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically">
              Formatting Code with Prettier
            </a>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}>
            <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#heroku">
              Deploys
              </a>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Why would we eject?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}>
            <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#can-i-use-decorators">
              Adopting Newer Syntax
            </a>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4}>
            <a href="https://github.com/FormidableLabs/spectacle/issues/512">
              Dependency Woes
            </a>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="primary">
            Additive changes: MAYBE OK!
          </Heading>

          <br />

          <Heading size={5} textColor="primary">
            Changing internals: OH NO!
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Tools you'll still want to add:
          </Heading>
          <List>
            <ListItem>cypress</ListItem>
            <ListItem>glamor(ous) or styled-components</ListItem>
            <ListItem>moment</ListItem>
            <ListItem>redux</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            CRA is the New Boilerplate
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <a href="https://auth0.com/blog/how-to-configure-create-react-app/">
            <Image src="auth0.png" />
          </a>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src="dance.gif" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
          &nbsp;
          </Heading>
          <Heading size={6} textColor="tertiary">
            @willslab
          </Heading>
          <br />
          <Heading size={6} textColor="tertiary">
            http://willklein.co
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="primary">
            Thanks!
          </Heading>
          <Heading size={6} textColor="secondary">
            @willslab
          </Heading>
          <br />
          <Heading size={6} textColor="secondary">
            http://willklein.co
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
