import React, { useState } from  'react';
 
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conpass, setConpass] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username,lastname, email, password, conpass };
        console.log("Welcome", newUser);
    };
    
    return(
    <div className="container">
    <div className="jumbotron bg-dark text-light">
        <h1><span className="text-warning"></span></h1>
      </div>
     
        <form onSubmit={ createUser }>
    
                 <div class="form-group">
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) }  value={ username } class="form-control" />
            </div>
                <div class="form-group">
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) }  value={ lastname } class="form-control" />
            </div>
            <div class="form-group">
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) }  value={ email } class="form-control" />
            </div>
                 <div class="form-group">
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) }  value={ password } class="form-control" />
            </div>

             <div class="form-group">
                <label>Confirmed Password: </label>
                <input type="text" onChange={ (e) => setConpass(e.target.value) }  value={ conpass } class="form-control" />
            </div>


            <input type="submit" value="Create User" />
<p> First name: { username } </p>
<p> First name: { lastname } </p>
<p> Email: { email } </p>
<p> Password: { password } </p>
<p> Confirmed Password: { conpass } </p>

        </form>

</div>

    );
};
    
export default UserForm;