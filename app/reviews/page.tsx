import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";

export default async function Reviews() {
  const initialTheme = getThemeFromPath("/reviews");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen">Contact</main>
    </ThemeProvider>
  );
}
