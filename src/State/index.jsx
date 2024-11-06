import {useState} from "react";

export default function State() {
  console.log("State");
  const [isLogin, setIsLogin] = useState(false);

  console.log("isLogin", isLogin);

  const handleLogin = () => {
    setIsLogin(true)
  }

  const handleLogout = () => {
    setIsLogin(false)
  }

  const renderInfo = () => {
    if (isLogin) {
      return (
        <div>
          <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
           onClick={handleLogout}>
            Login
          </button>
          <h1>Vui long Login</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={handleLogin}>
            Logout
          </button>
          <h1>Hello</h1>
        </div>
      );
    }
  };
  return (
    <div>
      <p>State</p>
      {renderInfo()}
    </div>
  );
}
