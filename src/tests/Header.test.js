import React from 'react';
import { shallow, mount } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';
configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it('displays the welcome message', () => {
      const header = shallow(<Header />)
      expect(header.find('.notesMessage').text()).toEqual("Your Notes Keeper")
    })

  })