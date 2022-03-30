import WPAPI from 'wpapi'

const wp = new WPAPI({ endpoint: process.env.WP_SITE_ADRESS });

export default wp;