export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn;
    },

    loggedInUser(state) {
        return state.auth.user;
    },
};

// async nuxtServerInit({ commit }, { req }) {
//         ...
//         await this.$axios.get(`${api}/${cartId}`)
//             .then((response) => {
//                     ...
//                 }
//                 await commit("cart/clearCart");