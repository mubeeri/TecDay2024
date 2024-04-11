import { Navigation } from "/src/components/Navigation";
import { Hero } from "/src/components/Hero";
import { Checklist } from "/src/components/Checklist";
import { Studydirections } from "/src/components/Studydirections";
import { Relatedlinks } from "/src/components/Relatedlinks";
import { Mediacoverage } from "/src/components/Mediacoverage";
import { Contacts } from "/src/components/Contacts";
import { References } from "/src/components/References";

export function App() {
  return (
    <div>
      <div className="bg-white">
        <Navigation />
        <Hero />
        <Checklist />
        <Studydirections />
        <Relatedlinks />
        <Mediacoverage />
        <Contacts />
      </div>

      <footer className="bg-white" aria-labelledby="footer-heading">
        <References />
      </footer>
    </div>
  );
}
