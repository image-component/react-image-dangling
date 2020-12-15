/**
 * desc: This is another demo.
 */

import React from 'react';
import Temp from '../../src';
import './demo.less';
import '../../assets/index.less';

const App = () => {
  return (
    <div className="demo">
      <Temp className="red" msg="hello" />
    </div>
  );
};

export default App;
