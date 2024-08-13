import { useContext } from "react";
import { MyContext } from "./MyProvider";

export default function MyConsumer() {
    const greeting = useContext(MyContext);

    if (!greeting) {
        return (<h1>Context is undefined</h1>)
    }


    return (
        <>
        <h1>The greeting is {greeting}</h1>
        </>
    )
}