import NameTag from "../components/NameTag";
import TwoComponents from "../components/TwoComponents";

export default function Dashboard() {

    const {ComponentOne, ComponentTwo} = TwoComponents;
  return (
    <div>
      <NameTag />
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}
