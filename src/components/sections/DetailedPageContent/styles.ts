export const DetailedPageContentContainer = {
  padding: '20px',
};

export const DetailedInfoBox = (theme: any) => ({
  display: 'flex',
  gap: '40px',
  flex: '1',
  paddingTop: '20px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
});

export const ImageBoxStyles = {
  textAlign: 'center',
};

export const InfoBlock = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  width: '100%',
  gap: '20px',
};

export const SubjectStyles = {
  fontSize: '12px',
  color: '#808080',
};
export const AuthorsStyles = {
  color: '#2F4F4F',
};
