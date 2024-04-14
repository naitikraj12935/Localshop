import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faXmark, faMicrophone ,faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.jpg';
import LinkComponent from './LinkComponent';
import RecentSearch from './RecentSearch';
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../Context/Contextapi';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Chat from '../../assets/Chat.png'

export default function Header() {
  const [togglebtn, settogglebtn] = useState(false);
  const [inputdata, setinputdata] = useState('');
  const { Products } = useContext(Usercontext);
  const [Filterdata, setFilterData] = useState('');
  const [flag,setflag]=useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const nevigate = useNavigate();

  useEffect(() => {
    setinputdata(transcript);
  }, [transcript]);

  const controlfun = (item) => {
    setinputdata(item);
  };

  const handleSpeechRecognitionClick = () => {
    startListening();
  };

  const handleClick = () => {
    if (inputdata === '') {
      nevigate('/search/shirt');
    } else {
      nevigate(`/search/${inputdata}`);
    }

    setinputdata('');
    
  };

  useEffect(() => {
    const filterProducts = () => {
      const filteredData = Products.filter((product) => {
        return product.toLowerCase().includes(inputdata.toLowerCase());
      });

      setFilterData(filteredData);
    };

    filterProducts();
  }, [inputdata]);

  const handleChange=(e)=>{
    setinputdata(e.target.value);
    setflag(true)
  
  }
  const handlesppech=()=>{
    SpeechRecognition.startListening();
    setflag(false);
  }
  return (
    <>
    
{/* -----------------------------------------------------------------------------------------------------------------------------
 */}
      <div className='flex flex-wrap justify-between items-center p-2 bg-red-200 '>
      
        <div className='flex flex-wrap justify-evenly items-center mx-2 w-18 lg:w-2/4'>
          <img src={logo} alt='logo' width={50} height={50} />
          <Link className='hidden lg:block lg:pl-4' to='/home'>
            Home
          </Link>
          <Link className='hidden lg:block lg:pl-4 ' to="/NewLaunch">
            NewLaunch
          </Link>
          <Link className='hidden lg:block lg:pl-4' to="/Sale">
            Sale
          </Link>
        </div>
        <div>
          {togglebtn ? (
            <FontAwesomeIcon
              className='pl-4'
              icon={faXmark}
              size='2xl'
              style={{ color: '#1753ba' }}
              onClick={() => settogglebtn(false)}
            />
          ) : (
            <FontAwesomeIcon
              className='pl-4'
              icon={faBars}
              size='xl'
              style={{ color: '#1753ba' }}
              onClick={() => settogglebtn(true)}
            />
          )}
          
        </div>
      </div>
      <div className='flex items-center justify-center mt-4 relative'>
        <input
          className='p-1 bg-slate-300 rounded-lg w-4/5 lg:p-2 lg:w-6/12 mr-2 outline-0 lg:mt-2'
          value={flag ? inputdata : transcript}
          type='text'
          placeholder='sneakers..'
          onChange={handleChange}
        />
       
        {/* <FontAwesomeIcon
              className='pl-4'
              icon={faXmark}
              size='xl'
              style={{ color: '#1753ba' }}
              onClick={() => settogglebtn(true)}
            /> */}
        {
          transcript ? (
            <FontAwesomeIcon
  icon={faMicrophoneSlash}
  style={{
    color: '#24385c',
    
  }}
  size='lg'
  className='absolute right-1/4 lg:right-3/4  lg:mt-2 lg:p-2 lg: rounded-md lg:hover:cursor-pointer hover:scale-90'
  onClick={handlesppech}
  aria-label='Start Speech Recognition'
  role='button'
/>

          ):(
            <FontAwesomeIcon
  icon={faMicrophone}
  style={{
    color: '#24385c',
    
  }}
  size='lg'
  className='absolute  right-1/4 lg:right-3/4  lg:mt-2 lg:p-2 lg: rounded-md lg:hover:cursor-pointer hover:scale-90'
  onClick={handlesppech}
  aria-label='Start Speech Recognition'
  role='button'
/>

          )
        }
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: '#24385c' }}
          size='lg'
          className='absolute left-3/4  lg:mt-2  lg:p-2 lg: rounded-md lg:hover:cursor-pointer hover:scale-90'
          onClick={handleClick}
        />
        
        {inputdata.length > 0 && Filterdata.length > 0 ? (
          <RecentSearch obj={Filterdata} func={controlfun} />
        ) : (
          <></>
        )}
      </div>
      {togglebtn ? (
        <div className='flex justify-end absolute z-50'>
          <LinkComponent />
        </div>
      ) : (
        <div></div>
      )}
      <Link to="/Chat-support">
      <img src={Chat} alt="" height={75} width={75} className="fixed bottom-10  right-2 lg:right-10 mr-10 z-40"/>
      </Link>
    </>
  );
}
