import React from 'react';

const Hero = props => {
    
    const renderHtml = (rawHtml) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHtml || "" } });

    console.log("Hello I am a Banner!");
    console.log(props);
    
    const myClick = function () {
        alert("Hello World from the Banner!");
    };
    
    return (
        <div className="row justify-content-center">
            <div className="col-10 text-center"
                style={{
                    padding: "10px",
                    margin: "10px",
                    border: "1px dashed green",
                    background: "lime",
                    minHeight: 200,
                    color: "black"
                }}>
                <h1 onClick={myClick}>{props.heading}</h1>
                <div>{renderHtml(props.body)}</div>
            </div>
        </div>
    );
};

export default Hero;