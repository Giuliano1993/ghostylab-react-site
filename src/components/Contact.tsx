import React, {useState} from "react";

const Contact = ()=>{
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: ''
  })

  const handleData = e =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  return(

    <div className="container" id="contacts">
      <form name="contact" method="post">
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
      </form>
    </div>
  )
}

export default Contact;