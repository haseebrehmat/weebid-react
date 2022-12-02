export const tabsProps = value => ({
  value,
  TabIndicatorProps: {
    sx: {
      bgcolor: 'white',
    },
  },
  sx: {
    '& button': {
      color: '#949292',
      p: 0,
      mr: '30px',
      fontSize: 'clamp(14px, 4vw, 20px)',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    '& button.Mui-selected': {
      color: 'white',
    },
  },
})
