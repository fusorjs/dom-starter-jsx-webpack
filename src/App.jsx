import { wrap, logo } from "./App.module.css";
import logoSvg from "./logo.svg";

const CountingButton = ({ count = 0 }) => (
  <button click_e_update={() => (count += 1)}>
    Clicked {() => count} times
  </button>
);

export const App = () => (
  <div class={wrap}>
    <img class={logo} src={logoSvg} />
    <h1>JSX Webpack</h1>
    <p>Three counting buttons</p>
    <CountingButton />
    <CountingButton count={22} />
    <CountingButton count={333} />
    <p>
      <a target="_blank" href="https://github.com/fusorjs/dom">
        Fusor
      </a>
    </p>
  </div>
);
