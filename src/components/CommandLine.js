import React, {useState, useRef} from "react";
const CommandLine = () => {
  const [text, setText] = useState('');
  const commandLine = useRef();
  return(
    <>
      <section id="command-line" ref={commandLine}>
        <textarea></textarea>
      </section>
    </>
  )
}

export default CommandLine;