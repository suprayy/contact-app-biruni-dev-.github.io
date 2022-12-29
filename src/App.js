import "./App.css";
import List from "./List";
import {useState} from "react";
import {uid} from "uid";

function App() {

  const [contacts, setContacts] = useState([
    {
      id: null,
      name: null,
      umur: null,
    }
  ]);

  const [isUpdate, setIsUpdate] = useState({id: null, status: false});

  const [formData, setFormData] = useState({
    name: "",
    umur: "",
  })

  const handleChange = (e) => {
    const data = {...formData};

    //data form dari atribut name dan value
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  const handleSubmit = (e) => {
    //Agar tidak reload
    e.preventDefault();
    
    //menambahkan contact
    let data = [...contacts];

    //jika form tidak memiliki value
    if (!formData.name && !formData.umur) {
      return false;
    }else if(!formData.name || !formData.umur){
      return false;
    }else{
      alert("berhasil");
    }

    if(isUpdate.status){
      data.forEach((contact)=> {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name;
          contact.umur = formData.umur;
        }
      });
    }else{
      data.push({id: uid(), name: formData.name, umur: formData.umur});
    }

    setIsUpdate({id: null, status: false});
    setContacts(data);
    setFormData({name: "", umur: "" })
  }

  const handleEdit = (id) => {
    //parameter id adalah nilai yang dikirimkan dari nama yang akan di edit
    alert(id);
    let data = [...contacts];
    let foundData = data.find((contact) => contact.id === id);
    setFormData({name: foundData.name, umur: foundData.umur});
    setIsUpdate({id: id, status:true});

  }

  const handleDelete = (id) => {
    let data = [...contacts];
    let filterData = data.filter(contact => contact.id !== id);
    setContacts(filterData);
    
  }


  return (
    <div className="App">
      <h1 className="px-3 py-3">My Contact List</h1>
      <form onSubmit={ handleSubmit } className="form px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} value={formData.name} />
        </div>
        <div className="form-group ">
          <label htmlFor="">Umur</label>
          <input type="text" className="form-control" name="umur" onChange={handleChange} value={formData.umur} />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </div>
      </form>

      <List handleDelete={handleDelete} handleEdit={handleEdit} data={contacts} />

    </div>
  );
}

export default App;
