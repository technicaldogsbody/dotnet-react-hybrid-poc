import React from 'react';

const Header = props => {
    return (
        <div className="row justify-content-center">
            <div className="col-10 text-center" style={{ padding: "10px", margin: "10px", border: "1px dashed red" }} >
                <img src={props.logoUrl}></img>
                <h2>{props.strapline}</h2>
            </div>
        </div>
    );
};

export default Header;