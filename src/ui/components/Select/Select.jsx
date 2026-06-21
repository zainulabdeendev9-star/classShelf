import classNames from 'classnames'
import React, { useId } from 'react'
import { baseSelect, variants } from './select.styles'

const Select = ({
    name,
    options=[],
    placeholder="Select an option",
    error,
    className,
    ...props
})=> {
    const id = useId()
    return (
            <select
            name={name}
            className= {classNames(
                baseSelect,
                variants[error ? 'error' : 'default'],
                className
            )}
            ref={props.ref}
            {...props}
            >
                <option value="" readOnly>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}

            </select>
    )
}

export default Select