import { JSDOM } from 'jsdom';

declare const global : any;
// declare const window : any;

global.document = new JSDOM('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
