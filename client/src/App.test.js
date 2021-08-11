import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
   test('should render correctly in "debug" mode', () => {
      const component = shallow(<App debug />);
      
      expect(component);
   });

   test('render the submit button', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find("#btn").text()).toBe("SUBMIT");
   });

   test('render the click event of submit button', () => {
      const wrapper = shallow(<App />);

      wrapper.find("#btn").simulate("click")
      expect(registerUser).toHaveBeenCalled();

   });
});