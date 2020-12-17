/* eslint-disable prefer-const */
import React from 'react';
import { mount } from 'enzyme';
import ImageDangling from '../src';

describe('Hover', () => {
  const testSrc =
    'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

  let originOffsetWidth;
  let originOffsetHeight;

  beforeAll(() => {
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
  });

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get: originOffsetWidth,
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      get: originOffsetHeight,
    });
  });

  it('mouse', () => {
    const wrapper = mount(
      <ImageDangling src={testSrc} hoverScale={1.4} hoverSlope={40} />,
    );
    const node = wrapper.find('.react-image-dangling');
    node.simulate('mouseOver', {});
    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(1);

    node.simulate('mouseMove', {
      nativeEvent: {
        offsetX: 99,
        offsetY: 99,
      },
    });

    expect(
      wrapper.find('.react-image-dangling').prop('style').transform,
    ).toEqual('perspective(500px) scale(1.4) rotateY(20deg) rotateX(-20deg)');

    node.simulate('mouseLeave', {});

    expect(
      wrapper.find('.react-image-dangling').prop('style').transform,
    ).toEqual('perspective(500px) scale(1)');
    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(0);
  });

  it('blendMode', () => {
    const wrapper = mount(<ImageDangling src={testSrc} blendMode />);

    const node = wrapper.find('.react-image-dangling');

    node.simulate('mouseMove', {
      nativeEvent: {
        offsetX: 99,
        offsetY: 99,
      },
    });

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').mixBlendMode,
    ).toEqual('soft-light');

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').backgroundImage,
    ).toEqual(
      'radial-gradient(circle at -50% -100%, rgba(109.28571428571429, 109.28571428571429, 109.28571428571429, 1) 20%, #000)',
    );

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(1);
  });

  it('blendMode customer', () => {
    const wrapper = mount(
      <ImageDangling src={testSrc} blendMode="color" shadeColor="#001" />,
    );

    const node = wrapper.find('.react-image-dangling');

    node.simulate('mouseMove', {
      nativeEvent: {
        offsetX: 99,
        offsetY: 99,
      },
    });

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').mixBlendMode,
    ).toEqual('color');

    expect(
      wrapper.find('.react-image-dangling-card').prop('style').backgroundImage,
    ).toEqual(
      'radial-gradient(circle at -50% -100%, rgba(109.28571428571429, 109.28571428571429, 109.28571428571429, 1) 20%, #001)',
    );
  });
});
