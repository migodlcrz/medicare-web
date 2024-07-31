import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

interface LoginForm {
  username: string;
  password: string;
}

export const useLogin = () => {
  const port = import.meta.env.VITE_API_URL;
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (logForm: LoginForm) => {
    console.log("PUMASOK");
    const response = await fetch(`${port}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logForm),
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.error);
    }

    localStorage.setItem("user", JSON.stringify(json));
    localStorage.setItem("user-token", JSON.stringify(json.token));
    console.log(json.message);
    dispatch({ type: "LOGIN", payload: json });
    navigate("/dashboard");
  };

  return { login };
};
