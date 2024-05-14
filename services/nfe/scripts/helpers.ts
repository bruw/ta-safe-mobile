/**
 * Get the current url of the view.
 */
export const getCurrentUrl = (): string => `
    currentUrl = window.location.href;
`;

/**
 * Generate a random value within the range.
 */
export const randomInterval = (): string => `
    function generateInterval(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    }
`;


