/**
 * desc: Use `blendMode` to achieve different background blending effects.
 */

import React from 'react';
import ImageDangling from 'react-image-dangling';
import './demo.less';
import '../../assets/index.less';

const src1 =
  'https://github.com/image-component/gallery/blob/main/girl/5.jpg?raw=true';
const src2 =
  'https://github.com/image-component/gallery/blob/main/girl/6.jpg?raw=true';

const App = () => {
  return (
    <div className="demo">
      <ImageDangling src={src1} blendMode />
      <ImageDangling src={src2} blendMode="hard-light" />
    </div>
  );
};

export default App;
