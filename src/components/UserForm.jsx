import React, { useState } from  'react';

    
const UserForm = (props) => {

       const [values, setValues] = useState({username: "",lastname:"", email: "",  conpass:"", password: "" });
       const [errors, setErrors] = useState({});

     const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
          });
          
        };


     const handleSubmit = event => {
        event.preventDefault(event.target.name);
        // setErrors(validate(values));
        // setIsSubmitting(true);
        submit();
      };
    function submit(){
        let a = validateLogin(values) ;
        setErrors(a);
        console.log(a)
         }


     function validateLogin(values) {
        let errors = {};
        if (values.username.length< 2)
        {
            errors.firstname = "first name must be at leaste 2 characters";
        }

        if (values.lastname.length< 2)
        {
            errors.lastname = "last name  must be at leaste 2 characters";
        } 
         if (values.email.length > 4) {     
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) != true)
            {
                errors.email = "Email address is invalid";
            } 
                    } else { errors.email2 = "email field must be at least 5 characters";} 
     
          if (values.password !== values.conpass) {
              console.log("smaller 5")
          errors.password = ("the confirmed password not matched");
                 }
        return  errors;
      }


    return(
    <div className="container">
    <div className="jumbotron bg-dark text-light">
        <h1> login<span className="text-warning"> form</span></h1>
      </div>
     
        <form  onSubmit = {handleSubmit} novalidate>
    
            <div className="form-group">
                <label>First Name: </label> 
                <input name="username"  type="text"   value={values.username} onChange={handleChange}     className="form-control" />
            </div>
            {errors.firstname && <p className="error">{errors.firstname}</p>}

                <div className="form-group">
                <label>Last name: </label> 
                <input name="lastname"  type="text"   value={values.lastname}  onChange={ handleChange }   className="form-control" />
            </div>

            {errors.lastname && <p className="error">{errors.lastname}</p>}

            <div className="form-group">
                <label>Email Address: </label> 
                <input name="email"  type="text" value={values.email} onChange={handleChange}      className="form-control" />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}
            {errors.email2 && <p className="error">{errors.email2}</p>}



                 <div className="form-group">
                <label>Password: </label>
                 <input   name="password"  type="password" value={values.password} onChange={handleChange} className="form-control" />
            </div>
            {errors.password && <p className="error">{errors.password}</p>}

                 <div className="form-group">
                <label>Cinfirm Password: </label>
                 <input   name="conpass"  type="password" value={values.conpass} onChange={handleChange} className="form-control" />
            </div>

      

            <button type="submit" className="btn btn-primary">Submit</button>
         


        </form>

</div>

    );
};
    
export default UserForm;