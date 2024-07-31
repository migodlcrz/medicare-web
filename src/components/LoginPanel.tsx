import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLogin } from "../hooks/useLogin";

const LoginPanel = () => {
  const { login } = useLogin();

  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrorMessage(null);

    try {
      const loginForm = {
        username: username ? username : "",
        password: password ? password : "",
      };
      await login(loginForm);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
    clearForm();
  };

  const clearForm = () => {
    setUsername(null);
    setPassword(null);
  };
  return (
    <form className="flex flex-col w-full space-y-5" onSubmit={handleLogin}>
      <div className="flex flex-col">
        <span className="outfit text-black">Username</span>
        <input
          type="text"
          name="username"
          id="username"
          value={username || ""}
          className="border-[0.5px] border-gray-300 rounded-2xl px-5 py-2 bg-white outline-none"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col relative">
        <span className="outfit text-black">Password</span>
        <div className="flex items-center border-[0.5px] border-gray-300 rounded-2xl px-5 py-2 bg-white">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password || ""}
            className="flex-1 outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="ml-2 text-gray-500 text-xl"
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-600 outfit">{errorMessage}</div>
        )}
      </div>
      <div className="flex w-full justify-end">
        <button className="flex items-center justify-center bg-cerulean-800 px-4 py-2 rounded-xl hover:bg-cerulean-950 transition-colors duration-200">
          <span className="outfit text-white">Login</span>
        </button>
      </div>
    </form>
  );
};

export default LoginPanel;
