/**
 * Created by sertac.turkel on 10/07/2017.
 */
import React from "react";

export const User = (props) => {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p> User Name : {props.username} </p>
                    </div>
                </div>
            </div>
        );
}

