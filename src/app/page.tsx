import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Image from 'next/image';

const headingClass = 'font-[family-name:var(--font-serif)] text-2xl text-secondary-700';

const bodyClass = 'font-[family-name:var(--font-body)] text-lg leading-relaxed text-gray-700';

const linkClass = 'font-medium italic text-primary-700 underline';

export default function Home() {
  return (
    <main className="relative bg-[#FAF9F6] text-[#2F2F2F]">
      <Navbar />

      <div className="space-y-20 pt-20">
        {/* Welcome / Hero */}
        <Section id="welcome" title="Pontus & Amanda">
          <h2 className="mb-6 text-center text-3xl text-secondary-700 font-[family-name:var(--font-script)]">
            23 maj 2026
          </h2>

          <div className="space-y-4 text-center">
            <p className={bodyClass}>
              Vi ser fram emot att få fira vår stora dag tillsammans med våra fina vänner ❤️
            </p>

            <p className={bodyClass}>
              Vi hoppas få dela denna kväll tillsammans med våra vuxna vänner, men ammande barn är
              självklart välkomna.
            </p>
          </div>
        </Section>

        {/* Schema */}
        <Section id="schedule" title="Schema">
          <div className="space-y-6">
            <div className="rounded-3xl bg-primary-50/70 p-6 shadow-md md:p-8">
              <h3 className={headingClass}>14:00 – Vigsel</h3>

              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>
                  Vigseln hålls i{' '}
                  <a
                    href="https://www.google.com/maps/place/N%C3%B6sunds+kapell/@58.1121434,11.5213828,17z/data=!4m6!3m5!1s0x46459df08b736d8d:0xbe591684fcf7f12e!8m2!3d58.1121434!4d11.5239577!16s%2Fg%2F11f_zymw9n?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Nösunds Kapell
                  </a>
                  .
                </p>

                <p>Observera att det endast finns utedass/toalett i anslutning till kapellet.</p>

                <p>
                  Antalet parkeringsplatser är begränsat, så samåk gärna i så stor utsträckning som
                  möjligt.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-primary-50/70 p-6 shadow-md md:p-8">
              <h3 className={headingClass}>15:30 – Mingel</h3>

              <div className={`mt-4 space-y-3 ${bodyClass}`}>
                <p>
                  Efter vigseln tar vi oss tillbaka till Nösund för incheckning innan minglet
                  fortsätter nere vid sjöstugan.
                </p>

                <p>
                  För gäster utan boende finns parkering vid bryggan, markerad på kartan under Plats
                  & Karta.
                </p>

                <p>
                  Minglet börjar vid parkeringen och fortsätter vidare bort till{' '}
                  <a
                    href="https://maps.app.goo.gl/7yZZfpFwa4Ygseow7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Nösund Sjöstuga
                  </a>
                  , där vi umgås och firar tillsammans fram till middagen.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-primary-50/70 p-6 shadow-md md:p-8">
              <h3 className={headingClass}>17:00 – Middag</h3>

              <div className={`mt-4 ${bodyClass}`}>
                <p>Middagen serveras i sjöstugan med havet precis utanför.</p>
              </div>
            </div>

            <div className="rounded-3xl bg-primary-50/70 p-6 shadow-md md:p-8">
              <h3 className={headingClass}>21:00 – Fest</h3>

              <div className={`mt-4 ${bodyClass}`}>
                <p>
                  När middagen är över fortsätter kvällen med fest, musik och dans långt in på
                  natten 🥂
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Plats & Karta */}
        <Section id="location_description" title="Plats & Karta">
          <div className="space-y-4 text-center">
            <p className={`${bodyClass} mx-auto max-w-2xl`}>
              På kartan hittar du vägen till både vigseln och festen, samt parkering. Det är cirka
              1,5 km mellan vigselplatsen och festlokalen.
            </p>

            <p className={`${bodyClass} mx-auto max-w-2xl`}>
              För dig som bor på Nösundsgården finns egen parkering tillgänglig direkt vid boendet.
            </p>
          </div>

          <div className="mt-8 flex justify-center md:mt-10">
            <Image
              src="/map.png"
              alt="Plats & Karta"
              width={800}
              height={600}
              className="h-auto w-full max-w-md rounded-2xl shadow-xl md:max-w-lg lg:max-w-xl"
            />
          </div>
        </Section>

        {/* Boende */}
        <Section id="accommodation" title="Boende">
          <div className="space-y-4">
            <p className={bodyClass}>
              Vi har preliminärbokat rum på Nösundsgården från fredag 22/5 till söndag 24/5. Här
              finns både hotellrum och enklare vandrarhemsrum, och du väljer själv om du vill boka
              en eller två nätter.
            </p>

            <p className={bodyClass}>Tidig incheckning är möjlig från kl. 13.00.</p>

            <p className={bodyClass}>
              Sista dagen för bokning är <span className="font-semibold">1 februari</span>. Bokning
              sker genom att ange <span className="italic text-primary-700">Pontus</span> eller{' '}
              <span className="italic text-primary-700">Amanda</span>s namn via:
            </p>

            <div className={`${bodyClass} space-y-2 pt-2`}>
              <div>
                <span className="font-semibold">Mail: </span>

                <a href="mailto:ng@nosundsgarden.se" className={linkClass}>
                  ng@nosundsgarden.se
                </a>
              </div>

              <div>
                <span className="font-semibold">Telefon: </span>

                <span className="italic">0304-20999</span>
              </div>

              <div>
                <span className="font-semibold">Mobil (om telefon inte svarar): </span>

                <span className="italic">070-522 02 85</span>
              </div>
            </div>

            <p className={`${bodyClass} pt-2`}>
              Andra alternativ i närheten är Nösund Havshotell (bokningsbart från november) samt via
              tjänster som Airbnb.
            </p>
          </div>
        </Section>

        {/* Toastpar */}
        <Section id="toastcouple" title="Toastpar">
          <div className="space-y-4">
            <p className={bodyClass}>
              Vill du hålla tal eller planerar någon annan överraskning under middagen? Hör gärna av
              dig till vårt toastpar <span className="italic text-primary-700">Rebecca</span> och{' '}
              <span className="italic text-primary-700">Tobias</span>.
            </p>

            <p className={bodyClass}>
              De nås på <span className="italic">073-680 88 02</span>.
            </p>
          </div>
        </Section>

        {/* Gåva */}
        <Section id="gift" title="Gåva">
          <div className="space-y-4">
            <p className={bodyClass}>
              Er närvaro betyder mer för oss än något annat, och det finns inga förväntningar på
              gåvor.
            </p>

            <p className={bodyClass}>
              För den som ändå önskar ge en gåva blir vi väldigt glada för ett bidrag till vår
              bröllopsresa och framtida äventyr tillsammans.
            </p>

            <p className={bodyClass}>
              Gåvan kan swishas till{' '}
              <span className="italic text-primary-700">Tobias Gremalm Vouros</span> på{' '}
              <span className="italic">070-279 34 71</span>.
            </p>
          </div>
        </Section>

        {/* OSA */}
        <Section id="rsvp" title="OSA">
          <div className="space-y-4">
            <p className={bodyClass}>
              O.s.a senast <span className="font-semibold text-secondary-700">1 mars</span> till{' '}
              <span className="italic text-primary-700">Amanda</span> på{' '}
              <span className="italic">070-043 73 26</span>.
            </p>

            <p className={bodyClass}>
              Hör gärna av dig i samband med anmälan om du har någon allergi eller behöver
              specialkost 😀🥂
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}
