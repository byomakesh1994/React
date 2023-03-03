import { setProduct, setStatus } from "./ProductReducer";
import { STATUS } from "./ProductReducer";
export function fetchProduct() {
  return async function fetchdata(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProduct(data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log("ERROR");
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
