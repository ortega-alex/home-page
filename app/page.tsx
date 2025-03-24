import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <Experience />
      <Technology />
    </main>
  );
}
