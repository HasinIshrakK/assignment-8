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
        return toast('No needed');
    } else {
        storage.push(id);
        const data = JSON.stringify(storage);
        localStorage.setItem('ids', data);
        toast('App Installed Successfully');
    };
};

export default setToStorage;