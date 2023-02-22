import { useNavigate } from "react-router-dom";
import { ReactTerminal } from "react-terminal";
const CommandLine = () => {
  const navigate  = useNavigate();
  const commands = {
    whoami: "jackharper",
    //cd: (directory) => `changed path to ${directory}`
    cd: (path) => path !== 'home' ? navigate('/'+path) : navigate('/'),
    ls: ()=> <div>
      <p>home</p>
      <p>about</p>
      <p>projects</p>
      <p>contact</p>
    </div>,
    
    help: <div>
        <p><b>CD </b> prompt:  go to this page</p>
        <p><b>ls </b>: lists the available paths</p>
        <p><b>clear </b>: empty the terminal</p>
      </div>
  };
  return(
    <ReactTerminal id="terminal" commands={commands} showControlBar={false} theme={"matrix"} prompt={">"} welcomeMessage={<p>Type help to check the available commands<br/></p>}/>
  )
}

export default CommandLine;