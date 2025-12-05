'use client';
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Demo from "../../components/Meet";
import Counter from "./Counter";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Navbar/>
      

        <Counter initial={100} />
        <button onClick={() => router.push('/blogs')}>
          Explore Blogs
        </button>
    </div>
  );
}
