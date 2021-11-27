export const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ]
    case 'DELETE':
      return [
        ...state.filter((product: any) => product.id !== action.payload.id),
      ]
    default:
      return state;
  }

}
export const shoppingCartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
  }
}