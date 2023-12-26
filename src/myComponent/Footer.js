import React from 'react'

const Footer = () => {
  let FooterStyle={
    position:"relative",
   top:"100vh",
    width:"100%"


    
  }
  return (
    <div  className='bg-dark text-light py-2' style={FooterStyle}>
     <p className='text-center'>
      copyright &copy; MyTodosList.com
     </p>
      
    </div>
  )
}

export default Footer
