import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    console.log(params)
    console.log(searchParams)
    return (
        <div>
            <p>This is DynamicPage : {params.id}</p>
        </div>
    );
};

export default DynamicPage;