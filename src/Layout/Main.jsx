
import NavBar from '../Shared/Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;