import React from "react";

const Navbar = () => (
    <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between intems-center">
            <div className="text-xl font-bold">Taoreta</div>
            <ul className="flex">
                <li>
                    <a href="#" className="hover:text-gray-400">Inicio</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-gray-400">Acerca de</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-gray-400">Proyectos</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-gray-400">Contacto</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;