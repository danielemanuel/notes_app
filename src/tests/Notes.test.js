import React from 'react';
import { shallow, mount } from 'enzyme'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notes from '../components/Notes';
configure({ adapter: new Adapter() });

describe('<Notes />', () => {
    let component
    
    beforeEach(() => {
         component = mount(<Notes />)        
    });

    it('displays the button', () => {
      expect(component.find('.viewNoteButton').text()).toEqual("View Note")
    })

    it('displays the view button', () => {
        expect(component.find('.viewNoteButton').text()).toEqual("View Note")
      })
  })