import Image from "next/image";
import Certifications from "../components/Certifications";
import Reviews from "../components/Reviews";
import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";

export default async function ReviewsPage() {
  const initialTheme = getThemeFromPath("/reviews");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="pt-32 flex flex-col items-center">
        <div className="overflow-hidden w-full flex justify-center">
          <Image
            src="/api/image?key=reviews_main.png"
            alt="reviews_main"
            width={3000}
            height={1600}
            className="object-cover"
            style={{ width: "2600px", minWidth: "2600px", flexShrink: 0 }}
          />
        </div>
        <div className="bg-[#8B8B8B] flex justify-center w-full">
          <div className="w-full max-w-[1400px] p-12 py-16 flex flex-col items-center gap-20">
            <Reviews textColor="black" />
            <Certifications shadow={false} />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
