import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(
        () => {
            //part one initialize
            //if the value is in local storage use it otherwise use initial value
            if (window.localStorage.getItem(key)) {
                return JSON.parse(window.localStorage.getItem(key))
            }
            else {
                JSON.stringify(window.localStorage.setItem(initialValue))
                return initialValue
            }
        }
    );
    //part two: update local storage every time state is updated.
        const setValue = value =>{
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        }

    return [storedValue, setValue]
}