import {useState, useEffect} from 'react';
import {storage} from '../firebase/FirebaseStoreConfig'

const UseStorage = (file) =>{
    const [ progress, setProgress] = useState(0);
    const [ error, setError] = useState(null);
    const [ url, setUrl] = useState(null);

    useEffect(() => {
    const storageRef = storage.ref(file.name);
    debugger
    
    storageRef.put(file).on('state_changed', (snap)=>{
        let percentage  = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
    }, (error) =>{
        setError(error);
    }, async () =>{
        const url = await storageRef.getDownloadURL();
        setUrl(url);

    })
    }, [file]);

    return {progress, url, error}
}

export default  UseStorage;