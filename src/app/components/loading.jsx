import React from "react";

const Loading = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <button className="btn btn-primary p-2" type="button" disabled>
                        <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
            Загрузка...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Loading;
