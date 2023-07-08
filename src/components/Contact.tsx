import React, {useState} from "react";
//import { useLocation } from "react-router-dom";

const Contact = ()=>{
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: '',
    "form-name": "contact"
  })

  const [success, setSuccess] = useState(false)


  const handleData = e =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSuccess(true))
      .catch((error) => alert(error));
  }
  return(

    <div className="container" id="contacts">
      <form name="contact" method="post" action="/contact"   data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <div>
            <label htmlFor="namet">Name: </label>
            <input type="text" name="name" onChange={handleData} value={formData.name} className="form-control"/>
          </div>
          <div>
            <label htmlFor="mail">Mail: </label>
            <input type="mail" name="mail" onChange={handleData} value={formData.mail} className="form-control"/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" onChange={handleData} value={formData.message} className="form-control"></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </div>
        {success ? (
        <div className="success-message">Thank you for contacting me. I will read your mail and contact you asap ;)</div>
          ) 
          : 
          ("")}
      </form>
    </div>
  )
}

export default Contact;