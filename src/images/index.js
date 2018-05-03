import bitcoin from './bitcoin.png';
import btcash from './btcash.jpeg';
import cardano from './cardano.jpg';
import eos from './eos.jpg';
import ethereum from './ethereum.png';
import litecoin from './litecoin.png';
import neo from './neo.png';
import ripple from './ripple.png';
import stellar from './stellar.jpg';
import trx from './trx.svg';

export default function getImage(x){
    switch(x){
      case 'Bitcoin':
        return bitcoin;
      case 'Ethereum':
        return ethereum;
      case 'Ripple':
        return ripple;
      case 'Bitcoin Cash':
        return btcash;
      case "EOS":
        return eos;
      case "Cardano":
        return cardano;
      case "Litecoin":
        return litecoin;
      case "Stellar":
        return stellar;
      case "TRON":
        return trx;
      case "NEO":
        return neo;
    }
}