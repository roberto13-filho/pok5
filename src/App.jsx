import React from 'react';
import './App.css';
import SavedCardsBar from './components/SavedCardsBar';
import SearchCard from './components/SearchCard';

function App() {
  return (
    <div className="container">
      <div className="banner">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokémon Logo" />
      </div>
      <h1 className="text-center">Roberto - Dashboard</h1>
      <h3 className="text-center">API de Cartas Pokémon TCG.</h3>
      <SavedCardsBar />
      <SearchCard />
      <footer className="bg-primary text-white text-center py-4 mt-5">
        <p>© 2025 Roberto - Dashboard: Todos os direitos reservados. Este site é apenas para fins educacionais e não tem fins lucrativos.</p>
        <p>Desenvolvido by José Roberto Silva Filho, Matrícula: 01741383, Disciplina: Front-End, Professor: Francisco Wallison - UNINASSAU,</p>
        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" className="text-white me-3">LinkedIn</a>
        <a href="https://www.instagram.com/robertofilho.sh/" className="text-white me-3">Instagram</a>
        <a href="https://github.com/roberto13-filho" className="text-white me-3">Github</a>
      </footer>
    </div>
  );
}

export default App;
