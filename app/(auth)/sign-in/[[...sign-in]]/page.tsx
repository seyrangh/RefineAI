import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return <SignIn path="/sign-in"></SignIn>;
};

export default SignInPage;
