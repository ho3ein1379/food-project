import Image from "next/image";
import { Inter } from "next/font/google";
import WeatherInfo from "@/components/WeatherInfo";
import Weather from "@/components/Weather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
        <Weather city={"tehran"}/>
    </main>
  );
}
