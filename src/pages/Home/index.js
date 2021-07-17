import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
  const [ email, setEmail ] = useState("");
  const [ nome, setNome ] = useState("");

  const handleSendEmail = () => {
    const user_obj = { nome, email };
    if (localStorage.getItem("users_json") === null) {
      localStorage.setItem("users_json", JSON.stringify([user_obj]));
      return;
    }
    localStorage.setItem(
      "users_json", 
      JSON.stringify([...JSON.parse(localStorage.getItem("users_json")), user_obj])
    );
  }

  return (
    <>
      <header role="banner">
        <img src={logoImg} alt="Logo" width="140px"/>

        <nav role="navigation">
          <ul role="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Contato</Link>
            </li>
            <li>
              <Link to="/">Suporte</Link>
            </li>
            <li>
              <Link to="/" style={{ backgroundColor: "#d72323" }}>Comprar</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main role="main">
        <section className="section-left">
          <h1>Suba de elo agora mesmo com 30% de desconto</h1>
          <p>
            Junte-se a nossa equipe de diversos jogadores, proplayers e coachs dos elos mais altos. Evolua seu mindset, noção de mapa, rotação, microgame e macrogame e as mecânicas dos mais diversos campeões para você carregar seu time nas partidas e alcançar o elo tão sonhado.
          </p>
        </section>

        <section className="section-right">
          <p>Receba agora mesmo um ebook com dicas de profissionais para subir nas filas ranqueadas</p>
          <form action="#" method="POST">
            <input
              placeholder="Seu nome completo*"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />

            <input 
              placeholder="Seu e-mail*"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="button" onClick={handleSendEmail}>Receber</button>
          </form>
        </section>
      </main>
    </>
  );
}