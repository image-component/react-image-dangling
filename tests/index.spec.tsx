/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
import Temp from '../src';

describe('temp', () => {
  it('render', () => {
    const wrapper = mount(<Temp />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render text', () => {
    const wrapper = mount(<Temp msg="test22" />);
    expect(wrapper.find('h2').children().props().children).toEqual('test22');
  });

  it('render classname', () => {
    const wrapper = mount(<Temp className="test33" />);
    expect(wrapper.find('.test33').length).toBeTruthy();
  });
});
