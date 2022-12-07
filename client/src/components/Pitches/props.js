export const tabsProps = tabIndex => ({
  value: tabIndex,
  TabIndicatorProps: {
    sx: {
      display: 'none',
    },
  },
  sx: {
    width: 'fit-content',
    m: 'auto',
    borderRadius: '7px',
    border: '1px solid #7b7b7b',
    '& button': {
      bgcolor: '#292626',
      color: '#949292',
      px: '30px',
      fontSize: 'clamp(14px, 4vw, 20px)',
      fontWeight: '700',
      letterSpacing: '1px',
    },
    '& button.Mui-selected': {
      bgcolor: '#f8b500',
      color: 'white',
    },
  },
})

export const shareBtnProps = {
  sx: {
    border: '1px solid #8e8d8d',
    borderRadius: '24px',
    color: '#8e8d8d',
    height: '46px',
    minWidth: '46px',
  },
}

export const likeBtnProps = {
  sx: {
    border: '1px solid #8e8d8d',
    borderRadius: '24px',
    color: '#8e8d8d',
    height: '46px',
    minWidth: '46px',
    px: 2,
  },
}

export const pitchImgProps = (image, alt) => ({
  component: 'img',
  height: '215',
  image,
  alt,
})

export const fulfilledTagProps = {
  variant: 'inherit',
  sx: {
    color: 'white',
    ml: '10px',
    bgcolor: '#363130eb',
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: '8px',
    letterSpacing: 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}
