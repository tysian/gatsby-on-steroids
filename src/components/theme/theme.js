/**
 * theme.js
 * Exports theme settings like colors, media queries, fonts, etc.
 */

import { themeColor } from 'data/config';

export const theme = {
    colors: {
        primary: themeColor,
        white: '#ffffff',
        black: '#000000',
        red: '#e74c3c',
        orange: '#e67e22',
        green: '#2ecc71',
        blue: '#3498db',
        purple: '#8e44ad',
    },
    mq: {
        mobile: `@media(max-width: 767px)`,
    },
};
