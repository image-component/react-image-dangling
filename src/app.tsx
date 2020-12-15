import * as React from 'react';

interface TempProps {
  msg?: string;
  className?: string;
}

export { TempProps };

const Temp = (props: TempProps) => {
  const { msg = 'HI', className } = props;

  return (
    <h2>
      <div className={className}>{msg}</div>
    </h2>
  );
};

export default Temp;
