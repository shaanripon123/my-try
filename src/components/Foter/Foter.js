import React from 'react';
import './Foter.css';

const Foter = () => {
    return (
        <footer>
            <div className="row bgc d-flex align-items-center">
                <div className="col-md-2 offset-md-1">
                    <h3>uixzone</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam accusamus obcaecati.</p>
                    <h4>Interested to work with US</h4>
                    <input type="text" placeholder="Enter your E-mail" />
                    <button className="btn btn-primary">Send</button>
                </div>
                <div className="col-md-3">
                <h5>Company</h5>
                    <a href="/about"> About US</a>
                    <br />
                    <a href="/Portfoliio">Portfoliio</a>
                    <br />
                    <a href="/Page"> Page</a>
                    <br />
                    <a href="/FAQ">FAQ</a>
                    <br />
                    <a href="/review"> Review</a>
                    
                </div>
                <div className="col-md-3">
                    <h5>Support</h5>
                    <a href="/contact"> Contact US</a>
                    <br />
                    <a href="/Portfoliio">Privacy Policy</a>
                    <br />
                    <a href="/Page"> Tram of Use</a>
                    <br />
                    <a href="/FAQ">Buy & Sell</a>
                    <br />
                    <a href="/review"> Reviews</a>
                    
                </div>
                <div className="col-md-3">
                    <h5>Contact</h5>
                    <p> Rajshahi, Bangladesh</p>
                    <p>+8801792990598</p>
                    <p> E-mail: nahsnamhar8@gmail.com</p>
                    <a href="/">Buy & Sell</a>
                    <br />
                    <a href="/review"> Reviews</a>
                </div>
                
            </div>
        </footer>
    );
};

export default Foter;