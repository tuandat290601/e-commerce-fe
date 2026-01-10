import { ICategory } from "@/interfaces/category.interface";

const CategoryTableItem = (category: ICategory) => {
  return (
    <div className="shadow-md p-4 rounded-md">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{category.name}</h3>
          <p className="text-sm text-muted-foreground">
            {category.description}
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">Edit</button>
          <button className="text-red-500 hover:text-red-700">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryTableItem;
