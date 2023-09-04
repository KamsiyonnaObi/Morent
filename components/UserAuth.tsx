"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useUserState from "@/store/userStore";

type Props = {};

const UserAuth = (props: Props) => {
  const { refreshState } = useUserState();
  const path = usePathname();
  useEffect(() => {
    refreshState();
  }, [path, refreshState]);
  return null;
};

export default UserAuth;
