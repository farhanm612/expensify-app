import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            Editing the expense of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;