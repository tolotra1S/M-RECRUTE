import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";


const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            A propos de Recruteo!
          </CardTitle>
          <CardBody className="p-4">
            
              <img
                  src="https://img.freepik.com/vecteurs-premium/concept-embauche-recrutement-illustration-vectorielle-agence-recrutement-entretien-embauche_199064-475.jpg?w=740"
                  alt="my"
                  width ="1000px"
                  height="700px"
                />
                <h5 className=" mb-4">
                    "Recruteo!" est une plateforme qui permettent aux entreprises et aux recruteurs de 
                    rechercher des elève alternant et de communiquer avec eux. 
                    Les candidats peuvent également utiliser ces plateformes pour chercher des offres d'emploi, 
                    soumettre leur candidature et interagir avec les recruteurs.
                </h5>
                <h5> Crée en 2023 par des jeunes elève en L2 </h5>
                <h5> Qui a pour but d'aidé leurs amis a trouver une alternace vu que leurs ecole est 
                  basé sur la formation en alternance. </h5>
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
    </Row>
  );
};

export default About;
