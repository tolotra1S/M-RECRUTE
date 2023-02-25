import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

import { Link, useLocation } from "react-router-dom";
import CV from "./CV.pdf";
const Blog = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle>Mail : {props.subtitle1}</CardSubtitle>
        <CardSubtitle>Github : {props.subtitle2}</CardSubtitle>
        <CardSubtitle>Poste : {props.subtitle3}</CardSubtitle>
        <CardSubtitle>Telephone : {props.subtitle5}</CardSubtitle>
        <CardSubtitle>Portfolio : {props.subtitle6}</CardSubtitle>
        <CardText className="mt-3">{props.text}</CardText>
        <Button color={props.color}> 
        <Link
                to='../interesse'
              
              ><a href="mailto:name1@mail.com,name2@mail.com">interessé</a>
              </Link>
              </Button> 

              <Button color={props.color}> 
        <a href={CV}>CV</a>
              
              </Button> 
              
        
        
      </CardBody>
    </Card>
  );
};

export default Blog;
