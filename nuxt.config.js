require("dotenv").config();
export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'furniture',
        titleTemplate: 'Hummer | %s',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Quality executive furnitures but very affordable' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap',
            },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~plugins/axios',
        '~/plugins/vuelidate',

    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,



    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/apollo',
        '@nuxtjs/markdownit',
        '@nuxtjs/toast',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv',
    ],

    toast: {
        duration: 9000,
        position: 'bottom-center',
        action: {
            text: 'Okay',
            onClick: (e, toastObject) => {
                toastObject.goAway(0);
            }
        }
    },

    markdownit: {
        injected: true,
    },

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: process.env.GRAPHQL_URL || 'http://localhost:1337/graphql'
            }
        }
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_AUTH_URL || "http://localhost:1337"
    },

    /*
     ** Auth module configuration
     */
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/local',
                        method: 'post',
                        propertyName: 'jwt'
                    },
                    user: {
                        url: 'users/me',
                        method: 'get',
                        propertyName: false
                    },
                    logout: false
                }
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}