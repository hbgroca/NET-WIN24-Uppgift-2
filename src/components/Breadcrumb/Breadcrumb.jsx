import { Link, NavLink, useLocation } from "react-router-dom";
import './Breadcrumb.css';

export default function Breadcrumb() {

  const location = useLocation();
  const pathName = location.pathname.split('/').filter((x) => x);

  return (
    <div className="page-title">
      <div>
        <ul>
          <li><Link to='/'><img src="./images/svg/Breadcrumb/house-icon.svg"></img>Homepage</Link></li>
          {
            pathName.map((value, index) => {
              const to = `/${pathName.slice(0, index + 1).join('/')}`;
  
              return (
                <li key={to}>
                  { index === pathName.length - 1 
                  ? (<span><img src="./images/svg/Breadcrumb/arrow-icon.svg"/>{value.replace(/-/g, ' ')}</span>)
                  : (<Link to={to}><img src="./images/svg/Breadcrumb/arrow-icon.svg"/>{value.replace(/-/g, ' ')}</Link>)}
                </li>
              )
            })
          }
          
        </ul>
      </div>
    </div>
  );
};