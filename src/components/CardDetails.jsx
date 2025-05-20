import React from 'react';

const CardDetails = ({ card }) => {
  if (!card) return null;
  const preco = card.tcgplayer?.prices?.holofoil?.market?.toFixed(2) || 'Indisponível';
  const ataques = card.attacks?.map(atk => (
    <li key={atk.name}><strong>{atk.name}</strong> ({atk.damage}) - {atk.text}</li>
  )) || 'Nenhum';
  const fraquezas = card.weaknesses?.map(w => `${w.type} x${w.value}`).join(', ') || 'Nenhuma';

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 text-center">
          <img src={card.images.large} className="img-fluid rounded-start" alt={card.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <p><strong>HP:</strong> {card.hp || 'N/A'}</p>
            <p><strong>Tipos:</strong> {card.types?.join(', ') || 'N/A'}</p>
            <p><strong>Evolui para:</strong> {card.evolvesTo?.join(', ') || 'N/A'}</p>
            <p><strong>Regras:</strong> {card.rules?.join(', ') || 'Nenhuma'}</p>
            <h6>Ataques:</h6>
            <ul>{ataques}</ul>
            <p><strong>Fraquezas:</strong> {fraquezas}</p>
            <p><strong>Recuo:</strong> {card.convertedRetreatCost || 'Nenhum'}</p>
            <p><strong>Conjunto:</strong> {card.set.name} ({card.set.releaseDate})</p>
            <p><strong>Número:</strong> {card.number}, <strong>Raridade:</strong> {card.rarity}, <strong>Artista:</strong> {card.artist}</p>
            <p><strong>Preço Médio:</strong> US$ {preco}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
