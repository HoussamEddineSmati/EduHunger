import React from 'react';

const Input = ({ label, id, error, className = '', ...props }) => {
    return (
        <div className={`input-group ${className}`}>
            {label && (
                <label htmlFor={id} className="input-label">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={`input-field ${error ? 'border-red-500' : ''}`}
                {...props}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default Input;
