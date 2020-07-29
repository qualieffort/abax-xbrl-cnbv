// Intro.js (https://github.com/usablica/intro.js)
declare module intro.js {
    // Future TS syntax
    // type position = 'left'|'right'|'top'|'bottom'

    interface IntroJSOptions {
        steps?: IntroJSStepOptions[];
        nextLabel?: string;
        prevLabel?: string;
        skipLabel?: string;
        doneLabel?: string;
        tooltipPosition?: string; // position
        tooltipClass?: string;
        highlightClass?: string;
        exitOnEsc?: boolean;
        exitOnOverlayClick?: boolean;
        showStepNumbers?: boolean;
        keyboardNavigation?: boolean;
        showButtons?: boolean;
        showBullets?: boolean;
        showProgress?: boolean;
        scrollToElement?: boolean;
        overlayOpacity?: number;
        disableInteraction?: boolean;
    }

    interface IntroJSStepOptions {
        element?: string;
        intro?: string;
        position?: string; // position
    }

    interface IntroJS {
        gotToStep(index: number): IntroJS;
        start(): IntroJS;
        previousStep(): IntroJS;
        setOptions(options: IntroJSOptions): IntroJS;

        setOption(option: string, value: string): IntroJS;
        setOption(option: string, value: number): IntroJS;
        setOption(option: string, value: boolean): IntroJS;
    }

    interface IntroJsStatic {
        (targetElement?: string): IntroJS;
    }
}
declare var introJs: intro.js.IntroJsStatic;
declare module "intro.js" {
    export = introJs;
} 