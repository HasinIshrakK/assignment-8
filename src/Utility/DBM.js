import { toast } from "react-toastify";

const getStorage = () => {
    const storage = localStorage.getItem('ids');
    if (storage) {
        return JSON.parse(storage);
    } else {
        return [];
    };
};

const setToStorage = (id) => {
    const storage = getStorage();
    if (storage.includes(id)) {
        return;
    } else {
        storage.push(id);
        const data = JSON.stringify(storage);
        localStorage.setItem('ids', data);
        toast('App Installed Successfully');
    };
};

const checkStorage = (id) => {
    const storage = getStorage();
    if (storage.includes(id)) {
        return true;
    } else {
        return false;
    };
};

const removeFromStorage = (id) => {
    const storage = getStorage();
    const newStorage = storage.filter(data => data !== id);
    localStorage.setItem('ids', JSON.stringify(newStorage));
};

export { setToStorage, checkStorage, getStorage, removeFromStorage };