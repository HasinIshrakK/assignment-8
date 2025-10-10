import nProgress from 'nprogress';
import React, { useEffect } from 'react';
import { useLocation, useNavigation } from 'react-router';
import "nprogress/nprogress.css";
import '../../App.css'

nProgress.configure(
    {
        showSpinner: false,
        speed: 400,
        minimum: 0.1
    }
);
const GlobalProgress = () => {
    const navigation = useNavigation();
    const location = useLocation();
    useEffect(
        () => {
            if (navigation.state === "loading") {
                nProgress.start();
            } else {
                nProgress.done();
            }
        }, [navigation.state, location]
    );
    return null;
};

export default GlobalProgress;