import React, { useState } from 'react';
import CardDetails from './CardDetails';

const apiKey = import.meta.env.VITE_POKEMON_API_KEY;

const SearchCard = () => {
  const [code, setCode] = useState('');
  const [card, setCard] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.pokemontcg.io/v2/cards/${code.trim()}`, {
        headers: {
          'X-Api-Key': apiKey
        }
      });
      if (!response.ok) throw new Error('Carta não encontrada.');
      const data = await response.json();
      setCard(data.data);
      setError('');
    } catch (err) {
      setError('Carta não encontrada.');
      setCard(null);
    }
  };

  return (
    <div className="p-3">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Digite o código da carta (ex: base1-4)"
          value={code} onChange={(e) => setCode(e.target.value)} />
        <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {card && <CardDetails card={card} />}
    </div>
  );
};

export default SearchCard;
