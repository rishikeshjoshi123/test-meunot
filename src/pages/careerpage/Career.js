import React from 'react'
import Header from '../../components/Header'
import './career.css'

function Career() {

  React.useEffect(() => {
    document.getElementsByClassName("myclass")[0].classList.add("hide")
  },[])

  return (
    <div className='career-wrapper'>
        <Header></Header>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeyhKfymlyKNpzpqf8gDJUQWPOhVyH8m-Xfz9fDSL3Z_Pv3Fg/viewform?embedded=true"  title='career-form' height="4721" width="1640" frameborder="0" marginheight="0" marginwidth="0" className='career-form'>Loading…</iframe>
    </div>
  )
}

export default Career