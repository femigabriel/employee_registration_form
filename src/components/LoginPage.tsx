import React, { useState } from "react";
import { Button, Form, Input } from "antd";
const logo = "./assets/depositphotos.jpg";



export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const [error, setError] = useState(false);

  const [form] = Form.useForm();
  const handleSubmit = (e: any) => {
    if (!email || !password) {
      setError(true);
      return;
    }

    e.preventDefault();
    setTimeout(() => {
      form.resetFields();
    }, 500);
  };
  return (
    <div>
      <div className="my-10">
        <div className="lg:my-10 flex justify-between">
          <div>
            <h3 className="text-[24px] font-bold ">Login </h3>
            <p className="text-gray-400">Login into your account!</p>
          </div>
          <div className="relative bottom-[20px]">
            <img
              src={logo}
              className="w-[95px] h-[95px] rounded-full"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <Form form={form}>
        <div className="flex flex-col mb-3">
          <div className="flex justify-between">
            <label className=" text-gray-600 mb-2 font-semibold">
              Email Address
            </label>
            {error && email.length <= 0 ? (
              <label className="text-red-400 font-semibold">
                This field is required
              </label>
            ) : (
              ""
            )}
          </div>
          <Input
            className="border rounded h-[45px] p-3 font-semibold text-[18px] mb-2"
            placeholder="e.g johndoe@lorem.com"
            onChange={(e) => setEmail(e.target.value)}
            pattern="^\S+@\S+\.\S+$"
            type="email"
          />
        </div>
        <div className="flex flex-col mb-3">
          <div className="flex justify-between">
            <label className=" text-gray-600 mb-2 font-semibold">
              Password
            </label>
            {error && email.length <= 0 ? (
              <label className="text-red-400 font-semibold">
                This field is required
              </label>
            ) : (
              ""
            )}
          </div>
          <Input.Password
            placeholder="input password"
            className="border rounded h-[45px] p-3  font-semibold text-[18px] mb-2"
            onChange={(e) => setPassWord(e.target.value)}
            type="passwor"
          />
        </div>
        <div className="pt-10">
          <Button
            onClick={handleSubmit}
            className=" bg-blue-950 text-white w-full h-[45px] px-5 rounded-md font-semibold"
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};
