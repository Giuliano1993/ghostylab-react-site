import React, {useState} from "react";
import ItFlag from "../../assets/pics/IT_flag.png";
import EnFlag from "../../assets/pics/EN_flag.png";
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
            <div className="flags">
              <p>Pick the language for the newsletters you'll receive: </p>
              <input type="radio" name="lang" id="itNewsletter" value="IT"/>
              <label htmlFor="itNewsletter">
                <img src={ItFlag} width="30px" alt="Italian Flag"/>
              </label>
              
              <input type="radio" name="lang" id="enNewsletter" value="EN" checked/>
              <label htmlFor="enNewsletter">
                <img src={EnFlag} width="30px" alt="UK Flag"/>
              </label>
            </div>
            <div>
                <button type="submit">Subscribe</button>
            </div>
            {success ? (
            <div className="success-message">Thank you for subscribing. You'll soon receive a welcome mail, then see you on monday ;)</div>
            ) 
            : 
            ("")}
    </form>
    )
}

export default SubscriptionForm;