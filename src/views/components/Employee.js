import axios from 'axios';
import {useEffect, useState } from "react";
 
function Employee()
{
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
   async function editEmployee(employees)
   {
    setName(employees.name);
    setPrenom(employees.prenom);
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
         cc: cv,
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
       <h1>CANDIDATURE</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
               <input  type="text" class="form-control" id="employee_id" hidden
               value={id}
               onChange={(event) =>
                {
                  setId(event.target.value);      
                }}
              
               />
                <label>Nom</label>
                <input  type="text" class="form-control" id="employeeName"
                value={name}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">

                <label>Prenom</label>
                <input  type="text" class="form-control" id="employeePrenom"
                 value={prenom}
                  onChange={(event) =>
                    {
                      setPrenom(event.target.value);      
                    }}
                />
              </div>
              <div class="form-group">

                <label>Mail</label>
                <input  type="text" class="form-control" id="employeeMail"
                 value={mail}
                  onChange={(event) =>
                    {
                      setMail(event.target.value);      
                    }}
                />
              </div>
              <div class="form-group">

                <label>Github</label>
                <input  type="text" class="form-control" id="employeeGithub"
                 value={github}
                  onChange={(event) =>
                    {
                      setGithub(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">

                <label>Poste recherché</label>
                <input  type="text" class="form-control" id="employeePoste"
                 value={poste}
                  onChange={(event) =>
                    {
                      setPoste(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">

                <label>Telephone</label>
                <input  type="text" class="form-control" id="employeeTelephone"
                 value={telephone}
                  onChange={(event) =>
                    {
                      setTelephone(event.target.value);      
                    }}
                />
              </div>
 
              <div class="form-group">
                
                <label>Lien Portfolio</label>
                <input type="text" class="form-control" id="employeePortfolio"
                  value={portfolio}
                onChange={(event) =>
                  {
                    setPortfolio(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                
                <label>CV</label>
                <input type="file" class="form-control" id="employeeCV"
                  value={cv}
                onChange={(event) =>
                  {
                    setCv(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                
                <label>Photo</label>
                <input type="file" class="form-control" id="employeePhoto"
                  value={photo}
                onChange={(event) =>
                  {
                    setPhoto(event.target.value);      
                  }}
                />
              </div>
 
                 <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Envoyer</button>
              
              </div>  
            </form>
          </div>
       </div>
            );
        }
export default Employee;