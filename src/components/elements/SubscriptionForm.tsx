import React, {useState} from "react";
const SubscriptionForm = () => {
 
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        "form-name": "subscribe"
      })
    
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
          "form-name": "subscribe"
        })
      }
      const handleSubmit = (event)=>{
        event.preventDefault();
        
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
        <form name="subscribe" method="post" action="/subscribe" data-netlify="true" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="namet">Name: </label>
                <input type="text" name="name" onChange={handleData} value={formData.name} className="form-control"/>
            </div>
            <div>
                <label htmlFor="mail">Mail: </label>
                <input type="mail" name="mail" onChange={handleData} value={formData.mail} className="form-control"/>
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
            {success ? (
            <div className="success-message">Thank you for contacting me. I will read your mail and contact you asap ;)</div>
            ) 
            : 
            ("")}
    </form>
    )
}

export default SubscriptionForm;