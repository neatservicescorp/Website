import { ThemeProvider } from "../components/ThemeProvider";
import { getThemeFromPath } from "../context/global";

export default async function Projects() {
  const initialTheme = getThemeFromPath("/projects");

  return (
    <ThemeProvider initialTheme={initialTheme}>
      <main className="min-h-screen">Contact</main>
    </ThemeProvider>
  );
}
