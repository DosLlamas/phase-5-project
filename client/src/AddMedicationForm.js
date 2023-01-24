import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMedicationForm = ({ setMedication, currentUser, setCurrentUser }) => {

  const initialState = {
    name: '',
    strength: '',
}
const [formData, setFormData] = useState(initialState);
const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((formData) => ({...formData, [name]: value}))
}
const handleSubmit = (e) => {
    e.preventDefault()
    const newMedication = {
        name,
        strength
    }
    fetch('/add_medication', {
        method: 'POST',
        headers: {"Content-type":"applications/json"},
        body: JSON.stringify(newMedication)
    }).then((r) =>{
        if(r.ok){
            r.json().then((medication)=>{
                setMedication(medication)
                setFormData(initialState)
            })
        } else {
            r.json().then((json) => setErrors(json.errors))
        }
    })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} placeholder="name" onChange={handleChange}/>
        <input name="strength" value={formData.strength} placeholder="strength" onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMedicationForm;
