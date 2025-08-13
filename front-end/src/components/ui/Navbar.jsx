import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-transparent p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="space-x-4">
                    <NavLink to="/" className="text-white hover:text-gray-300">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="text-white hover:text-gray-300">
                        About
                    </NavLink>
                    <NavLink to="/contact" className="text-white hover:text-gray-300">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar