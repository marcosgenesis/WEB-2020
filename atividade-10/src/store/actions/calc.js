export const SET_NUM1 = 'SET_NUM1';
export const SET_NUM2 = 'SET_NUM2';

export function setNum1(payload) {
  return {
    type: SET_NUM1,
    payload,
  };
}
export function setNum2(payload) {
  return {
    type: SET_NUM2,
    payload,
  };
}