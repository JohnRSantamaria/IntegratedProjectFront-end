import { foodApi } from "../api/FoodApi";
export const postData = async (data) => {
  try {
    foodApi.post("/recipes",data);
  } catch (error) {
    throw new Error("Cannot post the recepi");
  }
};
