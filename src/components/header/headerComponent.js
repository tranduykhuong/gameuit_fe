import React, { FC, useState } from "react";
import IconSearch from "./IconSearch";
import Logo from "./Logo";

import { useRouter } from "react-router";

const HeaderComponent = () => {
  const [openUser, setOpenUser] = useState(false);
  
  //const defaultstatus = useAppSelector(selectStatus);
  //const user = useAppSelector(selectUser);
  //const isAdmin = useAppSelector(selectIsAdmin);

  const router = useRouter();
  const path = router.pathname;
  const userpage = () => {
    router.push("/user");
    setOpenUser(!openUser);
  };
  const admin = () => {
    router.push("/admin");
    setOpenUser(!openUser);
  };

  return (
    <>
<div classname = "h-0.5 w-full">
  
</div>
    </>
  );
};
export default HeaderComponent;
