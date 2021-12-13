export default {

    Company: {
        fqdn: 'watershed.global',
        tld: '.global',
        name: 'watershed',
        title: 'watershed.global',
        slogan: 'We design to help',
        Meta: {
            description: 'watershed.global helps design products and services for crypto and blockchain.',
        }
    },

    PRODUCTS: {

    },

    forPage(id) {
        return {
            Company: this.Company,
            Product: this.PRODUCTS[id],
        };
    }
}