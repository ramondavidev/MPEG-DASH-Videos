import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <section class="jumbotron text-center">
    <div class="container">
      <h1>Aulas Online</h1>
      <p class="lead text-muted">São mais de 3 mil videos disponíveis para você estudar sobre qualquer assunto.</p>
      <p>
        <Link to="videos" class="btn btn-secondary my-2 mx-2">Tela Inicial</Link>
        <Link to="/ciencias-humanas" class="btn btn-secondary my-2 mx-2">Ciências Humanas e suas Tecnologias</Link>
        <Link to="/portugues" class="btn btn-secondary my-2 mx-2">Linguagens, Códigos e suas Tecnologias.</Link>
        <Link to="/ciencias-da-natureza" class="btn btn-secondary my-2 mx-2">Ciências da Natureza e suas Tecnologias.</Link>
        <Link to="/matematica" class="btn btn-secondary my-2 mx-2">Matemática e suas Tecnologias.</Link>
        <Link to="redacao" class="btn btn-secondary my-2 mx-2">Redação</Link>

      </p>
    </div>
  </section>
    )
}

export default Menu;