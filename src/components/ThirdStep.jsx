import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addStepthird } from '../store/FormSlice';

function ThirdStep() {

    const { form1, form2 } = useSelector(state => state.form)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const [formdata, setFormdata] = useState({
        username: "",
        password: "",
        state: ""
    })

    const [errormessage, setErrormessage] = useState("")
    const [errormessage2, setErrormessage2] = useState("")
    const [errormessage3, setErrormessage3] = useState("")

    const { username, password, state } = formdata

    const onChange = (e) => {

        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
        if (username.length < 3) {
            setErrormessage("Username is too short")
        }
        else {
            setErrormessage("")
        }
        if (password.length < 8 || password.length > 8) {
            setErrormessage2("Length of password must be 8")
        }
        else if (!password.includes("@")) {
            setErrormessage2("Please Use @ in your password")
        }
        else {
            setErrormessage2("")
        }
        if (state !== "") {

            setErrormessage3("")
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            username, password, state
        }
        if (form1 === [""] || form2 === [""]) {
            alert("Please Complete previous Steps")
        }
        else {
            if (username.length < 3 || password.length < 8 || password.length > 8 || !password.includes("@")) {
                setIsError(true)
                if (password.length <= 7 || password.length >= 7) {
                    setErrormessage2("Length of password must be 8")
                }
                else if (!password.includes("@")) {
                    setErrormessage2("Please Use @ in your password")
                }

                if (username.length < 3) {
                    setErrormessage("Username is too short")
                }

                if (state == "") {
                    setErrormessage3("Please Select Your State")
                }
                else {
                    setErrormessage3("")
                }
            }
            else {


                dispatch(addStepthird(userData))

                navigate("/output")


            }

        }
    }


    return (
        <>
            <div className="main-container">
                <div className="container">
                    <header>Registration Form</header>
                    <div className="steps">
                        <span>Step- <i className="bi bi-check-circle-fill" style={{ position: "relative ", marginRight: "10px" }}><span className='steps-line2'></span></i></span>
                        <span>Step-  <i className="bi bi-check-circle-fill" style={{ position: "relative", marginRight: "10px" }}><span className='steps-line2'></span></i> </span>
                        <span>Step-  <i className="bi bi-3-circle"></i> </span>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h2>Step 3:</h2>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" value={username} onChange={onChange} />
                        <p className='errormessage'>{errormessage}</p>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={password} onChange={onChange} />

                        <p className='errormessage2'>{errormessage2}</p>
                        <label htmlFor="state">Choose Your State:</label>
                        <select name="state" id="state" value={state} onChange={onChange} >
                            <option value="">Select Your State</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Uttar Pradesh">Uttar Pradesh </option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chatttisgarh">Chatttisgarh</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Other">Other</option>
                        </select>
                        <p className='errormessage'>{errormessage3}</p>
                        <button type="submit" className="next-btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ThirdStep