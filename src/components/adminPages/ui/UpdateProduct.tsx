"use client";
import { categoryOptions } from "@/constants/links";
import { useEditeProductMutation } from "@/redux/api/product";
import { useEditProductStore } from "@/store/useEditProductStore";
import { useUpdateProductStore } from "@/store/useUpdateProductStore";
import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";

const UpdateProduct = () => {
  const { close } = useUpdateProductStore();
  const { editProduct } = useEditProductStore();
  const [form] = Form.useForm();
  const [image, setImage] = useState<string>(editProduct.imageUrl || "");
  const [editProducts, { isLoading }] = useEditeProductMutation();

  useEffect(() => {
    if (editProduct) {
      setImage(editProduct.imageUrl || "");
      form.setFieldsValue({
        name: editProduct.name,
        price: editProduct.price,
        rating: editProduct.rating,
        views: editProduct.views,
        category: editProduct.category,
      });
    }
  }, [editProduct, form]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if ((file && file.type === "image/png") || file?.type === "image/jpeg") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a PNG or JPG file.");
    }
  };

  const onFinish = async (values: any) => {
    console.log(values);
    // await editProduct({ ...values,imageUrl:image });
    // close(false);
  };

  return (
    <div className="flex gap-x-5 justify-center">
      <div className="relative flex group items-center justify-center w-[200px] h-[300px] overflow-hidden rounded-md border">
        {image ? (
          <img src={image} className="w-full h-full" />
        ) : (
          <CiImageOn size={100} />
        )}
        <input
          type="file"
          className="absolute border w-[150px] h-[150px] z-10 opacity-0 cursor-pointer"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />
        <button className="absolute flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-neutral-950/75 transition focus:outline-none"></button>
      </div>
      <Form
        className="flex flex-col gap-y-1"
        // initialValues={editProduct}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please fill in the input" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="price"
          rules={[{ required: true, message: "Please fill in the input" }]}
        >
          <InputNumber placeholder="Price" />
        </Form.Item>
        <Form.Item
          name="rating"
          rules={[{ required: true, message: "Please fill in the input" }]}
        >
          <InputNumber placeholder="Rating" />
        </Form.Item>
        <Form.Item
          name="views"
          rules={[{ required: true, message: "Please fill in the input" }]}
        >
          <InputNumber placeholder="Views" />
        </Form.Item>
        <Form.Item
          name="category"
          rules={[{ required: true, message: "Please fill in the input" }]}
        >
          <Select options={categoryOptions} placeholder="Category" />
        </Form.Item>
        <Button htmlType="submit" type="primary" loading={isLoading}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProduct;
