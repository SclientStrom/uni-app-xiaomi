export type CarouselProps = { src: string };
export type ClassifyProp = CarouselProps & { classifyName: string };
export type HomeAdv = { left: CarouselProps; right: CarouselProps[] };
export type ShopItemProps = {
  src: string;
  name: string;
  shortDesc: string;
  oriPrice: string | number;
  salePrice: string | number;
};
export type ScreenProps = {
  sortTypes: SortType[];
  currentIndex: number;
};
export type SortType = { name: string; status?: number };
