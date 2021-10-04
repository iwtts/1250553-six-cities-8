import Main from '../main/main';

type AppProps = {
  cardsAmount: number;
}

export default function App({cardsAmount}: AppProps): JSX.Element {
  return <Main cardsAmount = {cardsAmount} />;
}

