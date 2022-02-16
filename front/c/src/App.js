import React, {useState, useEffect} from 'react';
import styled from 'styled-components'


function App() {

 //useStates 
 const [signedUp, setSignedUp] = useState(false)
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
//useeffectend

//handle
const handle = (e) => {
  const newData={...newUserData}
  newData[e.target.id] = e.target.value;
  setNewUserData(newData)
}
//handle end


//submit
const submit = (e) => {
  e.preventDefault();
  try{
    fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: newUserData.username,
        password: newUserData.password

      })
    }).then(
      fetch('http://localhost:5000/api/getAll')
    .then(res => res.json())
    .then(data => 
  setAllUserData(data)
    )
  )
      setSignedUp(true)
        console.log('signed up')
      } catch (err) {

        console.log({message:err})
      }
      window.location.href = "http://localhost:3000/signin"

}

//emd of submit


//final return 

return ( 
 <>
 <Wrapper>
    <section className="main-bg-image ">
      <img src="https://i.redd.it/iouf274i9ug81.png" alt="" className="img-logo mx-auto" />
      <form action="" className="login-container mx-auto bg-white flex items-center rounded">
        <div className=''>
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
          onClick={submit}
          >Sign up</button>
          </div>
          <a href="http://localhost:3000/signin" className='pl-10 forgot text-gray-400'>Log in</a>
        </div>
      </form>
      <div className="padding-div"></div>
    </section> 
 </Wrapper>
  
 </>
  );
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

export default App;
