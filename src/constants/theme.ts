export const theme = {
  colors: {
    background: '#fff',
    primary: '#ff3131',
    secondary: '#f6f6f6',
    border: '#e6e6e6',
    header: {
      text: '#030303',
    },
    calendar: {
      eventCell: '#ebecff',
      selectedCell: '#b3b7ff',
      text: '#d3d3d3',
    },
  },
  sizes: {
    calendar: {
      dayList: 400,
    },
  },
};

export type AppTheme = typeof theme;
