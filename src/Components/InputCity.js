import React from 'react'
import '/Users/nikitamandlik/Desktop/github/WeatherApp/src/Components/styles.css'


function InputCity({onInputHandler,city,onSubmitHandler}){
   
    return(
        <div className='input'>
           
        <input
          placeholder='Enter City Name'
          type="text" 
          value={city}
          onChange = {onInputHandler}
        /><br></br><br></br>
        <button className='input-btn' 
                type = 'submit' 
                onClick={onSubmitHandler} >
                    Search City
                    </button>
      
        
        </div>
    )
}
export default InputCity;