
export const reducer = (state, action) => {
  switch(action.type){
    case 'limpar':
      return { limpar: action.payload, resultado: 369.4};
    case 'mudarResultado':
      return { resultado: action.payload}
  
  }
  return { ...state };
}