import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {motion} from 'framer-motion'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  const [userInputHistory, setUserInputHistory] = useState([])
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [onBoarded, setOnBoarded] = useState(false)
  const [apiOutputHistory, setApiOutputHistory] = useState([])

  const callGenerateEndpoint = async () => {
    setUserInputHistory([...userInputHistory, userInput])
    setUserInput('')
    setIsGenerating(true);
  
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setApiOutputHistory([...apiOutputHistory, output.text])
    setIsGenerating(false);
  }
  const onUserChangedText = (event) => {
    //console.log(event.target.value);
    setUserInput(event.target.value);
  };
  
  const handleOnBoarding = () => {
    setOnBoarded(!onBoarded)
  }
  return (
    <div className="root">
      <div className='container mx-auto grid grid-cols-1 max-h-screen min-h-screen lg:grid-cols-2'>
        
        <div className={`md:p-5 ${onBoarded ? 'hidden md:block' : 'block'}`}>
        
          
          {/* <h1 className='text-5xl my-5'>Meet Ava!</h1> */}
          
          <div className='relative flex justify-center items-center -mt-48 md:m-auto'>
            <svg className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                
                opacity={1}
                animate={{d:["M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z",
                "M35.1,-60.6C41.8,-50.3,40.9,-34.3,47.5,-21.3C54,-8.3,67.9,1.7,67,9.8C66.2,18,50.6,24.2,40.2,33C29.7,41.8,24.4,53.2,15.8,57.3C7.3,61.3,-4.4,58,-18.6,56.8C-32.9,55.7,-49.7,56.7,-56.2,48.9C-62.6,41.1,-58.7,24.5,-56.3,10.9C-53.9,-2.7,-52.9,-13.2,-48.2,-21.3C-43.4,-29.4,-34.7,-35,-26.1,-44.4C-17.4,-53.7,-8.7,-66.8,2.7,-71.1C14.2,-75.3,28.4,-70.8,35.1,-60.6Z",
                "M44.6,-65.1C54.4,-63.2,56.4,-44.9,56.8,-30C57.3,-15.2,56.1,-3.6,53.2,6.8C50.4,17.1,45.7,26.4,38.5,31.7C31.3,37.1,21.5,38.6,11.4,43.7C1.3,48.9,-9.1,57.8,-19.7,58.6C-30.2,59.3,-40.9,52,-45.8,42.1C-50.7,32.1,-49.9,19.6,-49.1,8.5C-48.4,-2.5,-47.9,-12,-43.8,-19.7C-39.8,-27.3,-32.3,-32.9,-24.4,-35.7C-16.5,-38.5,-8.3,-38.4,4.6,-45.5C17.4,-52.6,34.9,-67,44.6,-65.1Z"]}}
                transition={{
                  ease:'easeOut', 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse'}}
              fill="#FF5959" d="M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z" transform="translate(100 100)" />
            </svg>
            
            
            <svg className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                opacity={0.7}
                animate={{
                  d:[
                    "M27.9,-49C35.4,-38.7,40,-29.5,48,-19.7C56,-9.8,67.3,0.7,66.5,9.9C65.7,19.1,52.9,26.9,44.4,40.7C35.9,54.4,31.7,74.2,21.4,80.8C11.1,87.5,-5.4,81.1,-15.2,69.9C-24.9,58.7,-28,42.8,-37.7,32.3C-47.5,21.8,-64.1,16.7,-65.1,9.4C-66.1,2.1,-51.6,-7.4,-44.7,-19.5C-37.8,-31.7,-38.5,-46.4,-32.3,-57.3C-26.2,-68.2,-13.1,-75.4,-1.4,-73.2C10.2,-71,20.5,-59.4,27.9,-49Z",
                    "M32.9,-55.6C39.1,-47.2,38.2,-32.1,40.7,-20.4C43.1,-8.7,49,-0.4,50.8,9.3C52.5,19.1,50.2,30.3,45.6,44.3C40.9,58.2,33.9,74.8,24,74.4C14,74.1,1.2,56.7,-8.7,46.2C-18.5,35.6,-25.5,31.9,-36.5,27.2C-47.4,22.5,-62.3,16.8,-66.6,7.7C-70.9,-1.5,-64.6,-14,-56.5,-23.3C-48.4,-32.5,-38.4,-38.4,-28.7,-45.2C-19,-52,-9.5,-59.7,1.9,-62.7C13.3,-65.7,26.7,-64,32.9,-55.6Z",
                    "M43.9,-72.2C55,-61.3,60.6,-45.8,67,-30.9C73.3,-16,80.4,-1.7,76.9,9.9C73.4,21.5,59.4,30.4,49.3,43.6C39.2,56.8,33.1,74.3,23.2,75.6C13.3,76.9,-0.3,62.1,-15.5,56.1C-30.8,50.2,-47.7,53.1,-58.6,47.1C-69.5,41.2,-74.4,26.3,-72.2,13C-70,-0.3,-60.8,-11.9,-54.9,-25.1C-48.9,-38.2,-46.1,-52.9,-37.5,-64.9C-28.9,-76.9,-14.5,-86.4,1,-87.9C16.4,-89.5,32.9,-83.1,43.9,-72.2Z"
                  ]}}
                transition={{
                  ease:'easeOut', 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse'}}
              fill="#68DAFE" d="M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z" transform="translate(100 100)" />
            </svg>
            <svg className='absolute w-9/12' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <motion.path
              
                opacity={0.7} 
                animate={{
                  d:[
                    "M42.2,-64.2C48.9,-53.3,44.4,-33.1,50.9,-15.9C57.4,1.4,74.9,15.7,74,25.7C73,35.7,53.6,41.3,38.2,52.3C22.7,63.2,11.4,79.4,-2.7,83.1C-16.7,86.8,-33.4,77.9,-47.4,66.5C-61.4,55.1,-72.7,41.2,-72.9,26.9C-73.2,12.6,-62.4,-2.1,-56.8,-18.1C-51.1,-34.1,-50.5,-51.4,-41.9,-61.6C-33.2,-71.8,-16.6,-74.9,0.6,-75.7C17.8,-76.5,35.6,-75,42.2,-64.2Z",
                    "M43.7,-58.1C58.8,-49.2,74.7,-39.3,76,-26.7C77.2,-14.1,63.9,1.1,57.9,18.6C52,36.1,53.4,55.8,45,64.7C36.6,73.6,18.3,71.5,0.2,71.2C-17.8,70.9,-35.6,72.2,-44.3,63.5C-53,54.7,-52.6,35.8,-58.3,18.8C-64,1.8,-75.9,-13.4,-74.2,-25.9C-72.6,-38.4,-57.4,-48.2,-42.8,-57.3C-28.1,-66.4,-14.1,-74.8,0.1,-74.9C14.3,-75.1,28.6,-67.1,43.7,-58.1Z",
                    "M40.5,-48.7C55.6,-44.7,73.3,-37.1,74.6,-25.9C75.9,-14.7,60.8,0.1,53.4,15.6C46,31.2,46.2,47.5,38.5,61.2C30.9,75,15.5,86.1,-0.7,87.1C-16.9,88.1,-33.7,78.8,-46.8,66.9C-59.9,54.9,-69.2,40.2,-74,24.3C-78.9,8.4,-79.3,-8.8,-72.3,-21.4C-65.4,-34.1,-51,-42.3,-37.7,-46.8C-24.4,-51.4,-12.2,-52.4,0.2,-52.7C12.7,-53,25.3,-52.6,40.5,-48.7Z"
                  ]}}
                transition={{
                  ease:'easeOut', 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse'}}
              fill="#FCFF80" d="M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z" transform="translate(100 100)" />
            </svg>
            <img className='drop-shadow-xl absolute z-10 w-80' src='ava-vid.mov' ></img>
            <div className='min-h-screen'></div>

          </div>
          
        </div>
        <div className='p-10 px-20 py-20 text-center md:text-right max-h-screen md:order-last order-first'>
          {!onBoarded ? 
          <div>
            <h1 className='text-3xl md:text-6xl font-bold'>Meet <span className='md:inline block text-7xl md:text-9xl font-black'>AVA</span></h1>
            <h3 className='text-lg md:text-4xl mb-10 hidden md:block' >Your personal guide to all things tech</h3>
            <p className='text-xl mb-20 hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora </p>
            <a onClick={handleOnBoarding} className='rounded-lg text-center hidden md:block hover:bg-gray-500 bg-gray-900 py-5 px-20 text-white font-bold text-lg'>
              Talk to Ava
            </a>
          </div> :
          <div className='h-full bg-gray-300 rounded-xl flex flex-col p-3 justify-between '>
            <div className="h-full mb-5 max-h-full overflow-y-scroll">
              {userInputHistory.map((item, i)=> {
                return (
                  <div className='w-full flex flex-col items-end'>
                    <div className='bg-slate-100 mb-5 p-3 text-sm rounded-lg w-8/12'>
                      <h3 className="text-slate-400 text-xs">YOU</h3>
                      {item}
                    </div>
                    <div className='bg-sky-300 self-start text-left mb-5 p-3 text-sm rounded-lg w-8/12'>
                      <h3 className="text-slate-400 text-xs">AVA</h3>
                      {apiOutputHistory[i] ? apiOutputHistory[i] : <p className='italic text-sky-100'>... is thinking ...</p>}
                      
                    </div>
                   
                    
                  </div>
                )
              })}
              
            </div>
            <div className='flex flex-col'>
              <textarea onChange={onUserChangedText} value={userInput} placeholder='Ask Ava something...' className='p-3 rounded-lg border-black border-2' >

              </textarea>
              <a onClick={callGenerateEndpoint} className='rounded-lg text-center hover:bg-gray-500 bg-gray-900 py-3 mt-5 px-20 text-white font-bold text-lg'>
                {isGenerating ? 'Loading...' : 'Ask Ava'}
              </a>

            </div>
          </div>}
        </div>
        {!onBoarded && 
        <div className='md:hidden block text-center -mt-32'>
          <h3 className='text-lg md:text-4xl mb-10' >Your personal guide to all things tech</h3>    
          <a onClick={handleOnBoarding} className='rounded-lg hover:bg-gray-500 bg-gray-900 py-5 px-20 text-white font-bold text-lg'>
            Talk to Ava
          </a>
        </div> }

        
        


      </div>
      {/* <div className="container">
      
        <div className='bg-black min-h-fit'>
          <svg className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              animate={{d:["M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z",
              "M35.1,-60.6C41.8,-50.3,40.9,-34.3,47.5,-21.3C54,-8.3,67.9,1.7,67,9.8C66.2,18,50.6,24.2,40.2,33C29.7,41.8,24.4,53.2,15.8,57.3C7.3,61.3,-4.4,58,-18.6,56.8C-32.9,55.7,-49.7,56.7,-56.2,48.9C-62.6,41.1,-58.7,24.5,-56.3,10.9C-53.9,-2.7,-52.9,-13.2,-48.2,-21.3C-43.4,-29.4,-34.7,-35,-26.1,-44.4C-17.4,-53.7,-8.7,-66.8,2.7,-71.1C14.2,-75.3,28.4,-70.8,35.1,-60.6Z",
              "M44.6,-65.1C54.4,-63.2,56.4,-44.9,56.8,-30C57.3,-15.2,56.1,-3.6,53.2,6.8C50.4,17.1,45.7,26.4,38.5,31.7C31.3,37.1,21.5,38.6,11.4,43.7C1.3,48.9,-9.1,57.8,-19.7,58.6C-30.2,59.3,-40.9,52,-45.8,42.1C-50.7,32.1,-49.9,19.6,-49.1,8.5C-48.4,-2.5,-47.9,-12,-43.8,-19.7C-39.8,-27.3,-32.3,-32.9,-24.4,-35.7C-16.5,-38.5,-8.3,-38.4,4.6,-45.5C17.4,-52.6,34.9,-67,44.6,-65.1Z"]}}
              transition={{
                ease:'easeOut', 
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse'}}
            fill="#FF0066" d="M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z" transform="translate(100 100)" />
          </svg>
          
          <svg className='absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              animate={{
                d:[
                  "M27.9,-49C35.4,-38.7,40,-29.5,48,-19.7C56,-9.8,67.3,0.7,66.5,9.9C65.7,19.1,52.9,26.9,44.4,40.7C35.9,54.4,31.7,74.2,21.4,80.8C11.1,87.5,-5.4,81.1,-15.2,69.9C-24.9,58.7,-28,42.8,-37.7,32.3C-47.5,21.8,-64.1,16.7,-65.1,9.4C-66.1,2.1,-51.6,-7.4,-44.7,-19.5C-37.8,-31.7,-38.5,-46.4,-32.3,-57.3C-26.2,-68.2,-13.1,-75.4,-1.4,-73.2C10.2,-71,20.5,-59.4,27.9,-49Z",
                  "M32.9,-55.6C39.1,-47.2,38.2,-32.1,40.7,-20.4C43.1,-8.7,49,-0.4,50.8,9.3C52.5,19.1,50.2,30.3,45.6,44.3C40.9,58.2,33.9,74.8,24,74.4C14,74.1,1.2,56.7,-8.7,46.2C-18.5,35.6,-25.5,31.9,-36.5,27.2C-47.4,22.5,-62.3,16.8,-66.6,7.7C-70.9,-1.5,-64.6,-14,-56.5,-23.3C-48.4,-32.5,-38.4,-38.4,-28.7,-45.2C-19,-52,-9.5,-59.7,1.9,-62.7C13.3,-65.7,26.7,-64,32.9,-55.6Z",
                  "M43.9,-72.2C55,-61.3,60.6,-45.8,67,-30.9C73.3,-16,80.4,-1.7,76.9,9.9C73.4,21.5,59.4,30.4,49.3,43.6C39.2,56.8,33.1,74.3,23.2,75.6C13.3,76.9,-0.3,62.1,-15.5,56.1C-30.8,50.2,-47.7,53.1,-58.6,47.1C-69.5,41.2,-74.4,26.3,-72.2,13C-70,-0.3,-60.8,-11.9,-54.9,-25.1C-48.9,-38.2,-46.1,-52.9,-37.5,-64.9C-28.9,-76.9,-14.5,-86.4,1,-87.9C16.4,-89.5,32.9,-83.1,43.9,-72.2Z"
                ]}}
              transition={{
                ease:'easeOut', 
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse'}}
            fill="#22FF22" d="M26.6,-40.4C37.2,-34.6,50.5,-31.8,58.1,-23.9C65.7,-16.1,67.7,-3,63.9,7.8C60.2,18.6,50.7,27.2,43,38.9C35.4,50.7,29.5,65.6,19.7,69.7C9.8,73.9,-4,67.3,-18,62.6C-32,57.8,-46.1,55,-59.1,47.2C-72,39.4,-83.7,26.6,-84.6,12.9C-85.4,-0.8,-75.5,-15.4,-66.6,-28.6C-57.8,-41.9,-50,-53.9,-39.1,-59.6C-28.2,-65.3,-14.1,-64.8,-3.1,-60C8,-55.3,16,-46.3,26.6,-40.4Z" transform="translate(100 100)" />
          </svg>

        </div>

      
        <div className="header">
          <div className="header-title">
            <h1>Meet Ava!</h1>
          </div>
          
            
            <h2>Your personal guide to all things tech.</h2>
          
        </div>
        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="Ask anything!"
            value={userInput}
            onChange={onUserChangedText}
          />
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
          <div className="generate">
            {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
          </div>
            </a>
        </div>
        {apiOutput && (
        <div className="output">
          <div className="output-header-container">
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
      )}
      </div>
      </div> */}
    </div>
  );
};

export default Home;
