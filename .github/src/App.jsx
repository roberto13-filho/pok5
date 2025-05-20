import React from 'react';
import SavedCardsBar from './components/SavedCardsBar';
import SearchCard from './components/SearchCard';

function App() {
  return (
    <div className="container">
      <h1 className="my-4 text-center">Dashboard de Cartas Pokémon</h1>
      <SavedCardsBar />
      <SearchCard />
    </div>
  );
}

export default App;
/**
 * Nome do arquivo: App.jsx
 * Data de criação: 19/05/2025
 * Autor: José Roberto Silva Filho
 * Matrícula: 01741383
 *
 * Descrição:
 * Este componente React implementa um dashboard de cartas do Pokémon TCG.
 * Funcionalidades:
 * - Campo de busca por código de card
 * - Exibição detalhada do card pesquisado
 * - Persistência e exibição de cartas salvas no localStorage
 * - Estilização com Bootstrap
 */