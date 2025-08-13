
const Generator = () => {
    return (
        <div className="flex flex-col items-center justify-center rounded p-20 backdrop-blur-sm bg-white/30 text-white">
            <h1 className="text-3xl font-bold mb-4">Random Quote Generator</h1>
            <p className="text-lg mb-6">Click the button below to generate a random quote.</p>
            <div className="m-auto p-4 bg-white shadow rounded">
                <p className="text-gray-700">"This is where the quote will appear."</p>
            </div>
            <button className="bg-green-950 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors mt-4">
                Generate Quote
            </button>
        </div>
    )
}

export default Generator