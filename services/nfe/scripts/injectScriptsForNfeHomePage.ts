import { Device } from "types/ApiTypes";
import { getCurrentUrl, randomInterval } from "./helpers";

/**
 * Injects scripts into the NFe home page to manipulate the DOM.
 */
export const injectScriptsForNfeHomePage = (device: Device, homeNfeUrl: string): string => `
    ${getCurrentUrl()}

    if(currentUrl == "${homeNfeUrl}"){
        ${manipulateTheDomForNfeAccess(device)}
    }
`;

/**
 * Manipulates the DOM to access the NFe.
 */
const manipulateTheDomForNfeAccess = (device: Device): string => `
    ${getAttributes()}
    ${randomInterval()}
    ${addAccessKey(device)}
    ${checkCaptcha()}
    ${startChecks()}
`;

/**
 * Get the attributes needed to access the NFe.
 */
const getAttributes = (): string => `
    let inputAccessKey = document.getElementById('ctl00_ContentPlaceHolder1_txtChaveAcessoResumo');
    let divHcaptcha = document.getElementById('ctl00_ContentPlaceHolder1_pnlBotoesHCaptcha');
    let iframeCaptcha = divHcaptcha.querySelector('iframe');
    let confirmButton = document.getElementById('ctl00_ContentPlaceHolder1_btnConsultarHCaptcha');
`;

/**
 * Injects the access key into the NFe.
 */
const addAccessKey = (device: Device): string => `
    setTimeout(() => {
        inputAccessKey.value = "${device.access_key}";
    }, generateInterval(1230, 3323));
`;

/**
 * Check that the captcha has been resolved.
 */
const checkCaptcha = (): string => `
    function checkCaptcha() {
        let captchaResponse = iframeCaptcha.getAttribute('data-hcaptcha-response');
        
        if (captchaResponse !== "") {
            clearInterval(captchaInterval);
            confirmButton.click();
        }
    }
`;

/**
 * Starts the periodic captcha check.
 */
const startChecks = (): string => `
    (function() {
        captchaInterval = setInterval(checkCaptcha, 1000);
    })();
`;
