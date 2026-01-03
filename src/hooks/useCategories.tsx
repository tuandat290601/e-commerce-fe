import React from "react";

const useCategories = () => {
  const [categories, setCategories] = React.useState<
    Array<{ id: number; name: string }>
  >([]);

  return {};
};

export default useCategories;
