import React, { useState } from "react";
import Particles from "@/components/magicui/particles";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaEnvelope, FaKey, FaPhone, FaUser } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../../services/api";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import default styles

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await SignUp(
        formData.name,
        formData.email,
        formData.password,
        formData.phoneNo
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Account created successfully!", {
          position: "top-right", // Display toast at the top right
          autoClose: 3000, // Auto-close after 3 seconds
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000); // Navigate to login after 3 seconds
      } else {
        toast.error(`Unexpected response: ${response.status}`, {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error("An error occurred during registration. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Particles className="absolute inset-0 z-0" />
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <Card className="w-full max-w-md p-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create an account</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaUser className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  className="flex-grow"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaEnvelope className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="@gmail.com"
                  className="flex-grow"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaKey className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="******"
                  className="flex-grow"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                <FaPhone className="mr-2 text-gray-500 dark:text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-grow"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={handleSignup}
            >
              Create account
            </Button>
          </CardFooter>
        </Card>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render notifications */}
    </div>
  );
};

export default Register;
