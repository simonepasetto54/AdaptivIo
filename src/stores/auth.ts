import { defineStore } from "pinia";
import { UserManager, UserManagerSettings, User } from "oidc-client-ts";
import { ref } from "vue";

const userManagerSettings: UserManagerSettings = {
    authority: "<authority_url>",
    client_id: "<client_id>",
    redirect_uri: "<redirect_uri>",
    response_type: "code",
    scope: "<scopes>",
    post_logout_redirect_uri: "<post_logout_redirect_uri>",
    automaticSilentRenew: true,
    silent_redirect_uri: "<silent_redirect_uri>",
};

const userManager = new UserManager(userManagerSettings);

export const useOidcStore = defineStore("oidc", () => {
  const user = ref<User | null>(null);

  const login = () => {
    userManager.signinRedirect();
  };

  const logout = () => {
    userManager.signoutRedirect();
  };

  const completeLogin = async () => {
    const userResult = await userManager.signinRedirectCallback();
    user.value = userResult;
  };

  const completeLogout = async () => {
    await userManager.signoutRedirectCallback();
    user.value = null;
  };

  return {
    user,
    login,
    logout,
    completeLogin,
    completeLogout,
  };
});
