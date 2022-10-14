import React from "react";
import { Link } from "react-router-dom";

export let HomeNav = () =>{

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark navbar-expand-sm p-3 bg-danger">
                <div className="container">
                   <Link to='/' className="navbar-brand"> <h2> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0HNVOJ5gmAzqru3LTtJsFgyZQcuWkS6VMA&usqp=CAU" alt="" style={{height:'50px'}}/> Home </h2> </Link>
                    <div>
                        <ul className="navbar-nav"> 
                            <li className="nav-item nav-link hover" style={{color:'white'}}> About  </li>
                            <li className="nav-item nav-link hover" style={{color:'white'}}> Support </li>
                            <li className="nav-item nav-link hover" style={{color:'white'}}> Contact </li>
                            <li className="nav-item nav-link hover">|</li>
                            <li className="nav-item nav-link hover"> <Link to="/login" className="text-black"> Log In </Link> </li>
                            <li className="nav-item nav-link hover"> <Link to="/logup" className="text-dark"> Sign Up </Link> </li> 
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, commodi perspiciatis. Voluptate, corrupti quis reiciendis iure qui eveniet fugit unde fuga suscipit voluptatum, ab animi ex a quaerat. Commodi soluta cum quidem veniam ut excepturi repudiandae eius repellendus illum ex at amet consectetur unde est mollitia, nihil exercitationem rem officia quod, aperiam laboriosam molestias. Natus repudiandae id neque odio, ad amet praesentium deleniti expedita accusamus quis consequatur dignissimos dolorum debitis nihil omnis maiores nisi quos nam sit! Omnis vero sapiente ipsam perspiciatis quibusdam laborum impedit cumque, temporibus et, rerum voluptatum animi voluptatem atque pariatur debitis! Modi tenetur dolor necessitatibus! Sed.
            </div>
        </React.Fragment>
    )
}