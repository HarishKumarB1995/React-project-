import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img from '../../Assets/space.jpg';

function Logup(){
    let navigate=useNavigate();
    // let goback=()=>{
    //     navigate('/login')
    // }
    return(
        <React.Fragment>
            <div style={{backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat",backgroundSize: 'cover',width: '100%',height: '900px'}}>

            <nav className="navbar navbar-dark navbar-expand-sm p-3 bg-warning">
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

            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-5 m-auto">
                        <div className="card bg-light">
                            <div className="card-header text-center bg-dark">
                                <h1 className="text-white"> Log Up </h1>
                            </div>
                            <form className="col-11 m-auto">
                                <div className="form-group p-4 mt-4 d-flex">
                                    <label htmlFor="" className="w-50 m-auto"> Username </label>
                                    <input type="text" placeholder="Enter Username" name="" id="" className="form-control ml-2"/>
                                </div>
                                <div className="form-group p-4 d-flex">
                                    <label htmlFor="" className="w-50 m-auto"> Email </label>
                                    <input type="text" placeholder="Enter Email" name="" id="" className="form-control"/>
                                </div>
                                <div className="form-group p-4 d-flex">
                                    <label htmlFor="" className="w-50 m-auto"> Create Password </label>
                                    <input type="password" placeholder="Create Password" name="" id="" className="form-control"/>
                                </div>
                                <div className="form-group p-4 d-flex">
                                    <label htmlFor="" className="w-50 m-auto"> Confirm Password </label>
                                    <input type="password" placeholder="Confirm Password" name="" id="" className="form-control"/>
                                </div>
                                <div className="form-group p-4 text-center">
                                    <button className="btn btn-dark form-control"> Log Up </button>
                                    <h5 className="p-2"> Already have an account ? </h5>
                                    {/* <h5 onClick={()=>goback()} style={{textDecoration:'underline',cursor:'pointer'}}> Log In Here </h5> */}
                                    {/* <h5 onClick={()=>navigate('/login')} style={{textDecoration:'underline',cursor:'pointer'}}> Log In Here </h5> */}
                                    <h5 onClick={navigate.bind(this,'/login')} style={{textDecoration:'underline',cursor:'pointer'}}> Log In Here </h5>
                                    {/* <NavLink to={('/login')} style={{textDecoration:'underline',color:'black'}}> <h5> Log In Here </h5> </NavLink> */}
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

export default Logup;