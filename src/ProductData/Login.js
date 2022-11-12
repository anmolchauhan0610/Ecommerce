import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [loginUser, setloginUser] = useState({
        email: "",
        password: ""
    })
    const [oldData, setOldData] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const data = localStorage.getItem("user")

        const newData = JSON.parse(data)

        setOldData(newData);

    }, [])
    const handleInputChange = (e) => {

        setloginUser({ ...loginUser, email: e.target.value })
    }

    const handlePassword = (e) => {

        setloginUser({ ...loginUser, password: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginUser.email === oldData.email && loginUser.password === oldData.password) {
            navigate("/products");
        } else {
            setError(true);
        }

    }

    console.log("mydata:", oldData)

    return (
        <>
            <div className="card mt-3 main_div p-5"  >

                <div className="card-body">

                    <h3 className="card-title bg-success">Login Page</h3>

                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                onChange={handleInputChange} />

                        </div>
                        <div className="form-group mt-3">
                            <label for="exampleInputPassword1 ">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                onChange={handlePassword} />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
                        {error && <div className='showlogin   mt-3'>
                            <p >Login failed !</p>

                        </div>
                        }

                    </form>



                </div>



            </div>




        </>

    )
}

export default Login;

