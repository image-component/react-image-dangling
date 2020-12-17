/* eslint-disable prefer-const */
import React from 'react';
import { mount } from 'enzyme';
import ImageDangling from '../src';
import { act } from 'react-dom/test-utils';

describe('Hover', () => {
  const testSrc =
    'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

  it('mouse', () => {
    const wrapper = mount(
      <ImageDangling src={testSrc} hoverScale={1.4} hoverSlope={40} />,
    );
    const node = wrapper.find('.react-image-dangling');
    node.simulate('mouseOver', {});
    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(1);

    let originOffsetWidth;
    let originOffsetHeight;

    originOffsetWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetWidth',
    ).get;
    originOffsetHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetHeight',
    ).get;

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get() {
        return 100;
      },
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      get() {
        return 100;
      },
    });

    node.simulate('mouseMove', {
      offsetX: 99,
      offsetY: 99,
    });

    console.log(wrapper.find('.react-image-dangling').prop('style'));

    node.simulate('mouseLeave', {});
    expect(
      wrapper.find('.react-image-dangling').prop('style').transform,
    ).toEqual('perspective(500px) scale(1)');
    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(0);

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get: originOffsetWidth,
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      get: originOffsetHeight,
    });
  });

  it('blendMode', () => {
    const wrapper = mount(<ImageDangling src={testSrc} blendMode />);

    const node = wrapper.find('.react-image-dangling');

    node.simulate('mouseMove', {
      offsetX: 99,
      offsetY: 99,
    });

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').mixBlendMode,
    ).toEqual('soft-light');

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(1);
  });

  it('blendMode customer', () => {
    const wrapper = mount(<ImageDangling src={testSrc} blendMode="color" />);

    const node = wrapper.find('.react-image-dangling');

    node.simulate('mouseMove', {
      offsetX: 99,
      offsetY: 99,
    });

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').mixBlendMode,
    ).toEqual('color');
  });
});
