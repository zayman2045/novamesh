import React, { createContext, ReactNode, useState } from "react";


const MyContext = createContext("hello");

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <MyContext.Provider value={"goodbye"}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
