import React, {useState} from "react"
import { useLocation } from "react-router-dom";

export const ConfirmSubscription = ()=>{


    const [success, setSuccess] = useState<string|null>();
    const search = useLocation().search;
    const successParam=new URLSearchParams(search).get("success");
    setSuccess(successParam)

    return(
        <div id="projects-container" className="container">
            <div>
                {success === null ? (

                    <p>I sent you a verification mail to your given address! To confirm your subscription click on the confirmation link you will find there</p>
                ) : (
                    <p>Thank you for subscribing. You'll soon receive a welcome mail, then see you on monday ;)</p>
                )}
          </div>  
        </div> 
    )
}