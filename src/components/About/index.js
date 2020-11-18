/**
 * Npm import
 */
import React from 'react';
import {
  Segment, Header, Image, Dropdown, Divider,
} from 'semantic-ui-react';

/**
 * Local import
 */

/**
 * Component
 */
const languageOptions = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Klingon', text: 'Klingon', value: 'Klingon' },
];

const About = () => (
  <Segment className="about">
    <Header as="h2"> About </Header>
    <Image
      rounded
      src="https://vignette.wikia.nocookie.net/alienfilm/images/5/50/Martians_%28Mars_Attacks%21%29.jpg/revision/latest?cb=20140812142712"
      fluid
    />
    <Segment>
      <Header as="h3"> Who am I ? </Header>
      <Dropdown
        button
        compact
        className="icon"
        labeled
        icon="world"
        options={languageOptions}
        search
        text="Select Language"
      />
      <Divider />
      <p>
        My name is Nadia, I'm a passionate web developper looking for a front-end position.
         Formaly I was a jwellery artist and had no higher education degree.
      </p>
      <p>
        I've learned web developpement at O'Clock school witch I believe is
        the best school ever ! I was studying from home in a virtual classroom
        with nineteen other students. Thought it was a challenging bootcamp, I
        succeeded and got graduated.
      </p>
      <p>
        That experience made me totally confortable with remote working,
        collaboration and organisation.So don't hesitate to hire me, I can work
        remotely from now on.
      </p>
    </Segment>
  </Segment>
);

// == Export
export default About;
