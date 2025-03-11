import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<boolean | null>(null); // ✅ Null initially (No status)
  const [attemptedLogin, setAttemptedLogin] = useState(false); // ✅ Track if user clicked login
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (username === "admin" && password === "admin") {
    //   navigate("/home");
    // } else {
    //   console.log("Wrong credentials!!");
    // }
    setAttemptedLogin(true);

    fetch("http://localhost:8080/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.display_name !== "") {
          setLoginStatus(true);
          navigate(`/home/${data.display_name}`);
        } else {
          setLoginStatus(false);
        }
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl px-10 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="Username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md"
            >
              Login
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign up
            </a>
          </p>
        </form>
        {attemptedLogin && loginStatus === false && (
          <div
            className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Incorrect
            username or passwords!
          </div>
        )}
      </div>
    </div>
  );
}
