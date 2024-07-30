import React, { useState } from 'react'

export default function Navbar(Props) {

  const [MyStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })
  const [btntext, setbtntext] = useState("Enable dark mode ")
  const mode = () => {
    console.log("mode")
    if (MyStyle.color == 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
      setbtntext("Enable light mode")
    }
    else (
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      })
    )
    {
      setbtntext("Enable dark mode")
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={MyStyle}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="#" style={MyStyle}>{Props.text}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" href="#" style={MyStyle}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={MyStyle}>Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" style={MyStyle} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" style={MyStyle}>
                  <li><a className="dropdown-item" style={MyStyle} href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#" style={MyStyle}>Another action</a></li>
                  <li><hr className="dropdown-divider" style={MyStyle} /></li>
                  <li><a className="dropdown-item" href="#" style={MyStyle}>Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button type="button" className="btn btn-light" onClick={mode} style={MyStyle}>{btntext}</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}