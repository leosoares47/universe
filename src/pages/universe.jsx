import "../App.css"
import { Link } from "react-router-dom"

export function Universe() {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen bg-universe text-white">
        <header className="flex gap-8">
          <div className="flex gap-8 p-10">
            <img className="" src="./src/assets/logo.svg" alt="" />
            <Link to="/home">
              <button>Home</button>
            </Link>
            <div className="font-bold">O Universo</div>
            <div>
              <Link to="/exploration">
                <button>Exploração</button>
              </Link>
            </div>
          </div>
        </header>
        <main>
          <div className="mt-16 ml-16">
            <h1 className="font-bold text-5xl">O Universo</h1>
            <div className="w-[648px] mt-4">
              <p>
                A palavra Universo deriva do latim universum. A palavra latina
                foi usada por Cícero e posteriormente por outros autores com o
                mesmo sentido que é empregada atualmente. A palavra latina é
                derivada da contração poética unvorsum — utilizada primeiramente
                por Lucrécio no Livro IV de seu “Sobre a Natureza das coisas” —
                que conecta un, uni (um) com vorsum, versum (que significa "algo
                rodado, rolado ou mudado").
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
