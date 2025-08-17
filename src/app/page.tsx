import Navbar from '@/components/Navbar';
import Section from '@/components/Section';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-16">
        {' '}
        {/* för att inte ligga under navbaren */}
        <Section id="welcome" title="Välkommen">
          <p>Vi ser fram emot att fira vår stora dag med er ❤️</p>
        </Section>
        <Section id="schedule" title="Schema">
          <p>14:00 Vigseln börjar</p>
          <p>17:00 Middag</p>
          <p>21:00 Fest</p>
        </Section>
        <Section id="location" title="Plats">
          <p>Nösund Kapell</p>
          <p>Festen på Nösund Sjöstuga</p>
        </Section>
        <Section id="rsvp" title="OSA">
          <p>O.s.a senast 1 februari till Amanda på 0700437326</p>
        </Section>
        <Section id="gallery" title="Galleri">
          <p>Bilder kommer efter bröllopet 📸</p>
        </Section>
      </div>
    </main>
  );
}
