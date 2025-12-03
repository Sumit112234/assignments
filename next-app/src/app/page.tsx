import Image from "next/image";
import Navbar from "../../components/Navbar";
import Demo from "../../components/Meet";
import Counter from "./Counter";

export default function Home() {
  return (
    <div>
      <Navbar/>
      
        <Counter initial={"5"} />
    </div>
  );
}
