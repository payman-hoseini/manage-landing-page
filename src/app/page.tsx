
import Comments from "./components/comments";
import Footer from "./components/footer";
import Header from "./components/header";
import SectionOne from "./components/sectionOne";
import SectionTwo from "./components/sectionTwo";
export default function Home() {
  return (
    <>
      <main className="container mx-auto patternTwo pb-32">
        <Header />
        <SectionOne />
        <SectionTwo />
      </main>
      <Comments />
      <Footer />
    </>
  );
}
