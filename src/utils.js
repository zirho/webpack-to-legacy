import { v4 } from 'node-uuid'

export const increase = (num) => {
  return num + 1;
}

export const decrease = (num) => {
  return num - 1;
}

export const getUUID = () => {
  return v4();
}
