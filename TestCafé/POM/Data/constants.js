import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    LOGIN_PAGE: process.env.LOGIN_PAGE,
    BROWSER: process.env.BROWSER
}

export const CREDENTIALS = {
    VALID_CREDENTIALS: {
        VALID_USERNAME: process.env.VALID_USERNAME,
        VALID_PASSWORD: process.env.VALID_PASSWORD
    },

    INVALID_CREDENTIALS: {
        INVALID_USERNAME: process.env.INVALID_USERNAME,
        INVALID_PASSWORD: process.env.INVALID_PASSWORD,
        EMPTY_FIELD: process.env.EMPTY,
        LOCKED_OUT_USERNAME: process.env.LOCKED_USERNAME
    }

}

export const DATA = {

    BILLING_DATA: {
        FIRST_NAME: process.env.FIRST_NAME,
        LAST_NAME: process.env.LAST_NAME,
        POSTAL_CODE: process.env.POSTAL_CODE
    },

    PRODUCT_DATA: {
        BACKPACK: process.env.BACKPACK,
        JACKET: process.env.JACKET,
        TSHIRT: process.env.TSHIRT,
        ONESIE: process.env.ONESIE
    }

}
