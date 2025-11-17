import { useState } from 'react';
import { UtilisateurContext } from './components/UtilisateurContext';
import FormulaireControle from './components/FormulaireControle';
import FormulaireNonControle from './components/FormulaireNonControle';
import TemperatureConvertor from './components/TemperatureConvertor';
import Profil from './components/Profil';
import './styles/App.css';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="app">
        <div className="container">
          <div className="header">
            <h1>🌐 TP React Débutant</h1>
            <p>Découvrez la gestion d'état et la structuration des composants React</p>
          </div>
          
          <div className="main-content">
            <div className="grid-2">
              <div className="section">
                <h2>📝 Formulaire Contrôlé</h2>
                <FormulaireControle />
              </div>
              
              <div className="section">
                <h2>⚡ Formulaire Non-Contrôlé</h2>
                <FormulaireNonControle />
              </div>
            </div>
            
            <div className="section">
              <h2>🌡️ Convertisseur de Température</h2>
              <TemperatureConvertor />
            </div>
            
            <div className="section">
              <h2>👤 Profil Utilisateur</h2>
              <Profil />
            </div>
          </div>
        </div>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;
