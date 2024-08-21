"use client"

import React, { createContext, useContext, useState } from "react";

// Possible routes for UI conditional rendering
export enum Route {
  Home,
  Ethereum,
  Solana,
}

interface NavBarContextType {
  route: Route;
  setRoute: (route: Route) => void;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const NavBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Set Home as the default route
  const [route, setRoute] = useState(Route.Home);

  return (
    <NavBarContext.Provider value={{ route, setRoute }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBar must be used within a NavBarProvider");
  }
  return context;
};
