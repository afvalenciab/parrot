export function getListOfCategories(productList) {
  return productList.reduce((list, product) => {
    const categoryExist = list.find(item => item.uuid === product?.category.uuid);

    if (!categoryExist) {
      const totalProducts = productList.filter(
        item => item?.category?.uuid === product?.category.uuid,
      ).length;

      list.push({ ...product.category, totalProducts });
    }

    return list;
  }, []);
}
