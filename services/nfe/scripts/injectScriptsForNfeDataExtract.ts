import { getCurrentUrl, randomInterval } from "./helpers";

/**
 * Inject scripts into the NFe view to extract informations.
 */
export const injectScriptsForNfeDataExtract = (generalDataNfeUrl: string): string => `
    ${getCurrentUrl()}
   
    if(currentUrl == "${generalDataNfeUrl}"){
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
    const consumerTable = document.querySelector('#NFe fieldset:nth-child(3)');

    const consumer_cpf = consumerTable.querySelector('.col-5 span').innerText;
    const consumer_name = consumerTable.querySelector('.col-2 span').innerText;
`;

/**
 * Obtain information on the products described in the Nfe.
 */
const extractProductsInfoFromNfe = (): string => `
    const tds = document.querySelectorAll('.fixo-prod-serv-descricao');
    let productsData = ""; 

    tds.forEach(td => {
        const span = td.querySelector('span');
       
        const spanContent = span.outerHTML;
        productsData += spanContent;
    });
`;

/**
 * Sends NFe data to React Native.
 */
const sendNfeDataToReactNative = (): string => `
    window.ReactNativeWebView.postMessage(
        JSON.stringify({ 
            cpf: consumer_cpf,
            name: consumer_name,
            products: productsData 
        })
    );
`;

