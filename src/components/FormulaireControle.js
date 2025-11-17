import { useState } from 'react';
import '../styles/App.css';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}, Email : ${email}`);
    setNom('');
    setEmail('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nom-controle">Nom</label>
          <input
            id="nom-controle"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email-controle">Email</label>
          <input
            id="email-controle"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            className="input-field"
          />
        </div>
        <button type="submit" className="btn-primary">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default FormulaireControle;
