import './App.css';
import Brand from './components/Brand';
import NavItem from './components/NavItem';
import SecondNavItem from './components/SecondNavItem';
import Database from './components/Database';




function App() {
  
  return (
     
    <div id="wrapper">
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
              <Brand></Brand>
              
              <hr className="sidebar-divider my-0"></hr>
              
              <li className="nav-item active">
                  <a className="nav-link" href="/">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span></span></a>
              </li>
              
              <hr className="sidebar-divider"></hr>
              
              <div className="sidebar-heading"></div>
              
              <NavItem
                class = "fas fa-fw fa-folder"
                name = "Pages">
              </NavItem>
              
              <NavItem
                className= "fas fa-fw fa-chart-area"
                name ="Charts">
              </NavItem>
              
              <NavItem
                className= "fas fa-fw fa-table"
                name ="Tables">
              </NavItem>

              <hr className="sidebar-divider d-none d-md-block"></hr>
          </ul>
      
      <div id="content-wrapper" className="d-flex flex-column">
        
        <div id="content">
          
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"> 
          
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">
              <SecondNavItem
                id = "alertsDropdown"
                classIcon="fas fa-bell fa-fw"
                counter="99+">
              </SecondNavItem>
          
              <SecondNavItem
                id="messagesDropdown"
                classIcon="fas fa-envelope fa-fw"
                counter="1">
              </SecondNavItem>

              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                  
                </a>
              </li>

            </ul>
          </nav>
          
          <div className="container-fluid">
          
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">DASHBOARD Pintureria Broch</h1>
            </div>
            
            <div className="row">

            <Database
              api="contarProductos"
              name="Productos Cargados">
              </Database>
              
              <Database
              api="contarUsuarios"
              name="Usuarios Registrados">
              </Database>

            

              <Database
              api="contarVentas"
              name="Ventas realizadas">
              </Database>
              
              

            </div>
           
          </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
            <div className="copyright text-center my-auto">
            <span>Copyright &copy; Dashboard 2021</span>
            </div>
            </div>
          </footer>
        </div>

      </div>
    
  );
}

export default App;