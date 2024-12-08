// Save state to local storage
export const saveStateToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('weatherAppState', serializedState);
  } catch (error) {
    console.error('Error saving state to local storage:', error);
  }
};

// Load state from local storage
export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('weatherAppState');
    if (serializedState === null) {
      return undefined; // Return undefined to use the initial state
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading state from local storage:', error);
    return undefined;
  }
};
