/**
 * desc: Basic image settings.
 */

import React from 'react';
import ImageDangling from 'react-image-dangling';
import './demo.less';
import '../../assets/index.less';

const src1 =
  'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';
const src2 =
  'https://github.com/image-component/gallery/blob/main/girl/2.jpg?raw=true';

const App = () => {
  return (
    <div className="demo">
      <ImageDangling src={src1} />
      <ImageDangling src={src2} radius={20} />
    </div>
  );
};

export default App;
