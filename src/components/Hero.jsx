//Esta sección será la tarjeta donde se mostrará mi nombre, la descripción y el contacto

import SkillTag from "./SkillTag";

const Hero = () => (
    <header className="flex justify-center items-center px-4 py-8 bg-gray-100">

        <div className="flex max-w-6xl w-full justify-center items-center">
            {/* Seccion de texto */}
            <div className="flex-1 max-w-lg">
                <h1 className="text-4xl font-bold mb-2">Hola! Soy Taoreta</h1>
                <h2 className="text-xl text-gray-600 mb-2">Estudiante de sistemas computaciones - IPN</h2>
                <p className="text-gray-700 mb-4">Descripcion</p>

                {/*Etquetas de habilidades*/}
                <div className="flex flex-wrap gap-2 mb-6">
                    <SkillTag skill="Python"/>
                    <SkillTag skill="HTML"/>
                    <SkillTag skill="CSS"/>
                    <SkillTag skill="JavaScript"/>
                    <SkillTag skill="React"/>
                    <SkillTag skill="Node"/>
                    <SkillTag skill="Express"/>
                </div>
                
                {/*Boton de contacto*/}
                <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">Contacto</button>
            </div>
            
            {/*Seccion de imagen*/} 
            <div className="flex-1 text-center max-w-xs">
                <img
                    src="https://images.unsplash.com/photo-1734366965699-d3bf9d39140e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Foto de perfil"
                    className="w-64 h-64 rounded-full mx-auto object-cover"
                />
            </div>
        </div>

    </header>
);

export default Hero;