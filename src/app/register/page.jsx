"use client";
import Registration from "../components/Login";
import isAuth from "../components/isAuth";

function Page() {
  return (
    <>
      <Registration />
    </>
  );
}

export default isAuth(Page);
