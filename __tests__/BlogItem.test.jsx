import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import BlogItem from '../src/components/widgets/blog/Item';
import Image from '../src/components/widgets/blog/elements/Image';

import history from 'helpers/routes/history';

import { fakeStore } from 'helpers/fakeStore';
import { fakeState } from 'constants/fakeState';

describe('BlogItem', () => {
  const state = fakeState;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={fakeStore(state)}>
        <Router history={history}>
          <BlogItem />
        </Router>
      </Provider>, div);
  });

  describe('BlogItem', () => {
    it('should render the Image', () => {
      const itemProps = {
        src: '/img/5',
        width: '1px',
        height: '1px',
        alt: 'Alt'
      };

      const item = shallow(<BlogItem image={itemProps} />);

      const header = <Image
        src='/img/5'
        width='1px'
        height='1px'
        alt='Alt' />;

      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual item', () => {
      const itemProps = {
        title: 'Hello, World!',
        id: 5,
        image: {
          alt: 'Hello, World',
          src: '/images/World.jpg'
        }
      };

      const item = shallow(<BlogItem post={itemProps} />);

      expect(item).toMatchSnapshot();
    });
  });
});
