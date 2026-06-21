import { FormField, FormProvider, Button } from "../../ui"
import Logo from "../Logo"
import { login as authLogin } from "../../features/auth/authSlice"
import { loginSchema } from "../../validators/loginSchema"
import authService from "../../features/auth/authService"

import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const defaultValues = {
        email: "",
        password: ""
    }
    const methods = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: defaultValues
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const login = async (data) => {
        setLoading(true)
        setError('')

        try {
            const session = await authService.login(data)
            console.log(session);

            if (session) {
                const userData = await authService.getSession()
                console.log(userData);
                
                if (userData) dispatch(authLogin(userData))
                navigate('/admin')

            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }


    return (
        <div className="flex flex-col min-w-sm  max-w-md p-8 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center mb-6">
            <Logo />
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            </div>

            <FormProvider methods={methods} onSubmit={login}>
                <FormField
                    name={"email"}
                    label={"Email"}
                    placeholder={"johndoe@company.com"}
                    type={'email'}
                />
                <FormField
                    name={"password"}
                    label={"Password"}
                    placeholder={"Enter your password"}
                    type={"password"}
                />
                <Button
                    type="submit"
                    loading={loading}
                    disabled={loading}
                    fullWidth={true}
                >
                    Login
                </Button>
            </FormProvider>
        </div>
    )
}