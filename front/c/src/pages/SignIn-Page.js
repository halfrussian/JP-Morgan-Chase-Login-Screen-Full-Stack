import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [allUserData, setAllUserData] = useState([])
  const [newUserData, setNewUserData]= useState({
   username: "",
   password: ""
 });

//useeffect
useEffect(() => {

  console.log('useEffect')
  fetch('http://localhost:5000/api/getAll')
  .then(res => res.json())
  .then(data => 
    setAllUserData(data)
    )
  
  }, [])

  const handle = (e) => {
    const newData={...newUserData}
    newData[e.target.id] = e.target.value;
    setNewUserData(newData)
  }


const signIn = (e) => {

  e.preventDefault();
  console.log(allUserData)
   for(let i = 0; i < allUserData.length; i++) {
      if(allUserData[i].username === newUserData.username && allUserData[i].password === newUserData.password) { 
  
        window.location.assign(`http://localhost:3000/account/${allUserData[i]._id}`)
        console.log(allUserData[i]._id)
      }
      else {
        console.log('not there')
      }
 }
}


  return (
    <>
 
    <Wrapper>
    <section className="main-bg-image ">
      <img src="https://i.redd.it/iouf274i9ug81.png" alt="" className="img-logo mx-auto" />
        <form action="" className="login-container mx-auto bg-white flex items-center rounded">
        <div className=''>
        <div className="grid place-items-center mb-5">
            <h1 className='signin-header'>Sign into your Account!</h1>
            </div>
            <div className="input-container flex flex-wrap mx-auto">
              <input 
              type="text" 
              name="username" 
              placeholder='Username'  
              className='input mx-auto mb-5 border-0' 
              onChange={(e) => handle(e)}
              style={{'border-bottom': "1px solid black"}}
              id='username'
              />
              <input 
              type="password" 
              name="password" 
              placeholder='Password' 
               className='input mx-auto mt-5' 
               onChange={(e) => handle(e)}
               style={{'border-bottom': "1px solid black"}}
               id='password'
               />
            </div>
            <div className="checkbox-container">
              <label className='ml-12'><input type="checkbox" className='checkbox'/><span className='pl-3'>Remember me</span></label>
              <label><input type="checkbox" className='mr-2 ml-12 checkbox'/><span className=''>Use Token</span></label>
            </div>
            <div className="grid place-items-center pt-5">
            <button 
            className="btn bg-blue-600 p-3 text-white rounded form-btn mb-5 hover:bg-blue-900"
            onClick={signIn}
            >Sign in</button>    
          </div>
          <a href="http://localhost:3000/" className='pl-10 forgot text-gray-400'>Back to sign up</a>
        </div>
      </form>
      <div className="padding-div"></div>
    </section> 
  </Wrapper>
    </>
  )
}

const Wrapper = styled.div`

.signin-header {
  font-size: 25px;
  color: green;
}

.login {
  
  text-decoration: underline;
}

a {
  text-decoration: underline;

}
.form-btn {
  width: 80%;
}

input[type='checkbox'] {
  width: 16px;
  height:16px;
 
}

input:focus, textarea:focus, select:focus{
  outline: none;
}
.main-bg-image  {
  background-image: url('https://i.redd.it/3eft2mjw6ug81.jpg');
  background-repeat: no-repeat;
}

.login-container {
  width: 400px;
  height: 400px;
}

.padding-div {
  padding-bottom: 350px;
}

.img-logo {
  width:200px ;
  margin-bottom: 150px;
  padding-top: 20px;
}
.input {
  width: 80%;
  font-size: 17px;
  background: transparent;
 
}

.checkbox-container {
  padding-top:40px;
}
`

export default SignIn