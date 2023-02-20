import { getGUID } from "@/utils/index.ts";
import menuItem from "./menuItem.ts";

const menu = [
  {
    path: "/dashboard",
    icon: "home",
    label: "首页",
  },
  {
    path: "/card",
    icon: "card",
    label: "卡片设计",
  },
  {
    path: "/lowcode",
    icon: "card",
    label: "低代码",
  },
  {
    path: "/threejs",
    icon: "card",
    label: "三维",
  },
];

(function setGUID(nemu: Array<menuItem>) {
  function setKey(node: menuItem) {
    if (!node) return;
    node.key = getGUID();
    node?.children?.forEach((element: menuItem) => {
      setKey(element);
    });
  }
  menu.forEach((item: menuItem) => {
    setKey(item);
  });
})(menu);

export { menu };
