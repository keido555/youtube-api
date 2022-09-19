import { FC, useState } from "react";

interface Props {
  text: string;
  text2: string;
  setText: any;
  setText2: any;
}

export const InputText: FC<Props> = (props: any) => {
  const { text, text2, setText, setText2 } = props;

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const handleChange2 = (e: any) => {
    setText2(e.target.value);
  };

  return (
    <div style={{ maxWidth: "300px", width: "100%", margin: "30px auto" }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="inputArea"
      />
      <br />
      <br />
      <input
        type="text"
        value={text2}
        onChange={handleChange2}
        className="inputArea"
      />
    </div>
  );
};
