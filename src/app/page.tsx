
import Hero from "./components/Hero";
import RecentPost from "./components/recentPost";
import Contact from "./components/contact";
import Skills from "./components/skills";




export default function Home() {
  return (
    <div>
        <Hero/>
        <RecentPost />
        <Skills/>
        <Contact/>
    </div>
    
  );
}
