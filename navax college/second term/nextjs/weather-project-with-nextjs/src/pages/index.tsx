import Image from "next/image";
import { Inter } from "next/font/google";
import Weather from "@/components/Weather/Weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[100vh]">
      <Weather city={"tehran"}/>
    </main>
  );
}
