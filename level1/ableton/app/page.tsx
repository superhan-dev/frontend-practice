import HomeGrid from "@/components/en/HomeGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen max-w-screen-2xl min-h-screen flex-col items-center justify-between">
      <HomeGrid />
    </main>
  );
}
