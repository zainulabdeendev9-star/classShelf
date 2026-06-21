import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { getCurrentUser } from "../features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.auth.isLoading)
  
  useEffect(()=>{
    dispatch(getCurrentUser())
  },[dispatch])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            className="mx-auto mb-6 h-14 w-14 rounded-full border-4 border-indigo-600 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <p className="text-xl font-medium text-gray-700">Loading application...</p>
          <p className="mt-2 text-sm text-gray-500">Please wait while we initialize your notes app.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <Outlet />
    </>
  )
}

export default App;