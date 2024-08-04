import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/auth/users"
      );
      //   console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/auth/signup", {
        email,
        username,
        password,
      })
      .then(() => {
        alert("registration successful");
        setEmail("");
        setUsername("");
        setPassword("");
        fetchData();
        navigate("/login");
      })
      .catch((error) => {
        console.error("Unable to register user");
      });
  };
  return (
    <div className="w-full h-screen flex ">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form
          className="text-center border rounded-lg w-[600px] h-2/5 p-9"
          onSubmit={handleSignup}
        >
          <label>Email</label>
          <br />
          <input
            className="w-[400px] h-12 rounded-xl bg-zinc-700 p-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <label>Username</label>
          <br />
          <input
            className="w-[400px] h-12 rounded-xl bg-zinc-700 p-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />

          <label>password</label>
          <br />
          <input
            className="w-[400px] h-12 rounded-xl bg-zinc-700 p-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />

          <button
            className="w-[200px] h-[50px] border hover:bg-teal-900"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
      <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800 ">
        <h2 className="text-3xl text-white">Signup</h2>
      </div>
    </div>
  );
}

export default SignUp;
