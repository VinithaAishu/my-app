import { BrowserRouter as Router ,Route,Link,Switch,Routes } from "react-router-dom";
 import Home from './component/Home'; 
 import About from './component/About'; 
 import Contact from './component/Contact';
  export default function Header(){ 
    return(
       <>
    
      <div class="container-fluid  ">
      <nav class="navbar navbar-expand-lg" id="navbar" >
       <div className="img-fluid justify-between">
      <img src="https://demo.themesberg.com/landwind/images/logo.svg  " width={70} height={70}  ></img>
      <a className="bold">LandWind</a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="menu" >
          <ul class="  navbar-nav  mb-lg-0 ms-auto text-center">
            <li className="nav-item ">
              <Link  className= "nav-link" to={'/Home'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link  className= "nav-link" to={'/About'}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/Contact'}>Contact</Link>
            </li>
          </ul>
          <div className="button ms-auto justify-between">
          <button type="button" class="btn btn-success">star</button>
          
          <button type="button" class="btn btn-primary">download</button>
          </div>
        </div>
        </nav>
      </div>
     {/* <ul>
      <li>
        <Link to={'/Home'}>Home</Link>
      </li>
      <li>
        <Link to={'/About'}>About</Link>
      </li>
      <li>
        <Link to={'/Contact'}>Contact</Link>
      </li>
    </ul> */} <Routes>
      <Route path='/Home' Component={Home} />
      <Route path='/About' Component={About} />
      <Route path='/Contact' Component={Contact} />
    </Routes>
  </> ) };