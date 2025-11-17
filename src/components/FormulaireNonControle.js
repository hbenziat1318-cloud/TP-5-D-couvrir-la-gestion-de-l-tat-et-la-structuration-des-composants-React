import { useRef } from 'react';
import '../styles/App.css';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value;
    const email = emailRef.current.value;
    alert(`Nom : ${nom}, Email : ${email}`);
    nomRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nom-non-controle">Nom</label>
          <input
            id="nom-non-controle"
            type="text"
            ref={nomRef}
            placeholder="Votre nom"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email-non-controle">Email</label>
          <input
            id="email-non-controle"
            type="email"
            ref={emailRef}
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

export default FormulaireNonControle;
