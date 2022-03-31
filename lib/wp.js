import WPAPI from 'wpapi'

const wp = new WPAPI({ endpoint: process.env.NEXT_PUBLIC_WP_ENDPOINT });


export default wp;