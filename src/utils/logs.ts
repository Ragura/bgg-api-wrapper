import { writeFileSync } from 'node:fs';

export function writeLog(name: string, data: any, json = true) {
  if (process.env.NODE_ENV !== 'dev')
    return
  if (json)
    data = JSON.stringify(data, undefined, 2);
  writeFileSync(`logs/${name}`, data);
}