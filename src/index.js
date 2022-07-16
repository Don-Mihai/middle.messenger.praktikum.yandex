import { sum } from "./modules/sum";
import './style.css';

const root = document.querySelector('#root');

root.textContent = sum(1,2,3, -2)