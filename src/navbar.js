import {Link} from "react-router-dom";

export default function NavBar(){
  return (
    <div class="row justify-content-md-center">
      <div class="col-md-10">
          <nav class="navbar navbar-expand-lg navbar-light">
              <div class="navbar-brand">AMAN SHAH</div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="https://blog.amanshah2711.me">Blog</a>
                  </li>
                  <li class="nav-item">
                    <Link to="projects" className="nav-link">Projects</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Teaching
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a href="/eecs16b" class="dropdown-item">EECS16B</a>
                      <a href="/cs61a" class="dropdown-item">CS61A</a>
                    </div>
                  </li>
                </div>
              </div>
          </nav>
      </div>
    <hr class="col-md-11"></hr>
  </div>
);
}




