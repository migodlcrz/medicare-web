import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineEditCalendar, MdPeopleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();
  const path = window.location.pathname.substring(1);

  return (
    <div className="flex flex-col p-3 top-0 sticky z-50 bg-slate-100 w-64 h-screen border-[0.5px] border-gray-200 space-y-2">
      <div className="flex flex-row w-full items-center space-x-2">
        <img src="/logo.png" alt="" className="w-10 h-10" />
        <span className="text-black outfit text-2xl">Medicare</span>
      </div>
      <div className="flex flex-col w-full h-full p-2">
        <button
          onClick={() => {
            navigate("/account");
          }}
          className={`flex flex-row w-full space-x-3 items-center border-[0.5px] border-gray-200 p-2 rounded-2xl hover:bg-cerulean-200 transition-colors ${
            path === "account" && "bg-cerulean-200"
          }`}
        >
          <img src="/avatar.png" alt="" className="w-1/5 rounded-full" />
          <div className="flex flex-col w-4/5 text-start">
            <span className="text-sm outfit text-cerulean-600">
              {user.name}
            </span>
            <span className="text-xs outfit text-gray-500">Ophtalmologist</span>
          </div>
        </button>
        <div className="flex flex-col w-full py-2 space-y-2">
          <button
            onClick={() => navigate("/dashboard")}
            className={`flex flex-row py-2 px-2 items-center space-x-2 hover:bg-cerulean-200 transition-colors rounded-xl text-black ${
              path === "dashboard"
                ? "text-cerulean-600 bg-cerulean-200"
                : "text-black"
            }`}
          >
            <span>
              <LuLayoutDashboard />
            </span>
            <span className="outfit">Dashboard</span>
          </button>
          <button
            onClick={() => navigate("/patients")}
            className={`flex flex-row py-2 px-2 items-center space-x-2 hover:bg-cerulean-200 transition-colors rounded-xl text-black ${
              path === "patients"
                ? "text-cerulean-600 bg-cerulean-200"
                : "text-black"
            }`}
          >
            <span>
              <MdPeopleOutline />
            </span>
            <span className="outfit">Patients</span>
          </button>
          <button
            onClick={() => navigate("/appointments")}
            className={`flex flex-row py-2 px-2 items-center space-x-2 hover:bg-cerulean-200 transition-colors rounded-xl text-black ${
              path === "appointments"
                ? "text-cerulean-600 bg-cerulean-200"
                : "text-black"
            }`}
          >
            <span>
              <MdOutlineEditCalendar />
            </span>
            <span className="outfit">Appointments</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
