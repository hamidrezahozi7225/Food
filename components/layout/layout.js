import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header className=' d-flex  p-3 justify-content-around align-items-center border-bottom border-dark'>
        <div>logo</div>
        <div>
          <ul className='nav '>
            <li className='nav-item '>
              <Link className='nav-link text-dark' href='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-dark' href='/products'>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-dark' href='/about'>
                About-US
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className='min-vh-100 p-3 text-center '>{children}</div>
      <footer className='text-center bg-dark text-white p-4'>
        created by: Hamid Hozi
      </footer>
    </div>
  );
};

export default Layout;
