import React from 'react';
import { shallow, mount } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('displays the remove button', () => {
      const component = mount(<App />)
      const button = component.find('button')
      expect(component.find('button').text()).toEqual("Add Note")
    })


  })