/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import { TEMPLATE_INCREMENT } from "../action_types";

export const templateIncrementCounter = count => dispatch => {
  return dispatch({
    type: TEMPLATE_INCREMENT,
    payload: count
  });
};
