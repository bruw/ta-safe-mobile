import { getCurrentUrl, randomInterval } from "./helpers";

const viewNfeUrl = 'https://www.nfe.fazenda.gov.br/portal/consultaResumo.aspx?tipoConteudo=7PhJ+gAVw2g=';

/**
 * Inject scripts into the NFe view to extract informations.
 */
export const injectScriptsForNfeDataExtract = (): string => `
    ${getCurrentUrl()}
   
    if(currentUrl == "${viewNfeUrl}"){
        ${randomInterval()}
        ${manipulateDomForNfeDataExtract()}
    }
`;

/**
 * Manipulate the DOM to obtain the necessary information from the NFe.
 */
const manipulateDomForNfeDataExtract = (): string => `
    setTimeout(() => {
        ${extractConsumerInfoFromNfe()}
        ${extractProductsInfoFromNfe()}
        ${sendNfeDataToReactNative()}
    }, generateInterval(1011, 3209));
`;

/**
 * Get consumer information from NFe.
 */
const extractConsumerInfoFromNfe = (): string => `
    const consumerData = document.querySelectorAll("#NFe fieldset tr")[2].innerText;
`;

/**
 * Obtain information on the products described in the Nfe.
 */
const extractProductsInfoFromNfe = (): string => `
    const tds = document.querySelectorAll('.fixo-prod-serv-descricao');
    let productsData = ""; 

    tds.forEach(td => {
        productsData += td.innerText + "\\n";
    });
`;

/**
 * Sends NFe data to React Native.
 */
const sendNfeDataToReactNative = (): string => `
    window.ReactNativeWebView.postMessage(
        JSON.stringify({ 
            consumer: consumerData,
            products: productsData 
        })
    );
`;

