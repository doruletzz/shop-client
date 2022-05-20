import { Query, Field, client } from '@tilework/opus';
import { SERVER_URL } from '../../utils/constants';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ERROR_FETCHING_PRODUCTS = 'ERROR_FETCHING_PRODUCTS';

export const RECEIVE_PRODUCT_DETAILS = 'RECEIVE_PRODUCT_DETAILS';
export const FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCT_DETAILS';
export const ERROR_FETCHING_PRODUCT_DETAILS = 'ERROR_FETCHING_PRODUCT_DETAILS';

const getProduct = async (productId) => {
  const getByIdQuery = new Query('product', false)
    .addArgument('id', 'String!', productId)
    .addFieldList(['id', 'name', 'gallery', 'brand', 'description', 'inStock'])
    .addField(
      new Field('prices')
        .addField(new Field('currency').addFieldList(['label', 'symbol']))
        .addFieldList(['amount'])
    )
    .addField(
      new Field('attributes', true)
        .addFieldList(['id', 'name', 'type'])
        .addField(new Field('items', true).addFieldList(['displayValue', 'value', 'id']))
    );

  client.setEndpoint(SERVER_URL);

  let result = await client.post(getByIdQuery);

  if (result.product === null) {
    throw new Error(`Invalid Product Slug: ${productId}`);
  }

  return result;
};

const receiveProducts = async (category) => {
  const getAllProductsQuery = new Query('category', true)
    .addArgument('input', 'CategoryInput', { title: category })
    .addField(
      new Field('products', true)
        .addFieldList(['id', 'name', 'gallery', 'inStock'])
        .addField(
          new Field('prices')
            .addField(new Field('currency').addFieldList(['label', 'symbol']))
            .addFieldList(['amount'])
        )
    );

  client.setEndpoint(SERVER_URL);

  let result = await client.post(getAllProductsQuery);

  if (result.category === null) {
    console.log(result.category);
    throw new Error(`Invalid Category name: ${category}`);
  }

  return result;
};

export const fetchProductDetails = (productId) => {
  return (dispatch) => {
    getProduct(productId)
      .then((result) => {
        dispatch({
          type: RECEIVE_PRODUCT_DETAILS,
          productDetails: result.product
        });
      })
      .catch((error) => {
        dispatch({
          type: ERROR_FETCHING_PRODUCT_DETAILS,
          error
        });
      });
  };
};

export const fetchProducts = (category) => {
  return (dispatch) => {
    receiveProducts(category)
      .then((result) => {
        console.log('here');
        dispatch({
          type: RECEIVE_PRODUCTS,
          products: result.category.products
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: ERROR_FETCHING_PRODUCTS,
          error
        });
      });
  };
};
