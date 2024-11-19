import Hamburger from "../../../assets/icons/hamburger.png";

function CollersNavbar() {
  return (
    <div className="navbar bg-base-100 p-0 collers-navbar px-4 lg:px-20">
      <div className="navbar-start">
        <a className="btn btn-ghost p-0  text-2xl font-bold text-amber-900">
          Collers
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-amber-900 items-center">
            <li>
              <a className="hover:bg-transparent">Products</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Solutions</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Resources</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Log In</a>
            </li>
            <li>
              <a className="btn btn-dark btn-outline text-amber-900 hover:btn-outline">
                Sign Up Now
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={Hamburger} alt=""/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] right-0	 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="hover:bg-transparent">Products</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Solutions</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Resources</a>
            </li>
            <li>
              <a className="hover:bg-transparent">Log In</a>
            </li>
            <li>
              <a className="btn btn-dark btn-outline text-amber-900 ">
                Sign Up Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CollersNavbar;
