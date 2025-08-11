import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";

export default async function Services() {
  const initialTheme = getThemeFromPath("/services");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen">Contact</main>
    </ThemeProvider>
  );
}
