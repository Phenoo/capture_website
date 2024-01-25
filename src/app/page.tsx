import FormComponent from "@/components/FormComponent";
import Hero from "@/components/Hero";
import Industry from "@/components/Industry";
import Offers from "@/components/Offers";
import Recents from "@/components/Recents";
import Vision from "@/components/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <Vision />
      <Offers />
      <Industry />
      <Recents />
      <FormComponent />
    </main>
  );
}
