import ('../css/AppFeatures2.css');

export default function Features2() {

  return (<>
    <div className="container features">
            <div className="features-container">
                <h2>Överför dina pengar snabbt och smidigt</h2>
                <div>
                    <div className="flex gap-4">
                        <img src="./images/svg/features/bx-check-circle.svg" alt=""/>
                        <p>Kostnadsfria överföringar</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="./images/svg/features/bx-check-circle.svg" alt=""/>
                        <p>Inga dolda månadskostnader eller avgifter</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="./images/svg/features/bx-check-circle.svg" alt=""/>
                        <p>Hantera betalningar och överföringar online</p>
                    </div>
                </div>
                <button className="btn btn-md">Read more<img src="../images/svg/features/arrow-sm-righ.svg" alt="" /></button>
            </div>
            <div className="features-container">
                <img className="features-container-img" src="./images/svg/features/features-demo-top-right.svg" alt=""/>
            </div>
            <div className="features-container">
                <img className="features-container-img" src="./images/svg/features/features-demo-lower-left.svg" alt=""/>
            </div>
            <div className="features-container">
                <h2>Ta emot betalningar från alla internationella banker</h2>
                <div className="flex flex-row-middle gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="features-icon"><img src="./images/svg/features/payments.svg" alt=""/></div>
                        <p>Hantera dina betalningar online. Du sköter lätt dina betalningar och överföringar direkt i våran app.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="features-icon"><img src="./images/svg/features/cashback.svg" alt=""/></div>
                        <p>Med hjälp av våra AI verktyg så kan du spara tusenlappar varje månad. Gör en beräkning redan nu.</p>
                    </div>
                </div>
                <button className="btn btn-md">Read more<img src="../images/svg/features/arrow-sm-righ.svg" alt="" /></button>
            </div>
         </div>
  </>);
};