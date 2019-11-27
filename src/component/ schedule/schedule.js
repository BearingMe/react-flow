import React from "react";
import "./schedule.css";
import Particles from 'react-particles-js'

let options = {
  particles: {
    number: {
      value: 100
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      }
    }
  }
};

export default function Schedule() {
  return (
    <main className="">
      <img
        src="assets/images/cute-feelings.png"
        alt="woman blowing flowers"
        className="img-fluid w-100"
      />
      <div className="container-fluid">
      <Particles className="particles" params={options} />

        <div className="row darker p-5">
          <div className="col-md-9">
            <h1>AGÊNCIA DE INTERNET.</h1>
            <br />
            <h1>DESENVOLVEMOS SITES E APLICATIVOS COM EFEITOS UAU.</h1>

            <hr className="separator" />
          </div>

          <div className="col-md-9">
            <p>
              Uau significa mais atenção, maior envolvimento da marca e mais
              sucesso.
            </p>

            <p>
              Com sede no centro da cidade de Hamburgo, somos especializados em
              web design e desenvolvimento de aplicativos digitais. Projetamos e
              desenvolvemos sites, aplicativos móveis para iOS e Android, além
              de lojas on-line para clientes de pequeno e médio porte e como
              parceiro de agências e redes de publicidade.
            </p>

            <p>
              O recurso especial de nossas soluções: tecnologia de ponta e
              mundos emocionais de experiência com atenção aos detalhes.
            </p>
          </div>
        </div>

        <div className="row lighter p-5">
          <div className="col-md-9">
            <h1>
              TRADUZIMOS MENSAGENS DE MARCA EM LINGUAGEM VISUAL: UAU! QUE LEGAL!
              OLHA AQUI!
            </h1>

            <hr className="separator" />
          </div>

          <div className="col-md-9">
            <p>
              Do conceito à ideia e à implementação - desenvolvemos soluções
              funcionais com alta qualidade de webdesign (UI e UX) e valor
              agregado emocional. Isso não é um truque, mas a comunicação
              digital ativa os grupos-alvo. As experiências determinam a relação
              entre o consumidor e a marca.
            </p>

            <p>
              O recurso especial de nossas soluções: tecnologia de ponta e
              mundos emocionais de experiência com atenção aos detalhes.
            </p>

            <br />
            <br />

            <h1 style={{ fontWeight: "lighter" }}>
              Carregar soluções digitais emocionalmente - como funciona? Três
              exemplos de potencial de ativação total na Web:
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
