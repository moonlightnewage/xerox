import sayHello from './lib/sayHello.js';
import {tabMenu, tabContent} from './lib/tabs.js';
import slideBlock from './lib/slide.js';
import createSpinner from './lib/select.js';
import hover from './lib/hover.js';
import selectNames from './lib/selectNames.js';

$(document).ready(function() {

sayHello();
tabMenu();
tabContent();
slideBlock();
createSpinner('.multiple-select');
hover();
selectNames(8);
    
});