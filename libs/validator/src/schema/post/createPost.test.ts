import { describe, test, expect } from 'vitest';
import { createPostSchema } from './createPost';

describe('正しい値を入力した場合、エラーにならない', () => {
  test.each(['a', 'a'.repeat(128), 'a'.repeat(255)])(
    'contentが文字列、且つ文字数が境界値内の場合',
    (value) => {
      expect(() =>
        createPostSchema.parse({
          input: {
            content: value,
          },
        })
      ).not.toThrow();
    }
  );
});

describe('正しくない値を入力した場合、エラーになる', () => {
  test.each(['', 'a'.repeat(256)])(
    'contentが文字列、且つ文字数が境界値外の場合',
    (value) => {
      expect(() =>
        createPostSchema.parse({
          input: {
            content: value,
          },
        })
      ).toThrow();
    }
  );

  test.each([1, true, {}])('contentが文字列以外の場合', (value) => {
    expect(() =>
      createPostSchema.parse({
        input: {
          content: value,
        },
      })
    ).toThrow();
  });
});
