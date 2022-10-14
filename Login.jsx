import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from '../../Assets/forest.jpg'

function Login(){
    return(
        <React.Fragment>

            <nav className="navbar navbar-dark navbar-expand-sm p-3 bg-dark">
                <div className="container">
                   <Link to='/' className="navbar-brand"> <h2> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HNVOJ5gmAzqru3LTtJsFgyZQcuWkS6VMA&usqp=CAU" alt="" style={{height:'50px'}}/> Home </h2> </Link>
                    <div>
                        <ul className="navbar-nav"> 
                            <li className="nav-item nav-link hover" style={{color:'white'}}> About  </li>
                            <li className="nav-item nav-link hover" style={{color:'white'}}> Support </li>
                            <li className="nav-item nav-link hover" style={{color:'white'}}> Contact </li>
                            <li className="nav-item nav-link hover">|</li>
                            {/* <li className="nav-item nav-link hover"> <Link to="/login" className="text-black"> Log In </Link> </li>
                            <li className="nav-item nav-link hover"> <Link to="/logup" className="text-dark"> Sign Up </Link> </li>  */}
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{backgroundImage:`url(${img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'100%',height:'900px'}}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-5 m-auto">
                        <div className="card bg-light">
                            <div className="card-header text-center bg-danger">
                                <h1 className="text-white"> Log In </h1>
                            </div>
                            <form className="col-11 m-auto">
                                <div className="form-group p-4 mt-4 d-flex">
                                    <label htmlFor="" className="m-auto w-50"> Username </label>
                                    <input type="text" placeholder="Enter Username" name="" id="" className="form-control"/>
                                </div>
                                <div className="form-group p-4 d-flex">
                                    <label htmlFor="" className="w-50 m-auto"> Email </label>
                                    <input type="text" placeholder="Enter Email" name="" id="" className="form-control"/>
                                </div>
                                <div className="form-group p-4 d-flex">
                                    <label htmlFor="" className="m-auto w-50"> Enter Password </label>
                                    <input type="password" placeholder="Enter Password" name="" id="" className="form-control"/>
                                </div>
                                <div className="form-group p-4 text-center">
                                    <button className="btn btn-danger form-control"> Log In </button>
                                    <h5 className="p-2"> Don't have an account ? </h5>
                                    <NavLink to={`/logup`} style={{textDecoration:'underline',color:'black'}}> <h5> Log Up Here </h5> </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Login;