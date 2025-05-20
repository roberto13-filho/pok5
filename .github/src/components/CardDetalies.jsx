import React, { useState, useEffect } from 'react';

const CardDetails = ({ card }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    setSaved(savedCards.some(saved => saved.id === card.id));
  }, [card]);

  const handleSave = () => {
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    if (!savedCards.find(c => c.id === card.id)) {
      localStorage.setItem('savedCards', JSON.stringify([...savedCards, card]));
      setSaved(true);
    }
  };

  return (
    <div className="card mb-3 p-3">
      <img src={card.images.large} className="card-img-top" alt={card.name} />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p><strong>HP:</strong> {card.hp}</p>
        <p><strong>Tipos:</strong> {card.types?.join(', ')}</p>
        <p><strong>Evolui para:</strong> {card.evolvesTo?.join(', ') || 'N/A'}</p>
        <p><strong>Regras Especiais:</strong> {card.rules?.join(', ') || 'Nenhuma'}</p>
        <h6>Ataques:</h6>
        <ul>
          {card.attacks?.map((atk, i) => (
            <li key={i}>
              <strong>{atk.name}</strong> ({atk.damage}) - {atk.text}
            </li>
          ))}
        </ul>
        <p><strong>Fraquezas:</strong> {card.weaknesses?.map(w => `${w.type} x${w.value}`).join(', ') || 'Nenhuma'}</p>
        <p><strong>Custo de Recuo:</strong> {card.convertedRetreatCost || 'Nenhum'}</p>
        <p><strong>Conjunto:</strong> {card.set.name} - {card.set.releaseDate}</p>
        <p><strong>Número:</strong> {card.number} / <strong>Raridade:</strong> {card.rarity} / <strong>Artista:</strong> {card.artist}</p>
        <p><strong>Preço Médio:</strong> ${card.tcgplayer?.prices?.holofoil?.market?.toFixed(2) || 'Indisponível'}</p>
        <button className="btn btn-success" onClick={handleSave} disabled={saved}>
          {saved ? 'Carta Salva' : 'Salvar Carta'}
        </button>
      </div>
    </div>
  );
};

export default CardDetails;