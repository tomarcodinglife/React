import React, { useState } from 'react';
import './form.css'; // Assuming you have a CSS file for styling

function Form (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [languages, setLanguages] = useState([]);
    const [nation, setNation] = useState('india'); 

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);  
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleLanguageChange = (e) => {
        const { value, checked } = (e.target);
        setLanguages(prev => 
            checked ? [...prev, value] : prev.filter(lang => lang !== value)
        );
    };
    const handleNationChange = (e) => setNation(e.target.value);


    // Reset function to clear all fields
    const handleReset = () => {
        setName('');
        setEmail('');
        setPassword('');
        setGender('');
        setLanguages([]);
    }   


    return (
        <div className='form-container'>
           <div id='div01' className='inputOutput-section'>
                <form action="" method="POST">
                    <div id='name' className='input-section'>
                        <label htmlFor="name">Name:</label> 
                        <input type="text" id="name" name="name" onChange={handleNameChange} /> 
                    </div>

                    <div id='email' className='input-section'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleEmailChange} />
                    </div>

                    <div id='password' className='input-section'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" onChange={handlePasswordChange}/>
                    </div>

                    <div id='gender' className='input-section'>
                        <label htmlFor="gender">Gender:</label>
                            <div className='radio-group'>
                            <input type="radio" id="male" name="gender" value="Male" onChange={handleGenderChange} />
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" value="Female" onChange={handleGenderChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>

                    <div id='programmingLanguage' className='input-section'>
                        <label htmlFor="programmingLanguage">Language:</label>
                        <div className='checkbox-group'>
                            <input type="checkbox" name="js" id="js" value="js" onChange={handleLanguageChange}/>
                            <label htmlFor="js">JavaScript</label>
                            <input type="checkbox" name="python" id="python" value="python" onChange={handleLanguageChange}/>
                            <label htmlFor="python">Python</label>
                            <input type="checkbox" name="cpp" id="cpp" value="cpp" onChange={handleLanguageChange}/>
                            <label htmlFor="cpp">C++</label>
                            <input type="checkbox" name="java" id="java" value="java" onChange={handleLanguageChange}/>
                            <label htmlFor="java">Java</label>
                        </div>
                    </div>

                    <div id='nation' className='input-section'>
                        <label htmlFor="nation">Nation:</label>
                        <select name="nation" id="nation" onChange={handleNationChange} value={nation} defaultValue={'india'}>
                            <option value="select">Select</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="india">India</option>
                            <option value="canada">Canada</option>
                        </select>
                    </div>

                        <input type="submit" value="Submit" className='button' />
                        <input type="reset" value="Reset" onClick={handleReset} className='button'/>
                </form> 
           </div>
           <div>
                <div className='output-section'>
                    <h2>Output</h2>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Password:</strong> {password}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Languages:</strong> {languages.join(', ')}</p>
                    <p><strong>Nation:</strong> {nation}</p>
                </div>
           </div>
        </div>
    )
}



export default Form;