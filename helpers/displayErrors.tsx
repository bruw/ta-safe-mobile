import { t } from "i18next";
import { showMessage } from "react-native-flash-message";

const displayErrors = (errors: any) => {
  const fieldKeys: string[] = Object.getOwnPropertyNames(errors);

  const messages: string = fieldKeys
    .map((key: string) => {
      return "* " + errors[key];
    })
    .join("\n");

  showMessage({
    message: t("flashMessages.errors.title"),
    description: messages,
    type: "danger",
    autoHide: false,
    textStyle: { lineHeight: 27, fontSize: 16 },
    floating: true,
  });
};

export default displayErrors;
