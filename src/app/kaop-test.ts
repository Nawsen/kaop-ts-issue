import { beforeMethod } from 'kaop-ts';

export function log() {
  return beforeMethod(meta => {
    console.log('annotation logging...');
  });
}
