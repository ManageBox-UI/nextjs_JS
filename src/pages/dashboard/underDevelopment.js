import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
// @mui
import { Button, Typography, Container } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { MotionContainer, varBounce } from '../../components/animate';
// assets
import { SeverErrorIllustration } from '../../assets';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

UnderDevelopment.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UnderDevelopment() {
  return (
    <Page title="Geliştirilmeye devam ediyor">
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
GELİŞTİRİLİYOR
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>Bu sayfa yapım aşamasındadır.</Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </m.div>

          <NextLink href="/" passHref>
            <Button size="large" variant="contained">
             Anasayfaya geri dön
            </Button>
          </NextLink>
        </ContentStyle>
      </Container>
    </Page>
  );
}
