import React from 'react';
import { shallow, mount } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './components/Home';
configure({ adapter: new Adapter() });

describe('<Home />', () => {
    it('displays the welcome message', () => {
      const home = shallow(<Home />)
      expect(home.find('.welcomeMessage').text()).toEqual("Welcome to Notes Keeper")
    })
  })