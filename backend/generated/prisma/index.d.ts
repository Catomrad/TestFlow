
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model TestPlan
 * 
 */
export type TestPlan = $Result.DefaultSelection<Prisma.$TestPlanPayload>
/**
 * Model TestCase
 * 
 */
export type TestCase = $Result.DefaultSelection<Prisma.$TestCasePayload>
/**
 * Model Flowchart
 * 
 */
export type Flowchart = $Result.DefaultSelection<Prisma.$FlowchartPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testPlan`: Exposes CRUD operations for the **TestPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestPlans
    * const testPlans = await prisma.testPlan.findMany()
    * ```
    */
  get testPlan(): Prisma.TestPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCase`: Exposes CRUD operations for the **TestCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCases
    * const testCases = await prisma.testCase.findMany()
    * ```
    */
  get testCase(): Prisma.TestCaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowchart`: Exposes CRUD operations for the **Flowchart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowcharts
    * const flowcharts = await prisma.flowchart.findMany()
    * ```
    */
  get flowchart(): Prisma.FlowchartDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Project: 'Project',
    ProjectMember: 'ProjectMember',
    TestPlan: 'TestPlan',
    TestCase: 'TestCase',
    Flowchart: 'Flowchart'
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
      modelProps: "user" | "project" | "projectMember" | "testPlan" | "testCase" | "flowchart"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      TestPlan: {
        payload: Prisma.$TestPlanPayload<ExtArgs>
        fields: Prisma.TestPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>
          }
          findFirst: {
            args: Prisma.TestPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>
          }
          findMany: {
            args: Prisma.TestPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>[]
          }
          create: {
            args: Prisma.TestPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>
          }
          createMany: {
            args: Prisma.TestPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>[]
          }
          delete: {
            args: Prisma.TestPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>
          }
          update: {
            args: Prisma.TestPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>
          }
          deleteMany: {
            args: Prisma.TestPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>[]
          }
          upsert: {
            args: Prisma.TestPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPlanPayload>
          }
          aggregate: {
            args: Prisma.TestPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestPlan>
          }
          groupBy: {
            args: Prisma.TestPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TestPlanCountAggregateOutputType> | number
          }
        }
      }
      TestCase: {
        payload: Prisma.$TestCasePayload<ExtArgs>
        fields: Prisma.TestCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findFirst: {
            args: Prisma.TestCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          findMany: {
            args: Prisma.TestCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          create: {
            args: Prisma.TestCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          createMany: {
            args: Prisma.TestCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          delete: {
            args: Prisma.TestCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          update: {
            args: Prisma.TestCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          deleteMany: {
            args: Prisma.TestCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestCaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>[]
          }
          upsert: {
            args: Prisma.TestCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasePayload>
          }
          aggregate: {
            args: Prisma.TestCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCase>
          }
          groupBy: {
            args: Prisma.TestCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCaseCountArgs<ExtArgs>
            result: $Utils.Optional<TestCaseCountAggregateOutputType> | number
          }
        }
      }
      Flowchart: {
        payload: Prisma.$FlowchartPayload<ExtArgs>
        fields: Prisma.FlowchartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowchartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowchartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          findFirst: {
            args: Prisma.FlowchartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowchartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          findMany: {
            args: Prisma.FlowchartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>[]
          }
          create: {
            args: Prisma.FlowchartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          createMany: {
            args: Prisma.FlowchartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowchartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>[]
          }
          delete: {
            args: Prisma.FlowchartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          update: {
            args: Prisma.FlowchartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          deleteMany: {
            args: Prisma.FlowchartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowchartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowchartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>[]
          }
          upsert: {
            args: Prisma.FlowchartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          aggregate: {
            args: Prisma.FlowchartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowchart>
          }
          groupBy: {
            args: Prisma.FlowchartGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowchartGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowchartCountArgs<ExtArgs>
            result: $Utils.Optional<FlowchartCountAggregateOutputType> | number
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
    user?: UserOmit
    project?: ProjectOmit
    projectMember?: ProjectMemberOmit
    testPlan?: TestPlanOmit
    testCase?: TestCaseOmit
    flowchart?: FlowchartOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    memberships: number
    testPlans: number
    testCases: number
    flowcharts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    testPlans?: boolean | UserCountOutputTypeCountTestPlansArgs
    testCases?: boolean | UserCountOutputTypeCountTestCasesArgs
    flowcharts?: boolean | UserCountOutputTypeCountFlowchartsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlowchartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowchartWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    members: number
    testPlans: number
    flowcharts: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
    testPlans?: boolean | ProjectCountOutputTypeCountTestPlansArgs
    flowcharts?: boolean | ProjectCountOutputTypeCountFlowchartsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTestPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestPlanWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFlowchartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowchartWhereInput
  }


  /**
   * Count Type TestPlanCountOutputType
   */

  export type TestPlanCountOutputType = {
    testCases: number
  }

  export type TestPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | TestPlanCountOutputTypeCountTestCasesArgs
  }

  // Custom InputTypes
  /**
   * TestPlanCountOutputType without action
   */
  export type TestPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlanCountOutputType
     */
    select?: TestPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestPlanCountOutputType without action
   */
  export type TestPlanCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    testPlans?: boolean | User$testPlansArgs<ExtArgs>
    testCases?: boolean | User$testCasesArgs<ExtArgs>
    flowcharts?: boolean | User$flowchartsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    testPlans?: boolean | User$testPlansArgs<ExtArgs>
    testCases?: boolean | User$testCasesArgs<ExtArgs>
    flowcharts?: boolean | User$flowchartsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      memberships: Prisma.$ProjectMemberPayload<ExtArgs>[]
      testPlans: Prisma.$TestPlanPayload<ExtArgs>[]
      testCases: Prisma.$TestCasePayload<ExtArgs>[]
      flowcharts: Prisma.$FlowchartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testPlans<T extends User$testPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$testPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testCases<T extends User$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, User$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flowcharts<T extends User$flowchartsArgs<ExtArgs> = {}>(args?: Subset<T, User$flowchartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * User.testPlans
   */
  export type User$testPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    where?: TestPlanWhereInput
    orderBy?: TestPlanOrderByWithRelationInput | TestPlanOrderByWithRelationInput[]
    cursor?: TestPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestPlanScalarFieldEnum | TestPlanScalarFieldEnum[]
  }

  /**
   * User.testCases
   */
  export type User$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * User.flowcharts
   */
  export type User$flowchartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    where?: FlowchartWhereInput
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    cursor?: FlowchartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdById?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdById?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    createdById: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    testPlans?: boolean | Project$testPlansArgs<ExtArgs>
    flowcharts?: boolean | Project$flowchartsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "createdById", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    testPlans?: boolean | Project$testPlansArgs<ExtArgs>
    flowcharts?: boolean | Project$flowchartsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
      testPlans: Prisma.$TestPlanPayload<ExtArgs>[]
      flowcharts: Prisma.$FlowchartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      createdById: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testPlans<T extends Project$testPlansArgs<ExtArgs> = {}>(args?: Subset<T, Project$testPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flowcharts<T extends Project$flowchartsArgs<ExtArgs> = {}>(args?: Subset<T, Project$flowchartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly createdById: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Project.testPlans
   */
  export type Project$testPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    where?: TestPlanWhereInput
    orderBy?: TestPlanOrderByWithRelationInput | TestPlanOrderByWithRelationInput[]
    cursor?: TestPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestPlanScalarFieldEnum | TestPlanScalarFieldEnum[]
  }

  /**
   * Project.flowcharts
   */
  export type Project$flowchartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    where?: FlowchartWhereInput
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    cursor?: FlowchartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _avg: ProjectMemberAvgAggregateOutputType | null
    _sum: ProjectMemberSumAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberAvgAggregateOutputType = {
    userId: number | null
    projectId: number | null
  }

  export type ProjectMemberSumAggregateOutputType = {
    userId: number | null
    projectId: number | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    userId: number | null
    projectId: number | null
    role: string | null
    joinedAt: Date | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    userId: number | null
    projectId: number | null
    role: string | null
    joinedAt: Date | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    userId: number
    projectId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type ProjectMemberAvgAggregateInputType = {
    userId?: true
    projectId?: true
  }

  export type ProjectMemberSumAggregateInputType = {
    userId?: true
    projectId?: true
  }

  export type ProjectMemberMinAggregateInputType = {
    userId?: true
    projectId?: true
    role?: true
    joinedAt?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    userId?: true
    projectId?: true
    role?: true
    joinedAt?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    userId?: true
    projectId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _avg?: ProjectMemberAvgAggregateInputType
    _sum?: ProjectMemberSumAggregateInputType
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    userId: number
    projectId: number
    role: string
    joinedAt: Date
    _count: ProjectMemberCountAggregateOutputType | null
    _avg: ProjectMemberAvgAggregateOutputType | null
    _sum: ProjectMemberSumAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectScalar = {
    userId?: boolean
    projectId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type ProjectMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "projectId" | "role" | "joinedAt", ExtArgs["result"]["projectMember"]>
  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      projectId: number
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }

  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>

  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const projectMemberWithUserIdOnly = await prisma.projectMember.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
     */
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `userId`
     * const projectMemberWithUserIdOnly = await prisma.projectMember.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers and returns the data updated in the database.
     * @param {ProjectMemberUpdateManyAndReturnArgs} args - Arguments to update many ProjectMembers.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMembers and only return the `userId`
     * const projectMemberWithUserIdOnly = await prisma.projectMember.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
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
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMember model
   */
  readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectMember model
   */
  interface ProjectMemberFieldRefs {
    readonly userId: FieldRef<"ProjectMember", 'Int'>
    readonly projectId: FieldRef<"ProjectMember", 'Int'>
    readonly role: FieldRef<"ProjectMember", 'String'>
    readonly joinedAt: FieldRef<"ProjectMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
  }

  /**
   * ProjectMember updateManyAndReturn
   */
  export type ProjectMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to delete.
     */
    limit?: number
  }

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
  }


  /**
   * Model TestPlan
   */

  export type AggregateTestPlan = {
    _count: TestPlanCountAggregateOutputType | null
    _avg: TestPlanAvgAggregateOutputType | null
    _sum: TestPlanSumAggregateOutputType | null
    _min: TestPlanMinAggregateOutputType | null
    _max: TestPlanMaxAggregateOutputType | null
  }

  export type TestPlanAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    createdById: number | null
  }

  export type TestPlanSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    createdById: number | null
  }

  export type TestPlanMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    projectId: number | null
    createdById: number | null
  }

  export type TestPlanMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    projectId: number | null
    createdById: number | null
  }

  export type TestPlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    projectId: number
    createdById: number
    _all: number
  }


  export type TestPlanAvgAggregateInputType = {
    id?: true
    projectId?: true
    createdById?: true
  }

  export type TestPlanSumAggregateInputType = {
    id?: true
    projectId?: true
    createdById?: true
  }

  export type TestPlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    projectId?: true
    createdById?: true
  }

  export type TestPlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    projectId?: true
    createdById?: true
  }

  export type TestPlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    projectId?: true
    createdById?: true
    _all?: true
  }

  export type TestPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestPlan to aggregate.
     */
    where?: TestPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPlans to fetch.
     */
    orderBy?: TestPlanOrderByWithRelationInput | TestPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestPlans
    **/
    _count?: true | TestPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestPlanMaxAggregateInputType
  }

  export type GetTestPlanAggregateType<T extends TestPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTestPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestPlan[P]>
      : GetScalarType<T[P], AggregateTestPlan[P]>
  }




  export type TestPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestPlanWhereInput
    orderBy?: TestPlanOrderByWithAggregationInput | TestPlanOrderByWithAggregationInput[]
    by: TestPlanScalarFieldEnum[] | TestPlanScalarFieldEnum
    having?: TestPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestPlanCountAggregateInputType | true
    _avg?: TestPlanAvgAggregateInputType
    _sum?: TestPlanSumAggregateInputType
    _min?: TestPlanMinAggregateInputType
    _max?: TestPlanMaxAggregateInputType
  }

  export type TestPlanGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    projectId: number
    createdById: number
    _count: TestPlanCountAggregateOutputType | null
    _avg: TestPlanAvgAggregateOutputType | null
    _sum: TestPlanSumAggregateOutputType | null
    _min: TestPlanMinAggregateOutputType | null
    _max: TestPlanMaxAggregateOutputType | null
  }

  type GetTestPlanGroupByPayload<T extends TestPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TestPlanGroupByOutputType[P]>
        }
      >
    >


  export type TestPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    testCases?: boolean | TestPlan$testCasesArgs<ExtArgs>
    _count?: boolean | TestPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testPlan"]>

  export type TestPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testPlan"]>

  export type TestPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testPlan"]>

  export type TestPlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
  }

  export type TestPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "projectId" | "createdById", ExtArgs["result"]["testPlan"]>
  export type TestPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    testCases?: boolean | TestPlan$testCasesArgs<ExtArgs>
    _count?: boolean | TestPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestPlan"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      testCases: Prisma.$TestCasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      projectId: number
      createdById: number
    }, ExtArgs["result"]["testPlan"]>
    composites: {}
  }

  type TestPlanGetPayload<S extends boolean | null | undefined | TestPlanDefaultArgs> = $Result.GetResult<Prisma.$TestPlanPayload, S>

  type TestPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestPlanCountAggregateInputType | true
    }

  export interface TestPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestPlan'], meta: { name: 'TestPlan' } }
    /**
     * Find zero or one TestPlan that matches the filter.
     * @param {TestPlanFindUniqueArgs} args - Arguments to find a TestPlan
     * @example
     * // Get one TestPlan
     * const testPlan = await prisma.testPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestPlanFindUniqueArgs>(args: SelectSubset<T, TestPlanFindUniqueArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestPlanFindUniqueOrThrowArgs} args - Arguments to find a TestPlan
     * @example
     * // Get one TestPlan
     * const testPlan = await prisma.testPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TestPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPlanFindFirstArgs} args - Arguments to find a TestPlan
     * @example
     * // Get one TestPlan
     * const testPlan = await prisma.testPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestPlanFindFirstArgs>(args?: SelectSubset<T, TestPlanFindFirstArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPlanFindFirstOrThrowArgs} args - Arguments to find a TestPlan
     * @example
     * // Get one TestPlan
     * const testPlan = await prisma.testPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TestPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestPlans
     * const testPlans = await prisma.testPlan.findMany()
     * 
     * // Get first 10 TestPlans
     * const testPlans = await prisma.testPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testPlanWithIdOnly = await prisma.testPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestPlanFindManyArgs>(args?: SelectSubset<T, TestPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestPlan.
     * @param {TestPlanCreateArgs} args - Arguments to create a TestPlan.
     * @example
     * // Create one TestPlan
     * const TestPlan = await prisma.testPlan.create({
     *   data: {
     *     // ... data to create a TestPlan
     *   }
     * })
     * 
     */
    create<T extends TestPlanCreateArgs>(args: SelectSubset<T, TestPlanCreateArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestPlans.
     * @param {TestPlanCreateManyArgs} args - Arguments to create many TestPlans.
     * @example
     * // Create many TestPlans
     * const testPlan = await prisma.testPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestPlanCreateManyArgs>(args?: SelectSubset<T, TestPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestPlans and returns the data saved in the database.
     * @param {TestPlanCreateManyAndReturnArgs} args - Arguments to create many TestPlans.
     * @example
     * // Create many TestPlans
     * const testPlan = await prisma.testPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestPlans and only return the `id`
     * const testPlanWithIdOnly = await prisma.testPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TestPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestPlan.
     * @param {TestPlanDeleteArgs} args - Arguments to delete one TestPlan.
     * @example
     * // Delete one TestPlan
     * const TestPlan = await prisma.testPlan.delete({
     *   where: {
     *     // ... filter to delete one TestPlan
     *   }
     * })
     * 
     */
    delete<T extends TestPlanDeleteArgs>(args: SelectSubset<T, TestPlanDeleteArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestPlan.
     * @param {TestPlanUpdateArgs} args - Arguments to update one TestPlan.
     * @example
     * // Update one TestPlan
     * const testPlan = await prisma.testPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestPlanUpdateArgs>(args: SelectSubset<T, TestPlanUpdateArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestPlans.
     * @param {TestPlanDeleteManyArgs} args - Arguments to filter TestPlans to delete.
     * @example
     * // Delete a few TestPlans
     * const { count } = await prisma.testPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestPlanDeleteManyArgs>(args?: SelectSubset<T, TestPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestPlans
     * const testPlan = await prisma.testPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestPlanUpdateManyArgs>(args: SelectSubset<T, TestPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestPlans and returns the data updated in the database.
     * @param {TestPlanUpdateManyAndReturnArgs} args - Arguments to update many TestPlans.
     * @example
     * // Update many TestPlans
     * const testPlan = await prisma.testPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestPlans and only return the `id`
     * const testPlanWithIdOnly = await prisma.testPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TestPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestPlan.
     * @param {TestPlanUpsertArgs} args - Arguments to update or create a TestPlan.
     * @example
     * // Update or create a TestPlan
     * const testPlan = await prisma.testPlan.upsert({
     *   create: {
     *     // ... data to create a TestPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestPlan we want to update
     *   }
     * })
     */
    upsert<T extends TestPlanUpsertArgs>(args: SelectSubset<T, TestPlanUpsertArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPlanCountArgs} args - Arguments to filter TestPlans to count.
     * @example
     * // Count the number of TestPlans
     * const count = await prisma.testPlan.count({
     *   where: {
     *     // ... the filter for the TestPlans we want to count
     *   }
     * })
    **/
    count<T extends TestPlanCountArgs>(
      args?: Subset<T, TestPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestPlanAggregateArgs>(args: Subset<T, TestPlanAggregateArgs>): Prisma.PrismaPromise<GetTestPlanAggregateType<T>>

    /**
     * Group by TestPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestPlanGroupByArgs} args - Group by arguments.
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
      T extends TestPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestPlanGroupByArgs['orderBy'] }
        : { orderBy?: TestPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestPlan model
   */
  readonly fields: TestPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testCases<T extends TestPlan$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, TestPlan$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TestPlan model
   */
  interface TestPlanFieldRefs {
    readonly id: FieldRef<"TestPlan", 'Int'>
    readonly name: FieldRef<"TestPlan", 'String'>
    readonly description: FieldRef<"TestPlan", 'String'>
    readonly createdAt: FieldRef<"TestPlan", 'DateTime'>
    readonly projectId: FieldRef<"TestPlan", 'Int'>
    readonly createdById: FieldRef<"TestPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TestPlan findUnique
   */
  export type TestPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * Filter, which TestPlan to fetch.
     */
    where: TestPlanWhereUniqueInput
  }

  /**
   * TestPlan findUniqueOrThrow
   */
  export type TestPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * Filter, which TestPlan to fetch.
     */
    where: TestPlanWhereUniqueInput
  }

  /**
   * TestPlan findFirst
   */
  export type TestPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * Filter, which TestPlan to fetch.
     */
    where?: TestPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPlans to fetch.
     */
    orderBy?: TestPlanOrderByWithRelationInput | TestPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestPlans.
     */
    cursor?: TestPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestPlans.
     */
    distinct?: TestPlanScalarFieldEnum | TestPlanScalarFieldEnum[]
  }

  /**
   * TestPlan findFirstOrThrow
   */
  export type TestPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * Filter, which TestPlan to fetch.
     */
    where?: TestPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPlans to fetch.
     */
    orderBy?: TestPlanOrderByWithRelationInput | TestPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestPlans.
     */
    cursor?: TestPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestPlans.
     */
    distinct?: TestPlanScalarFieldEnum | TestPlanScalarFieldEnum[]
  }

  /**
   * TestPlan findMany
   */
  export type TestPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * Filter, which TestPlans to fetch.
     */
    where?: TestPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestPlans to fetch.
     */
    orderBy?: TestPlanOrderByWithRelationInput | TestPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestPlans.
     */
    cursor?: TestPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestPlans.
     */
    skip?: number
    distinct?: TestPlanScalarFieldEnum | TestPlanScalarFieldEnum[]
  }

  /**
   * TestPlan create
   */
  export type TestPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TestPlan.
     */
    data: XOR<TestPlanCreateInput, TestPlanUncheckedCreateInput>
  }

  /**
   * TestPlan createMany
   */
  export type TestPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestPlans.
     */
    data: TestPlanCreateManyInput | TestPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestPlan createManyAndReturn
   */
  export type TestPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TestPlans.
     */
    data: TestPlanCreateManyInput | TestPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestPlan update
   */
  export type TestPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TestPlan.
     */
    data: XOR<TestPlanUpdateInput, TestPlanUncheckedUpdateInput>
    /**
     * Choose, which TestPlan to update.
     */
    where: TestPlanWhereUniqueInput
  }

  /**
   * TestPlan updateMany
   */
  export type TestPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestPlans.
     */
    data: XOR<TestPlanUpdateManyMutationInput, TestPlanUncheckedUpdateManyInput>
    /**
     * Filter which TestPlans to update
     */
    where?: TestPlanWhereInput
    /**
     * Limit how many TestPlans to update.
     */
    limit?: number
  }

  /**
   * TestPlan updateManyAndReturn
   */
  export type TestPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * The data used to update TestPlans.
     */
    data: XOR<TestPlanUpdateManyMutationInput, TestPlanUncheckedUpdateManyInput>
    /**
     * Filter which TestPlans to update
     */
    where?: TestPlanWhereInput
    /**
     * Limit how many TestPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestPlan upsert
   */
  export type TestPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TestPlan to update in case it exists.
     */
    where: TestPlanWhereUniqueInput
    /**
     * In case the TestPlan found by the `where` argument doesn't exist, create a new TestPlan with this data.
     */
    create: XOR<TestPlanCreateInput, TestPlanUncheckedCreateInput>
    /**
     * In case the TestPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestPlanUpdateInput, TestPlanUncheckedUpdateInput>
  }

  /**
   * TestPlan delete
   */
  export type TestPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
    /**
     * Filter which TestPlan to delete.
     */
    where: TestPlanWhereUniqueInput
  }

  /**
   * TestPlan deleteMany
   */
  export type TestPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestPlans to delete
     */
    where?: TestPlanWhereInput
    /**
     * Limit how many TestPlans to delete.
     */
    limit?: number
  }

  /**
   * TestPlan.testCases
   */
  export type TestPlan$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    cursor?: TestCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestPlan without action
   */
  export type TestPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestPlan
     */
    select?: TestPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestPlan
     */
    omit?: TestPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestPlanInclude<ExtArgs> | null
  }


  /**
   * Model TestCase
   */

  export type AggregateTestCase = {
    _count: TestCaseCountAggregateOutputType | null
    _avg: TestCaseAvgAggregateOutputType | null
    _sum: TestCaseSumAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  export type TestCaseAvgAggregateOutputType = {
    id: number | null
    planId: number | null
    createdById: number | null
  }

  export type TestCaseSumAggregateOutputType = {
    id: number | null
    planId: number | null
    createdById: number | null
  }

  export type TestCaseMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    expected: string | null
    createdAt: Date | null
    planId: number | null
    createdById: number | null
  }

  export type TestCaseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    expected: string | null
    createdAt: Date | null
    planId: number | null
    createdById: number | null
  }

  export type TestCaseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    steps: number
    expected: number
    createdAt: number
    planId: number
    createdById: number
    _all: number
  }


  export type TestCaseAvgAggregateInputType = {
    id?: true
    planId?: true
    createdById?: true
  }

  export type TestCaseSumAggregateInputType = {
    id?: true
    planId?: true
    createdById?: true
  }

  export type TestCaseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    expected?: true
    createdAt?: true
    planId?: true
    createdById?: true
  }

  export type TestCaseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    expected?: true
    createdAt?: true
    planId?: true
    createdById?: true
  }

  export type TestCaseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    steps?: true
    expected?: true
    createdAt?: true
    planId?: true
    createdById?: true
    _all?: true
  }

  export type TestCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCase to aggregate.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCases
    **/
    _count?: true | TestCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCaseMaxAggregateInputType
  }

  export type GetTestCaseAggregateType<T extends TestCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCase[P]>
      : GetScalarType<T[P], AggregateTestCase[P]>
  }




  export type TestCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCaseWhereInput
    orderBy?: TestCaseOrderByWithAggregationInput | TestCaseOrderByWithAggregationInput[]
    by: TestCaseScalarFieldEnum[] | TestCaseScalarFieldEnum
    having?: TestCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCaseCountAggregateInputType | true
    _avg?: TestCaseAvgAggregateInputType
    _sum?: TestCaseSumAggregateInputType
    _min?: TestCaseMinAggregateInputType
    _max?: TestCaseMaxAggregateInputType
  }

  export type TestCaseGroupByOutputType = {
    id: number
    name: string
    description: string | null
    steps: JsonValue
    expected: string
    createdAt: Date
    planId: number
    createdById: number
    _count: TestCaseCountAggregateOutputType | null
    _avg: TestCaseAvgAggregateOutputType | null
    _sum: TestCaseSumAggregateOutputType | null
    _min: TestCaseMinAggregateOutputType | null
    _max: TestCaseMaxAggregateOutputType | null
  }

  type GetTestCaseGroupByPayload<T extends TestCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
            : GetScalarType<T[P], TestCaseGroupByOutputType[P]>
        }
      >
    >


  export type TestCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    expected?: boolean
    createdAt?: boolean
    planId?: boolean
    createdById?: boolean
    plan?: boolean | TestPlanDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    expected?: boolean
    createdAt?: boolean
    planId?: boolean
    createdById?: boolean
    plan?: boolean | TestPlanDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    expected?: boolean
    createdAt?: boolean
    planId?: boolean
    createdById?: boolean
    plan?: boolean | TestPlanDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCase"]>

  export type TestCaseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    steps?: boolean
    expected?: boolean
    createdAt?: boolean
    planId?: boolean
    createdById?: boolean
  }

  export type TestCaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "steps" | "expected" | "createdAt" | "planId" | "createdById", ExtArgs["result"]["testCase"]>
  export type TestCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TestPlanDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TestPlanDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestCaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | TestPlanDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCase"
    objects: {
      plan: Prisma.$TestPlanPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      steps: Prisma.JsonValue
      expected: string
      createdAt: Date
      planId: number
      createdById: number
    }, ExtArgs["result"]["testCase"]>
    composites: {}
  }

  type TestCaseGetPayload<S extends boolean | null | undefined | TestCaseDefaultArgs> = $Result.GetResult<Prisma.$TestCasePayload, S>

  type TestCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCaseCountAggregateInputType | true
    }

  export interface TestCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCase'], meta: { name: 'TestCase' } }
    /**
     * Find zero or one TestCase that matches the filter.
     * @param {TestCaseFindUniqueArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCaseFindUniqueArgs>(args: SelectSubset<T, TestCaseFindUniqueArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCaseFindUniqueOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCaseFindFirstArgs>(args?: SelectSubset<T, TestCaseFindFirstArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindFirstOrThrowArgs} args - Arguments to find a TestCase
     * @example
     * // Get one TestCase
     * const testCase = await prisma.testCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCases
     * const testCases = await prisma.testCase.findMany()
     * 
     * // Get first 10 TestCases
     * const testCases = await prisma.testCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCaseWithIdOnly = await prisma.testCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCaseFindManyArgs>(args?: SelectSubset<T, TestCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCase.
     * @param {TestCaseCreateArgs} args - Arguments to create a TestCase.
     * @example
     * // Create one TestCase
     * const TestCase = await prisma.testCase.create({
     *   data: {
     *     // ... data to create a TestCase
     *   }
     * })
     * 
     */
    create<T extends TestCaseCreateArgs>(args: SelectSubset<T, TestCaseCreateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCases.
     * @param {TestCaseCreateManyArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCaseCreateManyArgs>(args?: SelectSubset<T, TestCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCases and returns the data saved in the database.
     * @param {TestCaseCreateManyAndReturnArgs} args - Arguments to create many TestCases.
     * @example
     * // Create many TestCases
     * const testCase = await prisma.testCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestCase.
     * @param {TestCaseDeleteArgs} args - Arguments to delete one TestCase.
     * @example
     * // Delete one TestCase
     * const TestCase = await prisma.testCase.delete({
     *   where: {
     *     // ... filter to delete one TestCase
     *   }
     * })
     * 
     */
    delete<T extends TestCaseDeleteArgs>(args: SelectSubset<T, TestCaseDeleteArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCase.
     * @param {TestCaseUpdateArgs} args - Arguments to update one TestCase.
     * @example
     * // Update one TestCase
     * const testCase = await prisma.testCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCaseUpdateArgs>(args: SelectSubset<T, TestCaseUpdateArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCases.
     * @param {TestCaseDeleteManyArgs} args - Arguments to filter TestCases to delete.
     * @example
     * // Delete a few TestCases
     * const { count } = await prisma.testCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCaseDeleteManyArgs>(args?: SelectSubset<T, TestCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCaseUpdateManyArgs>(args: SelectSubset<T, TestCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCases and returns the data updated in the database.
     * @param {TestCaseUpdateManyAndReturnArgs} args - Arguments to update many TestCases.
     * @example
     * // Update many TestCases
     * const testCase = await prisma.testCase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestCases and only return the `id`
     * const testCaseWithIdOnly = await prisma.testCase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestCaseUpdateManyAndReturnArgs>(args: SelectSubset<T, TestCaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestCase.
     * @param {TestCaseUpsertArgs} args - Arguments to update or create a TestCase.
     * @example
     * // Update or create a TestCase
     * const testCase = await prisma.testCase.upsert({
     *   create: {
     *     // ... data to create a TestCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCase we want to update
     *   }
     * })
     */
    upsert<T extends TestCaseUpsertArgs>(args: SelectSubset<T, TestCaseUpsertArgs<ExtArgs>>): Prisma__TestCaseClient<$Result.GetResult<Prisma.$TestCasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseCountArgs} args - Arguments to filter TestCases to count.
     * @example
     * // Count the number of TestCases
     * const count = await prisma.testCase.count({
     *   where: {
     *     // ... the filter for the TestCases we want to count
     *   }
     * })
    **/
    count<T extends TestCaseCountArgs>(
      args?: Subset<T, TestCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestCaseAggregateArgs>(args: Subset<T, TestCaseAggregateArgs>): Prisma.PrismaPromise<GetTestCaseAggregateType<T>>

    /**
     * Group by TestCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCaseGroupByArgs} args - Group by arguments.
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
      T extends TestCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCaseGroupByArgs['orderBy'] }
        : { orderBy?: TestCaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCase model
   */
  readonly fields: TestCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends TestPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestPlanDefaultArgs<ExtArgs>>): Prisma__TestPlanClient<$Result.GetResult<Prisma.$TestPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestCase model
   */
  interface TestCaseFieldRefs {
    readonly id: FieldRef<"TestCase", 'Int'>
    readonly name: FieldRef<"TestCase", 'String'>
    readonly description: FieldRef<"TestCase", 'String'>
    readonly steps: FieldRef<"TestCase", 'Json'>
    readonly expected: FieldRef<"TestCase", 'String'>
    readonly createdAt: FieldRef<"TestCase", 'DateTime'>
    readonly planId: FieldRef<"TestCase", 'Int'>
    readonly createdById: FieldRef<"TestCase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TestCase findUnique
   */
  export type TestCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findUniqueOrThrow
   */
  export type TestCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase findFirst
   */
  export type TestCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findFirstOrThrow
   */
  export type TestCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCase to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCases.
     */
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase findMany
   */
  export type TestCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter, which TestCases to fetch.
     */
    where?: TestCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCases to fetch.
     */
    orderBy?: TestCaseOrderByWithRelationInput | TestCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCases.
     */
    cursor?: TestCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCases.
     */
    skip?: number
    distinct?: TestCaseScalarFieldEnum | TestCaseScalarFieldEnum[]
  }

  /**
   * TestCase create
   */
  export type TestCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCase.
     */
    data: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
  }

  /**
   * TestCase createMany
   */
  export type TestCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCase createManyAndReturn
   */
  export type TestCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * The data used to create many TestCases.
     */
    data: TestCaseCreateManyInput | TestCaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCase update
   */
  export type TestCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCase.
     */
    data: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
    /**
     * Choose, which TestCase to update.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase updateMany
   */
  export type TestCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput
    /**
     * Limit how many TestCases to update.
     */
    limit?: number
  }

  /**
   * TestCase updateManyAndReturn
   */
  export type TestCaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * The data used to update TestCases.
     */
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyInput>
    /**
     * Filter which TestCases to update
     */
    where?: TestCaseWhereInput
    /**
     * Limit how many TestCases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCase upsert
   */
  export type TestCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCase to update in case it exists.
     */
    where: TestCaseWhereUniqueInput
    /**
     * In case the TestCase found by the `where` argument doesn't exist, create a new TestCase with this data.
     */
    create: XOR<TestCaseCreateInput, TestCaseUncheckedCreateInput>
    /**
     * In case the TestCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCaseUpdateInput, TestCaseUncheckedUpdateInput>
  }

  /**
   * TestCase delete
   */
  export type TestCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
    /**
     * Filter which TestCase to delete.
     */
    where: TestCaseWhereUniqueInput
  }

  /**
   * TestCase deleteMany
   */
  export type TestCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCases to delete
     */
    where?: TestCaseWhereInput
    /**
     * Limit how many TestCases to delete.
     */
    limit?: number
  }

  /**
   * TestCase without action
   */
  export type TestCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCase
     */
    select?: TestCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCase
     */
    omit?: TestCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCaseInclude<ExtArgs> | null
  }


  /**
   * Model Flowchart
   */

  export type AggregateFlowchart = {
    _count: FlowchartCountAggregateOutputType | null
    _avg: FlowchartAvgAggregateOutputType | null
    _sum: FlowchartSumAggregateOutputType | null
    _min: FlowchartMinAggregateOutputType | null
    _max: FlowchartMaxAggregateOutputType | null
  }

  export type FlowchartAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    createdById: number | null
  }

  export type FlowchartSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    createdById: number | null
  }

  export type FlowchartMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    projectId: number | null
    createdById: number | null
  }

  export type FlowchartMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    projectId: number | null
    createdById: number | null
  }

  export type FlowchartCountAggregateOutputType = {
    id: number
    name: number
    data: number
    createdAt: number
    projectId: number
    createdById: number
    _all: number
  }


  export type FlowchartAvgAggregateInputType = {
    id?: true
    projectId?: true
    createdById?: true
  }

  export type FlowchartSumAggregateInputType = {
    id?: true
    projectId?: true
    createdById?: true
  }

  export type FlowchartMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    projectId?: true
    createdById?: true
  }

  export type FlowchartMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    projectId?: true
    createdById?: true
  }

  export type FlowchartCountAggregateInputType = {
    id?: true
    name?: true
    data?: true
    createdAt?: true
    projectId?: true
    createdById?: true
    _all?: true
  }

  export type FlowchartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flowchart to aggregate.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flowcharts
    **/
    _count?: true | FlowchartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowchartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowchartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowchartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowchartMaxAggregateInputType
  }

  export type GetFlowchartAggregateType<T extends FlowchartAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowchart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowchart[P]>
      : GetScalarType<T[P], AggregateFlowchart[P]>
  }




  export type FlowchartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowchartWhereInput
    orderBy?: FlowchartOrderByWithAggregationInput | FlowchartOrderByWithAggregationInput[]
    by: FlowchartScalarFieldEnum[] | FlowchartScalarFieldEnum
    having?: FlowchartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowchartCountAggregateInputType | true
    _avg?: FlowchartAvgAggregateInputType
    _sum?: FlowchartSumAggregateInputType
    _min?: FlowchartMinAggregateInputType
    _max?: FlowchartMaxAggregateInputType
  }

  export type FlowchartGroupByOutputType = {
    id: number
    name: string
    data: JsonValue
    createdAt: Date
    projectId: number
    createdById: number
    _count: FlowchartCountAggregateOutputType | null
    _avg: FlowchartAvgAggregateOutputType | null
    _sum: FlowchartSumAggregateOutputType | null
    _min: FlowchartMinAggregateOutputType | null
    _max: FlowchartMaxAggregateOutputType | null
  }

  type GetFlowchartGroupByPayload<T extends FlowchartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowchartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowchartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowchartGroupByOutputType[P]>
            : GetScalarType<T[P], FlowchartGroupByOutputType[P]>
        }
      >
    >


  export type FlowchartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowchart"]>

  export type FlowchartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowchart"]>

  export type FlowchartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowchart"]>

  export type FlowchartSelectScalar = {
    id?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    projectId?: boolean
    createdById?: boolean
  }

  export type FlowchartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "data" | "createdAt" | "projectId" | "createdById", ExtArgs["result"]["flowchart"]>
  export type FlowchartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlowchartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlowchartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlowchartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flowchart"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      data: Prisma.JsonValue
      createdAt: Date
      projectId: number
      createdById: number
    }, ExtArgs["result"]["flowchart"]>
    composites: {}
  }

  type FlowchartGetPayload<S extends boolean | null | undefined | FlowchartDefaultArgs> = $Result.GetResult<Prisma.$FlowchartPayload, S>

  type FlowchartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowchartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowchartCountAggregateInputType | true
    }

  export interface FlowchartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flowchart'], meta: { name: 'Flowchart' } }
    /**
     * Find zero or one Flowchart that matches the filter.
     * @param {FlowchartFindUniqueArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowchartFindUniqueArgs>(args: SelectSubset<T, FlowchartFindUniqueArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowchart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowchartFindUniqueOrThrowArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowchartFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowchartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowchart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartFindFirstArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowchartFindFirstArgs>(args?: SelectSubset<T, FlowchartFindFirstArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowchart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartFindFirstOrThrowArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowchartFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowchartFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowcharts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowcharts
     * const flowcharts = await prisma.flowchart.findMany()
     * 
     * // Get first 10 Flowcharts
     * const flowcharts = await prisma.flowchart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowchartWithIdOnly = await prisma.flowchart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowchartFindManyArgs>(args?: SelectSubset<T, FlowchartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowchart.
     * @param {FlowchartCreateArgs} args - Arguments to create a Flowchart.
     * @example
     * // Create one Flowchart
     * const Flowchart = await prisma.flowchart.create({
     *   data: {
     *     // ... data to create a Flowchart
     *   }
     * })
     * 
     */
    create<T extends FlowchartCreateArgs>(args: SelectSubset<T, FlowchartCreateArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowcharts.
     * @param {FlowchartCreateManyArgs} args - Arguments to create many Flowcharts.
     * @example
     * // Create many Flowcharts
     * const flowchart = await prisma.flowchart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowchartCreateManyArgs>(args?: SelectSubset<T, FlowchartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowcharts and returns the data saved in the database.
     * @param {FlowchartCreateManyAndReturnArgs} args - Arguments to create many Flowcharts.
     * @example
     * // Create many Flowcharts
     * const flowchart = await prisma.flowchart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowcharts and only return the `id`
     * const flowchartWithIdOnly = await prisma.flowchart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowchartCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowchartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowchart.
     * @param {FlowchartDeleteArgs} args - Arguments to delete one Flowchart.
     * @example
     * // Delete one Flowchart
     * const Flowchart = await prisma.flowchart.delete({
     *   where: {
     *     // ... filter to delete one Flowchart
     *   }
     * })
     * 
     */
    delete<T extends FlowchartDeleteArgs>(args: SelectSubset<T, FlowchartDeleteArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowchart.
     * @param {FlowchartUpdateArgs} args - Arguments to update one Flowchart.
     * @example
     * // Update one Flowchart
     * const flowchart = await prisma.flowchart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowchartUpdateArgs>(args: SelectSubset<T, FlowchartUpdateArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowcharts.
     * @param {FlowchartDeleteManyArgs} args - Arguments to filter Flowcharts to delete.
     * @example
     * // Delete a few Flowcharts
     * const { count } = await prisma.flowchart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowchartDeleteManyArgs>(args?: SelectSubset<T, FlowchartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowcharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowcharts
     * const flowchart = await prisma.flowchart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowchartUpdateManyArgs>(args: SelectSubset<T, FlowchartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowcharts and returns the data updated in the database.
     * @param {FlowchartUpdateManyAndReturnArgs} args - Arguments to update many Flowcharts.
     * @example
     * // Update many Flowcharts
     * const flowchart = await prisma.flowchart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowcharts and only return the `id`
     * const flowchartWithIdOnly = await prisma.flowchart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlowchartUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowchartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowchart.
     * @param {FlowchartUpsertArgs} args - Arguments to update or create a Flowchart.
     * @example
     * // Update or create a Flowchart
     * const flowchart = await prisma.flowchart.upsert({
     *   create: {
     *     // ... data to create a Flowchart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowchart we want to update
     *   }
     * })
     */
    upsert<T extends FlowchartUpsertArgs>(args: SelectSubset<T, FlowchartUpsertArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowcharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartCountArgs} args - Arguments to filter Flowcharts to count.
     * @example
     * // Count the number of Flowcharts
     * const count = await prisma.flowchart.count({
     *   where: {
     *     // ... the filter for the Flowcharts we want to count
     *   }
     * })
    **/
    count<T extends FlowchartCountArgs>(
      args?: Subset<T, FlowchartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowchartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowchart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowchartAggregateArgs>(args: Subset<T, FlowchartAggregateArgs>): Prisma.PrismaPromise<GetFlowchartAggregateType<T>>

    /**
     * Group by Flowchart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartGroupByArgs} args - Group by arguments.
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
      T extends FlowchartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowchartGroupByArgs['orderBy'] }
        : { orderBy?: FlowchartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowchartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowchartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flowchart model
   */
  readonly fields: FlowchartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flowchart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowchartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Flowchart model
   */
  interface FlowchartFieldRefs {
    readonly id: FieldRef<"Flowchart", 'Int'>
    readonly name: FieldRef<"Flowchart", 'String'>
    readonly data: FieldRef<"Flowchart", 'Json'>
    readonly createdAt: FieldRef<"Flowchart", 'DateTime'>
    readonly projectId: FieldRef<"Flowchart", 'Int'>
    readonly createdById: FieldRef<"Flowchart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Flowchart findUnique
   */
  export type FlowchartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart findUniqueOrThrow
   */
  export type FlowchartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart findFirst
   */
  export type FlowchartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flowcharts.
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flowcharts.
     */
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Flowchart findFirstOrThrow
   */
  export type FlowchartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flowcharts.
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flowcharts.
     */
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Flowchart findMany
   */
  export type FlowchartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowcharts to fetch.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flowcharts.
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Flowchart create
   */
  export type FlowchartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * The data needed to create a Flowchart.
     */
    data: XOR<FlowchartCreateInput, FlowchartUncheckedCreateInput>
  }

  /**
   * Flowchart createMany
   */
  export type FlowchartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flowcharts.
     */
    data: FlowchartCreateManyInput | FlowchartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flowchart createManyAndReturn
   */
  export type FlowchartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * The data used to create many Flowcharts.
     */
    data: FlowchartCreateManyInput | FlowchartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flowchart update
   */
  export type FlowchartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * The data needed to update a Flowchart.
     */
    data: XOR<FlowchartUpdateInput, FlowchartUncheckedUpdateInput>
    /**
     * Choose, which Flowchart to update.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart updateMany
   */
  export type FlowchartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flowcharts.
     */
    data: XOR<FlowchartUpdateManyMutationInput, FlowchartUncheckedUpdateManyInput>
    /**
     * Filter which Flowcharts to update
     */
    where?: FlowchartWhereInput
    /**
     * Limit how many Flowcharts to update.
     */
    limit?: number
  }

  /**
   * Flowchart updateManyAndReturn
   */
  export type FlowchartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * The data used to update Flowcharts.
     */
    data: XOR<FlowchartUpdateManyMutationInput, FlowchartUncheckedUpdateManyInput>
    /**
     * Filter which Flowcharts to update
     */
    where?: FlowchartWhereInput
    /**
     * Limit how many Flowcharts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flowchart upsert
   */
  export type FlowchartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * The filter to search for the Flowchart to update in case it exists.
     */
    where: FlowchartWhereUniqueInput
    /**
     * In case the Flowchart found by the `where` argument doesn't exist, create a new Flowchart with this data.
     */
    create: XOR<FlowchartCreateInput, FlowchartUncheckedCreateInput>
    /**
     * In case the Flowchart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowchartUpdateInput, FlowchartUncheckedUpdateInput>
  }

  /**
   * Flowchart delete
   */
  export type FlowchartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter which Flowchart to delete.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart deleteMany
   */
  export type FlowchartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flowcharts to delete
     */
    where?: FlowchartWhereInput
    /**
     * Limit how many Flowcharts to delete.
     */
    limit?: number
  }

  /**
   * Flowchart without action
   */
  export type FlowchartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    userId: 'userId',
    projectId: 'projectId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const TestPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    projectId: 'projectId',
    createdById: 'createdById'
  };

  export type TestPlanScalarFieldEnum = (typeof TestPlanScalarFieldEnum)[keyof typeof TestPlanScalarFieldEnum]


  export const TestCaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    steps: 'steps',
    expected: 'expected',
    createdAt: 'createdAt',
    planId: 'planId',
    createdById: 'createdById'
  };

  export type TestCaseScalarFieldEnum = (typeof TestCaseScalarFieldEnum)[keyof typeof TestCaseScalarFieldEnum]


  export const FlowchartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    data: 'data',
    createdAt: 'createdAt',
    projectId: 'projectId',
    createdById: 'createdById'
  };

  export type FlowchartScalarFieldEnum = (typeof FlowchartScalarFieldEnum)[keyof typeof FlowchartScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    memberships?: ProjectMemberListRelationFilter
    testPlans?: TestPlanListRelationFilter
    testCases?: TestCaseListRelationFilter
    flowcharts?: FlowchartListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    memberships?: ProjectMemberOrderByRelationAggregateInput
    testPlans?: TestPlanOrderByRelationAggregateInput
    testCases?: TestCaseOrderByRelationAggregateInput
    flowcharts?: FlowchartOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
    memberships?: ProjectMemberListRelationFilter
    testPlans?: TestPlanListRelationFilter
    testCases?: TestCaseListRelationFilter
    flowcharts?: FlowchartListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    createdById?: IntFilter<"Project"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ProjectMemberListRelationFilter
    testPlans?: TestPlanListRelationFilter
    flowcharts?: FlowchartListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    members?: ProjectMemberOrderByRelationAggregateInput
    testPlans?: TestPlanOrderByRelationAggregateInput
    flowcharts?: FlowchartOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    createdById?: IntFilter<"Project"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ProjectMemberListRelationFilter
    testPlans?: TestPlanListRelationFilter
    flowcharts?: FlowchartListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    createdById?: IntWithAggregatesFilter<"Project"> | number
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    userId?: IntFilter<"ProjectMember"> | number
    projectId?: IntFilter<"ProjectMember"> | number
    role?: StringFilter<"ProjectMember"> | string
    joinedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    userId_projectId?: ProjectMemberUserIdProjectIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    userId?: IntFilter<"ProjectMember"> | number
    projectId?: IntFilter<"ProjectMember"> | number
    role?: StringFilter<"ProjectMember"> | string
    joinedAt?: DateTimeFilter<"ProjectMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "userId_projectId">

  export type ProjectMemberOrderByWithAggregationInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _avg?: ProjectMemberAvgOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
    _sum?: ProjectMemberSumOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"ProjectMember"> | number
    projectId?: IntWithAggregatesFilter<"ProjectMember"> | number
    role?: StringWithAggregatesFilter<"ProjectMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
  }

  export type TestPlanWhereInput = {
    AND?: TestPlanWhereInput | TestPlanWhereInput[]
    OR?: TestPlanWhereInput[]
    NOT?: TestPlanWhereInput | TestPlanWhereInput[]
    id?: IntFilter<"TestPlan"> | number
    name?: StringFilter<"TestPlan"> | string
    description?: StringNullableFilter<"TestPlan"> | string | null
    createdAt?: DateTimeFilter<"TestPlan"> | Date | string
    projectId?: IntFilter<"TestPlan"> | number
    createdById?: IntFilter<"TestPlan"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    testCases?: TestCaseListRelationFilter
  }

  export type TestPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
    project?: ProjectOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    testCases?: TestCaseOrderByRelationAggregateInput
  }

  export type TestPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestPlanWhereInput | TestPlanWhereInput[]
    OR?: TestPlanWhereInput[]
    NOT?: TestPlanWhereInput | TestPlanWhereInput[]
    name?: StringFilter<"TestPlan"> | string
    description?: StringNullableFilter<"TestPlan"> | string | null
    createdAt?: DateTimeFilter<"TestPlan"> | Date | string
    projectId?: IntFilter<"TestPlan"> | number
    createdById?: IntFilter<"TestPlan"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    testCases?: TestCaseListRelationFilter
  }, "id">

  export type TestPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
    _count?: TestPlanCountOrderByAggregateInput
    _avg?: TestPlanAvgOrderByAggregateInput
    _max?: TestPlanMaxOrderByAggregateInput
    _min?: TestPlanMinOrderByAggregateInput
    _sum?: TestPlanSumOrderByAggregateInput
  }

  export type TestPlanScalarWhereWithAggregatesInput = {
    AND?: TestPlanScalarWhereWithAggregatesInput | TestPlanScalarWhereWithAggregatesInput[]
    OR?: TestPlanScalarWhereWithAggregatesInput[]
    NOT?: TestPlanScalarWhereWithAggregatesInput | TestPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestPlan"> | number
    name?: StringWithAggregatesFilter<"TestPlan"> | string
    description?: StringNullableWithAggregatesFilter<"TestPlan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestPlan"> | Date | string
    projectId?: IntWithAggregatesFilter<"TestPlan"> | number
    createdById?: IntWithAggregatesFilter<"TestPlan"> | number
  }

  export type TestCaseWhereInput = {
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    id?: IntFilter<"TestCase"> | number
    name?: StringFilter<"TestCase"> | string
    description?: StringNullableFilter<"TestCase"> | string | null
    steps?: JsonFilter<"TestCase">
    expected?: StringFilter<"TestCase"> | string
    createdAt?: DateTimeFilter<"TestCase"> | Date | string
    planId?: IntFilter<"TestCase"> | number
    createdById?: IntFilter<"TestCase"> | number
    plan?: XOR<TestPlanScalarRelationFilter, TestPlanWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestCaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    steps?: SortOrder
    expected?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    createdById?: SortOrder
    plan?: TestPlanOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type TestCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestCaseWhereInput | TestCaseWhereInput[]
    OR?: TestCaseWhereInput[]
    NOT?: TestCaseWhereInput | TestCaseWhereInput[]
    name?: StringFilter<"TestCase"> | string
    description?: StringNullableFilter<"TestCase"> | string | null
    steps?: JsonFilter<"TestCase">
    expected?: StringFilter<"TestCase"> | string
    createdAt?: DateTimeFilter<"TestCase"> | Date | string
    planId?: IntFilter<"TestCase"> | number
    createdById?: IntFilter<"TestCase"> | number
    plan?: XOR<TestPlanScalarRelationFilter, TestPlanWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestCaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    steps?: SortOrder
    expected?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    createdById?: SortOrder
    _count?: TestCaseCountOrderByAggregateInput
    _avg?: TestCaseAvgOrderByAggregateInput
    _max?: TestCaseMaxOrderByAggregateInput
    _min?: TestCaseMinOrderByAggregateInput
    _sum?: TestCaseSumOrderByAggregateInput
  }

  export type TestCaseScalarWhereWithAggregatesInput = {
    AND?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    OR?: TestCaseScalarWhereWithAggregatesInput[]
    NOT?: TestCaseScalarWhereWithAggregatesInput | TestCaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestCase"> | number
    name?: StringWithAggregatesFilter<"TestCase"> | string
    description?: StringNullableWithAggregatesFilter<"TestCase"> | string | null
    steps?: JsonWithAggregatesFilter<"TestCase">
    expected?: StringWithAggregatesFilter<"TestCase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TestCase"> | Date | string
    planId?: IntWithAggregatesFilter<"TestCase"> | number
    createdById?: IntWithAggregatesFilter<"TestCase"> | number
  }

  export type FlowchartWhereInput = {
    AND?: FlowchartWhereInput | FlowchartWhereInput[]
    OR?: FlowchartWhereInput[]
    NOT?: FlowchartWhereInput | FlowchartWhereInput[]
    id?: IntFilter<"Flowchart"> | number
    name?: StringFilter<"Flowchart"> | string
    data?: JsonFilter<"Flowchart">
    createdAt?: DateTimeFilter<"Flowchart"> | Date | string
    projectId?: IntFilter<"Flowchart"> | number
    createdById?: IntFilter<"Flowchart"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlowchartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
    project?: ProjectOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type FlowchartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FlowchartWhereInput | FlowchartWhereInput[]
    OR?: FlowchartWhereInput[]
    NOT?: FlowchartWhereInput | FlowchartWhereInput[]
    name?: StringFilter<"Flowchart"> | string
    data?: JsonFilter<"Flowchart">
    createdAt?: DateTimeFilter<"Flowchart"> | Date | string
    projectId?: IntFilter<"Flowchart"> | number
    createdById?: IntFilter<"Flowchart"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FlowchartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
    _count?: FlowchartCountOrderByAggregateInput
    _avg?: FlowchartAvgOrderByAggregateInput
    _max?: FlowchartMaxOrderByAggregateInput
    _min?: FlowchartMinOrderByAggregateInput
    _sum?: FlowchartSumOrderByAggregateInput
  }

  export type FlowchartScalarWhereWithAggregatesInput = {
    AND?: FlowchartScalarWhereWithAggregatesInput | FlowchartScalarWhereWithAggregatesInput[]
    OR?: FlowchartScalarWhereWithAggregatesInput[]
    NOT?: FlowchartScalarWhereWithAggregatesInput | FlowchartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Flowchart"> | number
    name?: StringWithAggregatesFilter<"Flowchart"> | string
    data?: JsonWithAggregatesFilter<"Flowchart">
    createdAt?: DateTimeWithAggregatesFilter<"Flowchart"> | Date | string
    projectId?: IntWithAggregatesFilter<"Flowchart"> | number
    createdById?: IntWithAggregatesFilter<"Flowchart"> | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput
    testPlans?: TestPlanCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    name: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProjectsInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    testPlans?: TestPlanCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdById: number
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProjectsNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    testPlans?: TestPlanUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdById: number
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberCreateInput = {
    role: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    userId: number
    projectId: number
    role: string
    joinedAt?: Date | string
  }

  export type ProjectMemberUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyInput = {
    userId: number
    projectId: number
    role: string
    joinedAt?: Date | string
  }

  export type ProjectMemberUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestPlanCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTestPlansInput
    createdBy: UserCreateNestedOneWithoutTestPlansInput
    testCases?: TestCaseCreateNestedManyWithoutPlanInput
  }

  export type TestPlanUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    projectId: number
    createdById: number
    testCases?: TestCaseUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TestPlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTestPlansNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTestPlansNestedInput
    testCases?: TestCaseUpdateManyWithoutPlanNestedInput
  }

  export type TestPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    testCases?: TestCaseUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TestPlanCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    projectId: number
    createdById: number
  }

  export type TestPlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseCreateInput = {
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    plan: TestPlanCreateNestedOneWithoutTestCasesInput
    createdBy: UserCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    planId: number
    createdById: number
  }

  export type TestCaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: TestPlanUpdateOneRequiredWithoutTestCasesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    planId: number
    createdById: number
  }

  export type TestCaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type FlowchartCreateInput = {
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutFlowchartsInput
    createdBy: UserCreateNestedOneWithoutFlowchartsInput
  }

  export type FlowchartUncheckedCreateInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    projectId: number
    createdById: number
  }

  export type FlowchartUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFlowchartsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutFlowchartsNestedInput
  }

  export type FlowchartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type FlowchartCreateManyInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    projectId: number
    createdById: number
  }

  export type FlowchartUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowchartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type TestPlanListRelationFilter = {
    every?: TestPlanWhereInput
    some?: TestPlanWhereInput
    none?: TestPlanWhereInput
  }

  export type TestCaseListRelationFilter = {
    every?: TestCaseWhereInput
    some?: TestCaseWhereInput
    none?: TestCaseWhereInput
  }

  export type FlowchartListRelationFilter = {
    every?: FlowchartWhereInput
    some?: FlowchartWhereInput
    none?: FlowchartWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowchartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectMemberUserIdProjectIdCompoundUniqueInput = {
    userId: number
    projectId: number
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ProjectMemberAvgOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ProjectMemberSumOrderByAggregateInput = {
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type TestPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type TestPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type TestPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type TestPlanSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TestPlanScalarRelationFilter = {
    is?: TestPlanWhereInput
    isNot?: TestPlanWhereInput
  }

  export type TestCaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    steps?: SortOrder
    expected?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    createdById?: SortOrder
  }

  export type TestCaseAvgOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdById?: SortOrder
  }

  export type TestCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expected?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    createdById?: SortOrder
  }

  export type TestCaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expected?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    createdById?: SortOrder
  }

  export type TestCaseSumOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    createdById?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FlowchartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type FlowchartAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type FlowchartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type FlowchartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type FlowchartSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    createdById?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TestPlanCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TestPlanCreateWithoutCreatedByInput, TestPlanUncheckedCreateWithoutCreatedByInput> | TestPlanCreateWithoutCreatedByInput[] | TestPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutCreatedByInput | TestPlanCreateOrConnectWithoutCreatedByInput[]
    createMany?: TestPlanCreateManyCreatedByInputEnvelope
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
  }

  export type TestCaseCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TestCaseCreateWithoutCreatedByInput, TestCaseUncheckedCreateWithoutCreatedByInput> | TestCaseCreateWithoutCreatedByInput[] | TestCaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCreatedByInput | TestCaseCreateOrConnectWithoutCreatedByInput[]
    createMany?: TestCaseCreateManyCreatedByInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type FlowchartCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FlowchartCreateWithoutCreatedByInput, FlowchartUncheckedCreateWithoutCreatedByInput> | FlowchartCreateWithoutCreatedByInput[] | FlowchartUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutCreatedByInput | FlowchartCreateOrConnectWithoutCreatedByInput[]
    createMany?: FlowchartCreateManyCreatedByInputEnvelope
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TestPlanUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TestPlanCreateWithoutCreatedByInput, TestPlanUncheckedCreateWithoutCreatedByInput> | TestPlanCreateWithoutCreatedByInput[] | TestPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutCreatedByInput | TestPlanCreateOrConnectWithoutCreatedByInput[]
    createMany?: TestPlanCreateManyCreatedByInputEnvelope
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
  }

  export type TestCaseUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TestCaseCreateWithoutCreatedByInput, TestCaseUncheckedCreateWithoutCreatedByInput> | TestCaseCreateWithoutCreatedByInput[] | TestCaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCreatedByInput | TestCaseCreateOrConnectWithoutCreatedByInput[]
    createMany?: TestCaseCreateManyCreatedByInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type FlowchartUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FlowchartCreateWithoutCreatedByInput, FlowchartUncheckedCreateWithoutCreatedByInput> | FlowchartCreateWithoutCreatedByInput[] | FlowchartUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutCreatedByInput | FlowchartCreateOrConnectWithoutCreatedByInput[]
    createMany?: FlowchartCreateManyCreatedByInputEnvelope
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatedByInput | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatedByInput | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatedByInput | ProjectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TestPlanUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TestPlanCreateWithoutCreatedByInput, TestPlanUncheckedCreateWithoutCreatedByInput> | TestPlanCreateWithoutCreatedByInput[] | TestPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutCreatedByInput | TestPlanCreateOrConnectWithoutCreatedByInput[]
    upsert?: TestPlanUpsertWithWhereUniqueWithoutCreatedByInput | TestPlanUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TestPlanCreateManyCreatedByInputEnvelope
    set?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    disconnect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    delete?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    update?: TestPlanUpdateWithWhereUniqueWithoutCreatedByInput | TestPlanUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TestPlanUpdateManyWithWhereWithoutCreatedByInput | TestPlanUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TestPlanScalarWhereInput | TestPlanScalarWhereInput[]
  }

  export type TestCaseUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TestCaseCreateWithoutCreatedByInput, TestCaseUncheckedCreateWithoutCreatedByInput> | TestCaseCreateWithoutCreatedByInput[] | TestCaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCreatedByInput | TestCaseCreateOrConnectWithoutCreatedByInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutCreatedByInput | TestCaseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TestCaseCreateManyCreatedByInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutCreatedByInput | TestCaseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutCreatedByInput | TestCaseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type FlowchartUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FlowchartCreateWithoutCreatedByInput, FlowchartUncheckedCreateWithoutCreatedByInput> | FlowchartCreateWithoutCreatedByInput[] | FlowchartUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutCreatedByInput | FlowchartCreateOrConnectWithoutCreatedByInput[]
    upsert?: FlowchartUpsertWithWhereUniqueWithoutCreatedByInput | FlowchartUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FlowchartCreateManyCreatedByInputEnvelope
    set?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    disconnect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    delete?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    update?: FlowchartUpdateWithWhereUniqueWithoutCreatedByInput | FlowchartUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FlowchartUpdateManyWithWhereWithoutCreatedByInput | FlowchartUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput> | ProjectCreateWithoutCreatedByInput[] | ProjectUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatedByInput | ProjectCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatedByInput | ProjectUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProjectCreateManyCreatedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatedByInput | ProjectUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatedByInput | ProjectUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TestPlanUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TestPlanCreateWithoutCreatedByInput, TestPlanUncheckedCreateWithoutCreatedByInput> | TestPlanCreateWithoutCreatedByInput[] | TestPlanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutCreatedByInput | TestPlanCreateOrConnectWithoutCreatedByInput[]
    upsert?: TestPlanUpsertWithWhereUniqueWithoutCreatedByInput | TestPlanUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TestPlanCreateManyCreatedByInputEnvelope
    set?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    disconnect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    delete?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    update?: TestPlanUpdateWithWhereUniqueWithoutCreatedByInput | TestPlanUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TestPlanUpdateManyWithWhereWithoutCreatedByInput | TestPlanUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TestPlanScalarWhereInput | TestPlanScalarWhereInput[]
  }

  export type TestCaseUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TestCaseCreateWithoutCreatedByInput, TestCaseUncheckedCreateWithoutCreatedByInput> | TestCaseCreateWithoutCreatedByInput[] | TestCaseUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutCreatedByInput | TestCaseCreateOrConnectWithoutCreatedByInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutCreatedByInput | TestCaseUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TestCaseCreateManyCreatedByInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutCreatedByInput | TestCaseUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutCreatedByInput | TestCaseUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type FlowchartUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FlowchartCreateWithoutCreatedByInput, FlowchartUncheckedCreateWithoutCreatedByInput> | FlowchartCreateWithoutCreatedByInput[] | FlowchartUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutCreatedByInput | FlowchartCreateOrConnectWithoutCreatedByInput[]
    upsert?: FlowchartUpsertWithWhereUniqueWithoutCreatedByInput | FlowchartUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FlowchartCreateManyCreatedByInputEnvelope
    set?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    disconnect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    delete?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    update?: FlowchartUpdateWithWhereUniqueWithoutCreatedByInput | FlowchartUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FlowchartUpdateManyWithWhereWithoutCreatedByInput | FlowchartUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TestPlanCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestPlanCreateWithoutProjectInput, TestPlanUncheckedCreateWithoutProjectInput> | TestPlanCreateWithoutProjectInput[] | TestPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutProjectInput | TestPlanCreateOrConnectWithoutProjectInput[]
    createMany?: TestPlanCreateManyProjectInputEnvelope
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
  }

  export type FlowchartCreateNestedManyWithoutProjectInput = {
    create?: XOR<FlowchartCreateWithoutProjectInput, FlowchartUncheckedCreateWithoutProjectInput> | FlowchartCreateWithoutProjectInput[] | FlowchartUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutProjectInput | FlowchartCreateOrConnectWithoutProjectInput[]
    createMany?: FlowchartCreateManyProjectInputEnvelope
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TestPlanUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TestPlanCreateWithoutProjectInput, TestPlanUncheckedCreateWithoutProjectInput> | TestPlanCreateWithoutProjectInput[] | TestPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutProjectInput | TestPlanCreateOrConnectWithoutProjectInput[]
    createMany?: TestPlanCreateManyProjectInputEnvelope
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
  }

  export type FlowchartUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FlowchartCreateWithoutProjectInput, FlowchartUncheckedCreateWithoutProjectInput> | FlowchartCreateWithoutProjectInput[] | FlowchartUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutProjectInput | FlowchartCreateOrConnectWithoutProjectInput[]
    createMany?: FlowchartCreateManyProjectInputEnvelope
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TestPlanUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestPlanCreateWithoutProjectInput, TestPlanUncheckedCreateWithoutProjectInput> | TestPlanCreateWithoutProjectInput[] | TestPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutProjectInput | TestPlanCreateOrConnectWithoutProjectInput[]
    upsert?: TestPlanUpsertWithWhereUniqueWithoutProjectInput | TestPlanUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestPlanCreateManyProjectInputEnvelope
    set?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    disconnect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    delete?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    update?: TestPlanUpdateWithWhereUniqueWithoutProjectInput | TestPlanUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestPlanUpdateManyWithWhereWithoutProjectInput | TestPlanUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestPlanScalarWhereInput | TestPlanScalarWhereInput[]
  }

  export type FlowchartUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FlowchartCreateWithoutProjectInput, FlowchartUncheckedCreateWithoutProjectInput> | FlowchartCreateWithoutProjectInput[] | FlowchartUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutProjectInput | FlowchartCreateOrConnectWithoutProjectInput[]
    upsert?: FlowchartUpsertWithWhereUniqueWithoutProjectInput | FlowchartUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FlowchartCreateManyProjectInputEnvelope
    set?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    disconnect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    delete?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    update?: FlowchartUpdateWithWhereUniqueWithoutProjectInput | FlowchartUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FlowchartUpdateManyWithWhereWithoutProjectInput | FlowchartUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TestPlanUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TestPlanCreateWithoutProjectInput, TestPlanUncheckedCreateWithoutProjectInput> | TestPlanCreateWithoutProjectInput[] | TestPlanUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TestPlanCreateOrConnectWithoutProjectInput | TestPlanCreateOrConnectWithoutProjectInput[]
    upsert?: TestPlanUpsertWithWhereUniqueWithoutProjectInput | TestPlanUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TestPlanCreateManyProjectInputEnvelope
    set?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    disconnect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    delete?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    connect?: TestPlanWhereUniqueInput | TestPlanWhereUniqueInput[]
    update?: TestPlanUpdateWithWhereUniqueWithoutProjectInput | TestPlanUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TestPlanUpdateManyWithWhereWithoutProjectInput | TestPlanUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TestPlanScalarWhereInput | TestPlanScalarWhereInput[]
  }

  export type FlowchartUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FlowchartCreateWithoutProjectInput, FlowchartUncheckedCreateWithoutProjectInput> | FlowchartCreateWithoutProjectInput[] | FlowchartUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutProjectInput | FlowchartCreateOrConnectWithoutProjectInput[]
    upsert?: FlowchartUpsertWithWhereUniqueWithoutProjectInput | FlowchartUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FlowchartCreateManyProjectInputEnvelope
    set?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    disconnect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    delete?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    update?: FlowchartUpdateWithWhereUniqueWithoutProjectInput | FlowchartUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FlowchartUpdateManyWithWhereWithoutProjectInput | FlowchartUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectCreateNestedOneWithoutTestPlansInput = {
    create?: XOR<ProjectCreateWithoutTestPlansInput, ProjectUncheckedCreateWithoutTestPlansInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestPlansInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTestPlansInput = {
    create?: XOR<UserCreateWithoutTestPlansInput, UserUncheckedCreateWithoutTestPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestPlansInput
    connect?: UserWhereUniqueInput
  }

  export type TestCaseCreateNestedManyWithoutPlanInput = {
    create?: XOR<TestCaseCreateWithoutPlanInput, TestCaseUncheckedCreateWithoutPlanInput> | TestCaseCreateWithoutPlanInput[] | TestCaseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutPlanInput | TestCaseCreateOrConnectWithoutPlanInput[]
    createMany?: TestCaseCreateManyPlanInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type TestCaseUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<TestCaseCreateWithoutPlanInput, TestCaseUncheckedCreateWithoutPlanInput> | TestCaseCreateWithoutPlanInput[] | TestCaseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutPlanInput | TestCaseCreateOrConnectWithoutPlanInput[]
    createMany?: TestCaseCreateManyPlanInputEnvelope
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutTestPlansNestedInput = {
    create?: XOR<ProjectCreateWithoutTestPlansInput, ProjectUncheckedCreateWithoutTestPlansInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTestPlansInput
    upsert?: ProjectUpsertWithoutTestPlansInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTestPlansInput, ProjectUpdateWithoutTestPlansInput>, ProjectUncheckedUpdateWithoutTestPlansInput>
  }

  export type UserUpdateOneRequiredWithoutTestPlansNestedInput = {
    create?: XOR<UserCreateWithoutTestPlansInput, UserUncheckedCreateWithoutTestPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestPlansInput
    upsert?: UserUpsertWithoutTestPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestPlansInput, UserUpdateWithoutTestPlansInput>, UserUncheckedUpdateWithoutTestPlansInput>
  }

  export type TestCaseUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TestCaseCreateWithoutPlanInput, TestCaseUncheckedCreateWithoutPlanInput> | TestCaseCreateWithoutPlanInput[] | TestCaseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutPlanInput | TestCaseCreateOrConnectWithoutPlanInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutPlanInput | TestCaseUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TestCaseCreateManyPlanInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutPlanInput | TestCaseUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutPlanInput | TestCaseUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type TestCaseUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<TestCaseCreateWithoutPlanInput, TestCaseUncheckedCreateWithoutPlanInput> | TestCaseCreateWithoutPlanInput[] | TestCaseUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: TestCaseCreateOrConnectWithoutPlanInput | TestCaseCreateOrConnectWithoutPlanInput[]
    upsert?: TestCaseUpsertWithWhereUniqueWithoutPlanInput | TestCaseUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: TestCaseCreateManyPlanInputEnvelope
    set?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    disconnect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    delete?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    connect?: TestCaseWhereUniqueInput | TestCaseWhereUniqueInput[]
    update?: TestCaseUpdateWithWhereUniqueWithoutPlanInput | TestCaseUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: TestCaseUpdateManyWithWhereWithoutPlanInput | TestCaseUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
  }

  export type TestPlanCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<TestPlanCreateWithoutTestCasesInput, TestPlanUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: TestPlanCreateOrConnectWithoutTestCasesInput
    connect?: TestPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestCasesInput
    connect?: UserWhereUniqueInput
  }

  export type TestPlanUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<TestPlanCreateWithoutTestCasesInput, TestPlanUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: TestPlanCreateOrConnectWithoutTestCasesInput
    upsert?: TestPlanUpsertWithoutTestCasesInput
    connect?: TestPlanWhereUniqueInput
    update?: XOR<XOR<TestPlanUpdateToOneWithWhereWithoutTestCasesInput, TestPlanUpdateWithoutTestCasesInput>, TestPlanUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestCasesInput
    upsert?: UserUpsertWithoutTestCasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestCasesInput, UserUpdateWithoutTestCasesInput>, UserUncheckedUpdateWithoutTestCasesInput>
  }

  export type ProjectCreateNestedOneWithoutFlowchartsInput = {
    create?: XOR<ProjectCreateWithoutFlowchartsInput, ProjectUncheckedCreateWithoutFlowchartsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFlowchartsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlowchartsInput = {
    create?: XOR<UserCreateWithoutFlowchartsInput, UserUncheckedCreateWithoutFlowchartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowchartsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFlowchartsNestedInput = {
    create?: XOR<ProjectCreateWithoutFlowchartsInput, ProjectUncheckedCreateWithoutFlowchartsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFlowchartsInput
    upsert?: ProjectUpsertWithoutFlowchartsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFlowchartsInput, ProjectUpdateWithoutFlowchartsInput>, ProjectUncheckedUpdateWithoutFlowchartsInput>
  }

  export type UserUpdateOneRequiredWithoutFlowchartsNestedInput = {
    create?: XOR<UserCreateWithoutFlowchartsInput, UserUncheckedCreateWithoutFlowchartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowchartsInput
    upsert?: UserUpsertWithoutFlowchartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlowchartsInput, UserUpdateWithoutFlowchartsInput>, UserUncheckedUpdateWithoutFlowchartsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    testPlans?: TestPlanCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectCreateManyCreatedByInputEnvelope = {
    data: ProjectCreateManyCreatedByInput | ProjectCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutUserInput = {
    role: string
    joinedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    projectId: number
    role: string
    joinedAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TestPlanCreateWithoutCreatedByInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTestPlansInput
    testCases?: TestCaseCreateNestedManyWithoutPlanInput
  }

  export type TestPlanUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    projectId: number
    testCases?: TestCaseUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TestPlanCreateOrConnectWithoutCreatedByInput = {
    where: TestPlanWhereUniqueInput
    create: XOR<TestPlanCreateWithoutCreatedByInput, TestPlanUncheckedCreateWithoutCreatedByInput>
  }

  export type TestPlanCreateManyCreatedByInputEnvelope = {
    data: TestPlanCreateManyCreatedByInput | TestPlanCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TestCaseCreateWithoutCreatedByInput = {
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    plan: TestPlanCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    planId: number
  }

  export type TestCaseCreateOrConnectWithoutCreatedByInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutCreatedByInput, TestCaseUncheckedCreateWithoutCreatedByInput>
  }

  export type TestCaseCreateManyCreatedByInputEnvelope = {
    data: TestCaseCreateManyCreatedByInput | TestCaseCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type FlowchartCreateWithoutCreatedByInput = {
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutFlowchartsInput
  }

  export type FlowchartUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    projectId: number
  }

  export type FlowchartCreateOrConnectWithoutCreatedByInput = {
    where: FlowchartWhereUniqueInput
    create: XOR<FlowchartCreateWithoutCreatedByInput, FlowchartUncheckedCreateWithoutCreatedByInput>
  }

  export type FlowchartCreateManyCreatedByInputEnvelope = {
    data: FlowchartCreateManyCreatedByInput | FlowchartCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatedByInput, ProjectUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProjectCreateWithoutCreatedByInput, ProjectUncheckedCreateWithoutCreatedByInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatedByInput, ProjectUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    createdById?: IntFilter<"Project"> | number
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    userId?: IntFilter<"ProjectMember"> | number
    projectId?: IntFilter<"ProjectMember"> | number
    role?: StringFilter<"ProjectMember"> | string
    joinedAt?: DateTimeFilter<"ProjectMember"> | Date | string
  }

  export type TestPlanUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TestPlanWhereUniqueInput
    update: XOR<TestPlanUpdateWithoutCreatedByInput, TestPlanUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TestPlanCreateWithoutCreatedByInput, TestPlanUncheckedCreateWithoutCreatedByInput>
  }

  export type TestPlanUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TestPlanWhereUniqueInput
    data: XOR<TestPlanUpdateWithoutCreatedByInput, TestPlanUncheckedUpdateWithoutCreatedByInput>
  }

  export type TestPlanUpdateManyWithWhereWithoutCreatedByInput = {
    where: TestPlanScalarWhereInput
    data: XOR<TestPlanUpdateManyMutationInput, TestPlanUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TestPlanScalarWhereInput = {
    AND?: TestPlanScalarWhereInput | TestPlanScalarWhereInput[]
    OR?: TestPlanScalarWhereInput[]
    NOT?: TestPlanScalarWhereInput | TestPlanScalarWhereInput[]
    id?: IntFilter<"TestPlan"> | number
    name?: StringFilter<"TestPlan"> | string
    description?: StringNullableFilter<"TestPlan"> | string | null
    createdAt?: DateTimeFilter<"TestPlan"> | Date | string
    projectId?: IntFilter<"TestPlan"> | number
    createdById?: IntFilter<"TestPlan"> | number
  }

  export type TestCaseUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutCreatedByInput, TestCaseUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TestCaseCreateWithoutCreatedByInput, TestCaseUncheckedCreateWithoutCreatedByInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutCreatedByInput, TestCaseUncheckedUpdateWithoutCreatedByInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutCreatedByInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TestCaseScalarWhereInput = {
    AND?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    OR?: TestCaseScalarWhereInput[]
    NOT?: TestCaseScalarWhereInput | TestCaseScalarWhereInput[]
    id?: IntFilter<"TestCase"> | number
    name?: StringFilter<"TestCase"> | string
    description?: StringNullableFilter<"TestCase"> | string | null
    steps?: JsonFilter<"TestCase">
    expected?: StringFilter<"TestCase"> | string
    createdAt?: DateTimeFilter<"TestCase"> | Date | string
    planId?: IntFilter<"TestCase"> | number
    createdById?: IntFilter<"TestCase"> | number
  }

  export type FlowchartUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FlowchartWhereUniqueInput
    update: XOR<FlowchartUpdateWithoutCreatedByInput, FlowchartUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FlowchartCreateWithoutCreatedByInput, FlowchartUncheckedCreateWithoutCreatedByInput>
  }

  export type FlowchartUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FlowchartWhereUniqueInput
    data: XOR<FlowchartUpdateWithoutCreatedByInput, FlowchartUncheckedUpdateWithoutCreatedByInput>
  }

  export type FlowchartUpdateManyWithWhereWithoutCreatedByInput = {
    where: FlowchartScalarWhereInput
    data: XOR<FlowchartUpdateManyMutationInput, FlowchartUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FlowchartScalarWhereInput = {
    AND?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
    OR?: FlowchartScalarWhereInput[]
    NOT?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
    id?: IntFilter<"Flowchart"> | number
    name?: StringFilter<"Flowchart"> | string
    data?: JsonFilter<"Flowchart">
    createdAt?: DateTimeFilter<"Flowchart"> | Date | string
    projectId?: IntFilter<"Flowchart"> | number
    createdById?: IntFilter<"Flowchart"> | number
  }

  export type UserCreateWithoutProjectsInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput
    testPlans?: TestPlanCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    role: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    userId: number
    role: string
    joinedAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TestPlanCreateWithoutProjectInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTestPlansInput
    testCases?: TestCaseCreateNestedManyWithoutPlanInput
  }

  export type TestPlanUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    createdById: number
    testCases?: TestCaseUncheckedCreateNestedManyWithoutPlanInput
  }

  export type TestPlanCreateOrConnectWithoutProjectInput = {
    where: TestPlanWhereUniqueInput
    create: XOR<TestPlanCreateWithoutProjectInput, TestPlanUncheckedCreateWithoutProjectInput>
  }

  export type TestPlanCreateManyProjectInputEnvelope = {
    data: TestPlanCreateManyProjectInput | TestPlanCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type FlowchartCreateWithoutProjectInput = {
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutFlowchartsInput
  }

  export type FlowchartUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdById: number
  }

  export type FlowchartCreateOrConnectWithoutProjectInput = {
    where: FlowchartWhereUniqueInput
    create: XOR<FlowchartCreateWithoutProjectInput, FlowchartUncheckedCreateWithoutProjectInput>
  }

  export type FlowchartCreateManyProjectInputEnvelope = {
    data: FlowchartCreateManyProjectInput | FlowchartCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type TestPlanUpsertWithWhereUniqueWithoutProjectInput = {
    where: TestPlanWhereUniqueInput
    update: XOR<TestPlanUpdateWithoutProjectInput, TestPlanUncheckedUpdateWithoutProjectInput>
    create: XOR<TestPlanCreateWithoutProjectInput, TestPlanUncheckedCreateWithoutProjectInput>
  }

  export type TestPlanUpdateWithWhereUniqueWithoutProjectInput = {
    where: TestPlanWhereUniqueInput
    data: XOR<TestPlanUpdateWithoutProjectInput, TestPlanUncheckedUpdateWithoutProjectInput>
  }

  export type TestPlanUpdateManyWithWhereWithoutProjectInput = {
    where: TestPlanScalarWhereInput
    data: XOR<TestPlanUpdateManyMutationInput, TestPlanUncheckedUpdateManyWithoutProjectInput>
  }

  export type FlowchartUpsertWithWhereUniqueWithoutProjectInput = {
    where: FlowchartWhereUniqueInput
    update: XOR<FlowchartUpdateWithoutProjectInput, FlowchartUncheckedUpdateWithoutProjectInput>
    create: XOR<FlowchartCreateWithoutProjectInput, FlowchartUncheckedCreateWithoutProjectInput>
  }

  export type FlowchartUpdateWithWhereUniqueWithoutProjectInput = {
    where: FlowchartWhereUniqueInput
    data: XOR<FlowchartUpdateWithoutProjectInput, FlowchartUncheckedUpdateWithoutProjectInput>
  }

  export type FlowchartUpdateManyWithWhereWithoutProjectInput = {
    where: FlowchartScalarWhereInput
    data: XOR<FlowchartUpdateManyMutationInput, FlowchartUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    testPlans?: TestPlanCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type ProjectCreateWithoutMembersInput = {
    name: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProjectsInput
    testPlans?: TestPlanCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdById: number
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    testPlans?: TestPlanUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProjectsNestedInput
    testPlans?: TestPlanUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    testPlans?: TestPlanUncheckedUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutTestPlansInput = {
    name: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProjectsInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTestPlansInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdById: number
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTestPlansInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTestPlansInput, ProjectUncheckedCreateWithoutTestPlansInput>
  }

  export type UserCreateWithoutTestPlansInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput
    testCases?: TestCaseCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTestPlansInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTestPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestPlansInput, UserUncheckedCreateWithoutTestPlansInput>
  }

  export type TestCaseCreateWithoutPlanInput = {
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTestCasesInput
  }

  export type TestCaseUncheckedCreateWithoutPlanInput = {
    id?: number
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    createdById: number
  }

  export type TestCaseCreateOrConnectWithoutPlanInput = {
    where: TestCaseWhereUniqueInput
    create: XOR<TestCaseCreateWithoutPlanInput, TestCaseUncheckedCreateWithoutPlanInput>
  }

  export type TestCaseCreateManyPlanInputEnvelope = {
    data: TestCaseCreateManyPlanInput | TestCaseCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutTestPlansInput = {
    update: XOR<ProjectUpdateWithoutTestPlansInput, ProjectUncheckedUpdateWithoutTestPlansInput>
    create: XOR<ProjectCreateWithoutTestPlansInput, ProjectUncheckedCreateWithoutTestPlansInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTestPlansInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTestPlansInput, ProjectUncheckedUpdateWithoutTestPlansInput>
  }

  export type ProjectUpdateWithoutTestPlansInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProjectsNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTestPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutTestPlansInput = {
    update: XOR<UserUpdateWithoutTestPlansInput, UserUncheckedUpdateWithoutTestPlansInput>
    create: XOR<UserCreateWithoutTestPlansInput, UserUncheckedCreateWithoutTestPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestPlansInput, UserUncheckedUpdateWithoutTestPlansInput>
  }

  export type UserUpdateWithoutTestPlansInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    testCases?: TestCaseUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTestPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TestCaseUpsertWithWhereUniqueWithoutPlanInput = {
    where: TestCaseWhereUniqueInput
    update: XOR<TestCaseUpdateWithoutPlanInput, TestCaseUncheckedUpdateWithoutPlanInput>
    create: XOR<TestCaseCreateWithoutPlanInput, TestCaseUncheckedCreateWithoutPlanInput>
  }

  export type TestCaseUpdateWithWhereUniqueWithoutPlanInput = {
    where: TestCaseWhereUniqueInput
    data: XOR<TestCaseUpdateWithoutPlanInput, TestCaseUncheckedUpdateWithoutPlanInput>
  }

  export type TestCaseUpdateManyWithWhereWithoutPlanInput = {
    where: TestCaseScalarWhereInput
    data: XOR<TestCaseUpdateManyMutationInput, TestCaseUncheckedUpdateManyWithoutPlanInput>
  }

  export type TestPlanCreateWithoutTestCasesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutTestPlansInput
    createdBy: UserCreateNestedOneWithoutTestPlansInput
  }

  export type TestPlanUncheckedCreateWithoutTestCasesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    projectId: number
    createdById: number
  }

  export type TestPlanCreateOrConnectWithoutTestCasesInput = {
    where: TestPlanWhereUniqueInput
    create: XOR<TestPlanCreateWithoutTestCasesInput, TestPlanUncheckedCreateWithoutTestCasesInput>
  }

  export type UserCreateWithoutTestCasesInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput
    testPlans?: TestPlanCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutTestCasesInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutCreatedByInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutTestCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
  }

  export type TestPlanUpsertWithoutTestCasesInput = {
    update: XOR<TestPlanUpdateWithoutTestCasesInput, TestPlanUncheckedUpdateWithoutTestCasesInput>
    create: XOR<TestPlanCreateWithoutTestCasesInput, TestPlanUncheckedCreateWithoutTestCasesInput>
    where?: TestPlanWhereInput
  }

  export type TestPlanUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: TestPlanWhereInput
    data: XOR<TestPlanUpdateWithoutTestCasesInput, TestPlanUncheckedUpdateWithoutTestCasesInput>
  }

  export type TestPlanUpdateWithoutTestCasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTestPlansNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTestPlansNestedInput
  }

  export type TestPlanUncheckedUpdateWithoutTestCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutTestCasesInput = {
    update: XOR<UserUpdateWithoutTestCasesInput, UserUncheckedUpdateWithoutTestCasesInput>
    create: XOR<UserCreateWithoutTestCasesInput, UserUncheckedCreateWithoutTestCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestCasesInput, UserUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserUpdateWithoutTestCasesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTestCasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutCreatedByNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProjectCreateWithoutFlowchartsInput = {
    name: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutProjectsInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    testPlans?: TestPlanCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFlowchartsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdById: number
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFlowchartsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFlowchartsInput, ProjectUncheckedCreateWithoutFlowchartsInput>
  }

  export type UserCreateWithoutFlowchartsInput = {
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput
    testPlans?: TestPlanCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutFlowchartsInput = {
    id?: number
    username: string
    password: string
    role: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutCreatedByInput
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    testPlans?: TestPlanUncheckedCreateNestedManyWithoutCreatedByInput
    testCases?: TestCaseUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutFlowchartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlowchartsInput, UserUncheckedCreateWithoutFlowchartsInput>
  }

  export type ProjectUpsertWithoutFlowchartsInput = {
    update: XOR<ProjectUpdateWithoutFlowchartsInput, ProjectUncheckedUpdateWithoutFlowchartsInput>
    create: XOR<ProjectCreateWithoutFlowchartsInput, ProjectUncheckedCreateWithoutFlowchartsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFlowchartsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFlowchartsInput, ProjectUncheckedUpdateWithoutFlowchartsInput>
  }

  export type ProjectUpdateWithoutFlowchartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutProjectsNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    testPlans?: TestPlanUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFlowchartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutFlowchartsInput = {
    update: XOR<UserUpdateWithoutFlowchartsInput, UserUncheckedUpdateWithoutFlowchartsInput>
    create: XOR<UserCreateWithoutFlowchartsInput, UserUncheckedCreateWithoutFlowchartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlowchartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlowchartsInput, UserUncheckedUpdateWithoutFlowchartsInput>
  }

  export type UserUpdateWithoutFlowchartsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFlowchartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutCreatedByNestedInput
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutCreatedByNestedInput
    testCases?: TestCaseUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ProjectCreateManyCreatedByInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type ProjectMemberCreateManyUserInput = {
    projectId: number
    role: string
    joinedAt?: Date | string
  }

  export type TestPlanCreateManyCreatedByInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    projectId: number
  }

  export type TestCaseCreateManyCreatedByInput = {
    id?: number
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    planId: number
  }

  export type FlowchartCreateManyCreatedByInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    projectId: number
  }

  export type ProjectUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    testPlans?: TestPlanUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    testPlans?: TestPlanUncheckedUpdateManyWithoutProjectNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestPlanUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTestPlansNestedInput
    testCases?: TestCaseUpdateManyWithoutPlanNestedInput
  }

  export type TestPlanUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
    testCases?: TestCaseUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TestPlanUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: TestPlanUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowchartUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFlowchartsNestedInput
  }

  export type FlowchartUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowchartUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectMemberCreateManyProjectInput = {
    userId: number
    role: string
    joinedAt?: Date | string
  }

  export type TestPlanCreateManyProjectInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    createdById: number
  }

  export type FlowchartCreateManyProjectInput = {
    id?: number
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdById: number
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestPlanUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTestPlansNestedInput
    testCases?: TestCaseUpdateManyWithoutPlanNestedInput
  }

  export type TestPlanUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    testCases?: TestCaseUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type TestPlanUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type FlowchartUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutFlowchartsNestedInput
  }

  export type FlowchartUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type FlowchartUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseCreateManyPlanInput = {
    id?: number
    name: string
    description?: string | null
    steps: JsonNullValueInput | InputJsonValue
    expected: string
    createdAt?: Date | string
    createdById: number
  }

  export type TestCaseUpdateWithoutPlanInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCaseUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type TestCaseUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    steps?: JsonNullValueInput | InputJsonValue
    expected?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
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