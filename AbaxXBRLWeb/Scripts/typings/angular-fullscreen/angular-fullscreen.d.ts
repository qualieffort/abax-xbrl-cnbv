declare module ng.fullscreen {
    interface IFullScreen {
        all(): void;
        cancel(): void;
        isEnabled(): boolean;
        toggleAll(): void;
        isSupported(): boolean;
    }
}