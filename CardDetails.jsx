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

  useEffect(() => {
    if (!card) return;
    const saved = JSON.parse(localStorage.getItem('savedCards')) || [];
    setIsSaved(saved.some(c => c.id === card.id));
  }, [card]);

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
          {/* Imagem em alta resolução */}
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
        {/* Detalhes da carta */}
        <div className="col-md-8">
          <div className="card-body">
            {/* Nome, supertipo e subtipos */}
            <h2>{card.name}</h2>
            <p>
              <strong>Supertipo:</strong> {card.supertype} <br />
              <strong>Subtipos:</strong> {card.subtypes?.join(', ') || 'N/A'}
            </p>
            {/* HP e tipos */}
            <p>
              <strong>HP:</strong> {card.hp || 'N/A'} <br />
              <strong>Tipos:</strong> {card.types?.join(', ') || 'N/A'}
            </p>
            {/* Evoluções */}
            {card.evolvesTo && (
              <p>
                <strong>Evolui para:</strong> {card.evolvesTo.join(', ')}
              </p>
            )}
            {/* Regras especiais */}
            {card.rules && (
              <div>
                <strong>Regras especiais:</strong>
                <ul>
                  {card.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Lista de ataques */}
            {card.attacks && (
              <div>
                <strong>Ataques:</strong>
                <ul>
                  {card.attacks.map((atk, idx) => (
                    <li key={idx}>
                      <b>{atk.name}</b> (Custo: {atk.cost?.join(', ') || 'N/A'}, Dano: {atk.damage || 'N/A'})<br />
                      <span>{atk.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Fraquezas */}
            {card.weaknesses && (
              <div>
                <strong>Fraquezas:</strong>
                <ul>
                  {card.weaknesses.map((w, idx) => (
                    <li key={idx}>{w.type} ×{w.value}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Custo de recuo */}
            <p>
              <strong>Custo de Recuo:</strong> {card.retreatCost?.join(', ') || 'N/A'}
            </p>
            {/* Informações do conjunto */}
            <p>
              <strong>Conjunto:</strong> {card.set?.name} ({card.set?.releaseDate})<br />
              <strong>Número:</strong> {card.number} <br />
              <strong>Raridade:</strong> {card.rarity || 'N/A'} <br />
              <strong>Artista:</strong> {card.artist || 'N/A'}
            </p>
            {/* Preço médio de mercado */}
            <p>
              <strong>Preço médio (holofoil):</strong>{' '}
              {card.tcgplayer?.prices?.holofoil?.market
                ? `US$ ${card.tcgplayer.prices.holofoil.market.toFixed(2)}`
                : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;