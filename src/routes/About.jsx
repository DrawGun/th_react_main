import AboutPage from 'components/ui/About';

const About = {
  exact: true,
  path: '/about',
  component: AboutPage,
  prepareData: (store) => { // eslint-disable-line
    return;
  }
};

export default About;
