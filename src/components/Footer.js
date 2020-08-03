import React from 'react';

function Footer() {

    const year = new Date().getFullYear();
    
        return (
            <div className="footer">
                <p><strong>Adedunmola, {year}</strong></p>
            </div>
        );
}

export default Footer;