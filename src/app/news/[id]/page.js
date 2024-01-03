import React from 'react';

const DynamicPage = ({params}) => {
    console.log(params)
    return (
        <div>
            <p>This is DynamicPage : {params.id}</p>
        </div>
    );
};

export default DynamicPage;