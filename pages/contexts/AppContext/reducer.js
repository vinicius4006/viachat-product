export const reducer = (state, action) => {
    switch(action.type){
      case 'limpar':
        return { ...state, limpar: action.payload, resultado: 369.4};
      case 'mudarResultado':
        return { ...state, resultado: action.payload}
    }
    return { ...state };
  }