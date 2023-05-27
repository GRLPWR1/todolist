import React from 'react';

function Footer(props) {
    return (
        <footer className="text-center text-white  fixed-bottom" >
            <div className="container p-4"></div>

            <div className="text-center p-3 bg-primary" >
                <p>
                    © 2023 Copyright:
                    <a className="text-white " href="#!" style={{ textDecoration: 'none' }}> Frontend001</a>
                </p>

            </div>
        </footer>
    );
}

export default Footer;