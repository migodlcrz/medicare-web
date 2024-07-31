import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useLogout } from "../hooks/useLogout";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const navigate = useNavigate();
  const path = window.location.pathname.substring(1);

  return (
    <div className="flex flex-row h-16 w-full border-b-[0.5px] bg-white border-gray-200 justify-end px-5">
      <div className="flex flex-row space-x-3 items-center p-2 ">
        <img src="/avatar.png" alt="" className="h-full rounded-full" />
        <div className="flex flex-col w-4/5 text-start">
          <span className="text-sm outfit text-cerulean-600">{user.name}</span>
          <span className="text-xs outfit text-gray-500">Ophtalmologist</span>
        </div>

        <div className="dropdown dropdown-end">
          <button className="text-gray-500 text-xl">
            <MdOutlineKeyboardArrowDown />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-2xl z-[1] w-52 p-2 shadow bg-white"
          >
            <button
              onClick={() => {
                logout();
              }}
              className="bg-cerulean-600 text-white px-2 py-1 rounded-xl outfit"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
