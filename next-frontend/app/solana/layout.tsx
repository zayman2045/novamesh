import { MeshTabProvider } from "./MeshTabProvider";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <MeshTabProvider>{children}</MeshTabProvider>;
}
