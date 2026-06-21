import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {baseClasses, variants, sizes} from "./button.styles";

const Button = ({
    as: Component='button',
    children,
    variant = "primary",
    size = "medium",
    loading = false,
    disabled = false,
    fullWidth = false,
    type = "button",
    onClick,
    className,
    ...props
}) => {
    return (
        <Component
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            className={classNames(
                
                baseClasses,
                variants[variant],
                sizes[size],
                {
                    "opacity-50 cursor-not-allowed ": disabled || loading,
                    "w-full": fullWidth,
                },
                className
            )}
            {...props}
        >
            {loading ? "Loading..." : children}
        </Component>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func,
    className: PropTypes.string,
}

export default Button;