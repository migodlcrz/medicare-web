import Header from "../components/Header";
import LoginPanel from "../components/LoginPanel";

const Loginpage = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-100 px-10 py-2">
      <div className="flex flex-row justify-between h-20 w-full">
        <div className="flex flex-row items-center space-x-3">
          <img src="/logo.png" alt="" className="w-14 h-14" />
          <span className="outfit text-4xl text-black">Medicare</span>
        </div>
        <div className="flex flex-row items-center justify-end h-full px-20 space-x-24">
          <button className="outfit text-black">About</button>
          <button className="outfit text-black">Services</button>
          <button className="outfit text-black">Contact</button>
        </div>
      </div>
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
