import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative bg-[#FAF9F6] text-[#2F2F2F]">
      <Navbar />
      <div className="pt-20 space-y-16">
        {/* Welcome / Hero */}
        <Section id="welcome" title="Pontus & Amanda">
          <h2 className="font-serif text-2xl text-secondary-700 mb-6">23 maj 2026</h2>
          <p className="font-serif text-lg text-gray-800 mb-2">
            Vi ser fram emot att fira vår stora dag tillsammans med våra fina vänner ❤️
          </p>
          <p className="font-serif text-lg text-gray-800">
            Denna kväll vill vi gärna dela med våra vuxna vänner, men ammande barn är självklart
            välkomna.
          </p>
        </Section>

        {/* Schema */}
        <Section id="schedule" title="Schema">
          <ul className="space-y-4">
            <li className="font-serif text-2xl text-secondary-700">14:00 – Vigsel</li>
            <li className="font-serif text-2xl text-secondary-700">17:00 – Middag</li>
            <li className="font-serif text-2xl text-secondary-700">21:00 – Fest</li>
          </ul>
        </Section>

        {/* Plats */}
        <Section id="location" title="Plats">
          <p className="font-serif text-lg text-gray-800 mb-2">
            Vigseln äger rum i{' '}
            <a
              href="https://www.google.com/maps/place/N%C3%B6sunds+kapell/@58.1121434,11.5213828,17z/data=!4m6!3m5!1s0x46459df08b736d8d:0xbe591684fcf7f12e!8m2!3d58.1121434!4d11.5239577!16s%2Fg%2F11f_zymw9n?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium italic text-primary-700 underline"
            >
              Nösund Kapell
            </a>
            .
          </p>
          <p className="font-serif text-lg text-gray-800">
            Festen hålls på{' '}
            <a
              href="https://maps.app.goo.gl/7yZZfpFwa4Ygseow7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium italic text-primary-700 underline"
            >
              Nösund Sjöstuga
            </a>
            , som ligger vid havet och bara några minuter från kapellet. Vägen dit går via bryggan
            som börjar vid <span className="font-medium">Galleri Tärnan</span>.
          </p>
        </Section>

        {/* Toastpar */}
        <Section id="toastcouple" title="Toastpar">
          <p className="font-serif text-lg text-gray-800">
            Vill du hålla tal eller överraska med något under middagen? Hör gärna av dig till vårt
            toastpar <span className="font-medium italic text-primary-700">Rebecca</span> och{' '}
            <span className="font-medium italic text-primary-700">Tobias</span>.
          </p>

          <p className="mt-4 font-serif text-lg text-gray-800">
            De nås på <span className="font-medium italic">073-680 88 02</span>.
          </p>
        </Section>

        {/* Boende */}
        <Section id="accommodation" title="Boende">
          <p className="font-serif text-lg text-gray-800 mb-4">
            Vi har preliminärbokat rum på Nösundsgården från fredag 22/5 till söndag 24/5. Här finns
            både hotellrum och enklare vandrarhemsrum, och du väljer själv om du vill boka en eller
            två nätter. Tidig incheckning är möjlig från kl. 13.00.
          </p>
          <p className="font-serif text-lg text-gray-800 mb-4">
            Sista dagen för bokning är <span className="font-semibold">1 februari</span>. Bokning
            sker genom att ange <span className="font-medium italic text-primary-700">Pontus</span>{' '}
            eller <span className="font-medium italic text-primary-700">Amanda</span>s namn via:
          </p>

          <div className="font-serif text-lg text-gray-800 space-y-2 mb-6">
            <div>
              <span className="font-semibold">Mail: </span>
              <a href="mailto:ng@nosundsgarden.se" className="font-medium italic text-primary-700">
                ng@nosundsgarden.se
              </a>
            </div>
            <div>
              <span className="font-semibold">Telefon: </span>
              <span className="font-medium italic">0304-20999</span>
            </div>
            <div>
              <span className="font-semibold">Mobil (om telefon inte svarar): </span>
              <span className="font-medium italic">070-522 02 85</span>
            </div>
          </div>

          <p className="font-serif text-lg text-gray-800">
            Andra alternativ i närheten är Nösund Havshotell (bokningsbart från november) samt via
            tjänster som Airbnb.
          </p>
        </Section>

        {/* Platsbeskrivning */}
        <Section id="location_description" title="Platsbeskrivning">
          <p className="font-serif text-lg text-gray-800 max-w-2xl mx-auto text-center">
            På kartan hittar du vägen till både vigseln och festen, samt parkering. Det är cirka 1,5
            km mellan vigselplatsen och festlokalen.
          </p>

          <p className="font-serif text-lg text-gray-800 max-w-2xl mx-auto text-center">
            För dig som bor på Nösundsgården finns egen parkering tillgänglig direkt vid boendet.
          </p>

          <div className="flex justify-center mt-8 md:mt-10">
            <Image
              src="/map.png"
              alt="Platsbeskrivning"
              width={800}
              height={600}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-2xl shadow-xl"
            />
          </div>
        </Section>

        {/* Gåva */}
        <Section id="gift" title="Gåva">
          <p className="font-serif text-lg text-gray-800">
            Er närvaro betyder mer för oss än något annat, och det finns inga förväntningar på
            gåvor.
          </p>

          <p className="mt-4 font-serif text-lg text-gray-800">
            För den som ändå vill ge något, blir vi väldigt glada för en gåva till vår bröllopsresa
            och framtida äventyr tillsammans.
          </p>

          <p className="mt-4 font-serif text-lg text-gray-800">
            Gåvan kan swishas till{' '}
            <span className="font-medium italic text-primary-700">Tobias Gremalm Vouros</span> på{' '}
            <span className="font-medium italic">070-279 34 71</span>.
          </p>
        </Section>

        {/* OSA */}
        <Section id="rsvp" title="OSA">
          <p className="font-serif text-lg text-gray-800 mb-2">
            O.s.a senast{' '}
            <span className="font-serif font-semibold text-secondary-700">1 mars </span>
            till <span className="font-medium italic text-primary-700">Amanda</span> på{' '}
            <span className="font-medium italic">070-043 73 26</span>.
          </p>
          <p className="font-serif text-lg text-gray-800">
            Hör gärna av dig i samband med anmälan om du har någon allergi eller behöver specialkost
            😀🥂
          </p>
        </Section>
      </div>
    </main>
  );
}
