import React from "react";

const InputForm = ({ handleChange, label, ...props }) => {
    return (
        <div className={`group ${props.className}`}>
            {label ? <label htmlFor={props.name}>{label}</label> : null}
            <input
                className="form-control"
                name={props.name}
                type={props.type}
                onChange={handleChange}
                value={props.value}
                required
            />
        </div>
    );
};

export default InputForm;
