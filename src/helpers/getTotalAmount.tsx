import { IListItemData } from "../reducer";

const getTotalAmount = (arr: IListItemData[]) => {
  let totalAmount = 0;
  arr.forEach(({ price }) => {
    totalAmount += parseFloat(price);
  });

  return totalAmount;
};

export default getTotalAmount;
