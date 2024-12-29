//Esta sección será la tarjeta donde se mostrará mi nombre, la descripción y el contacto

const Hero = () => (
    <header className="flex justify-center items-center px-4 py-8 bg-gray-100">

        <div className="flex flex-wrap max-w-6x1 w-full justify-between items-center">
            {/* Seccion de texto */}
            <div className="flex-1 maw-w-lg mr-8">
                <h1 className="text-4xl font-bold mb-2">Hola! Soy Taoreta</h1>
                <h2 className="text-xl text-gray-600 mb-2">Full Stack Developer</h2>
                <p className="text-gray-700 mb-1">Estudiante de sistemas computaciones - IPN</p>
                <p className="text-gray-700 mb-4">Descripcion</p>

                {/*Etquetas de habilidades*/}
                <div className="flex flex-wrap grap-2 mb-6">
                    <span className="bg-gray-200 rounded p-2">HTML</span>
                    <span className="bg-gray-200 rounded p-2">CSS</span>
                    <span className="bg-gray-200 rounded p-2">JavaScript</span>
                    <span className="bg-gray-200 rounded p-2">React</span>
                    <span className="bg-gray-200 rounded p-2">Node</span>
                    <span className="bg-gray-200 rounded p-2">Express</span>
                </div>
                
                {/*Boton de contacto*/}
                <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">Contactame!</button>
            </div>
            
            {/*Seccion de imagen*/} 
            <div className="flex-1 text-center">
                <img
                    src="https://images.unsplash.com/photo-1734366965699-d3bf9d39140e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Foto de perfil"
                    className="w-64 h-63 rounded-full mx-auto object-cover"
                />
            </div>
        </div>

    </header>
);

export default Hero;