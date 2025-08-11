import type { Metadata } from "next";
import './style.css'


export const metadata: Metadata = {
    title: "IEEE IES SYP",
    description: "",
};


function Home() {
    return (
        <section className="titulo-principal">
            <h1>
                <span className="linha1">IEEE IES</span>
                <span className="linha2">Student and Young Professional</span>
                <span className="linha3">
                    Congress
                    <span className="edicao">
                        <span className="numero">2
                            <span className="nd">
                                ND
                            </span>
                        </span>
                        <span className="edition">Edition</span>
                    </span>
                </span>
            </h1>
        </section>

    );
}

export default Home;