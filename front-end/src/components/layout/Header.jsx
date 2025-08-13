import Navbar from "../ui/Navbar"

const Header = () => {
    return (
        <header className="bg-fixed bg-transparent p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8 inline-block mr-2" />
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header