import { useLogout } from "../hooks/useLogout";

const DashboardPage = () => {
  const { logout } = useLogout();
  return (
    <div>
      <button className="bg-red-400 px-2 py-1 text-white" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
