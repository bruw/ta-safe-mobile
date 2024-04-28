import { DeviceContext } from "contexts/DeviceProvider";
import { useContext } from "react";
import { Device } from "types/ApiTypes";
import { injectScriptsForNfeHomePage } from "./scripts/injectScriptsForNfeHomePage";
import { injectScriptsForNfeDataExtract } from "./scripts/injectScriptsForNfeDataExtract";

export default class NfePageHandler {
    private readonly device: Device;
    private readonly homeNfeUrl: string;

    constructor() {
        this.device = useContext(DeviceContext);
        this.homeNfeUrl = 'https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ+gAVw2g=';
    }

    /**
     * Returns the URL of the NFe home page.
     */
    public homeUrl(): string {
        return this.homeNfeUrl;
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
        return injectScriptsForNfeHomePage(this.device, this.homeNfeUrl);
    }

    /**
     * Scripts for extracting data from NFe.
     */
    private scriptsForNfeDataExtraction(): string {
        return injectScriptsForNfeDataExtract();
    }
}