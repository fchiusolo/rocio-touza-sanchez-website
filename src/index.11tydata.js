module.exports = {
  eleventyComputed: {
    t: (data) => {
      return data.lang === 'es' ? data.es : data.en;
    },
    imagePath: (data) => {
      return data.lang === 'es' ? '' : '../';
    },
    altLangUrl: (data) => {
      return data.lang === 'es' ? '/en/' : '/';
    }
  }
};
