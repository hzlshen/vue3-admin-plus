import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: "success",
        data: [
          {
            title: "标题",
            content: "内容",
          },
        ],
      };
    },
  },
] as MockMethod[];
