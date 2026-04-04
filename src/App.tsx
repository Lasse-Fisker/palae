import { useRef, type ReactNode } from "react";
import "./App.css";
import palae from "./palae.png";
import church from "./Illustrationer/Tag2.png";
import garden from "./Illustrationer/Tag3.png";
import palace from "./Illustrationer/Tag1.png";
import sunflower from "./Illustrationer/Solsikke_hel.png";
import sunfloweProfile from "./Illustrationer/Solsikke_profil.png";
import leaf from "./Illustrationer/Solsikkeblad.png";
import clsx from "clsx";
import MapBox, { Marker, type MapRef } from "react-map-gl/mapbox";
import { LngLatBounds } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Greeting = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <div
      className={clsx("relative z-10 w-4/5 max-w-[500px]", {
        "max-xl:hidden": !mobile,
        "xl:hidden": mobile,
      })}
    >
      <img
        className="absolute -top-10 -right-18 -z-10 h-auto w-[150px]"
        src={sunflower}
      />
      <img
        className="absolute top-12 -right-16 -z-10 h-auto w-[150px]"
        src={sunfloweProfile}
      />
      <img
        className="absolute -bottom-16 -left-20 h-auto w-[150px] scale-x-[-1] rotate-16 transform"
        src={leaf}
      />
      <img
        className="absolute -bottom-24 left-0 h-auto w-[150px] -rotate-1"
        src={leaf}
      />
      <section className="bg-light border-text flex h-fit w-full flex-col gap-8 rounded-2xl border border-solid p-8">
        <h1 className="font-display text-center text-6xl">Anders & Liv</h1>
        <p className="text-center">
          Siger ja til kærligheden og til hinanden. Det vil derfor glæde dem at
          se dig/jer til deres bryllup.
        </p>
      </section>
    </div>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-10 flex w-full justify-center xl:w-1/2">
      <div className="bg-lighter z-1 flex w-full flex-col gap-20 rounded-2xl p-10 shadow-xl xl:max-w-[950px]">
        {children}
      </div>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-4xl">{title}</h2>
      {children}
    </section>
  );
};

type Location = {
  name: string;
  lat: number;
  lng: number;
  img: string;
  address: string;
};

const locations: Location[] = [
  {
    name: "Palæet",
    lng: 10.06798,
    lat: 56.15181,
    img: palace,
    address: "Silkeborgvej 781a, 8220 Brabrand",
  },
  {
    name: "Sønder Årslev Kirke",
    lng: 10.07041,
    lat: 56.15223,
    img: church,
    address: "Årslev Kirkevej 4B, 8220 Brabrand",
  },
  {
    name: "Fællesgartneriet i Årslev ",
    lng: 10.06977,
    lat: 56.14834,
    img: garden,
    address: "Gartnervej 218, 8220 Brabrand",
  },
];

const openGoogleMaps = (address: string) => {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;
  window.open(url, "_blank");
};

const Map = () => {
  const mapRef = useRef<MapRef>(null);

  const handleLoad = () => {
    const bounds = new LngLatBounds();

    locations.forEach((l) => bounds.extend([l.lng, l.lat]));

    mapRef.current?.fitBounds(bounds, {
      padding: 80,
      duration: 100,
    });
  };

  return (
    <div className="border-main relative aspect-[4/3] w-full overflow-hidden rounded-lg rounded-b-md border-2 border-solid xl:w-1/2">
      <MapBox
        ref={mapRef}
        onLoad={handleLoad}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 10.06913,
          latitude: 56.15182,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/minifisker/ckywxlsf7001114po4aoc97qq"
      >
        {locations.map((loc) => (
          <Marker
            key={loc.name}
            anchor="center"
            latitude={loc.lat}
            longitude={loc.lng}
          >
            <button
              className="bg-accent/25 hover:bg-accent/45 cursor-pointer rounded-full transition-all hover:shadow-md"
              onClick={() => openGoogleMaps(loc.address)}
            >
              <img className="h-auto w-10 scale-200" src={loc.img} />
            </button>
          </Marker>
        ))}
      </MapBox>
    </div>
  );
};

function App() {
  return (
    <main className="relative m-20 mx-auto flex flex-col items-center justify-end gap-20 px-12 xl:flex-row">
      <div className="bg-main fixed inset-0 z-0 h-[100vh] w-[100vw]">
        <div
          className="after:from-main relative flex h-full w-full items-center justify-center bg-cover bg-center after:absolute after:top-0 after:right-0 after:bottom-0 after:h-full after:w-1/3 after:bg-gradient-to-l after:to-transparent lg:w-1/2"
          style={{ backgroundImage: `url(${palae})` }}
        >
          <Greeting />
        </div>
      </div>

      <Greeting mobile />

      <Content>
        <Section title="S.U.">
          <p>
            Vi håber, at du/I har lyst til at fejre dagen med os, og vil derfor
            gerne have en tilbagemelding på, om du/I kommer eller ej,{" "}
            <strong> senest d. 1 juli.</strong>
            <br />
            <br />
            Dette kan gøres på sms til Anders på{" "}
            <a
              href="tel:31229499"
              className="text-accent font-bold underline underline-offset-2"
            >
              31229499{" "}
            </a>{" "}
            eller Liv på{" "}
            <a
              href="tel:29722751"
              className="text-accent font-bold underline underline-offset-2"
            >
              29722751{" "}
            </a>
          </p>
        </Section>
        <Section title="Parkering">
          <div className="flex flex-col gap-2">
            <p>Der er mulighed for parkering flere steder:</p>
            <ul className="ml-4 flex list-disc flex-col gap-2">
              <li>
                <a
                  target="_blank"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fmaps.app.goo.gl%2FoJ7fAUdtVQi5bHpK6%3Fg_st%3Dic%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwZWhtdXZxb3ZwSEhOcVVCc3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4OvuQPPteRShp3sagiy_ZiScmGLZlcW2E_ZYAkU4wW_HbLrTS2g3PsEXUUpw_aem_4ZyhpBOMDulj1yBWMYbPow&h=AT7uLtknvRRmYa2VDcAdaqaWmgffZyokMV7c82jbEC9y6yO9M4M-0BOQo8TSh8_defrQv4KSYvOEh4v1vWc09X8jw3MfoUh-7JmURe-RJ7hBMNDc0GpwFEka2zEHJMkPxRXW4wR9"
                  className="text-accent font-bold underline underline-offset-2"
                >
                  Kirkens parkering
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/cFV8SZVytiGMd2Vs7?g_st=ic"
                  className="text-accent font-bold underline underline-offset-2"
                >
                  Duelandsvej (parallelt med Silkeborgvej
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fmaps.app.goo.gl%2FMSRJVrVaaTt8wfqv7%3Fg_st%3Dic%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwZWhtdXZxb3ZwSEhOcVVCc3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4dqKtzGLh_KSAsZAIPg7Esg7MVHF070VViStrvAP6VrAMZRlXFcec_urfguQ_aem_o7Mt9vrafjyYjHD4yUW_hw&h=AT7uLtknvRRmYa2VDcAdaqaWmgffZyokMV7c82jbEC9y6yO9M4M-0BOQo8TSh8_defrQv4KSYvOEh4v1vWc09X8jw3MfoUh-7JmURe-RJ7hBMNDc0GpwFEka2zEHJMkPxRXW4wR9"
                  className="text-accent font-bold underline underline-offset-2"
                >
                  Årslev Markvej (bag palæet)
                </a>
              </li>
            </ul>
          </div>
        </Section>
        <Section title="Praktisk">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold">Fodtøj</h3>
              <p>
                Egnet til havefest og gang på græs og grussti. Efter vielsen går
                vi 500 meter fra kirken til receptionen i samlet
                bryllupsprocession. Efter receptionen går vi 500 meter fra haven
                til vores hjem i Palæet.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Påklædning efter vejret</h3>
              <p>
                Receptionen holdes under åben himmel, med mulighed for ly i
                drivhusene og under oversejl. Der vil være mulighed for at gå
                tur på græs mellem haverne og indenfor i drivhusene. Festen
                foregår i telt i haven, og det kan blive køligt hen under
                aftenen.
              </p>
            </div>
          </div>
        </Section>
        <Section title="Overnatning">
          <p>
            Det er muligt at leje enkelt eller dobbeltværelse på Årslev Kro.
            <br /> <br />
            Hvis man oplyser, at det er til Liv og Anders’ bryllup, er prisen
            650 / 750 for enkelt/dobbeltværelse. Vi arrangerer natlig transport
            fra Palæet til Årslev Kro.
          </p>
        </Section>
        <Section title="Ønsker">
          <p>
            Skulle du/I have lyst til at give en gave, har Anders og Liv
            oprettet en ønskesky til inspiration.
            <br />
            <a
              href="https://onskeskyen.dk/da/"
              className="text-accent font-bold underline underline-offset-2"
            >
              Se ønskesky
            </a>
          </p>
        </Section>
        <Section title="Taler, indslag og spørgsmål">
          <p>
            Ønsker du/I at holde en tale, eller lave et indslag under
            bryllupsfesten, bedes du række ud til Anders’ bror Lasse, som er
            toastmaster på dagen, på{" "}
            <a
              href="mailto:l.nielsen.fisker@gmail.com"
              className="text-accent font-bold underline underline-offset-2"
            >
              l.nielsen.fisker@gmail.com
            </a>{" "}
            <br />
            <br />
            N.B. Indslag <strong>skal</strong> aftales{" "}
            <strong>inden d. 1/8</strong>, da der ellers ikke vil være afsat tid
            til dem. På forhånd tak!
          </p>
        </Section>
        <Section title="Hvor og hvornår?">
          <div className="flex flex-col gap-2">
            <p>
              I er inviteret til bryllup d. 22 august 2026. Dagen foregår på tre
              lokationer; Vielse i Årslev kirke, Reception i Fællesgartneriet og
              slutteligt bryllupfest i palæet.
            </p>
            <div className="mt-4 flex w-full flex-col justify-between lg:flex-row">
              <Location
                img={church}
                title="Vielse kl. 13"
                subtitle="i Sønder Årslev Kirke
Kirkekirkevej 13, 8220"
              />
              <Location
                img={garden}
                title="Reception kl. 14:30-16:30"
                subtitle="ved Fællesgartneriet i Årslev
Gartnervej 218, 8220"
              />
              <Location
                img={palace}
                title="Bryllupsfest kl. 17:00"
                subtitle="i Palæet
Silkeborgvej 781a, 8200"
              />
            </div>
          </div>
        </Section>
      </Content>
    </main>
  );
}

const Location = ({
  img,
  title,
  subtitle,
}: {
  img: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <img src={img} />
      <h3 className="-mt-8 text-center font-bold">{title}</h3>
      <p className="-mt-1 text-center">{subtitle}</p>
    </div>
  );
};

export default App;
