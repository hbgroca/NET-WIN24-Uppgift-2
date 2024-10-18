import '../css/AppFeatures.css';

export default function AppFeatures() { 

  return(<>
    <div className="appfeatures container">
      <div className="appfeatures-img"></div>
        <div className="appfeatures-wrapper">
          <div className="appfeatures-text">
              <h3>App Egenskaper</h3>
              <p>Vår app ger dig full kontroll över din ekonomi. Du kan enkelt hålla koll på alla dina bankkonton på ett och samma ställe. Smidiga betalningar och överföringar sker direkt via appen, oavsett vilken bank du använder. Den är skapad för att göra din ekonomihantering enklare och säkrare.</p>
          </div>
          <div className="appfeatures-container">
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/payments.svg" alt=""/></div>
                <div>
                    <h5>Lätt att betala</h5>
                    <p>Betala snabbt och smidigt med några enkla tryck direkt från appen.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/security.svg" alt=""/></div>
                <div>
                    <h5>Hög säkerhet</h5>
                    <p>Få tillgång till detaljerad statistik om din ekonomi helt utan kostnad.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/statistics.svg" alt=""/></div>
                <div>
                    <h5>Kostnads statistik</h5>
                    <p>Njut av regelbundna insikter och utdelningar som hjälper dig spara mer.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/support.svg" alt=""/></div>
                <div>
                    <h5>Support 24/7</h5>
                    <p>Din säkerhet är vår prioritet vi använder den senaste tekniken för att skydda dina uppgifter.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/cashback.svg" alt=""/></div>
                <div>
                    <h5>Regelbundna utdelningar</h5>
                    <p>Vår kundsupport är tillgänglig dygnet runt för att hjälpa dig med alla frågor.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/happy.svg" alt=""/></div>
                <div>
                    <h5>Högsta betyg</h5>
                    <p>Vår app har fått toppbetyg från användare tack vare sin enkelhet och pålitlighet.</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </>);
};