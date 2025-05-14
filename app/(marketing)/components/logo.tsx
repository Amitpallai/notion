import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "../../../lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        className="dark:hidden"
        src="/notion.svg"
        height={40}
        width={40}
        alt="Logo"
      />
      <Image
        src="/notion-dark.svg"
        height={40}
        width={40}
        alt="Logo"
        className="hidden dark:block"
      />
       <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};