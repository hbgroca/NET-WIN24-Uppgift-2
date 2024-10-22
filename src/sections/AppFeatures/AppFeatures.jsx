import './AppFeatures.css';

export default function AppFeatures() { 

  return(<>
    <div id='features' className="appfeatures container">
      <div className="appfeatures-img"></div>
        <div className="appfeatures-wrapper">
          <div className="appfeatures-text">
            <h3>App Features</h3>
            <p>Our app gives you full control over your finances. You can easily keep track of all your bank accounts in one place. Smooth payments and transfers are made directly via the app, regardless of which bank you use. It is designed to make your financial management easier and more secure.</p>
          </div>
          <div className="appfeatures-container">
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/payments.svg" alt=""/></div>
                <div>
                  <h5>Easy to pay</h5>
                  <p>Pay quickly and easily with a few simple taps directly from the app.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/security.svg" alt=""/></div>
                <div>
                  <h5>High security</h5>
                  <p>Get access to detailed statistics about your finances completely free of charge.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/statistics.svg" alt=""/></div>
                <div>
                  <h5>Cost statistics</h5>
                  <p>Enjoy regular insights and distributions that help you save more.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/support.svg" alt=""/></div>
                <div>
                  <h5>Support 24/7</h5>
                  <p>Your security is our priority. We use the latest technology to protect your data.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/cashback.svg" alt=""/></div>
                <div>
                  <h5>Regular distributions</h5>
                  <p>Our customer support is available 24/7 to help you with any questions.</p>
                </div>
            </div>
            <div className="appfeatures-egenskaper">
                <div className="features-icon"><img src="./images/svg/features/happy.svg" alt=""/></div>
                <div>
                  <h5>Top ratings</h5>
                  <p>Our app has received top ratings from users thanks to its simplicity and reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </>);
};