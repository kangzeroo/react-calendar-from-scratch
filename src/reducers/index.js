/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import { combineReducers } from "redux";
import templateReducers from "./template/template_reducers";

export default combineReducers({
  template: templateReducers
});
