import Image from "next/image";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="border-gray-200 dark:bg-gray-900 w-full">
        <div className="min-w-screen-xl mx-auto p-4">
          <img src="/Logo.png" className="h-8 flex items-center space-x-3 rtl:space-x-reverse" alt="Logo" />
        </div>
      </nav>
      <HomePage/>
    </main>
  );
}