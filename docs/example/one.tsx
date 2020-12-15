/**
 * desc: This is a demo.
 */

import React from 'react';
import ImageDangling from '../../src';
import './demo.less';
import '../../assets/index.less';

const App = () => {
  const src1 =
    'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true';
  // const src2 = 'https://github.com/image-component/react-image-shadow/blob/main/image/blue.jpg?raw=true';

  return (
    <div className="demo">
      <ImageDangling src={src1} />
    </div>
  );
};

export default App;
