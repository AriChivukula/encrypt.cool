import "core-js/stable";
import "regenerator-runtime/runtime";

import {
  render,
} from "./website";

window.onload = (): void => {
  render("https://dynamic-ENV_BRANCH.ENV_DOMAIN/graphql/" + "ENV_DOMAIN".replace(".", "-") + "-ENV_BRANCH/");
};
