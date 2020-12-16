/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import classNames from 'classnames';

export interface ImageDanglingProps {
  alt?: string;
  blendMode?: boolean | string;
  className?: string;
  hoverScale?: number;
  hoverSlope?: number;
  radius?: number;
  shadeColor?: string;
  src: string;
  style?: React.CSSProperties;
  width?: number;
}

const ImageDangling = (props: ImageDanglingProps) => {
  const {
    alt,
    blendMode,
    className,
    hoverScale = 1.6,
    hoverSlope = 60,
    radius = 8,
    shadeColor = '#000',
    src,
    style,
    width = 300,
  } = props;

  const [imgStyle, setImgStyle] = React.useState({});
  const [cardStyle, setCardStyle] = React.useState({});

  const imgRef = React.useRef<HTMLElement>();
  const cardRef = React.useRef<HTMLElement>();

  const imgBaseStyle = {
    width: `${width}px`,
    borderRadius: `${radius}px`,
    ...style,
  };

  const cardBaseStyle = {
    borderRadius: `${radius}px`,
  };

  React.useEffect(() => {
    setImgStyle(imgBaseStyle);
    setCardStyle(cardBaseStyle);
  }, []);

  const cls = classNames('react-image-dangling', className);

  const scale = (
    val: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
  ) => {
    return outMin + ((val - inMin) * (outMax - outMin)) / (inMax - inMin);
  };

  const move = (e: any) => {
    if (!imgRef.current || !cardRef.current) {
      return;
    }
    const { offsetWidth, offsetHeight } = imgRef.current;
    const { offsetX, offsetY } = e.nativeEvent;
    const relX = (offsetX + 1) / offsetWidth;
    const relY = (offsetY + 1) / offsetHeight;
    const rotY = `rotateY(${(relX - 0.5) * hoverSlope}deg)`;
    const rotX = `rotateX(${(relY - 0.5) * -hoverSlope}deg)`;
    setImgStyle({
      ...imgBaseStyle,
      transform: `perspective(500px) scale(${hoverScale}) ${rotY} ${rotX}`,
    });

    const lightX = scale(relX, 0, 1, 150, -50);
    const lightY = scale(relY, 0, 1, 30, -100);
    const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
    const lightOpacity = scale(lightConstrain, 0.3, 1, 1, 0) * 255;
    const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
    if (blendMode) {
      let mixBlendMode = 'soft-light';
      const backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${shadeColor})`;
      if (typeof blendMode === 'string') {
        mixBlendMode = blendMode;
      }
      setCardStyle({
        ...cardBaseStyle,
        mixBlendMode,
        backgroundImage,
        opacity: 1,
      });
    }
  };

  const leave = () => {
    setImgStyle({
      ...imgBaseStyle,
      transform: 'perspective(500px) scale(1)',
    });
    setCardStyle({
      ...cardBaseStyle,
      opacity: 0,
    });
  };

  const over = () => {
    setImgStyle({
      ...imgBaseStyle,
    });
    setCardStyle({
      ...cardBaseStyle,
      opacity: 1,
    });
  };

  return (
    <div
      className={cls}
      style={imgStyle}
      onMouseOver={over}
      onMouseMove={move}
      onMouseLeave={leave}
      ref={imgRef as any}
    >
      <div
        className="react-image-dangling-card"
        style={cardStyle}
        ref={cardRef as any}
      ></div>
      <img
        src={src}
        alt={alt}
        width={width}
        style={{
          borderRadius: `${radius}px`,
        }}
      />
    </div>
  );
};

export default ImageDangling;
