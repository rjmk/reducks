import xhr from 'xhr';

const append = gif => {
  return {
    type: 'append', gif
  };
};

export const del = () => {
  return {
    type: 'delete'
  };
};

const getData = gif => {
  return dispatch => xhr({ method: 'GET', uri: gif }, (err, res) => {
     const data = JSON.parse(res.body);
     const gifUrl = data.data[0].images.fixed_height.url;
     dispatch(append(gifUrl));
  });
};

export const getGiff = gif => {
  const createUri = (gif) => `http://api.giphy.com/v1/gifs/search?q=funny+${gif}&api_key=dc6zaTOxFJmzC`;
  return dispatch => {
    const uri = createUri(gif);
    return dispatch(getData(uri));
  };
};
