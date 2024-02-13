import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiKey = 'fa661e584625d9efebfe5e9fd5e1f25d'; 

  const [inputcity,setInputcity]=useState("");

  const handleSearch = () => {
    //alert("hi");
    getDetails(inputcity)
  }

  const handleChange =(e)=>{
    setInputcity(e.target.value)
  }
  
  const[data,setData]=useState({})
  useEffect(() => {
    getDetails('pune');
  }, []);

  const getDetails = async (city) => {
    try {
      if(!city) return;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'fa661e584625d9efebfe5e9fd5e1f25d'}&units=metric`);
      const jsonData = await response.json()
      console.log(jsonData);
      setData(jsonData) 
    } catch (error) {
      console.error('Error fetching weather details:', error);
    }

  
  };
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h4 className='head'></h4>  
      <div className='content'>
        <input type='text' className='form-control' placeholder="Enter City " onChange={handleChange}/>
        
        <button className='btn btn-primary' type='button' onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className='col-md-12 text-center mt-5'>
        <div className='shadow rounded weatherResultBox'>

          <img className='weatherIcon' src='https://cdn-icons-png.flaticon.com/128/1163/1163657.png'/>

          <h5 className='weatherCity'>{data?.name}</h5>
          <h6 className='weatherTemp' >{data?.main?.temp}&deg;C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
