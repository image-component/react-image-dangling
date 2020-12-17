/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ImageDangling from '../src';

describe('Base', () => {
  const testSrc =
    'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

  it('render', () => {
    let wrapper;

    act(() => {
      wrapper = mount(<ImageDangling src={testSrc} />);
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('alt', () => {
    const wrapper = mount(<ImageDangling alt="alt" src={testSrc} />);
    const node = wrapper.find('.react-image-dangling-img');
    expect(node.prop('alt')).toEqual('alt');
  });

  it('className', () => {
    const wrapper = mount(
      <ImageDangling className="test-class" src={testSrc} />,
    );
    expect(wrapper.find('.test-class').length).toBeTruthy();
  });

  it('radius', () => {
    const wrapper = mount(<ImageDangling radius={20} src={testSrc} />);
    const node = wrapper.find('.react-image-dangling-img');
    expect(node.prop('style')?.borderRadius).toEqual('20px');
  });

  it('style', () => {
    const wrapper = mount(
      <ImageDangling
        style={{
          color: 'red',
        }}
        src={testSrc}
      />,
    );
    const node = wrapper.find('.react-image-dangling');
    expect(node.prop('style')?.color).toEqual('red');
  });

  it('width', () => {
    const wrapper = mount(<ImageDangling width={100} src={testSrc} />);
    const node = wrapper.find('.react-image-dangling-img');
    expect(node.prop('width')).toEqual(100);
  });
});
