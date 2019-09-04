export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) throw 'Unable to get quote';

      return res.json();
    });
};
