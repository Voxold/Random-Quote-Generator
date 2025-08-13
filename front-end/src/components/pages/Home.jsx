import Generator from "../ui/Generator"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent bg-gray-100">
      <h1 className="text-3xl font-bold text-white mb-4">Welcome to the Random Quote Generator</h1>
      <p className="text-lg text-white mb-6">Click the button below to generate a random quote.</p>
      <Generator />
    </div>
  )
}

export default Home