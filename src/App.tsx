import './styles.scss';
import PNG from './react-logo.png';
import SVG from './vercel.svg';
import { Counter } from './components';

const App = () => {
  return (
    <>
      <h1>
        Hello 7 Webpack-React-TS - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={PNG} alt="React Logo" />
      <img src={SVG} alt="Vercel Logo" />
      <Counter />
    </>
  );
};

export default App;
