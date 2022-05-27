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
  const navigate = useNavigate();
  const [Error, setError] = useState("");

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(()=>{
    
	if(user.name){
		setTimeout(() => {
			setError("")
			navigate("/")
		}, 1000);
	}else{
		setError(error)
	}  
  }, [user, error])



	//toast arguments
	const toastId = React.useRef(null);

    const check = () => toastId.current = toast.loading("please wait ...")
	
  
    const dismiss = () =>  toast.dismiss(toastId.current);

    let timeout;
    const onSubmit = async data => {
	 timeout = setTimeout(check, 0);
	 await checkUserApi(data)
	 console.log(user, error);
	setTimeout(dismiss, 1000)
	}

  return (
	<>
	{Error.length? <p style={{color: "red"}}>{Error}</p>: "" }
		<form className="login100-form " onSubmit={handleSubmit(onSubmit)} >
			<span className="login100-form-title">
				Student Login
			</span>
			<div className="wrap-input100 " >
				<input {...register("email")} className="input100" type="text"  placeholder="Email" ></input>
					<i className="bi bi-envelope-fill" aria-hidden="true"></i>
				<p className={`error position-absolute ${errors.email?"active":""}`}>{errors.email?<i className="bi bi-info-circle me-2"></i>:""}{errors.email?.message}</p>
			</div>

			<div className="wrap-input100 mt-4" >
				<input {...register("password")} className="input100" type="password"  placeholder="Password"></input>
					<i className="bi bi-shield-lock-fill" aria-hidden="true"></i>
				<p className={`error position-absolute ${errors.password?"active":""}`}>{errors.password?<i className="bi bi-info-circle me-2"></i>:""}{errors.password?.message}</p>
			</div>
			
			<div className="container-login100-form-btn">
				<button type="submit" className="login100-form-btn">
					Login
				</button>
			</div>
		</form>
	</>
  )
}

const mapStateToProps =({user, error}) =>{
	return{
	   user,
	   error
	}
  }
  


export default connect(mapStateToProps, {checkUserApi})(Login)