import { useDispatch, useSelector } from "react-redux";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import authService from "../../features/auth/authService";
import { logout } from "../../features/auth/authSlice";
import { Button } from "../../ui";
import { LuLogOut } from 'react-icons/lu';

const Header = () => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <header className="bg-white text-black p-4 border-b border-b-gray-300 flex justify-end items-center px-10">

            <nav>
                <ul>
                    <Button
                        variant="outline"
                        size="square"
                        onClick={logoutHandler}
                    ><LuLogOut/></Button>
                </ul>
            </nav>

        </header>
    );
};

export default Header;