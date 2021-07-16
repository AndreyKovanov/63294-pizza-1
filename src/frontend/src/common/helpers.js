import {
  DOUGH_LIST,
  SIZE_LIST,
  SAUCE_LIST,
  INGREDIENT_LIST,
} from "@/common/constants";

export const normalizeDough = (items) =>
  items.map((doughItem) => ({
    ...doughItem,
    value: DOUGH_LIST.find(({ name }) => doughItem.name === name)?.value,
  }));

export const normalizeSizes = (items) =>
  items.map((sizeItem) => ({
    ...sizeItem,
    value: SIZE_LIST.find(({ name }) => sizeItem.name === name)?.value,
  }));

export const normalizeSauces = (items) =>
  items.map((sauceItem) => ({
    ...sauceItem,
    value: SAUCE_LIST.find(({ name }) => sauceItem.name === name)?.value,
  }));

export const normalizeIngredients = (items) =>
  items.map((ingredientItem) => ({
    ...ingredientItem,
    value: INGREDIENT_LIST.find(({ name }) => ingredientItem.name === name)
      ?.value,
  }));
