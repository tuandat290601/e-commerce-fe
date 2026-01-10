import { ICategory } from "@/interfaces/category.interface";

export const categories: ICategory[] = [
  {
    id: "8fa692f0-f201-44bf-8156-b9191d0617bd",
    name: "Tất cả sản phẩm",
    description: "Danh sách tất cả sản phẩm tại cửa hàng của chúng tôi",
    children: [
      {
        id: "1c2b3a4e-7a2f-4c3b-9a11-111111111111",
        name: "Thời trang",
        description: "Danh mục thời trang",
        children: [
          {
            id: "2d3e4f5a-8b9c-4d1e-a222-222222222222",
            name: "Thời trang nam",
            description: "Sản phẩm thời trang dành cho nam",
            children: [
              {
                id: "3e4f5a6b-9c1d-4e2f-b333-333333333333",
                name: "Áo",
                description: "Các loại áo nam",
                children: [
                  {
                    id: "4f5a6b7c-1d2e-4f3a-c444-444444444444",
                    name: "Áo thun",
                    description: "Áo thun nam",
                    children: [],
                  },
                  {
                    id: "5a6b7c8d-2e3f-4a5b-d555-555555555555",
                    name: "Áo sơ mi",
                    description: "Áo sơ mi nam",
                    children: [],
                  },
                ],
              },
              {
                id: "6b7c8d9e-3f4a-5b6c-e666-666666666666",
                name: "Quần",
                description: "Các loại quần nam",
                children: [
                  {
                    id: "7c8d9e1f-4a5b-6c7d-f777-777777777777",
                    name: "Quần jeans",
                    description: "Quần jeans nam",
                    children: [],
                  },
                  {
                    id: "8d9e1f2a-5b6c-7d8e-a888-888888888888",
                    name: "Quần tây",
                    description: "Quần tây nam",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: "9e1f2a3b-6c7d-8e9f-b999-999999999999",
            name: "Thời trang nữ",
            description: "Sản phẩm thời trang dành cho nữ",
            children: [
              {
                id: "a1b2c3d4-7e8f-9a1b-caaa-aaaaaaaaaaaa",
                name: "Váy",
                description: "Các loại váy nữ",
                children: [
                  {
                    id: "b2c3d4e5-8f9a-1b2c-dbbb-bbbbbbbbbbbb",
                    name: "Váy công sở",
                    description: "Váy mặc đi làm",
                    children: [],
                  },
                  {
                    id: "c3d4e5f6-9a1b-2c3d-eccc-cccccccccccc",
                    name: "Váy dạo phố",
                    description: "Váy mặc đi chơi",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "d4e5f6a7-1b2c-3d4e-fddd-dddddddddddd",
        name: "Phụ kiện",
        description: "Các loại phụ kiện",
        children: [
          {
            id: "e5f6a7b8-2c3d-4e5f-0eee-eeeeeeeeeeee",
            name: "Giày dép",
            description: "Giày và dép",
            children: [
              {
                id: "f6a7b8c9-3d4e-5f6a-1fff-ffffffffffff",
                name: "Giày thể thao",
                description: "Giày sneaker, giày chạy bộ",
                children: [],
              },
            ],
          },
          {
            id: "0a1b2c3d-4e5f-6a7b-8ccc-cccccccccccc",
            name: "Túi xách",
            description: "Túi xách thời trang",
            children: [],
          },
        ],
      },
    ],
  },
];
