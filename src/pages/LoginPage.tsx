import Header from "../components/Header";
import LoginPanel from "../components/LoginPanel";

const Loginpage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-100 px-10 py-2">
      <Header />
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col w-[35%] space-y-5">
          <span className="outfit-bold text-black text-5xl text-center">
            Patient Management System
          </span>
          <span className="outfit text-black">
            Don't have an account?{" "}
            <button className="outfit-bold text-cerulean-800 hover:text-cerulean-950 transition-colors duration-200">
              Contact support
            </button>
          </span>
          <LoginPanel />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
