"use client";
import { categoryOptions } from "@/constants/links";
import { useCreateProducMutation } from "@/redux/api/product";
import { useAddProductStore } from "@/store/useAddProductStore";
import { Select } from "antd";
import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiImageOn } from "react-icons/ci";
interface InputValue {
  name: string;
  price: number;
  rating: string;
  views: number;
}
const CreateProduct = () => {
  const { close } = useAddProductStore();
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { register, handleSubmit } = useForm<InputValue>();
  const [createProduct] = useCreateProducMutation();
  //image
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
  //category
  const handleChange = (value: string) => {
    setCategory(value);
  };

  ///create
  const onSubmit: SubmitHandler<InputValue> = async (value) => {
    try {
      const product = {
        name: value.name,
        price: Number(value.price),
        imageUrl: image,
        rating: Number(value.rating),
        category: category,
        views: Number(value.views),
      };

      await createProduct(product);
      close(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-x-5 justify-center max-sm:flex-col max-sm:items-center">
      <div className="relative flex group items-center justify-center w-[200px] h-[300px] overflow-hidden rounded-md border">
        {image ? (
          <img src={image} className="w-full h-full" />
        ) : (
          <CiImageOn size={100} />
        )}

        <input
          type="file"
          className="absolute border  w-[150px] h-[150px] z-10 opacity-0 cursor-pointer "
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />
        <button className="absolute flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-neutral-950/75 transition focus:outline-none"></button>
      </div>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: true })}
          className="bg-white border rounded-md px-3 py-2 w-full focus:outline-none"
          placeholder="Name"
        />
        <input
          {...register("price", { required: true })}
          type="number"
          className="bg-white border rounded-md px-3 py-2 w-full focus:outline-none"
          placeholder="Price"
        />
        <input
          {...register("rating", { required: true })}
          type="text"
          className="bg-white border rounded-md px-3 py-2 w-full focus:outline-none"
          placeholder="Rating"
        />
        <input
          {...register("views", { required: true })}
          type="number"
          className="bg-white border rounded-md px-3 py-2 w-full focus:outline-none"
          placeholder="Views"
        />
        <Select
          options={categoryOptions}
          placeholder="Category"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-sky-600 py-2 flex items-center justify-center rounded-md text-white font-bold hover:opacity-75 hover:scale-110 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
