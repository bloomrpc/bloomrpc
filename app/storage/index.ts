import {clearEditor} from './editor';
import {clearImportPaths} from './importPaths';
import {clearTLS} from './tls';


export * from './editor';
export * from './importPaths';
export * from './tls';


export function clearAll() {
  clearEditor();
  clearImportPaths();
  clearTLS();
}