import Main from '../main/main';

type AppProps = {
  cardsAmount: number;
}

function App({cardsAmount}: AppProps): JSX.Element {
  return <Main cardsAmount = {cardsAmount} />;
}

export default App;
