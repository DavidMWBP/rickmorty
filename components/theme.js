import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: '#212121',
                color: '#FFFFFF'
            },
        },
        MuiIconButton: {
            label: {
                color: '#FFFFFF'
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: 'rgba(255,255,255,0.6)',
                margin: '10px 0px'
            }
        },
        MuiPaginationItem: {
            root: {
                backgroundColor: '#212121'
            }
        }
    },
    palette: {
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#FFFFFF',
        },
        text: {
            primary: '#FFFFFF',
        }
    },
});

export default theme;