import { Link } from "react-router-dom"

import "../App.css"

export function Exploration() {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen bg-exploration text-white">
        <header className="flex gap-8">
          <div className="flex gap-8 p-10">
            <img className="" src="./src/assets/logo.svg" alt="" />
            <div>
              <Link to="/home">
                <button>Home</button>
              </Link>
            </div>
            <div>
              <Link to="/universe">
                <button>O Universo</button>
              </Link>
            </div>
            <div className="font-bold">Exploração</div>
          </div>
        </header>
        <main>
          <div className="mt-16 ml-16">
            <h1 className="font-bold text-5xl">Exploração</h1>
            <div className="w-[648px] mt-4">
              <p>
                Os corpos celestes e astros sempre foram motivo de grande
                fascinação na humanidade. Há registros de gregos, mesopotâmicos
                e astecas descrevendo vários acontecimentos celestes. Na era
                contemporânea, vários cientistas deram grandes contribuições
                para que o sonho de explorar o espaço pudesse se tornar
                realidade, como o russo Konstantin Tsiolkovsky, o alemão Hermann
                Oberth e o estadunidense Robert Goddard.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
