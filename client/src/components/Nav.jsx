import {Link } from 'react-router-dom'

const Nav = () => {



  return(
    <nav>
      <img className = 'nav-img'src= "https://cdn.discordapp.com/attachments/725175628936118375/1037368482788036698/Screen_Shot_2022-11-02_at_9.59.32_AM-removebg-preview.png" alt= 'awesome'></img>
      <Link to = '/'><p>Home</p></Link>
    </nav>
  )
}


export default Nav