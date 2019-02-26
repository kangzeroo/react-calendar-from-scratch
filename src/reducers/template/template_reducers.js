/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import { store } from "redux";
import { TEMPLATE_INCREMENT } from "../../actions/action_types";

const INITIAL_STATE = {
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEMPLATE_INCREMENT: {
      const newState = {
        ...state,
        count: state.count + action.payload,
      };
      console.log(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};
