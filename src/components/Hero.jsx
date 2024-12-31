//Esta sección será la tarjeta donde se mostrará mi nombre, la descripción y el contacto

import {EnvelopeIcon, ClipboardIcon} from '@heroicons/react/24/solid';
import {useState} from 'react';
import IconWithTooltip from "./IconWithTooltip";
import { Html5Plain, Css3Plain, JavascriptOriginal, CPlain, MysqlOriginal, JavaPlain, NodejsPlain, GithubOriginal, PythonPlain} from 'devicons-react';

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
        <header className="flex justify-center items-center px-4 py-8 bg-zinc-900">

            <div className="flex max-w-6xl w-full justify-center items-center">
                {/* Seccion de texto */}
                <div className="flex-1 max-w-lg">
                    <h1 className="text-4xl text-zinc-100 font-bold mb-2">Eduardo Castro</h1>
                    <h2 className="text-xl text-zinc-100 mb-2">Estudiante de sistemas computaciones - IPN</h2>
                    <p className="text-zinc-200 mb-4">Apasionado por crear soluciones tecnológicas eficientes y sostenibles. Enfocado en la
                    optimización, resolución de problemas y calidad, con un enfoque colaborativo. Proactivo y orientado al crecimiento constante.</p>

                    {/*Etquetas de habilidades*/}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <IconWithTooltip IconComponent={Html5Plain} title="HTML5" />
                        <IconWithTooltip IconComponent={Css3Plain} title="CSS3" />
                        <IconWithTooltip IconComponent={JavascriptOriginal} title="JavaScript" />
                        <IconWithTooltip IconComponent={CPlain} title="C" />
                        <IconWithTooltip IconComponent={MysqlOriginal} title="MySQL" />
                        <IconWithTooltip IconComponent={JavaPlain} title="Java" />
                        <IconWithTooltip IconComponent={NodejsPlain} title="Node.js" />
                        <IconWithTooltip IconComponent={PythonPlain} title="Python" />
                    </div>
                    
                    {/*Boton de mail dividido en dos partes*/}
                    <div className="flex items-center">
                        {/*Boton de mail*/}
                        <a href="mailto:taoreta@example.com" className="flex items-center bg-indigo-400 text-zinc-950 px-4 py-2 rounded-l-md hover:bg-indigo-500 transition duration-300 h-10">
                            <EnvelopeIcon className="h-5 w-5"/></a>
                        {/*Boton de copiar correo*/}
                        <button onClick={handleCopyEmail} className="flex items-center bg-zinc-950 text-indigo-400 px-4 py-2 rounded-r-md hover:bg-zinc-800 transition duration-300 h-10">
                            <ClipboardIcon className="h-5 w-5 mr-2"/>{copied ? "Copiado!" : "taoreta@example.com"}
                        </button>
                        {/*Boton de GitHub*/}
                        <a href="https://github.com/taoreta-ed" target='_blank' rel="noopener noreferrer" className="flex items-center bg-indigo-400 px-4 py-2 rounded-md h-10 ml-2 hover:bg-indigo-500 transition duration-300">
                            <GithubOriginal/>
                        </a>
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