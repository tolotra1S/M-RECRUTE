import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import Table from "./ui/Tables";


const Starter = () => {
  

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            M'Recrute
          </CardTitle>
          <CardBody className="p-4">

              <h1 className="mt-4" align="center"></h1>
              <img
                  src="https://img.freepik.com/premium-vector/recruting-director-selection-business-people_82574-6808.jpg?size=626&ext=jpg"
                  alt="my"
                  width ="800px"
                  height="400px"
                />
                
                <h5 className=" mb-4" align="center">
                    "Recruteo!" est une plateforme qui permettent aux entreprises et aux recruteurs de 
                    rechercher des elève alternant et de communiquer avec eux. 
                    Les candidats peuvent également utiliser ces plateformes pour chercher des offres d'emploi, 
                    soumettre leur candidature et interagir avec les recruteurs.
                </h5>
                {/* <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button> */}
              
          </CardBody>
        </Card>
      </Col>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Postes
          </CardTitle>
          <CardBody className="p-4">
                <Table />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Starter;
