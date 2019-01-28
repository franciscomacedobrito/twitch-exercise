export const environment = {
  production: false
};

export const clientConfig = {
  clientId: 'xafv9s41pz95a4yq6ynq4vuux8gfcq',
  clientSecret: '5niapv6xojjvvlhmkr227mpbb9hctw',
  grant_type: 'client_credentials'
};

export const backendConfig = {
  host: 'https://api.twitch.tv/',
  api: {
    new: '/helix',
    v5: '/kraken'
  },
  oAuth: 'https://id.twitch.tv/oauth2'
};

export const authorization = {
  type: 'Bearer'
};
