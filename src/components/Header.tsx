import logo from "/logo.png";

const Header = () => {
  return (
    <div className="flex flex-row justify-between h-20 w-full">
      <div className="flex flex-row items-center space-x-3">
        <img src={logo} alt="" className="w-14 h-14" />
        <span className="outfit text-4xl text-black">Medicare</span>
      </div>
      <div className="flex flex-row items-center justify-end h-full px-20 space-x-24">
        <button className="outfit text-black">About</button>
        <button className="outfit text-black">Services</button>
        <button className="outfit text-black">Contact</button>
      </div>
    </div>
  );
};

export default Header;
