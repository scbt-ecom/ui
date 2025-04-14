export type DiscriminatedUnion<
  Discriminator extends keyof Union,
  Union extends { [Key in Discriminator]: unknown }
> = Union extends { [Key in Discriminator]: infer Value }
  ? Value extends Union[Discriminator]
    ? Extract<Union, { [Key in Discriminator]: Value }>
    : never
  : never
