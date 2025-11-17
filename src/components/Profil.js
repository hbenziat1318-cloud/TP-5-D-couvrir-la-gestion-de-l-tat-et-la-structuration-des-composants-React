import { useContext, useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import '../styles/App.css';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);
  const [nom, setNom] = useState('');

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  const connexion = () => {
    if (nom.trim()) {
      setUtilisateur({ nom: nom.trim(), connecte: true });
      setNom('');
    }
  };

  return (
    <div className="profil-container">
      {utilisateur.connecte ? (
        <div className="profil-connecte">
          <div className="welcome-message">
            <h3>👋 Bienvenue, {utilisateur.nom} !</h3>
            <p>Vous êtes maintenant connecté à votre compte.</p>
          </div>
          <button onClick={deconnexion} className="btn-secondary">
            Se déconnecter
          </button>
        </div>
      ) : (
        <div className="profil-deconnecte">
          <h3>🔒 Connexion</h3>
          <p>Veuillez vous connecter pour accéder à votre profil.</p>
          <div className="login-form">
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Votre nom"
              className="input-field"
            />
            <button onClick={connexion} className="btn-primary">
              Se connecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profil;
