import ('./AppFeatures2.css');

export default function Features2() {

  return (<>
    <div className="container features">
            <div className="features-container">
                <h2>Transfer your money quickly and easily</h2>
                <div>
                    <div className="flex gap-4">
                        <img src="./images/svg/features/bx-check-circle.svg" alt=""/>
                        <p>Free transfers</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="./images/svg/features/bx-check-circle.svg" alt=""/>
                        <p>No hidden monthly costs or fees</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="./images/svg/features/bx-check-circle.svg" alt=""/>
                        <p>Manage payments and transfers online</p>
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
                <h2>Receive payments from all international banks</h2>
                <div className="flex flex-row-middle gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="features-icon"><img src="./images/svg/features/payments.svg" alt=""/></div>
                        <p>Manage your payments online. You can easily handle your payments and transfers directly in our app.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="features-icon"><img src="./images/svg/features/cashback.svg" alt=""/></div>
                        <p>With the help of our AI tools, you can save thousands every month. Make a calculation now.</p>
                    </div>
                </div>
                <button className="btn btn-md">Read more<img src="../images/svg/features/arrow-sm-righ.svg" alt="" /></button>
            </div>
         </div>
  </>);
};