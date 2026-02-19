export { };

declare global {
    interface Window {
        ipcRenderer: {
            /* eslint-disable @typescript-eslint/no-explicit-any */
            on(channel: string, listener: (event: any, ...args: any[]) => void): void;
            off(channel: string, listener: (event: any, ...args: any[]) => void): void;
            send(channel: string, ...args: any[]): void;
            invoke(channel: string, ...args: any[]): Promise<any>;
            /* eslint-enable @typescript-eslint/no-explicit-any */
        };
    }
}
