import './AppFeatures.css';

export default function AppFeatures() { 

  // Our app features
  const features = [
    {header: 'Easy to pay', text: 'Pay quickly and easily with a few simple taps directly from the app.', image: './images/svg/features/payments.svg'},
    {header: 'High security', text: 'Get access to detailed statistics about your finances completely free of charge.', image: './images/svg/features/security.svg'},
    {header: 'Cost statistics', text: 'Enjoy regular insights and distributions that help you save more.', image: './images/svg/features/statistics.svg'},
    {header: 'Support 24/7', text: 'Your security is our priority. We use the latest technology to protect your data.', image: './images/svg/features/support.svg'},
    {header: 'Regular distributions', text: 'Our customer support is available 24/7 to help you with any questions.', image: './images/svg/features/cashback.svg'},
    {header: 'Top ratings', text: 'Our app has received top ratings from users thanks to its simplicity and reliability.', image: './images/svg/features/happy.svg'}
  ];

  return(<>
    <div id='features' className="appfeatures container">
      <div className="appfeatures-img"></div>
        <div className="appfeatures-wrapper">
          <div className="appfeatures-text">
            <h3>App Features</h3>
            <p>Our app gives you full control over your finances. You can easily keep track of all your bank accounts in one place. Smooth payments and transfers are made directly via the app, regardless of which bank you use. It is designed to make your financial management easier and more secure.</p>
          </div>
          <div className="appfeatures-container">

            {features.map((feature, index) => {
              return(
                <div key={index} className="appfeatures-egenskaper">
                  <div className="features-icon"><img src={feature.image} alt=""/></div>
                  <div>
                    <h5>{feature.header}</h5>
                    <p>{feature.text}</p>
                  </div>
                </div>
              );
            })}
            
        </div>
      </div>
    </div> 
  </>);
};