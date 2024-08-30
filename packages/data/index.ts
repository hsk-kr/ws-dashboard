import { UnwrapData, WrapData } from '@ws-dashboard/types/data';

export const wrapData: WrapData = (type, payload) => {
  if (type === 'endpointData') {
    return JSON.stringify({ type, payload });
  }

  return '';
};

export const unwrapData: UnwrapData = (data) => {
  return JSON.parse(data);
};
