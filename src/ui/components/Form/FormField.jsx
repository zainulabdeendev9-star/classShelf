import { useFormContext, Controller } from "react-hook-form";
import { default as Input } from "../Input";
import { default as Select } from "../Select";

const FormField = ({
    name,
    label,
    component = "input",
    options = [],
    ...props
}) => {

    const { control, formState: { errors } } = useFormContext();

    const error = errors[name];
    const isFileInput = props.type === "file";

    const Component = component === "select"
        ? Select
        : Input;

    return (
        <div className="space-y-1 mb-6">
            {label && <label
                className="block text-sm font-medium text-gray-700 ml-3"
            >{label}</label>}

            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    if (props.type === "file") {
                        return (
                            <Input
                                name={field.name}
                                onBlur={field.onBlur}
                                ref={field.ref}
                                type="file"
                                onChange={(e) => {
                                    field.onChange(e.target.files);
                                }}
                                error={!!error}
                            />
                        );
                    }
                    return (
                        <Component
                            {...field}
                            {...props}
                            name={name}
                            options={options}
                            error={!!error}
                        />
                    )
                }}>
            </Controller>

            {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
    )

}

export default FormField;