export default () => {
  return {
    user: JSON.parse(window.localStorage.getItem('user') || 'null'),
  };
};
