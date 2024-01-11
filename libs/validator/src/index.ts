// TODO: This is a sample for exporting library.

export type MyType = {
  foo: string;
  bar: number;
};

export const obj: MyType = {
  foo: 'foo',
  bar: 123,
};

export const str: string = 'てすとすとりんぐ';

export const hoge = async () => {
  return Promise.resolve('hoge');
};
