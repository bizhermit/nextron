export declare type NextronAccessor = {
    test: () => void;
    fetch: (path: string, params: {
        [key: string]: any;
    }) => Promise<any>;
    language: (locale: string) => {
        [key: string]: any;
    };
    setSize: (params: {
        width?: number;
        height?: number;
        animate?: boolean;
    }) => boolean;
    getSize: () => {
        height: number;
        width: number;
    };
    setAlwaysOnTop: (alwaysOnTop: boolean) => boolean;
    isAlwaysOnTop: () => boolean;
    minimize: () => {
        height: number;
        width: number;
    };
    unminimize: () => {
        height: number;
        width: number;
    };
    isMinimize: () => boolean;
    maximize: () => {
        height: number;
        width: number;
    };
    unmaximize: () => {
        height: number;
        width: number;
    };
    isMaximize: () => boolean;
    setFullScreen: (fullScreen: boolean) => boolean;
    isFullScreen: () => boolean;
    setOpacity: (opacity: number) => number;
    getOpacity: () => number;
    close: () => void;
    destory: () => void;
    focus: () => void;
    blur: () => void;
    hasFocus: () => boolean;
    notification: (title: string, options: NotificationOptions) => Promise<void>;
    setPosition: (params: {
        position: {
            x: number;
            y: number;
        } | "center" | "left-top" | "right-bottom";
        animate?: boolean;
    }) => {
        x: number;
        y: number;
    };
    setTheme: (theme: "light" | "dark") => string;
    getTheme: () => string;
    getSession: (key?: string) => any;
    setSession: (key: string, value: any) => void;
    clearSession: (key: string) => void;
};
declare const nextronAccessor: () => NextronAccessor;
export default nextronAccessor;
export declare const useNextron: () => NextronAccessor;
