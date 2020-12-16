/* eslint-disable comma-dangle */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ImageDangling from '../src';

describe('ImageDangling', () => {
  const testSrc =
    'https://github.com/image-component/react-image-shadow/blob/main/image/red.png?raw=true';

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
});
