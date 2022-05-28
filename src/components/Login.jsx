import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { checkUserApi } from "../Redux/actions/";
import { connect } from "react-redux";

//validation schema
const schema = yup.object({
  email: yup.string().required("Can't Be Empty").email("Must Be email form with @ and ."),
  password: yup.string().required("Please Enter Your Password")
}).required();


const Login = ({checkUserApi, user, error}) => {
   //define useForm hook and add the yup schema
    const { register, handleSubmit, formState: {errors} } = useForm({
		resolver: yupResolver(schema)
 	    });
	const [Error, setError] = useState("");

	const navigate = useNavigate();
  

  // this useEffect is used to navigate the user to homepage on successful login
  //it waits for 1 sec before work as a way to simulate an api response
  useEffect(()=>{

	if(user.name){
		setTimeout(() => {
			setError("")
			navigate("/")
		}, 1000);
	}else{
		setError(error)
	}  
  })



	//toast arguments
	const toastId = React.useRef(null);

    const check = () => toastId.current = toast.loading("please wait ...")
	
  
    const dismiss = () =>  toast.dismiss(toastId.current);

	//onSubmit is going to call the checkUser function and behave depending on the response
    let timeout;
    const onSubmit = async data => {
	 timeout = setTimeout(check, 0);
	 await checkUserApi(data)
	setTimeout(dismiss, 1000)
	}

  return (
	<>

	    {/* error handling message after submission to the back-end. Which is here just a simulation of course */}
		{Error.length? <p style={{color: "red"}}>{Error}</p>: "" }

		{/* form to recieve the email and password of the user */}
		<form  onSubmit={handleSubmit(onSubmit)} >
			{/* title */}
			<span className="title">
				Student Login
			</span>

			{/* user email */}
			<div>
				<input {...register("email")}  type="text"  placeholder="Email" ></input>
				{/* error message under the email input */}
				<p className={`error position-absolute ${errors.email?"active":""}`}>{errors.email?<i className="bi bi-info-circle me-2"></i>:""}{errors.email?.message}</p>
			</div>

			{/* user password */}
			<div>
				<input {...register("password")}  type="password"  placeholder="Password"></input>
					<i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
				<p className={`error position-absolute ${errors.password?"active":""}`}>{errors.password?<i className="bi bi-info-circle me-2"></i>:""}{errors.password?.message}</p>
			</div>
			
			
			<div>
			<button type="submit">
				Login
			</button>
			</div>
		</form>
	</>
  )
}

const mapStateToProps =({user, error}) =>{
	console.log(user, error);
	return{
	   user,
	   error
	}
  }
  


export default connect(mapStateToProps, {checkUserApi})(Login)