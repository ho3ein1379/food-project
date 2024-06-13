import Image from "next/image";
import { Inter } from "next/font/google";
import WeatherInfo from "@/components/WeatherInfo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <WeatherInfo/>
    </main>
  );
}
