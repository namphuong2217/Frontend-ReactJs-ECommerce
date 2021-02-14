import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

//filter can only receive data by 1: React Components or 2: Inside Context.Provider

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    //start new section
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    // console.log(maxPrice)
    //end new section

    // must copy ...action.payload. Otherwise
    //  all_products will point to a memory reference where the data has changed/filtered
    //copy the value. Normally React will point to memory location of payload
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  // this take place via useEffect, via change of UPDATE_SORT
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "lowest-price") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "highest-price") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }

  // this will lead to FILTER_PRODUCTS
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    //[name] access the variable dynamically
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  // kick off on 2-level
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    //filter the original data
    let temp = [...all_products];

    if (text) {
      temp = temp.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }

    if (category !== "all") {
      temp = temp.filter((product) => product.category === category);
    }

    if (company !== "all") {
      temp = temp.filter((product) => product.company === company);
    }

    if (color !== "all") {
      temp = temp.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    temp = temp.filter((product)=> product.price < price)

    if (shipping) {
      temp = temp.filter((product)=>product.shipping === true);
    }
    return { ...state, filtered_products: temp };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  return state;
  // throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
