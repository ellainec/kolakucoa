import React from 'react';

const CreditSection = (props) => {
    const { title, names } = props;

    return (
        <div class="credits">
            <div style={{gridRowStart: `span ${names.length}`}}><strong>{title}</strong></div>
            {names.map(each => {
                return (<div>{each}</div>);
            })}

        </div>
    )
}

export default CreditSection;