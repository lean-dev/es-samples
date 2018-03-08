

//import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.scss';

import Renderer from './renderer';

const renderer = new Renderer();
const greeting = renderer.greeting('Frankfurt/Main');

document.getElementById('greeting').innerHTML = greeting;
