import React from "react";

interface TesterProps {
  id: number;
}

const Tester: React.FC<TesterProps> = ({ id }) => {
  return <p>The tester ID is {id}</p>;
};

export default Tester;
