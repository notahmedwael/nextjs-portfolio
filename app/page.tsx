import NavHeroContainer from "@/components/ui/navHeroContainer";
import Education from "@/components/ui/education";
import Experience from "@/components/ui/experience";
import Projects from "@/components/ui/projects";
import Footer from "@/components/ui/footer";
import Separator from "@/components/ui/separator";

export default function Home() {
  return (
    <>
    <NavHeroContainer />
    <Education />
    <Experience />
    <Projects />
    <Separator />
    <Footer />
    </>
  );
}
