//Esta sección será la tarjeta donde se mostrará mi nombre, la descripción y el contacto

import SkillTag from "./SkillTag";
import {EnvelopeIcon, ClipboardIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    //Funcion para copiar el correo al portapapeles
    const handleCopyEmail= () => {
        navigator.clipboard.writeText("taoreta@example.com")
            .then(() => {
                setCopied(true); //Muestra Copiado!
                setTimeout(() => setCopied(false), 2000); //Vuelve a ocultar el mensaje  
            })
            .catch(err => console.error("Error al copiar: ",err));
    }

    return(
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
                    
                    {/*Boton de mail dividido en dos partes*/}
                    <div className="flex items-center">
                        {/*Boton de mail*/}
                        <a href="mailto:taoreta@example.com" className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-l-md hover:bg-blue-600 transition duration-300 h-10">
                            <EnvelopeIcon className="h-5 w-5"/></a>
                        {/*Boton de copiar correo*/}
                        <button onClick={handleCopyEmail} className="flex items-center bg-gray-200 text-blue-500 px-4 py-2 rounded-r-md hover:bg-gray-300 transition duration-300 h-10">
                            <ClipboardIcon className="h-5 w-5 mr-2"/>{copied ? "Copiado!" : "taoreta@example.com"}
                        </button>
                    </div>
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
};

export default Hero;