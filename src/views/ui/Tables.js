import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import {
  Button,
  ButtonGroup,
} from "reactstrap";
import Grid from "./Grid";

import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import AuthUser from "../components/AuthUser";
const Tables = () => {
  const {getToken} = AuthUser();
  if(!getToken()){
    return (<main>
      {/********header**********/}
      <Row>
         
         {/* --------------------------------------------------------------------------------*/}
         {/* table-1*/}
         {/* --------------------------------------------------------------------------------*/}
         <Col lg="12">
           <ProjectTables />
         </Col>
         {/* --------------------------------------------------------------------------------*/}
         {/* table-2*/}
         {/* --------------------------------------------------------------------------------*/}
         
         
       </Row>
        
    </main>)
  }
   
    
  return (
    <Row>
         <Button className="btn" color="secondary"> 
      <Link
                to='../Grid'
              
              >
                <span className="ms-3 d-inline-block">Postules</span>
              </Link>
              
      </Button>
         {/* --------------------------------------------------------------------------------*/}
         {/* table-1*/}
         {/* --------------------------------------------------------------------------------*/}
         <Col lg="12">
           <ProjectTables />
         </Col>
         {/* --------------------------------------------------------------------------------*/}
         {/* table-2*/}
         {/* --------------------------------------------------------------------------------*/}
         
         
       </Row>
    
        )
  ;
};

export default Tables;
