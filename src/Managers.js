import React from 'react';

const Managers = ({ managers }) => {
    return (
        <ul>
            {managers.map(manager => {
                return (
                    <li key={manager.id}>{manager.name}</li>
                )
            })}
        </ul>
    )
}

export default Managers
