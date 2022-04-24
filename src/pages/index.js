// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { useRouter } from 'next/router'
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HomePage() {
  const router = useRouter()
  useEffect(()=>{
    router.push('auth/login/')
  },[])
  return (
    <Page title="The starting point for your next project">
      <>
      </>
    </Page>
  );
}
