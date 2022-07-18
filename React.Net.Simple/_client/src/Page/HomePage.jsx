import React from 'react';
import * as Components from "../Components/";

const HomePage = props => {

    return (
        <div className="row justify-content-center">
            <div className="col-10 text-center"
                 style={{
                    padding: "10px",
                    margin: "10px",
                    border: "1px dashed purple",
                    color: "grey"
                }}>

                <Components.Header {...props.header} />
                <div data-component="Hero" data-props={JSON.stringify(props.hero)}></div>
                <Components.Intro {...props.intro} />
                <Components.Freetext {...props.freetext} />
            </div>
        </div>
    );
};

export default HomePage;