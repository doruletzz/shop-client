import { Query, Field, client } from '@tilework/opus';


const serverURL = "http://localhost:4000";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const RECEIVE_PRODUCT_DETAILS = "RECEIVE_PRODUCT_DETAILS";
export const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";

const getProduct = async (productId) => {
    const getByIdQuery = new Query('product', false)
        .addArgument("id", "String!", productId)
        .addFieldList(["name", "gallery", "brand", "description"])
            .addField(new Field("prices")
                .addField(new Field("currency")
                    .addFieldList(["label", "symbol"])
                )
                .addFieldList(["amount"])
            )
            .addField(new Field("attributes", true)
                .addFieldList(["id","name","type"])
                .addField(new Field("items",true)
                    .addFieldList(["displayValue","value","id"]))
                )


    client.setEndpoint(serverURL);

    let result = await client.post(getByIdQuery);

    console.log(result);

    return result;
}

const receiveProducts = async (category) => {
    const getAllProductsQuery = new Query('category', true)
        .addArgument("input", "CategoryInput", { title: category })
        .addField(new Field("products", true)
            .addFieldList(["id", "name", "gallery", "inStock"])
            .addField(new Field("prices")
                .addField(new Field("currency")
                    .addFieldList(["label", "symbol"])
                )
                .addFieldList(["amount"])
            )
        );

    client.setEndpoint(serverURL);

    let result = await client.post(getAllProductsQuery);

    return result;
}

export const fetchProductDetails = (productId) => {
    return dispatch => {
        getProduct(productId).then(result => {
            dispatch({
                type: RECEIVE_PRODUCT_DETAILS,
                productDetails: result.product
            })
        })

    }
}

export const fetchProducts = (category) => {
    return dispatch => {
        receiveProducts(category).then(result => {
            dispatch({
                type: RECEIVE_PRODUCTS,
                products: result.category.products
            })
        })
    };
};
