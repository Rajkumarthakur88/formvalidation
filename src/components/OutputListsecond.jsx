import React from 'react'
import { useSelector } from 'react-redux'
import OutputListthird from './OutputListthird'

function OutputListsecond({ value2 }) {

    const { form1, form2, form3 } = useSelector(state => state.form)
    return (
        <>

            <p><strong>Father'sName:</strong> {value2.Fathersname}r</p>

            <p><strong>Employment:</strong> {value2.employment}</p>

            <p><strong>id:</strong> {value2.image2} </p>

            <p><strong>Nationality:</strong> {value2.Nationality}</p>

            <p><strong>idType</strong> {value2.idType}</p>
            {
                form3.map(item => <OutputListthird value3={item} />)
            }
        </>
    )
}

export default OutputListsecond