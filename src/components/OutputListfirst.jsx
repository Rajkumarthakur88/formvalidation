import React from 'react'
import { useSelector } from 'react-redux'
import OutputListsecond from './OutputListsecond'

function OutputListfirst({ value }) {

    const { form1, form2, form3 } = useSelector(state => state.form)

    return (
        <div>

            <p><strong>Name:</strong> {value.name}r</p>  

            <p> <strong>Gender:</strong> {value.gender}</p>  

            <p><strong>photo:</strong> {value.image1} </p> 

            <p><strong>Education:</strong> {value.education}</p>  

            <p><strong>Age:</strong> {value.age}</p>

            {
          form2.map(item => <OutputListsecond value2={item} />)
        }

        </div>
    )
}

export default OutputListfirst