const getTotalAmount = (arr: { price: string }[]) => {
  let totalAmount = 0;
  arr.forEach(({ price }) => {
    totalAmount += parseFloat(price);
  });

  return totalAmount;
};

export default getTotalAmount;
