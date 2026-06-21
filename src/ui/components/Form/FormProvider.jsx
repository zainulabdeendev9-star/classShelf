import { FormProvider as RHFProvider } from "react-hook-form";

const FormProvider = ({ children, methods, onSubmit }) => {
    return (
        <RHFProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} >
                {children}
            </form>
        </RHFProvider>
    )
}

export default FormProvider;