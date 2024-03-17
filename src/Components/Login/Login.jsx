import { useState, React } from 'react'
import './styles.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Joi from 'joi';





function Login() {
    let navigate = useNavigate()
    const [errorList, setErrorList] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [apiError, setApiError] = useState('')
    const [user, setUser] = useState({
        "email": "",
        "password": ""
    })
    function getUserData(event) {
        let myUser = { ...user };
        myUser[event.target.name] = event.target.value;
        // console.log(myUser);
        setUser(myUser)
    }

    async function sendLoginDataToApi() {
        let { data } = await axios.post('https://', user)
        // console.log(data);
        if (data.message == 'success') {
            navigate('/home')
            setLoading(false)
        } else {
            setApiError(data.message)
            setLoading(false)
        }
    }

    function sumbitRegisterForm(e) {
        e.preventDefault();
        setLoading(true)
        let validation = validateForm()
        if (validation.error) {
            setErrorList(validation.error.details)
            setLoading(false)
        } else {
            sendLoginDataToApi()
        }
        console.log(errorList);
    }

    function validateForm() {
        let scheme = Joi.object({
            email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(/^[A-Z][a-z]{5,15}/).required(),
        })
        return scheme.validate(user, { abortEarly: false })
    }

    return (
        <div className='login-container w-50 mx-auto text-center'>
            <div className='w-50 mx-auto d-flex justify-content-center'>
                <img className='my-5' src={process.env.PUBLIC_URL + '/images/jumia logo2.png'} alt="" />
            </div>
            <h4>Welcome to Jumia</h4>
            <p>Type your e-mail or phone number to log in or create a Jumia account.</p>
            <form onSubmit={sumbitRegisterForm} className='register-form w-75 mx-auto my-5'>
                <div className='my-4'>
                    <input onChange={getUserData} type="email" placeholder='Email' name='email' id='email' className='form-control px-3 py-2' />
                    {errorList.filter((error) => error.context.label == 'email')[0] ?
                        <div className='form-alert-msg my-2 p-1'>
                            {errorList.filter((error) => error.context.label == 'email')[0].message}
                        </div>
                        : ''
                    }
                </div>
                <div className='my-4'>
                    <input onChange={getUserData} type="password" placeholder='Password' name='password' id='password' className='form-control px-3 py-2' />
                    {errorList.filter((error) => error.context.label == 'password')[0] ?
                        <div className='form-alert-msg my-2 p-1'>
                            {errorList.filter((error) => error.context.label == 'password')[0].message !== '"password" is not allowed to be empty' ? 'password is invalid please try again!' : '"password" is not allowed to be empty'}
                        </div>
                        : ''
                    }
                </div>
                <div className="my-5">
                    <button type='sumbit' className='continue form-control btn mt-3'>{isLoading == true ? <FontAwesomeIcon icon={faSpinner} className='spinner fs-3' /> : 'Login'}</button>
                </div>
                <div>
                    <p className='m-0'>By continuing you agree to Jumia’s</p>
                    <p className='mb-4 '><a className='text-warning text-hover' href="">Terms and Conditions</a></p>
                </div>
                <div>
                    <p>For further support, you may visit the Help Center or contact our customer service team.</p>
                    <img className='' src={process.env.PUBLIC_URL + '/images/jumia logo1.png'} alt="" style={{ width: '130px' }} />
                </div>

            </form>


            {/* <form action="" method="post">
                <input type="submit" value="Login With Passkeys" className='passkeys btn btn-outline-info form-control mt-3 mb-4' />
                <button type='submit' className='facebook btn btn-primary form-control'>
                    <div className='me-5 d-flex justify-content-around mt-1'>
                        <i class=" fa-brands fa-square-facebook"></i>
                        <span>Login With Facebook </span>
                    </div>
                </button>

            </form> */}

        </div>




    )
}
export default Login