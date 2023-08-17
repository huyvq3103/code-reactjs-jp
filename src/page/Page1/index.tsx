import React from "react";
import { Button, WrapperButton } from "./style";
import { Link } from "react-router-dom";
const Page1 = () => {
  return (
    <WrapperButton>
      <Button>
        <Link to="/page2">情報登録</Link>
      </Button>
      <Button>情報登録</Button>
    </WrapperButton>
  );
};

export default Page1;
