import Head from 'next/head';
import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';


const Home = () => {
  const [actualScreen, setActualScreen] = useState('Total');

  const changeScreen = (screen) => {
    setActualScreen(screen);
  }

  const stickers = [
    { id: 0, name: 'FIF 1', group: 'FIFA', qty: 0 },
    { id: 1, name: 'FIF 2', group: 'FIFA', qty: 0 },
    { id: 2, name: 'FIF 3', group: 'FIFA', qty: 0 },
    { id: 3, name: 'FIF 4', group: 'FIFA', qty: 0 },
    { id: 4, name: 'FIF 5', group: 'FIFA', qty: 0 },
    { id: 5, name: 'FIF 6', group: 'FIFA', qty: 0 },
    { id: 6, name: 'FIF 7', group: 'FIFA', qty: 0 },

    { id: 7, name: 'STA 1', group: 'Estádios', qty: 0 },
    { id: 8, name: 'STA 2', group: 'Estádios', qty: 0 },
    { id: 9, name: 'STA 3', group: 'Estádios', qty: 0 },
    { id: 10, name: 'STA 4', group: 'Estádios', qty: 0 },
    { id: 11, name: 'STA 5', group: 'Estádios', qty: 0 },
    { id: 12, name: 'STA 6', group: 'Estádios', qty: 0 },
    { id: 13, name: 'STA 7', group: 'Estádios', qty: 0 },
    { id: 14, name: 'STA 8', group: 'Estádios', qty: 0 },

    { id: 15, name: 'POS 1', group: 'Cartazes', qty: 0 },
    { id: 16, name: 'POS 2', group: 'Cartazes', qty: 0 },
    { id: 17, name: 'POS 3', group: 'Cartazes', qty: 0 },
    { id: 18, name: 'POS 4', group: 'Cartazes', qty: 0 },
    { id: 19, name: 'POS 5', group: 'Cartazes', qty: 0 },

    { id: 20, name: 'QAT 1', group: 'Qatar', qty: 0 },
    { id: 21, name: 'QAT 2', group: 'Qatar', qty: 0 },
    { id: 22, name: 'QAT 3', group: 'Qatar', qty: 0 },
    { id: 23, name: 'QAT 4', group: 'Qatar', qty: 0 },
    { id: 24, name: 'QAT 5', group: 'Qatar', qty: 0 },
    { id: 25, name: 'QAT 6', group: 'Qatar', qty: 0 },
    { id: 26, name: 'QAT 7', group: 'Qatar', qty: 0 },
    { id: 27, name: 'QAT 8', group: 'Qatar', qty: 0 },
    { id: 28, name: 'QAT 9', group: 'Qatar', qty: 0 },
    { id: 29, name: 'QAT 10', group: 'Qatar', qty: 0 },
    { id: 30, name: 'QAT 11', group: 'Qatar', qty: 0 },
    { id: 31, name: 'QAT 12', group: 'Qatar', qty: 0 },
    { id: 32, name: 'QAT 13', group: 'Qatar', qty: 0 },
    { id: 33, name: 'QAT 14', group: 'Qatar', qty: 0 },
    { id: 34, name: 'QAT 15', group: 'Qatar', qty: 0 },
    { id: 35, name: 'QAT 16', group: 'Qatar', qty: 0 },
    { id: 36, name: 'QAT 17', group: 'Qatar', qty: 0 },
    { id: 37, name: 'QAT 18', group: 'Qatar', qty: 0 },
    { id: 38, name: 'QAT 19', group: 'Qatar', qty: 0 },
    { id: 39, name: 'QAT 20', group: 'Qatar', qty: 0 },

    { id: 40, name: 'ECU 1', group: 'Ecuador', qty: 0 },
    { id: 41, name: 'ECU 2', group: 'Ecuador', qty: 0 },
    { id: 42, name: 'ECU 3', group: 'Ecuador', qty: 0 },
    { id: 43, name: 'ECU 4', group: 'Ecuador', qty: 0 },
    { id: 44, name: 'ECU 5', group: 'Ecuador', qty: 0 },
    { id: 45, name: 'ECU 6', group: 'Ecuador', qty: 0 },
    { id: 46, name: 'ECU 7', group: 'Ecuador', qty: 0 },
    { id: 47, name: 'ECU 8', group: 'Ecuador', qty: 0 },
    { id: 48, name: 'ECU 9', group: 'Ecuador', qty: 0 },
    { id: 49, name: 'ECU 10', group: 'Ecuador', qty: 0 },
    { id: 50, name: 'ECU 11', group: 'Ecuador', qty: 0 },
    { id: 51, name: 'ECU 12', group: 'Ecuador', qty: 0 },
    { id: 52, name: 'ECU 13', group: 'Ecuador', qty: 0 },
    { id: 53, name: 'ECU 14', group: 'Ecuador', qty: 0 },
    { id: 54, name: 'ECU 15', group: 'Ecuador', qty: 0 },
    { id: 55, name: 'ECU 16', group: 'Ecuador', qty: 0 },
    { id: 56, name: 'ECU 17', group: 'Ecuador', qty: 0 },
    { id: 57, name: 'ECU 18', group: 'Ecuador', qty: 0 },
    { id: 58, name: 'ECU 19', group: 'Ecuador', qty: 0 },
    { id: 59, name: 'ECU 20', group: 'Ecuador', qty: 0 },
  ];

  return (
    <>
      <Head>
        <title>Figurinhaz</title>
      </Head>

      <Header />

      <Content stickers={ stickers } />

      <Footer
        screen={ actualScreen }
        changeScreen={ changeScreen }
      />
    </>
  )
}

export default Home;
