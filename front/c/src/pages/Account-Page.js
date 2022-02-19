import React from 'react';
import styled from 'styled-components'
import { FaBars, FaRegFlag, FaSistrix, FaUser} from 'react-icons/fa';
import { IconContext} from "react-icons";
import { BsChevronDown} from "react-icons/bs";



const AccountPage = () => {
 
  const backToLogin = (e) => {
    e.preventDefault();
    window.location = 'http://localhost:3000/'
  }
    return (
        <>
            <Wrapper>
 
              <div className='top-nav '>
                <div className=' flex justify-between' >
                    <div className="left-container flex mt-5">
                        <IconContext.Provider value={{ size: "25px"}}>
                            <FaBars className='text-white bars' />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "25px"}}>
                            <FaRegFlag className='text-white flag'  />
                        </IconContext.Provider>
                        
                            <div className='text-white open'>Open an account</div>
                        <IconContext.Provider value={{ size: "25px"}}>
                            <BsChevronDown className='text-white arrow' />
                        </IconContext.Provider>
                    </div>

                    <div className="center">
                        <img src="https://i.redd.it/kaotaldqq8h81.png" alt=""  className='img-logo'/>
                    </div>

                    <div className="right-container flex">
                        <IconContext.Provider value={{ size: "25px"}}>
                            <FaSistrix className='text-white search' />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "25px"}}>
                            <FaUser className='text-white search user' />
                        </IconContext.Provider>
                        <button 
                        className='text-white outline-white btn rounded px-9 p-2 bg-blue-800 m-5 outline outline-offset-1 outline-1 outline-slate-50'
                        onClick={backToLogin}
                        >Sign out</button>
                    </div>
                </div>

                <div className='text-white'>
                        <h1 className='text-white top-greeting'>Good Afternoon!</h1>
                </div>
            </div>

            <div className='bg-blue-600'>
              <div className='blue-bar flex justify-between '>
                <div>Accounts</div>
                <div>Pay & Transfer</div>
                <div>Investments</div>
                <div>Security & Privacy</div>
              </div>
            </div>
            
      
           
            </Wrapper>
        </>
    )
}


const Wrapper = styled.div`


.blue-bar {
  color: white;
  padding:10px;
  margin-left: 100px;
  font-size: 21px;
  width: 50%;
  
}

.top-greeting {
    font-size: 27px;
    margin-left: 100px;
}


@media(max-width: 1200px) {
  .blue-bar{
    width: 100%;
    font-size: 18px;
    padding:20px;
  margin-left: 0px;
  }
}

@media(max-width: 760px) {
    .flag {
        display: none;
    }
    
    .open {
        display: none;
    }
    .arrow {
        display: none;
    }
    .search {
        display: none;
    }
    .user {
        display: none;
    }
    .bars {
        display: none;
    }
}

.search {
    margin-top: 35px;
    margin-right: 30px;
}
.img-logo{
    margin-top: 20px;
    width: 40px;
}

.open {
    margin-right: 20px;
    font-size: 17px;
}

.flag {
    margin-right: 20px;
}

.bars {
    width: 50px;
    margin-right: 20px;
}


.left-container {
    margin-left: 40px;
}

.right-container {
    margin-right: 90px;
}

@media(max-width: 1000px) {
    .left-container {
        margin-left: 10px;
    }
    
    .right-container {
        margin-right: 10px;
    }
}
.top-nav {
  position: sticky;
  background: rgb(0,181,255);
 background: linear-gradient(0deg, rgba(4,81,255,1) 0%, rgba(0,23,255,1) 100%);
}

`
export default AccountPage;

