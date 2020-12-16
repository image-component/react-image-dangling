/**
 * desc: Use `hoverScale` `hoverSlope` to achieve different hover effects.
 */

import React from 'react';
import ImageDangling from 'react-image-dangling';
import './demo.less';
import '../../assets/index.less';

const src1 =
  'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true';
const src2 =
  'https://github.com/image-component/gallery/blob/main/girl/4.jpg?raw=true';

const App = () => {
  return (
    <div className="demo">
      <ImageDangling src={src1} hoverScale={2} />
      <ImageDangling src={src2} hoverSlope={20} />
    </div>
  );
};

export default App;
