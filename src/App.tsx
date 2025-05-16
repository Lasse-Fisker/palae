import "./App.css";
import palae from "./palae.png";
import disco from "./disco.jpg";

const Map = () => (
  <svg
    width="48"
    height="47"
    viewBox="0 0 48 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 27.4167C28.3201 27.4167 31.8333 23.9034 31.8333 19.5833C31.8333 15.2632 28.3201 11.75 24 11.75C19.6799 11.75 16.1667 15.2632 16.1667 19.5833C16.1667 23.9034 19.6799 27.4167 24 27.4167ZM24 15.6667C26.16 15.6667 27.9167 17.4233 27.9167 19.5833C27.9167 21.7434 26.16 23.5 24 23.5C21.84 23.5 20.0833 21.7434 20.0833 19.5833C20.0833 17.4233 21.84 15.6667 24 15.6667Z"
      fill="black"
      fill-opacity="0.7"
    />
    <path
      d="M22.8642 42.7191C23.1958 42.9552 23.5929 43.0821 24 43.0821C24.4071 43.0821 24.8042 42.9552 25.1358 42.7191C25.7312 42.298 39.7235 32.195 39.6667 19.5833C39.6667 10.9451 32.6382 3.91667 24 3.91667C15.3618 3.91667 8.33333 10.9451 8.33333 19.5735C8.27654 32.195 22.2688 42.298 22.8642 42.7191ZM24 7.83334C30.4801 7.83334 35.75 13.1032 35.75 19.5931C35.7911 28.2842 27.1568 36.0882 24 38.6477C20.8451 36.0862 12.2089 28.2803 12.25 19.5833C12.25 13.1032 17.5199 7.83334 24 7.83334Z"
      fill="black"
      fill-opacity="0.7"
    />
  </svg>
);

const Date = () => (
  <svg
    width="39"
    height="39"
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3_34)">
      <path
        d="M34.9375 38.5H4.0625C2.09125 38.5 0.5 36.9087 0.5 34.9375V6.4375C0.5 4.46625 2.09125 2.875 4.0625 2.875H34.9375C36.9087 2.875 38.5 4.46625 38.5 6.4375V34.9375C38.5 36.9087 36.9087 38.5 34.9375 38.5ZM4.0625 5.25C3.3975 5.25 2.875 5.7725 2.875 6.4375V34.9375C2.875 35.6025 3.3975 36.125 4.0625 36.125H34.9375C35.6025 36.125 36.125 35.6025 36.125 34.9375V6.4375C36.125 5.7725 35.6025 5.25 34.9375 5.25H4.0625Z"
        fill="black"
        fill-opacity="0.7"
      />
      <path
        d="M11.1875 10C10.5225 10 10 9.4775 10 8.8125V1.6875C10 1.0225 10.5225 0.5 11.1875 0.5C11.8525 0.5 12.375 1.0225 12.375 1.6875V8.8125C12.375 9.4775 11.8525 10 11.1875 10ZM27.8125 10C27.1475 10 26.625 9.4775 26.625 8.8125V1.6875C26.625 1.0225 27.1475 0.5 27.8125 0.5C28.4775 0.5 29 1.0225 29 1.6875V8.8125C29 9.4775 28.4775 10 27.8125 10ZM37.3125 14.75H1.6875C1.0225 14.75 0.5 14.2275 0.5 13.5625C0.5 12.8975 1.0225 12.375 1.6875 12.375H37.3125C37.9775 12.375 38.5 12.8975 38.5 13.5625C38.5 14.2275 37.9775 14.75 37.3125 14.75Z"
        fill="black"
        fill-opacity="0.7"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_34">
        <rect
          width="38"
          height="38"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

function App() {
  return (
    <>
      <div className="w-full flex gap-2 items-center p-10 bg-amber-300">
        <div className="flex flex-col">
          <h2 className="text-5xl font-black text-red-900 animate-pulse">
            BREAKING!
          </h2>
          <p className="text-2xl">
            🪩🪩🪩 Palæet har specielt til lejligheden arrangeret dansk deltagelse
            ved Eurovision finalen! <br /> Eksklusivt show venter udvalgte
            gæster!! 🪩🪩🪩
          </p>
        </div>
      </div>

      <div className="w-full min-h-screen bg-white flex flex-col xl:flex-row overflow-hidden">
        {/* Left Panel */}
        <div
          className="w-full xl:w-[50%] flex flex-col justify-center items-center gap-16 px-6 py-12"
          style={{ backgroundImage: `url(${palae})`, backgroundSize: "cover" }}
        >
          <div className="flex flex-col justify-start items-center text-center gap-2">
            <h1 className="max-xl:mt-32 text-8xl xl:text-9xl font-['Aguafina_Script'] text-black">
              Palæet
            </h1>
            <p className="text-4xl xl:text-3xl font-['Jacques_Francois'] text-black/70">
              Åbner dørene for
            </p>
          </div>

          <div className="text-6xl xl:text-6xl leading-[130%] font-['Aguafina_Script'] text-black text-center">
            EuroVision
            <br />
            Extravaganza
          </div>

          <div className="w-full max-w-[380px] flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative">
                <Date />
              </div>
              <p className="text-2xl font-['Jacques_Francois'] text-black/70">
                17. Maj
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 relative">
                <Map />
              </div>
              <p className="text-2xl font-['Jacques_Francois'] text-black/70">
                Palæet på Silkeborgvej 781a
                <br />
                8210 Brabrand
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full xl:w-[50%] flex flex-col items-center px-6 py-12 bg-red-100 xl:overflow-y-auto xl:max-h-screen">
          <div className="max-w-xl xl:mt-60 w-full text-black text-lg font-['Jacques_Francois'] leading-relaxed whitespace-pre-line">
            <h2 className="text-4xl mb-8 font-['Jacques_Francois'] ">
              Aftenens program
            </h2>
            Kl 17: Pizzabageri og hvidvin på terrassen. <br />
            <br />
            Kl 18: Pizza og The Story of Fire Saga (eurovision-filmen) <br />
            <br />
            Kl 21: Eurovision 2025, finale show. <br />
            <br />
            I dagens anledning byder Palæ-baren på to helt særlige cocktails.
            Nemlig: Queer Fantasy🇨🇭& Sauna Gus🇸🇪
            <br />
            <br />
            Medbring eventuelt selv en snack eller en cocktail inspireret af en
            sang, hvis du vil være gæstebartender i løbet af aftenen🍸🍹🧉
            <br />
            <br />
            Kom glad: med eller uden glimmer, palietter, fjer og laksko🪩✨
            <br />
            <br />
            Får man en tand for meget af politisk apolitik, balkanballader og
            etno pop kan man fortrække til Eurovision-fri-zone i palæet
            vinkælder🚫🪩🚫🍷
            <br />
            <br />
            Bus 113 og 11 går lige til døren, men der er også mulighed for
            overnatning🥳
          </div>
          <div className="max-w-xl w-full gap-2 my-14 text-black text-lg font-['Jacques_Francois'] leading-relaxed whitespace-pre-line">
            <h2 className="text-4xl mb-8 font-['Jacques_Francois'] ">
              Køkkenet byder på
            </h2>
            <p>Friskbagte napolitanske pizzaer direkte fra spade til bord.</p>
            <p className="mb-6">
              Alle pizzaer serveres med vores blanding af{" "}
              <i>parmesan, grana padano os fior de latte mozzarella</i>
            </p>
            <ul className="list-disc gap-6 felx flex-col">
              <li>
                <p className="text-xl mb-1">Conchita Salsiccia</p>
                <p className="text-base opacity-70 mb-2">
                  Hvid, grillet aubergine, basilikum,{" "}
                  <strong> ugudelige mængder</strong>
                  parmesan
                </p>
              </li>
              <li>
                <p className="text-xl mb-1">Conchita con Salsiccia (v)</p>
                <p className="text-base opacity-70 mb-2">
                  Hvid, grillet aubergine, basilikum,{" "}
                  <strong> ugudelige mængder</strong>
                  parmesan
                </p>
              </li>
              <li>
                <p className="text-xl mb-1">Hard Rock Margarita</p>
                <p className="text-base opacity-70 mb-2">
                  Hvid, grubelagret vesterhavsost, olivenolie, cherrytomat
                </p>
              </li>
              <li>
                <p className="text-xl mb-1">‘Nduria</p>
                <p className="text-base opacity-70 mb-2">
                  Rød, ventricina salami, Nduja, basilikum. Honning kan
                  tilvælges efter bagning
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
