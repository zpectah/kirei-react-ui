export default {
  import: `import { Typography } from 'components';`,
  html: `<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />`,
  theme: (fontFamily: string) => `const theme = {
  typography: {
    fontFamily: '${fontFamily}',
  },
};`,
  variant: {
    headings: `<Typography variant="h1">...</Typography>
<Typography variant="h2">...</Typography>
<Typography variant="h3">...</Typography>
<Typography variant="h4">...</Typography>
<Typography variant="h5">...</Typography>
<Typography variant="h6">...</Typography>
<Typography variant="subtitle1">...</Typography>
<Typography variant="subtitle2">...</Typography>`,
    common: `<Typography variant="body1">...</Typography>
<Typography variant="body2">...</Typography>
<Typography variant="caption">...</Typography>
<Typography variant="overline">...</Typography>`,
    shapes: `<Typography variant="shapeSmall">...</Typography>
<Typography variant="shapeMedium">...</Typography>
<Typography variant="shapeLarge">...</Typography>`,
  },
  colors: {
    brand: `<Typography color="primary">...</Typography>
<Typography color="secondary">...</Typography>
<Typography color="tertiary">...</Typography>`,
    emotion: `<Typography color="success">...</Typography>
<Typography color="info">...</Typography>
<Typography color="warning">...</Typography>
<Typography color="error">...</Typography>
`,
    typography: `<Typography color="body">...</Typography>
<Typography color="muted">...</Typography>
<Typography color="disabled">...</Typography>
`,
    neutral: `<Typography color="dark">...</Typography>
<Typography color="neutral">...</Typography>
<Typography color="light">...</Typography>
<Typography color="inverted">...</Typography>
`,
  },
  formatting: {
    isTruncated: `<Typography isTruncated>...</Typography>`,
  },
};
