import "../App.css"

export function Universe() {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen bg-home text-white">
        <header className="flex gap-8">
          <div className="flex gap-8 p-10">
            <img className="" src="./src/assets/logo.svg" alt="" />
            <div className="font-bold">Home</div>
            <div>O Universo</div>
            <div>Exploração</div>
          </div>
        </header>
        <main>
          <div className="flex flex-col items-center justify-center mt-44">
            <h1 className="font-bold text-5xl">Explore o Universo</h1>
            <button className="text-sm font-bold rounded-md border-2 border-white px-8 py-3 mt-6">
              QUERO SABER MAIS
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
