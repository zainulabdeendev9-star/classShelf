import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const AuthLayout = () => {
    const authStatus = useSelector(state => state.auth.authStatus)
    const location = useLocation()

    if (authStatus) {
        return <Navigate to={"/admin"}/>
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-purple-200">
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default AuthLayout