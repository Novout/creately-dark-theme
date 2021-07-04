export const init = (cbs) => {
  setTimeout(() => {
    cbs.forEach(cb => {
      cb && cb();
    });
  }, 4000);
};