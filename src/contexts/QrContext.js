import {createContext, useState} from "react";

export const QrContext = createContext('')
export function QrProvider(props)  {
    const [qrValue, setQrValue] = useState('')
    return (
        <QrContext.Provider value={{ qrValue, setQrValue}}>
            {props.children}
        </QrContext.Provider>
    );
}