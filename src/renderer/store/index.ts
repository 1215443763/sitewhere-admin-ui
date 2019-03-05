import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { IUser } from "sitewhere-rest-api/dist/model/users-model";
import { ITenant } from "sitewhere-rest-api/dist/model/tenants-model";

Vue.use(Vuex);

/**
 * SiteWhere user interface settings in store.
 */
export interface SiteWhereUiSettings {
  protocol?: string;
  server?: string;
  port?: number;
  jwt?: string;
  user?: IUser;
  authToken?: string;
  authTenants?: any;
  settings?: any;
  selectedTenant?: ITenant;
  currentSection?: string;
  loading?: boolean;
  error?: boolean;
}

const store: StoreOptions<SiteWhereUiSettings> = {
  plugins: [createPersistedState()],
  state: {
    protocol: "http",
    server: "localhost",
    port: 8080,
    jwt: undefined,
    user: undefined,
    authToken: undefined,
    authTenants: null,
    settings: null,
    selectedTenant: undefined,
    currentSection: undefined,
    loading: false,
    error: undefined
  },
  mutations: {
    // Set server protocol.
    protocol(state, protocol) {
      state.protocol = protocol;
    },
    // Set server hostname.
    server(state, server) {
      state.server = server;
    },

    // Set server port.
    port(state, port) {
      state.port = port;
    },

    // Set current JWT.
    jwt(state, jwt) {
      state.jwt = jwt;
    },

    // Set currently logged in user.
    user(state, user) {
      state.user = user;
    },

    // Set authentication token for logged in user.
    authToken(state, token) {
      state.authToken = token;
    },

    // Set list of authorized tenants.
    authTenants(state, tenants) {
      state.authTenants = tenants;
    },

    // Store persistent user settings.
    settings(state, settings) {
      state.settings = settings;
    },

    // Set selected tenant.
    selectedTenant(state, selectedTenant) {
      state.selectedTenant = selectedTenant;
    },

    // Set current app section.
    currentSection(state, section) {
      state.currentSection = section;
    },

    // Start loading indicator.
    startLoading(state) {
      state.loading = true;
    },

    // Stop loading indicator.
    stopLoading(state) {
      state.loading = false;
    },

    // Set error indicator.
    error(state, error) {
      state.error = error;
    },

    // Log out of the application.
    logOut(state) {
      state.user = undefined;
      state.authToken = undefined;
      state.authTenants = undefined;
      state.currentSection = undefined;
      state.error = undefined;
    }
  },

  getters: {
    protocol: state => {
      return state.protocol;
    },

    server: state => {
      return state.server;
    },

    port: state => {
      return state.port;
    },

    jwt: state => {
      return state.jwt;
    },

    user: state => {
      return state.user;
    },

    authToken: state => {
      return state.authToken;
    },

    authTenants: state => {
      return state.authTenants;
    },

    selectedTenant: state => {
      return state.selectedTenant;
    },

    currentSection: state => {
      return state.currentSection;
    },

    loading: state => {
      return state.loading;
    },

    error: state => {
      return state.error;
    }
  }
};

export default new Vuex.Store<SiteWhereUiSettings>(store);
