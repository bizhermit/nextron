export declare type ConfigValue = string | number | boolean | Array<ConfigValue> | {
    [key: string]: ConfigValue;
};
export declare type Config<T = {
    [key: string]: ConfigValue;
}> = {
    layout?: {
        color?: string;
        design?: string;
    };
} & T;
export declare type ExecuteProps = {
    rootDirname?: string;
    i18nFilename?: string;
    menubar?: boolean;
    openDevTools?: boolean;
    dev?: {
        port?: number;
        i18nFilename?: string;
        menubar?: boolean;
        openDevTools?: boolean;
    };
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    resizable?: boolean;
    useContentSize?: boolean;
    fullscreen?: boolean;
    fullscreenable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
    closable?: boolean;
    position?: {
        x: number;
        y: number;
    } | "center" | "left-top" | "right-bottom";
    movable?: boolean;
    opacity?: number;
    focusable?: boolean;
    alwaysOnTop?: boolean;
    skipTaskbar?: boolean;
    title?: string;
    frame?: boolean;
    hasShadow?: boolean;
    layoutColor?: string;
    layoutDesign?: string;
    defaultConfig?: Config;
};
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
    setLayoutColor: (color: "light" | "dark") => Promise<string>;
    getLayoutColor: () => string;
    setLayoutDesign: (design: string) => Promise<string>;
    getLayoutDesign: () => string;
    saveConfig: (config: {
        [key: string]: ConfigValue;
    }) => Promise<void>;
    getConfig: <T = {
        [key: string]: ConfigValue;
    }>(key?: string) => T;
    getSession: (key?: string) => any;
    setSession: (key: string, value: any) => void;
    clearSession: (key: string) => void;
};
