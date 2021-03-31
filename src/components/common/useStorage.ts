import { ActivitiesObject } from "./model";

export const useStorage = () => {
  const get = (): ActivitiesObject[] | null => {
    return JSON.parse(localStorage.getItem("data")!);
  };

  const create = (data: ActivitiesObject[]) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  return { get, create };
};
