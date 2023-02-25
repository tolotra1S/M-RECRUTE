import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Row,
  Col,
} from "reactstrap";
import axios from 'axios';
import {useEffect, useState } from "react";
import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";
import bg5 from "../../assets/images/bg/bg4.jpg";
import bg6 from "../../assets/images/bg/bg4.jpg";
import bg7 from "../../assets/images/bg/bg4.jpg";
import bg8 from "../../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  {
    image: bg2,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  {
    image: bg3,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  {
    image: bg4,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  
  {
    image: bg5,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  
  {
    image: bg6,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  
  {
    image: bg7,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  {
    image: bg8,
    title: "Ranarison Tolotra",
    subtitle: "2 comments, 1 Like"
  },
  
];

const Cards = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [github, setGithub] = useState("");
  const [poste, setPoste] = useState("");
  const [telephone, setTelephone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [cv, setCv] = useState("");
  const [photo, setPhoto] = useState("");
  const [employees, setUsers] = useState([]); 
 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
  async function  Load()
  {
     const result = await axios.get(
         "http://127.0.0.1:8000/api/employees");
         setUsers(result.data);
         console.log(result.data);
  }
    
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:8000/api/save",
        {
        
          name: name,
          prenom: prenom,
          mail: mail,
          github: github,
          poste: poste,
          telephone: telephone,
          portfolio: portfolio,
          cv: cv,
          photo: photo
        
        });
          alert("Employee Registation Successfully");
          setId("");
          setName("");
          setPrenom("");
          setPoste("");
          setTelephone("");
          setPortfolio("");
          setCv("");
          setPhoto("");
          Load();
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
   async function editEmployee(employees)
   {
    setName(employees.name);
    setPrenom(employees.prenom);
    setMail(employees.mail);
    setGithub(employees.github);
    setPoste(employees.poste);
    setTelephone(employees.telephone);
    setPortfolio(employees.portfolio);
    setCv(employees.cv);
    setPhoto(employees.photo);
    setId(employees.id);
    
   }
 
 
 
   async function DeleteEmployee(id)
   {
      
        await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
        alert("Employee deleted Successfully");
        Load();
  
   }
 
 
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        
        await axios.put("http://127.0.0.1:8000/api/update/"+ employees.find(u => u.id === id).id || id,
       {
         id: id,
         name: name,
         prenom: prenom,
         mail: mail,
         github: github,
         poste: poste,
         telephone: telephone,
         portfolio: portfolio,
         cv: cv,
         photo: photo
      
       });
         alert("Registation Updateddddd");
         setId("");
         setName("");
         setPrenom("");
         setMail("");
         setGithub("");
         setPoste("");
         setTelephone("");
         setPortfolio("");
         setCv("");
         setPhoto("");
         Load();
      
       }
   catch(err)
       {
         alert("User Registation Failed");
       }
  }
 
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Liste Candidats</h5>
      <Row>
      {employees.map(function fn(employee)
       {
            return(<Col sm="2" lg="2" xl="3" >
            
            <Blog
            
               image={employee.photo} 
              title={employee.name +' '+ employee.prenom}

              subtitle1={employee.mail}
              subtitle2={employee.github}
              subtitle3={employee.poste}
              subtitle4={employee.portfolio}
              subtitle5={employee.telephone}
              subtitle6={employee.portfolio}
            />
          </Col>
       );
      })}
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      
    </div>
  );
};

export default Cards;
