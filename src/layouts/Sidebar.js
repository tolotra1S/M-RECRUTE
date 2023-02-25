import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";
import { useEffect, useState } from 'react';
import AuthUser from "../views/components/AuthUser";

const navigation = [
  {
    title: "Home",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Candidats",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "A propos",
    href: "/about",
    icon: "bi bi-people",
  },
  
 
  {
    title: "Poste",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  
  {
    title: "Report",
    href: "/alerts",
    icon: "bi bi-bell",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();
  const {http} = AuthUser();
  const [userdetail,setUserdetail] = useState('');

  useEffect(()=>{
      fetchUserDetail();
  },[]);

  const fetchUserDetail = () =>{
      http.post('/me').then((res)=>{
          setUserdetail(res.data);
      });
  }

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        {/* <div className="p-3 d-flex">
          <img src={user1} alt="user" width="50" className="rounded-circle" />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div> */}
        <div className="bg-dark text-white p-2 opacity-75"> {userdetail.name}</div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
         
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
