import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import axios from 'axios';
import {useEffect, useState } from "react";
import AuthUser from "../../views/components/AuthUser";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
const ProjectTables = () => {
  
const [id, setId] = useState('');
const [titre, setTitre] = useState("");
const [entreprise, setEntreprise] = useState("");
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
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Listes des postes disponibles</CardTitle>
          
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            
          <thead>
    <tr>
      <th scope="col">Entreprise</th>
      <th scope="col">Titre</th>
      <th scope="col">Description</th>
   
      
      <th scope="col">Date</th>
    </tr>
  </thead>
  {postepostules.map(function fn(poste)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{poste.entreprise}</th>
                <td>{poste.titre}</td>
                <td>{poste.description}</td>
                <td> 24-02-2023</td>
               
                </tr>
            </tbody>
            );
            })}
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
