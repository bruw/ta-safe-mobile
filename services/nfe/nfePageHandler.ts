import { DeviceContext } from "contexts/DeviceProvider";
import { useContext } from "react";
import { Device } from "types/ApiTypes";
import { injectScriptsForNfeHomePage } from "./scripts/injectScriptsForNfeHomePage";
import { injectScriptsForNfePreviewPage } from "./scripts/injectScriptsForNfePreviewPage";

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
            ${this.scriptsForPreviewPage()}
        `;
    }

    /**
     * Scripts for the NFe home page.
     */
    private scriptsForHomePage(): string {
        return injectScriptsForNfeHomePage(this.device, this.homeNfeUrl);
    }

    /**
     * Scripts for the NFe preview page.
     */
    private scriptsForPreviewPage(): string {
        return injectScriptsForNfePreviewPage();
    }
}