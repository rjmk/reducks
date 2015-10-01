export const append = character => {
  return {
    type: 'append', character
  }
};

export const del = () => {
  return {
    type: 'delete'
  }
};

