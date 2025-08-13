import Header from "./Header"
import Footer from "./Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const Layout = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-image bg-cover bg-center">
                <Header />
                <main className="flex-grow container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
            
    )
}

export default Layout