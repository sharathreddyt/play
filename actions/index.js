export const NUMBER_OF_VISITS = 'NUMBER_OF_VISITS';

export const getData = () => ({
  type: 'APP_DATA',
  data: 'empty',
});

export const incrementVisits = () => {
  return {
    type: NUMBER_OF_VISITS,
  };
};
