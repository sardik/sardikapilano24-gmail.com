import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer WP8Adl-uvBlEksZjO_6YuokfCfNIQfdiWfM95iqsfS1RMNZa6mie0bvC7Geto69oEprEKBOAg6cEJJVgRHpewbiTtjkmRb_GFcop1hUnsRgkhDditN82r3ihbjGFXnYx'
    }
});
