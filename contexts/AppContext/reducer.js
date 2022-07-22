
export const reducer = (state, action) => {
  switch(action.type){
    case 'limpar':
      return { limpar: action.payload, resultado: 419.3};
    case 'mudarResultado':
      return { resultado: action.payload}
  
  }
  return { ...state };
}