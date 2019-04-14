import React from 'react';

const CastMember = (props) => {
    const { image, name, description } = props;
    return (
        <div>
            <img className="castImage" src={image} alt={name}/>
            <h4 className="castName">{name}</h4>
        </div>
    )
}

export default CastMember;