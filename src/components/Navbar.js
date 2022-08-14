const Navbar = () => {
    return (
        <div>
          <aside id="nav-aside" className="js-fullheight">
            <div className="text-center">
              <div className="author-img" />
              <h1 id="logo"><a href="index.html">Sona SivaSundari</a></h1>
              <div className="text"><i class="fa-solid fa-envelope" /> sonasivasundari@gmail.com</div>
              <div className="text"><i class="fa-solid fa-phone" />+91 9626144798</div>
            </div>
            <nav className="navbar">
                <ul className="navlist">
                    <li className="navlink"><a href="#home">Home</a></li>
                    <li className="navlink"><a href="#home">About</a></li>
                    <li className="navlink"><a href="#home">Contact</a></li>
                </ul>
            </nav>
          </aside>
      </div>
    )
}

export default Navbar