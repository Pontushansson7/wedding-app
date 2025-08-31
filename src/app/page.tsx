import Navbar from '@/components/Navbar';
import Section from '@/components/Section';

export default function Home() {
  return (
    <main className="relative bg-[#FAF9F6] text-[#2F2F2F]">
      <Navbar />
      <div className="pt-20">
        {/* Welcome / Hero */}
        <Section id="welcome" title="Pontus & Amanda">
          <h2 className="font-serif text-2xl text-secondary-700 mb-8">23 maj 2026</h2>
          <p className="font-serif text-lg text-gray-800">
            Vi ser fram emot att fira vår stora dag med er ❤️
          </p>
        </Section>

        {/* Schema */}
        <Section id="schedule" title="Schema">
          <ul className="space-y-2 font-body text-lg text-gray-800">
            <li className="font-serif text-2xl text-secondary-700 mb-8">14:00 – Vigsel</li>
            <li className="font-serif text-2xl text-secondary-700 mb-8">17:00 – Middag</li>
            <li className="font-serif text-2xl text-secondary-700 mb-8">21:00 – Fest</li>
          </ul>
        </Section>

        {/* Plats */}
        <Section id="location" title="Plats">
          <p className="font-body text-lg text-gray-800">Nösund Kapell</p>
          <p className="font-body text-lg text-gray-800">Festen på Nösund Sjöstuga</p>
        </Section>

        {/* OSA */}
        <Section id="rsvp" title="OSA">
          <p className="font-body text-lg text-gray-800">
            O.s.a senast <span className="font-bold text-primary-700">1 februari</span> till Amanda
            på <span className="font-bold text-primary-700">0700-437326</span>
          </p>
        </Section>
      </div>
    </main>
  );
}
