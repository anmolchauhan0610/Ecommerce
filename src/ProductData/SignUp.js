import { useState } from 'react';
import { Link } from 'react-router-dom';



const SignUp = () => {
    
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const [submit,setSubmit] = useState(false)

    const handleInputChange =(e)=>{
       
         setUser({...user,email:e.target.value})
    }

    const handlePassword = (e)=>{
    
         setUser({...user,password:e.target.value})
    }
  console.log("user value is :",user)
    const handleSubmit =(e)=>{
        e.preventDefault();
           
            if(user.email && user.password !==""){
                localStorage.setItem("user",JSON.stringify(user));
                setSubmit(true);
                setUser("");
            }

    }

    return (
        <>
            <div className="card mt-5 main_div p-5"  >

                <div className="card-body">

                    <h3 className="card-title">Sign Up Page</h3>

                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                            onChange={handleInputChange} />

                        </div>
                        <div className="form-group mt-3">
                            <label for="exampleInputPassword1 ">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                            onChange={handlePassword}/>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                      { submit && <div className='showSignup   mt-3'>
                            <p >you have successfully signUp !</p>
                         <Link to="/Login">Go to Login Page</Link>

                        </div>
                        }
                    
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignUp;

