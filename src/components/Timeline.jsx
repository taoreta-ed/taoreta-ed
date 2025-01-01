import React from "react";

const Timeline = () => {

    const events = [
        {
            date: "2021",
            title: "Ingreso a la carrera de Ingeniería en Sistemas Computacionales",
            description: "Instituto Politécnico Nacional",
        },
        {
            date: "2017",
            title: "Técnico en Programación",
            description: "Instituto Politécnico Nacional: Centro de Estudios Científicos y Tecnológico #9 Juan de Dios Bátiz.",
        },
    ];

    return (
        <section className="flex justify-center items-center px-4 py-10 bg-zinc-900">
            <div className="flex flex-col max-w-6xl w-full justify-center items-center">
                <h2 className="text-3xl text-zinc-100 font-bold mb-6">Mi trayectoria</h2>
                <ol className="relative border-l border-zinc-100">
                    {events.map((event, index) =>(
                        <li key={index} className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 rounded full mt-1.5 -left-1.5 border  border-white bg-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-zinc-400">{event.date}</time>
                            <h3 className="text-lg font-semibold text-indigo-400">{event.title}</h3>
                            <p className="text-base font-normal text-zinc-200">{event.description}</p>
                        </li>
                    ))}
                    
                </ol>
            </div>
        </section>
        
    );

};

export default Timeline;