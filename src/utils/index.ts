

export const COLORS = {
    black: '#344054',
    pink: '#6941C6',
    lightPink: "#F9F5FF",
    gray: '#70707B',
    red: '#F04438',
    white: 'white',
    grey: '#FAFAFA'

};
export const SIZES = {
    // global sizes
    base: 8,
    font: 16,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: "1.87rem",
    h1: "1rem",
    h2: "0.875rem",
    h3: "0.75rem",
    body1: "1rem",
    body2: "0.875rem",
    body3: "0.75rem",

};
export const FONTS = {
    largeTitle: { fontWeight: 500, fontSize: SIZES.largeTitle, color: COLORS.black, lineHeight: '2.37rem' },
    h1: {  fontSize: SIZES.h1,fontWeight: 700, color: COLORS.black,lineHeight: '1.5rem' },
    h2: {  fontSize: SIZES.h2,fontWeight: 700,  color: COLORS.black,lineHeight: '1.25rem' },
    h3: {  fontSize: SIZES.h3,fontWeight: 700, color: COLORS.black,lineHeight: '1.125rem' },
    body1: {  fontSize: SIZES.body1,fontWeight: 500,  color: COLORS.black,lineHeight: '1.5rem' },
    body2: {  fontSize: SIZES.body2,fontWeight: 500, color: COLORS.black,lineHeight: '1.25rem' },
    body3: {  fontSize: SIZES.body3,fontWeight: 500, color: COLORS.black,lineHeight: '1.125rem' },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;