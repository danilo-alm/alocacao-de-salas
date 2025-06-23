
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
 * Model tipo_sala
 * 
 */
export type tipo_sala = $Result.DefaultSelection<Prisma.$tipo_salaPayload>
/**
 * Model bloco
 * 
 */
export type bloco = $Result.DefaultSelection<Prisma.$blocoPayload>
/**
 * Model sala
 * 
 */
export type sala = $Result.DefaultSelection<Prisma.$salaPayload>
/**
 * Model disciplina
 * 
 */
export type disciplina = $Result.DefaultSelection<Prisma.$disciplinaPayload>
/**
 * Model alocacao
 * 
 */
export type alocacao = $Result.DefaultSelection<Prisma.$alocacaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tipo_salas
 * const tipo_salas = await prisma.tipo_sala.findMany()
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
   * // Fetch zero or more Tipo_salas
   * const tipo_salas = await prisma.tipo_sala.findMany()
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
   * `prisma.tipo_sala`: Exposes CRUD operations for the **tipo_sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_salas
    * const tipo_salas = await prisma.tipo_sala.findMany()
    * ```
    */
  get tipo_sala(): Prisma.tipo_salaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloco`: Exposes CRUD operations for the **bloco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocos
    * const blocos = await prisma.bloco.findMany()
    * ```
    */
  get bloco(): Prisma.blocoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.salaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.disciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alocacao`: Exposes CRUD operations for the **alocacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alocacaos
    * const alocacaos = await prisma.alocacao.findMany()
    * ```
    */
  get alocacao(): Prisma.alocacaoDelegate<ExtArgs, ClientOptions>;
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
    tipo_sala: 'tipo_sala',
    bloco: 'bloco',
    sala: 'sala',
    disciplina: 'disciplina',
    alocacao: 'alocacao'
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
      modelProps: "tipo_sala" | "bloco" | "sala" | "disciplina" | "alocacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tipo_sala: {
        payload: Prisma.$tipo_salaPayload<ExtArgs>
        fields: Prisma.tipo_salaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_salaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_salaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload>
          }
          findFirst: {
            args: Prisma.tipo_salaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_salaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload>
          }
          findMany: {
            args: Prisma.tipo_salaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload>[]
          }
          create: {
            args: Prisma.tipo_salaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload>
          }
          createMany: {
            args: Prisma.tipo_salaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipo_salaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload>
          }
          update: {
            args: Prisma.tipo_salaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload>
          }
          deleteMany: {
            args: Prisma.tipo_salaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_salaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipo_salaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_salaPayload>
          }
          aggregate: {
            args: Prisma.Tipo_salaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_sala>
          }
          groupBy: {
            args: Prisma.tipo_salaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_salaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_salaCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_salaCountAggregateOutputType> | number
          }
        }
      }
      bloco: {
        payload: Prisma.$blocoPayload<ExtArgs>
        fields: Prisma.blocoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blocoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blocoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload>
          }
          findFirst: {
            args: Prisma.blocoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blocoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload>
          }
          findMany: {
            args: Prisma.blocoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload>[]
          }
          create: {
            args: Prisma.blocoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload>
          }
          createMany: {
            args: Prisma.blocoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.blocoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload>
          }
          update: {
            args: Prisma.blocoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload>
          }
          deleteMany: {
            args: Prisma.blocoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blocoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.blocoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blocoPayload>
          }
          aggregate: {
            args: Prisma.BlocoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloco>
          }
          groupBy: {
            args: Prisma.blocoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlocoGroupByOutputType>[]
          }
          count: {
            args: Prisma.blocoCountArgs<ExtArgs>
            result: $Utils.Optional<BlocoCountAggregateOutputType> | number
          }
        }
      }
      sala: {
        payload: Prisma.$salaPayload<ExtArgs>
        fields: Prisma.salaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload>
          }
          findFirst: {
            args: Prisma.salaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload>
          }
          findMany: {
            args: Prisma.salaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload>[]
          }
          create: {
            args: Prisma.salaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload>
          }
          createMany: {
            args: Prisma.salaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.salaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload>
          }
          update: {
            args: Prisma.salaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload>
          }
          deleteMany: {
            args: Prisma.salaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.salaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.salaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.salaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      disciplina: {
        payload: Prisma.$disciplinaPayload<ExtArgs>
        fields: Prisma.disciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.disciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.disciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          findFirst: {
            args: Prisma.disciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.disciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          findMany: {
            args: Prisma.disciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>[]
          }
          create: {
            args: Prisma.disciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          createMany: {
            args: Prisma.disciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.disciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          update: {
            args: Prisma.disciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          deleteMany: {
            args: Prisma.disciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.disciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.disciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.disciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.disciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      alocacao: {
        payload: Prisma.$alocacaoPayload<ExtArgs>
        fields: Prisma.alocacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alocacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alocacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload>
          }
          findFirst: {
            args: Prisma.alocacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alocacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload>
          }
          findMany: {
            args: Prisma.alocacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload>[]
          }
          create: {
            args: Prisma.alocacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload>
          }
          createMany: {
            args: Prisma.alocacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alocacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload>
          }
          update: {
            args: Prisma.alocacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload>
          }
          deleteMany: {
            args: Prisma.alocacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alocacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alocacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alocacaoPayload>
          }
          aggregate: {
            args: Prisma.AlocacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlocacao>
          }
          groupBy: {
            args: Prisma.alocacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlocacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.alocacaoCountArgs<ExtArgs>
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
    tipo_sala?: tipo_salaOmit
    bloco?: blocoOmit
    sala?: salaOmit
    disciplina?: disciplinaOmit
    alocacao?: alocacaoOmit
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
   * Count Type Tipo_salaCountOutputType
   */

  export type Tipo_salaCountOutputType = {
    salas: number
  }

  export type Tipo_salaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | Tipo_salaCountOutputTypeCountSalasArgs
  }

  // Custom InputTypes
  /**
   * Tipo_salaCountOutputType without action
   */
  export type Tipo_salaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_salaCountOutputType
     */
    select?: Tipo_salaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_salaCountOutputType without action
   */
  export type Tipo_salaCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salaWhereInput
  }


  /**
   * Count Type BlocoCountOutputType
   */

  export type BlocoCountOutputType = {
    salas: number
  }

  export type BlocoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | BlocoCountOutputTypeCountSalasArgs
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
    where?: salaWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    alocacoes: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alocacoes?: boolean | SalaCountOutputTypeCountAlocacoesArgs
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
    where?: alocacaoWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    alocacoes: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alocacoes?: boolean | DisciplinaCountOutputTypeCountAlocacoesArgs
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
    where?: alocacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tipo_sala
   */

  export type AggregateTipo_sala = {
    _count: Tipo_salaCountAggregateOutputType | null
    _avg: Tipo_salaAvgAggregateOutputType | null
    _sum: Tipo_salaSumAggregateOutputType | null
    _min: Tipo_salaMinAggregateOutputType | null
    _max: Tipo_salaMaxAggregateOutputType | null
  }

  export type Tipo_salaAvgAggregateOutputType = {
    id: number | null
  }

  export type Tipo_salaSumAggregateOutputType = {
    id: number | null
  }

  export type Tipo_salaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Tipo_salaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Tipo_salaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type Tipo_salaAvgAggregateInputType = {
    id?: true
  }

  export type Tipo_salaSumAggregateInputType = {
    id?: true
  }

  export type Tipo_salaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Tipo_salaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Tipo_salaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type Tipo_salaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_sala to aggregate.
     */
    where?: tipo_salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_salas to fetch.
     */
    orderBy?: tipo_salaOrderByWithRelationInput | tipo_salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_salas
    **/
    _count?: true | Tipo_salaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_salaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_salaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_salaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_salaMaxAggregateInputType
  }

  export type GetTipo_salaAggregateType<T extends Tipo_salaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_sala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_sala[P]>
      : GetScalarType<T[P], AggregateTipo_sala[P]>
  }




  export type tipo_salaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_salaWhereInput
    orderBy?: tipo_salaOrderByWithAggregationInput | tipo_salaOrderByWithAggregationInput[]
    by: Tipo_salaScalarFieldEnum[] | Tipo_salaScalarFieldEnum
    having?: tipo_salaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_salaCountAggregateInputType | true
    _avg?: Tipo_salaAvgAggregateInputType
    _sum?: Tipo_salaSumAggregateInputType
    _min?: Tipo_salaMinAggregateInputType
    _max?: Tipo_salaMaxAggregateInputType
  }

  export type Tipo_salaGroupByOutputType = {
    id: number
    nome: string
    _count: Tipo_salaCountAggregateOutputType | null
    _avg: Tipo_salaAvgAggregateOutputType | null
    _sum: Tipo_salaSumAggregateOutputType | null
    _min: Tipo_salaMinAggregateOutputType | null
    _max: Tipo_salaMaxAggregateOutputType | null
  }

  type GetTipo_salaGroupByPayload<T extends tipo_salaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_salaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_salaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_salaGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_salaGroupByOutputType[P]>
        }
      >
    >


  export type tipo_salaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    salas?: boolean | tipo_sala$salasArgs<ExtArgs>
    _count?: boolean | Tipo_salaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_sala"]>



  export type tipo_salaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type tipo_salaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["tipo_sala"]>
  export type tipo_salaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | tipo_sala$salasArgs<ExtArgs>
    _count?: boolean | Tipo_salaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipo_salaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_sala"
    objects: {
      salas: Prisma.$salaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["tipo_sala"]>
    composites: {}
  }

  type tipo_salaGetPayload<S extends boolean | null | undefined | tipo_salaDefaultArgs> = $Result.GetResult<Prisma.$tipo_salaPayload, S>

  type tipo_salaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_salaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_salaCountAggregateInputType | true
    }

  export interface tipo_salaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_sala'], meta: { name: 'tipo_sala' } }
    /**
     * Find zero or one Tipo_sala that matches the filter.
     * @param {tipo_salaFindUniqueArgs} args - Arguments to find a Tipo_sala
     * @example
     * // Get one Tipo_sala
     * const tipo_sala = await prisma.tipo_sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_salaFindUniqueArgs>(args: SelectSubset<T, tipo_salaFindUniqueArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_salaFindUniqueOrThrowArgs} args - Arguments to find a Tipo_sala
     * @example
     * // Get one Tipo_sala
     * const tipo_sala = await prisma.tipo_sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_salaFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_salaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_salaFindFirstArgs} args - Arguments to find a Tipo_sala
     * @example
     * // Get one Tipo_sala
     * const tipo_sala = await prisma.tipo_sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_salaFindFirstArgs>(args?: SelectSubset<T, tipo_salaFindFirstArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_salaFindFirstOrThrowArgs} args - Arguments to find a Tipo_sala
     * @example
     * // Get one Tipo_sala
     * const tipo_sala = await prisma.tipo_sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_salaFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_salaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_salaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_salas
     * const tipo_salas = await prisma.tipo_sala.findMany()
     * 
     * // Get first 10 Tipo_salas
     * const tipo_salas = await prisma.tipo_sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipo_salaWithIdOnly = await prisma.tipo_sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipo_salaFindManyArgs>(args?: SelectSubset<T, tipo_salaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_sala.
     * @param {tipo_salaCreateArgs} args - Arguments to create a Tipo_sala.
     * @example
     * // Create one Tipo_sala
     * const Tipo_sala = await prisma.tipo_sala.create({
     *   data: {
     *     // ... data to create a Tipo_sala
     *   }
     * })
     * 
     */
    create<T extends tipo_salaCreateArgs>(args: SelectSubset<T, tipo_salaCreateArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_salas.
     * @param {tipo_salaCreateManyArgs} args - Arguments to create many Tipo_salas.
     * @example
     * // Create many Tipo_salas
     * const tipo_sala = await prisma.tipo_sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_salaCreateManyArgs>(args?: SelectSubset<T, tipo_salaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_sala.
     * @param {tipo_salaDeleteArgs} args - Arguments to delete one Tipo_sala.
     * @example
     * // Delete one Tipo_sala
     * const Tipo_sala = await prisma.tipo_sala.delete({
     *   where: {
     *     // ... filter to delete one Tipo_sala
     *   }
     * })
     * 
     */
    delete<T extends tipo_salaDeleteArgs>(args: SelectSubset<T, tipo_salaDeleteArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_sala.
     * @param {tipo_salaUpdateArgs} args - Arguments to update one Tipo_sala.
     * @example
     * // Update one Tipo_sala
     * const tipo_sala = await prisma.tipo_sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_salaUpdateArgs>(args: SelectSubset<T, tipo_salaUpdateArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_salas.
     * @param {tipo_salaDeleteManyArgs} args - Arguments to filter Tipo_salas to delete.
     * @example
     * // Delete a few Tipo_salas
     * const { count } = await prisma.tipo_sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_salaDeleteManyArgs>(args?: SelectSubset<T, tipo_salaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_salaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_salas
     * const tipo_sala = await prisma.tipo_sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_salaUpdateManyArgs>(args: SelectSubset<T, tipo_salaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_sala.
     * @param {tipo_salaUpsertArgs} args - Arguments to update or create a Tipo_sala.
     * @example
     * // Update or create a Tipo_sala
     * const tipo_sala = await prisma.tipo_sala.upsert({
     *   create: {
     *     // ... data to create a Tipo_sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_sala we want to update
     *   }
     * })
     */
    upsert<T extends tipo_salaUpsertArgs>(args: SelectSubset<T, tipo_salaUpsertArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_salaCountArgs} args - Arguments to filter Tipo_salas to count.
     * @example
     * // Count the number of Tipo_salas
     * const count = await prisma.tipo_sala.count({
     *   where: {
     *     // ... the filter for the Tipo_salas we want to count
     *   }
     * })
    **/
    count<T extends tipo_salaCountArgs>(
      args?: Subset<T, tipo_salaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_salaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_salaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipo_salaAggregateArgs>(args: Subset<T, Tipo_salaAggregateArgs>): Prisma.PrismaPromise<GetTipo_salaAggregateType<T>>

    /**
     * Group by Tipo_sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_salaGroupByArgs} args - Group by arguments.
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
      T extends tipo_salaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_salaGroupByArgs['orderBy'] }
        : { orderBy?: tipo_salaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipo_salaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_salaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_sala model
   */
  readonly fields: tipo_salaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_salaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salas<T extends tipo_sala$salasArgs<ExtArgs> = {}>(args?: Subset<T, tipo_sala$salasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipo_sala model
   */
  interface tipo_salaFieldRefs {
    readonly id: FieldRef<"tipo_sala", 'Int'>
    readonly nome: FieldRef<"tipo_sala", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_sala findUnique
   */
  export type tipo_salaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_sala to fetch.
     */
    where: tipo_salaWhereUniqueInput
  }

  /**
   * tipo_sala findUniqueOrThrow
   */
  export type tipo_salaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_sala to fetch.
     */
    where: tipo_salaWhereUniqueInput
  }

  /**
   * tipo_sala findFirst
   */
  export type tipo_salaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_sala to fetch.
     */
    where?: tipo_salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_salas to fetch.
     */
    orderBy?: tipo_salaOrderByWithRelationInput | tipo_salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_salas.
     */
    cursor?: tipo_salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_salas.
     */
    distinct?: Tipo_salaScalarFieldEnum | Tipo_salaScalarFieldEnum[]
  }

  /**
   * tipo_sala findFirstOrThrow
   */
  export type tipo_salaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_sala to fetch.
     */
    where?: tipo_salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_salas to fetch.
     */
    orderBy?: tipo_salaOrderByWithRelationInput | tipo_salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_salas.
     */
    cursor?: tipo_salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_salas.
     */
    distinct?: Tipo_salaScalarFieldEnum | Tipo_salaScalarFieldEnum[]
  }

  /**
   * tipo_sala findMany
   */
  export type tipo_salaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * Filter, which tipo_salas to fetch.
     */
    where?: tipo_salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_salas to fetch.
     */
    orderBy?: tipo_salaOrderByWithRelationInput | tipo_salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_salas.
     */
    cursor?: tipo_salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_salas.
     */
    skip?: number
    distinct?: Tipo_salaScalarFieldEnum | Tipo_salaScalarFieldEnum[]
  }

  /**
   * tipo_sala create
   */
  export type tipo_salaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_sala.
     */
    data: XOR<tipo_salaCreateInput, tipo_salaUncheckedCreateInput>
  }

  /**
   * tipo_sala createMany
   */
  export type tipo_salaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_salas.
     */
    data: tipo_salaCreateManyInput | tipo_salaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_sala update
   */
  export type tipo_salaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_sala.
     */
    data: XOR<tipo_salaUpdateInput, tipo_salaUncheckedUpdateInput>
    /**
     * Choose, which tipo_sala to update.
     */
    where: tipo_salaWhereUniqueInput
  }

  /**
   * tipo_sala updateMany
   */
  export type tipo_salaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_salas.
     */
    data: XOR<tipo_salaUpdateManyMutationInput, tipo_salaUncheckedUpdateManyInput>
    /**
     * Filter which tipo_salas to update
     */
    where?: tipo_salaWhereInput
    /**
     * Limit how many tipo_salas to update.
     */
    limit?: number
  }

  /**
   * tipo_sala upsert
   */
  export type tipo_salaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_sala to update in case it exists.
     */
    where: tipo_salaWhereUniqueInput
    /**
     * In case the tipo_sala found by the `where` argument doesn't exist, create a new tipo_sala with this data.
     */
    create: XOR<tipo_salaCreateInput, tipo_salaUncheckedCreateInput>
    /**
     * In case the tipo_sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_salaUpdateInput, tipo_salaUncheckedUpdateInput>
  }

  /**
   * tipo_sala delete
   */
  export type tipo_salaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
    /**
     * Filter which tipo_sala to delete.
     */
    where: tipo_salaWhereUniqueInput
  }

  /**
   * tipo_sala deleteMany
   */
  export type tipo_salaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_salas to delete
     */
    where?: tipo_salaWhereInput
    /**
     * Limit how many tipo_salas to delete.
     */
    limit?: number
  }

  /**
   * tipo_sala.salas
   */
  export type tipo_sala$salasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    where?: salaWhereInput
    orderBy?: salaOrderByWithRelationInput | salaOrderByWithRelationInput[]
    cursor?: salaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * tipo_sala without action
   */
  export type tipo_salaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_sala
     */
    select?: tipo_salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_sala
     */
    omit?: tipo_salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_salaInclude<ExtArgs> | null
  }


  /**
   * Model bloco
   */

  export type AggregateBloco = {
    _count: BlocoCountAggregateOutputType | null
    _avg: BlocoAvgAggregateOutputType | null
    _sum: BlocoSumAggregateOutputType | null
    _min: BlocoMinAggregateOutputType | null
    _max: BlocoMaxAggregateOutputType | null
  }

  export type BlocoAvgAggregateOutputType = {
    id: number | null
  }

  export type BlocoSumAggregateOutputType = {
    id: number | null
  }

  export type BlocoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type BlocoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type BlocoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type BlocoAvgAggregateInputType = {
    id?: true
  }

  export type BlocoSumAggregateInputType = {
    id?: true
  }

  export type BlocoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type BlocoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type BlocoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type BlocoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bloco to aggregate.
     */
    where?: blocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocos to fetch.
     */
    orderBy?: blocoOrderByWithRelationInput | blocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blocos
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




  export type blocoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blocoWhereInput
    orderBy?: blocoOrderByWithAggregationInput | blocoOrderByWithAggregationInput[]
    by: BlocoScalarFieldEnum[] | BlocoScalarFieldEnum
    having?: blocoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlocoCountAggregateInputType | true
    _avg?: BlocoAvgAggregateInputType
    _sum?: BlocoSumAggregateInputType
    _min?: BlocoMinAggregateInputType
    _max?: BlocoMaxAggregateInputType
  }

  export type BlocoGroupByOutputType = {
    id: number
    nome: string
    _count: BlocoCountAggregateOutputType | null
    _avg: BlocoAvgAggregateOutputType | null
    _sum: BlocoSumAggregateOutputType | null
    _min: BlocoMinAggregateOutputType | null
    _max: BlocoMaxAggregateOutputType | null
  }

  type GetBlocoGroupByPayload<T extends blocoGroupByArgs> = Prisma.PrismaPromise<
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


  export type blocoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    salas?: boolean | bloco$salasArgs<ExtArgs>
    _count?: boolean | BlocoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloco"]>



  export type blocoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type blocoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["bloco"]>
  export type blocoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | bloco$salasArgs<ExtArgs>
    _count?: boolean | BlocoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $blocoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bloco"
    objects: {
      salas: Prisma.$salaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["bloco"]>
    composites: {}
  }

  type blocoGetPayload<S extends boolean | null | undefined | blocoDefaultArgs> = $Result.GetResult<Prisma.$blocoPayload, S>

  type blocoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blocoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlocoCountAggregateInputType | true
    }

  export interface blocoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bloco'], meta: { name: 'bloco' } }
    /**
     * Find zero or one Bloco that matches the filter.
     * @param {blocoFindUniqueArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blocoFindUniqueArgs>(args: SelectSubset<T, blocoFindUniqueArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blocoFindUniqueOrThrowArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blocoFindUniqueOrThrowArgs>(args: SelectSubset<T, blocoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocoFindFirstArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blocoFindFirstArgs>(args?: SelectSubset<T, blocoFindFirstArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocoFindFirstOrThrowArgs} args - Arguments to find a Bloco
     * @example
     * // Get one Bloco
     * const bloco = await prisma.bloco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blocoFindFirstOrThrowArgs>(args?: SelectSubset<T, blocoFindFirstOrThrowArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocos
     * const blocos = await prisma.bloco.findMany()
     * 
     * // Get first 10 Blocos
     * const blocos = await prisma.bloco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blocoWithIdOnly = await prisma.bloco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blocoFindManyArgs>(args?: SelectSubset<T, blocoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloco.
     * @param {blocoCreateArgs} args - Arguments to create a Bloco.
     * @example
     * // Create one Bloco
     * const Bloco = await prisma.bloco.create({
     *   data: {
     *     // ... data to create a Bloco
     *   }
     * })
     * 
     */
    create<T extends blocoCreateArgs>(args: SelectSubset<T, blocoCreateArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocos.
     * @param {blocoCreateManyArgs} args - Arguments to create many Blocos.
     * @example
     * // Create many Blocos
     * const bloco = await prisma.bloco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blocoCreateManyArgs>(args?: SelectSubset<T, blocoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bloco.
     * @param {blocoDeleteArgs} args - Arguments to delete one Bloco.
     * @example
     * // Delete one Bloco
     * const Bloco = await prisma.bloco.delete({
     *   where: {
     *     // ... filter to delete one Bloco
     *   }
     * })
     * 
     */
    delete<T extends blocoDeleteArgs>(args: SelectSubset<T, blocoDeleteArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloco.
     * @param {blocoUpdateArgs} args - Arguments to update one Bloco.
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
    update<T extends blocoUpdateArgs>(args: SelectSubset<T, blocoUpdateArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocos.
     * @param {blocoDeleteManyArgs} args - Arguments to filter Blocos to delete.
     * @example
     * // Delete a few Blocos
     * const { count } = await prisma.bloco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blocoDeleteManyArgs>(args?: SelectSubset<T, blocoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocoUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends blocoUpdateManyArgs>(args: SelectSubset<T, blocoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bloco.
     * @param {blocoUpsertArgs} args - Arguments to update or create a Bloco.
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
    upsert<T extends blocoUpsertArgs>(args: SelectSubset<T, blocoUpsertArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blocoCountArgs} args - Arguments to filter Blocos to count.
     * @example
     * // Count the number of Blocos
     * const count = await prisma.bloco.count({
     *   where: {
     *     // ... the filter for the Blocos we want to count
     *   }
     * })
    **/
    count<T extends blocoCountArgs>(
      args?: Subset<T, blocoCountArgs>,
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
     * @param {blocoGroupByArgs} args - Group by arguments.
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
      T extends blocoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blocoGroupByArgs['orderBy'] }
        : { orderBy?: blocoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, blocoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlocoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bloco model
   */
  readonly fields: blocoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bloco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blocoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salas<T extends bloco$salasArgs<ExtArgs> = {}>(args?: Subset<T, bloco$salasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the bloco model
   */
  interface blocoFieldRefs {
    readonly id: FieldRef<"bloco", 'Int'>
    readonly nome: FieldRef<"bloco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bloco findUnique
   */
  export type blocoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * Filter, which bloco to fetch.
     */
    where: blocoWhereUniqueInput
  }

  /**
   * bloco findUniqueOrThrow
   */
  export type blocoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * Filter, which bloco to fetch.
     */
    where: blocoWhereUniqueInput
  }

  /**
   * bloco findFirst
   */
  export type blocoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * Filter, which bloco to fetch.
     */
    where?: blocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocos to fetch.
     */
    orderBy?: blocoOrderByWithRelationInput | blocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocos.
     */
    cursor?: blocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocos.
     */
    distinct?: BlocoScalarFieldEnum | BlocoScalarFieldEnum[]
  }

  /**
   * bloco findFirstOrThrow
   */
  export type blocoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * Filter, which bloco to fetch.
     */
    where?: blocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocos to fetch.
     */
    orderBy?: blocoOrderByWithRelationInput | blocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blocos.
     */
    cursor?: blocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blocos.
     */
    distinct?: BlocoScalarFieldEnum | BlocoScalarFieldEnum[]
  }

  /**
   * bloco findMany
   */
  export type blocoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * Filter, which blocos to fetch.
     */
    where?: blocoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blocos to fetch.
     */
    orderBy?: blocoOrderByWithRelationInput | blocoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blocos.
     */
    cursor?: blocoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blocos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blocos.
     */
    skip?: number
    distinct?: BlocoScalarFieldEnum | BlocoScalarFieldEnum[]
  }

  /**
   * bloco create
   */
  export type blocoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * The data needed to create a bloco.
     */
    data: XOR<blocoCreateInput, blocoUncheckedCreateInput>
  }

  /**
   * bloco createMany
   */
  export type blocoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blocos.
     */
    data: blocoCreateManyInput | blocoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bloco update
   */
  export type blocoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * The data needed to update a bloco.
     */
    data: XOR<blocoUpdateInput, blocoUncheckedUpdateInput>
    /**
     * Choose, which bloco to update.
     */
    where: blocoWhereUniqueInput
  }

  /**
   * bloco updateMany
   */
  export type blocoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blocos.
     */
    data: XOR<blocoUpdateManyMutationInput, blocoUncheckedUpdateManyInput>
    /**
     * Filter which blocos to update
     */
    where?: blocoWhereInput
    /**
     * Limit how many blocos to update.
     */
    limit?: number
  }

  /**
   * bloco upsert
   */
  export type blocoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * The filter to search for the bloco to update in case it exists.
     */
    where: blocoWhereUniqueInput
    /**
     * In case the bloco found by the `where` argument doesn't exist, create a new bloco with this data.
     */
    create: XOR<blocoCreateInput, blocoUncheckedCreateInput>
    /**
     * In case the bloco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blocoUpdateInput, blocoUncheckedUpdateInput>
  }

  /**
   * bloco delete
   */
  export type blocoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
    /**
     * Filter which bloco to delete.
     */
    where: blocoWhereUniqueInput
  }

  /**
   * bloco deleteMany
   */
  export type blocoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blocos to delete
     */
    where?: blocoWhereInput
    /**
     * Limit how many blocos to delete.
     */
    limit?: number
  }

  /**
   * bloco.salas
   */
  export type bloco$salasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    where?: salaWhereInput
    orderBy?: salaOrderByWithRelationInput | salaOrderByWithRelationInput[]
    cursor?: salaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * bloco without action
   */
  export type blocoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bloco
     */
    select?: blocoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bloco
     */
    omit?: blocoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blocoInclude<ExtArgs> | null
  }


  /**
   * Model sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    bloco_id: number | null
    capacidade: number | null
  }

  export type SalaSumAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    bloco_id: number | null
    capacidade: number | null
  }

  export type SalaMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    tipo_id: number | null
    bloco_id: number | null
    capacidade: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalaMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    tipo_id: number | null
    bloco_id: number | null
    capacidade: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalaCountAggregateOutputType = {
    id: number
    codigo: number
    tipo_id: number
    bloco_id: number
    capacidade: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    id?: true
    tipo_id?: true
    bloco_id?: true
    capacidade?: true
  }

  export type SalaSumAggregateInputType = {
    id?: true
    tipo_id?: true
    bloco_id?: true
    capacidade?: true
  }

  export type SalaMinAggregateInputType = {
    id?: true
    codigo?: true
    tipo_id?: true
    bloco_id?: true
    capacidade?: true
    created_at?: true
    updated_at?: true
  }

  export type SalaMaxAggregateInputType = {
    id?: true
    codigo?: true
    tipo_id?: true
    bloco_id?: true
    capacidade?: true
    created_at?: true
    updated_at?: true
  }

  export type SalaCountAggregateInputType = {
    id?: true
    codigo?: true
    tipo_id?: true
    bloco_id?: true
    capacidade?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sala to aggregate.
     */
    where?: salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salas to fetch.
     */
    orderBy?: salaOrderByWithRelationInput | salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned salas
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




  export type salaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salaWhereInput
    orderBy?: salaOrderByWithAggregationInput | salaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: salaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    id: number
    codigo: string
    tipo_id: number
    bloco_id: number
    capacidade: number
    created_at: Date
    updated_at: Date
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends salaGroupByArgs> = Prisma.PrismaPromise<
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


  export type salaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    tipo_id?: boolean
    bloco_id?: boolean
    capacidade?: boolean
    created_at?: boolean
    updated_at?: boolean
    tipo?: boolean | tipo_salaDefaultArgs<ExtArgs>
    bloco?: boolean | blocoDefaultArgs<ExtArgs>
    alocacoes?: boolean | sala$alocacoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>



  export type salaSelectScalar = {
    id?: boolean
    codigo?: boolean
    tipo_id?: boolean
    bloco_id?: boolean
    capacidade?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type salaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "tipo_id" | "bloco_id" | "capacidade" | "created_at" | "updated_at", ExtArgs["result"]["sala"]>
  export type salaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | tipo_salaDefaultArgs<ExtArgs>
    bloco?: boolean | blocoDefaultArgs<ExtArgs>
    alocacoes?: boolean | sala$alocacoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $salaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sala"
    objects: {
      tipo: Prisma.$tipo_salaPayload<ExtArgs>
      bloco: Prisma.$blocoPayload<ExtArgs>
      alocacoes: Prisma.$alocacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      tipo_id: number
      bloco_id: number
      capacidade: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type salaGetPayload<S extends boolean | null | undefined | salaDefaultArgs> = $Result.GetResult<Prisma.$salaPayload, S>

  type salaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface salaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sala'], meta: { name: 'sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {salaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salaFindUniqueArgs>(args: SelectSubset<T, salaFindUniqueArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salaFindUniqueOrThrowArgs>(args: SelectSubset<T, salaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salaFindFirstArgs>(args?: SelectSubset<T, salaFindFirstArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salaFindFirstOrThrowArgs>(args?: SelectSubset<T, salaFindFirstOrThrowArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends salaFindManyArgs>(args?: SelectSubset<T, salaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {salaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends salaCreateArgs>(args: SelectSubset<T, salaCreateArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {salaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salaCreateManyArgs>(args?: SelectSubset<T, salaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sala.
     * @param {salaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends salaDeleteArgs>(args: SelectSubset<T, salaDeleteArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {salaUpdateArgs} args - Arguments to update one Sala.
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
    update<T extends salaUpdateArgs>(args: SelectSubset<T, salaUpdateArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {salaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salaDeleteManyArgs>(args?: SelectSubset<T, salaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends salaUpdateManyArgs>(args: SelectSubset<T, salaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sala.
     * @param {salaUpsertArgs} args - Arguments to update or create a Sala.
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
    upsert<T extends salaUpsertArgs>(args: SelectSubset<T, salaUpsertArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends salaCountArgs>(
      args?: Subset<T, salaCountArgs>,
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
     * @param {salaGroupByArgs} args - Group by arguments.
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
      T extends salaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salaGroupByArgs['orderBy'] }
        : { orderBy?: salaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, salaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sala model
   */
  readonly fields: salaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends tipo_salaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_salaDefaultArgs<ExtArgs>>): Prisma__tipo_salaClient<$Result.GetResult<Prisma.$tipo_salaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bloco<T extends blocoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, blocoDefaultArgs<ExtArgs>>): Prisma__blocoClient<$Result.GetResult<Prisma.$blocoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alocacoes<T extends sala$alocacoesArgs<ExtArgs> = {}>(args?: Subset<T, sala$alocacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sala model
   */
  interface salaFieldRefs {
    readonly id: FieldRef<"sala", 'Int'>
    readonly codigo: FieldRef<"sala", 'String'>
    readonly tipo_id: FieldRef<"sala", 'Int'>
    readonly bloco_id: FieldRef<"sala", 'Int'>
    readonly capacidade: FieldRef<"sala", 'Int'>
    readonly created_at: FieldRef<"sala", 'DateTime'>
    readonly updated_at: FieldRef<"sala", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sala findUnique
   */
  export type salaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * Filter, which sala to fetch.
     */
    where: salaWhereUniqueInput
  }

  /**
   * sala findUniqueOrThrow
   */
  export type salaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * Filter, which sala to fetch.
     */
    where: salaWhereUniqueInput
  }

  /**
   * sala findFirst
   */
  export type salaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * Filter, which sala to fetch.
     */
    where?: salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salas to fetch.
     */
    orderBy?: salaOrderByWithRelationInput | salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for salas.
     */
    cursor?: salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * sala findFirstOrThrow
   */
  export type salaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * Filter, which sala to fetch.
     */
    where?: salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salas to fetch.
     */
    orderBy?: salaOrderByWithRelationInput | salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for salas.
     */
    cursor?: salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * sala findMany
   */
  export type salaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * Filter, which salas to fetch.
     */
    where?: salaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of salas to fetch.
     */
    orderBy?: salaOrderByWithRelationInput | salaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing salas.
     */
    cursor?: salaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * sala create
   */
  export type salaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * The data needed to create a sala.
     */
    data: XOR<salaCreateInput, salaUncheckedCreateInput>
  }

  /**
   * sala createMany
   */
  export type salaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many salas.
     */
    data: salaCreateManyInput | salaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sala update
   */
  export type salaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * The data needed to update a sala.
     */
    data: XOR<salaUpdateInput, salaUncheckedUpdateInput>
    /**
     * Choose, which sala to update.
     */
    where: salaWhereUniqueInput
  }

  /**
   * sala updateMany
   */
  export type salaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update salas.
     */
    data: XOR<salaUpdateManyMutationInput, salaUncheckedUpdateManyInput>
    /**
     * Filter which salas to update
     */
    where?: salaWhereInput
    /**
     * Limit how many salas to update.
     */
    limit?: number
  }

  /**
   * sala upsert
   */
  export type salaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * The filter to search for the sala to update in case it exists.
     */
    where: salaWhereUniqueInput
    /**
     * In case the sala found by the `where` argument doesn't exist, create a new sala with this data.
     */
    create: XOR<salaCreateInput, salaUncheckedCreateInput>
    /**
     * In case the sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salaUpdateInput, salaUncheckedUpdateInput>
  }

  /**
   * sala delete
   */
  export type salaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
    /**
     * Filter which sala to delete.
     */
    where: salaWhereUniqueInput
  }

  /**
   * sala deleteMany
   */
  export type salaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which salas to delete
     */
    where?: salaWhereInput
    /**
     * Limit how many salas to delete.
     */
    limit?: number
  }

  /**
   * sala.alocacoes
   */
  export type sala$alocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    where?: alocacaoWhereInput
    orderBy?: alocacaoOrderByWithRelationInput | alocacaoOrderByWithRelationInput[]
    cursor?: alocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * sala without action
   */
  export type salaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sala
     */
    select?: salaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sala
     */
    omit?: salaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salaInclude<ExtArgs> | null
  }


  /**
   * Model disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    id: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    id: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type DisciplinaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    id?: true
  }

  export type DisciplinaSumAggregateInputType = {
    id?: true
  }

  export type DisciplinaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type DisciplinaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplina to aggregate.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disciplinas
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




  export type disciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinaWhereInput
    orderBy?: disciplinaOrderByWithAggregationInput | disciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: disciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    id: number
    nome: string
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends disciplinaGroupByArgs> = Prisma.PrismaPromise<
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


  export type disciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    alocacoes?: boolean | disciplina$alocacoesArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>



  export type disciplinaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type disciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["disciplina"]>
  export type disciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alocacoes?: boolean | disciplina$alocacoesArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $disciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "disciplina"
    objects: {
      alocacoes: Prisma.$alocacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type disciplinaGetPayload<S extends boolean | null | undefined | disciplinaDefaultArgs> = $Result.GetResult<Prisma.$disciplinaPayload, S>

  type disciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<disciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface disciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['disciplina'], meta: { name: 'disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {disciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends disciplinaFindUniqueArgs>(args: SelectSubset<T, disciplinaFindUniqueArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {disciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends disciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, disciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends disciplinaFindFirstArgs>(args?: SelectSubset<T, disciplinaFindFirstArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends disciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, disciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends disciplinaFindManyArgs>(args?: SelectSubset<T, disciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {disciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends disciplinaCreateArgs>(args: SelectSubset<T, disciplinaCreateArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {disciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends disciplinaCreateManyArgs>(args?: SelectSubset<T, disciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplina.
     * @param {disciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends disciplinaDeleteArgs>(args: SelectSubset<T, disciplinaDeleteArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {disciplinaUpdateArgs} args - Arguments to update one Disciplina.
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
    update<T extends disciplinaUpdateArgs>(args: SelectSubset<T, disciplinaUpdateArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {disciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends disciplinaDeleteManyArgs>(args?: SelectSubset<T, disciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends disciplinaUpdateManyArgs>(args: SelectSubset<T, disciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplina.
     * @param {disciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
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
    upsert<T extends disciplinaUpsertArgs>(args: SelectSubset<T, disciplinaUpsertArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends disciplinaCountArgs>(
      args?: Subset<T, disciplinaCountArgs>,
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
     * @param {disciplinaGroupByArgs} args - Group by arguments.
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
      T extends disciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: disciplinaGroupByArgs['orderBy'] }
        : { orderBy?: disciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, disciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the disciplina model
   */
  readonly fields: disciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__disciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alocacoes<T extends disciplina$alocacoesArgs<ExtArgs> = {}>(args?: Subset<T, disciplina$alocacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the disciplina model
   */
  interface disciplinaFieldRefs {
    readonly id: FieldRef<"disciplina", 'Int'>
    readonly nome: FieldRef<"disciplina", 'String'>
  }
    

  // Custom InputTypes
  /**
   * disciplina findUnique
   */
  export type disciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina findUniqueOrThrow
   */
  export type disciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina findFirst
   */
  export type disciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * disciplina findFirstOrThrow
   */
  export type disciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplina to fetch.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * disciplina findMany
   */
  export type disciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinaOrderByWithRelationInput | disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disciplinas.
     */
    cursor?: disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * disciplina create
   */
  export type disciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a disciplina.
     */
    data: XOR<disciplinaCreateInput, disciplinaUncheckedCreateInput>
  }

  /**
   * disciplina createMany
   */
  export type disciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many disciplinas.
     */
    data: disciplinaCreateManyInput | disciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * disciplina update
   */
  export type disciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a disciplina.
     */
    data: XOR<disciplinaUpdateInput, disciplinaUncheckedUpdateInput>
    /**
     * Choose, which disciplina to update.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina updateMany
   */
  export type disciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update disciplinas.
     */
    data: XOR<disciplinaUpdateManyMutationInput, disciplinaUncheckedUpdateManyInput>
    /**
     * Filter which disciplinas to update
     */
    where?: disciplinaWhereInput
    /**
     * Limit how many disciplinas to update.
     */
    limit?: number
  }

  /**
   * disciplina upsert
   */
  export type disciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the disciplina to update in case it exists.
     */
    where: disciplinaWhereUniqueInput
    /**
     * In case the disciplina found by the `where` argument doesn't exist, create a new disciplina with this data.
     */
    create: XOR<disciplinaCreateInput, disciplinaUncheckedCreateInput>
    /**
     * In case the disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<disciplinaUpdateInput, disciplinaUncheckedUpdateInput>
  }

  /**
   * disciplina delete
   */
  export type disciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
    /**
     * Filter which disciplina to delete.
     */
    where: disciplinaWhereUniqueInput
  }

  /**
   * disciplina deleteMany
   */
  export type disciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplinas to delete
     */
    where?: disciplinaWhereInput
    /**
     * Limit how many disciplinas to delete.
     */
    limit?: number
  }

  /**
   * disciplina.alocacoes
   */
  export type disciplina$alocacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    where?: alocacaoWhereInput
    orderBy?: alocacaoOrderByWithRelationInput | alocacaoOrderByWithRelationInput[]
    cursor?: alocacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * disciplina without action
   */
  export type disciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina
     */
    select?: disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina
     */
    omit?: disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinaInclude<ExtArgs> | null
  }


  /**
   * Model alocacao
   */

  export type AggregateAlocacao = {
    _count: AlocacaoCountAggregateOutputType | null
    _avg: AlocacaoAvgAggregateOutputType | null
    _sum: AlocacaoSumAggregateOutputType | null
    _min: AlocacaoMinAggregateOutputType | null
    _max: AlocacaoMaxAggregateOutputType | null
  }

  export type AlocacaoAvgAggregateOutputType = {
    id: number | null
    dia_da_semana: number | null
    sala_id: number | null
    disciplina_id: number | null
  }

  export type AlocacaoSumAggregateOutputType = {
    id: number | null
    dia_da_semana: number | null
    sala_id: number | null
    disciplina_id: number | null
  }

  export type AlocacaoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    dia_da_semana: number | null
    hora_inicio: string | null
    hora_fim: string | null
    sala_id: number | null
    disciplina_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AlocacaoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    dia_da_semana: number | null
    hora_inicio: string | null
    hora_fim: string | null
    sala_id: number | null
    disciplina_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AlocacaoCountAggregateOutputType = {
    id: number
    data: number
    dia_da_semana: number
    hora_inicio: number
    hora_fim: number
    sala_id: number
    disciplina_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AlocacaoAvgAggregateInputType = {
    id?: true
    dia_da_semana?: true
    sala_id?: true
    disciplina_id?: true
  }

  export type AlocacaoSumAggregateInputType = {
    id?: true
    dia_da_semana?: true
    sala_id?: true
    disciplina_id?: true
  }

  export type AlocacaoMinAggregateInputType = {
    id?: true
    data?: true
    dia_da_semana?: true
    hora_inicio?: true
    hora_fim?: true
    sala_id?: true
    disciplina_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AlocacaoMaxAggregateInputType = {
    id?: true
    data?: true
    dia_da_semana?: true
    hora_inicio?: true
    hora_fim?: true
    sala_id?: true
    disciplina_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AlocacaoCountAggregateInputType = {
    id?: true
    data?: true
    dia_da_semana?: true
    hora_inicio?: true
    hora_fim?: true
    sala_id?: true
    disciplina_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AlocacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alocacao to aggregate.
     */
    where?: alocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alocacaos to fetch.
     */
    orderBy?: alocacaoOrderByWithRelationInput | alocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alocacaos
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




  export type alocacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alocacaoWhereInput
    orderBy?: alocacaoOrderByWithAggregationInput | alocacaoOrderByWithAggregationInput[]
    by: AlocacaoScalarFieldEnum[] | AlocacaoScalarFieldEnum
    having?: alocacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlocacaoCountAggregateInputType | true
    _avg?: AlocacaoAvgAggregateInputType
    _sum?: AlocacaoSumAggregateInputType
    _min?: AlocacaoMinAggregateInputType
    _max?: AlocacaoMaxAggregateInputType
  }

  export type AlocacaoGroupByOutputType = {
    id: number
    data: Date | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    sala_id: number
    disciplina_id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: AlocacaoCountAggregateOutputType | null
    _avg: AlocacaoAvgAggregateOutputType | null
    _sum: AlocacaoSumAggregateOutputType | null
    _min: AlocacaoMinAggregateOutputType | null
    _max: AlocacaoMaxAggregateOutputType | null
  }

  type GetAlocacaoGroupByPayload<T extends alocacaoGroupByArgs> = Prisma.PrismaPromise<
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


  export type alocacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    dia_da_semana?: boolean
    hora_inicio?: boolean
    hora_fim?: boolean
    sala_id?: boolean
    disciplina_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    sala?: boolean | salaDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alocacao"]>



  export type alocacaoSelectScalar = {
    id?: boolean
    data?: boolean
    dia_da_semana?: boolean
    hora_inicio?: boolean
    hora_fim?: boolean
    sala_id?: boolean
    disciplina_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type alocacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "dia_da_semana" | "hora_inicio" | "hora_fim" | "sala_id" | "disciplina_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["alocacao"]>
  export type alocacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | salaDefaultArgs<ExtArgs>
    disciplina?: boolean | disciplinaDefaultArgs<ExtArgs>
  }

  export type $alocacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alocacao"
    objects: {
      sala: Prisma.$salaPayload<ExtArgs>
      disciplina: Prisma.$disciplinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date | null
      dia_da_semana: number
      hora_inicio: string
      hora_fim: string
      sala_id: number
      disciplina_id: number
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["alocacao"]>
    composites: {}
  }

  type alocacaoGetPayload<S extends boolean | null | undefined | alocacaoDefaultArgs> = $Result.GetResult<Prisma.$alocacaoPayload, S>

  type alocacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alocacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlocacaoCountAggregateInputType | true
    }

  export interface alocacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alocacao'], meta: { name: 'alocacao' } }
    /**
     * Find zero or one Alocacao that matches the filter.
     * @param {alocacaoFindUniqueArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alocacaoFindUniqueArgs>(args: SelectSubset<T, alocacaoFindUniqueArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alocacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alocacaoFindUniqueOrThrowArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alocacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, alocacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alocacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alocacaoFindFirstArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alocacaoFindFirstArgs>(args?: SelectSubset<T, alocacaoFindFirstArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alocacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alocacaoFindFirstOrThrowArgs} args - Arguments to find a Alocacao
     * @example
     * // Get one Alocacao
     * const alocacao = await prisma.alocacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alocacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, alocacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alocacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alocacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alocacaos
     * const alocacaos = await prisma.alocacao.findMany()
     * 
     * // Get first 10 Alocacaos
     * const alocacaos = await prisma.alocacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alocacaoWithIdOnly = await prisma.alocacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends alocacaoFindManyArgs>(args?: SelectSubset<T, alocacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alocacao.
     * @param {alocacaoCreateArgs} args - Arguments to create a Alocacao.
     * @example
     * // Create one Alocacao
     * const Alocacao = await prisma.alocacao.create({
     *   data: {
     *     // ... data to create a Alocacao
     *   }
     * })
     * 
     */
    create<T extends alocacaoCreateArgs>(args: SelectSubset<T, alocacaoCreateArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alocacaos.
     * @param {alocacaoCreateManyArgs} args - Arguments to create many Alocacaos.
     * @example
     * // Create many Alocacaos
     * const alocacao = await prisma.alocacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alocacaoCreateManyArgs>(args?: SelectSubset<T, alocacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alocacao.
     * @param {alocacaoDeleteArgs} args - Arguments to delete one Alocacao.
     * @example
     * // Delete one Alocacao
     * const Alocacao = await prisma.alocacao.delete({
     *   where: {
     *     // ... filter to delete one Alocacao
     *   }
     * })
     * 
     */
    delete<T extends alocacaoDeleteArgs>(args: SelectSubset<T, alocacaoDeleteArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alocacao.
     * @param {alocacaoUpdateArgs} args - Arguments to update one Alocacao.
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
    update<T extends alocacaoUpdateArgs>(args: SelectSubset<T, alocacaoUpdateArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alocacaos.
     * @param {alocacaoDeleteManyArgs} args - Arguments to filter Alocacaos to delete.
     * @example
     * // Delete a few Alocacaos
     * const { count } = await prisma.alocacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alocacaoDeleteManyArgs>(args?: SelectSubset<T, alocacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alocacaoUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends alocacaoUpdateManyArgs>(args: SelectSubset<T, alocacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alocacao.
     * @param {alocacaoUpsertArgs} args - Arguments to update or create a Alocacao.
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
    upsert<T extends alocacaoUpsertArgs>(args: SelectSubset<T, alocacaoUpsertArgs<ExtArgs>>): Prisma__alocacaoClient<$Result.GetResult<Prisma.$alocacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alocacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alocacaoCountArgs} args - Arguments to filter Alocacaos to count.
     * @example
     * // Count the number of Alocacaos
     * const count = await prisma.alocacao.count({
     *   where: {
     *     // ... the filter for the Alocacaos we want to count
     *   }
     * })
    **/
    count<T extends alocacaoCountArgs>(
      args?: Subset<T, alocacaoCountArgs>,
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
     * @param {alocacaoGroupByArgs} args - Group by arguments.
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
      T extends alocacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alocacaoGroupByArgs['orderBy'] }
        : { orderBy?: alocacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alocacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlocacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alocacao model
   */
  readonly fields: alocacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alocacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alocacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sala<T extends salaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, salaDefaultArgs<ExtArgs>>): Prisma__salaClient<$Result.GetResult<Prisma.$salaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplina<T extends disciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinaDefaultArgs<ExtArgs>>): Prisma__disciplinaClient<$Result.GetResult<Prisma.$disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the alocacao model
   */
  interface alocacaoFieldRefs {
    readonly id: FieldRef<"alocacao", 'Int'>
    readonly data: FieldRef<"alocacao", 'DateTime'>
    readonly dia_da_semana: FieldRef<"alocacao", 'Int'>
    readonly hora_inicio: FieldRef<"alocacao", 'String'>
    readonly hora_fim: FieldRef<"alocacao", 'String'>
    readonly sala_id: FieldRef<"alocacao", 'Int'>
    readonly disciplina_id: FieldRef<"alocacao", 'Int'>
    readonly created_at: FieldRef<"alocacao", 'DateTime'>
    readonly updated_at: FieldRef<"alocacao", 'DateTime'>
    readonly deleted_at: FieldRef<"alocacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * alocacao findUnique
   */
  export type alocacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * Filter, which alocacao to fetch.
     */
    where: alocacaoWhereUniqueInput
  }

  /**
   * alocacao findUniqueOrThrow
   */
  export type alocacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * Filter, which alocacao to fetch.
     */
    where: alocacaoWhereUniqueInput
  }

  /**
   * alocacao findFirst
   */
  export type alocacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * Filter, which alocacao to fetch.
     */
    where?: alocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alocacaos to fetch.
     */
    orderBy?: alocacaoOrderByWithRelationInput | alocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alocacaos.
     */
    cursor?: alocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alocacaos.
     */
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * alocacao findFirstOrThrow
   */
  export type alocacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * Filter, which alocacao to fetch.
     */
    where?: alocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alocacaos to fetch.
     */
    orderBy?: alocacaoOrderByWithRelationInput | alocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alocacaos.
     */
    cursor?: alocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alocacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alocacaos.
     */
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * alocacao findMany
   */
  export type alocacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * Filter, which alocacaos to fetch.
     */
    where?: alocacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alocacaos to fetch.
     */
    orderBy?: alocacaoOrderByWithRelationInput | alocacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alocacaos.
     */
    cursor?: alocacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alocacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alocacaos.
     */
    skip?: number
    distinct?: AlocacaoScalarFieldEnum | AlocacaoScalarFieldEnum[]
  }

  /**
   * alocacao create
   */
  export type alocacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a alocacao.
     */
    data: XOR<alocacaoCreateInput, alocacaoUncheckedCreateInput>
  }

  /**
   * alocacao createMany
   */
  export type alocacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alocacaos.
     */
    data: alocacaoCreateManyInput | alocacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alocacao update
   */
  export type alocacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a alocacao.
     */
    data: XOR<alocacaoUpdateInput, alocacaoUncheckedUpdateInput>
    /**
     * Choose, which alocacao to update.
     */
    where: alocacaoWhereUniqueInput
  }

  /**
   * alocacao updateMany
   */
  export type alocacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alocacaos.
     */
    data: XOR<alocacaoUpdateManyMutationInput, alocacaoUncheckedUpdateManyInput>
    /**
     * Filter which alocacaos to update
     */
    where?: alocacaoWhereInput
    /**
     * Limit how many alocacaos to update.
     */
    limit?: number
  }

  /**
   * alocacao upsert
   */
  export type alocacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the alocacao to update in case it exists.
     */
    where: alocacaoWhereUniqueInput
    /**
     * In case the alocacao found by the `where` argument doesn't exist, create a new alocacao with this data.
     */
    create: XOR<alocacaoCreateInput, alocacaoUncheckedCreateInput>
    /**
     * In case the alocacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alocacaoUpdateInput, alocacaoUncheckedUpdateInput>
  }

  /**
   * alocacao delete
   */
  export type alocacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
    /**
     * Filter which alocacao to delete.
     */
    where: alocacaoWhereUniqueInput
  }

  /**
   * alocacao deleteMany
   */
  export type alocacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alocacaos to delete
     */
    where?: alocacaoWhereInput
    /**
     * Limit how many alocacaos to delete.
     */
    limit?: number
  }

  /**
   * alocacao without action
   */
  export type alocacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alocacao
     */
    select?: alocacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alocacao
     */
    omit?: alocacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alocacaoInclude<ExtArgs> | null
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


  export const Tipo_salaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type Tipo_salaScalarFieldEnum = (typeof Tipo_salaScalarFieldEnum)[keyof typeof Tipo_salaScalarFieldEnum]


  export const BlocoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type BlocoScalarFieldEnum = (typeof BlocoScalarFieldEnum)[keyof typeof BlocoScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    tipo_id: 'tipo_id',
    bloco_id: 'bloco_id',
    capacidade: 'capacidade',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const AlocacaoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    dia_da_semana: 'dia_da_semana',
    hora_inicio: 'hora_inicio',
    hora_fim: 'hora_fim',
    sala_id: 'sala_id',
    disciplina_id: 'disciplina_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AlocacaoScalarFieldEnum = (typeof AlocacaoScalarFieldEnum)[keyof typeof AlocacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const tipo_salaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type tipo_salaOrderByRelevanceFieldEnum = (typeof tipo_salaOrderByRelevanceFieldEnum)[keyof typeof tipo_salaOrderByRelevanceFieldEnum]


  export const blocoOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type blocoOrderByRelevanceFieldEnum = (typeof blocoOrderByRelevanceFieldEnum)[keyof typeof blocoOrderByRelevanceFieldEnum]


  export const salaOrderByRelevanceFieldEnum: {
    codigo: 'codigo'
  };

  export type salaOrderByRelevanceFieldEnum = (typeof salaOrderByRelevanceFieldEnum)[keyof typeof salaOrderByRelevanceFieldEnum]


  export const disciplinaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type disciplinaOrderByRelevanceFieldEnum = (typeof disciplinaOrderByRelevanceFieldEnum)[keyof typeof disciplinaOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const alocacaoOrderByRelevanceFieldEnum: {
    hora_inicio: 'hora_inicio',
    hora_fim: 'hora_fim'
  };

  export type alocacaoOrderByRelevanceFieldEnum = (typeof alocacaoOrderByRelevanceFieldEnum)[keyof typeof alocacaoOrderByRelevanceFieldEnum]


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


  export type tipo_salaWhereInput = {
    AND?: tipo_salaWhereInput | tipo_salaWhereInput[]
    OR?: tipo_salaWhereInput[]
    NOT?: tipo_salaWhereInput | tipo_salaWhereInput[]
    id?: IntFilter<"tipo_sala"> | number
    nome?: StringFilter<"tipo_sala"> | string
    salas?: SalaListRelationFilter
  }

  export type tipo_salaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    salas?: salaOrderByRelationAggregateInput
    _relevance?: tipo_salaOrderByRelevanceInput
  }

  export type tipo_salaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: tipo_salaWhereInput | tipo_salaWhereInput[]
    OR?: tipo_salaWhereInput[]
    NOT?: tipo_salaWhereInput | tipo_salaWhereInput[]
    salas?: SalaListRelationFilter
  }, "id" | "nome">

  export type tipo_salaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: tipo_salaCountOrderByAggregateInput
    _avg?: tipo_salaAvgOrderByAggregateInput
    _max?: tipo_salaMaxOrderByAggregateInput
    _min?: tipo_salaMinOrderByAggregateInput
    _sum?: tipo_salaSumOrderByAggregateInput
  }

  export type tipo_salaScalarWhereWithAggregatesInput = {
    AND?: tipo_salaScalarWhereWithAggregatesInput | tipo_salaScalarWhereWithAggregatesInput[]
    OR?: tipo_salaScalarWhereWithAggregatesInput[]
    NOT?: tipo_salaScalarWhereWithAggregatesInput | tipo_salaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tipo_sala"> | number
    nome?: StringWithAggregatesFilter<"tipo_sala"> | string
  }

  export type blocoWhereInput = {
    AND?: blocoWhereInput | blocoWhereInput[]
    OR?: blocoWhereInput[]
    NOT?: blocoWhereInput | blocoWhereInput[]
    id?: IntFilter<"bloco"> | number
    nome?: StringFilter<"bloco"> | string
    salas?: SalaListRelationFilter
  }

  export type blocoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    salas?: salaOrderByRelationAggregateInput
    _relevance?: blocoOrderByRelevanceInput
  }

  export type blocoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: blocoWhereInput | blocoWhereInput[]
    OR?: blocoWhereInput[]
    NOT?: blocoWhereInput | blocoWhereInput[]
    salas?: SalaListRelationFilter
  }, "id" | "nome">

  export type blocoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: blocoCountOrderByAggregateInput
    _avg?: blocoAvgOrderByAggregateInput
    _max?: blocoMaxOrderByAggregateInput
    _min?: blocoMinOrderByAggregateInput
    _sum?: blocoSumOrderByAggregateInput
  }

  export type blocoScalarWhereWithAggregatesInput = {
    AND?: blocoScalarWhereWithAggregatesInput | blocoScalarWhereWithAggregatesInput[]
    OR?: blocoScalarWhereWithAggregatesInput[]
    NOT?: blocoScalarWhereWithAggregatesInput | blocoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bloco"> | number
    nome?: StringWithAggregatesFilter<"bloco"> | string
  }

  export type salaWhereInput = {
    AND?: salaWhereInput | salaWhereInput[]
    OR?: salaWhereInput[]
    NOT?: salaWhereInput | salaWhereInput[]
    id?: IntFilter<"sala"> | number
    codigo?: StringFilter<"sala"> | string
    tipo_id?: IntFilter<"sala"> | number
    bloco_id?: IntFilter<"sala"> | number
    capacidade?: IntFilter<"sala"> | number
    created_at?: DateTimeFilter<"sala"> | Date | string
    updated_at?: DateTimeFilter<"sala"> | Date | string
    tipo?: XOR<Tipo_salaScalarRelationFilter, tipo_salaWhereInput>
    bloco?: XOR<BlocoScalarRelationFilter, blocoWhereInput>
    alocacoes?: AlocacaoListRelationFilter
  }

  export type salaOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo_id?: SortOrder
    bloco_id?: SortOrder
    capacidade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tipo?: tipo_salaOrderByWithRelationInput
    bloco?: blocoOrderByWithRelationInput
    alocacoes?: alocacaoOrderByRelationAggregateInput
    _relevance?: salaOrderByRelevanceInput
  }

  export type salaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: salaWhereInput | salaWhereInput[]
    OR?: salaWhereInput[]
    NOT?: salaWhereInput | salaWhereInput[]
    tipo_id?: IntFilter<"sala"> | number
    bloco_id?: IntFilter<"sala"> | number
    capacidade?: IntFilter<"sala"> | number
    created_at?: DateTimeFilter<"sala"> | Date | string
    updated_at?: DateTimeFilter<"sala"> | Date | string
    tipo?: XOR<Tipo_salaScalarRelationFilter, tipo_salaWhereInput>
    bloco?: XOR<BlocoScalarRelationFilter, blocoWhereInput>
    alocacoes?: AlocacaoListRelationFilter
  }, "id" | "codigo">

  export type salaOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo_id?: SortOrder
    bloco_id?: SortOrder
    capacidade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: salaCountOrderByAggregateInput
    _avg?: salaAvgOrderByAggregateInput
    _max?: salaMaxOrderByAggregateInput
    _min?: salaMinOrderByAggregateInput
    _sum?: salaSumOrderByAggregateInput
  }

  export type salaScalarWhereWithAggregatesInput = {
    AND?: salaScalarWhereWithAggregatesInput | salaScalarWhereWithAggregatesInput[]
    OR?: salaScalarWhereWithAggregatesInput[]
    NOT?: salaScalarWhereWithAggregatesInput | salaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sala"> | number
    codigo?: StringWithAggregatesFilter<"sala"> | string
    tipo_id?: IntWithAggregatesFilter<"sala"> | number
    bloco_id?: IntWithAggregatesFilter<"sala"> | number
    capacidade?: IntWithAggregatesFilter<"sala"> | number
    created_at?: DateTimeWithAggregatesFilter<"sala"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"sala"> | Date | string
  }

  export type disciplinaWhereInput = {
    AND?: disciplinaWhereInput | disciplinaWhereInput[]
    OR?: disciplinaWhereInput[]
    NOT?: disciplinaWhereInput | disciplinaWhereInput[]
    id?: IntFilter<"disciplina"> | number
    nome?: StringFilter<"disciplina"> | string
    alocacoes?: AlocacaoListRelationFilter
  }

  export type disciplinaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    alocacoes?: alocacaoOrderByRelationAggregateInput
    _relevance?: disciplinaOrderByRelevanceInput
  }

  export type disciplinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: disciplinaWhereInput | disciplinaWhereInput[]
    OR?: disciplinaWhereInput[]
    NOT?: disciplinaWhereInput | disciplinaWhereInput[]
    alocacoes?: AlocacaoListRelationFilter
  }, "id" | "nome">

  export type disciplinaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: disciplinaCountOrderByAggregateInput
    _avg?: disciplinaAvgOrderByAggregateInput
    _max?: disciplinaMaxOrderByAggregateInput
    _min?: disciplinaMinOrderByAggregateInput
    _sum?: disciplinaSumOrderByAggregateInput
  }

  export type disciplinaScalarWhereWithAggregatesInput = {
    AND?: disciplinaScalarWhereWithAggregatesInput | disciplinaScalarWhereWithAggregatesInput[]
    OR?: disciplinaScalarWhereWithAggregatesInput[]
    NOT?: disciplinaScalarWhereWithAggregatesInput | disciplinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"disciplina"> | number
    nome?: StringWithAggregatesFilter<"disciplina"> | string
  }

  export type alocacaoWhereInput = {
    AND?: alocacaoWhereInput | alocacaoWhereInput[]
    OR?: alocacaoWhereInput[]
    NOT?: alocacaoWhereInput | alocacaoWhereInput[]
    id?: IntFilter<"alocacao"> | number
    data?: DateTimeNullableFilter<"alocacao"> | Date | string | null
    dia_da_semana?: IntFilter<"alocacao"> | number
    hora_inicio?: StringFilter<"alocacao"> | string
    hora_fim?: StringFilter<"alocacao"> | string
    sala_id?: IntFilter<"alocacao"> | number
    disciplina_id?: IntFilter<"alocacao"> | number
    created_at?: DateTimeFilter<"alocacao"> | Date | string
    updated_at?: DateTimeFilter<"alocacao"> | Date | string
    deleted_at?: DateTimeNullableFilter<"alocacao"> | Date | string | null
    sala?: XOR<SalaScalarRelationFilter, salaWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, disciplinaWhereInput>
  }

  export type alocacaoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    dia_da_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fim?: SortOrder
    sala_id?: SortOrder
    disciplina_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    sala?: salaOrderByWithRelationInput
    disciplina?: disciplinaOrderByWithRelationInput
    _relevance?: alocacaoOrderByRelevanceInput
  }

  export type alocacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uq_alocacao_sala_data_horas?: alocacaoUq_alocacao_sala_data_horasCompoundUniqueInput
    AND?: alocacaoWhereInput | alocacaoWhereInput[]
    OR?: alocacaoWhereInput[]
    NOT?: alocacaoWhereInput | alocacaoWhereInput[]
    data?: DateTimeNullableFilter<"alocacao"> | Date | string | null
    dia_da_semana?: IntFilter<"alocacao"> | number
    hora_inicio?: StringFilter<"alocacao"> | string
    hora_fim?: StringFilter<"alocacao"> | string
    sala_id?: IntFilter<"alocacao"> | number
    disciplina_id?: IntFilter<"alocacao"> | number
    created_at?: DateTimeFilter<"alocacao"> | Date | string
    updated_at?: DateTimeFilter<"alocacao"> | Date | string
    deleted_at?: DateTimeNullableFilter<"alocacao"> | Date | string | null
    sala?: XOR<SalaScalarRelationFilter, salaWhereInput>
    disciplina?: XOR<DisciplinaScalarRelationFilter, disciplinaWhereInput>
  }, "id" | "uq_alocacao_sala_data_horas">

  export type alocacaoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    dia_da_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fim?: SortOrder
    sala_id?: SortOrder
    disciplina_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: alocacaoCountOrderByAggregateInput
    _avg?: alocacaoAvgOrderByAggregateInput
    _max?: alocacaoMaxOrderByAggregateInput
    _min?: alocacaoMinOrderByAggregateInput
    _sum?: alocacaoSumOrderByAggregateInput
  }

  export type alocacaoScalarWhereWithAggregatesInput = {
    AND?: alocacaoScalarWhereWithAggregatesInput | alocacaoScalarWhereWithAggregatesInput[]
    OR?: alocacaoScalarWhereWithAggregatesInput[]
    NOT?: alocacaoScalarWhereWithAggregatesInput | alocacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"alocacao"> | number
    data?: DateTimeNullableWithAggregatesFilter<"alocacao"> | Date | string | null
    dia_da_semana?: IntWithAggregatesFilter<"alocacao"> | number
    hora_inicio?: StringWithAggregatesFilter<"alocacao"> | string
    hora_fim?: StringWithAggregatesFilter<"alocacao"> | string
    sala_id?: IntWithAggregatesFilter<"alocacao"> | number
    disciplina_id?: IntWithAggregatesFilter<"alocacao"> | number
    created_at?: DateTimeWithAggregatesFilter<"alocacao"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"alocacao"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"alocacao"> | Date | string | null
  }

  export type tipo_salaCreateInput = {
    nome: string
    salas?: salaCreateNestedManyWithoutTipoInput
  }

  export type tipo_salaUncheckedCreateInput = {
    id?: number
    nome: string
    salas?: salaUncheckedCreateNestedManyWithoutTipoInput
  }

  export type tipo_salaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    salas?: salaUpdateManyWithoutTipoNestedInput
  }

  export type tipo_salaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    salas?: salaUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type tipo_salaCreateManyInput = {
    id?: number
    nome: string
  }

  export type tipo_salaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_salaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type blocoCreateInput = {
    nome: string
    salas?: salaCreateNestedManyWithoutBlocoInput
  }

  export type blocoUncheckedCreateInput = {
    id?: number
    nome: string
    salas?: salaUncheckedCreateNestedManyWithoutBlocoInput
  }

  export type blocoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    salas?: salaUpdateManyWithoutBlocoNestedInput
  }

  export type blocoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    salas?: salaUncheckedUpdateManyWithoutBlocoNestedInput
  }

  export type blocoCreateManyInput = {
    id?: number
    nome: string
  }

  export type blocoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type blocoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type salaCreateInput = {
    codigo: string
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
    tipo: tipo_salaCreateNestedOneWithoutSalasInput
    bloco: blocoCreateNestedOneWithoutSalasInput
    alocacoes?: alocacaoCreateNestedManyWithoutSalaInput
  }

  export type salaUncheckedCreateInput = {
    id?: number
    codigo: string
    tipo_id: number
    bloco_id: number
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
    alocacoes?: alocacaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type salaUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: tipo_salaUpdateOneRequiredWithoutSalasNestedInput
    bloco?: blocoUpdateOneRequiredWithoutSalasNestedInput
    alocacoes?: alocacaoUpdateManyWithoutSalaNestedInput
  }

  export type salaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    bloco_id?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alocacoes?: alocacaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type salaCreateManyInput = {
    id?: number
    codigo: string
    tipo_id: number
    bloco_id: number
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salaUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    bloco_id?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type disciplinaCreateInput = {
    nome: string
    alocacoes?: alocacaoCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaUncheckedCreateInput = {
    id?: number
    nome: string
    alocacoes?: alocacaoUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type disciplinaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    alocacoes?: alocacaoUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    alocacoes?: alocacaoUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type disciplinaCreateManyInput = {
    id?: number
    nome: string
  }

  export type disciplinaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type alocacaoCreateInput = {
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    sala: salaCreateNestedOneWithoutAlocacoesInput
    disciplina: disciplinaCreateNestedOneWithoutAlocacoesInput
  }

  export type alocacaoUncheckedCreateInput = {
    id?: number
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    sala_id: number
    disciplina_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type alocacaoUpdateInput = {
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sala?: salaUpdateOneRequiredWithoutAlocacoesNestedInput
    disciplina?: disciplinaUpdateOneRequiredWithoutAlocacoesNestedInput
  }

  export type alocacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    sala_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alocacaoCreateManyInput = {
    id?: number
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    sala_id: number
    disciplina_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type alocacaoUpdateManyMutationInput = {
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alocacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    sala_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    every?: salaWhereInput
    some?: salaWhereInput
    none?: salaWhereInput
  }

  export type salaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipo_salaOrderByRelevanceInput = {
    fields: tipo_salaOrderByRelevanceFieldEnum | tipo_salaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tipo_salaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tipo_salaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tipo_salaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tipo_salaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type tipo_salaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type blocoOrderByRelevanceInput = {
    fields: blocoOrderByRelevanceFieldEnum | blocoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type blocoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type blocoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type blocoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type blocoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type blocoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type Tipo_salaScalarRelationFilter = {
    is?: tipo_salaWhereInput
    isNot?: tipo_salaWhereInput
  }

  export type BlocoScalarRelationFilter = {
    is?: blocoWhereInput
    isNot?: blocoWhereInput
  }

  export type AlocacaoListRelationFilter = {
    every?: alocacaoWhereInput
    some?: alocacaoWhereInput
    none?: alocacaoWhereInput
  }

  export type alocacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type salaOrderByRelevanceInput = {
    fields: salaOrderByRelevanceFieldEnum | salaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type salaCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo_id?: SortOrder
    bloco_id?: SortOrder
    capacidade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salaAvgOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    bloco_id?: SortOrder
    capacidade?: SortOrder
  }

  export type salaMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo_id?: SortOrder
    bloco_id?: SortOrder
    capacidade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salaMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo_id?: SortOrder
    bloco_id?: SortOrder
    capacidade?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salaSumOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    bloco_id?: SortOrder
    capacidade?: SortOrder
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

  export type disciplinaOrderByRelevanceInput = {
    fields: disciplinaOrderByRelevanceFieldEnum | disciplinaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type disciplinaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type disciplinaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type disciplinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type disciplinaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type disciplinaSumOrderByAggregateInput = {
    id?: SortOrder
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
    is?: salaWhereInput
    isNot?: salaWhereInput
  }

  export type DisciplinaScalarRelationFilter = {
    is?: disciplinaWhereInput
    isNot?: disciplinaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type alocacaoOrderByRelevanceInput = {
    fields: alocacaoOrderByRelevanceFieldEnum | alocacaoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type alocacaoUq_alocacao_sala_data_horasCompoundUniqueInput = {
    sala_id: number
    data: Date | string
    hora_inicio: string
    hora_fim: string
    deleted_at: Date | string
  }

  export type alocacaoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dia_da_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fim?: SortOrder
    sala_id?: SortOrder
    disciplina_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type alocacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    dia_da_semana?: SortOrder
    sala_id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type alocacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dia_da_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fim?: SortOrder
    sala_id?: SortOrder
    disciplina_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type alocacaoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    dia_da_semana?: SortOrder
    hora_inicio?: SortOrder
    hora_fim?: SortOrder
    sala_id?: SortOrder
    disciplina_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type alocacaoSumOrderByAggregateInput = {
    id?: SortOrder
    dia_da_semana?: SortOrder
    sala_id?: SortOrder
    disciplina_id?: SortOrder
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

  export type salaCreateNestedManyWithoutTipoInput = {
    create?: XOR<salaCreateWithoutTipoInput, salaUncheckedCreateWithoutTipoInput> | salaCreateWithoutTipoInput[] | salaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutTipoInput | salaCreateOrConnectWithoutTipoInput[]
    createMany?: salaCreateManyTipoInputEnvelope
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
  }

  export type salaUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<salaCreateWithoutTipoInput, salaUncheckedCreateWithoutTipoInput> | salaCreateWithoutTipoInput[] | salaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutTipoInput | salaCreateOrConnectWithoutTipoInput[]
    createMany?: salaCreateManyTipoInputEnvelope
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type salaUpdateManyWithoutTipoNestedInput = {
    create?: XOR<salaCreateWithoutTipoInput, salaUncheckedCreateWithoutTipoInput> | salaCreateWithoutTipoInput[] | salaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutTipoInput | salaCreateOrConnectWithoutTipoInput[]
    upsert?: salaUpsertWithWhereUniqueWithoutTipoInput | salaUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: salaCreateManyTipoInputEnvelope
    set?: salaWhereUniqueInput | salaWhereUniqueInput[]
    disconnect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    delete?: salaWhereUniqueInput | salaWhereUniqueInput[]
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    update?: salaUpdateWithWhereUniqueWithoutTipoInput | salaUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: salaUpdateManyWithWhereWithoutTipoInput | salaUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: salaScalarWhereInput | salaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type salaUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<salaCreateWithoutTipoInput, salaUncheckedCreateWithoutTipoInput> | salaCreateWithoutTipoInput[] | salaUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutTipoInput | salaCreateOrConnectWithoutTipoInput[]
    upsert?: salaUpsertWithWhereUniqueWithoutTipoInput | salaUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: salaCreateManyTipoInputEnvelope
    set?: salaWhereUniqueInput | salaWhereUniqueInput[]
    disconnect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    delete?: salaWhereUniqueInput | salaWhereUniqueInput[]
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    update?: salaUpdateWithWhereUniqueWithoutTipoInput | salaUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: salaUpdateManyWithWhereWithoutTipoInput | salaUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: salaScalarWhereInput | salaScalarWhereInput[]
  }

  export type salaCreateNestedManyWithoutBlocoInput = {
    create?: XOR<salaCreateWithoutBlocoInput, salaUncheckedCreateWithoutBlocoInput> | salaCreateWithoutBlocoInput[] | salaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutBlocoInput | salaCreateOrConnectWithoutBlocoInput[]
    createMany?: salaCreateManyBlocoInputEnvelope
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
  }

  export type salaUncheckedCreateNestedManyWithoutBlocoInput = {
    create?: XOR<salaCreateWithoutBlocoInput, salaUncheckedCreateWithoutBlocoInput> | salaCreateWithoutBlocoInput[] | salaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutBlocoInput | salaCreateOrConnectWithoutBlocoInput[]
    createMany?: salaCreateManyBlocoInputEnvelope
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
  }

  export type salaUpdateManyWithoutBlocoNestedInput = {
    create?: XOR<salaCreateWithoutBlocoInput, salaUncheckedCreateWithoutBlocoInput> | salaCreateWithoutBlocoInput[] | salaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutBlocoInput | salaCreateOrConnectWithoutBlocoInput[]
    upsert?: salaUpsertWithWhereUniqueWithoutBlocoInput | salaUpsertWithWhereUniqueWithoutBlocoInput[]
    createMany?: salaCreateManyBlocoInputEnvelope
    set?: salaWhereUniqueInput | salaWhereUniqueInput[]
    disconnect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    delete?: salaWhereUniqueInput | salaWhereUniqueInput[]
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    update?: salaUpdateWithWhereUniqueWithoutBlocoInput | salaUpdateWithWhereUniqueWithoutBlocoInput[]
    updateMany?: salaUpdateManyWithWhereWithoutBlocoInput | salaUpdateManyWithWhereWithoutBlocoInput[]
    deleteMany?: salaScalarWhereInput | salaScalarWhereInput[]
  }

  export type salaUncheckedUpdateManyWithoutBlocoNestedInput = {
    create?: XOR<salaCreateWithoutBlocoInput, salaUncheckedCreateWithoutBlocoInput> | salaCreateWithoutBlocoInput[] | salaUncheckedCreateWithoutBlocoInput[]
    connectOrCreate?: salaCreateOrConnectWithoutBlocoInput | salaCreateOrConnectWithoutBlocoInput[]
    upsert?: salaUpsertWithWhereUniqueWithoutBlocoInput | salaUpsertWithWhereUniqueWithoutBlocoInput[]
    createMany?: salaCreateManyBlocoInputEnvelope
    set?: salaWhereUniqueInput | salaWhereUniqueInput[]
    disconnect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    delete?: salaWhereUniqueInput | salaWhereUniqueInput[]
    connect?: salaWhereUniqueInput | salaWhereUniqueInput[]
    update?: salaUpdateWithWhereUniqueWithoutBlocoInput | salaUpdateWithWhereUniqueWithoutBlocoInput[]
    updateMany?: salaUpdateManyWithWhereWithoutBlocoInput | salaUpdateManyWithWhereWithoutBlocoInput[]
    deleteMany?: salaScalarWhereInput | salaScalarWhereInput[]
  }

  export type tipo_salaCreateNestedOneWithoutSalasInput = {
    create?: XOR<tipo_salaCreateWithoutSalasInput, tipo_salaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: tipo_salaCreateOrConnectWithoutSalasInput
    connect?: tipo_salaWhereUniqueInput
  }

  export type blocoCreateNestedOneWithoutSalasInput = {
    create?: XOR<blocoCreateWithoutSalasInput, blocoUncheckedCreateWithoutSalasInput>
    connectOrCreate?: blocoCreateOrConnectWithoutSalasInput
    connect?: blocoWhereUniqueInput
  }

  export type alocacaoCreateNestedManyWithoutSalaInput = {
    create?: XOR<alocacaoCreateWithoutSalaInput, alocacaoUncheckedCreateWithoutSalaInput> | alocacaoCreateWithoutSalaInput[] | alocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutSalaInput | alocacaoCreateOrConnectWithoutSalaInput[]
    createMany?: alocacaoCreateManySalaInputEnvelope
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
  }

  export type alocacaoUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<alocacaoCreateWithoutSalaInput, alocacaoUncheckedCreateWithoutSalaInput> | alocacaoCreateWithoutSalaInput[] | alocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutSalaInput | alocacaoCreateOrConnectWithoutSalaInput[]
    createMany?: alocacaoCreateManySalaInputEnvelope
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tipo_salaUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<tipo_salaCreateWithoutSalasInput, tipo_salaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: tipo_salaCreateOrConnectWithoutSalasInput
    upsert?: tipo_salaUpsertWithoutSalasInput
    connect?: tipo_salaWhereUniqueInput
    update?: XOR<XOR<tipo_salaUpdateToOneWithWhereWithoutSalasInput, tipo_salaUpdateWithoutSalasInput>, tipo_salaUncheckedUpdateWithoutSalasInput>
  }

  export type blocoUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<blocoCreateWithoutSalasInput, blocoUncheckedCreateWithoutSalasInput>
    connectOrCreate?: blocoCreateOrConnectWithoutSalasInput
    upsert?: blocoUpsertWithoutSalasInput
    connect?: blocoWhereUniqueInput
    update?: XOR<XOR<blocoUpdateToOneWithWhereWithoutSalasInput, blocoUpdateWithoutSalasInput>, blocoUncheckedUpdateWithoutSalasInput>
  }

  export type alocacaoUpdateManyWithoutSalaNestedInput = {
    create?: XOR<alocacaoCreateWithoutSalaInput, alocacaoUncheckedCreateWithoutSalaInput> | alocacaoCreateWithoutSalaInput[] | alocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutSalaInput | alocacaoCreateOrConnectWithoutSalaInput[]
    upsert?: alocacaoUpsertWithWhereUniqueWithoutSalaInput | alocacaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: alocacaoCreateManySalaInputEnvelope
    set?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    disconnect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    delete?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    update?: alocacaoUpdateWithWhereUniqueWithoutSalaInput | alocacaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: alocacaoUpdateManyWithWhereWithoutSalaInput | alocacaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: alocacaoScalarWhereInput | alocacaoScalarWhereInput[]
  }

  export type alocacaoUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<alocacaoCreateWithoutSalaInput, alocacaoUncheckedCreateWithoutSalaInput> | alocacaoCreateWithoutSalaInput[] | alocacaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutSalaInput | alocacaoCreateOrConnectWithoutSalaInput[]
    upsert?: alocacaoUpsertWithWhereUniqueWithoutSalaInput | alocacaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: alocacaoCreateManySalaInputEnvelope
    set?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    disconnect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    delete?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    update?: alocacaoUpdateWithWhereUniqueWithoutSalaInput | alocacaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: alocacaoUpdateManyWithWhereWithoutSalaInput | alocacaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: alocacaoScalarWhereInput | alocacaoScalarWhereInput[]
  }

  export type alocacaoCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<alocacaoCreateWithoutDisciplinaInput, alocacaoUncheckedCreateWithoutDisciplinaInput> | alocacaoCreateWithoutDisciplinaInput[] | alocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutDisciplinaInput | alocacaoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: alocacaoCreateManyDisciplinaInputEnvelope
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
  }

  export type alocacaoUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<alocacaoCreateWithoutDisciplinaInput, alocacaoUncheckedCreateWithoutDisciplinaInput> | alocacaoCreateWithoutDisciplinaInput[] | alocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutDisciplinaInput | alocacaoCreateOrConnectWithoutDisciplinaInput[]
    createMany?: alocacaoCreateManyDisciplinaInputEnvelope
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
  }

  export type alocacaoUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<alocacaoCreateWithoutDisciplinaInput, alocacaoUncheckedCreateWithoutDisciplinaInput> | alocacaoCreateWithoutDisciplinaInput[] | alocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutDisciplinaInput | alocacaoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: alocacaoUpsertWithWhereUniqueWithoutDisciplinaInput | alocacaoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: alocacaoCreateManyDisciplinaInputEnvelope
    set?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    disconnect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    delete?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    update?: alocacaoUpdateWithWhereUniqueWithoutDisciplinaInput | alocacaoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: alocacaoUpdateManyWithWhereWithoutDisciplinaInput | alocacaoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: alocacaoScalarWhereInput | alocacaoScalarWhereInput[]
  }

  export type alocacaoUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<alocacaoCreateWithoutDisciplinaInput, alocacaoUncheckedCreateWithoutDisciplinaInput> | alocacaoCreateWithoutDisciplinaInput[] | alocacaoUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: alocacaoCreateOrConnectWithoutDisciplinaInput | alocacaoCreateOrConnectWithoutDisciplinaInput[]
    upsert?: alocacaoUpsertWithWhereUniqueWithoutDisciplinaInput | alocacaoUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: alocacaoCreateManyDisciplinaInputEnvelope
    set?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    disconnect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    delete?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    connect?: alocacaoWhereUniqueInput | alocacaoWhereUniqueInput[]
    update?: alocacaoUpdateWithWhereUniqueWithoutDisciplinaInput | alocacaoUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: alocacaoUpdateManyWithWhereWithoutDisciplinaInput | alocacaoUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: alocacaoScalarWhereInput | alocacaoScalarWhereInput[]
  }

  export type salaCreateNestedOneWithoutAlocacoesInput = {
    create?: XOR<salaCreateWithoutAlocacoesInput, salaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: salaCreateOrConnectWithoutAlocacoesInput
    connect?: salaWhereUniqueInput
  }

  export type disciplinaCreateNestedOneWithoutAlocacoesInput = {
    create?: XOR<disciplinaCreateWithoutAlocacoesInput, disciplinaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: disciplinaCreateOrConnectWithoutAlocacoesInput
    connect?: disciplinaWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type salaUpdateOneRequiredWithoutAlocacoesNestedInput = {
    create?: XOR<salaCreateWithoutAlocacoesInput, salaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: salaCreateOrConnectWithoutAlocacoesInput
    upsert?: salaUpsertWithoutAlocacoesInput
    connect?: salaWhereUniqueInput
    update?: XOR<XOR<salaUpdateToOneWithWhereWithoutAlocacoesInput, salaUpdateWithoutAlocacoesInput>, salaUncheckedUpdateWithoutAlocacoesInput>
  }

  export type disciplinaUpdateOneRequiredWithoutAlocacoesNestedInput = {
    create?: XOR<disciplinaCreateWithoutAlocacoesInput, disciplinaUncheckedCreateWithoutAlocacoesInput>
    connectOrCreate?: disciplinaCreateOrConnectWithoutAlocacoesInput
    upsert?: disciplinaUpsertWithoutAlocacoesInput
    connect?: disciplinaWhereUniqueInput
    update?: XOR<XOR<disciplinaUpdateToOneWithWhereWithoutAlocacoesInput, disciplinaUpdateWithoutAlocacoesInput>, disciplinaUncheckedUpdateWithoutAlocacoesInput>
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

  export type salaCreateWithoutTipoInput = {
    codigo: string
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
    bloco: blocoCreateNestedOneWithoutSalasInput
    alocacoes?: alocacaoCreateNestedManyWithoutSalaInput
  }

  export type salaUncheckedCreateWithoutTipoInput = {
    id?: number
    codigo: string
    bloco_id: number
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
    alocacoes?: alocacaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type salaCreateOrConnectWithoutTipoInput = {
    where: salaWhereUniqueInput
    create: XOR<salaCreateWithoutTipoInput, salaUncheckedCreateWithoutTipoInput>
  }

  export type salaCreateManyTipoInputEnvelope = {
    data: salaCreateManyTipoInput | salaCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type salaUpsertWithWhereUniqueWithoutTipoInput = {
    where: salaWhereUniqueInput
    update: XOR<salaUpdateWithoutTipoInput, salaUncheckedUpdateWithoutTipoInput>
    create: XOR<salaCreateWithoutTipoInput, salaUncheckedCreateWithoutTipoInput>
  }

  export type salaUpdateWithWhereUniqueWithoutTipoInput = {
    where: salaWhereUniqueInput
    data: XOR<salaUpdateWithoutTipoInput, salaUncheckedUpdateWithoutTipoInput>
  }

  export type salaUpdateManyWithWhereWithoutTipoInput = {
    where: salaScalarWhereInput
    data: XOR<salaUpdateManyMutationInput, salaUncheckedUpdateManyWithoutTipoInput>
  }

  export type salaScalarWhereInput = {
    AND?: salaScalarWhereInput | salaScalarWhereInput[]
    OR?: salaScalarWhereInput[]
    NOT?: salaScalarWhereInput | salaScalarWhereInput[]
    id?: IntFilter<"sala"> | number
    codigo?: StringFilter<"sala"> | string
    tipo_id?: IntFilter<"sala"> | number
    bloco_id?: IntFilter<"sala"> | number
    capacidade?: IntFilter<"sala"> | number
    created_at?: DateTimeFilter<"sala"> | Date | string
    updated_at?: DateTimeFilter<"sala"> | Date | string
  }

  export type salaCreateWithoutBlocoInput = {
    codigo: string
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
    tipo: tipo_salaCreateNestedOneWithoutSalasInput
    alocacoes?: alocacaoCreateNestedManyWithoutSalaInput
  }

  export type salaUncheckedCreateWithoutBlocoInput = {
    id?: number
    codigo: string
    tipo_id: number
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
    alocacoes?: alocacaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type salaCreateOrConnectWithoutBlocoInput = {
    where: salaWhereUniqueInput
    create: XOR<salaCreateWithoutBlocoInput, salaUncheckedCreateWithoutBlocoInput>
  }

  export type salaCreateManyBlocoInputEnvelope = {
    data: salaCreateManyBlocoInput | salaCreateManyBlocoInput[]
    skipDuplicates?: boolean
  }

  export type salaUpsertWithWhereUniqueWithoutBlocoInput = {
    where: salaWhereUniqueInput
    update: XOR<salaUpdateWithoutBlocoInput, salaUncheckedUpdateWithoutBlocoInput>
    create: XOR<salaCreateWithoutBlocoInput, salaUncheckedCreateWithoutBlocoInput>
  }

  export type salaUpdateWithWhereUniqueWithoutBlocoInput = {
    where: salaWhereUniqueInput
    data: XOR<salaUpdateWithoutBlocoInput, salaUncheckedUpdateWithoutBlocoInput>
  }

  export type salaUpdateManyWithWhereWithoutBlocoInput = {
    where: salaScalarWhereInput
    data: XOR<salaUpdateManyMutationInput, salaUncheckedUpdateManyWithoutBlocoInput>
  }

  export type tipo_salaCreateWithoutSalasInput = {
    nome: string
  }

  export type tipo_salaUncheckedCreateWithoutSalasInput = {
    id?: number
    nome: string
  }

  export type tipo_salaCreateOrConnectWithoutSalasInput = {
    where: tipo_salaWhereUniqueInput
    create: XOR<tipo_salaCreateWithoutSalasInput, tipo_salaUncheckedCreateWithoutSalasInput>
  }

  export type blocoCreateWithoutSalasInput = {
    nome: string
  }

  export type blocoUncheckedCreateWithoutSalasInput = {
    id?: number
    nome: string
  }

  export type blocoCreateOrConnectWithoutSalasInput = {
    where: blocoWhereUniqueInput
    create: XOR<blocoCreateWithoutSalasInput, blocoUncheckedCreateWithoutSalasInput>
  }

  export type alocacaoCreateWithoutSalaInput = {
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    disciplina: disciplinaCreateNestedOneWithoutAlocacoesInput
  }

  export type alocacaoUncheckedCreateWithoutSalaInput = {
    id?: number
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    disciplina_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type alocacaoCreateOrConnectWithoutSalaInput = {
    where: alocacaoWhereUniqueInput
    create: XOR<alocacaoCreateWithoutSalaInput, alocacaoUncheckedCreateWithoutSalaInput>
  }

  export type alocacaoCreateManySalaInputEnvelope = {
    data: alocacaoCreateManySalaInput | alocacaoCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type tipo_salaUpsertWithoutSalasInput = {
    update: XOR<tipo_salaUpdateWithoutSalasInput, tipo_salaUncheckedUpdateWithoutSalasInput>
    create: XOR<tipo_salaCreateWithoutSalasInput, tipo_salaUncheckedCreateWithoutSalasInput>
    where?: tipo_salaWhereInput
  }

  export type tipo_salaUpdateToOneWithWhereWithoutSalasInput = {
    where?: tipo_salaWhereInput
    data: XOR<tipo_salaUpdateWithoutSalasInput, tipo_salaUncheckedUpdateWithoutSalasInput>
  }

  export type tipo_salaUpdateWithoutSalasInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_salaUncheckedUpdateWithoutSalasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type blocoUpsertWithoutSalasInput = {
    update: XOR<blocoUpdateWithoutSalasInput, blocoUncheckedUpdateWithoutSalasInput>
    create: XOR<blocoCreateWithoutSalasInput, blocoUncheckedCreateWithoutSalasInput>
    where?: blocoWhereInput
  }

  export type blocoUpdateToOneWithWhereWithoutSalasInput = {
    where?: blocoWhereInput
    data: XOR<blocoUpdateWithoutSalasInput, blocoUncheckedUpdateWithoutSalasInput>
  }

  export type blocoUpdateWithoutSalasInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type blocoUncheckedUpdateWithoutSalasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type alocacaoUpsertWithWhereUniqueWithoutSalaInput = {
    where: alocacaoWhereUniqueInput
    update: XOR<alocacaoUpdateWithoutSalaInput, alocacaoUncheckedUpdateWithoutSalaInput>
    create: XOR<alocacaoCreateWithoutSalaInput, alocacaoUncheckedCreateWithoutSalaInput>
  }

  export type alocacaoUpdateWithWhereUniqueWithoutSalaInput = {
    where: alocacaoWhereUniqueInput
    data: XOR<alocacaoUpdateWithoutSalaInput, alocacaoUncheckedUpdateWithoutSalaInput>
  }

  export type alocacaoUpdateManyWithWhereWithoutSalaInput = {
    where: alocacaoScalarWhereInput
    data: XOR<alocacaoUpdateManyMutationInput, alocacaoUncheckedUpdateManyWithoutSalaInput>
  }

  export type alocacaoScalarWhereInput = {
    AND?: alocacaoScalarWhereInput | alocacaoScalarWhereInput[]
    OR?: alocacaoScalarWhereInput[]
    NOT?: alocacaoScalarWhereInput | alocacaoScalarWhereInput[]
    id?: IntFilter<"alocacao"> | number
    data?: DateTimeNullableFilter<"alocacao"> | Date | string | null
    dia_da_semana?: IntFilter<"alocacao"> | number
    hora_inicio?: StringFilter<"alocacao"> | string
    hora_fim?: StringFilter<"alocacao"> | string
    sala_id?: IntFilter<"alocacao"> | number
    disciplina_id?: IntFilter<"alocacao"> | number
    created_at?: DateTimeFilter<"alocacao"> | Date | string
    updated_at?: DateTimeFilter<"alocacao"> | Date | string
    deleted_at?: DateTimeNullableFilter<"alocacao"> | Date | string | null
  }

  export type alocacaoCreateWithoutDisciplinaInput = {
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    sala: salaCreateNestedOneWithoutAlocacoesInput
  }

  export type alocacaoUncheckedCreateWithoutDisciplinaInput = {
    id?: number
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    sala_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type alocacaoCreateOrConnectWithoutDisciplinaInput = {
    where: alocacaoWhereUniqueInput
    create: XOR<alocacaoCreateWithoutDisciplinaInput, alocacaoUncheckedCreateWithoutDisciplinaInput>
  }

  export type alocacaoCreateManyDisciplinaInputEnvelope = {
    data: alocacaoCreateManyDisciplinaInput | alocacaoCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type alocacaoUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: alocacaoWhereUniqueInput
    update: XOR<alocacaoUpdateWithoutDisciplinaInput, alocacaoUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<alocacaoCreateWithoutDisciplinaInput, alocacaoUncheckedCreateWithoutDisciplinaInput>
  }

  export type alocacaoUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: alocacaoWhereUniqueInput
    data: XOR<alocacaoUpdateWithoutDisciplinaInput, alocacaoUncheckedUpdateWithoutDisciplinaInput>
  }

  export type alocacaoUpdateManyWithWhereWithoutDisciplinaInput = {
    where: alocacaoScalarWhereInput
    data: XOR<alocacaoUpdateManyMutationInput, alocacaoUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type salaCreateWithoutAlocacoesInput = {
    codigo: string
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
    tipo: tipo_salaCreateNestedOneWithoutSalasInput
    bloco: blocoCreateNestedOneWithoutSalasInput
  }

  export type salaUncheckedCreateWithoutAlocacoesInput = {
    id?: number
    codigo: string
    tipo_id: number
    bloco_id: number
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salaCreateOrConnectWithoutAlocacoesInput = {
    where: salaWhereUniqueInput
    create: XOR<salaCreateWithoutAlocacoesInput, salaUncheckedCreateWithoutAlocacoesInput>
  }

  export type disciplinaCreateWithoutAlocacoesInput = {
    nome: string
  }

  export type disciplinaUncheckedCreateWithoutAlocacoesInput = {
    id?: number
    nome: string
  }

  export type disciplinaCreateOrConnectWithoutAlocacoesInput = {
    where: disciplinaWhereUniqueInput
    create: XOR<disciplinaCreateWithoutAlocacoesInput, disciplinaUncheckedCreateWithoutAlocacoesInput>
  }

  export type salaUpsertWithoutAlocacoesInput = {
    update: XOR<salaUpdateWithoutAlocacoesInput, salaUncheckedUpdateWithoutAlocacoesInput>
    create: XOR<salaCreateWithoutAlocacoesInput, salaUncheckedCreateWithoutAlocacoesInput>
    where?: salaWhereInput
  }

  export type salaUpdateToOneWithWhereWithoutAlocacoesInput = {
    where?: salaWhereInput
    data: XOR<salaUpdateWithoutAlocacoesInput, salaUncheckedUpdateWithoutAlocacoesInput>
  }

  export type salaUpdateWithoutAlocacoesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: tipo_salaUpdateOneRequiredWithoutSalasNestedInput
    bloco?: blocoUpdateOneRequiredWithoutSalasNestedInput
  }

  export type salaUncheckedUpdateWithoutAlocacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    bloco_id?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type disciplinaUpsertWithoutAlocacoesInput = {
    update: XOR<disciplinaUpdateWithoutAlocacoesInput, disciplinaUncheckedUpdateWithoutAlocacoesInput>
    create: XOR<disciplinaCreateWithoutAlocacoesInput, disciplinaUncheckedCreateWithoutAlocacoesInput>
    where?: disciplinaWhereInput
  }

  export type disciplinaUpdateToOneWithWhereWithoutAlocacoesInput = {
    where?: disciplinaWhereInput
    data: XOR<disciplinaUpdateWithoutAlocacoesInput, disciplinaUncheckedUpdateWithoutAlocacoesInput>
  }

  export type disciplinaUpdateWithoutAlocacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinaUncheckedUpdateWithoutAlocacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type salaCreateManyTipoInput = {
    id?: number
    codigo: string
    bloco_id: number
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salaUpdateWithoutTipoInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bloco?: blocoUpdateOneRequiredWithoutSalasNestedInput
    alocacoes?: alocacaoUpdateManyWithoutSalaNestedInput
  }

  export type salaUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    bloco_id?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alocacoes?: alocacaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type salaUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    bloco_id?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salaCreateManyBlocoInput = {
    id?: number
    codigo: string
    tipo_id: number
    capacidade: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type salaUpdateWithoutBlocoInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: tipo_salaUpdateOneRequiredWithoutSalasNestedInput
    alocacoes?: alocacaoUpdateManyWithoutSalaNestedInput
  }

  export type salaUncheckedUpdateWithoutBlocoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    alocacoes?: alocacaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type salaUncheckedUpdateManyWithoutBlocoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alocacaoCreateManySalaInput = {
    id?: number
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    disciplina_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type alocacaoUpdateWithoutSalaInput = {
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplina?: disciplinaUpdateOneRequiredWithoutAlocacoesNestedInput
  }

  export type alocacaoUncheckedUpdateWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alocacaoUncheckedUpdateManyWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alocacaoCreateManyDisciplinaInput = {
    id?: number
    data?: Date | string | null
    dia_da_semana: number
    hora_inicio: string
    hora_fim: string
    sala_id: number
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type alocacaoUpdateWithoutDisciplinaInput = {
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sala?: salaUpdateOneRequiredWithoutAlocacoesNestedInput
  }

  export type alocacaoUncheckedUpdateWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    sala_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alocacaoUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dia_da_semana?: IntFieldUpdateOperationsInput | number
    hora_inicio?: StringFieldUpdateOperationsInput | string
    hora_fim?: StringFieldUpdateOperationsInput | string
    sala_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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