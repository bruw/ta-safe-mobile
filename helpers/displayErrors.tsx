import { showMessage } from "react-native-flash-message";

const displayErrors = (errors: any) => {
  const fieldKeys: string[] = Object.getOwnPropertyNames(errors);

  const messages: string = fieldKeys
    .map((key: string) => {
      return errors[key];
    })
    .join("\n");

  showMessage({
    message: "Atenção!",
    description: messages,
    type: "danger",
    icon: "warning",
    autoHide: false,
    textStyle: { lineHeight: 22 },
  });
};

export default displayErrors;
