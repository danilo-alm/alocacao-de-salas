
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TipoSala
 * 
 */
export type TipoSala = $Result.DefaultSelection<Prisma.$TipoSalaPayload>
/**
 * Model Bloco
 * 
 */
export type Bloco = $Result.DefaultSelection<Prisma.$BlocoPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model Alocacao
 * 
 */
export type Alocacao = $Result.DefaultSelection<Prisma.$AlocacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TipoSalas
 * const tipoSalas = await prisma.tipoSala.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TipoSalas
   * const tipoSalas = await prisma.tipoSala.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tipoSala`: Exposes CRUD operations for the **TipoSala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoSalas
    * const tipoSalas = await prisma.tipoSala.findMany()
    * ```
    */
  get tipoSala(): Prisma.TipoSalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloco`: Exposes CRUD operations for the **Bloco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocos
    * const blocos = await prisma.bloco.findMany()
    * ```
    */
  get bloco(): Prisma.BlocoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alocacao`: Exposes CRUD operations for the **Alocacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alocacaos
    * const alocacaos = await prisma.alocacao.findMany()
    * ```
    */
  get alocacao(): Prisma.AlocacaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TipoSala: 'TipoSala',
    Bloco: 'Bloco',
    Sala: 'Sala',
    Disciplina: 'Disciplina',
    Alocacao: 'Alocacao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tipoSala" | "bloco" | "sala" | "disciplina" | "alocacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipoSala: {
        payload: Prisma.$TipoSalaPayload<ExtArgs>
        fields: Prisma.TipoSalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoSalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoSalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload>
          }
          findFirst: {
            args: Prisma.TipoSalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoSalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload>
          }
          findMany: {
            args: Prisma.TipoSalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload>[]
          }
          create: {
            args: Prisma.TipoSalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload>
          }
          createMany: {
            args: Prisma.TipoSalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoSalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload>
          }
          update: {
            args: Prisma.TipoSalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload>
          }
          deleteMany: {
            args: Prisma.TipoSalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoSalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoSalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoSalaPayload>
          }
          aggregate: {
            args: Prisma.TipoSalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoSala>
          }
          groupBy: {
            args: Prisma.TipoSalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoSalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoSalaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoSalaCountAggregateOutputType> | number
          }
        }
      }
      Bloco: {
        payload: Prisma.$BlocoPayload<ExtArgs>
        fields: Prisma.BlocoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlocoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlocoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload>
          }
          findFirst: {
            args: Prisma.BlocoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlocoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload>
          }
          findMany: {
            args: Prisma.BlocoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload>[]
          }
          create: {
            args: Prisma.BlocoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload>
          }
          createMany: {
            args: Prisma.BlocoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlocoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload>
          }
          update: {
            args: Prisma.BlocoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload>
          }
          deleteMany: {
            args: Prisma.BlocoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlocoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlocoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocoPayload>
          }
          aggregate: {
            args: Prisma.BlocoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloco>
          }
          groupBy: {
            args: Prisma.BlocoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlocoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlocoCountArgs<ExtArgs>
            result: $Utils.Optional<BlocoCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      Alocacao: {
        payload: Prisma.$AlocacaoPayload<ExtArgs>
        fields: Prisma.AlocacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlocacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlocacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload>
          }
          findFirst: {
            args: Prisma.AlocacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlocacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload>
          }
          findMany: {
            args: Prisma.AlocacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload>[]
          }
          create: {
            args: Prisma.AlocacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload>
          }
          createMany: {
            args: Prisma.AlocacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlocacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload>
          }
          update: {
            args: Prisma.AlocacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload>
          }
          deleteMany: {
            args: Prisma.AlocacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlocacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlocacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoPayload>
          }
          aggregate: {
            args: Prisma.AlocacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlocacao>
          }
          groupBy: {
            args: Prisma.AlocacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlocacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlocacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AlocacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tipoSala?: TipoSalaOmit
    bloco?: BlocoOmit
    sala?: SalaOmit
    disciplina?: DisciplinaOmit
    alocacao?: AlocacaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TipoSalaCountOutputType
   */

  export type TipoSalaCountOutputType = {
    Salas: number
  }

  export type TipoSalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Salas?: boolean | TipoSalaCountOutputTypeCountSalasArgs
  }

  // Custom InputTypes
  /**
   * TipoSalaCountOutputType without action
   */
  export type TipoSalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSalaCountOutputType
     */
    select?: TipoSalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoSalaCountOutputType without action
   */
  export type TipoSalaCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }


  /**
   * Count Type BlocoCountOutputType
   */

  export type BlocoCountOutputType = {
    Salas: number
  }

  export type BlocoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Salas?: boolean | BlocoCountOutputTypeCountSalasArgs
  }

  // Custom InputTypes
  /**
   * BlocoCountOutputType without action
   */
  export type BlocoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocoCountOutputType
     */
    select?: BlocoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlocoCountOutputType without action
   */
  export type BlocoCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    Alocacoes: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alocacoes?: boolean | SalaCountOutputTypeCountAlocacoesArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountAlocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlocacaoWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    Alocacoes: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alocacoes?: boolean | DisciplinaCountOutputTypeCountAlocacoesArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountAlocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlocacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipoSala
   */

  export type AggregateTipoSala = {
    _count: TipoSalaCountAggregateOutputType | null
    _avg: TipoSalaAvgAggregateOutputType | null
    _sum: TipoSalaSumAggregateOutputType | null
    _min: TipoSalaMinAggregateOutputType | null
    _max: TipoSalaMaxAggregateOutputType | null
  }

  export type TipoSalaAvgAggregateOutputType = {
    Id: number | null
  }

  export type TipoSalaSumAggregateOutputType = {
    Id: number | null
  }

  export type TipoSalaMinAggregateOutputType = {
    Id: number | null
    Nome: string | null
  }

  export type TipoSalaMaxAggregateOutputType = {
    Id: number | null
    Nome: string | null
  }

  export type TipoSalaCountAggregateOutputType = {
    Id: number
    Nome: number
    _all: number
  }


  export type TipoSalaAvgAggregateInputType = {
    Id?: true
  }

  export type TipoSalaSumAggregateInputType = {
    Id?: true
  }

  export type TipoSalaMinAggregateInputType = {
    Id?: true
    Nome?: true
  }

  export type TipoSalaMaxAggregateInputType = {
    Id?: true
    Nome?: true
  }

  export type TipoSalaCountAggregateInputType = {
    Id?: true
    Nome?: true
    _all?: true
  }

  export type TipoSalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoSala to aggregate.
     */
    where?: TipoSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSalas to fetch.
     */
    orderBy?: TipoSalaOrderByWithRelationInput | TipoSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoSalas
    **/
    _count?: true | TipoSalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoSalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoSalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoSalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoSalaMaxAggregateInputType
  }

  export type GetTipoSalaAggregateType<T extends TipoSalaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoSala[P]>
      : GetScalarType<T[P], AggregateTipoSala[P]>
  }




  export type TipoSalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoSalaWhereInput
    orderBy?: TipoSalaOrderByWithAggregationInput | TipoSalaOrderByWithAggregationInput[]
    by: TipoSalaScalarFieldEnum[] | TipoSalaScalarFieldEnum
    having?: TipoSalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoSalaCountAggregateInputType | true
    _avg?: TipoSalaAvgAggregateInputType
    _sum?: TipoSalaSumAggregateInputType
    _min?: TipoSalaMinAggregateInputType
    _max?: TipoSalaMaxAggregateInputType
  }

  export type TipoSalaGroupByOutputType = {
    Id: number
    Nome: string
    _count: TipoSalaCountAggregateOutputType | null
    _avg: TipoSalaAvgAggregateOutputType | null
    _sum: TipoSalaSumAggregateOutputType | null
    _min: TipoSalaMinAggregateOutputType | null
    _max: TipoSalaMaxAggregateOutputType | null
  }

  type GetTipoSalaGroupByPayload<T extends TipoSalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoSalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoSalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoSalaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoSalaGroupByOutputType[P]>
        }
      >
    >


  export type TipoSalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Salas?: boolean | TipoSala$SalasArgs<ExtArgs>
    _count?: boolean | TipoSalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoSala"]>



  export type TipoSalaSelectScalar = {
    Id?: boolean
    Nome?: boolean
  }

  export type TipoSalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Nome", ExtArgs["result"]["tipoSala"]>
  export type TipoSalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Salas?: boolean | TipoSala$SalasArgs<ExtArgs>
    _count?: boolean | TipoSalaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoSalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoSala"
    objects: {
      Salas: Prisma.$SalaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Nome: string
    }, ExtArgs["result"]["tipoSala"]>
    composites: {}
  }

  type TipoSalaGetPayload<S extends boolean | null | undefined | TipoSalaDefaultArgs> = $Result.GetResult<Prisma.$TipoSalaPayload, S>

  type TipoSalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoSalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoSalaCountAggregateInputType | true
    }

  export interface TipoSalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoSala'], meta: { name: 'TipoSala' } }
    /**
     * Find zero or one TipoSala that matches the filter.
     * @param {TipoSalaFindUniqueArgs} args - Arguments to find a TipoSala
     * @example
     * // Get one TipoSala
     * const tipoSala = await prisma.tipoSala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoSalaFindUniqueArgs>(args: SelectSubset<T, TipoSalaFindUniqueArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoSala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoSalaFindUniqueOrThrowArgs} args - Arguments to find a TipoSala
     * @example
     * // Get one TipoSala
     * const tipoSala = await prisma.tipoSala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoSalaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoSalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoSala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSalaFindFirstArgs} args - Arguments to find a TipoSala
     * @example
     * // Get one TipoSala
     * const tipoSala = await prisma.tipoSala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoSalaFindFirstArgs>(args?: SelectSubset<T, TipoSalaFindFirstArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoSala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSalaFindFirstOrThrowArgs} args - Arguments to find a TipoSala
     * @example
     * // Get one TipoSala
     * const tipoSala = await prisma.tipoSala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoSalaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoSalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoSalas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoSalas
     * const tipoSalas = await prisma.tipoSala.findMany()
     * 
     * // Get first 10 TipoSalas
     * const tipoSalas = await prisma.tipoSala.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const tipoSalaWithIdOnly = await prisma.tipoSala.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TipoSalaFindManyArgs>(args?: SelectSubset<T, TipoSalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoSala.
     * @param {TipoSalaCreateArgs} args - Arguments to create a TipoSala.
     * @example
     * // Create one TipoSala
     * const TipoSala = await prisma.tipoSala.create({
     *   data: {
     *     // ... data to create a TipoSala
     *   }
     * })
     * 
     */
    create<T extends TipoSalaCreateArgs>(args: SelectSubset<T, TipoSalaCreateArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoSalas.
     * @param {TipoSalaCreateManyArgs} args - Arguments to create many TipoSalas.
     * @example
     * // Create many TipoSalas
     * const tipoSala = await prisma.tipoSala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoSalaCreateManyArgs>(args?: SelectSubset<T, TipoSalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoSala.
     * @param {TipoSalaDeleteArgs} args - Arguments to delete one TipoSala.
     * @example
     * // Delete one TipoSala
     * const TipoSala = await prisma.tipoSala.delete({
     *   where: {
     *     // ... filter to delete one TipoSala
     *   }
     * })
     * 
     */
    delete<T extends TipoSalaDeleteArgs>(args: SelectSubset<T, TipoSalaDeleteArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoSala.
     * @param {TipoSalaUpdateArgs} args - Arguments to update one TipoSala.
     * @example
     * // Update one TipoSala
     * const tipoSala = await prisma.tipoSala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoSalaUpdateArgs>(args: SelectSubset<T, TipoSalaUpdateArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoSalas.
     * @param {TipoSalaDeleteManyArgs} args - Arguments to filter TipoSalas to delete.
     * @example
     * // Delete a few TipoSalas
     * const { count } = await prisma.tipoSala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoSalaDeleteManyArgs>(args?: SelectSubset<T, TipoSalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoSalas
     * const tipoSala = await prisma.tipoSala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoSalaUpdateManyArgs>(args: SelectSubset<T, TipoSalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoSala.
     * @param {TipoSalaUpsertArgs} args - Arguments to update or create a TipoSala.
     * @example
     * // Update or create a TipoSala
     * const tipoSala = await prisma.tipoSala.upsert({
     *   create: {
     *     // ... data to create a TipoSala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoSala we want to update
     *   }
     * })
     */
    upsert<T extends TipoSalaUpsertArgs>(args: SelectSubset<T, TipoSalaUpsertArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoSalas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSalaCountArgs} args - Arguments to filter TipoSalas to count.
     * @example
     * // Count the number of TipoSalas
     * const count = await prisma.tipoSala.count({
     *   where: {
     *     // ... the filter for the TipoSalas we want to count
     *   }
     * })
    **/
    count<T extends TipoSalaCountArgs>(
      args?: Subset<T, TipoSalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoSalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoSalaAggregateArgs>(args: Subset<T, TipoSalaAggregateArgs>): Prisma.PrismaPromise<GetTipoSalaAggregateType<T>>

    /**
     * Group by TipoSala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoSalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoSalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoSalaGroupByArgs['orderBy'] }
        : { orderBy?: TipoSalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoSalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoSala model
   */
  readonly fields: TipoSalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoSala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoSalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Salas<T extends TipoSala$SalasArgs<ExtArgs> = {}>(args?: Subset<T, TipoSala$SalasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoSala model
   */
  interface TipoSalaFieldRefs {
    readonly Id: FieldRef<"TipoSala", 'Int'>
    readonly Nome: FieldRef<"TipoSala", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TipoSala findUnique
   */
  export type TipoSalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * Filter, which TipoSala to fetch.
     */
    where: TipoSalaWhereUniqueInput
  }

  /**
   * TipoSala findUniqueOrThrow
   */
  export type TipoSalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * Filter, which TipoSala to fetch.
     */
    where: TipoSalaWhereUniqueInput
  }

  /**
   * TipoSala findFirst
   */
  export type TipoSalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * Filter, which TipoSala to fetch.
     */
    where?: TipoSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSalas to fetch.
     */
    orderBy?: TipoSalaOrderByWithRelationInput | TipoSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoSalas.
     */
    cursor?: TipoSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoSalas.
     */
    distinct?: TipoSalaScalarFieldEnum | TipoSalaScalarFieldEnum[]
  }

  /**
   * TipoSala findFirstOrThrow
   */
  export type TipoSalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * Filter, which TipoSala to fetch.
     */
    where?: TipoSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSalas to fetch.
     */
    orderBy?: TipoSalaOrderByWithRelationInput | TipoSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoSalas.
     */
    cursor?: TipoSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSalas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoSalas.
     */
    distinct?: TipoSalaScalarFieldEnum | TipoSalaScalarFieldEnum[]
  }

  /**
   * TipoSala findMany
   */
  export type TipoSalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * Filter, which TipoSalas to fetch.
     */
    where?: TipoSalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoSalas to fetch.
     */
    orderBy?: TipoSalaOrderByWithRelationInput | TipoSalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoSalas.
     */
    cursor?: TipoSalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoSalas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoSalas.
     */
    skip?: number
    distinct?: TipoSalaScalarFieldEnum | TipoSalaScalarFieldEnum[]
  }

  /**
   * TipoSala create
   */
  export type TipoSalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoSala.
     */
    data: XOR<TipoSalaCreateInput, TipoSalaUncheckedCreateInput>
  }

  /**
   * TipoSala createMany
   */
  export type TipoSalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoSalas.
     */
    data: TipoSalaCreateManyInput | TipoSalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoSala update
   */
  export type TipoSalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoSala.
     */
    data: XOR<TipoSalaUpdateInput, TipoSalaUncheckedUpdateInput>
    /**
     * Choose, which TipoSala to update.
     */
    where: TipoSalaWhereUniqueInput
  }

  /**
   * TipoSala updateMany
   */
  export type TipoSalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoSalas.
     */
    data: XOR<TipoSalaUpdateManyMutationInput, TipoSalaUncheckedUpdateManyInput>
    /**
     * Filter which TipoSalas to update
     */
    where?: TipoSalaWhereInput
    /**
     * Limit how many TipoSalas to update.
     */
    limit?: number
  }

  /**
   * TipoSala upsert
   */
  export type TipoSalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoSala to update in case it exists.
     */
    where: TipoSalaWhereUniqueInput
    /**
     * In case the TipoSala found by the `where` argument doesn't exist, create a new TipoSala with this data.
     */
    create: XOR<TipoSalaCreateInput, TipoSalaUncheckedCreateInput>
    /**
     * In case the TipoSala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoSalaUpdateInput, TipoSalaUncheckedUpdateInput>
  }

  /**
   * TipoSala delete
   */
  export type TipoSalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
    /**
     * Filter which TipoSala to delete.
     */
    where: TipoSalaWhereUniqueInput
  }

  /**
   * TipoSala deleteMany
   */
  export type TipoSalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoSalas to delete
     */
    where?: TipoSalaWhereInput
    /**
     * Limit how many TipoSalas to delete.
     */
    limit?: number
  }

  /**
   * TipoSala.Salas
   */
  export type TipoSala$SalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * TipoSala without action
   */
  export type TipoSalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoSala
     */
    select?: TipoSalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoSala
     */
    omit?: TipoSalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoSalaInclude<ExtArgs> | null
  }


  /**
   * Model Bloco
   */

  export type AggregateBloco = {
    _count: BlocoCountAggregateOutputType | null
    _avg: BlocoAvgAggregateOutputType | null
    _sum: BlocoSumAggregateOutputType | null
    _min: BlocoMinAggregateOutputType | null
    _max: BlocoMaxAggregateOutputType | null
  }

  export type BlocoAvgAggregateOutputType = {
    Id: number | null
  }

  export type BlocoSumAggregateOutputType = {
    Id: number | null
  }

  export type BlocoMinAggregateOutputType = {
    Id: number | null
    Nome: string | null
  }

  export type BlocoMaxAggregateOutputType = {
    Id: number | null
    Nome: string | null
  }

  export type BlocoCountAggregateOutputType = {
    Id: number
    Nome: number
    _all: number
  }


  export type BlocoAvgAggregateInputType = {
    Id?: true
  }

  export type BlocoSumAggregateInputType = {
    Id?: true
  }

  export type BlocoMinAggregateInputType = {
    Id?: true
    Nome?: true
  }

  export type BlocoMaxAggregateInputType = {
    Id?: true
    Nome?: true
  }

  export type BlocoCountAggregateInputType = {
    Id?: true
    Nome?: true
    _all?: true
  }

  export type BlocoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloco to aggregate.
     */
    where?: BlocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocos to fetch.
     */
    orderBy?: BlocoOrderByWithRelationInput | BlocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocos
    **/
    _count?: true | BlocoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlocoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlocoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlocoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlocoMaxAggregateInputType
  }

  export type GetBlocoAggregateType<T extends BlocoAggregateArgs> = {
        [P in keyof T & keyof AggregateBloco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloco[P]>
      : GetScalarType<T[P], AggregateBloco[P]>
  }




  export type BlocoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlocoWhereInput
    orderBy?: BlocoOrderByWithAggregationInput | BlocoOrderByWithAggregationInput[]
    by: BlocoScalarFieldEnum[] | BlocoScalarFieldEnum
    having?: BlocoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlocoCountAggregateInputType | true
    _avg?: BlocoAvgAggregateInputType
    _sum?: BlocoSumAggregateInputType
    _min?: BlocoMinAggregateInputType
    _max?: BlocoMaxAggregateInputType
  }

  export type BlocoGroupByOutputType = {
    Id: number
    Nome: string
    _count: BlocoCountAggregateOutputType | null
    _avg: BlocoAvgAggregateOutputType | null
    _sum: BlocoSumAggregateOutputType | null
    _min: BlocoMinAggregateOutputType | null
    _max: BlocoMaxAggregateOutputType | null
  }

  type GetBlocoGroupByPayload<T extends BlocoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlocoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlocoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlocoGroupByOutputType[P]>
            : GetScalarType<T[P], BlocoGroupByOutputType[P]>
        }
      >
    >


  export type BlocoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Salas?: boolean | Bloco$SalasArgs<ExtArgs>
    _count?: boolean | BlocoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloco"]>



  export type BlocoSelectScalar = {
    Id?: boolean
    Nome?: boolean
  }

  export type BlocoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Nome", ExtArgs["result"]["bloco"]>
  export type BlocoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Salas?: boolean | Bloco$SalasArgs<ExtArgs>
    _count?: boolean | BlocoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BlocoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bloco"
    objects: {
      Salas: Prisma.$SalaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Nome: string
    }, ExtArgs["result"]["bloco"]>
    composites: {}
  }

  type BlocoGetPayload<S extends boolean | null | undefined | BlocoDefaultArgs> = $Result.GetResult<Prisma.$BlocoPayload, S>

  type BlocoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlocoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlocoCountAggregateInputType | true
    }

  export interface BlocoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bloco'], meta: { name: 'Bloco' } }
    /**
     * Find zero or one Bloco that matches the filter.
     * @param {BlocoFindUniqueArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlocoFindUniqueArgs>(args: SelectSubset<T, BlocoFindUniqueArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlocoFindUniqueOrThrowArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlocoFindUniqueOrThrowArgs>(args: SelectSubset<T, BlocoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocoFindFirstArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlocoFindFirstArgs>(args?: SelectSubset<T, BlocoFindFirstArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocoFindFirstOrThrowArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlocoFindFirstOrThrowArgs>(args?: SelectSubset<T, BlocoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocos
     * const blocos = await prisma.bloco.findMany()
     * 
     * // Get first 10 Blocos
     * const blocos = await prisma.bloco.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const blocoWithIdOnly = await prisma.bloco.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends BlocoFindManyArgs>(args?: SelectSubset<T, BlocoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloco.
     * @param {BlocoCreateArgs} args - Arguments to create a Bloco.
     * @example
     * // Create one Bloco
     * const Bloco = await prisma.bloco.create({
     *   data: {
     *     // ... data to create a Bloco
     *   }
     * })
     * 
     */
    create<T extends BlocoCreateArgs>(args: SelectSubset<T, BlocoCreateArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocos.
     * @param {BlocoCreateManyArgs} args - Arguments to create many Blocos.
     * @example
     * // Create many Blocos
     * const bloco = await prisma.bloco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlocoCreateManyArgs>(args?: SelectSubset<T, BlocoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bloco.
     * @param {BlocoDeleteArgs} args - Arguments to delete one Bloco.
     * @example
     * // Delete one Bloco
     * const Bloco = await prisma.bloco.delete({
     *   where: {
     *     // ... filter to delete one Bloco
     *   }
     * })
     * 
     */
    delete<T extends BlocoDeleteArgs>(args: SelectSubset<T, BlocoDeleteArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloco.
     * @param {BlocoUpdateArgs} args - Arguments to update one Bloco.
     * @example
     * // Update one Bloco
     * const bloco = await prisma.bloco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlocoUpdateArgs>(args: SelectSubset<T, BlocoUpdateArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocos.
     * @param {BlocoDeleteManyArgs} args - Arguments to filter Blocos to delete.
     * @example
     * // Delete a few Blocos
     * const { count } = await prisma.bloco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlocoDeleteManyArgs>(args?: SelectSubset<T, BlocoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocos
     * const bloco = await prisma.bloco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlocoUpdateManyArgs>(args: SelectSubset<T, BlocoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bloco.
     * @param {BlocoUpsertArgs} args - Arguments to update or create a Bloco.
     * @example
     * // Update or create a Bloco
     * const bloco = await prisma.bloco.upsert({
     *   create: {
     *     // ... data to create a Bloco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloco we want to update
     *   }
     * })
     */
    upsert<T extends BlocoUpsertArgs>(args: SelectSubset<T, BlocoUpsertArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocoCountArgs} args - Arguments to filter Blocos to count.
     * @example
     * // Count the number of Blocos
     * const count = await prisma.bloco.count({
     *   where: {
     *     // ... the filter for the Blocos we want to count
     *   }
     * })
    **/
    count<T extends BlocoCountArgs>(
      args?: Subset<T, BlocoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlocoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlocoAggregateArgs>(args: Subset<T, BlocoAggregateArgs>): Prisma.PrismaPromise<GetBlocoAggregateType<T>>

    /**
     * Group by Bloco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlocoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlocoGroupByArgs['orderBy'] }
        : { orderBy?: BlocoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlocoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlocoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bloco model
   */
  readonly fields: BlocoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bloco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlocoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Salas<T extends Bloco$SalasArgs<ExtArgs> = {}>(args?: Subset<T, Bloco$SalasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bloco model
   */
  interface BlocoFieldRefs {
    readonly Id: FieldRef<"Bloco", 'Int'>
    readonly Nome: FieldRef<"Bloco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bloco findUnique
   */
  export type BlocoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * Filter, which Bloco to fetch.
     */
    where: BlocoWhereUniqueInput
  }

  /**
   * Bloco findUniqueOrThrow
   */
  export type BlocoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * Filter, which Bloco to fetch.
     */
    where: BlocoWhereUniqueInput
  }

  /**
   * Bloco findFirst
   */
  export type BlocoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * Filter, which Bloco to fetch.
     */
    where?: BlocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocos to fetch.
     */
    orderBy?: BlocoOrderByWithRelationInput | BlocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocos.
     */
    cursor?: BlocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocos.
     */
    distinct?: BlocoScalarFieldEnum | BlocoScalarFieldEnum[]
  }

  /**
   * Bloco findFirstOrThrow
   */
  export type BlocoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * Filter, which Bloco to fetch.
     */
    where?: BlocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocos to fetch.
     */
    orderBy?: BlocoOrderByWithRelationInput | BlocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocos.
     */
    cursor?: BlocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocos.
     */
    distinct?: BlocoScalarFieldEnum | BlocoScalarFieldEnum[]
  }

  /**
   * Bloco findMany
   */
  export type BlocoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * Filter, which Blocos to fetch.
     */
    where?: BlocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocos to fetch.
     */
    orderBy?: BlocoOrderByWithRelationInput | BlocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocos.
     */
    cursor?: BlocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocos.
     */
    skip?: number
    distinct?: BlocoScalarFieldEnum | BlocoScalarFieldEnum[]
  }

  /**
   * Bloco create
   */
  export type BlocoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * The data needed to create a Bloco.
     */
    data: XOR<BlocoCreateInput, BlocoUncheckedCreateInput>
  }

  /**
   * Bloco createMany
   */
  export type BlocoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocos.
     */
    data: BlocoCreateManyInput | BlocoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bloco update
   */
  export type BlocoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * The data needed to update a Bloco.
     */
    data: XOR<BlocoUpdateInput, BlocoUncheckedUpdateInput>
    /**
     * Choose, which Bloco to update.
     */
    where: BlocoWhereUniqueInput
  }

  /**
   * Bloco updateMany
   */
  export type BlocoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocos.
     */
    data: XOR<BlocoUpdateManyMutationInput, BlocoUncheckedUpdateManyInput>
    /**
     * Filter which Blocos to update
     */
    where?: BlocoWhereInput
    /**
     * Limit how many Blocos to update.
     */
    limit?: number
  }

  /**
   * Bloco upsert
   */
  export type BlocoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * The filter to search for the Bloco to update in case it exists.
     */
    where: BlocoWhereUniqueInput
    /**
     * In case the Bloco found by the `where` argument doesn't exist, create a new Bloco with this data.
     */
    create: XOR<BlocoCreateInput, BlocoUncheckedCreateInput>
    /**
     * In case the Bloco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlocoUpdateInput, BlocoUncheckedUpdateInput>
  }

  /**
   * Bloco delete
   */
  export type BlocoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
    /**
     * Filter which Bloco to delete.
     */
    where: BlocoWhereUniqueInput
  }

  /**
   * Bloco deleteMany
   */
  export type BlocoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocos to delete
     */
    where?: BlocoWhereInput
    /**
     * Limit how many Blocos to delete.
     */
    limit?: number
  }

  /**
   * Bloco.Salas
   */
  export type Bloco$SalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Bloco without action
   */
  export type BlocoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloco
     */
    select?: BlocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloco
     */
    omit?: BlocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocoInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    Id: number | null
    TipoId: number | null
    BlocoId: number | null
    Capacidade: number | null
  }

  export type SalaSumAggregateOutputType = {
    Id: number | null
    TipoId: number | null
    BlocoId: number | null
    Capacidade: number | null
  }

  export type SalaMinAggregateOutputType = {
    Id: number | null
    Codigo: string | null
    TipoId: number | null
    BlocoId: number | null
    Capacidade: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SalaMaxAggregateOutputType = {
    Id: number | null
    Codigo: string | null
    TipoId: number | null
    BlocoId: number | null
    Capacidade: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type SalaCountAggregateOutputType = {
    Id: number
    Codigo: number
    TipoId: number
    BlocoId: number
    Capacidade: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    Id?: true
    TipoId?: true
    BlocoId?: true
    Capacidade?: true
  }

  export type SalaSumAggregateInputType = {
    Id?: true
    TipoId?: true
    BlocoId?: true
    Capacidade?: true
  }

  export type SalaMinAggregateInputType = {
    Id?: true
    Codigo?: true
    TipoId?: true
    BlocoId?: true
    Capacidade?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SalaMaxAggregateInputType = {
    Id?: true
    Codigo?: true
    TipoId?: true
    BlocoId?: true
    Capacidade?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type SalaCountAggregateInputType = {
    Id?: true
    Codigo?: true
    TipoId?: true
    BlocoId?: true
    Capacidade?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    Id: number
    Codigo: string
    TipoId: number
    BlocoId: number
    Capacidade: number
    CreatedAt: Date
    UpdatedAt: Date
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Codigo?: boolean
    TipoId?: boolean
    BlocoId?: boolean
    Capacidade?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Tipo?: boolean | TipoSalaDefaultArgs<ExtArgs>
    Bloco?: boolean | BlocoDefaultArgs<ExtArgs>
    Alocacoes?: boolean | Sala$AlocacoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>



  export type SalaSelectScalar = {
    Id?: boolean
    Codigo?: boolean
    TipoId?: boolean
    BlocoId?: boolean
    Capacidade?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Codigo" | "TipoId" | "BlocoId" | "Capacidade" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tipo?: boolean | TipoSalaDefaultArgs<ExtArgs>
    Bloco?: boolean | BlocoDefaultArgs<ExtArgs>
    Alocacoes?: boolean | Sala$AlocacoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      Tipo: Prisma.$TipoSalaPayload<ExtArgs>
      Bloco: Prisma.$BlocoPayload<ExtArgs>
      Alocacoes: Prisma.$AlocacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Codigo: string
      TipoId: number
      BlocoId: number
      Capacidade: number
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tipo<T extends TipoSalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoSalaDefaultArgs<ExtArgs>>): Prisma__TipoSalaClient<$Result.GetResult<Prisma.$TipoSalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Bloco<T extends BlocoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlocoDefaultArgs<ExtArgs>>): Prisma__BlocoClient<$Result.GetResult<Prisma.$BlocoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Alocacoes<T extends Sala$AlocacoesArgs<ExtArgs> = {}>(args?: Subset<T, Sala$AlocacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly Id: FieldRef<"Sala", 'Int'>
    readonly Codigo: FieldRef<"Sala", 'String'>
    readonly TipoId: FieldRef<"Sala", 'Int'>
    readonly BlocoId: FieldRef<"Sala", 'Int'>
    readonly Capacidade: FieldRef<"Sala", 'Int'>
    readonly CreatedAt: FieldRef<"Sala", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Sala", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.Alocacoes
   */
  export type Sala$AlocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    where?: AlocacaoWhereInput
    orderBy?: AlocacaoOrderByWithRelationInput | AlocacaoOrderByWithRelationInput[]
    cursor?: AlocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    Id: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    Id: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    Id: number | null
    Nome: string | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    Id: number | null
    Nome: string | null
  }

  export type DisciplinaCountAggregateOutputType = {
    Id: number
    Nome: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    Id?: true
  }

  export type DisciplinaSumAggregateInputType = {
    Id?: true
  }

  export type DisciplinaMinAggregateInputType = {
    Id?: true
    Nome?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    Id?: true
    Nome?: true
  }

  export type DisciplinaCountAggregateInputType = {
    Id?: true
    Nome?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    Id: number
    Nome: string
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Nome?: boolean
    Alocacoes?: boolean | Disciplina$AlocacoesArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>



  export type DisciplinaSelectScalar = {
    Id?: boolean
    Nome?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Nome", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Alocacoes?: boolean | Disciplina$AlocacoesArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      Alocacoes: Prisma.$AlocacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Nome: string
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const disciplinaWithIdOnly = await prisma.disciplina.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Alocacoes<T extends Disciplina$AlocacoesArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$AlocacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly Id: FieldRef<"Disciplina", 'Int'>
    readonly Nome: FieldRef<"Disciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina.Alocacoes
   */
  export type Disciplina$AlocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    where?: AlocacaoWhereInput
    orderBy?: AlocacaoOrderByWithRelationInput | AlocacaoOrderByWithRelationInput[]
    cursor?: AlocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model Alocacao
   */

  export type AggregateAlocacao = {
    _count: AlocacaoCountAggregateOutputType | null
    _avg: AlocacaoAvgAggregateOutputType | null
    _sum: AlocacaoSumAggregateOutputType | null
    _min: AlocacaoMinAggregateOutputType | null
    _max: AlocacaoMaxAggregateOutputType | null
  }

  export type AlocacaoAvgAggregateOutputType = {
    Id: number | null
    DiaDaSemana: number | null
    SalaId: number | null
    DisciplinaId: number | null
  }

  export type AlocacaoSumAggregateOutputType = {
    Id: number | null
    DiaDaSemana: number | null
    SalaId: number | null
    DisciplinaId: number | null
  }

  export type AlocacaoMinAggregateOutputType = {
    Id: number | null
    Data: Date | null
    DiaDaSemana: number | null
    HoraInicio: string | null
    HoraFim: string | null
    SalaId: number | null
    DisciplinaId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
  }

  export type AlocacaoMaxAggregateOutputType = {
    Id: number | null
    Data: Date | null
    DiaDaSemana: number | null
    HoraInicio: string | null
    HoraFim: string | null
    SalaId: number | null
    DisciplinaId: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    DeletedAt: Date | null
  }

  export type AlocacaoCountAggregateOutputType = {
    Id: number
    Data: number
    DiaDaSemana: number
    HoraInicio: number
    HoraFim: number
    SalaId: number
    DisciplinaId: number
    CreatedAt: number
    UpdatedAt: number
    DeletedAt: number
    _all: number
  }


  export type AlocacaoAvgAggregateInputType = {
    Id?: true
    DiaDaSemana?: true
    SalaId?: true
    DisciplinaId?: true
  }

  export type AlocacaoSumAggregateInputType = {
    Id?: true
    DiaDaSemana?: true
    SalaId?: true
    DisciplinaId?: true
  }

  export type AlocacaoMinAggregateInputType = {
    Id?: true
    Data?: true
    DiaDaSemana?: true
    HoraInicio?: true
    HoraFim?: true
    SalaId?: true
    DisciplinaId?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
  }

  export type AlocacaoMaxAggregateInputType = {
    Id?: true
    Data?: true
    DiaDaSemana?: true
    HoraInicio?: true
    HoraFim?: true
    SalaId?: true
    DisciplinaId?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
  }

  export type AlocacaoCountAggregateInputType = {
    Id?: true
    Data?: true
    DiaDaSemana?: true
    HoraInicio?: true
    HoraFim?: true
    SalaId?: true
    DisciplinaId?: true
    CreatedAt?: true
    UpdatedAt?: true
    DeletedAt?: true
    _all?: true
  }

  export type AlocacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alocacao to aggregate.
     */
    where?: AlocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alocacaos to fetch.
     */
    orderBy?: AlocacaoOrderByWithRelationInput | AlocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alocacaos
    **/
    _count?: true | AlocacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlocacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlocacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlocacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlocacaoMaxAggregateInputType
  }

  export type GetAlocacaoAggregateType<T extends AlocacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlocacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlocacao[P]>
      : GetScalarType<T[P], AggregateAlocacao[P]>
  }




  export type AlocacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlocacaoWhereInput
    orderBy?: AlocacaoOrderByWithAggregationInput | AlocacaoOrderByWithAggregationInput[]
    by: AlocacaoScalarFieldEnum[] | AlocacaoScalarFieldEnum
    having?: AlocacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlocacaoCountAggregateInputType | true
    _avg?: AlocacaoAvgAggregateInputType
    _sum?: AlocacaoSumAggregateInputType
    _min?: AlocacaoMinAggregateInputType
    _max?: AlocacaoMaxAggregateInputType
  }

  export type AlocacaoGroupByOutputType = {
    Id: number
    Data: Date | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    SalaId: number
    DisciplinaId: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: Date | null
    _count: AlocacaoCountAggregateOutputType | null
    _avg: AlocacaoAvgAggregateOutputType | null
    _sum: AlocacaoSumAggregateOutputType | null
    _min: AlocacaoMinAggregateOutputType | null
    _max: AlocacaoMaxAggregateOutputType | null
  }

  type GetAlocacaoGroupByPayload<T extends AlocacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlocacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlocacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlocacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AlocacaoGroupByOutputType[P]>
        }
      >
    >


  export type AlocacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Data?: boolean
    DiaDaSemana?: boolean
    HoraInicio?: boolean
    HoraFim?: boolean
    SalaId?: boolean
    DisciplinaId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alocacao"]>



  export type AlocacaoSelectScalar = {
    Id?: boolean
    Data?: boolean
    DiaDaSemana?: boolean
    HoraInicio?: boolean
    HoraFim?: boolean
    SalaId?: boolean
    DisciplinaId?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    DeletedAt?: boolean
  }

  export type AlocacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "Data" | "DiaDaSemana" | "HoraInicio" | "HoraFim" | "SalaId" | "DisciplinaId" | "CreatedAt" | "UpdatedAt" | "DeletedAt", ExtArgs["result"]["alocacao"]>
  export type AlocacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sala?: boolean | SalaDefaultArgs<ExtArgs>
    Disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
  }

  export type $AlocacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alocacao"
    objects: {
      Sala: Prisma.$SalaPayload<ExtArgs>
      Disciplina: Prisma.$DisciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Data: Date | null
      DiaDaSemana: number
      HoraInicio: string
      HoraFim: string
      SalaId: number
      DisciplinaId: number
      CreatedAt: Date
      UpdatedAt: Date
      DeletedAt: Date | null
    }, ExtArgs["result"]["alocacao"]>
    composites: {}
  }

  type AlocacaoGetPayload<S extends boolean | null | undefined | AlocacaoDefaultArgs> = $Result.GetResult<Prisma.$AlocacaoPayload, S>

  type AlocacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlocacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlocacaoCountAggregateInputType | true
    }

  export interface AlocacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alocacao'], meta: { name: 'Alocacao' } }
    /**
     * Find zero or one Alocacao that matches the filter.
     * @param {AlocacaoFindUniqueArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlocacaoFindUniqueArgs>(args: SelectSubset<T, AlocacaoFindUniqueArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alocacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlocacaoFindUniqueOrThrowArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlocacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlocacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alocacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoFindFirstArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlocacaoFindFirstArgs>(args?: SelectSubset<T, AlocacaoFindFirstArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alocacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoFindFirstOrThrowArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlocacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlocacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alocacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alocacaos
     * const alocacaos = await prisma.alocacao.findMany()
     * 
     * // Get first 10 Alocacaos
     * const alocacaos = await prisma.alocacao.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const alocacaoWithIdOnly = await prisma.alocacao.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends AlocacaoFindManyArgs>(args?: SelectSubset<T, AlocacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alocacao.
     * @param {AlocacaoCreateArgs} args - Arguments to create a Alocacao.
     * @example
     * // Create one Alocacao
     * const Alocacao = await prisma.alocacao.create({
     *   data: {
     *     // ... data to create a Alocacao
     *   }
     * })
     * 
     */
    create<T extends AlocacaoCreateArgs>(args: SelectSubset<T, AlocacaoCreateArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alocacaos.
     * @param {AlocacaoCreateManyArgs} args - Arguments to create many Alocacaos.
     * @example
     * // Create many Alocacaos
     * const alocacao = await prisma.alocacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlocacaoCreateManyArgs>(args?: SelectSubset<T, AlocacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alocacao.
     * @param {AlocacaoDeleteArgs} args - Arguments to delete one Alocacao.
     * @example
     * // Delete one Alocacao
     * const Alocacao = await prisma.alocacao.delete({
     *   where: {
     *     // ... filter to delete one Alocacao
     *   }
     * })
     * 
     */
    delete<T extends AlocacaoDeleteArgs>(args: SelectSubset<T, AlocacaoDeleteArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alocacao.
     * @param {AlocacaoUpdateArgs} args - Arguments to update one Alocacao.
     * @example
     * // Update one Alocacao
     * const alocacao = await prisma.alocacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlocacaoUpdateArgs>(args: SelectSubset<T, AlocacaoUpdateArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alocacaos.
     * @param {AlocacaoDeleteManyArgs} args - Arguments to filter Alocacaos to delete.
     * @example
     * // Delete a few Alocacaos
     * const { count } = await prisma.alocacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlocacaoDeleteManyArgs>(args?: SelectSubset<T, AlocacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alocacaos
     * const alocacao = await prisma.alocacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlocacaoUpdateManyArgs>(args: SelectSubset<T, AlocacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alocacao.
     * @param {AlocacaoUpsertArgs} args - Arguments to update or create a Alocacao.
     * @example
     * // Update or create a Alocacao
     * const alocacao = await prisma.alocacao.upsert({
     *   create: {
     *     // ... data to create a Alocacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alocacao we want to update
     *   }
     * })
     */
    upsert<T extends AlocacaoUpsertArgs>(args: SelectSubset<T, AlocacaoUpsertArgs<ExtArgs>>): Prisma__AlocacaoClient<$Result.GetResult<Prisma.$AlocacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoCountArgs} args - Arguments to filter Alocacaos to count.
     * @example
     * // Count the number of Alocacaos
     * const count = await prisma.alocacao.count({
     *   where: {
     *     // ... the filter for the Alocacaos we want to count
     *   }
     * })
    **/
    count<T extends AlocacaoCountArgs>(
      args?: Subset<T, AlocacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlocacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alocacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlocacaoAggregateArgs>(args: Subset<T, AlocacaoAggregateArgs>): Prisma.PrismaPromise<GetAlocacaoAggregateType<T>>

    /**
     * Group by Alocacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlocacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlocacaoGroupByArgs['orderBy'] }
        : { orderBy?: AlocacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlocacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlocacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alocacao model
   */
  readonly fields: AlocacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alocacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlocacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alocacao model
   */
  interface AlocacaoFieldRefs {
    readonly Id: FieldRef<"Alocacao", 'Int'>
    readonly Data: FieldRef<"Alocacao", 'DateTime'>
    readonly DiaDaSemana: FieldRef<"Alocacao", 'Int'>
    readonly HoraInicio: FieldRef<"Alocacao", 'String'>
    readonly HoraFim: FieldRef<"Alocacao", 'String'>
    readonly SalaId: FieldRef<"Alocacao", 'Int'>
    readonly DisciplinaId: FieldRef<"Alocacao", 'Int'>
    readonly CreatedAt: FieldRef<"Alocacao", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Alocacao", 'DateTime'>
    readonly DeletedAt: FieldRef<"Alocacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alocacao findUnique
   */
  export type AlocacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alocacao to fetch.
     */
    where: AlocacaoWhereUniqueInput
  }

  /**
   * Alocacao findUniqueOrThrow
   */
  export type AlocacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alocacao to fetch.
     */
    where: AlocacaoWhereUniqueInput
  }

  /**
   * Alocacao findFirst
   */
  export type AlocacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alocacao to fetch.
     */
    where?: AlocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alocacaos to fetch.
     */
    orderBy?: AlocacaoOrderByWithRelationInput | AlocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alocacaos.
     */
    cursor?: AlocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alocacaos.
     */
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * Alocacao findFirstOrThrow
   */
  export type AlocacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alocacao to fetch.
     */
    where?: AlocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alocacaos to fetch.
     */
    orderBy?: AlocacaoOrderByWithRelationInput | AlocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alocacaos.
     */
    cursor?: AlocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alocacaos.
     */
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * Alocacao findMany
   */
  export type AlocacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * Filter, which Alocacaos to fetch.
     */
    where?: AlocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alocacaos to fetch.
     */
    orderBy?: AlocacaoOrderByWithRelationInput | AlocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alocacaos.
     */
    cursor?: AlocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alocacaos.
     */
    skip?: number
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * Alocacao create
   */
  export type AlocacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Alocacao.
     */
    data: XOR<AlocacaoCreateInput, AlocacaoUncheckedCreateInput>
  }

  /**
   * Alocacao createMany
   */
  export type AlocacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alocacaos.
     */
    data: AlocacaoCreateManyInput | AlocacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alocacao update
   */
  export type AlocacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Alocacao.
     */
    data: XOR<AlocacaoUpdateInput, AlocacaoUncheckedUpdateInput>
    /**
     * Choose, which Alocacao to update.
     */
    where: AlocacaoWhereUniqueInput
  }

  /**
   * Alocacao updateMany
   */
  export type AlocacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alocacaos.
     */
    data: XOR<AlocacaoUpdateManyMutationInput, AlocacaoUncheckedUpdateManyInput>
    /**
     * Filter which Alocacaos to update
     */
    where?: AlocacaoWhereInput
    /**
     * Limit how many Alocacaos to update.
     */
    limit?: number
  }

  /**
   * Alocacao upsert
   */
  export type AlocacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Alocacao to update in case it exists.
     */
    where: AlocacaoWhereUniqueInput
    /**
     * In case the Alocacao found by the `where` argument doesn't exist, create a new Alocacao with this data.
     */
    create: XOR<AlocacaoCreateInput, AlocacaoUncheckedCreateInput>
    /**
     * In case the Alocacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlocacaoUpdateInput, AlocacaoUncheckedUpdateInput>
  }

  /**
   * Alocacao delete
   */
  export type AlocacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
    /**
     * Filter which Alocacao to delete.
     */
    where: AlocacaoWhereUniqueInput
  }

  /**
   * Alocacao deleteMany
   */
  export type AlocacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alocacaos to delete
     */
    where?: AlocacaoWhereInput
    /**
     * Limit how many Alocacaos to delete.
     */
    limit?: number
  }

  /**
   * Alocacao without action
   */
  export type AlocacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alocacao
     */
    select?: AlocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alocacao
     */
    omit?: AlocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlocacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TipoSalaScalarFieldEnum: {
    Id: 'Id',
    Nome: 'Nome'
  };

  export type TipoSalaScalarFieldEnum = (typeof TipoSalaScalarFieldEnum)[keyof typeof TipoSalaScalarFieldEnum]


  export const BlocoScalarFieldEnum: {
    Id: 'Id',
    Nome: 'Nome'
  };

  export type BlocoScalarFieldEnum = (typeof BlocoScalarFieldEnum)[keyof typeof BlocoScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    Id: 'Id',
    Codigo: 'Codigo',
    TipoId: 'TipoId',
    BlocoId: 'BlocoId',
    Capacidade: 'Capacidade',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    Id: 'Id',
    Nome: 'Nome'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const AlocacaoScalarFieldEnum: {
    Id: 'Id',
    Data: 'Data',
    DiaDaSemana: 'DiaDaSemana',
    HoraInicio: 'HoraInicio',
    HoraFim: 'HoraFim',
    SalaId: 'SalaId',
    DisciplinaId: 'DisciplinaId',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    DeletedAt: 'DeletedAt'
  };

  export type AlocacaoScalarFieldEnum = (typeof AlocacaoScalarFieldEnum)[keyof typeof AlocacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TipoSalaOrderByRelevanceFieldEnum: {
    Nome: 'Nome'
  };

  export type TipoSalaOrderByRelevanceFieldEnum = (typeof TipoSalaOrderByRelevanceFieldEnum)[keyof typeof TipoSalaOrderByRelevanceFieldEnum]


  export const BlocoOrderByRelevanceFieldEnum: {
    Nome: 'Nome'
  };

  export type BlocoOrderByRelevanceFieldEnum = (typeof BlocoOrderByRelevanceFieldEnum)[keyof typeof BlocoOrderByRelevanceFieldEnum]


  export const SalaOrderByRelevanceFieldEnum: {
    Codigo: 'Codigo'
  };

  export type SalaOrderByRelevanceFieldEnum = (typeof SalaOrderByRelevanceFieldEnum)[keyof typeof SalaOrderByRelevanceFieldEnum]


  export const DisciplinaOrderByRelevanceFieldEnum: {
    Nome: 'Nome'
  };

  export type DisciplinaOrderByRelevanceFieldEnum = (typeof DisciplinaOrderByRelevanceFieldEnum)[keyof typeof DisciplinaOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AlocacaoOrderByRelevanceFieldEnum: {
    HoraInicio: 'HoraInicio',
    HoraFim: 'HoraFim'
  };

  export type AlocacaoOrderByRelevanceFieldEnum = (typeof AlocacaoOrderByRelevanceFieldEnum)[keyof typeof AlocacaoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TipoSalaWhereInput = {
    AND?: TipoSalaWhereInput | TipoSalaWhereInput[]
    OR?: TipoSalaWhereInput[]
    NOT?: TipoSalaWhereInput | TipoSalaWhereInput[]
    Id?: IntFilter<"TipoSala"> | number
    Nome?: StringFilter<"TipoSala"> | string
    Salas?: SalaListRelationFilter
  }

  export type TipoSalaOrderByWithRelationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Salas?: SalaOrderByRelationAggregateInput
    _relevance?: TipoSalaOrderByRelevanceInput
  }

  export type TipoSalaWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Nome?: string
    AND?: TipoSalaWhereInput | TipoSalaWhereInput[]
    OR?: TipoSalaWhereInput[]
    NOT?: TipoSalaWhereInput | TipoSalaWhereInput[]
    Salas?: SalaListRelationFilter
  }, "Id" | "Nome">

  export type TipoSalaOrderByWithAggregationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    _count?: TipoSalaCountOrderByAggregateInput
    _avg?: TipoSalaAvgOrderByAggregateInput
    _max?: TipoSalaMaxOrderByAggregateInput
    _min?: TipoSalaMinOrderByAggregateInput
    _sum?: TipoSalaSumOrderByAggregateInput
  }

  export type TipoSalaScalarWhereWithAggregatesInput = {
    AND?: TipoSalaScalarWhereWithAggregatesInput | TipoSalaScalarWhereWithAggregatesInput[]
    OR?: TipoSalaScalarWhereWithAggregatesInput[]
    NOT?: TipoSalaScalarWhereWithAggregatesInput | TipoSalaScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"TipoSala"> | number
    Nome?: StringWithAggregatesFilter<"TipoSala"> | string
  }

  export type BlocoWhereInput = {
    AND?: BlocoWhereInput | BlocoWhereInput[]
    OR?: BlocoWhereInput[]
    NOT?: BlocoWhereInput | BlocoWhereInput[]
    Id?: IntFilter<"Bloco"> | number
    Nome?: StringFilter<"Bloco"> | string
    Salas?: SalaListRelationFilter
  }

  export type BlocoOrderByWithRelationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Salas?: SalaOrderByRelationAggregateInput
    _relevance?: BlocoOrderByRelevanceInput
  }

  export type BlocoWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Nome?: string
    AND?: BlocoWhereInput | BlocoWhereInput[]
    OR?: BlocoWhereInput[]
    NOT?: BlocoWhereInput | BlocoWhereInput[]
    Salas?: SalaListRelationFilter
  }, "Id" | "Nome">

  export type BlocoOrderByWithAggregationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    _count?: BlocoCountOrderByAggregateInput
    _avg?: BlocoAvgOrderByAggregateInput
    _max?: BlocoMaxOrderByAggregateInput
    _min?: BlocoMinOrderByAggregateInput
    _sum?: BlocoSumOrderByAggregateInput
  }

  export type BlocoScalarWhereWithAggregatesInput = {
    AND?: BlocoScalarWhereWithAggregatesInput | BlocoScalarWhereWithAggregatesInput[]
    OR?: BlocoScalarWhereWithAggregatesInput[]
    NOT?: BlocoScalarWhereWithAggregatesInput | BlocoScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Bloco"> | number
    Nome?: StringWithAggregatesFilter<"Bloco"> | string
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    Id?: IntFilter<"Sala"> | number
    Codigo?: StringFilter<"Sala"> | string
    TipoId?: IntFilter<"Sala"> | number
    BlocoId?: IntFilter<"Sala"> | number
    Capacidade?: IntFilter<"Sala"> | number
    CreatedAt?: DateTimeFilter<"Sala"> | Date | string
    UpdatedAt?: DateTimeFilter<"Sala"> | Date | string
    Tipo?: XOR<TipoSalaScalarRelationFilter, TipoSalaWhereInput>
    Bloco?: XOR<BlocoScalarRelationFilter, BlocoWhereInput>
    Alocacoes?: AlocacaoListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    Id?: SortOrder
    Codigo?: SortOrder
    TipoId?: SortOrder
    BlocoId?: SortOrder
    Capacidade?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Tipo?: TipoSalaOrderByWithRelationInput
    Bloco?: BlocoOrderByWithRelationInput
    Alocacoes?: AlocacaoOrderByRelationAggregateInput
    _relevance?: SalaOrderByRelevanceInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Codigo?: string
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    TipoId?: IntFilter<"Sala"> | number
    BlocoId?: IntFilter<"Sala"> | number
    Capacidade?: IntFilter<"Sala"> | number
    CreatedAt?: DateTimeFilter<"Sala"> | Date | string
    UpdatedAt?: DateTimeFilter<"Sala"> | Date | string
    Tipo?: XOR<TipoSalaScalarRelationFilter, TipoSalaWhereInput>
    Bloco?: XOR<BlocoScalarRelationFilter, BlocoWhereInput>
    Alocacoes?: AlocacaoListRelationFilter
  }, "Id" | "Codigo">

  export type SalaOrderByWithAggregationInput = {
    Id?: SortOrder
    Codigo?: SortOrder
    TipoId?: SortOrder
    BlocoId?: SortOrder
    Capacidade?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Sala"> | number
    Codigo?: StringWithAggregatesFilter<"Sala"> | string
    TipoId?: IntWithAggregatesFilter<"Sala"> | number
    BlocoId?: IntWithAggregatesFilter<"Sala"> | number
    Capacidade?: IntWithAggregatesFilter<"Sala"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"Sala"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Sala"> | Date | string
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    Id?: IntFilter<"Disciplina"> | number
    Nome?: StringFilter<"Disciplina"> | string
    Alocacoes?: AlocacaoListRelationFilter
  }

  export type DisciplinaOrderByWithRelationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    Alocacoes?: AlocacaoOrderByRelationAggregateInput
    _relevance?: DisciplinaOrderByRelevanceInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    Nome?: string
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    Alocacoes?: AlocacaoListRelationFilter
  }, "Id" | "Nome">

  export type DisciplinaOrderByWithAggregationInput = {
    Id?: SortOrder
    Nome?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _avg?: DisciplinaAvgOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
    _sum?: DisciplinaSumOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Disciplina"> | number
    Nome?: StringWithAggregatesFilter<"Disciplina"> | string
  }

  export type AlocacaoWhereInput = {
    AND?: AlocacaoWhereInput | AlocacaoWhereInput[]
    OR?: AlocacaoWhereInput[]
    NOT?: AlocacaoWhereInput | AlocacaoWhereInput[]
    Id?: IntFilter<"Alocacao"> | number
    Data?: DateTimeNullableFilter<"Alocacao"> | Date | string | null
    DiaDaSemana?: IntFilter<"Alocacao"> | number
    HoraInicio?: StringFilter<"Alocacao"> | string
    HoraFim?: StringFilter<"Alocacao"> | string
    SalaId?: IntFilter<"Alocacao"> | number
    DisciplinaId?: IntFilter<"Alocacao"> | number
    CreatedAt?: DateTimeFilter<"Alocacao"> | Date | string
    UpdatedAt?: DateTimeFilter<"Alocacao"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Alocacao"> | Date | string | null
    Sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    Disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }

  export type AlocacaoOrderByWithRelationInput = {
    Id?: SortOrder
    Data?: SortOrderInput | SortOrder
    DiaDaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFim?: SortOrder
    SalaId?: SortOrder
    DisciplinaId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    Sala?: SalaOrderByWithRelationInput
    Disciplina?: DisciplinaOrderByWithRelationInput
    _relevance?: AlocacaoOrderByRelevanceInput
  }

  export type AlocacaoWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    SalaId_Data_HoraInicio_HoraFim?: AlocacaoSalaIdDataHoraInicioHoraFimCompoundUniqueInput
    AND?: AlocacaoWhereInput | AlocacaoWhereInput[]
    OR?: AlocacaoWhereInput[]
    NOT?: AlocacaoWhereInput | AlocacaoWhereInput[]
    Data?: DateTimeNullableFilter<"Alocacao"> | Date | string | null
    DiaDaSemana?: IntFilter<"Alocacao"> | number
    HoraInicio?: StringFilter<"Alocacao"> | string
    HoraFim?: StringFilter<"Alocacao"> | string
    SalaId?: IntFilter<"Alocacao"> | number
    DisciplinaId?: IntFilter<"Alocacao"> | number
    CreatedAt?: DateTimeFilter<"Alocacao"> | Date | string
    UpdatedAt?: DateTimeFilter<"Alocacao"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Alocacao"> | Date | string | null
    Sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    Disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
  }, "Id" | "SalaId_Data_HoraInicio_HoraFim">

  export type AlocacaoOrderByWithAggregationInput = {
    Id?: SortOrder
    Data?: SortOrderInput | SortOrder
    DiaDaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFim?: SortOrder
    SalaId?: SortOrder
    DisciplinaId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrderInput | SortOrder
    _count?: AlocacaoCountOrderByAggregateInput
    _avg?: AlocacaoAvgOrderByAggregateInput
    _max?: AlocacaoMaxOrderByAggregateInput
    _min?: AlocacaoMinOrderByAggregateInput
    _sum?: AlocacaoSumOrderByAggregateInput
  }

  export type AlocacaoScalarWhereWithAggregatesInput = {
    AND?: AlocacaoScalarWhereWithAggregatesInput | AlocacaoScalarWhereWithAggregatesInput[]
    OR?: AlocacaoScalarWhereWithAggregatesInput[]
    NOT?: AlocacaoScalarWhereWithAggregatesInput | AlocacaoScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Alocacao"> | number
    Data?: DateTimeNullableWithAggregatesFilter<"Alocacao"> | Date | string | null
    DiaDaSemana?: IntWithAggregatesFilter<"Alocacao"> | number
    HoraInicio?: StringWithAggregatesFilter<"Alocacao"> | string
    HoraFim?: StringWithAggregatesFilter<"Alocacao"> | string
    SalaId?: IntWithAggregatesFilter<"Alocacao"> | number
    DisciplinaId?: IntWithAggregatesFilter<"Alocacao"> | number
    CreatedAt?: DateTimeWithAggregatesFilter<"Alocacao"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"Alocacao"> | Date | string
    DeletedAt?: DateTimeNullableWithAggregatesFilter<"Alocacao"> | Date | string | null
  }

  export type TipoSalaCreateInput = {
    Nome: string
    Salas?: SalaCreateNestedManyWithoutTipoInput
  }

  export type TipoSalaUncheckedCreateInput = {
    Id?: number
    Nome: string
    Salas?: SalaUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoSalaUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Salas?: SalaUpdateManyWithoutTipoNestedInput
  }

  export type TipoSalaUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Salas?: SalaUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoSalaCreateManyInput = {
    Id?: number
    Nome: string
  }

  export type TipoSalaUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type TipoSalaUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type BlocoCreateInput = {
    Nome: string
    Salas?: SalaCreateNestedManyWithoutBlocoInput
  }

  export type BlocoUncheckedCreateInput = {
    Id?: number
    Nome: string
    Salas?: SalaUncheckedCreateNestedManyWithoutBlocoInput
  }

  export type BlocoUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Salas?: SalaUpdateManyWithoutBlocoNestedInput
  }

  export type BlocoUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Salas?: SalaUncheckedUpdateManyWithoutBlocoNestedInput
  }

  export type BlocoCreateManyInput = {
    Id?: number
    Nome: string
  }

  export type BlocoUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type BlocoUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type SalaCreateInput = {
    Codigo: string
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Tipo: TipoSalaCreateNestedOneWithoutSalasInput
    Bloco: BlocoCreateNestedOneWithoutSalasInput
    Alocacoes?: AlocacaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    Id?: number
    Codigo: string
    TipoId: number
    BlocoId: number
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Alocacoes?: AlocacaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    Codigo?: StringFieldUpdateOperationsInput | string
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tipo?: TipoSalaUpdateOneRequiredWithoutSalasNestedInput
    Bloco?: BlocoUpdateOneRequiredWithoutSalasNestedInput
    Alocacoes?: AlocacaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Codigo?: StringFieldUpdateOperationsInput | string
    TipoId?: IntFieldUpdateOperationsInput | number
    BlocoId?: IntFieldUpdateOperationsInput | number
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Alocacoes?: AlocacaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    Id?: number
    Codigo: string
    TipoId: number
    BlocoId: number
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type SalaUpdateManyMutationInput = {
    Codigo?: StringFieldUpdateOperationsInput | string
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Codigo?: StringFieldUpdateOperationsInput | string
    TipoId?: IntFieldUpdateOperationsInput | number
    BlocoId?: IntFieldUpdateOperationsInput | number
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinaCreateInput = {
    Nome: string
    Alocacoes?: AlocacaoCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    Id?: number
    Nome: string
    Alocacoes?: AlocacaoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUpdateInput = {
    Nome?: StringFieldUpdateOperationsInput | string
    Alocacoes?: AlocacaoUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
    Alocacoes?: AlocacaoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateManyInput = {
    Id?: number
    Nome: string
  }

  export type DisciplinaUpdateManyMutationInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type AlocacaoCreateInput = {
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Sala: SalaCreateNestedOneWithoutAlocacoesInput
    Disciplina: DisciplinaCreateNestedOneWithoutAlocacoesInput
  }

  export type AlocacaoUncheckedCreateInput = {
    Id?: number
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    SalaId: number
    DisciplinaId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
  }

  export type AlocacaoUpdateInput = {
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sala?: SalaUpdateOneRequiredWithoutAlocacoesNestedInput
    Disciplina?: DisciplinaUpdateOneRequiredWithoutAlocacoesNestedInput
  }

  export type AlocacaoUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    SalaId?: IntFieldUpdateOperationsInput | number
    DisciplinaId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlocacaoCreateManyInput = {
    Id?: number
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    SalaId: number
    DisciplinaId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
  }

  export type AlocacaoUpdateManyMutationInput = {
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlocacaoUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    SalaId?: IntFieldUpdateOperationsInput | number
    DisciplinaId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SalaListRelationFilter = {
    every?: SalaWhereInput
    some?: SalaWhereInput
    none?: SalaWhereInput
  }

  export type SalaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoSalaOrderByRelevanceInput = {
    fields: TipoSalaOrderByRelevanceFieldEnum | TipoSalaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipoSalaCountOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type TipoSalaAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type TipoSalaMaxOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type TipoSalaMinOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type TipoSalaSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BlocoOrderByRelevanceInput = {
    fields: BlocoOrderByRelevanceFieldEnum | BlocoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlocoCountOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type BlocoAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type BlocoMaxOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type BlocoMinOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type BlocoSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TipoSalaScalarRelationFilter = {
    is?: TipoSalaWhereInput
    isNot?: TipoSalaWhereInput
  }

  export type BlocoScalarRelationFilter = {
    is?: BlocoWhereInput
    isNot?: BlocoWhereInput
  }

  export type AlocacaoListRelationFilter = {
    every?: AlocacaoWhereInput
    some?: AlocacaoWhereInput
    none?: AlocacaoWhereInput
  }

  export type AlocacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaOrderByRelevanceInput = {
    fields: SalaOrderByRelevanceFieldEnum | SalaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SalaCountOrderByAggregateInput = {
    Id?: SortOrder
    Codigo?: SortOrder
    TipoId?: SortOrder
    BlocoId?: SortOrder
    Capacidade?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    Id?: SortOrder
    TipoId?: SortOrder
    BlocoId?: SortOrder
    Capacidade?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    Id?: SortOrder
    Codigo?: SortOrder
    TipoId?: SortOrder
    BlocoId?: SortOrder
    Capacidade?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    Id?: SortOrder
    Codigo?: SortOrder
    TipoId?: SortOrder
    BlocoId?: SortOrder
    Capacidade?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    Id?: SortOrder
    TipoId?: SortOrder
    BlocoId?: SortOrder
    Capacidade?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DisciplinaOrderByRelevanceInput = {
    fields: DisciplinaOrderByRelevanceFieldEnum | DisciplinaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DisciplinaCountOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type DisciplinaAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    Id?: SortOrder
    Nome?: SortOrder
  }

  export type DisciplinaSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type DisciplinaScalarRelationFilter = {
    is?: DisciplinaWhereInput
    isNot?: DisciplinaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlocacaoOrderByRelevanceInput = {
    fields: AlocacaoOrderByRelevanceFieldEnum | AlocacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlocacaoSalaIdDataHoraInicioHoraFimCompoundUniqueInput = {
    SalaId: number
    Data: Date | string
    HoraInicio: string
    HoraFim: string
  }

  export type AlocacaoCountOrderByAggregateInput = {
    Id?: SortOrder
    Data?: SortOrder
    DiaDaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFim?: SortOrder
    SalaId?: SortOrder
    DisciplinaId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
  }

  export type AlocacaoAvgOrderByAggregateInput = {
    Id?: SortOrder
    DiaDaSemana?: SortOrder
    SalaId?: SortOrder
    DisciplinaId?: SortOrder
  }

  export type AlocacaoMaxOrderByAggregateInput = {
    Id?: SortOrder
    Data?: SortOrder
    DiaDaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFim?: SortOrder
    SalaId?: SortOrder
    DisciplinaId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
  }

  export type AlocacaoMinOrderByAggregateInput = {
    Id?: SortOrder
    Data?: SortOrder
    DiaDaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFim?: SortOrder
    SalaId?: SortOrder
    DisciplinaId?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    DeletedAt?: SortOrder
  }

  export type AlocacaoSumOrderByAggregateInput = {
    Id?: SortOrder
    DiaDaSemana?: SortOrder
    SalaId?: SortOrder
    DisciplinaId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SalaCreateNestedManyWithoutTipoInput = {
    create?: XOR<SalaCreateWithoutTipoInput, SalaUncheckedCreateWithoutTipoInput> | SalaCreateWithoutTipoInput[] | SalaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutTipoInput | SalaCreateOrConnectWithoutTipoInput[]
    createMany?: SalaCreateManyTipoInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<SalaCreateWithoutTipoInput, SalaUncheckedCreateWithoutTipoInput> | SalaCreateWithoutTipoInput[] | SalaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutTipoInput | SalaCreateOrConnectWithoutTipoInput[]
    createMany?: SalaCreateManyTipoInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SalaUpdateManyWithoutTipoNestedInput = {
    create?: XOR<SalaCreateWithoutTipoInput, SalaUncheckedCreateWithoutTipoInput> | SalaCreateWithoutTipoInput[] | SalaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutTipoInput | SalaCreateOrConnectWithoutTipoInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutTipoInput | SalaUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: SalaCreateManyTipoInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutTipoInput | SalaUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutTipoInput | SalaUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalaUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<SalaCreateWithoutTipoInput, SalaUncheckedCreateWithoutTipoInput> | SalaCreateWithoutTipoInput[] | SalaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutTipoInput | SalaCreateOrConnectWithoutTipoInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutTipoInput | SalaUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: SalaCreateManyTipoInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutTipoInput | SalaUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutTipoInput | SalaUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type SalaCreateNestedManyWithoutBlocoInput = {
    create?: XOR<SalaCreateWithoutBlocoInput, SalaUncheckedCreateWithoutBlocoInput> | SalaCreateWithoutBlocoInput[] | SalaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutBlocoInput | SalaCreateOrConnectWithoutBlocoInput[]
    createMany?: SalaCreateManyBlocoInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutBlocoInput = {
    create?: XOR<SalaCreateWithoutBlocoInput, SalaUncheckedCreateWithoutBlocoInput> | SalaCreateWithoutBlocoInput[] | SalaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutBlocoInput | SalaCreateOrConnectWithoutBlocoInput[]
    createMany?: SalaCreateManyBlocoInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type SalaUpdateManyWithoutBlocoNestedInput = {
    create?: XOR<SalaCreateWithoutBlocoInput, SalaUncheckedCreateWithoutBlocoInput> | SalaCreateWithoutBlocoInput[] | SalaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutBlocoInput | SalaCreateOrConnectWithoutBlocoInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutBlocoInput | SalaUpsertWithWhereUniqueWithoutBlocoInput[]
    createMany?: SalaCreateManyBlocoInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutBlocoInput | SalaUpdateWithWhereUniqueWithoutBlocoInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutBlocoInput | SalaUpdateManyWithWhereWithoutBlocoInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type SalaUncheckedUpdateManyWithoutBlocoNestedInput = {
    create?: XOR<SalaCreateWithoutBlocoInput, SalaUncheckedCreateWithoutBlocoInput> | SalaCreateWithoutBlocoInput[] | SalaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutBlocoInput | SalaCreateOrConnectWithoutBlocoInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutBlocoInput | SalaUpsertWithWhereUniqueWithoutBlocoInput[]
    createMany?: SalaCreateManyBlocoInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutBlocoInput | SalaUpdateWithWhereUniqueWithoutBlocoInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutBlocoInput | SalaUpdateManyWithWhereWithoutBlocoInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type TipoSalaCreateNestedOneWithoutSalasInput = {
    create?: XOR<TipoSalaCreateWithoutSalasInput, TipoSalaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: TipoSalaCreateOrConnectWithoutSalasInput
    connect?: TipoSalaWhereUniqueInput
  }

  export type BlocoCreateNestedOneWithoutSalasInput = {
    create?: XOR<BlocoCreateWithoutSalasInput, BlocoUncheckedCreateWithoutSalasInput>
    connectOrCreate?: BlocoCreateOrConnectWithoutSalasInput
    connect?: BlocoWhereUniqueInput
  }

  export type AlocacaoCreateNestedManyWithoutSalaInput = {
    create?: XOR<AlocacaoCreateWithoutSalaInput, AlocacaoUncheckedCreateWithoutSalaInput> | AlocacaoCreateWithoutSalaInput[] | AlocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutSalaInput | AlocacaoCreateOrConnectWithoutSalaInput[]
    createMany?: AlocacaoCreateManySalaInputEnvelope
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
  }

  export type AlocacaoUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<AlocacaoCreateWithoutSalaInput, AlocacaoUncheckedCreateWithoutSalaInput> | AlocacaoCreateWithoutSalaInput[] | AlocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutSalaInput | AlocacaoCreateOrConnectWithoutSalaInput[]
    createMany?: AlocacaoCreateManySalaInputEnvelope
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TipoSalaUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<TipoSalaCreateWithoutSalasInput, TipoSalaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: TipoSalaCreateOrConnectWithoutSalasInput
    upsert?: TipoSalaUpsertWithoutSalasInput
    connect?: TipoSalaWhereUniqueInput
    update?: XOR<XOR<TipoSalaUpdateToOneWithWhereWithoutSalasInput, TipoSalaUpdateWithoutSalasInput>, TipoSalaUncheckedUpdateWithoutSalasInput>
  }

  export type BlocoUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<BlocoCreateWithoutSalasInput, BlocoUncheckedCreateWithoutSalasInput>
    connectOrCreate?: BlocoCreateOrConnectWithoutSalasInput
    upsert?: BlocoUpsertWithoutSalasInput
    connect?: BlocoWhereUniqueInput
    update?: XOR<XOR<BlocoUpdateToOneWithWhereWithoutSalasInput, BlocoUpdateWithoutSalasInput>, BlocoUncheckedUpdateWithoutSalasInput>
  }

  export type AlocacaoUpdateManyWithoutSalaNestedInput = {
    create?: XOR<AlocacaoCreateWithoutSalaInput, AlocacaoUncheckedCreateWithoutSalaInput> | AlocacaoCreateWithoutSalaInput[] | AlocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutSalaInput | AlocacaoCreateOrConnectWithoutSalaInput[]
    upsert?: AlocacaoUpsertWithWhereUniqueWithoutSalaInput | AlocacaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: AlocacaoCreateManySalaInputEnvelope
    set?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    disconnect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    delete?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    update?: AlocacaoUpdateWithWhereUniqueWithoutSalaInput | AlocacaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: AlocacaoUpdateManyWithWhereWithoutSalaInput | AlocacaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: AlocacaoScalarWhereInput | AlocacaoScalarWhereInput[]
  }

  export type AlocacaoUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<AlocacaoCreateWithoutSalaInput, AlocacaoUncheckedCreateWithoutSalaInput> | AlocacaoCreateWithoutSalaInput[] | AlocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutSalaInput | AlocacaoCreateOrConnectWithoutSalaInput[]
    upsert?: AlocacaoUpsertWithWhereUniqueWithoutSalaInput | AlocacaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: AlocacaoCreateManySalaInputEnvelope
    set?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    disconnect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    delete?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    update?: AlocacaoUpdateWithWhereUniqueWithoutSalaInput | AlocacaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: AlocacaoUpdateManyWithWhereWithoutSalaInput | AlocacaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: AlocacaoScalarWhereInput | AlocacaoScalarWhereInput[]
  }

  export type AlocacaoCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<AlocacaoCreateWithoutDisciplinaInput, AlocacaoUncheckedCreateWithoutDisciplinaInput> | AlocacaoCreateWithoutDisciplinaInput[] | AlocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutDisciplinaInput | AlocacaoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: AlocacaoCreateManyDisciplinaInputEnvelope
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
  }

  export type AlocacaoUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<AlocacaoCreateWithoutDisciplinaInput, AlocacaoUncheckedCreateWithoutDisciplinaInput> | AlocacaoCreateWithoutDisciplinaInput[] | AlocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutDisciplinaInput | AlocacaoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: AlocacaoCreateManyDisciplinaInputEnvelope
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
  }

  export type AlocacaoUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<AlocacaoCreateWithoutDisciplinaInput, AlocacaoUncheckedCreateWithoutDisciplinaInput> | AlocacaoCreateWithoutDisciplinaInput[] | AlocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutDisciplinaInput | AlocacaoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: AlocacaoUpsertWithWhereUniqueWithoutDisciplinaInput | AlocacaoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: AlocacaoCreateManyDisciplinaInputEnvelope
    set?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    disconnect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    delete?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    update?: AlocacaoUpdateWithWhereUniqueWithoutDisciplinaInput | AlocacaoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: AlocacaoUpdateManyWithWhereWithoutDisciplinaInput | AlocacaoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: AlocacaoScalarWhereInput | AlocacaoScalarWhereInput[]
  }

  export type AlocacaoUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<AlocacaoCreateWithoutDisciplinaInput, AlocacaoUncheckedCreateWithoutDisciplinaInput> | AlocacaoCreateWithoutDisciplinaInput[] | AlocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: AlocacaoCreateOrConnectWithoutDisciplinaInput | AlocacaoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: AlocacaoUpsertWithWhereUniqueWithoutDisciplinaInput | AlocacaoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: AlocacaoCreateManyDisciplinaInputEnvelope
    set?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    disconnect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    delete?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    connect?: AlocacaoWhereUniqueInput | AlocacaoWhereUniqueInput[]
    update?: AlocacaoUpdateWithWhereUniqueWithoutDisciplinaInput | AlocacaoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: AlocacaoUpdateManyWithWhereWithoutDisciplinaInput | AlocacaoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: AlocacaoScalarWhereInput | AlocacaoScalarWhereInput[]
  }

  export type SalaCreateNestedOneWithoutAlocacoesInput = {
    create?: XOR<SalaCreateWithoutAlocacoesInput, SalaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutAlocacoesInput
    connect?: SalaWhereUniqueInput
  }

  export type DisciplinaCreateNestedOneWithoutAlocacoesInput = {
    create?: XOR<DisciplinaCreateWithoutAlocacoesInput, DisciplinaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutAlocacoesInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SalaUpdateOneRequiredWithoutAlocacoesNestedInput = {
    create?: XOR<SalaCreateWithoutAlocacoesInput, SalaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutAlocacoesInput
    upsert?: SalaUpsertWithoutAlocacoesInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutAlocacoesInput, SalaUpdateWithoutAlocacoesInput>, SalaUncheckedUpdateWithoutAlocacoesInput>
  }

  export type DisciplinaUpdateOneRequiredWithoutAlocacoesNestedInput = {
    create?: XOR<DisciplinaCreateWithoutAlocacoesInput, DisciplinaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutAlocacoesInput
    upsert?: DisciplinaUpsertWithoutAlocacoesInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutAlocacoesInput, DisciplinaUpdateWithoutAlocacoesInput>, DisciplinaUncheckedUpdateWithoutAlocacoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SalaCreateWithoutTipoInput = {
    Codigo: string
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Bloco: BlocoCreateNestedOneWithoutSalasInput
    Alocacoes?: AlocacaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutTipoInput = {
    Id?: number
    Codigo: string
    BlocoId: number
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Alocacoes?: AlocacaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutTipoInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutTipoInput, SalaUncheckedCreateWithoutTipoInput>
  }

  export type SalaCreateManyTipoInputEnvelope = {
    data: SalaCreateManyTipoInput | SalaCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type SalaUpsertWithWhereUniqueWithoutTipoInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutTipoInput, SalaUncheckedUpdateWithoutTipoInput>
    create: XOR<SalaCreateWithoutTipoInput, SalaUncheckedCreateWithoutTipoInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutTipoInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutTipoInput, SalaUncheckedUpdateWithoutTipoInput>
  }

  export type SalaUpdateManyWithWhereWithoutTipoInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutTipoInput>
  }

  export type SalaScalarWhereInput = {
    AND?: SalaScalarWhereInput | SalaScalarWhereInput[]
    OR?: SalaScalarWhereInput[]
    NOT?: SalaScalarWhereInput | SalaScalarWhereInput[]
    Id?: IntFilter<"Sala"> | number
    Codigo?: StringFilter<"Sala"> | string
    TipoId?: IntFilter<"Sala"> | number
    BlocoId?: IntFilter<"Sala"> | number
    Capacidade?: IntFilter<"Sala"> | number
    CreatedAt?: DateTimeFilter<"Sala"> | Date | string
    UpdatedAt?: DateTimeFilter<"Sala"> | Date | string
  }

  export type SalaCreateWithoutBlocoInput = {
    Codigo: string
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Tipo: TipoSalaCreateNestedOneWithoutSalasInput
    Alocacoes?: AlocacaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutBlocoInput = {
    Id?: number
    Codigo: string
    TipoId: number
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Alocacoes?: AlocacaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutBlocoInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutBlocoInput, SalaUncheckedCreateWithoutBlocoInput>
  }

  export type SalaCreateManyBlocoInputEnvelope = {
    data: SalaCreateManyBlocoInput | SalaCreateManyBlocoInput[]
    skipDuplicates?: boolean
  }

  export type SalaUpsertWithWhereUniqueWithoutBlocoInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutBlocoInput, SalaUncheckedUpdateWithoutBlocoInput>
    create: XOR<SalaCreateWithoutBlocoInput, SalaUncheckedCreateWithoutBlocoInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutBlocoInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutBlocoInput, SalaUncheckedUpdateWithoutBlocoInput>
  }

  export type SalaUpdateManyWithWhereWithoutBlocoInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutBlocoInput>
  }

  export type TipoSalaCreateWithoutSalasInput = {
    Nome: string
  }

  export type TipoSalaUncheckedCreateWithoutSalasInput = {
    Id?: number
    Nome: string
  }

  export type TipoSalaCreateOrConnectWithoutSalasInput = {
    where: TipoSalaWhereUniqueInput
    create: XOR<TipoSalaCreateWithoutSalasInput, TipoSalaUncheckedCreateWithoutSalasInput>
  }

  export type BlocoCreateWithoutSalasInput = {
    Nome: string
  }

  export type BlocoUncheckedCreateWithoutSalasInput = {
    Id?: number
    Nome: string
  }

  export type BlocoCreateOrConnectWithoutSalasInput = {
    where: BlocoWhereUniqueInput
    create: XOR<BlocoCreateWithoutSalasInput, BlocoUncheckedCreateWithoutSalasInput>
  }

  export type AlocacaoCreateWithoutSalaInput = {
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Disciplina: DisciplinaCreateNestedOneWithoutAlocacoesInput
  }

  export type AlocacaoUncheckedCreateWithoutSalaInput = {
    Id?: number
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    DisciplinaId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
  }

  export type AlocacaoCreateOrConnectWithoutSalaInput = {
    where: AlocacaoWhereUniqueInput
    create: XOR<AlocacaoCreateWithoutSalaInput, AlocacaoUncheckedCreateWithoutSalaInput>
  }

  export type AlocacaoCreateManySalaInputEnvelope = {
    data: AlocacaoCreateManySalaInput | AlocacaoCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type TipoSalaUpsertWithoutSalasInput = {
    update: XOR<TipoSalaUpdateWithoutSalasInput, TipoSalaUncheckedUpdateWithoutSalasInput>
    create: XOR<TipoSalaCreateWithoutSalasInput, TipoSalaUncheckedCreateWithoutSalasInput>
    where?: TipoSalaWhereInput
  }

  export type TipoSalaUpdateToOneWithWhereWithoutSalasInput = {
    where?: TipoSalaWhereInput
    data: XOR<TipoSalaUpdateWithoutSalasInput, TipoSalaUncheckedUpdateWithoutSalasInput>
  }

  export type TipoSalaUpdateWithoutSalasInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type TipoSalaUncheckedUpdateWithoutSalasInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type BlocoUpsertWithoutSalasInput = {
    update: XOR<BlocoUpdateWithoutSalasInput, BlocoUncheckedUpdateWithoutSalasInput>
    create: XOR<BlocoCreateWithoutSalasInput, BlocoUncheckedCreateWithoutSalasInput>
    where?: BlocoWhereInput
  }

  export type BlocoUpdateToOneWithWhereWithoutSalasInput = {
    where?: BlocoWhereInput
    data: XOR<BlocoUpdateWithoutSalasInput, BlocoUncheckedUpdateWithoutSalasInput>
  }

  export type BlocoUpdateWithoutSalasInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type BlocoUncheckedUpdateWithoutSalasInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type AlocacaoUpsertWithWhereUniqueWithoutSalaInput = {
    where: AlocacaoWhereUniqueInput
    update: XOR<AlocacaoUpdateWithoutSalaInput, AlocacaoUncheckedUpdateWithoutSalaInput>
    create: XOR<AlocacaoCreateWithoutSalaInput, AlocacaoUncheckedCreateWithoutSalaInput>
  }

  export type AlocacaoUpdateWithWhereUniqueWithoutSalaInput = {
    where: AlocacaoWhereUniqueInput
    data: XOR<AlocacaoUpdateWithoutSalaInput, AlocacaoUncheckedUpdateWithoutSalaInput>
  }

  export type AlocacaoUpdateManyWithWhereWithoutSalaInput = {
    where: AlocacaoScalarWhereInput
    data: XOR<AlocacaoUpdateManyMutationInput, AlocacaoUncheckedUpdateManyWithoutSalaInput>
  }

  export type AlocacaoScalarWhereInput = {
    AND?: AlocacaoScalarWhereInput | AlocacaoScalarWhereInput[]
    OR?: AlocacaoScalarWhereInput[]
    NOT?: AlocacaoScalarWhereInput | AlocacaoScalarWhereInput[]
    Id?: IntFilter<"Alocacao"> | number
    Data?: DateTimeNullableFilter<"Alocacao"> | Date | string | null
    DiaDaSemana?: IntFilter<"Alocacao"> | number
    HoraInicio?: StringFilter<"Alocacao"> | string
    HoraFim?: StringFilter<"Alocacao"> | string
    SalaId?: IntFilter<"Alocacao"> | number
    DisciplinaId?: IntFilter<"Alocacao"> | number
    CreatedAt?: DateTimeFilter<"Alocacao"> | Date | string
    UpdatedAt?: DateTimeFilter<"Alocacao"> | Date | string
    DeletedAt?: DateTimeNullableFilter<"Alocacao"> | Date | string | null
  }

  export type AlocacaoCreateWithoutDisciplinaInput = {
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
    Sala: SalaCreateNestedOneWithoutAlocacoesInput
  }

  export type AlocacaoUncheckedCreateWithoutDisciplinaInput = {
    Id?: number
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    SalaId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
  }

  export type AlocacaoCreateOrConnectWithoutDisciplinaInput = {
    where: AlocacaoWhereUniqueInput
    create: XOR<AlocacaoCreateWithoutDisciplinaInput, AlocacaoUncheckedCreateWithoutDisciplinaInput>
  }

  export type AlocacaoCreateManyDisciplinaInputEnvelope = {
    data: AlocacaoCreateManyDisciplinaInput | AlocacaoCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type AlocacaoUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: AlocacaoWhereUniqueInput
    update: XOR<AlocacaoUpdateWithoutDisciplinaInput, AlocacaoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<AlocacaoCreateWithoutDisciplinaInput, AlocacaoUncheckedCreateWithoutDisciplinaInput>
  }

  export type AlocacaoUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: AlocacaoWhereUniqueInput
    data: XOR<AlocacaoUpdateWithoutDisciplinaInput, AlocacaoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type AlocacaoUpdateManyWithWhereWithoutDisciplinaInput = {
    where: AlocacaoScalarWhereInput
    data: XOR<AlocacaoUpdateManyMutationInput, AlocacaoUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type SalaCreateWithoutAlocacoesInput = {
    Codigo: string
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    Tipo: TipoSalaCreateNestedOneWithoutSalasInput
    Bloco: BlocoCreateNestedOneWithoutSalasInput
  }

  export type SalaUncheckedCreateWithoutAlocacoesInput = {
    Id?: number
    Codigo: string
    TipoId: number
    BlocoId: number
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type SalaCreateOrConnectWithoutAlocacoesInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutAlocacoesInput, SalaUncheckedCreateWithoutAlocacoesInput>
  }

  export type DisciplinaCreateWithoutAlocacoesInput = {
    Nome: string
  }

  export type DisciplinaUncheckedCreateWithoutAlocacoesInput = {
    Id?: number
    Nome: string
  }

  export type DisciplinaCreateOrConnectWithoutAlocacoesInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutAlocacoesInput, DisciplinaUncheckedCreateWithoutAlocacoesInput>
  }

  export type SalaUpsertWithoutAlocacoesInput = {
    update: XOR<SalaUpdateWithoutAlocacoesInput, SalaUncheckedUpdateWithoutAlocacoesInput>
    create: XOR<SalaCreateWithoutAlocacoesInput, SalaUncheckedCreateWithoutAlocacoesInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutAlocacoesInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutAlocacoesInput, SalaUncheckedUpdateWithoutAlocacoesInput>
  }

  export type SalaUpdateWithoutAlocacoesInput = {
    Codigo?: StringFieldUpdateOperationsInput | string
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tipo?: TipoSalaUpdateOneRequiredWithoutSalasNestedInput
    Bloco?: BlocoUpdateOneRequiredWithoutSalasNestedInput
  }

  export type SalaUncheckedUpdateWithoutAlocacoesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Codigo?: StringFieldUpdateOperationsInput | string
    TipoId?: IntFieldUpdateOperationsInput | number
    BlocoId?: IntFieldUpdateOperationsInput | number
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisciplinaUpsertWithoutAlocacoesInput = {
    update: XOR<DisciplinaUpdateWithoutAlocacoesInput, DisciplinaUncheckedUpdateWithoutAlocacoesInput>
    create: XOR<DisciplinaCreateWithoutAlocacoesInput, DisciplinaUncheckedCreateWithoutAlocacoesInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutAlocacoesInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutAlocacoesInput, DisciplinaUncheckedUpdateWithoutAlocacoesInput>
  }

  export type DisciplinaUpdateWithoutAlocacoesInput = {
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUncheckedUpdateWithoutAlocacoesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Nome?: StringFieldUpdateOperationsInput | string
  }

  export type SalaCreateManyTipoInput = {
    Id?: number
    Codigo: string
    BlocoId: number
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type SalaUpdateWithoutTipoInput = {
    Codigo?: StringFieldUpdateOperationsInput | string
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bloco?: BlocoUpdateOneRequiredWithoutSalasNestedInput
    Alocacoes?: AlocacaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutTipoInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Codigo?: StringFieldUpdateOperationsInput | string
    BlocoId?: IntFieldUpdateOperationsInput | number
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Alocacoes?: AlocacaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutTipoInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Codigo?: StringFieldUpdateOperationsInput | string
    BlocoId?: IntFieldUpdateOperationsInput | number
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaCreateManyBlocoInput = {
    Id?: number
    Codigo: string
    TipoId: number
    Capacidade: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type SalaUpdateWithoutBlocoInput = {
    Codigo?: StringFieldUpdateOperationsInput | string
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tipo?: TipoSalaUpdateOneRequiredWithoutSalasNestedInput
    Alocacoes?: AlocacaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutBlocoInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Codigo?: StringFieldUpdateOperationsInput | string
    TipoId?: IntFieldUpdateOperationsInput | number
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Alocacoes?: AlocacaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutBlocoInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Codigo?: StringFieldUpdateOperationsInput | string
    TipoId?: IntFieldUpdateOperationsInput | number
    Capacidade?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoCreateManySalaInput = {
    Id?: number
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    DisciplinaId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
  }

  export type AlocacaoUpdateWithoutSalaInput = {
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Disciplina?: DisciplinaUpdateOneRequiredWithoutAlocacoesNestedInput
  }

  export type AlocacaoUncheckedUpdateWithoutSalaInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    DisciplinaId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlocacaoUncheckedUpdateManyWithoutSalaInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    DisciplinaId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlocacaoCreateManyDisciplinaInput = {
    Id?: number
    Data?: Date | string | null
    DiaDaSemana: number
    HoraInicio: string
    HoraFim: string
    SalaId: number
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
    DeletedAt?: Date | string | null
  }

  export type AlocacaoUpdateWithoutDisciplinaInput = {
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sala?: SalaUpdateOneRequiredWithoutAlocacoesNestedInput
  }

  export type AlocacaoUncheckedUpdateWithoutDisciplinaInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    SalaId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlocacaoUncheckedUpdateManyWithoutDisciplinaInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DiaDaSemana?: IntFieldUpdateOperationsInput | number
    HoraInicio?: StringFieldUpdateOperationsInput | string
    HoraFim?: StringFieldUpdateOperationsInput | string
    SalaId?: IntFieldUpdateOperationsInput | number
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}