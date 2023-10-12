export const HeaderStyles = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
  flex: '1',
  gap: '30px',
  backgroundImage: 'url(/bookBackground.jpg)',
  color: '#fff',
  flexDirection: 'column',
  width: '100%',
  padding: '20px',
  textAlign: 'center',
};

export const FiltersBlockStyles = (theme: any) => ({
  display: 'flex',
  gap: '60px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '20px',
  },
});

export const SelectWithTextStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};
