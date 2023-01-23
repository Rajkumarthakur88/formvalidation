import React from 'react'
import OutputListfirst from './OutputListfirst'
import { useSelector } from 'react-redux'
import OutputListsecond from './OutputListsecond'
import OutputListthird from './OutputListthird'

function OutputList() {

  const { form1, form2, form3 } = useSelector(state => state.form)
  return (
    <>
      <li>
        {
          form1.map(item => <OutputListfirst value={item} />)
        }
      
     
      </li>
    </>
  )
}

export default OutputList