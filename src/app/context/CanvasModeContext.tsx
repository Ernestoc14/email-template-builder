"use client";
import { createContext, useContext, useState } from 'react';

interface CanvasModeContextProps {
    mode: boolean
    setMode: (mode: boolean) => void
}

const CanvasModeContext = createContext<CanvasModeContextProps | undefined>(undefined);

export function CanvasModeProvider({ children }:{children: React.ReactNode}) {
    const [mode, setMode] = useState<boolean>(true);

    return (
        <CanvasModeContext.Provider value={{mode, setMode}}>
            {children}
        </CanvasModeContext.Provider>
    );
}

export function useCanvasModeContext() {
    const context = useContext(CanvasModeContext);

    if (context === undefined) {
        throw new Error('useSharedState debe ser usado dentro de un SharedStateProvider');
    }

    return context;
}