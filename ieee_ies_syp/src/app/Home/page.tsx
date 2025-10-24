import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

function Home() {
  return (
    <main className="conteiner">
      <div className="linha1">IEES IES</div>
      <div className="linha2">Student and Young Professional</div>
      <div className="linha3">
        <div className="linha3-pt1"> Congress </div>
        <div className="linha3-pt2"> 2 </div>
        <div className="linha3-pt3">ND </div>
        <div className="linha3-pt4">Edition</div>
      </div>
    </main>
  );
}

export default Home;
