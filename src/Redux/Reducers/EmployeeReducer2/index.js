
const INIT_STATE = {games:'1'};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'EVENT_SET_EVENTS': {
      return {}
    }
    case 'EVENT_SET_EVENT': {
      return {}
    }
    case 'EVENT_DESTROY_EVENT':{
      return {}
    }
    default:
      return state;
  }
}
