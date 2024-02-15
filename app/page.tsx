import Image from "next/image";
import HomePage from "./components/homePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePage/>
    </main>
  );
}