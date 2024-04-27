import { getCurrentUrl, randomInterval } from "./helpers";

const previewNfeUrl = 'https://www.nfe.fazenda.gov.br/portal/consultaResumo.aspx?tipoConteudo=7PhJ+gAVw2g=';
const printBaseUrl = 'https://www.nfe.fazenda.gov.br/portal/consultaImpressao.aspx?tipoConsulta=resumo&lp=';

/**
 * Injects scripts into the preview NFe page to manipulate the DOM.
 */
export const injectScriptsForNfePreviewPage = (): string => `
    ${getCurrentUrl()}
   
    if(currentUrl == "${previewNfeUrl}"){
        ${manipulateDomForViewFullDescription()}
    }
`;

/**
 * Manipulate the DOM to visualize the full description of the NFe.
 */
const manipulateDomForViewFullDescription = (): string => `
    ${randomInterval()}

    setTimeout(() => {
        ${getInputParamUrl()}
        ${redirectToPrintNfe()}
    }, generateInterval(1111, 3333));
`;

/**
 * Get the parameters needed to print the NFe.
 */
const getInputParamUrl = (): string => `
    const paramUrl = document.getElementById('ctl00_ContentPlaceHolder1_hdfOpt').value;
`;

/**
 * Redirect navigation to a screen with all the information of the NFe.
 */
const redirectToPrintNfe = (): string => `
    const urlToPrintNfe = "${printBaseUrl}" + paramUrl;
    location.assign(urlToPrintNfe);
`;