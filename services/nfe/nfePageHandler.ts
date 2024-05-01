import { Device } from "types/ApiTypes";
import { injectScriptsForNfeHomePage } from "./scripts/injectScriptsForNfeHomePage";
import { injectScriptsForNfeDataExtract } from "./scripts/injectScriptsForNfeDataExtract";

export default class NfePageHandler {
    private static HOME_PAGE_URL: string = 'https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ+gAVw2g=';
    private static GENERAL_DATA_NFE_URL: string = 'https://www.nfe.fazenda.gov.br/portal/consultaResumo.aspx?tipoConteudo=7PhJ+gAVw2g=';
    private readonly device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    /**
     * Returns the URL of the NFe home page.
     */
    public homePageUrl(): string {
        return NfePageHandler.HOME_PAGE_URL;
    }

    /**
     * Returns the URL of the page for viewing the general NFe data.
     */
    public generalDataNfeUrl(): string {
        return NfePageHandler.GENERAL_DATA_NFE_URL;
    }

    /**
     * Returns the scripts needed to manipulate the NFe pages.
     */
    public scripts(): string {
        return `
            ${this.scriptsForHomePage()}
            ${this.scriptsForNfeDataExtraction()}
        `;
    }

    /**
     * Scripts for the NFe home page.
     */
    private scriptsForHomePage(): string {
        return injectScriptsForNfeHomePage(
            this.device,
            NfePageHandler.HOME_PAGE_URL
        );
    }

    /**
     * Scripts for extracting data from NFe.
     */
    private scriptsForNfeDataExtraction(): string {
        return injectScriptsForNfeDataExtract(
            NfePageHandler.GENERAL_DATA_NFE_URL
        );
    }
}