import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Forms = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Reporter
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Mail"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">titre</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="titre"
                  type="text"
                />
              </FormGroup>
             
             
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
