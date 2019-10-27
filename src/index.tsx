import * as React from 'react';

interface IProps {
  text: string;
}

const SampleComponent = (props: IProps) => {
  const { text } = props;
  return <div style={{ backgroundColor: 'black', color: "white" }}>Hello {text}</div>
}

export default SampleComponent;