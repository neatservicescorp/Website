import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";

export default async function Contact() {
  const initialTheme = getThemeFromPath("/contact");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen">Contact</main>
    </ThemeProvider>
  );
}
