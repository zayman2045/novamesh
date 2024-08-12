import React from "react";

interface TesterProps {
  id: number;
}

const TestComponent: React.FC<TesterProps> = ({ id }) => {
  return <p>The tester ID is {id}</p>;
};

export default TestComponent;
