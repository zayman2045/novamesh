import { NovaTabProvider } from "./NovaTabProvider";
import {ReactNode} from "react";

export default function Layout({children} : {children: ReactNode}) {
    return (
        <NovaTabProvider>
            {children}
        </NovaTabProvider>
    )
}