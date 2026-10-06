import GameCard from "../components/GameCard"
import imageGame from "../assets/game1.png"

const Home = () => {
  
  const games=[
    {id:1, title:"Jogo-01", preco: "R$ 200,00", image: imageGame},
    {id:2, title:"Jogo-02", preco: "R$ 350,00", image: imageGame},
    {id:3, title:"Jogo-03", preco: "R$ 320,99", image: imageGame}
  ]
  
  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">JOGOS EM DESTAQUE</h2>
    
    {/* É Aqui que os cards ficam ao lado do outro */}
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {games.map((game) => (
        <GameCard
        key={game.id}
        title={game.title}
        preco={game.preco}
        image={game.image}
        />
      ))}
    </section>
    
    </main>
  )
}

export default Home
