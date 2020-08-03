import React from 'react';

function FormField({ type, name, placeholder, value, onChange, label}) {
    return (
        <div>
        <label>
            {label}
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange} />
        </label>
        </div>
    );
}

export default FormField;