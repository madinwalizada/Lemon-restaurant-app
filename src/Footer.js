import React from 'react';

function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Little Lemon Street,</p>
                    <p>Lemonville, CA 12345</p>
                    <p>Email: info@littlelemon.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Stay connected with us on social media for updates.</p>
                </div>

                <div className="footer-section">
                    <h3>Useful Links</h3>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Little Lemon. All rights reserved.</p>
            </div>
        </footer>

    );

}

export default Footer;
