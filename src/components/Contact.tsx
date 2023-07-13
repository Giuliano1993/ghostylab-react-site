import React, {useState} from "react";
//import { useLocation } from "react-router-dom";

const Contact = ()=>{
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: '',
    "form-name": "contact"
  })
  const [errors, setErrors] = useState({
    name: false,
    mail: false,
    message: false
  })

  const [errorMessage, setErrorMessage] = useState<string|null>(null); 

  const [success, setSuccess] = useState(false)


  const handleData = e =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const resetFormData = ()=>{
    setFormData({
      name: '',
      mail: '',
      message: '',
      "form-name": "contact"
    })
  }
  const resetErrors = ()=>{
    setErrors({
      name: false,
      mail: false,
      message: false
    })
    setErrorMessage(null);
  }
  const validateForm = ()=>{
    setSuccess(false)
    resetErrors()
    let formIsValid = true;
    if(formData.name.trim() === ''){
      formIsValid = false;
      setErrors({
        ...errors,
        name: true
      })
      console.log('serve un nome');
      setErrorMessage("Name field cannot be empty")
    }

    if(formData.mail.trim() === ''){
      formIsValid = false;
      setErrors({
        ...errors,
        mail: true
      })
      console.log('serve una mail');
      setErrorMessage("Mail field cannot be empty")
    }

    let pattern = new RegExp(/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(!pattern.test(formData.mail.trim())){
      formIsValid = false;
      setErrors({
        ...errors,
        mail:true
      })
      console.log('serve una mail valida');
      setErrorMessage("Need a valid email")
    }



    if(formData.message.trim() === ''){
      formIsValid = false;
      setErrors({
        ...errors,
        message : true
      })
      setErrorMessage("Message field cannot be empty")
    }

    return formIsValid
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(!validateForm()) return;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSuccess(true)
        resetFormData()
      })
      .catch((error) => alert(error));
  }
  return(

    <div className="container" id="contacts">
      <form name="contact" method="post" action="/contact"   data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <div>
            <label htmlFor="namet">Name: </label>
            <input type="text" required name="name" onChange={handleData} value={formData.name} className={`form-control ${errors.name ? 'error' : ''}`}/>
          </div>
          <div>
            <label htmlFor="mail">Mail: </label>
            <input type="mail" required name="mail" onChange={handleData} value={formData.mail} className={`form-control ${errors.mail ? 'error' : ''}`}/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" required onChange={handleData} value={formData.message} className={`form-control ${errors.message ? 'error' : ''}`}></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </div>
        {success ? (<div className="success message">Thank you for contacting me. I will read your mail and contact you asap ;)</div> ) 
          : 
          ("")}
        {errorMessage ? (<div className="error message">{errorMessage}</div>) : ("")}
          
        
      </form>
    </div>
  )
}

export default Contact;