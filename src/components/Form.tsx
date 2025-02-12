import {
  Button,
  Flex,
  Form as AntdForm,
  Input,
  message,
  Upload,
  UploadProps,
} from "antd";
import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const TELEGRAM_BOT_TOKEN = "7386500945:AAGJfS56X9i1cS8zVfuHxffOAibjPpkNleQ";
const TELEGRAM_CHAT_ID = -1002205658437;

const sendMessage = async (messageText: string, file?: File) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    if (file != null) {
      const formData = new FormData();
      formData.append("chat_id", String(TELEGRAM_CHAT_ID));
      formData.append("caption", messageText);
      formData.append("document", file);
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    } else {
      await axios.post(url, {
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
      });
    }
    message.success("Form submitted successfully");
  } catch (error) {
    console.error(error);
    message.error("Form submission failed");
  }
};

export const Form = () => {
  const [form] = AntdForm.useForm();
  const location = useLocation();
  const [uploadedFile, setUploadedFile] = useState<File | undefined>(undefined);

  const onFinish = (values: any) => {
    const {
      name,
      phone,
      email,
      subject,
      message: userMessage,
      resume,
    } = values;
    const messageText = `
      New Contact Form Submission:
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Subject: ${subject}
      Message: ${userMessage}
      ${extended && resume ? `Resume: ${resume.file.name}` : ""}
    `;
    void sendMessage(messageText, uploadedFile);
  };

  const props: UploadProps = useMemo(() => {
    return {
      name: "file",
      multiple: false,
      accept: ".pdf",
      fileList: uploadedFile ? [uploadedFile as any] : [],
      onRemove: () => setUploadedFile(undefined),
      headers: {
        authorization: "authorization-text",
      },
      beforeUpload: (file) => {
        if (!file.name.endsWith(".pdf")) {
          void message.error("Only .pdf files are allowed");
          return false;
        }
        setUploadedFile(file as File);
        void message.success(`${file.name} file uploaded successfully`);
        return false;
      },
    };
  }, [uploadedFile]);

  const extended = useMemo(
    () => location.pathname === "/vacancies",
    [location.pathname],
  );

  return (
    <AntdForm
      form={form}
      className={"shadow-xl py-16 mx-5 px-10 rounded-lg w-full"}
      onFinish={onFinish}
      layout={"vertical"}
      id={extended ? "vacancy-form" : "contact-form"}
    >
      <Flex gap={20} vertical>
        <h1 className="text-2xl font-semibold text-primary text-center">
          Contact Us
        </h1>
        <Flex gap={20} align={"center"} className={"flex-col tablet:flex-row"}>
          <AntdForm.Item
            name={"name"}
            className={"w-full"}
            label={<label className={"opacity-70"}>Full name</label>}
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
          >
            <Input />
          </AntdForm.Item>
          <AntdForm.Item
            name={"phone"}
            className={"w-full"}
            label={<label className={"opacity-70"}>Phone</label>}
            rules={[
              {
                required: true,
                validator: (_, value) => {
                  const regex = /^\+\d{12}$/;
                  if (!value) {
                    return Promise.reject("Phone number is required");
                  }
                  if (!regex.test(value)) {
                    return Promise.reject("Invalid phone number");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input type={"phone"} placeholder={"+123456789012"} />
          </AntdForm.Item>
        </Flex>
        <Flex gap={20} align={"center"} className={"flex-col tablet:flex-row"}>
          <AntdForm.Item
            name={"email"}
            className={"w-full"}
            label={<label className={"opacity-70"}>Email</label>}
            rules={[
              {
                required: true,
                type: "email",
                message: "Invalid email",
              },
            ]}
          >
            <Input />
          </AntdForm.Item>
          <AntdForm.Item
            name={"subject"}
            className={"w-full"}
            label={<label className={"opacity-70"}>Subject</label>}
            rules={[
              {
                required: true,
                type: "string",
                message: "Subject is required",
              },
            ]}
          >
            <Input />
          </AntdForm.Item>
        </Flex>
        <AntdForm.Item
          name={"message"}
          className={"w-full"}
          label={
            <label className={"opacity-70"}>
              {extended ? "Cover letter" : "Message"}
            </label>
          }
          rules={[
            {
              type: "string",
            },
          ]}
        >
          <Input.TextArea />
        </AntdForm.Item>
        {extended && (
          <AntdForm.Item
            className="-mt-8 w-full"
            name={"resume"}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload {...props}>
              <Button
                icon={<UploadOutlined />}
                className={"px-4 text-base opacity-50 hover:opacity-100"}
              >
                Resume <i>(.pdf)</i>
              </Button>
            </Upload>
          </AntdForm.Item>
        )}
      </Flex>
      <Button type="primary" htmlType={"submit"} className="w-full">
        Submit
      </Button>
    </AntdForm>
  );
};
