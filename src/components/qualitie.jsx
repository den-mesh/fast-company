import React from "react";

const Qualities = ({color, name, _id}) => {
    return (
        <span className={'m-2 badge bg-' + color}>{name}</span>
    )
}

export default Qualities;
