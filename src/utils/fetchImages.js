import axios from 'axios';

const fetch = async (q, page) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '35262947-7b4d084d7b454f8881faebde2';
  const response = await axios.get(URL, {
    params: {
      key: KEY,
      q: `${q}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safeSearch: true,
      per_page: 12,
      page: `${page}`,
    },
  });
  return response.data;
};

const getPictures = { fetch };

export default getPictures;
