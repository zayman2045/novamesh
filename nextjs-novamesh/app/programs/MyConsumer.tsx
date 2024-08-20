import { useContext } from "react";
import { MyContext } from "./MyProvider";

export default function MyConsumer() {
  const greeting = useContext(MyContext);

  return <p>{greeting}</p>;
}
