import React, { useState } from "react";
import { RegistrationInterface } from "../interfaces";
import { Button, Form, Input, Select, Spin } from "antd";

interface Props {
  onNextClick: () => any;
}
const { TextArea } = Input;
export const RegistrationPage = ({ onNextClick }: Props) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [level, setLevel] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const logo = "./assets/depositphotos.jpg";

  const updateName = (event: any) => {
    setName(event.target.value);
  };

  const updateEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const updatePhone = (event: any) => {
    setPhone(event.target.value);
  };
  const updateTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const updateLevel = (event: any) => {
    setLevel(event.target.value);
  };

  const updateAddress = (event: any) => {
    setAddress(event.target.value);
  };

  const [form] = Form.useForm();
  const handleSubmit = (e: any) => {
    if (!name || !email || !phone) {
      setError(true);
      return;
    }
    onNextClick();
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      form.resetFields();
      setLoading(false);
    }, 500);
  };

  // Input Select
  const onSelectChange = (value: string) => {
    // console.log(`selected ${value}`);
    
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div>
      <div className="my-10 flex justify-between">
        <div>
          <h3 className="text-[24px] font-bold ">Employee Registration Form</h3>
          <p className="text-gray-400 text-[12px]">
            Kindly fill the form below!
          </p>
        </div>
        <div className="relative bottom-[20px]">
          <img
            src={logo}
            className="w-[95px] h-[95px] rounded-full"
            alt="logo"
          />
        </div>
      </div>
      <Spin spinning={loading}>
        <Form form={form}>
          <div className="mb-5">
            <label
              htmlFor=""
              className="text-gray-400 text-[14px] font-semibold"
            >
              Full Name
            </label>

            <Input
              placeholder="e.g John Doe"
              className="mt-2 h-[45px] text-[14px]"
              onChange={updateName}
              pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
              type="text"
            />
            {error && name.length <= 0 ? (
              <label className="text-red-400 font-semibold text-base">
                Input can not be empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="flex w-full mb-5">
            <div className="mr-3 w-full">
              <label
                htmlFor=""
                className="text-gray-400 text-[14px] font-semibold"
              >
                Email Address
              </label>
              <Input
                placeholder="e.g johndoe@lorem.com"
                className="mt-2 h-[45px] text-[14px]"
                name="email"
                onChange={updateEmail}
                pattern="^\S+@\S+\.\S+$"
                type="email"
              />
              {error && email.length <= 0 ? (
                <label className="text-red-400 font-semibold text-base">
                  Input can not be empty
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="w-full ml-3">
              <label
                htmlFor=""
                className="text-gray-400 text-[14px] font-semibold"
              >
                Phone Number
              </label>
              <Input
                placeholder="e.g +1 234567890"
                className="mt-2 h-[45px] text-[14px]"
                name="phone"
                onChange={updatePhone}
                pattern="^\+[1-9]{1}[0-9]{3,14}$"
                type="tel"
              />
              {error && phone.length <= 0 ? (
                <label className="text-red-400 font-semibold">
                  This field is required
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex w-full mb-5">
            <div className="mr-3 w-full">
              <label
                htmlFor=""
                className="text-gray-400 text-[14px] font-semibold"
              >
                Job Title
              </label>
              <Input
                placeholder="e.g Software Developer"
                className="mt-2 h-[45px] text-[14px] w-full"
                name="title"
                onChange={updateTitle}
              />
              {error && title.length <= 0 ? (
                <label className="text-red-400 text-base font-semibold">
                  Input can not be empty
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="ml-3 w-full">
              <label
                htmlFor=""
                className="text-gray-400 text-[14px] font-semibold"
              >
                Level
              </label>
              <Select
                showSearch
                className="mt-2 text-[14px] w-full"
                placeholder="Select job level "
                optionFilterProp="children"
                onChange={onSelectChange}
                //   onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "junior",
                    label: "Junior Level",
                  },
                  {
                    value: "mid",
                    label: "Mid Level",
                  },
                  {
                    value: "senior",
                    label: "Senior Level",
                  },
                ]}
              />
              {error && level.length <= 0 ? (
                <label className="text-red-400 text-base font-semibold">
                  Input can not be empty
                </label>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="mb-5 flex flex-col">
            <label
              htmlFor=""
              className="text-gray-400 text-[14px] font-semibold"
            >
              House Address
            </label>
            <TextArea
              rows={4}
              className="mt-2 text-[14px]"
              placeholder="e.g 4, Abule Street, Egbe, Lagos State"
              name="address"
              onChange={updateAddress}
            />
            {error && address.length <= 0 ? (
              <label className="text-red-400 text-base font-semibold">
                Input can not be empty
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between py-5">
            <div></div>

            <Button
              className="px-10 bg-[#07112d] text-white h-[45px] font-semibold"
              onClick={handleSubmit}
              htmlType="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </Spin>
    </div>
  );
};
