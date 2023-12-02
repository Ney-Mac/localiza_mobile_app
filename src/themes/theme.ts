import { DefaultTheme } from "react-native-paper";

export const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0680CA',
        secondary: '#3DB1F8',
        blue: {
            main: '#0680CA',
            second: '#3DB1F8',
            third: '#CEEDFF',
            fourth: '#E5F5FF'
        },
        red: {
            primary: '#DA212A',
            second: '#FF676E',
            third: '#FFDCDE',
            fourth: '#FFF0F1'
        },
        black: {
            primary: '#191919',
            second: '#373737',
            third: '#8F8F8F',
            fourth: '#D0D0D0'
        },
    },
    font: {
        ...DefaultTheme.fonts,
        regular: 'Inter-Regular',
        bold: 'Inter-Bold',
        regularNunito: 'Nunito-Regular'
    }
}

