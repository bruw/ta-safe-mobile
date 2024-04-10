import { showMessage } from "react-native-flash-message";

interface NotifyProps {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    autoHide?: boolean;
}

const notify = ({ type, message, autoHide = true }: NotifyProps) => {
    const colorByType: { [key in NotifyProps['type']]: string } = {
        success: '#52c41a',
        error: '#ff190c',
        info: "#1E92EE",
        warning: '#faad14',
    };

    showMessage({
        icon: "none",
        message: message,
        autoHide: autoHide,
        duration: 6000,
        floating: true,
        backgroundColor: colorByType[type],
        titleStyle: {
            fontWeight: '500'
        }
    });
};

export default notify;