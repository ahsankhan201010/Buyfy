export var fontWeightParser = (fontWeightStr) => {
  var value = null;
  switch (fontWeightStr) {
    case "light":
      value = 300;
      break;
    case "regular":
      value = 400;
      break;
    case "medium":
      value = 500;
      break;
    case "bold":
      value = 700;
      break;
    default:
      value = 400;
      break;
  }
  return value;
};

export var productCategorization = (products) => {
  var categorizedProducts = [];
  var exist = null;
  products.forEach((product) => {
    exist = categorizedProducts.some((cp) => cp.category === product.category);
    if (!exist) {
      categorizedProducts.push({
        category: product.category,
        products: [product],
      });
    } else {
      categorizedProducts.map((cp) => {
        if (cp.category === product.category) {
          return {
            ...cp,
            products: cp.products.push(product),
          };
        } else {
          return cp;
        }
      });
    }
  });
  return categorizedProducts;
};

export var addItemToCartHelper = (itemsArr, itemToAdd) => {
  //if itemToAdd already exist ?
  //if yes
  //then simple increase the quanity of that item

  //if no
  //then push item to cart with one additional property "quantity"

  var exist = itemsArr.some((item) => item.id === itemToAdd.id);
  if (exist) {
    return itemsArr.map((item) => {
      if (item.id === itemToAdd.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  } else {
    return [...itemsArr, { ...itemToAdd, quantity: 1 }];
  }
};
