export const loadState = () => {
  try {
    const serealizedState = localStorage.getItem('state');
    if (serealizedState == null) {
      return undefined;
    }
    return JSON.parse(serealizedState);
  } catch (err) {
    console.log('loadState Error', err);
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serealizedState = JSON.stringify(state);
    localStorage.setItem('state', serealizedState);
  } catch (err) {
    console.log('saveState Error', err);
  }
}
