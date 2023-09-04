"use client";
import { useFilterState } from "@/store/usefilterStore";
import Button from "./Button";

const DASearchBar = () => {
  const { setFilter } = useFilterState();

  const ChangeHandler = (event: any) => {
    setFilter("searchQuery", event.target.value);
  };
  return (
    <>
      <form className="inline-block">
        <Button
          text={"Test"}
          buttonColor={""}
          textColor={""}
          width={""}
          height={""}
          extraStyles={
            "border dark:bg-gray-800 my-8 p-2 bg-center border-solid border-r-0 rounded-l-md border-blue-50  indent-[-999px] overflow-hidden bg-transparent bg-search-icon bg-no-repeat w-[40px]"
          }
        />
        <input
          className="rounded-r-md border border-l-0 border-blue-50 py-2 pr-6 text-left focus:outline-0 dark:bg-gray-800"
          name="search"
          placeholder="Search by brand or title"
          onChange={ChangeHandler}
        />
      </form>
    </>
  );
};

export default DASearchBar;
