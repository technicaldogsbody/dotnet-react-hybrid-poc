import React from 'react';

const Intro = props => {

    const renderHtml = (rawHtml) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHtml || "" } });

    return (
        <div className="row justify-content-center">
            <div className="col-10 text-center"
                style={{
                    padding: "10px",
                    margin: "10px",
                    border: "1px dashed green",
                    color: "grey"
                }}>
                <h2>{props.introTitle}</h2>
                <hr />
                <div>{renderHtml(props.introText)}</div>
                <hr />
            </div>
        </div>
    );
};

export default Intro;