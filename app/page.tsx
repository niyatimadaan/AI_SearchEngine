import Image from "next/image";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      

<nav className="border-gray-200 dark:bg-gray-900 w-full">
  <div className="min-w-screen-xl mx-auto p-4">
    {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
        <img src="/Logo.png" className="h-8 flex items-center space-x-3 rtl:space-x-reverse" alt="Flowbite Logo" />
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
    {/* </a> */}
  </div>
</nav>

      <HomePage/>
    </main>
  );
}