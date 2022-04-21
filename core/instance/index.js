import { stateMixin } from "./state.js";
import Observer from "../observer/index.js";

function Vue(options) {
  this._isVue = true;
  this.data = options.data;
  debugger;
  new Observer(this.data);
}

stateMixin(Vue);

export default Vue;
