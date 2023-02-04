import React, {useState, useEffect} from 'react';
import '../assets/css/style.css'


const Intro = () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [count, setCount] = useState(0);
  const [welcomeText, setWelcomeText] = useState('');
  useEffect(()=>{
    write().then(()=>{
        document.addEventListener('keypress',function(e){
            if (e.key === 'Enter') {
                console.log('Hai premuto enter')
                document.getElementById('welcome-container').classList.add('scale-out-horizontal')
              }
        })
    });
  })


  const write = async () => {
    var lines = [
        "Welcome to Ghostylab",
        "This is the place where i put my works,",
        "experiments,",
        "and stuffs",
        "[Press Enter to continue]"
    ];
    for(let i = 0; i<lines.length; i++){
        await writeEs8(lines[i])
    }  
  }

  const writeEs8 = async (text) => {
    try{
        var speed = 100;
        for(let i= 0; i<text.length; i++){
            let el = document.getElementById('welcomeText')
            let html = el.innerHTML;
            el.innerHTML = html+text.charAt(i);
            await delay(speed)
        }
        var html = document.getElementById('welcomeText').innerHTML;
        
        document.getElementById('welcomeText').innerHTML = html+'<br>';
    }catch(err){
        console.error(err)
    }
  }

  return(
    <div id="welcome-container">
      <div>
          <span id="welcomeText"></span>
          <span className="pointer"></span>
      </div>
  </div>
  );

}


/*class Intro extends React.Component {

  constructor(props) {
    super();
    this.delay = ms => new Promise(res => setTimeout(res, ms));
    const [count, setCount] = useState(0);
  }

  
  async componentDidMount() {
    console.log('lll')
    console.log(this.state.count);
    this.write().then(()=>{
        document.addEventListener('keypress',function(e){
            if (e.key === 'Enter') {
                console.log('Hai premuto enter')
                document.getElementById('welcome-container').classList.add('scale-out-horizontal')
              }
        })
    });
  }
  async write(){
      var lines = [
          "Welcome to Ghostylab",
          "This is the place where i put my works,",
          "experiments,",
          "and stuffs",
          "[Press Enter to continue]"
      ];
      for(let i = 0; i<lines.length; i++){
          await this.writeEs8(lines[i])
      }
      
  }
  

  async  writeEs8(text){
    try{
        var speed = 100;
        for(let i= 0; i<text.length; i++){
            let el = document.getElementById('welcomeText')
            let html = el.innerHTML;
            el.innerHTML = html+text.charAt(i);
            await this.delay(speed)
        }
        var html = document.getElementById('welcomeText').innerHTML;
        document.getElementById('welcomeText').innerHTML = html+'<br>';
    }catch(err){
        console.error(err)
    }
}

  render(){
    return(
      <div id="welcome-container">
        <div>
            <span id="welcomeText"></span>
            <span className="pointer"></span>
        </div>
    </div>
    );
  }
}*/

export default Intro;