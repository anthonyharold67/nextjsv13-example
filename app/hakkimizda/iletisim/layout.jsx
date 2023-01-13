import React from 'react'

const layout = ({children}) => {
  return (
    <>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
        <nav>
          Hakkımızda Navbar
        </nav>
        {children}
        <footer>
        Hakkımızda Footer
        </footer>
        </>
  )
}

export default layout