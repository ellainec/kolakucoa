import React from 'react';

const CastMember = (props) => {
    const { image, name, title } = props;
    return (
        <div>
            <img className="castImage" src={image} alt={name}/>
            <h4 className="castName">{name}</h4>
            <span><em>{title}</em></span>
        </div>
    )
}

export default CastMember;