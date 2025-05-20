import React, { useEffect, useState } from 'react';

const SavedCardsBar = () => {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('savedCards')) || [];
    setSavedCards(cards);
  }, []);

  return (
    <div className="bg-light p-3 border-bottom">
      <h5>Cartas Salvas:</h5>
      {savedCards.length === 0 ? (
        <p>Nenhuma carta salva.</p>
      ) : (
        <div className="d-flex flex-wrap gap-2">
          {savedCards.map(card => (
            <img key={card.id} src={card.images.small} alt={card.name} height="80" />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCardsBar;
