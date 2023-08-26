const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  padding: '35px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#121212',
  borderStyle: 'dashed',
  backgroundColor: 'rgba(18, 18, 18, 0.1)',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#121212',
};

const acceptStyle = {
  borderColor: '#121212',
};

const rejectStyle = {
  borderColor: '#E2E2E2',
};

export { baseStyle, focusedStyle, acceptStyle, rejectStyle };
