type ProductPrices = {
  Apple: number;
  Banana: number;
  Orange: number;
};

const productPrices: ProductPrices = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: keyof ProductPrices) => {
  return productPrices[productName];
};

