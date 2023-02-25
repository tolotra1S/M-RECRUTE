import { Outlet } from "react-router-dom";
import AuthUser from '../views/components/AuthUser';
import Sidebar from "./Sidebar";
import Sidebarguest from "./Sidebarguest";
import Header from "./Header";
import Headerguest from "./Headerguest";
import { Container } from "reactstrap";

const FullLayout = () => {
  const {getToken} = AuthUser();
  if(!getToken()){
    return (<main>
      {/********header**********/}
      <Headerguest />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
        <Sidebarguest />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>)
  }
  return (
    <main>
    {/********header**********/}
    <Header />
    <div className="pageWrapper d-lg-flex">
      {/********Sidebar**********/}
      <aside className="sidebarArea shadow" id="sidebarArea">
      <Sidebar />
      </aside>
      {/********Content Area**********/}
      <div className="contentArea">
        {/********Middle Content**********/}
        <Container className="p-4" fluid>
          <Outlet />
        </Container>
      </div>
    </div>
  </main>)
  ;
}
 
export default FullLayout;
