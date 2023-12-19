type CamelToSnakeCase<S extends string> = S extends `${infer Head}${infer Tail}`
  ? `${Head extends Uppercase<Head>
      ? "_"
      : ""}${Lowercase<Head>}${CamelToSnakeCase<Tail>}`
  : S;

export type ConvertToSnakeCase<T> = {
  [K in keyof T as CamelToSnakeCase<K & string>]: T[K];
};

type SnakeToCamelCase<S extends string> =
  S extends `${infer Prefix}_${infer Word}${infer Suffix}`
    ? `${Prefix}${Uppercase<Word>}${SnakeToCamelCase<Suffix>}`
    : S;

export type ConvertToCamelCase<T> = {
  [K in keyof T as SnakeToCamelCase<K & string>]: T[K];
};
