/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
import ImageDangling from '../src';

describe('temp', () => {
  it('render', () => {
    const wrapper = mount(<ImageDangling />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render text', () => {
    const wrapper = mount(<ImageDangling msg="test22" />);
    expect(wrapper.find('h2').children().props().children).toEqual('test22');
  });

  it('render classname', () => {
    const wrapper = mount(<ImageDangling className="test33" />);
    expect(wrapper.find('.test33').length).toBeTruthy();
  });
});
