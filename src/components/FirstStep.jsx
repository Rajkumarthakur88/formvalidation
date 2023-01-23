import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addStepfirst } from '../store/FormSlice';

function FirstStep() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)

    const [formdata, setFormdata] = useState({
        name: "",
        gender: "",
        image1: "",
        age: "",
        education: ""
    })
    const [errormessage, setErrormessage] = useState("")
    const [errormessage2, setErrormessage2] = useState("")
    const [errormessage3, setErrormessage3] = useState("")
    const [errormessage4, setErrormessage4] = useState("")
    const { name, gender, image1, age, education } = formdata

    const onChange = (e) => {

        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })

        if (name.length < 3) {
            setErrormessage("Name is too short")
        }
        else {
            setErrormessage("")
        }
        if (gender !== "") {

            setErrormessage2("")
        }

        if (education !== "") {

            setErrormessage4("")
        }



    }

    const onChecked = (e) => {
        if (e.target.checked) {
            setFormdata({
                ...formdata,
                [e.target.name]: e.target.value
            })
        }

        if (age !== "") {

            setErrormessage3("")
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            name,
            gender,
            image1,
            age,
            education
        }

        if (name.length < 3 || gender === "" || age == "" || education == "") {
            setIsError(true)
            if (gender === "") {
                setErrormessage2("Please Select Gender")
            }
            else {
                setErrormessage2("")
            }
            if (age == "") {
                setErrormessage3("You are below 18..")
            }
            else {
                setErrormessage3("")
            }
            if (education == "") {
                setErrormessage4("Please Select Your Education")
            }
            else {
                setErrormessage4("")
            }
        }
        else {
            dispatch(addStepfirst(userData))

            navigate("/second")
        }
      
        
    }

    return (
        <div className="main-container">
            <div className="container">
                <header>Registration Form</header>
                <div className="steps">
                    <span>Step- <i className="bi bi-1-circle" style={{ position: "relative" }} ></i>  </span>
                    <span>Step- <i className="bi bi-2-circle"></i> </span>
                    <span>Step-  <i className="bi bi-3-circle"></i> </span>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h2>Basic Info:</h2>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={onChange} />
                    <p className='errormessage'>{errormessage}</p>
                    <label htmlFor="gender"> Gender:</label>
                    <p onChange={onChange} value={gender}>
                        <span>Male</span> &nbsp;
                        <input type="radio" name="gender" value={"male"} />
                        &nbsp;     &nbsp;
                        <span>Female</span> &nbsp;
                        <input type="radio" name="gender" value={"female"} />
                    </p>
                    <p className='errormessage'>{errormessage2}</p>
                    <label htmlFor="file">Choose your image:</label>
                    <input type="file" name="file" value={image1} onChange={onChange} />

                    <label htmlFor="checkbox">Age:</label>
                    <span>18 or above :  <input type="checkbox" name="age" value={"Above 18"} onChange={(e) => onChecked(e)} /></span>
                    <p className='errormessage'>{errormessage3}</p>
                    <label htmlFor="education">Choose Your Education:</label>
                    <select name="education" id="education" value={education} onChange={onChange}>
                        <option value="">Select Your Education</option>
                        <option value="10th or euivalent">10th or euivalent</option>
                        <option value="12th or equivalen">12th or equivalent</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Post Graduation">Post Graduation</option>
                    </select>
                    <p className='errormessage'>{errormessage4}</p>


                    <button type="submit" className="next-btn">Next</button>


                </form>
            </div>
        </div>
    )
}

export default FirstStep