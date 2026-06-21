import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    // TODO: Add authentication check

    const { authStatus, isLoading } = useSelector(state => state.auth)

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
                <div className="text-center">
                    <div className="mx-auto mb-6 h-14 w-14 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
                    <p className="text-xl font-medium text-gray-700">Loading application...</p>
                    <p className="mt-2 text-sm text-gray-500">Please wait while we initialize your notes app.</p>
                </div>
            </div>
        )
    }

    if (!authStatus) {
        return <Navigate to={"/"} replace/>
    }
    return <Outlet />;
}