import { useState, useEffect } from 'react';

export const useFetch = (url) => {


    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        setstate({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setstate({

                    data: data,
                    loading: false,
                    error: null
                })
            })
            .catch(() => {
                setstate({

                    data: null,
                    loading: false,
                    error: 'Error, check your url'
                })
            })
    }, [url])
    return state;
}
