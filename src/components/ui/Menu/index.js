import React from 'react'
import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
      <nav className='content-menu'>
        <ul className='Menu'>
          {routes.map(route => {
         /*    if (route.publicOnly  && auth.user ) return null;
            if (route.private  && !auth.user ) return null; */
            return (
              <li key={route.to}>
                <NavLink 
                  end
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'blue'
                  })}
                  to={route.to}
                  >
                    {route.text}
                </NavLink>
              </li>
              )
          } )}
        </ul>
      </nav>
    );
  }
  
  const  routes = [];
  routes.push({
    to: '/',
    text: 'Home',
    private: false,
  
  });

  routes.push({
    to: '/perfil',
    text: 'Perfil',
    private: false,
    publicOnly: true,
  });
  routes.push({
    to: '/login',
    text: 'Iniciar sesion',
    private: false,
    publicOnly: true,
  });
  routes.push({
    to: '/logout',
    text: 'Cerrar sesion',
    private: true,
  
  });
  
  export { Menu };