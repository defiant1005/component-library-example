declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@packages/icon-library";
declare module "*.vue";
declare module "*.jpg";
declare module "*.svg";
declare module "*.png";
