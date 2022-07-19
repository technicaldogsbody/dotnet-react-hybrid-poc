import React from 'react';

const Freetext = props => {

    const renderHtml = (rawHtml) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHtml || "" } });

    return (
        <div className="row justify-content-center">
            <div className="col-10 text-center"
                style={{
                    padding: "10px",
                    margin: "10px",
                    border: "1px dashed lime",
                    color: "navy"
                }}>
                <div>{renderHtml(props.body)}</div>
            </div>
        </div>
    );
};

export default Freetext;