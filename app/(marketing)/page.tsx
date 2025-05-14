import { Footer } from "./components/footer";
import { Heroes } from "./components/heroes";
import { Heading } from "./components/heading";

const MarketingPage = () => {
  return (
    <main className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start flex-1 space-y-8 px-6 pb-10 text-center">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </main>
  );
};

export default MarketingPage;