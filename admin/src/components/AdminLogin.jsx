import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Card, message } from "antd";
import { User, Lock } from "lucide-react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      message.success("Login successful!");
      navigate("/dashboard");
    } else {
      message.error("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        className="w-full max-w-sm shadow-xl"
        bodyStyle={{ padding: "2rem" }}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        <div className="mb-4">
          <Input
            size="large"
            placeholder="Username"
            prefix={<User size={16} />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<Lock size={16} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="primary"
          block
          size="large"
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Login
        </Button>
      </Card>
    </div>
  );
}

export default AdminLogin;
