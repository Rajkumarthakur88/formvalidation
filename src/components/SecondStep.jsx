import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addStepsecond } from '../store/FormSlice';

function SecondStep() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formdata, setFormdata] = useState({
        Fathersname: "",
        employment: "",
        image2: "",
        Nationality: "",
        idType: ""
    })
    const [isError, setIsError] = useState(false)
    const [errormessage, setErrormessage] = useState("")
    const [errormessage2, setErrormessage2] = useState("")
    const [errormessage3, setErrormessage3] = useState("")
    const [errormessage4, setErrormessage4] = useState("")
    const { Fathersname, employment, image2, Nationality, idType } = formdata

    const onChange = (e) => {

        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })

        if (Fathersname.length < 3) {
            setErrormessage("Name is too short")
        }
        else {
            setErrormessage("")
        }
        if (employment !== "") {

            setErrormessage2("")
        }
        if(idType !== ""){

            setErrormessage4("")
        }

    }

    const onChecked = (e) => {
        if (e.target.checked) {
            console.log(e.target.value);
            setFormdata({
                ...formdata,
                [e.target.name]: e.target.value
            })
        }
        if(Nationality == "Indian"){

            setErrormessage3("")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            Fathersname, employment, image2, Nationality, idType
        }

        if (Fathersname.length < 3 || employment === "" || Nationality == " " || idType == "") {
            setIsError(true)
            if (employment === "") {
                setErrormessage2("Please Select employment")
            }
            else {
                setErrormessage2("")
            }
            if (Nationality == "") {
                setErrormessage3("You are not Indian")
            }
            else {
                setErrormessage3("")
            }
            if (idType == "") {
                setErrormessage4("Please Select Id Type")
            }
            else {
                setErrormessage4("")
            }
        }
        else {

            dispatch(addStepsecond(userData))

            navigate("/third")
        }
        
    }


    return (
        <>
            <div className="main-container">
                <div className="container">
                    <header>Registration Form</header>
                    <div className="steps">
                        <span>Step- <i className="bi bi-check-circle-fill" style={{ position: "relative", marginRight: "8px" }} > <span className='steps-line'></span> </i></span>
                        <span>Step-  <i className="bi bi-2-circle" ></i>  </span>
                        <span>Step-  <i className="bi bi-3-circle" ></i> </span>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h2>Step 2:</h2>
                        <label htmlFor="name">Father's Name:</label>
                        <input type="text" name="Fathersname" value={Fathersname} onChange={onChange} />
                        <p className='errormessage'>{errormessage}</p>
                        <label htmlFor="gender">Employment Status:</label>
                        <p onChange={onChange} value={employment}>
                            <span>Employeed</span> &nbsp;
                            <input type="radio" name="employment" value={"Employeed"} />
                            &nbsp;     &nbsp;
                            <span>Job Seeker</span> &nbsp;
                            <input type="radio" name="employment" value={"Job Seeker"} />
                        </p>
                        <p className='errormessage'>{errormessage2}</p>
                        <label htmlFor="checkbox">Nationality:</label>
                        <span>Indian :  <input type="checkbox" name="Nationality" value={"Indian"} onChange={(e) => onChecked(e)} /></span>
                        <p className='errormessage'>{errormessage3}</p>
                        <label htmlFor="education">Choose Your Id type:</label>
                        <select name="idType" id="idType" value={idType} onChange={onChange}>
                            <option value="">Select your Id</option>
                            <option value="Aadhar Card">Aadhar Card</option>
                            <option value="Voter id">Voter id</option>
                            <option value="Driving License">Driving License</option>
                            <option value="Pan Card">Pan Card</option>
                        </select>
                        <p className='errormessage'>{errormessage4}</p>
                        <label htmlFor="file">Choose image:</label>
                        <input type="file" name="file" value={image2} onChange={onChange} />

                        {/* <Link to={"/third"}> */}
                        <button type="submit" className="next-btn">Next</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default SecondStep