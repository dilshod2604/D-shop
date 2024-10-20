"use client";
import { Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";

const ProducControl = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-3">
        <p className="text-black">Colours:</p>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value="blue"></Radio>
          <Radio value="pink"></Radio>
        </Radio.Group>  
      </div>
      <div>
        <p>Size:</p>
      </div>
    </div>
  );
};

export default ProducControl;
