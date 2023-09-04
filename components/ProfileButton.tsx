"use client";

import { motion } from "framer-motion";

type Props = {};

const ProfileButton = (props: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex	items-center text-[.75rem] font-semibold leading-normal text-white md:text-[1rem]	md:font-bold"
    >
      Add More Cars For Rent
    </motion.button>
  );
};

export default ProfileButton;
