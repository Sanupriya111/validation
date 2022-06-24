import React, { useState } from 'react'
import './form.css'

function Form() {

  

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phno,setPhno]=useState('');
    const[pwd,setPwd]=useState('');

    const[errorname,setErrorName]=useState(false);
    const[erroremail,setErrorEmail]=useState(false)
    const[errorphno,setErrorPhno]=useState(false);
    const[errorpwd,setErrorPwd]=useState(false);
    const[submitted,setSubmitted]=useState(false);
    const[error,setError]=useState(false);
const handleName=(e)=>{
      setErrorName(false)
      setName(e.target.value);
        console.log(name)
        setErrorName(false)
        setError(false)
        setSubmitted(false)
        
    }
    const handleSubmit=(e)=>{
        
        e.preventDefault();
        if(name===''||email===''||phno===''||pwd==='')
        {
          setError(true)
        }
       else if(name==="")
        {
            setErrorName(true)
        }
        else if(email===""){
            setErrorEmail(true)
        }
        else if(!email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))
	
        {
          setErrorEmail(true)
        }
        else if(phno===""){
            setErrorPhno(true)
        }
        else if(!phno.match(/^\+\d{1,3}-\d{9,10}$/)){
          setErrorPhno(true)
        }
        
        else if(pwd===""){
            setErrorPwd(true)
        }
        else{
          
            setSubmitted(true)
            alert("Register success")
        }
    
    
    }
    
  return (
    <div>
         <div class="main-block">
      <div class="left-part">
        <i class="fas fa-graduation-cap"></i>
        <h1>Register to our courses</h1>
        <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>
        <div class="btn-group">
          <a class="btn-item" href="https://www.w3docs.com/learn-html.html">Learn HTML</a>
          <a class="btn-item" href="https://www.w3docs.com/quiz/#">Select Quiz</a>
        </div>
      </div>
      <form action="/">
        <div class="title">
          <i class="fas fa-pencil-alt"></i> 
          <h2>Register here</h2>
        </div>
        <div class="info">
          {
            error===true?
            <label style={{color:'red'}}>Please fill in the feilds</label>:null
          }
          {
            submitted===true?
            <label style={{color:'red'}}>Validation Sucssess</label>:null
          }
          <input class="fname" 
          type="text"  
          placeholder="Full name"
           value={name} 
           onChange={handleName}/>
           {
             errorname===true?
             <label style={{color:"red"}}>Name is required</label>:null
           }
          <input
           type="text"
           placeholder="Email"
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)
              setErrorEmail(false);
              setError(false)
              setSubmitted(false)
       
        console.log(email)}}/>
        {
             erroremail===true?
             <label style={{color:"red"}}>Email is required</label>:null
           }
          
          <input 
          type="text" 
          name="name"
           placeholder="Phone number" 
           value={phno} 
           onChange={(e)=>{setPhno(e.target.value)
            setErrorPhno(false)
            setError(false)
            setSubmitted(false)
       
          }}
            />
            {
             errorphno===true?
             <label style={{color:"red"}}>Phone number is required</label>:null
           }
       
          <input
           type="password"
            name="name" 
            placeholder="Password"  
            value ={pwd}
            onChange={(e)=>{setPwd(e.target.value)
            setErrorPwd(false)
            setError(false)
            setSubmitted(false)
       
            }}/>
             {
             errorpwd===true?
             <label style={{color:"red"}}>password is required</label>:null
           }
       
         </div>
        <div class="checkbox">
          <input type="checkbox" name="checkbox"/><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">Privacy Poalicy for W3Docs.</a></span>
        </div>
        <button type="submit" onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  
        </div>
        )
}

export default Form