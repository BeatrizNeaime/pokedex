import { forwardRef } from "react";
import { Column, Input } from "../common";

const InputGroup = forwardRef(({ data }, ref) => {
  return (
    <Column width={"100%"} align={"flex-start"} gap={"8px"}>
      <label
        style={{
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {data?.label}
      </label>
      <Input
        placeholder={data?.placeholder}
        onChange={data?.onChange}
        onBlur={data?.onBlur}
        value={data?.value}
        type={data?.type}
        ref={ref}
      />
    </Column>
  );
});

export default InputGroup;
