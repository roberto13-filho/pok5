/*******************************************************
 * Nome do arquivo: CardDetails.jsx
 * Data de criação: 20/05/2025
 * Autor: José Roberto Silva Filho
 * Matrícula: 01741383 UNINASSAU
 *
 * Descrição:
 * Exibe detalhes completos de uma carta Pokémon TCG e permite salvá-la.
 *******************************************************/

import React, { useState, useEffect } from 'react';

function CardDetails({ card }) {
  const [isSaved, setIsSaved] = useState(false);

  // Verifica se a carta já está salva ao carregar ou mudar de carta
  useEffect(() => {
    if (!card) return;
    const saved = JSON.parse(localStorage.getItem('savedCards')) || [];
    setIsSaved(saved.some(c => c.id === card.id));
  }, [card]);

  // Função para salvar a carta no localStorage
  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem('savedCards')) || [];
    if (!saved.some(c => c.id === card.id)) {
      saved.push(card);
      localStorage.setItem('savedCards', JSON.stringify(saved));
      setIsSaved(true);
      window.dispatchEvent(new Event('storage'));
    }
  };

  if (!card) return null;

  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4 text-center">
          <img
            src={card.images?.large || card.images?.small}
            alt={card.name}
            className="img-fluid p-3"
            style={{ maxHeight: 400 }}
          />
          {/* Botão para salvar a carta */}
          <button
            className="btn btn-success mt-2"
            onClick={handleSave}
            disabled={isSaved}
          >
            {isSaved ? 'Carta Salva' : 'Salvar Carta'}
          </button>
        </div>
        {/* ...demais detalhes da carta... */}
      </div>
    </div>
  );
}

export default CardDetails;