import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <h1>ReactTemplate</h1>
        </div>
    );
}

const Sum = (a, b) => {
    return a + b;
}

export default Header;

export { Sum };