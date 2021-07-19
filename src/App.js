import './App.css';
import BgImage from './components/BgImage';
import Check from './components/Check';
import Search from './components/Search';
import MainLayout from './layout/MainLayout';
import { Grid } from '@material-ui/core/';
import { Container } from '@material-ui/core';
import Price from './components/Price';
import Review from './components/Review';
import PriceRange from './components/PriceRange'
import Size from './components/Size';
import PriceRadio from './components/PriceRadio';
import Footer from './components/Footer';
import SocialNetworks from './components/SocialNetworks';
import CardBox from './components/CardBox';
import Box from '@material-ui/core/Box';
import Colors from './components/Colors';
import Pages from './components/Pages';
import Categories from './components/Categories';



function App() {
  return (
    <div>
      <MainLayout />
      <BgImage />
      <Container >
        <Grid container>

          <Grid item xs={5}>
            <Categories />
            <Search />
            <Check />
            <Review />
            <PriceRadio />
            <Price />
            <PriceRange />
            <Size />
            <Colors />
          </Grid>



          <Grid item xs={7}>
            <Pages />
            <CardBox />
          </Grid>
        </Grid>


      </Container>
      <SocialNetworks />
      <Footer />

    </div>
  );
}

export default App;
