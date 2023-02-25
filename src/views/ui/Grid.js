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
import axios from 'axios';
import {useEffect, useState } from "react";
import AuthUser from "../components/AuthUser";
const Grid = () => {
  const [id, setId] = useState('');
  const [entreprise, setEntreprise] = useState("");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [postepostules, setUsers] = useState([]);
  
 
useEffect(() => {
  (async () => await Load())();
  }, []);
 
  async function  Load()
  {
     const result = await axios.get(
         "http://127.0.0.1:8000/api/postulepostes");
         setUsers(result.data);
         console.log(result.data);
  }
    
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:8000/api/postulepostes",
        {
        
          entreprise: entreprise,
          titre: titre,
          description: description
      
        
        });
          alert("Poste Registation Successfully");
          setId("");
          setEntreprise("");
          setTitre("");
          setDescription("");
         
          Load();
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
   async function editEmployee(postepostules)
   {
    setEntreprise(postepostules.Entreprise);
    setTitre(postepostules.titre);
    setDescription(postepostules.description);
    
    
   }
 
 
 
   async function DeleteEmployee(id)
   {
      
        await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
        alert("Poste deleted Successfully");
        Load();
  
   }
 
 
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        
        await axios.put("http://127.0.0.1:8000/api/update/"+ postepostules.find(u => u.id === id).id || id,
       {
         id: id,
         entreprise: entreprise,
         titre: titre,
         description: description
      
       });
         alert("Registation Updateddddd");
         setId("");
         setTitre("");
         setDescription("");
            Load();
      
       }
   catch(err)
       {
         alert("User Registation Failed");
       }
  }
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
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          
          <CardBody>
            <Form>
            <FormGroup>
                <Input
                  id="exampleEntreprise"
                  name="entreprise"
                  placeholder="Entreprise"
                  type="email"
                  value={userdetail.name}
                  
                onChange={(event) =>
                  {
                    setEntreprise(event.target.value);      
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Titre du poste"
                  type="email"
                  value={titre}
                onChange={(event) =>
                  {
                    setTitre(event.target.value);      
                  }}
                />
              </FormGroup>
             
            
              
              <FormGroup>
                <Input id="exampleText" placeholder="Description" name="text" type="textarea"
                value={description}
                onChange={(event) =>
                  {
                    setDescription(event.target.value);      
                  }}/>
              </FormGroup>
            
              <Button onClick={save}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Grid;
