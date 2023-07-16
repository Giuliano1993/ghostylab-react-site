import { useNavigate } from "react-router-dom";
import { ReactTerminal } from "react-terminal";
import { skills } from "./About.tsx";
import axios from "axios";
const CommandLine = () => {
  const navigate  = useNavigate();

  const skillsRows = []
  skills.forEach((el)=>{
    skillsRows.push(<div key={el}>{el}</div>);
  })

  const commands = {
    whoami: "jackharper",
    //cd: (directory) => `changed path to ${directory}`
    cd: (path) => path !== 'home' && path !== 'subscribe' ? navigate('/'+path) : ( path !== 'subscribe' ? navigate('/') : window.location.replace('https://194f384b.sibforms.com/serve/MUIFAIKyVXuwU_3zwEsAWhAEVpQKwfLDf9-O6Qyr0VyjfW1bYN9LpmHp7Jf9NLjIivYWIeOQylYqBqp69tnhbqTn_1bQbUbcYRa3kqjdlm8adgu6_-Iw5kMvLORgvELqQFX94PN7PS7-g_dJyvHbLegf6BOzDmzIPjwW6Z-FztPnBq8YuhpXmJGV-Qj2-RtQSVvAQw6fEIk7KtLP')),
    ls: ()=> <div>
      <p>home</p>
      <p>about</p>
      <p>projects</p>
      <p>contact</p>
      <p>subscribe</p>
    </div>,
    pokemon: async (pokemon)=>{
      const poke = await axios(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res)=>{
        console.log(res.data)
        const random_number = Math.floor(Math.random() * 150); //Bettween 0 and 19
        return res.data.results[random_number]
      })
      return <div>{poke.name}</div>
    },
    help: <div>
        <p><b>CD </b> prompt:  go to this page</p>
        <p><b>ls </b>: lists the available paths</p>
        <p><b>clear </b>: empty the terminal</p>
        <p><b>skills </b>: show a short list of my skills</p>
      </div>,
    skills: <div>
      <div>
        {skillsRows}
        {/* <div>
          +-------------------------+<br/>
          |          Hello          |<br/>
          +-------------------------+<br/>
          |                         |<br/>
          |                         |<br/>
          |                         |<br/>
          |                         |<br/>
          |                         |<br/>
          |                         |<br/>
          |                         |<br/>
          |                         |<br/>
          |                         |<br/>
          +-------------------------+
          </div> */}
      </div>
    </div>
  };
  return(
    <ReactTerminal className="scrollbar-hidden" id="terminal" commands={commands} showControlBar={false} theme={"matrix"} prompt={">"} welcomeMessage={<p>Type help to check the available commands<br/></p>}/>
  )
}

export default CommandLine;