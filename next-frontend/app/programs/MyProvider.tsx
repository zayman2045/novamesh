import React, { createContext, ReactNode } from "react";

const MyContext = createContext("hello");

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <MyContext.Provider value={"goodbye"}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };
