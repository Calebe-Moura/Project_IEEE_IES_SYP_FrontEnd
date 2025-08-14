'use client';

import type { Metadata } from "next";
import './style.css';
import banner from '../../assets/imagens/banner.webp';
import { useState, useEffect } from "react";



function Home() {
    const prazo = new Date("2025-08-15T23:59:59");

    const [tempoRestante, setTempoRestante] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    useEffect(() => {
        const intervalo = setInterval(() => {
            const agora = new Date();
            const diferenca = prazo.getTime() - agora.getTime();

            if (diferenca <= 0) {
                clearInterval(intervalo);
                setTempoRestante({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
                return;
            }

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
            const segundos = Math.floor((diferenca / 1000) % 60);

            setTempoRestante({ dias, horas, minutos, segundos });
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <section className="hero-section">
            <div className="z-[0] relative bg-repeat w-full h-screen bg-size-[10px_10px] hero-bg" id="bg">
                <div className="col-span-12 mx-auto">
                    <div className="flex justify-center items-center">
                        <h1 className="font-persian text-center mb-4 font-bold text-3xl sm:text-5xl tracking-tight sm:mb-6 lg:mb-8 lg:font-extrabold lg:leading-none linha1" >IEEE IES</h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <h1 className="font-persian relative text-center mb-2 text-3xl font-bold tracking-tight sm:mb-2 sm:text-4xl lg:mb-2 lg:text-5xl lg:font-extrabold lg:leading-none linha2">
                            Student and Young Professional
                        </h1>
                    </div>

                    <div className="flex justify-center items-center mb-2 sm:pt-4 linha3">
                        <h1 className="font-persian relative text-center mb-2 text-3xl font-bold tracking-tight sm:!text-4xl lg:!text-5xl lg:font-extrabold lg:leading-none linha3p1">
                            Congress
                        </h1>

                        <div className="linha3p2">
                            <span className="linha3p2p1">2</span>
                            <span className="linha3p2p2">ND</span>
                            <span className="linha3p2p3">EDITION</span>
                        </div>
                    </div>

                    <h2 className="mb-1 text-center text-lg font-bold tracking-tight sm:mb-2 sm:text-xl lg:mb-4 lg:text-2xl lg:font-extrabold lg:leading-none" id="linha4">
                        Ancient Foundations, Future Innovations
                    </h2>
                    <h2 className="mb-2 text-center text-lg font-bold tracking-tight sm:mb-4 sm:text-xl lg:mb-7 lg:text-2xl lg:font-extrabold lg:leading-none" id="linha5">
                        Tunis, Tunisia
                    </h2>

                    <div className="mb-4 text-center sm:mb-8 lg:mb-7">
                        <span className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl lg:font-extrabold lg:leading-none" id="linha6">
                            15 - 17 August <span className="text-[#00B50C]">2025</span>
                        </span>
                    </div>

                   
                    <div className="flex justify-center gap-6">
                        {[
                            { label: "days", value: tempoRestante.dias },
                            { label: "hours", value: tempoRestante.horas },
                            { label: "minutes", value: tempoRestante.minutos },
                            { label: "seconds", value: tempoRestante.segundos }
                        ].map((item) => (
                            <div key={item.label} className="text-center space-y-3">
                                <span className="text-4xl md:text-6xl font-bold block">
                                    {String(item.value).padStart(2, "0")}
                                </span>
                                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center z-20">
                    <img
                        alt="banner"
                        loading="lazy"
                        width="1200"
                        height="300"
                        className="h-40 object-contain sm:h-60 lg:m-0 z-20"
                        src={banner.src}
                    />
                </div>
            </div>


        </section>
    );
}

export default Home;
