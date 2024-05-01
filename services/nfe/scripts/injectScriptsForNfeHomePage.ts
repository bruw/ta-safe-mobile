import { Device } from "types/ApiTypes";
import { getCurrentUrl, randomInterval } from "./helpers";

/**
 * Injects scripts into the NFe home page to manipulate the DOM.
 */
export const injectScriptsForNfeHomePage = (device: Device, homePageUrl: string): string => `
    ${getCurrentUrl()}

    if(currentUrl == "${homePageUrl}"){
        ${manipulateTheDomForNfeAccess(device)}
    }
`;

/**
 * Manipulates the DOM to access the NFe.
 */
const manipulateTheDomForNfeAccess = (device: Device): string => `
    ${getAttributes()}
    ${adjustZoomAndVisibility()}
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
    let clearButton = document.getElementById('ctl00_ContentPlaceHolder1_btnLimparHCaptcha');
`;

/**
 * Adjusts page zoom and hides NFe query buttons.
 */
const adjustZoomAndVisibility = (): string => `  
    document.body.style.zoom = "400%";

    let divConsultationInfo = document.getElementById('ctl00_ContentPlaceHolder1_pnlInformacoesConsulta');
    divConsultationInfo.scrollIntoView({ block: "center", inline: "center"});

    divHcaptcha.style.transform = 'scale(' + 4.0 + ')';
    divHcaptcha.style.transformOrigin = '0 0';

    ${hideConsultationButtons}
`;

/**
 * Hides the NFe query buttons.
 */
const hideConsultationButtons = (): string => `
    confirmButton.style.display = 'none';
    clearButton.style.display = 'none';
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