
import Navbar from '../Navbar/Navbar';
import table from '../../../images/table.png';
import './Header.css';
import ReadMore from '../ReadMore/ReadMore';

const Header = () => {
   
    return (
<div className="bg">
            <Navbar></Navbar>
            <div className="row d-flex align-items-center">
                <div className="col-md-5 offset-md-1">
                     <h1>We Build Brands That Lead &</h1>
                     <h1>Inspire</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam obcaecati architecto nesciunt ipsam ad sint corporis doloribus. Porro quas quisquam explicabo deleniti iusto inventore corrupti nobis, architecto exercitationem, nisi nam.</p>
                   <ReadMore></ReadMore>
                  </div>
                <div className="col-md-5 offset-md-1">
                    <img src={table} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Header;