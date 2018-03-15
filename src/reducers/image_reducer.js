const INITIAL_STATE = { total: 0, hits: [] }

export const (state, action) => {
  switch(action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        total: action.images.total,
        hits: action.images.hits
      }
    default:
      state;
  }
};
