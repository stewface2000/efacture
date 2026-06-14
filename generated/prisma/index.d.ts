
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profession
 * 
 */
export type Profession = $Result.DefaultSelection<Prisma.$ProfessionPayload>
/**
 * Model Solution
 * 
 */
export type Solution = $Result.DefaultSelection<Prisma.$SolutionPayload>
/**
 * Model SolutionToProfession
 * 
 */
export type SolutionToProfession = $Result.DefaultSelection<Prisma.$SolutionToProfessionPayload>
/**
 * Model QuizQuestion
 * 
 */
export type QuizQuestion = $Result.DefaultSelection<Prisma.$QuizQuestionPayload>
/**
 * Model QuizOption
 * 
 */
export type QuizOption = $Result.DefaultSelection<Prisma.$QuizOptionPayload>
/**
 * Model QuizResult
 * 
 */
export type QuizResult = $Result.DefaultSelection<Prisma.$QuizResultPayload>
/**
 * Model Consultation
 * 
 */
export type Consultation = $Result.DefaultSelection<Prisma.$ConsultationPayload>
/**
 * Model LeadSubscriber
 * 
 */
export type LeadSubscriber = $Result.DefaultSelection<Prisma.$LeadSubscriberPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Professions
 * const professions = await prisma.profession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Professions
   * const professions = await prisma.profession.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profession`: Exposes CRUD operations for the **Profession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professions
    * const professions = await prisma.profession.findMany()
    * ```
    */
  get profession(): Prisma.ProfessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solution`: Exposes CRUD operations for the **Solution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solutions
    * const solutions = await prisma.solution.findMany()
    * ```
    */
  get solution(): Prisma.SolutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solutionToProfession`: Exposes CRUD operations for the **SolutionToProfession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolutionToProfessions
    * const solutionToProfessions = await prisma.solutionToProfession.findMany()
    * ```
    */
  get solutionToProfession(): Prisma.SolutionToProfessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizQuestion`: Exposes CRUD operations for the **QuizQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizQuestions
    * const quizQuestions = await prisma.quizQuestion.findMany()
    * ```
    */
  get quizQuestion(): Prisma.QuizQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizOption`: Exposes CRUD operations for the **QuizOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizOptions
    * const quizOptions = await prisma.quizOption.findMany()
    * ```
    */
  get quizOption(): Prisma.QuizOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizResult`: Exposes CRUD operations for the **QuizResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizResults
    * const quizResults = await prisma.quizResult.findMany()
    * ```
    */
  get quizResult(): Prisma.QuizResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultation`: Exposes CRUD operations for the **Consultation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultations
    * const consultations = await prisma.consultation.findMany()
    * ```
    */
  get consultation(): Prisma.ConsultationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadSubscriber`: Exposes CRUD operations for the **LeadSubscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadSubscribers
    * const leadSubscribers = await prisma.leadSubscriber.findMany()
    * ```
    */
  get leadSubscriber(): Prisma.LeadSubscriberDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Profession: 'Profession',
    Solution: 'Solution',
    SolutionToProfession: 'SolutionToProfession',
    QuizQuestion: 'QuizQuestion',
    QuizOption: 'QuizOption',
    QuizResult: 'QuizResult',
    Consultation: 'Consultation',
    LeadSubscriber: 'LeadSubscriber',
    User: 'User',
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profession" | "solution" | "solutionToProfession" | "quizQuestion" | "quizOption" | "quizResult" | "consultation" | "leadSubscriber" | "user" | "invoice" | "invoiceItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profession: {
        payload: Prisma.$ProfessionPayload<ExtArgs>
        fields: Prisma.ProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findFirst: {
            args: Prisma.ProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findMany: {
            args: Prisma.ProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          create: {
            args: Prisma.ProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          createMany: {
            args: Prisma.ProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          delete: {
            args: Prisma.ProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          update: {
            args: Prisma.ProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          aggregate: {
            args: Prisma.ProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession>
          }
          groupBy: {
            args: Prisma.ProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionCountAggregateOutputType> | number
          }
        }
      }
      Solution: {
        payload: Prisma.$SolutionPayload<ExtArgs>
        fields: Prisma.SolutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          findFirst: {
            args: Prisma.SolutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          findMany: {
            args: Prisma.SolutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>[]
          }
          create: {
            args: Prisma.SolutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          createMany: {
            args: Prisma.SolutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>[]
          }
          delete: {
            args: Prisma.SolutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          update: {
            args: Prisma.SolutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          deleteMany: {
            args: Prisma.SolutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>[]
          }
          upsert: {
            args: Prisma.SolutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionPayload>
          }
          aggregate: {
            args: Prisma.SolutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolution>
          }
          groupBy: {
            args: Prisma.SolutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolutionCountArgs<ExtArgs>
            result: $Utils.Optional<SolutionCountAggregateOutputType> | number
          }
        }
      }
      SolutionToProfession: {
        payload: Prisma.$SolutionToProfessionPayload<ExtArgs>
        fields: Prisma.SolutionToProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolutionToProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolutionToProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>
          }
          findFirst: {
            args: Prisma.SolutionToProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolutionToProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>
          }
          findMany: {
            args: Prisma.SolutionToProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>[]
          }
          create: {
            args: Prisma.SolutionToProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>
          }
          createMany: {
            args: Prisma.SolutionToProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolutionToProfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>[]
          }
          delete: {
            args: Prisma.SolutionToProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>
          }
          update: {
            args: Prisma.SolutionToProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>
          }
          deleteMany: {
            args: Prisma.SolutionToProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolutionToProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolutionToProfessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>[]
          }
          upsert: {
            args: Prisma.SolutionToProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionToProfessionPayload>
          }
          aggregate: {
            args: Prisma.SolutionToProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolutionToProfession>
          }
          groupBy: {
            args: Prisma.SolutionToProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolutionToProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolutionToProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<SolutionToProfessionCountAggregateOutputType> | number
          }
        }
      }
      QuizQuestion: {
        payload: Prisma.$QuizQuestionPayload<ExtArgs>
        fields: Prisma.QuizQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findFirst: {
            args: Prisma.QuizQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findMany: {
            args: Prisma.QuizQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          create: {
            args: Prisma.QuizQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          createMany: {
            args: Prisma.QuizQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          delete: {
            args: Prisma.QuizQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          update: {
            args: Prisma.QuizQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuizQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuizQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          aggregate: {
            args: Prisma.QuizQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizQuestion>
          }
          groupBy: {
            args: Prisma.QuizQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionCountAggregateOutputType> | number
          }
        }
      }
      QuizOption: {
        payload: Prisma.$QuizOptionPayload<ExtArgs>
        fields: Prisma.QuizOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          findFirst: {
            args: Prisma.QuizOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          findMany: {
            args: Prisma.QuizOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>[]
          }
          create: {
            args: Prisma.QuizOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          createMany: {
            args: Prisma.QuizOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>[]
          }
          delete: {
            args: Prisma.QuizOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          update: {
            args: Prisma.QuizOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          deleteMany: {
            args: Prisma.QuizOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>[]
          }
          upsert: {
            args: Prisma.QuizOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          aggregate: {
            args: Prisma.QuizOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizOption>
          }
          groupBy: {
            args: Prisma.QuizOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizOptionCountAggregateOutputType> | number
          }
        }
      }
      QuizResult: {
        payload: Prisma.$QuizResultPayload<ExtArgs>
        fields: Prisma.QuizResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          findFirst: {
            args: Prisma.QuizResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          findMany: {
            args: Prisma.QuizResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>[]
          }
          create: {
            args: Prisma.QuizResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          createMany: {
            args: Prisma.QuizResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>[]
          }
          delete: {
            args: Prisma.QuizResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          update: {
            args: Prisma.QuizResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          deleteMany: {
            args: Prisma.QuizResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>[]
          }
          upsert: {
            args: Prisma.QuizResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizResultPayload>
          }
          aggregate: {
            args: Prisma.QuizResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizResult>
          }
          groupBy: {
            args: Prisma.QuizResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizResultCountArgs<ExtArgs>
            result: $Utils.Optional<QuizResultCountAggregateOutputType> | number
          }
        }
      }
      Consultation: {
        payload: Prisma.$ConsultationPayload<ExtArgs>
        fields: Prisma.ConsultationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findFirst: {
            args: Prisma.ConsultationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findMany: {
            args: Prisma.ConsultationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          create: {
            args: Prisma.ConsultationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          createMany: {
            args: Prisma.ConsultationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          delete: {
            args: Prisma.ConsultationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          update: {
            args: Prisma.ConsultationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          aggregate: {
            args: Prisma.ConsultationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultation>
          }
          groupBy: {
            args: Prisma.ConsultationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationCountAggregateOutputType> | number
          }
        }
      }
      LeadSubscriber: {
        payload: Prisma.$LeadSubscriberPayload<ExtArgs>
        fields: Prisma.LeadSubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadSubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadSubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>
          }
          findFirst: {
            args: Prisma.LeadSubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadSubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>
          }
          findMany: {
            args: Prisma.LeadSubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>[]
          }
          create: {
            args: Prisma.LeadSubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>
          }
          createMany: {
            args: Prisma.LeadSubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadSubscriberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>[]
          }
          delete: {
            args: Prisma.LeadSubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>
          }
          update: {
            args: Prisma.LeadSubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>
          }
          deleteMany: {
            args: Prisma.LeadSubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadSubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadSubscriberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>[]
          }
          upsert: {
            args: Prisma.LeadSubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadSubscriberPayload>
          }
          aggregate: {
            args: Prisma.LeadSubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadSubscriber>
          }
          groupBy: {
            args: Prisma.LeadSubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadSubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadSubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<LeadSubscriberCountAggregateOutputType> | number
          }
        }
      }
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
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItem: {
        payload: Prisma.$InvoiceItemPayload<ExtArgs>
        fields: Prisma.InvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          update: {
            args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItem>
          }
          groupBy: {
            args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profession?: ProfessionOmit
    solution?: SolutionOmit
    solutionToProfession?: SolutionToProfessionOmit
    quizQuestion?: QuizQuestionOmit
    quizOption?: QuizOptionOmit
    quizResult?: QuizResultOmit
    consultation?: ConsultationOmit
    leadSubscriber?: LeadSubscriberOmit
    user?: UserOmit
    invoice?: InvoiceOmit
    invoiceItem?: InvoiceItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    solutions: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solutions?: boolean | ProfessionCountOutputTypeCountSolutionsArgs
  }

  // Custom InputTypes
  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionCountOutputType
     */
    select?: ProfessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountSolutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionToProfessionWhereInput
  }


  /**
   * Count Type SolutionCountOutputType
   */

  export type SolutionCountOutputType = {
    professions: number
    QuizResult: number
  }

  export type SolutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professions?: boolean | SolutionCountOutputTypeCountProfessionsArgs
    QuizResult?: boolean | SolutionCountOutputTypeCountQuizResultArgs
  }

  // Custom InputTypes
  /**
   * SolutionCountOutputType without action
   */
  export type SolutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionCountOutputType
     */
    select?: SolutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SolutionCountOutputType without action
   */
  export type SolutionCountOutputTypeCountProfessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionToProfessionWhereInput
  }

  /**
   * SolutionCountOutputType without action
   */
  export type SolutionCountOutputTypeCountQuizResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultWhereInput
  }


  /**
   * Count Type QuizQuestionCountOutputType
   */

  export type QuizQuestionCountOutputType = {
    options: number
  }

  export type QuizQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuizQuestionCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionCountOutputType
     */
    select?: QuizQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizOptionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    invoices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
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
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    items: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoiceCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profession
   */

  export type AggregateProfession = {
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  export type ProfessionMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    category: string | null
    description: string | null
    icon: string | null
    contentHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    category: string | null
    description: string | null
    icon: string | null
    contentHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    category: number
    description: number
    icon: number
    contentHtml: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessionMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    category?: true
    description?: true
    icon?: true
    contentHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    category?: true
    description?: true
    icon?: true
    contentHtml?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    category?: true
    description?: true
    icon?: true
    contentHtml?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profession to aggregate.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professions
    **/
    _count?: true | ProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionMaxAggregateInputType
  }

  export type GetProfessionAggregateType<T extends ProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession[P]>
      : GetScalarType<T[P], AggregateProfession[P]>
  }




  export type ProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithAggregationInput | ProfessionOrderByWithAggregationInput[]
    by: ProfessionScalarFieldEnum[] | ProfessionScalarFieldEnum
    having?: ProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionCountAggregateInputType | true
    _min?: ProfessionMinAggregateInputType
    _max?: ProfessionMaxAggregateInputType
  }

  export type ProfessionGroupByOutputType = {
    id: string
    slug: string
    name: string
    category: string
    description: string
    icon: string
    contentHtml: string
    createdAt: Date
    updatedAt: Date
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  type GetProfessionGroupByPayload<T extends ProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    contentHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    solutions?: boolean | Profession$solutionsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    contentHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    contentHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    icon?: boolean
    contentHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "category" | "description" | "icon" | "contentHtml" | "createdAt" | "updatedAt", ExtArgs["result"]["profession"]>
  export type ProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    solutions?: boolean | Profession$solutionsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profession"
    objects: {
      solutions: Prisma.$SolutionToProfessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      category: string
      description: string
      icon: string
      contentHtml: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profession"]>
    composites: {}
  }

  type ProfessionGetPayload<S extends boolean | null | undefined | ProfessionDefaultArgs> = $Result.GetResult<Prisma.$ProfessionPayload, S>

  type ProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionCountAggregateInputType | true
    }

  export interface ProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profession'], meta: { name: 'Profession' } }
    /**
     * Find zero or one Profession that matches the filter.
     * @param {ProfessionFindUniqueArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionFindUniqueArgs>(args: SelectSubset<T, ProfessionFindUniqueArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionFindUniqueOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionFindFirstArgs>(args?: SelectSubset<T, ProfessionFindFirstArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professions
     * const professions = await prisma.profession.findMany()
     * 
     * // Get first 10 Professions
     * const professions = await prisma.profession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionWithIdOnly = await prisma.profession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionFindManyArgs>(args?: SelectSubset<T, ProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession.
     * @param {ProfessionCreateArgs} args - Arguments to create a Profession.
     * @example
     * // Create one Profession
     * const Profession = await prisma.profession.create({
     *   data: {
     *     // ... data to create a Profession
     *   }
     * })
     * 
     */
    create<T extends ProfessionCreateArgs>(args: SelectSubset<T, ProfessionCreateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professions.
     * @param {ProfessionCreateManyArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionCreateManyArgs>(args?: SelectSubset<T, ProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professions and returns the data saved in the database.
     * @param {ProfessionCreateManyAndReturnArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession.
     * @param {ProfessionDeleteArgs} args - Arguments to delete one Profession.
     * @example
     * // Delete one Profession
     * const Profession = await prisma.profession.delete({
     *   where: {
     *     // ... filter to delete one Profession
     *   }
     * })
     * 
     */
    delete<T extends ProfessionDeleteArgs>(args: SelectSubset<T, ProfessionDeleteArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession.
     * @param {ProfessionUpdateArgs} args - Arguments to update one Profession.
     * @example
     * // Update one Profession
     * const profession = await prisma.profession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionUpdateArgs>(args: SelectSubset<T, ProfessionUpdateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professions.
     * @param {ProfessionDeleteManyArgs} args - Arguments to filter Professions to delete.
     * @example
     * // Delete a few Professions
     * const { count } = await prisma.profession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionDeleteManyArgs>(args?: SelectSubset<T, ProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionUpdateManyArgs>(args: SelectSubset<T, ProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions and returns the data updated in the database.
     * @param {ProfessionUpdateManyAndReturnArgs} args - Arguments to update many Professions.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession.
     * @param {ProfessionUpsertArgs} args - Arguments to update or create a Profession.
     * @example
     * // Update or create a Profession
     * const profession = await prisma.profession.upsert({
     *   create: {
     *     // ... data to create a Profession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionUpsertArgs>(args: SelectSubset<T, ProfessionUpsertArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionCountArgs} args - Arguments to filter Professions to count.
     * @example
     * // Count the number of Professions
     * const count = await prisma.profession.count({
     *   where: {
     *     // ... the filter for the Professions we want to count
     *   }
     * })
    **/
    count<T extends ProfessionCountArgs>(
      args?: Subset<T, ProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionAggregateArgs>(args: Subset<T, ProfessionAggregateArgs>): Prisma.PrismaPromise<GetProfessionAggregateType<T>>

    /**
     * Group by Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionGroupByArgs} args - Group by arguments.
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
      T extends ProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profession model
   */
  readonly fields: ProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    solutions<T extends Profession$solutionsArgs<ExtArgs> = {}>(args?: Subset<T, Profession$solutionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profession model
   */
  interface ProfessionFieldRefs {
    readonly id: FieldRef<"Profession", 'String'>
    readonly slug: FieldRef<"Profession", 'String'>
    readonly name: FieldRef<"Profession", 'String'>
    readonly category: FieldRef<"Profession", 'String'>
    readonly description: FieldRef<"Profession", 'String'>
    readonly icon: FieldRef<"Profession", 'String'>
    readonly contentHtml: FieldRef<"Profession", 'String'>
    readonly createdAt: FieldRef<"Profession", 'DateTime'>
    readonly updatedAt: FieldRef<"Profession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profession findUnique
   */
  export type ProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findUniqueOrThrow
   */
  export type ProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findFirst
   */
  export type ProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findFirstOrThrow
   */
  export type ProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findMany
   */
  export type ProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Professions to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession create
   */
  export type ProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Profession.
     */
    data: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
  }

  /**
   * Profession createMany
   */
  export type ProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
  }

  /**
   * Profession createManyAndReturn
   */
  export type ProfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
  }

  /**
   * Profession update
   */
  export type ProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Profession.
     */
    data: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
    /**
     * Choose, which Profession to update.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession updateMany
   */
  export type ProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession updateManyAndReturn
   */
  export type ProfessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to update.
     */
    limit?: number
  }

  /**
   * Profession upsert
   */
  export type ProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Profession to update in case it exists.
     */
    where: ProfessionWhereUniqueInput
    /**
     * In case the Profession found by the `where` argument doesn't exist, create a new Profession with this data.
     */
    create: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
    /**
     * In case the Profession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
  }

  /**
   * Profession delete
   */
  export type ProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter which Profession to delete.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession deleteMany
   */
  export type ProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professions to delete
     */
    where?: ProfessionWhereInput
    /**
     * Limit how many Professions to delete.
     */
    limit?: number
  }

  /**
   * Profession.solutions
   */
  export type Profession$solutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    where?: SolutionToProfessionWhereInput
    orderBy?: SolutionToProfessionOrderByWithRelationInput | SolutionToProfessionOrderByWithRelationInput[]
    cursor?: SolutionToProfessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolutionToProfessionScalarFieldEnum | SolutionToProfessionScalarFieldEnum[]
  }

  /**
   * Profession without action
   */
  export type ProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profession
     */
    omit?: ProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
  }


  /**
   * Model Solution
   */

  export type AggregateSolution = {
    _count: SolutionCountAggregateOutputType | null
    _min: SolutionMinAggregateOutputType | null
    _max: SolutionMaxAggregateOutputType | null
  }

  export type SolutionMinAggregateOutputType = {
    id: string | null
    name: string | null
    logoUrl: string | null
    affiliateUrl: string | null
    payoutDetails: string | null
    isGoodForVol: string | null
    isGoodForType: string | null
    description: string | null
  }

  export type SolutionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logoUrl: string | null
    affiliateUrl: string | null
    payoutDetails: string | null
    isGoodForVol: string | null
    isGoodForType: string | null
    description: string | null
  }

  export type SolutionCountAggregateOutputType = {
    id: number
    name: number
    logoUrl: number
    affiliateUrl: number
    payoutDetails: number
    isGoodForVol: number
    isGoodForType: number
    description: number
    _all: number
  }


  export type SolutionMinAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    affiliateUrl?: true
    payoutDetails?: true
    isGoodForVol?: true
    isGoodForType?: true
    description?: true
  }

  export type SolutionMaxAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    affiliateUrl?: true
    payoutDetails?: true
    isGoodForVol?: true
    isGoodForType?: true
    description?: true
  }

  export type SolutionCountAggregateInputType = {
    id?: true
    name?: true
    logoUrl?: true
    affiliateUrl?: true
    payoutDetails?: true
    isGoodForVol?: true
    isGoodForType?: true
    description?: true
    _all?: true
  }

  export type SolutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solution to aggregate.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solutions
    **/
    _count?: true | SolutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolutionMaxAggregateInputType
  }

  export type GetSolutionAggregateType<T extends SolutionAggregateArgs> = {
        [P in keyof T & keyof AggregateSolution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolution[P]>
      : GetScalarType<T[P], AggregateSolution[P]>
  }




  export type SolutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionWhereInput
    orderBy?: SolutionOrderByWithAggregationInput | SolutionOrderByWithAggregationInput[]
    by: SolutionScalarFieldEnum[] | SolutionScalarFieldEnum
    having?: SolutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolutionCountAggregateInputType | true
    _min?: SolutionMinAggregateInputType
    _max?: SolutionMaxAggregateInputType
  }

  export type SolutionGroupByOutputType = {
    id: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
    _count: SolutionCountAggregateOutputType | null
    _min: SolutionMinAggregateOutputType | null
    _max: SolutionMaxAggregateOutputType | null
  }

  type GetSolutionGroupByPayload<T extends SolutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolutionGroupByOutputType[P]>
            : GetScalarType<T[P], SolutionGroupByOutputType[P]>
        }
      >
    >


  export type SolutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    affiliateUrl?: boolean
    payoutDetails?: boolean
    isGoodForVol?: boolean
    isGoodForType?: boolean
    description?: boolean
    professions?: boolean | Solution$professionsArgs<ExtArgs>
    QuizResult?: boolean | Solution$QuizResultArgs<ExtArgs>
    _count?: boolean | SolutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solution"]>

  export type SolutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    affiliateUrl?: boolean
    payoutDetails?: boolean
    isGoodForVol?: boolean
    isGoodForType?: boolean
    description?: boolean
  }, ExtArgs["result"]["solution"]>

  export type SolutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    affiliateUrl?: boolean
    payoutDetails?: boolean
    isGoodForVol?: boolean
    isGoodForType?: boolean
    description?: boolean
  }, ExtArgs["result"]["solution"]>

  export type SolutionSelectScalar = {
    id?: boolean
    name?: boolean
    logoUrl?: boolean
    affiliateUrl?: boolean
    payoutDetails?: boolean
    isGoodForVol?: boolean
    isGoodForType?: boolean
    description?: boolean
  }

  export type SolutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logoUrl" | "affiliateUrl" | "payoutDetails" | "isGoodForVol" | "isGoodForType" | "description", ExtArgs["result"]["solution"]>
  export type SolutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professions?: boolean | Solution$professionsArgs<ExtArgs>
    QuizResult?: boolean | Solution$QuizResultArgs<ExtArgs>
    _count?: boolean | SolutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SolutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SolutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SolutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solution"
    objects: {
      professions: Prisma.$SolutionToProfessionPayload<ExtArgs>[]
      QuizResult: Prisma.$QuizResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logoUrl: string
      affiliateUrl: string
      payoutDetails: string
      isGoodForVol: string
      isGoodForType: string
      description: string
    }, ExtArgs["result"]["solution"]>
    composites: {}
  }

  type SolutionGetPayload<S extends boolean | null | undefined | SolutionDefaultArgs> = $Result.GetResult<Prisma.$SolutionPayload, S>

  type SolutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolutionCountAggregateInputType | true
    }

  export interface SolutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solution'], meta: { name: 'Solution' } }
    /**
     * Find zero or one Solution that matches the filter.
     * @param {SolutionFindUniqueArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolutionFindUniqueArgs>(args: SelectSubset<T, SolutionFindUniqueArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolutionFindUniqueOrThrowArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolutionFindUniqueOrThrowArgs>(args: SelectSubset<T, SolutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionFindFirstArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolutionFindFirstArgs>(args?: SelectSubset<T, SolutionFindFirstArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionFindFirstOrThrowArgs} args - Arguments to find a Solution
     * @example
     * // Get one Solution
     * const solution = await prisma.solution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolutionFindFirstOrThrowArgs>(args?: SelectSubset<T, SolutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solutions
     * const solutions = await prisma.solution.findMany()
     * 
     * // Get first 10 Solutions
     * const solutions = await prisma.solution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solutionWithIdOnly = await prisma.solution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolutionFindManyArgs>(args?: SelectSubset<T, SolutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solution.
     * @param {SolutionCreateArgs} args - Arguments to create a Solution.
     * @example
     * // Create one Solution
     * const Solution = await prisma.solution.create({
     *   data: {
     *     // ... data to create a Solution
     *   }
     * })
     * 
     */
    create<T extends SolutionCreateArgs>(args: SelectSubset<T, SolutionCreateArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solutions.
     * @param {SolutionCreateManyArgs} args - Arguments to create many Solutions.
     * @example
     * // Create many Solutions
     * const solution = await prisma.solution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolutionCreateManyArgs>(args?: SelectSubset<T, SolutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solutions and returns the data saved in the database.
     * @param {SolutionCreateManyAndReturnArgs} args - Arguments to create many Solutions.
     * @example
     * // Create many Solutions
     * const solution = await prisma.solution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solutions and only return the `id`
     * const solutionWithIdOnly = await prisma.solution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolutionCreateManyAndReturnArgs>(args?: SelectSubset<T, SolutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solution.
     * @param {SolutionDeleteArgs} args - Arguments to delete one Solution.
     * @example
     * // Delete one Solution
     * const Solution = await prisma.solution.delete({
     *   where: {
     *     // ... filter to delete one Solution
     *   }
     * })
     * 
     */
    delete<T extends SolutionDeleteArgs>(args: SelectSubset<T, SolutionDeleteArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solution.
     * @param {SolutionUpdateArgs} args - Arguments to update one Solution.
     * @example
     * // Update one Solution
     * const solution = await prisma.solution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolutionUpdateArgs>(args: SelectSubset<T, SolutionUpdateArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solutions.
     * @param {SolutionDeleteManyArgs} args - Arguments to filter Solutions to delete.
     * @example
     * // Delete a few Solutions
     * const { count } = await prisma.solution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolutionDeleteManyArgs>(args?: SelectSubset<T, SolutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solutions
     * const solution = await prisma.solution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolutionUpdateManyArgs>(args: SelectSubset<T, SolutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solutions and returns the data updated in the database.
     * @param {SolutionUpdateManyAndReturnArgs} args - Arguments to update many Solutions.
     * @example
     * // Update many Solutions
     * const solution = await prisma.solution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solutions and only return the `id`
     * const solutionWithIdOnly = await prisma.solution.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolutionUpdateManyAndReturnArgs>(args: SelectSubset<T, SolutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solution.
     * @param {SolutionUpsertArgs} args - Arguments to update or create a Solution.
     * @example
     * // Update or create a Solution
     * const solution = await prisma.solution.upsert({
     *   create: {
     *     // ... data to create a Solution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solution we want to update
     *   }
     * })
     */
    upsert<T extends SolutionUpsertArgs>(args: SelectSubset<T, SolutionUpsertArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionCountArgs} args - Arguments to filter Solutions to count.
     * @example
     * // Count the number of Solutions
     * const count = await prisma.solution.count({
     *   where: {
     *     // ... the filter for the Solutions we want to count
     *   }
     * })
    **/
    count<T extends SolutionCountArgs>(
      args?: Subset<T, SolutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolutionAggregateArgs>(args: Subset<T, SolutionAggregateArgs>): Prisma.PrismaPromise<GetSolutionAggregateType<T>>

    /**
     * Group by Solution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionGroupByArgs} args - Group by arguments.
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
      T extends SolutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolutionGroupByArgs['orderBy'] }
        : { orderBy?: SolutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solution model
   */
  readonly fields: SolutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professions<T extends Solution$professionsArgs<ExtArgs> = {}>(args?: Subset<T, Solution$professionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    QuizResult<T extends Solution$QuizResultArgs<ExtArgs> = {}>(args?: Subset<T, Solution$QuizResultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Solution model
   */
  interface SolutionFieldRefs {
    readonly id: FieldRef<"Solution", 'String'>
    readonly name: FieldRef<"Solution", 'String'>
    readonly logoUrl: FieldRef<"Solution", 'String'>
    readonly affiliateUrl: FieldRef<"Solution", 'String'>
    readonly payoutDetails: FieldRef<"Solution", 'String'>
    readonly isGoodForVol: FieldRef<"Solution", 'String'>
    readonly isGoodForType: FieldRef<"Solution", 'String'>
    readonly description: FieldRef<"Solution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Solution findUnique
   */
  export type SolutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution findUniqueOrThrow
   */
  export type SolutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution findFirst
   */
  export type SolutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solutions.
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solutions.
     */
    distinct?: SolutionScalarFieldEnum | SolutionScalarFieldEnum[]
  }

  /**
   * Solution findFirstOrThrow
   */
  export type SolutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solution to fetch.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solutions.
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solutions.
     */
    distinct?: SolutionScalarFieldEnum | SolutionScalarFieldEnum[]
  }

  /**
   * Solution findMany
   */
  export type SolutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter, which Solutions to fetch.
     */
    where?: SolutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solutions to fetch.
     */
    orderBy?: SolutionOrderByWithRelationInput | SolutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solutions.
     */
    cursor?: SolutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solutions.
     */
    distinct?: SolutionScalarFieldEnum | SolutionScalarFieldEnum[]
  }

  /**
   * Solution create
   */
  export type SolutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Solution.
     */
    data: XOR<SolutionCreateInput, SolutionUncheckedCreateInput>
  }

  /**
   * Solution createMany
   */
  export type SolutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solutions.
     */
    data: SolutionCreateManyInput | SolutionCreateManyInput[]
  }

  /**
   * Solution createManyAndReturn
   */
  export type SolutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * The data used to create many Solutions.
     */
    data: SolutionCreateManyInput | SolutionCreateManyInput[]
  }

  /**
   * Solution update
   */
  export type SolutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Solution.
     */
    data: XOR<SolutionUpdateInput, SolutionUncheckedUpdateInput>
    /**
     * Choose, which Solution to update.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution updateMany
   */
  export type SolutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solutions.
     */
    data: XOR<SolutionUpdateManyMutationInput, SolutionUncheckedUpdateManyInput>
    /**
     * Filter which Solutions to update
     */
    where?: SolutionWhereInput
    /**
     * Limit how many Solutions to update.
     */
    limit?: number
  }

  /**
   * Solution updateManyAndReturn
   */
  export type SolutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * The data used to update Solutions.
     */
    data: XOR<SolutionUpdateManyMutationInput, SolutionUncheckedUpdateManyInput>
    /**
     * Filter which Solutions to update
     */
    where?: SolutionWhereInput
    /**
     * Limit how many Solutions to update.
     */
    limit?: number
  }

  /**
   * Solution upsert
   */
  export type SolutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Solution to update in case it exists.
     */
    where: SolutionWhereUniqueInput
    /**
     * In case the Solution found by the `where` argument doesn't exist, create a new Solution with this data.
     */
    create: XOR<SolutionCreateInput, SolutionUncheckedCreateInput>
    /**
     * In case the Solution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolutionUpdateInput, SolutionUncheckedUpdateInput>
  }

  /**
   * Solution delete
   */
  export type SolutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
    /**
     * Filter which Solution to delete.
     */
    where: SolutionWhereUniqueInput
  }

  /**
   * Solution deleteMany
   */
  export type SolutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solutions to delete
     */
    where?: SolutionWhereInput
    /**
     * Limit how many Solutions to delete.
     */
    limit?: number
  }

  /**
   * Solution.professions
   */
  export type Solution$professionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    where?: SolutionToProfessionWhereInput
    orderBy?: SolutionToProfessionOrderByWithRelationInput | SolutionToProfessionOrderByWithRelationInput[]
    cursor?: SolutionToProfessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolutionToProfessionScalarFieldEnum | SolutionToProfessionScalarFieldEnum[]
  }

  /**
   * Solution.QuizResult
   */
  export type Solution$QuizResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    where?: QuizResultWhereInput
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    cursor?: QuizResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * Solution without action
   */
  export type SolutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solution
     */
    select?: SolutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solution
     */
    omit?: SolutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionInclude<ExtArgs> | null
  }


  /**
   * Model SolutionToProfession
   */

  export type AggregateSolutionToProfession = {
    _count: SolutionToProfessionCountAggregateOutputType | null
    _min: SolutionToProfessionMinAggregateOutputType | null
    _max: SolutionToProfessionMaxAggregateOutputType | null
  }

  export type SolutionToProfessionMinAggregateOutputType = {
    professionId: string | null
    solutionId: string | null
  }

  export type SolutionToProfessionMaxAggregateOutputType = {
    professionId: string | null
    solutionId: string | null
  }

  export type SolutionToProfessionCountAggregateOutputType = {
    professionId: number
    solutionId: number
    _all: number
  }


  export type SolutionToProfessionMinAggregateInputType = {
    professionId?: true
    solutionId?: true
  }

  export type SolutionToProfessionMaxAggregateInputType = {
    professionId?: true
    solutionId?: true
  }

  export type SolutionToProfessionCountAggregateInputType = {
    professionId?: true
    solutionId?: true
    _all?: true
  }

  export type SolutionToProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolutionToProfession to aggregate.
     */
    where?: SolutionToProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionToProfessions to fetch.
     */
    orderBy?: SolutionToProfessionOrderByWithRelationInput | SolutionToProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolutionToProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionToProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionToProfessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolutionToProfessions
    **/
    _count?: true | SolutionToProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolutionToProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolutionToProfessionMaxAggregateInputType
  }

  export type GetSolutionToProfessionAggregateType<T extends SolutionToProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSolutionToProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolutionToProfession[P]>
      : GetScalarType<T[P], AggregateSolutionToProfession[P]>
  }




  export type SolutionToProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionToProfessionWhereInput
    orderBy?: SolutionToProfessionOrderByWithAggregationInput | SolutionToProfessionOrderByWithAggregationInput[]
    by: SolutionToProfessionScalarFieldEnum[] | SolutionToProfessionScalarFieldEnum
    having?: SolutionToProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolutionToProfessionCountAggregateInputType | true
    _min?: SolutionToProfessionMinAggregateInputType
    _max?: SolutionToProfessionMaxAggregateInputType
  }

  export type SolutionToProfessionGroupByOutputType = {
    professionId: string
    solutionId: string
    _count: SolutionToProfessionCountAggregateOutputType | null
    _min: SolutionToProfessionMinAggregateOutputType | null
    _max: SolutionToProfessionMaxAggregateOutputType | null
  }

  type GetSolutionToProfessionGroupByPayload<T extends SolutionToProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolutionToProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolutionToProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolutionToProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], SolutionToProfessionGroupByOutputType[P]>
        }
      >
    >


  export type SolutionToProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professionId?: boolean
    solutionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    solution?: boolean | SolutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solutionToProfession"]>

  export type SolutionToProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professionId?: boolean
    solutionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    solution?: boolean | SolutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solutionToProfession"]>

  export type SolutionToProfessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    professionId?: boolean
    solutionId?: boolean
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    solution?: boolean | SolutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solutionToProfession"]>

  export type SolutionToProfessionSelectScalar = {
    professionId?: boolean
    solutionId?: boolean
  }

  export type SolutionToProfessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"professionId" | "solutionId", ExtArgs["result"]["solutionToProfession"]>
  export type SolutionToProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    solution?: boolean | SolutionDefaultArgs<ExtArgs>
  }
  export type SolutionToProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    solution?: boolean | SolutionDefaultArgs<ExtArgs>
  }
  export type SolutionToProfessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | ProfessionDefaultArgs<ExtArgs>
    solution?: boolean | SolutionDefaultArgs<ExtArgs>
  }

  export type $SolutionToProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolutionToProfession"
    objects: {
      profession: Prisma.$ProfessionPayload<ExtArgs>
      solution: Prisma.$SolutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      professionId: string
      solutionId: string
    }, ExtArgs["result"]["solutionToProfession"]>
    composites: {}
  }

  type SolutionToProfessionGetPayload<S extends boolean | null | undefined | SolutionToProfessionDefaultArgs> = $Result.GetResult<Prisma.$SolutionToProfessionPayload, S>

  type SolutionToProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolutionToProfessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolutionToProfessionCountAggregateInputType | true
    }

  export interface SolutionToProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolutionToProfession'], meta: { name: 'SolutionToProfession' } }
    /**
     * Find zero or one SolutionToProfession that matches the filter.
     * @param {SolutionToProfessionFindUniqueArgs} args - Arguments to find a SolutionToProfession
     * @example
     * // Get one SolutionToProfession
     * const solutionToProfession = await prisma.solutionToProfession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolutionToProfessionFindUniqueArgs>(args: SelectSubset<T, SolutionToProfessionFindUniqueArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolutionToProfession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolutionToProfessionFindUniqueOrThrowArgs} args - Arguments to find a SolutionToProfession
     * @example
     * // Get one SolutionToProfession
     * const solutionToProfession = await prisma.solutionToProfession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolutionToProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SolutionToProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolutionToProfession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionToProfessionFindFirstArgs} args - Arguments to find a SolutionToProfession
     * @example
     * // Get one SolutionToProfession
     * const solutionToProfession = await prisma.solutionToProfession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolutionToProfessionFindFirstArgs>(args?: SelectSubset<T, SolutionToProfessionFindFirstArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolutionToProfession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionToProfessionFindFirstOrThrowArgs} args - Arguments to find a SolutionToProfession
     * @example
     * // Get one SolutionToProfession
     * const solutionToProfession = await prisma.solutionToProfession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolutionToProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SolutionToProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolutionToProfessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionToProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolutionToProfessions
     * const solutionToProfessions = await prisma.solutionToProfession.findMany()
     * 
     * // Get first 10 SolutionToProfessions
     * const solutionToProfessions = await prisma.solutionToProfession.findMany({ take: 10 })
     * 
     * // Only select the `professionId`
     * const solutionToProfessionWithProfessionIdOnly = await prisma.solutionToProfession.findMany({ select: { professionId: true } })
     * 
     */
    findMany<T extends SolutionToProfessionFindManyArgs>(args?: SelectSubset<T, SolutionToProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolutionToProfession.
     * @param {SolutionToProfessionCreateArgs} args - Arguments to create a SolutionToProfession.
     * @example
     * // Create one SolutionToProfession
     * const SolutionToProfession = await prisma.solutionToProfession.create({
     *   data: {
     *     // ... data to create a SolutionToProfession
     *   }
     * })
     * 
     */
    create<T extends SolutionToProfessionCreateArgs>(args: SelectSubset<T, SolutionToProfessionCreateArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolutionToProfessions.
     * @param {SolutionToProfessionCreateManyArgs} args - Arguments to create many SolutionToProfessions.
     * @example
     * // Create many SolutionToProfessions
     * const solutionToProfession = await prisma.solutionToProfession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolutionToProfessionCreateManyArgs>(args?: SelectSubset<T, SolutionToProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolutionToProfessions and returns the data saved in the database.
     * @param {SolutionToProfessionCreateManyAndReturnArgs} args - Arguments to create many SolutionToProfessions.
     * @example
     * // Create many SolutionToProfessions
     * const solutionToProfession = await prisma.solutionToProfession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolutionToProfessions and only return the `professionId`
     * const solutionToProfessionWithProfessionIdOnly = await prisma.solutionToProfession.createManyAndReturn({
     *   select: { professionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolutionToProfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SolutionToProfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolutionToProfession.
     * @param {SolutionToProfessionDeleteArgs} args - Arguments to delete one SolutionToProfession.
     * @example
     * // Delete one SolutionToProfession
     * const SolutionToProfession = await prisma.solutionToProfession.delete({
     *   where: {
     *     // ... filter to delete one SolutionToProfession
     *   }
     * })
     * 
     */
    delete<T extends SolutionToProfessionDeleteArgs>(args: SelectSubset<T, SolutionToProfessionDeleteArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolutionToProfession.
     * @param {SolutionToProfessionUpdateArgs} args - Arguments to update one SolutionToProfession.
     * @example
     * // Update one SolutionToProfession
     * const solutionToProfession = await prisma.solutionToProfession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolutionToProfessionUpdateArgs>(args: SelectSubset<T, SolutionToProfessionUpdateArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolutionToProfessions.
     * @param {SolutionToProfessionDeleteManyArgs} args - Arguments to filter SolutionToProfessions to delete.
     * @example
     * // Delete a few SolutionToProfessions
     * const { count } = await prisma.solutionToProfession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolutionToProfessionDeleteManyArgs>(args?: SelectSubset<T, SolutionToProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolutionToProfessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionToProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolutionToProfessions
     * const solutionToProfession = await prisma.solutionToProfession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolutionToProfessionUpdateManyArgs>(args: SelectSubset<T, SolutionToProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolutionToProfessions and returns the data updated in the database.
     * @param {SolutionToProfessionUpdateManyAndReturnArgs} args - Arguments to update many SolutionToProfessions.
     * @example
     * // Update many SolutionToProfessions
     * const solutionToProfession = await prisma.solutionToProfession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolutionToProfessions and only return the `professionId`
     * const solutionToProfessionWithProfessionIdOnly = await prisma.solutionToProfession.updateManyAndReturn({
     *   select: { professionId: true },
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
    updateManyAndReturn<T extends SolutionToProfessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SolutionToProfessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolutionToProfession.
     * @param {SolutionToProfessionUpsertArgs} args - Arguments to update or create a SolutionToProfession.
     * @example
     * // Update or create a SolutionToProfession
     * const solutionToProfession = await prisma.solutionToProfession.upsert({
     *   create: {
     *     // ... data to create a SolutionToProfession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolutionToProfession we want to update
     *   }
     * })
     */
    upsert<T extends SolutionToProfessionUpsertArgs>(args: SelectSubset<T, SolutionToProfessionUpsertArgs<ExtArgs>>): Prisma__SolutionToProfessionClient<$Result.GetResult<Prisma.$SolutionToProfessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolutionToProfessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionToProfessionCountArgs} args - Arguments to filter SolutionToProfessions to count.
     * @example
     * // Count the number of SolutionToProfessions
     * const count = await prisma.solutionToProfession.count({
     *   where: {
     *     // ... the filter for the SolutionToProfessions we want to count
     *   }
     * })
    **/
    count<T extends SolutionToProfessionCountArgs>(
      args?: Subset<T, SolutionToProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolutionToProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolutionToProfession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionToProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolutionToProfessionAggregateArgs>(args: Subset<T, SolutionToProfessionAggregateArgs>): Prisma.PrismaPromise<GetSolutionToProfessionAggregateType<T>>

    /**
     * Group by SolutionToProfession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionToProfessionGroupByArgs} args - Group by arguments.
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
      T extends SolutionToProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolutionToProfessionGroupByArgs['orderBy'] }
        : { orderBy?: SolutionToProfessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolutionToProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolutionToProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolutionToProfession model
   */
  readonly fields: SolutionToProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolutionToProfession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolutionToProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession<T extends ProfessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionDefaultArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    solution<T extends SolutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolutionDefaultArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SolutionToProfession model
   */
  interface SolutionToProfessionFieldRefs {
    readonly professionId: FieldRef<"SolutionToProfession", 'String'>
    readonly solutionId: FieldRef<"SolutionToProfession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SolutionToProfession findUnique
   */
  export type SolutionToProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * Filter, which SolutionToProfession to fetch.
     */
    where: SolutionToProfessionWhereUniqueInput
  }

  /**
   * SolutionToProfession findUniqueOrThrow
   */
  export type SolutionToProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * Filter, which SolutionToProfession to fetch.
     */
    where: SolutionToProfessionWhereUniqueInput
  }

  /**
   * SolutionToProfession findFirst
   */
  export type SolutionToProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * Filter, which SolutionToProfession to fetch.
     */
    where?: SolutionToProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionToProfessions to fetch.
     */
    orderBy?: SolutionToProfessionOrderByWithRelationInput | SolutionToProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolutionToProfessions.
     */
    cursor?: SolutionToProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionToProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionToProfessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionToProfessions.
     */
    distinct?: SolutionToProfessionScalarFieldEnum | SolutionToProfessionScalarFieldEnum[]
  }

  /**
   * SolutionToProfession findFirstOrThrow
   */
  export type SolutionToProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * Filter, which SolutionToProfession to fetch.
     */
    where?: SolutionToProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionToProfessions to fetch.
     */
    orderBy?: SolutionToProfessionOrderByWithRelationInput | SolutionToProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolutionToProfessions.
     */
    cursor?: SolutionToProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionToProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionToProfessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionToProfessions.
     */
    distinct?: SolutionToProfessionScalarFieldEnum | SolutionToProfessionScalarFieldEnum[]
  }

  /**
   * SolutionToProfession findMany
   */
  export type SolutionToProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * Filter, which SolutionToProfessions to fetch.
     */
    where?: SolutionToProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionToProfessions to fetch.
     */
    orderBy?: SolutionToProfessionOrderByWithRelationInput | SolutionToProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolutionToProfessions.
     */
    cursor?: SolutionToProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionToProfessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionToProfessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionToProfessions.
     */
    distinct?: SolutionToProfessionScalarFieldEnum | SolutionToProfessionScalarFieldEnum[]
  }

  /**
   * SolutionToProfession create
   */
  export type SolutionToProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a SolutionToProfession.
     */
    data: XOR<SolutionToProfessionCreateInput, SolutionToProfessionUncheckedCreateInput>
  }

  /**
   * SolutionToProfession createMany
   */
  export type SolutionToProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolutionToProfessions.
     */
    data: SolutionToProfessionCreateManyInput | SolutionToProfessionCreateManyInput[]
  }

  /**
   * SolutionToProfession createManyAndReturn
   */
  export type SolutionToProfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * The data used to create many SolutionToProfessions.
     */
    data: SolutionToProfessionCreateManyInput | SolutionToProfessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolutionToProfession update
   */
  export type SolutionToProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a SolutionToProfession.
     */
    data: XOR<SolutionToProfessionUpdateInput, SolutionToProfessionUncheckedUpdateInput>
    /**
     * Choose, which SolutionToProfession to update.
     */
    where: SolutionToProfessionWhereUniqueInput
  }

  /**
   * SolutionToProfession updateMany
   */
  export type SolutionToProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolutionToProfessions.
     */
    data: XOR<SolutionToProfessionUpdateManyMutationInput, SolutionToProfessionUncheckedUpdateManyInput>
    /**
     * Filter which SolutionToProfessions to update
     */
    where?: SolutionToProfessionWhereInput
    /**
     * Limit how many SolutionToProfessions to update.
     */
    limit?: number
  }

  /**
   * SolutionToProfession updateManyAndReturn
   */
  export type SolutionToProfessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * The data used to update SolutionToProfessions.
     */
    data: XOR<SolutionToProfessionUpdateManyMutationInput, SolutionToProfessionUncheckedUpdateManyInput>
    /**
     * Filter which SolutionToProfessions to update
     */
    where?: SolutionToProfessionWhereInput
    /**
     * Limit how many SolutionToProfessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SolutionToProfession upsert
   */
  export type SolutionToProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the SolutionToProfession to update in case it exists.
     */
    where: SolutionToProfessionWhereUniqueInput
    /**
     * In case the SolutionToProfession found by the `where` argument doesn't exist, create a new SolutionToProfession with this data.
     */
    create: XOR<SolutionToProfessionCreateInput, SolutionToProfessionUncheckedCreateInput>
    /**
     * In case the SolutionToProfession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolutionToProfessionUpdateInput, SolutionToProfessionUncheckedUpdateInput>
  }

  /**
   * SolutionToProfession delete
   */
  export type SolutionToProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
    /**
     * Filter which SolutionToProfession to delete.
     */
    where: SolutionToProfessionWhereUniqueInput
  }

  /**
   * SolutionToProfession deleteMany
   */
  export type SolutionToProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolutionToProfessions to delete
     */
    where?: SolutionToProfessionWhereInput
    /**
     * Limit how many SolutionToProfessions to delete.
     */
    limit?: number
  }

  /**
   * SolutionToProfession without action
   */
  export type SolutionToProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionToProfession
     */
    select?: SolutionToProfessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionToProfession
     */
    omit?: SolutionToProfessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolutionToProfessionInclude<ExtArgs> | null
  }


  /**
   * Model QuizQuestion
   */

  export type AggregateQuizQuestion = {
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  export type QuizQuestionAvgAggregateOutputType = {
    step: number | null
  }

  export type QuizQuestionSumAggregateOutputType = {
    step: number | null
  }

  export type QuizQuestionMinAggregateOutputType = {
    id: string | null
    step: number | null
    question: string | null
    helpText: string | null
  }

  export type QuizQuestionMaxAggregateOutputType = {
    id: string | null
    step: number | null
    question: string | null
    helpText: string | null
  }

  export type QuizQuestionCountAggregateOutputType = {
    id: number
    step: number
    question: number
    helpText: number
    _all: number
  }


  export type QuizQuestionAvgAggregateInputType = {
    step?: true
  }

  export type QuizQuestionSumAggregateInputType = {
    step?: true
  }

  export type QuizQuestionMinAggregateInputType = {
    id?: true
    step?: true
    question?: true
    helpText?: true
  }

  export type QuizQuestionMaxAggregateInputType = {
    id?: true
    step?: true
    question?: true
    helpText?: true
  }

  export type QuizQuestionCountAggregateInputType = {
    id?: true
    step?: true
    question?: true
    helpText?: true
    _all?: true
  }

  export type QuizQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestion to aggregate.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizQuestions
    **/
    _count?: true | QuizQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type GetQuizQuestionAggregateType<T extends QuizQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizQuestion[P]>
      : GetScalarType<T[P], AggregateQuizQuestion[P]>
  }




  export type QuizQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithAggregationInput | QuizQuestionOrderByWithAggregationInput[]
    by: QuizQuestionScalarFieldEnum[] | QuizQuestionScalarFieldEnum
    having?: QuizQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizQuestionCountAggregateInputType | true
    _avg?: QuizQuestionAvgAggregateInputType
    _sum?: QuizQuestionSumAggregateInputType
    _min?: QuizQuestionMinAggregateInputType
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type QuizQuestionGroupByOutputType = {
    id: string
    step: number
    question: string
    helpText: string | null
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  type GetQuizQuestionGroupByPayload<T extends QuizQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuizQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    step?: boolean
    question?: boolean
    helpText?: boolean
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    step?: boolean
    question?: boolean
    helpText?: boolean
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    step?: boolean
    question?: boolean
    helpText?: boolean
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectScalar = {
    id?: boolean
    step?: boolean
    question?: boolean
    helpText?: boolean
  }

  export type QuizQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "step" | "question" | "helpText", ExtArgs["result"]["quizQuestion"]>
  export type QuizQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuizQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuizQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizQuestion"
    objects: {
      options: Prisma.$QuizOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      step: number
      question: string
      helpText: string | null
    }, ExtArgs["result"]["quizQuestion"]>
    composites: {}
  }

  type QuizQuestionGetPayload<S extends boolean | null | undefined | QuizQuestionDefaultArgs> = $Result.GetResult<Prisma.$QuizQuestionPayload, S>

  type QuizQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizQuestionCountAggregateInputType | true
    }

  export interface QuizQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestion'], meta: { name: 'QuizQuestion' } }
    /**
     * Find zero or one QuizQuestion that matches the filter.
     * @param {QuizQuestionFindUniqueArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizQuestionFindUniqueArgs>(args: SelectSubset<T, QuizQuestionFindUniqueArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizQuestionFindUniqueOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizQuestionFindFirstArgs>(args?: SelectSubset<T, QuizQuestionFindFirstArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany()
     * 
     * // Get first 10 QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizQuestionFindManyArgs>(args?: SelectSubset<T, QuizQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizQuestion.
     * @param {QuizQuestionCreateArgs} args - Arguments to create a QuizQuestion.
     * @example
     * // Create one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.create({
     *   data: {
     *     // ... data to create a QuizQuestion
     *   }
     * })
     * 
     */
    create<T extends QuizQuestionCreateArgs>(args: SelectSubset<T, QuizQuestionCreateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizQuestions.
     * @param {QuizQuestionCreateManyArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizQuestionCreateManyArgs>(args?: SelectSubset<T, QuizQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizQuestions and returns the data saved in the database.
     * @param {QuizQuestionCreateManyAndReturnArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizQuestion.
     * @param {QuizQuestionDeleteArgs} args - Arguments to delete one QuizQuestion.
     * @example
     * // Delete one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.delete({
     *   where: {
     *     // ... filter to delete one QuizQuestion
     *   }
     * })
     * 
     */
    delete<T extends QuizQuestionDeleteArgs>(args: SelectSubset<T, QuizQuestionDeleteArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizQuestion.
     * @param {QuizQuestionUpdateArgs} args - Arguments to update one QuizQuestion.
     * @example
     * // Update one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizQuestionUpdateArgs>(args: SelectSubset<T, QuizQuestionUpdateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizQuestions.
     * @param {QuizQuestionDeleteManyArgs} args - Arguments to filter QuizQuestions to delete.
     * @example
     * // Delete a few QuizQuestions
     * const { count } = await prisma.quizQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizQuestionDeleteManyArgs>(args?: SelectSubset<T, QuizQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizQuestionUpdateManyArgs>(args: SelectSubset<T, QuizQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions and returns the data updated in the database.
     * @param {QuizQuestionUpdateManyAndReturnArgs} args - Arguments to update many QuizQuestions.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizQuestion.
     * @param {QuizQuestionUpsertArgs} args - Arguments to update or create a QuizQuestion.
     * @example
     * // Update or create a QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.upsert({
     *   create: {
     *     // ... data to create a QuizQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizQuestion we want to update
     *   }
     * })
     */
    upsert<T extends QuizQuestionUpsertArgs>(args: SelectSubset<T, QuizQuestionUpsertArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionCountArgs} args - Arguments to filter QuizQuestions to count.
     * @example
     * // Count the number of QuizQuestions
     * const count = await prisma.quizQuestion.count({
     *   where: {
     *     // ... the filter for the QuizQuestions we want to count
     *   }
     * })
    **/
    count<T extends QuizQuestionCountArgs>(
      args?: Subset<T, QuizQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizQuestionAggregateArgs>(args: Subset<T, QuizQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionAggregateType<T>>

    /**
     * Group by QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionGroupByArgs} args - Group by arguments.
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
      T extends QuizQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizQuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuizQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizQuestion model
   */
  readonly fields: QuizQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends QuizQuestion$optionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizQuestion model
   */
  interface QuizQuestionFieldRefs {
    readonly id: FieldRef<"QuizQuestion", 'String'>
    readonly step: FieldRef<"QuizQuestion", 'Int'>
    readonly question: FieldRef<"QuizQuestion", 'String'>
    readonly helpText: FieldRef<"QuizQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizQuestion findUnique
   */
  export type QuizQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findUniqueOrThrow
   */
  export type QuizQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findFirst
   */
  export type QuizQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findFirstOrThrow
   */
  export type QuizQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findMany
   */
  export type QuizQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestions to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion create
   */
  export type QuizQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizQuestion.
     */
    data: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
  }

  /**
   * QuizQuestion createMany
   */
  export type QuizQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
  }

  /**
   * QuizQuestion createManyAndReturn
   */
  export type QuizQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
  }

  /**
   * QuizQuestion update
   */
  export type QuizQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizQuestion.
     */
    data: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
    /**
     * Choose, which QuizQuestion to update.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion updateMany
   */
  export type QuizQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
  }

  /**
   * QuizQuestion updateManyAndReturn
   */
  export type QuizQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
  }

  /**
   * QuizQuestion upsert
   */
  export type QuizQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizQuestion to update in case it exists.
     */
    where: QuizQuestionWhereUniqueInput
    /**
     * In case the QuizQuestion found by the `where` argument doesn't exist, create a new QuizQuestion with this data.
     */
    create: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
    /**
     * In case the QuizQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
  }

  /**
   * QuizQuestion delete
   */
  export type QuizQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter which QuizQuestion to delete.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion deleteMany
   */
  export type QuizQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestions to delete
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to delete.
     */
    limit?: number
  }

  /**
   * QuizQuestion.options
   */
  export type QuizQuestion$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    where?: QuizOptionWhereInput
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    cursor?: QuizOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizQuestion without action
   */
  export type QuizQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuizOption
   */

  export type AggregateQuizOption = {
    _count: QuizOptionCountAggregateOutputType | null
    _min: QuizOptionMinAggregateOutputType | null
    _max: QuizOptionMaxAggregateOutputType | null
  }

  export type QuizOptionMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    value: string | null
    nextStepAction: string | null
  }

  export type QuizOptionMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    value: string | null
    nextStepAction: string | null
  }

  export type QuizOptionCountAggregateOutputType = {
    id: number
    questionId: number
    text: number
    value: number
    nextStepAction: number
    _all: number
  }


  export type QuizOptionMinAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    value?: true
    nextStepAction?: true
  }

  export type QuizOptionMaxAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    value?: true
    nextStepAction?: true
  }

  export type QuizOptionCountAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    value?: true
    nextStepAction?: true
    _all?: true
  }

  export type QuizOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizOption to aggregate.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizOptions
    **/
    _count?: true | QuizOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizOptionMaxAggregateInputType
  }

  export type GetQuizOptionAggregateType<T extends QuizOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizOption[P]>
      : GetScalarType<T[P], AggregateQuizOption[P]>
  }




  export type QuizOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizOptionWhereInput
    orderBy?: QuizOptionOrderByWithAggregationInput | QuizOptionOrderByWithAggregationInput[]
    by: QuizOptionScalarFieldEnum[] | QuizOptionScalarFieldEnum
    having?: QuizOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizOptionCountAggregateInputType | true
    _min?: QuizOptionMinAggregateInputType
    _max?: QuizOptionMaxAggregateInputType
  }

  export type QuizOptionGroupByOutputType = {
    id: string
    questionId: string
    text: string
    value: string
    nextStepAction: string
    _count: QuizOptionCountAggregateOutputType | null
    _min: QuizOptionMinAggregateOutputType | null
    _max: QuizOptionMaxAggregateOutputType | null
  }

  type GetQuizOptionGroupByPayload<T extends QuizOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizOptionGroupByOutputType[P]>
        }
      >
    >


  export type QuizOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    value?: boolean
    nextStepAction?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizOption"]>

  export type QuizOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    value?: boolean
    nextStepAction?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizOption"]>

  export type QuizOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    value?: boolean
    nextStepAction?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizOption"]>

  export type QuizOptionSelectScalar = {
    id?: boolean
    questionId?: boolean
    text?: boolean
    value?: boolean
    nextStepAction?: boolean
  }

  export type QuizOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "text" | "value" | "nextStepAction", ExtArgs["result"]["quizOption"]>
  export type QuizOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }
  export type QuizOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }
  export type QuizOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }

  export type $QuizOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizOption"
    objects: {
      question: Prisma.$QuizQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      text: string
      value: string
      nextStepAction: string
    }, ExtArgs["result"]["quizOption"]>
    composites: {}
  }

  type QuizOptionGetPayload<S extends boolean | null | undefined | QuizOptionDefaultArgs> = $Result.GetResult<Prisma.$QuizOptionPayload, S>

  type QuizOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizOptionCountAggregateInputType | true
    }

  export interface QuizOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizOption'], meta: { name: 'QuizOption' } }
    /**
     * Find zero or one QuizOption that matches the filter.
     * @param {QuizOptionFindUniqueArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizOptionFindUniqueArgs>(args: SelectSubset<T, QuizOptionFindUniqueArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizOptionFindUniqueOrThrowArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindFirstArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizOptionFindFirstArgs>(args?: SelectSubset<T, QuizOptionFindFirstArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindFirstOrThrowArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizOptions
     * const quizOptions = await prisma.quizOption.findMany()
     * 
     * // Get first 10 QuizOptions
     * const quizOptions = await prisma.quizOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizOptionWithIdOnly = await prisma.quizOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizOptionFindManyArgs>(args?: SelectSubset<T, QuizOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizOption.
     * @param {QuizOptionCreateArgs} args - Arguments to create a QuizOption.
     * @example
     * // Create one QuizOption
     * const QuizOption = await prisma.quizOption.create({
     *   data: {
     *     // ... data to create a QuizOption
     *   }
     * })
     * 
     */
    create<T extends QuizOptionCreateArgs>(args: SelectSubset<T, QuizOptionCreateArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizOptions.
     * @param {QuizOptionCreateManyArgs} args - Arguments to create many QuizOptions.
     * @example
     * // Create many QuizOptions
     * const quizOption = await prisma.quizOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizOptionCreateManyArgs>(args?: SelectSubset<T, QuizOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizOptions and returns the data saved in the database.
     * @param {QuizOptionCreateManyAndReturnArgs} args - Arguments to create many QuizOptions.
     * @example
     * // Create many QuizOptions
     * const quizOption = await prisma.quizOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizOptions and only return the `id`
     * const quizOptionWithIdOnly = await prisma.quizOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizOption.
     * @param {QuizOptionDeleteArgs} args - Arguments to delete one QuizOption.
     * @example
     * // Delete one QuizOption
     * const QuizOption = await prisma.quizOption.delete({
     *   where: {
     *     // ... filter to delete one QuizOption
     *   }
     * })
     * 
     */
    delete<T extends QuizOptionDeleteArgs>(args: SelectSubset<T, QuizOptionDeleteArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizOption.
     * @param {QuizOptionUpdateArgs} args - Arguments to update one QuizOption.
     * @example
     * // Update one QuizOption
     * const quizOption = await prisma.quizOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizOptionUpdateArgs>(args: SelectSubset<T, QuizOptionUpdateArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizOptions.
     * @param {QuizOptionDeleteManyArgs} args - Arguments to filter QuizOptions to delete.
     * @example
     * // Delete a few QuizOptions
     * const { count } = await prisma.quizOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizOptionDeleteManyArgs>(args?: SelectSubset<T, QuizOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizOptions
     * const quizOption = await prisma.quizOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizOptionUpdateManyArgs>(args: SelectSubset<T, QuizOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizOptions and returns the data updated in the database.
     * @param {QuizOptionUpdateManyAndReturnArgs} args - Arguments to update many QuizOptions.
     * @example
     * // Update many QuizOptions
     * const quizOption = await prisma.quizOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizOptions and only return the `id`
     * const quizOptionWithIdOnly = await prisma.quizOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizOption.
     * @param {QuizOptionUpsertArgs} args - Arguments to update or create a QuizOption.
     * @example
     * // Update or create a QuizOption
     * const quizOption = await prisma.quizOption.upsert({
     *   create: {
     *     // ... data to create a QuizOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizOption we want to update
     *   }
     * })
     */
    upsert<T extends QuizOptionUpsertArgs>(args: SelectSubset<T, QuizOptionUpsertArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionCountArgs} args - Arguments to filter QuizOptions to count.
     * @example
     * // Count the number of QuizOptions
     * const count = await prisma.quizOption.count({
     *   where: {
     *     // ... the filter for the QuizOptions we want to count
     *   }
     * })
    **/
    count<T extends QuizOptionCountArgs>(
      args?: Subset<T, QuizOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizOptionAggregateArgs>(args: Subset<T, QuizOptionAggregateArgs>): Prisma.PrismaPromise<GetQuizOptionAggregateType<T>>

    /**
     * Group by QuizOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionGroupByArgs} args - Group by arguments.
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
      T extends QuizOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizOptionGroupByArgs['orderBy'] }
        : { orderBy?: QuizOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizOption model
   */
  readonly fields: QuizOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestionDefaultArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizOption model
   */
  interface QuizOptionFieldRefs {
    readonly id: FieldRef<"QuizOption", 'String'>
    readonly questionId: FieldRef<"QuizOption", 'String'>
    readonly text: FieldRef<"QuizOption", 'String'>
    readonly value: FieldRef<"QuizOption", 'String'>
    readonly nextStepAction: FieldRef<"QuizOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuizOption findUnique
   */
  export type QuizOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption findUniqueOrThrow
   */
  export type QuizOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption findFirst
   */
  export type QuizOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption findFirstOrThrow
   */
  export type QuizOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption findMany
   */
  export type QuizOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOptions to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption create
   */
  export type QuizOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizOption.
     */
    data: XOR<QuizOptionCreateInput, QuizOptionUncheckedCreateInput>
  }

  /**
   * QuizOption createMany
   */
  export type QuizOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizOptions.
     */
    data: QuizOptionCreateManyInput | QuizOptionCreateManyInput[]
  }

  /**
   * QuizOption createManyAndReturn
   */
  export type QuizOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizOptions.
     */
    data: QuizOptionCreateManyInput | QuizOptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizOption update
   */
  export type QuizOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizOption.
     */
    data: XOR<QuizOptionUpdateInput, QuizOptionUncheckedUpdateInput>
    /**
     * Choose, which QuizOption to update.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption updateMany
   */
  export type QuizOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizOptions.
     */
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuizOptions to update
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to update.
     */
    limit?: number
  }

  /**
   * QuizOption updateManyAndReturn
   */
  export type QuizOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * The data used to update QuizOptions.
     */
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuizOptions to update
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizOption upsert
   */
  export type QuizOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizOption to update in case it exists.
     */
    where: QuizOptionWhereUniqueInput
    /**
     * In case the QuizOption found by the `where` argument doesn't exist, create a new QuizOption with this data.
     */
    create: XOR<QuizOptionCreateInput, QuizOptionUncheckedCreateInput>
    /**
     * In case the QuizOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizOptionUpdateInput, QuizOptionUncheckedUpdateInput>
  }

  /**
   * QuizOption delete
   */
  export type QuizOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter which QuizOption to delete.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption deleteMany
   */
  export type QuizOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizOptions to delete
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to delete.
     */
    limit?: number
  }

  /**
   * QuizOption without action
   */
  export type QuizOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
  }


  /**
   * Model QuizResult
   */

  export type AggregateQuizResult = {
    _count: QuizResultCountAggregateOutputType | null
    _min: QuizResultMinAggregateOutputType | null
    _max: QuizResultMaxAggregateOutputType | null
  }

  export type QuizResultMinAggregateOutputType = {
    id: string | null
    userEmail: string | null
    userProfile: string | null
    recommendedId: string | null
    createdAt: Date | null
  }

  export type QuizResultMaxAggregateOutputType = {
    id: string | null
    userEmail: string | null
    userProfile: string | null
    recommendedId: string | null
    createdAt: Date | null
  }

  export type QuizResultCountAggregateOutputType = {
    id: number
    userEmail: number
    userProfile: number
    recommendedId: number
    createdAt: number
    _all: number
  }


  export type QuizResultMinAggregateInputType = {
    id?: true
    userEmail?: true
    userProfile?: true
    recommendedId?: true
    createdAt?: true
  }

  export type QuizResultMaxAggregateInputType = {
    id?: true
    userEmail?: true
    userProfile?: true
    recommendedId?: true
    createdAt?: true
  }

  export type QuizResultCountAggregateInputType = {
    id?: true
    userEmail?: true
    userProfile?: true
    recommendedId?: true
    createdAt?: true
    _all?: true
  }

  export type QuizResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResult to aggregate.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizResults
    **/
    _count?: true | QuizResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizResultMaxAggregateInputType
  }

  export type GetQuizResultAggregateType<T extends QuizResultAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizResult[P]>
      : GetScalarType<T[P], AggregateQuizResult[P]>
  }




  export type QuizResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizResultWhereInput
    orderBy?: QuizResultOrderByWithAggregationInput | QuizResultOrderByWithAggregationInput[]
    by: QuizResultScalarFieldEnum[] | QuizResultScalarFieldEnum
    having?: QuizResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizResultCountAggregateInputType | true
    _min?: QuizResultMinAggregateInputType
    _max?: QuizResultMaxAggregateInputType
  }

  export type QuizResultGroupByOutputType = {
    id: string
    userEmail: string
    userProfile: string
    recommendedId: string
    createdAt: Date
    _count: QuizResultCountAggregateOutputType | null
    _min: QuizResultMinAggregateOutputType | null
    _max: QuizResultMaxAggregateOutputType | null
  }

  type GetQuizResultGroupByPayload<T extends QuizResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizResultGroupByOutputType[P]>
            : GetScalarType<T[P], QuizResultGroupByOutputType[P]>
        }
      >
    >


  export type QuizResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userEmail?: boolean
    userProfile?: boolean
    recommendedId?: boolean
    createdAt?: boolean
    recommended?: boolean | SolutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResult"]>

  export type QuizResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userEmail?: boolean
    userProfile?: boolean
    recommendedId?: boolean
    createdAt?: boolean
    recommended?: boolean | SolutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResult"]>

  export type QuizResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userEmail?: boolean
    userProfile?: boolean
    recommendedId?: boolean
    createdAt?: boolean
    recommended?: boolean | SolutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizResult"]>

  export type QuizResultSelectScalar = {
    id?: boolean
    userEmail?: boolean
    userProfile?: boolean
    recommendedId?: boolean
    createdAt?: boolean
  }

  export type QuizResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userEmail" | "userProfile" | "recommendedId" | "createdAt", ExtArgs["result"]["quizResult"]>
  export type QuizResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommended?: boolean | SolutionDefaultArgs<ExtArgs>
  }
  export type QuizResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommended?: boolean | SolutionDefaultArgs<ExtArgs>
  }
  export type QuizResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommended?: boolean | SolutionDefaultArgs<ExtArgs>
  }

  export type $QuizResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizResult"
    objects: {
      recommended: Prisma.$SolutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userEmail: string
      userProfile: string
      recommendedId: string
      createdAt: Date
    }, ExtArgs["result"]["quizResult"]>
    composites: {}
  }

  type QuizResultGetPayload<S extends boolean | null | undefined | QuizResultDefaultArgs> = $Result.GetResult<Prisma.$QuizResultPayload, S>

  type QuizResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizResultCountAggregateInputType | true
    }

  export interface QuizResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizResult'], meta: { name: 'QuizResult' } }
    /**
     * Find zero or one QuizResult that matches the filter.
     * @param {QuizResultFindUniqueArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizResultFindUniqueArgs>(args: SelectSubset<T, QuizResultFindUniqueArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizResultFindUniqueOrThrowArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizResultFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindFirstArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizResultFindFirstArgs>(args?: SelectSubset<T, QuizResultFindFirstArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindFirstOrThrowArgs} args - Arguments to find a QuizResult
     * @example
     * // Get one QuizResult
     * const quizResult = await prisma.quizResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizResultFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizResults
     * const quizResults = await prisma.quizResult.findMany()
     * 
     * // Get first 10 QuizResults
     * const quizResults = await prisma.quizResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizResultWithIdOnly = await prisma.quizResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizResultFindManyArgs>(args?: SelectSubset<T, QuizResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizResult.
     * @param {QuizResultCreateArgs} args - Arguments to create a QuizResult.
     * @example
     * // Create one QuizResult
     * const QuizResult = await prisma.quizResult.create({
     *   data: {
     *     // ... data to create a QuizResult
     *   }
     * })
     * 
     */
    create<T extends QuizResultCreateArgs>(args: SelectSubset<T, QuizResultCreateArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizResults.
     * @param {QuizResultCreateManyArgs} args - Arguments to create many QuizResults.
     * @example
     * // Create many QuizResults
     * const quizResult = await prisma.quizResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizResultCreateManyArgs>(args?: SelectSubset<T, QuizResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizResults and returns the data saved in the database.
     * @param {QuizResultCreateManyAndReturnArgs} args - Arguments to create many QuizResults.
     * @example
     * // Create many QuizResults
     * const quizResult = await prisma.quizResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizResults and only return the `id`
     * const quizResultWithIdOnly = await prisma.quizResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizResultCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizResult.
     * @param {QuizResultDeleteArgs} args - Arguments to delete one QuizResult.
     * @example
     * // Delete one QuizResult
     * const QuizResult = await prisma.quizResult.delete({
     *   where: {
     *     // ... filter to delete one QuizResult
     *   }
     * })
     * 
     */
    delete<T extends QuizResultDeleteArgs>(args: SelectSubset<T, QuizResultDeleteArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizResult.
     * @param {QuizResultUpdateArgs} args - Arguments to update one QuizResult.
     * @example
     * // Update one QuizResult
     * const quizResult = await prisma.quizResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizResultUpdateArgs>(args: SelectSubset<T, QuizResultUpdateArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizResults.
     * @param {QuizResultDeleteManyArgs} args - Arguments to filter QuizResults to delete.
     * @example
     * // Delete a few QuizResults
     * const { count } = await prisma.quizResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizResultDeleteManyArgs>(args?: SelectSubset<T, QuizResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizResults
     * const quizResult = await prisma.quizResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizResultUpdateManyArgs>(args: SelectSubset<T, QuizResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizResults and returns the data updated in the database.
     * @param {QuizResultUpdateManyAndReturnArgs} args - Arguments to update many QuizResults.
     * @example
     * // Update many QuizResults
     * const quizResult = await prisma.quizResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizResults and only return the `id`
     * const quizResultWithIdOnly = await prisma.quizResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuizResultUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizResult.
     * @param {QuizResultUpsertArgs} args - Arguments to update or create a QuizResult.
     * @example
     * // Update or create a QuizResult
     * const quizResult = await prisma.quizResult.upsert({
     *   create: {
     *     // ... data to create a QuizResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizResult we want to update
     *   }
     * })
     */
    upsert<T extends QuizResultUpsertArgs>(args: SelectSubset<T, QuizResultUpsertArgs<ExtArgs>>): Prisma__QuizResultClient<$Result.GetResult<Prisma.$QuizResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultCountArgs} args - Arguments to filter QuizResults to count.
     * @example
     * // Count the number of QuizResults
     * const count = await prisma.quizResult.count({
     *   where: {
     *     // ... the filter for the QuizResults we want to count
     *   }
     * })
    **/
    count<T extends QuizResultCountArgs>(
      args?: Subset<T, QuizResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizResultAggregateArgs>(args: Subset<T, QuizResultAggregateArgs>): Prisma.PrismaPromise<GetQuizResultAggregateType<T>>

    /**
     * Group by QuizResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizResultGroupByArgs} args - Group by arguments.
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
      T extends QuizResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizResultGroupByArgs['orderBy'] }
        : { orderBy?: QuizResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizResult model
   */
  readonly fields: QuizResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recommended<T extends SolutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SolutionDefaultArgs<ExtArgs>>): Prisma__SolutionClient<$Result.GetResult<Prisma.$SolutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizResult model
   */
  interface QuizResultFieldRefs {
    readonly id: FieldRef<"QuizResult", 'String'>
    readonly userEmail: FieldRef<"QuizResult", 'String'>
    readonly userProfile: FieldRef<"QuizResult", 'String'>
    readonly recommendedId: FieldRef<"QuizResult", 'String'>
    readonly createdAt: FieldRef<"QuizResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizResult findUnique
   */
  export type QuizResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult findUniqueOrThrow
   */
  export type QuizResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult findFirst
   */
  export type QuizResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResults.
     */
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * QuizResult findFirstOrThrow
   */
  export type QuizResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResult to fetch.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResults.
     */
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * QuizResult findMany
   */
  export type QuizResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizResults to fetch.
     */
    where?: QuizResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizResults to fetch.
     */
    orderBy?: QuizResultOrderByWithRelationInput | QuizResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizResults.
     */
    cursor?: QuizResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizResults.
     */
    distinct?: QuizResultScalarFieldEnum | QuizResultScalarFieldEnum[]
  }

  /**
   * QuizResult create
   */
  export type QuizResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizResult.
     */
    data: XOR<QuizResultCreateInput, QuizResultUncheckedCreateInput>
  }

  /**
   * QuizResult createMany
   */
  export type QuizResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizResults.
     */
    data: QuizResultCreateManyInput | QuizResultCreateManyInput[]
  }

  /**
   * QuizResult createManyAndReturn
   */
  export type QuizResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * The data used to create many QuizResults.
     */
    data: QuizResultCreateManyInput | QuizResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResult update
   */
  export type QuizResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizResult.
     */
    data: XOR<QuizResultUpdateInput, QuizResultUncheckedUpdateInput>
    /**
     * Choose, which QuizResult to update.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult updateMany
   */
  export type QuizResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizResults.
     */
    data: XOR<QuizResultUpdateManyMutationInput, QuizResultUncheckedUpdateManyInput>
    /**
     * Filter which QuizResults to update
     */
    where?: QuizResultWhereInput
    /**
     * Limit how many QuizResults to update.
     */
    limit?: number
  }

  /**
   * QuizResult updateManyAndReturn
   */
  export type QuizResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * The data used to update QuizResults.
     */
    data: XOR<QuizResultUpdateManyMutationInput, QuizResultUncheckedUpdateManyInput>
    /**
     * Filter which QuizResults to update
     */
    where?: QuizResultWhereInput
    /**
     * Limit how many QuizResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizResult upsert
   */
  export type QuizResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizResult to update in case it exists.
     */
    where: QuizResultWhereUniqueInput
    /**
     * In case the QuizResult found by the `where` argument doesn't exist, create a new QuizResult with this data.
     */
    create: XOR<QuizResultCreateInput, QuizResultUncheckedCreateInput>
    /**
     * In case the QuizResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizResultUpdateInput, QuizResultUncheckedUpdateInput>
  }

  /**
   * QuizResult delete
   */
  export type QuizResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
    /**
     * Filter which QuizResult to delete.
     */
    where: QuizResultWhereUniqueInput
  }

  /**
   * QuizResult deleteMany
   */
  export type QuizResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizResults to delete
     */
    where?: QuizResultWhereInput
    /**
     * Limit how many QuizResults to delete.
     */
    limit?: number
  }

  /**
   * QuizResult without action
   */
  export type QuizResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizResult
     */
    select?: QuizResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizResult
     */
    omit?: QuizResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizResultInclude<ExtArgs> | null
  }


  /**
   * Model Consultation
   */

  export type AggregateConsultation = {
    _count: ConsultationCountAggregateOutputType | null
    _avg: ConsultationAvgAggregateOutputType | null
    _sum: ConsultationSumAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  export type ConsultationAvgAggregateOutputType = {
    monthlyVolume: number | null
  }

  export type ConsultationSumAggregateOutputType = {
    monthlyVolume: number | null
  }

  export type ConsultationMinAggregateOutputType = {
    id: string | null
    clientEmail: string | null
    legalStatus: string | null
    monthlyVolume: number | null
    currentTools: string | null
    specificNeeds: string | null
    invoiceUrl: string | null
    paymentStatus: string | null
    stripeSessionId: string | null
    aiDraftText: string | null
    isAnswered: boolean | null
    createdAt: Date | null
  }

  export type ConsultationMaxAggregateOutputType = {
    id: string | null
    clientEmail: string | null
    legalStatus: string | null
    monthlyVolume: number | null
    currentTools: string | null
    specificNeeds: string | null
    invoiceUrl: string | null
    paymentStatus: string | null
    stripeSessionId: string | null
    aiDraftText: string | null
    isAnswered: boolean | null
    createdAt: Date | null
  }

  export type ConsultationCountAggregateOutputType = {
    id: number
    clientEmail: number
    legalStatus: number
    monthlyVolume: number
    currentTools: number
    specificNeeds: number
    invoiceUrl: number
    paymentStatus: number
    stripeSessionId: number
    aiDraftText: number
    isAnswered: number
    createdAt: number
    _all: number
  }


  export type ConsultationAvgAggregateInputType = {
    monthlyVolume?: true
  }

  export type ConsultationSumAggregateInputType = {
    monthlyVolume?: true
  }

  export type ConsultationMinAggregateInputType = {
    id?: true
    clientEmail?: true
    legalStatus?: true
    monthlyVolume?: true
    currentTools?: true
    specificNeeds?: true
    invoiceUrl?: true
    paymentStatus?: true
    stripeSessionId?: true
    aiDraftText?: true
    isAnswered?: true
    createdAt?: true
  }

  export type ConsultationMaxAggregateInputType = {
    id?: true
    clientEmail?: true
    legalStatus?: true
    monthlyVolume?: true
    currentTools?: true
    specificNeeds?: true
    invoiceUrl?: true
    paymentStatus?: true
    stripeSessionId?: true
    aiDraftText?: true
    isAnswered?: true
    createdAt?: true
  }

  export type ConsultationCountAggregateInputType = {
    id?: true
    clientEmail?: true
    legalStatus?: true
    monthlyVolume?: true
    currentTools?: true
    specificNeeds?: true
    invoiceUrl?: true
    paymentStatus?: true
    stripeSessionId?: true
    aiDraftText?: true
    isAnswered?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultation to aggregate.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultations
    **/
    _count?: true | ConsultationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationMaxAggregateInputType
  }

  export type GetConsultationAggregateType<T extends ConsultationAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultation[P]>
      : GetScalarType<T[P], AggregateConsultation[P]>
  }




  export type ConsultationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithAggregationInput | ConsultationOrderByWithAggregationInput[]
    by: ConsultationScalarFieldEnum[] | ConsultationScalarFieldEnum
    having?: ConsultationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationCountAggregateInputType | true
    _avg?: ConsultationAvgAggregateInputType
    _sum?: ConsultationSumAggregateInputType
    _min?: ConsultationMinAggregateInputType
    _max?: ConsultationMaxAggregateInputType
  }

  export type ConsultationGroupByOutputType = {
    id: string
    clientEmail: string
    legalStatus: string
    monthlyVolume: number
    currentTools: string
    specificNeeds: string
    invoiceUrl: string | null
    paymentStatus: string
    stripeSessionId: string | null
    aiDraftText: string | null
    isAnswered: boolean
    createdAt: Date
    _count: ConsultationCountAggregateOutputType | null
    _avg: ConsultationAvgAggregateOutputType | null
    _sum: ConsultationSumAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  type GetConsultationGroupByPayload<T extends ConsultationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientEmail?: boolean
    legalStatus?: boolean
    monthlyVolume?: boolean
    currentTools?: boolean
    specificNeeds?: boolean
    invoiceUrl?: boolean
    paymentStatus?: boolean
    stripeSessionId?: boolean
    aiDraftText?: boolean
    isAnswered?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientEmail?: boolean
    legalStatus?: boolean
    monthlyVolume?: boolean
    currentTools?: boolean
    specificNeeds?: boolean
    invoiceUrl?: boolean
    paymentStatus?: boolean
    stripeSessionId?: boolean
    aiDraftText?: boolean
    isAnswered?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientEmail?: boolean
    legalStatus?: boolean
    monthlyVolume?: boolean
    currentTools?: boolean
    specificNeeds?: boolean
    invoiceUrl?: boolean
    paymentStatus?: boolean
    stripeSessionId?: boolean
    aiDraftText?: boolean
    isAnswered?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectScalar = {
    id?: boolean
    clientEmail?: boolean
    legalStatus?: boolean
    monthlyVolume?: boolean
    currentTools?: boolean
    specificNeeds?: boolean
    invoiceUrl?: boolean
    paymentStatus?: boolean
    stripeSessionId?: boolean
    aiDraftText?: boolean
    isAnswered?: boolean
    createdAt?: boolean
  }

  export type ConsultationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientEmail" | "legalStatus" | "monthlyVolume" | "currentTools" | "specificNeeds" | "invoiceUrl" | "paymentStatus" | "stripeSessionId" | "aiDraftText" | "isAnswered" | "createdAt", ExtArgs["result"]["consultation"]>

  export type $ConsultationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientEmail: string
      legalStatus: string
      monthlyVolume: number
      currentTools: string
      specificNeeds: string
      invoiceUrl: string | null
      paymentStatus: string
      stripeSessionId: string | null
      aiDraftText: string | null
      isAnswered: boolean
      createdAt: Date
    }, ExtArgs["result"]["consultation"]>
    composites: {}
  }

  type ConsultationGetPayload<S extends boolean | null | undefined | ConsultationDefaultArgs> = $Result.GetResult<Prisma.$ConsultationPayload, S>

  type ConsultationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationCountAggregateInputType | true
    }

  export interface ConsultationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultation'], meta: { name: 'Consultation' } }
    /**
     * Find zero or one Consultation that matches the filter.
     * @param {ConsultationFindUniqueArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationFindUniqueArgs>(args: SelectSubset<T, ConsultationFindUniqueArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationFindUniqueOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationFindFirstArgs>(args?: SelectSubset<T, ConsultationFindFirstArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultations
     * const consultations = await prisma.consultation.findMany()
     * 
     * // Get first 10 Consultations
     * const consultations = await prisma.consultation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationWithIdOnly = await prisma.consultation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationFindManyArgs>(args?: SelectSubset<T, ConsultationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultation.
     * @param {ConsultationCreateArgs} args - Arguments to create a Consultation.
     * @example
     * // Create one Consultation
     * const Consultation = await prisma.consultation.create({
     *   data: {
     *     // ... data to create a Consultation
     *   }
     * })
     * 
     */
    create<T extends ConsultationCreateArgs>(args: SelectSubset<T, ConsultationCreateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultations.
     * @param {ConsultationCreateManyArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationCreateManyArgs>(args?: SelectSubset<T, ConsultationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultations and returns the data saved in the database.
     * @param {ConsultationCreateManyAndReturnArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultation.
     * @param {ConsultationDeleteArgs} args - Arguments to delete one Consultation.
     * @example
     * // Delete one Consultation
     * const Consultation = await prisma.consultation.delete({
     *   where: {
     *     // ... filter to delete one Consultation
     *   }
     * })
     * 
     */
    delete<T extends ConsultationDeleteArgs>(args: SelectSubset<T, ConsultationDeleteArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultation.
     * @param {ConsultationUpdateArgs} args - Arguments to update one Consultation.
     * @example
     * // Update one Consultation
     * const consultation = await prisma.consultation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationUpdateArgs>(args: SelectSubset<T, ConsultationUpdateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultations.
     * @param {ConsultationDeleteManyArgs} args - Arguments to filter Consultations to delete.
     * @example
     * // Delete a few Consultations
     * const { count } = await prisma.consultation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationDeleteManyArgs>(args?: SelectSubset<T, ConsultationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationUpdateManyArgs>(args: SelectSubset<T, ConsultationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations and returns the data updated in the database.
     * @param {ConsultationUpdateManyAndReturnArgs} args - Arguments to update many Consultations.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsultationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultation.
     * @param {ConsultationUpsertArgs} args - Arguments to update or create a Consultation.
     * @example
     * // Update or create a Consultation
     * const consultation = await prisma.consultation.upsert({
     *   create: {
     *     // ... data to create a Consultation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultation we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationUpsertArgs>(args: SelectSubset<T, ConsultationUpsertArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCountArgs} args - Arguments to filter Consultations to count.
     * @example
     * // Count the number of Consultations
     * const count = await prisma.consultation.count({
     *   where: {
     *     // ... the filter for the Consultations we want to count
     *   }
     * })
    **/
    count<T extends ConsultationCountArgs>(
      args?: Subset<T, ConsultationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultationAggregateArgs>(args: Subset<T, ConsultationAggregateArgs>): Prisma.PrismaPromise<GetConsultationAggregateType<T>>

    /**
     * Group by Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationGroupByArgs} args - Group by arguments.
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
      T extends ConsultationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultation model
   */
  readonly fields: ConsultationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Consultation model
   */
  interface ConsultationFieldRefs {
    readonly id: FieldRef<"Consultation", 'String'>
    readonly clientEmail: FieldRef<"Consultation", 'String'>
    readonly legalStatus: FieldRef<"Consultation", 'String'>
    readonly monthlyVolume: FieldRef<"Consultation", 'Int'>
    readonly currentTools: FieldRef<"Consultation", 'String'>
    readonly specificNeeds: FieldRef<"Consultation", 'String'>
    readonly invoiceUrl: FieldRef<"Consultation", 'String'>
    readonly paymentStatus: FieldRef<"Consultation", 'String'>
    readonly stripeSessionId: FieldRef<"Consultation", 'String'>
    readonly aiDraftText: FieldRef<"Consultation", 'String'>
    readonly isAnswered: FieldRef<"Consultation", 'Boolean'>
    readonly createdAt: FieldRef<"Consultation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consultation findUnique
   */
  export type ConsultationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findUniqueOrThrow
   */
  export type ConsultationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findFirst
   */
  export type ConsultationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findFirstOrThrow
   */
  export type ConsultationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findMany
   */
  export type ConsultationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation create
   */
  export type ConsultationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data needed to create a Consultation.
     */
    data: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
  }

  /**
   * Consultation createMany
   */
  export type ConsultationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
  }

  /**
   * Consultation createManyAndReturn
   */
  export type ConsultationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
  }

  /**
   * Consultation update
   */
  export type ConsultationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data needed to update a Consultation.
     */
    data: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
    /**
     * Choose, which Consultation to update.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation updateMany
   */
  export type ConsultationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
  }

  /**
   * Consultation updateManyAndReturn
   */
  export type ConsultationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
  }

  /**
   * Consultation upsert
   */
  export type ConsultationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The filter to search for the Consultation to update in case it exists.
     */
    where: ConsultationWhereUniqueInput
    /**
     * In case the Consultation found by the `where` argument doesn't exist, create a new Consultation with this data.
     */
    create: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
    /**
     * In case the Consultation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
  }

  /**
   * Consultation delete
   */
  export type ConsultationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Filter which Consultation to delete.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation deleteMany
   */
  export type ConsultationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to delete
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to delete.
     */
    limit?: number
  }

  /**
   * Consultation without action
   */
  export type ConsultationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
  }


  /**
   * Model LeadSubscriber
   */

  export type AggregateLeadSubscriber = {
    _count: LeadSubscriberCountAggregateOutputType | null
    _min: LeadSubscriberMinAggregateOutputType | null
    _max: LeadSubscriberMaxAggregateOutputType | null
  }

  export type LeadSubscriberMinAggregateOutputType = {
    id: string | null
    email: string | null
    source: string | null
    createdAt: Date | null
  }

  export type LeadSubscriberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    source: string | null
    createdAt: Date | null
  }

  export type LeadSubscriberCountAggregateOutputType = {
    id: number
    email: number
    source: number
    createdAt: number
    _all: number
  }


  export type LeadSubscriberMinAggregateInputType = {
    id?: true
    email?: true
    source?: true
    createdAt?: true
  }

  export type LeadSubscriberMaxAggregateInputType = {
    id?: true
    email?: true
    source?: true
    createdAt?: true
  }

  export type LeadSubscriberCountAggregateInputType = {
    id?: true
    email?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type LeadSubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadSubscriber to aggregate.
     */
    where?: LeadSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadSubscribers to fetch.
     */
    orderBy?: LeadSubscriberOrderByWithRelationInput | LeadSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadSubscribers
    **/
    _count?: true | LeadSubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadSubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadSubscriberMaxAggregateInputType
  }

  export type GetLeadSubscriberAggregateType<T extends LeadSubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadSubscriber[P]>
      : GetScalarType<T[P], AggregateLeadSubscriber[P]>
  }




  export type LeadSubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadSubscriberWhereInput
    orderBy?: LeadSubscriberOrderByWithAggregationInput | LeadSubscriberOrderByWithAggregationInput[]
    by: LeadSubscriberScalarFieldEnum[] | LeadSubscriberScalarFieldEnum
    having?: LeadSubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadSubscriberCountAggregateInputType | true
    _min?: LeadSubscriberMinAggregateInputType
    _max?: LeadSubscriberMaxAggregateInputType
  }

  export type LeadSubscriberGroupByOutputType = {
    id: string
    email: string
    source: string
    createdAt: Date
    _count: LeadSubscriberCountAggregateOutputType | null
    _min: LeadSubscriberMinAggregateOutputType | null
    _max: LeadSubscriberMaxAggregateOutputType | null
  }

  type GetLeadSubscriberGroupByPayload<T extends LeadSubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadSubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadSubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadSubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], LeadSubscriberGroupByOutputType[P]>
        }
      >
    >


  export type LeadSubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["leadSubscriber"]>

  export type LeadSubscriberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["leadSubscriber"]>

  export type LeadSubscriberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["leadSubscriber"]>

  export type LeadSubscriberSelectScalar = {
    id?: boolean
    email?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type LeadSubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "source" | "createdAt", ExtArgs["result"]["leadSubscriber"]>

  export type $LeadSubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadSubscriber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      source: string
      createdAt: Date
    }, ExtArgs["result"]["leadSubscriber"]>
    composites: {}
  }

  type LeadSubscriberGetPayload<S extends boolean | null | undefined | LeadSubscriberDefaultArgs> = $Result.GetResult<Prisma.$LeadSubscriberPayload, S>

  type LeadSubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadSubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadSubscriberCountAggregateInputType | true
    }

  export interface LeadSubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadSubscriber'], meta: { name: 'LeadSubscriber' } }
    /**
     * Find zero or one LeadSubscriber that matches the filter.
     * @param {LeadSubscriberFindUniqueArgs} args - Arguments to find a LeadSubscriber
     * @example
     * // Get one LeadSubscriber
     * const leadSubscriber = await prisma.leadSubscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadSubscriberFindUniqueArgs>(args: SelectSubset<T, LeadSubscriberFindUniqueArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadSubscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadSubscriberFindUniqueOrThrowArgs} args - Arguments to find a LeadSubscriber
     * @example
     * // Get one LeadSubscriber
     * const leadSubscriber = await prisma.leadSubscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadSubscriberFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadSubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadSubscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadSubscriberFindFirstArgs} args - Arguments to find a LeadSubscriber
     * @example
     * // Get one LeadSubscriber
     * const leadSubscriber = await prisma.leadSubscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadSubscriberFindFirstArgs>(args?: SelectSubset<T, LeadSubscriberFindFirstArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadSubscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadSubscriberFindFirstOrThrowArgs} args - Arguments to find a LeadSubscriber
     * @example
     * // Get one LeadSubscriber
     * const leadSubscriber = await prisma.leadSubscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadSubscriberFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadSubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadSubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadSubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadSubscribers
     * const leadSubscribers = await prisma.leadSubscriber.findMany()
     * 
     * // Get first 10 LeadSubscribers
     * const leadSubscribers = await prisma.leadSubscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadSubscriberWithIdOnly = await prisma.leadSubscriber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadSubscriberFindManyArgs>(args?: SelectSubset<T, LeadSubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadSubscriber.
     * @param {LeadSubscriberCreateArgs} args - Arguments to create a LeadSubscriber.
     * @example
     * // Create one LeadSubscriber
     * const LeadSubscriber = await prisma.leadSubscriber.create({
     *   data: {
     *     // ... data to create a LeadSubscriber
     *   }
     * })
     * 
     */
    create<T extends LeadSubscriberCreateArgs>(args: SelectSubset<T, LeadSubscriberCreateArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadSubscribers.
     * @param {LeadSubscriberCreateManyArgs} args - Arguments to create many LeadSubscribers.
     * @example
     * // Create many LeadSubscribers
     * const leadSubscriber = await prisma.leadSubscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadSubscriberCreateManyArgs>(args?: SelectSubset<T, LeadSubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadSubscribers and returns the data saved in the database.
     * @param {LeadSubscriberCreateManyAndReturnArgs} args - Arguments to create many LeadSubscribers.
     * @example
     * // Create many LeadSubscribers
     * const leadSubscriber = await prisma.leadSubscriber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadSubscribers and only return the `id`
     * const leadSubscriberWithIdOnly = await prisma.leadSubscriber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadSubscriberCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadSubscriberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadSubscriber.
     * @param {LeadSubscriberDeleteArgs} args - Arguments to delete one LeadSubscriber.
     * @example
     * // Delete one LeadSubscriber
     * const LeadSubscriber = await prisma.leadSubscriber.delete({
     *   where: {
     *     // ... filter to delete one LeadSubscriber
     *   }
     * })
     * 
     */
    delete<T extends LeadSubscriberDeleteArgs>(args: SelectSubset<T, LeadSubscriberDeleteArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadSubscriber.
     * @param {LeadSubscriberUpdateArgs} args - Arguments to update one LeadSubscriber.
     * @example
     * // Update one LeadSubscriber
     * const leadSubscriber = await prisma.leadSubscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadSubscriberUpdateArgs>(args: SelectSubset<T, LeadSubscriberUpdateArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadSubscribers.
     * @param {LeadSubscriberDeleteManyArgs} args - Arguments to filter LeadSubscribers to delete.
     * @example
     * // Delete a few LeadSubscribers
     * const { count } = await prisma.leadSubscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadSubscriberDeleteManyArgs>(args?: SelectSubset<T, LeadSubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadSubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadSubscribers
     * const leadSubscriber = await prisma.leadSubscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadSubscriberUpdateManyArgs>(args: SelectSubset<T, LeadSubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadSubscribers and returns the data updated in the database.
     * @param {LeadSubscriberUpdateManyAndReturnArgs} args - Arguments to update many LeadSubscribers.
     * @example
     * // Update many LeadSubscribers
     * const leadSubscriber = await prisma.leadSubscriber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadSubscribers and only return the `id`
     * const leadSubscriberWithIdOnly = await prisma.leadSubscriber.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadSubscriberUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadSubscriberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadSubscriber.
     * @param {LeadSubscriberUpsertArgs} args - Arguments to update or create a LeadSubscriber.
     * @example
     * // Update or create a LeadSubscriber
     * const leadSubscriber = await prisma.leadSubscriber.upsert({
     *   create: {
     *     // ... data to create a LeadSubscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadSubscriber we want to update
     *   }
     * })
     */
    upsert<T extends LeadSubscriberUpsertArgs>(args: SelectSubset<T, LeadSubscriberUpsertArgs<ExtArgs>>): Prisma__LeadSubscriberClient<$Result.GetResult<Prisma.$LeadSubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadSubscriberCountArgs} args - Arguments to filter LeadSubscribers to count.
     * @example
     * // Count the number of LeadSubscribers
     * const count = await prisma.leadSubscriber.count({
     *   where: {
     *     // ... the filter for the LeadSubscribers we want to count
     *   }
     * })
    **/
    count<T extends LeadSubscriberCountArgs>(
      args?: Subset<T, LeadSubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadSubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadSubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadSubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadSubscriberAggregateArgs>(args: Subset<T, LeadSubscriberAggregateArgs>): Prisma.PrismaPromise<GetLeadSubscriberAggregateType<T>>

    /**
     * Group by LeadSubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadSubscriberGroupByArgs} args - Group by arguments.
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
      T extends LeadSubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadSubscriberGroupByArgs['orderBy'] }
        : { orderBy?: LeadSubscriberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadSubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadSubscriber model
   */
  readonly fields: LeadSubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadSubscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadSubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LeadSubscriber model
   */
  interface LeadSubscriberFieldRefs {
    readonly id: FieldRef<"LeadSubscriber", 'String'>
    readonly email: FieldRef<"LeadSubscriber", 'String'>
    readonly source: FieldRef<"LeadSubscriber", 'String'>
    readonly createdAt: FieldRef<"LeadSubscriber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadSubscriber findUnique
   */
  export type LeadSubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which LeadSubscriber to fetch.
     */
    where: LeadSubscriberWhereUniqueInput
  }

  /**
   * LeadSubscriber findUniqueOrThrow
   */
  export type LeadSubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which LeadSubscriber to fetch.
     */
    where: LeadSubscriberWhereUniqueInput
  }

  /**
   * LeadSubscriber findFirst
   */
  export type LeadSubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which LeadSubscriber to fetch.
     */
    where?: LeadSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadSubscribers to fetch.
     */
    orderBy?: LeadSubscriberOrderByWithRelationInput | LeadSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadSubscribers.
     */
    cursor?: LeadSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadSubscribers.
     */
    distinct?: LeadSubscriberScalarFieldEnum | LeadSubscriberScalarFieldEnum[]
  }

  /**
   * LeadSubscriber findFirstOrThrow
   */
  export type LeadSubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which LeadSubscriber to fetch.
     */
    where?: LeadSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadSubscribers to fetch.
     */
    orderBy?: LeadSubscriberOrderByWithRelationInput | LeadSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadSubscribers.
     */
    cursor?: LeadSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadSubscribers.
     */
    distinct?: LeadSubscriberScalarFieldEnum | LeadSubscriberScalarFieldEnum[]
  }

  /**
   * LeadSubscriber findMany
   */
  export type LeadSubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which LeadSubscribers to fetch.
     */
    where?: LeadSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadSubscribers to fetch.
     */
    orderBy?: LeadSubscriberOrderByWithRelationInput | LeadSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadSubscribers.
     */
    cursor?: LeadSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadSubscribers.
     */
    distinct?: LeadSubscriberScalarFieldEnum | LeadSubscriberScalarFieldEnum[]
  }

  /**
   * LeadSubscriber create
   */
  export type LeadSubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * The data needed to create a LeadSubscriber.
     */
    data: XOR<LeadSubscriberCreateInput, LeadSubscriberUncheckedCreateInput>
  }

  /**
   * LeadSubscriber createMany
   */
  export type LeadSubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadSubscribers.
     */
    data: LeadSubscriberCreateManyInput | LeadSubscriberCreateManyInput[]
  }

  /**
   * LeadSubscriber createManyAndReturn
   */
  export type LeadSubscriberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * The data used to create many LeadSubscribers.
     */
    data: LeadSubscriberCreateManyInput | LeadSubscriberCreateManyInput[]
  }

  /**
   * LeadSubscriber update
   */
  export type LeadSubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * The data needed to update a LeadSubscriber.
     */
    data: XOR<LeadSubscriberUpdateInput, LeadSubscriberUncheckedUpdateInput>
    /**
     * Choose, which LeadSubscriber to update.
     */
    where: LeadSubscriberWhereUniqueInput
  }

  /**
   * LeadSubscriber updateMany
   */
  export type LeadSubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadSubscribers.
     */
    data: XOR<LeadSubscriberUpdateManyMutationInput, LeadSubscriberUncheckedUpdateManyInput>
    /**
     * Filter which LeadSubscribers to update
     */
    where?: LeadSubscriberWhereInput
    /**
     * Limit how many LeadSubscribers to update.
     */
    limit?: number
  }

  /**
   * LeadSubscriber updateManyAndReturn
   */
  export type LeadSubscriberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * The data used to update LeadSubscribers.
     */
    data: XOR<LeadSubscriberUpdateManyMutationInput, LeadSubscriberUncheckedUpdateManyInput>
    /**
     * Filter which LeadSubscribers to update
     */
    where?: LeadSubscriberWhereInput
    /**
     * Limit how many LeadSubscribers to update.
     */
    limit?: number
  }

  /**
   * LeadSubscriber upsert
   */
  export type LeadSubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * The filter to search for the LeadSubscriber to update in case it exists.
     */
    where: LeadSubscriberWhereUniqueInput
    /**
     * In case the LeadSubscriber found by the `where` argument doesn't exist, create a new LeadSubscriber with this data.
     */
    create: XOR<LeadSubscriberCreateInput, LeadSubscriberUncheckedCreateInput>
    /**
     * In case the LeadSubscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadSubscriberUpdateInput, LeadSubscriberUncheckedUpdateInput>
  }

  /**
   * LeadSubscriber delete
   */
  export type LeadSubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
    /**
     * Filter which LeadSubscriber to delete.
     */
    where: LeadSubscriberWhereUniqueInput
  }

  /**
   * LeadSubscriber deleteMany
   */
  export type LeadSubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadSubscribers to delete
     */
    where?: LeadSubscriberWhereInput
    /**
     * Limit how many LeadSubscribers to delete.
     */
    limit?: number
  }

  /**
   * LeadSubscriber without action
   */
  export type LeadSubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadSubscriber
     */
    select?: LeadSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadSubscriber
     */
    omit?: LeadSubscriberOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    magicLinkToken: string | null
    magicLinkExpiresAt: Date | null
    sessionToken: string | null
    companyName: string | null
    siret: string | null
    vatNumber: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    phone: string | null
    iban: string | null
    bic: string | null
    logoUrl: string | null
    accentColor: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    hasActiveSubscription: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    magicLinkToken: string | null
    magicLinkExpiresAt: Date | null
    sessionToken: string | null
    companyName: string | null
    siret: string | null
    vatNumber: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    phone: string | null
    iban: string | null
    bic: string | null
    logoUrl: string | null
    accentColor: string | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    hasActiveSubscription: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    magicLinkToken: number
    magicLinkExpiresAt: number
    sessionToken: number
    companyName: number
    siret: number
    vatNumber: number
    address: number
    city: number
    postalCode: number
    country: number
    phone: number
    iban: number
    bic: number
    logoUrl: number
    accentColor: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    hasActiveSubscription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    magicLinkToken?: true
    magicLinkExpiresAt?: true
    sessionToken?: true
    companyName?: true
    siret?: true
    vatNumber?: true
    address?: true
    city?: true
    postalCode?: true
    country?: true
    phone?: true
    iban?: true
    bic?: true
    logoUrl?: true
    accentColor?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    hasActiveSubscription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    magicLinkToken?: true
    magicLinkExpiresAt?: true
    sessionToken?: true
    companyName?: true
    siret?: true
    vatNumber?: true
    address?: true
    city?: true
    postalCode?: true
    country?: true
    phone?: true
    iban?: true
    bic?: true
    logoUrl?: true
    accentColor?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    hasActiveSubscription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    magicLinkToken?: true
    magicLinkExpiresAt?: true
    sessionToken?: true
    companyName?: true
    siret?: true
    vatNumber?: true
    address?: true
    city?: true
    postalCode?: true
    country?: true
    phone?: true
    iban?: true
    bic?: true
    logoUrl?: true
    accentColor?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    hasActiveSubscription?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    magicLinkToken: string | null
    magicLinkExpiresAt: Date | null
    sessionToken: string | null
    companyName: string | null
    siret: string | null
    vatNumber: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    country: string
    phone: string | null
    iban: string | null
    bic: string | null
    logoUrl: string | null
    accentColor: string
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    hasActiveSubscription: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    magicLinkToken?: boolean
    magicLinkExpiresAt?: boolean
    sessionToken?: boolean
    companyName?: boolean
    siret?: boolean
    vatNumber?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    phone?: boolean
    iban?: boolean
    bic?: boolean
    logoUrl?: boolean
    accentColor?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    hasActiveSubscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    magicLinkToken?: boolean
    magicLinkExpiresAt?: boolean
    sessionToken?: boolean
    companyName?: boolean
    siret?: boolean
    vatNumber?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    phone?: boolean
    iban?: boolean
    bic?: boolean
    logoUrl?: boolean
    accentColor?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    hasActiveSubscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    magicLinkToken?: boolean
    magicLinkExpiresAt?: boolean
    sessionToken?: boolean
    companyName?: boolean
    siret?: boolean
    vatNumber?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    phone?: boolean
    iban?: boolean
    bic?: boolean
    logoUrl?: boolean
    accentColor?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    hasActiveSubscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    magicLinkToken?: boolean
    magicLinkExpiresAt?: boolean
    sessionToken?: boolean
    companyName?: boolean
    siret?: boolean
    vatNumber?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    phone?: boolean
    iban?: boolean
    bic?: boolean
    logoUrl?: boolean
    accentColor?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    hasActiveSubscription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "magicLinkToken" | "magicLinkExpiresAt" | "sessionToken" | "companyName" | "siret" | "vatNumber" | "address" | "city" | "postalCode" | "country" | "phone" | "iban" | "bic" | "logoUrl" | "accentColor" | "stripeCustomerId" | "stripeSubscriptionId" | "hasActiveSubscription" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      magicLinkToken: string | null
      magicLinkExpiresAt: Date | null
      sessionToken: string | null
      companyName: string | null
      siret: string | null
      vatNumber: string | null
      address: string | null
      city: string | null
      postalCode: string | null
      country: string
      phone: string | null
      iban: string | null
      bic: string | null
      logoUrl: string | null
      accentColor: string
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      hasActiveSubscription: boolean
      createdAt: Date
      updatedAt: Date
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
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly magicLinkToken: FieldRef<"User", 'String'>
    readonly magicLinkExpiresAt: FieldRef<"User", 'DateTime'>
    readonly sessionToken: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly siret: FieldRef<"User", 'String'>
    readonly vatNumber: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly postalCode: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly iban: FieldRef<"User", 'String'>
    readonly bic: FieldRef<"User", 'String'>
    readonly logoUrl: FieldRef<"User", 'String'>
    readonly accentColor: FieldRef<"User", 'String'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly stripeSubscriptionId: FieldRef<"User", 'String'>
    readonly hasActiveSubscription: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
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
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    invoiceNumber: string | null
    issueDate: Date | null
    dueDate: Date | null
    clientName: string | null
    clientAddress: string | null
    clientCity: string | null
    clientPostalCode: string | null
    clientCountry: string | null
    clientSiret: string | null
    clientVatNumber: string | null
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    invoiceNumber: string | null
    issueDate: Date | null
    dueDate: Date | null
    clientName: string | null
    clientAddress: string | null
    clientCity: string | null
    clientPostalCode: string | null
    clientCountry: string | null
    clientSiret: string | null
    clientVatNumber: string | null
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    userId: number
    invoiceNumber: number
    issueDate: number
    dueDate: number
    clientName: number
    clientAddress: number
    clientCity: number
    clientPostalCode: number
    clientCountry: number
    clientSiret: number
    clientVatNumber: number
    totalHT: number
    totalVAT: number
    totalTTC: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
  }

  export type InvoiceSumAggregateInputType = {
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    userId?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    clientName?: true
    clientAddress?: true
    clientCity?: true
    clientPostalCode?: true
    clientCountry?: true
    clientSiret?: true
    clientVatNumber?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    userId?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    clientName?: true
    clientAddress?: true
    clientCity?: true
    clientPostalCode?: true
    clientCountry?: true
    clientSiret?: true
    clientVatNumber?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    userId?: true
    invoiceNumber?: true
    issueDate?: true
    dueDate?: true
    clientName?: true
    clientAddress?: true
    clientCity?: true
    clientPostalCode?: true
    clientCountry?: true
    clientSiret?: true
    clientVatNumber?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    userId: string
    invoiceNumber: string
    issueDate: Date
    dueDate: Date | null
    clientName: string
    clientAddress: string | null
    clientCity: string | null
    clientPostalCode: string | null
    clientCountry: string
    clientSiret: string | null
    clientVatNumber: string | null
    totalHT: number
    totalVAT: number
    totalTTC: number
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    clientName?: boolean
    clientAddress?: boolean
    clientCity?: boolean
    clientPostalCode?: boolean
    clientCountry?: boolean
    clientSiret?: boolean
    clientVatNumber?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    clientName?: boolean
    clientAddress?: boolean
    clientCity?: boolean
    clientPostalCode?: boolean
    clientCountry?: boolean
    clientSiret?: boolean
    clientVatNumber?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    clientName?: boolean
    clientAddress?: boolean
    clientCity?: boolean
    clientPostalCode?: boolean
    clientCountry?: boolean
    clientSiret?: boolean
    clientVatNumber?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    userId?: boolean
    invoiceNumber?: boolean
    issueDate?: boolean
    dueDate?: boolean
    clientName?: boolean
    clientAddress?: boolean
    clientCity?: boolean
    clientPostalCode?: boolean
    clientCountry?: boolean
    clientSiret?: boolean
    clientVatNumber?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "invoiceNumber" | "issueDate" | "dueDate" | "clientName" | "clientAddress" | "clientCity" | "clientPostalCode" | "clientCountry" | "clientSiret" | "clientVatNumber" | "totalHT" | "totalVAT" | "totalTTC" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$InvoiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      invoiceNumber: string
      issueDate: Date
      dueDate: Date | null
      clientName: string
      clientAddress: string | null
      clientCity: string | null
      clientPostalCode: string | null
      clientCountry: string
      clientSiret: string | null
      clientVatNumber: string | null
      totalHT: number
      totalVAT: number
      totalTTC: number
      status: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly userId: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly issueDate: FieldRef<"Invoice", 'DateTime'>
    readonly dueDate: FieldRef<"Invoice", 'DateTime'>
    readonly clientName: FieldRef<"Invoice", 'String'>
    readonly clientAddress: FieldRef<"Invoice", 'String'>
    readonly clientCity: FieldRef<"Invoice", 'String'>
    readonly clientPostalCode: FieldRef<"Invoice", 'String'>
    readonly clientCountry: FieldRef<"Invoice", 'String'>
    readonly clientSiret: FieldRef<"Invoice", 'String'>
    readonly clientVatNumber: FieldRef<"Invoice", 'String'>
    readonly totalHT: FieldRef<"Invoice", 'Float'>
    readonly totalVAT: FieldRef<"Invoice", 'Float'>
    readonly totalTTC: FieldRef<"Invoice", 'Float'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.items
   */
  export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItem
   */

  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    vatRate: number | null
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    vatRate: number | null
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    description: string | null
    quantity: number | null
    unitPrice: number | null
    vatRate: number | null
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    description: string | null
    quantity: number | null
    unitPrice: number | null
    vatRate: number | null
    totalHT: number | null
    totalVAT: number | null
    totalTTC: number | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    id: number
    invoiceId: number
    description: number
    quantity: number
    unitPrice: number
    vatRate: number
    totalHT: number
    totalVAT: number
    totalTTC: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    vatRate?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    vatRate?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    id?: true
    invoiceId?: true
    description?: true
    quantity?: true
    unitPrice?: true
    vatRate?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    description?: true
    quantity?: true
    unitPrice?: true
    vatRate?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    id?: true
    invoiceId?: true
    description?: true
    quantity?: true
    unitPrice?: true
    vatRate?: true
    totalHT?: true
    totalVAT?: true
    totalTTC?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItem to aggregate.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
    by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type InvoiceItemGroupByOutputType = {
    id: string
    invoiceId: string
    description: string
    quantity: number
    unitPrice: number
    vatRate: number
    totalHT: number
    totalVAT: number
    totalTTC: number
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    vatRate?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    vatRate?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    vatRate?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    vatRate?: boolean
    totalHT?: boolean
    totalVAT?: boolean
    totalTTC?: boolean
  }

  export type InvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "description" | "quantity" | "unitPrice" | "vatRate" | "totalHT" | "totalVAT" | "totalTTC", ExtArgs["result"]["invoiceItem"]>
  export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItem"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      description: string
      quantity: number
      unitPrice: number
      vatRate: number
      totalHT: number
      totalVAT: number
      totalTTC: number
    }, ExtArgs["result"]["invoiceItem"]>
    composites: {}
  }

  type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

  type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }

  export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems and returns the data updated in the database.
     * @param {InvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
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
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItem model
   */
  readonly fields: InvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvoiceItem model
   */
  interface InvoiceItemFieldRefs {
    readonly id: FieldRef<"InvoiceItem", 'String'>
    readonly invoiceId: FieldRef<"InvoiceItem", 'String'>
    readonly description: FieldRef<"InvoiceItem", 'String'>
    readonly quantity: FieldRef<"InvoiceItem", 'Float'>
    readonly unitPrice: FieldRef<"InvoiceItem", 'Float'>
    readonly vatRate: FieldRef<"InvoiceItem", 'Float'>
    readonly totalHT: FieldRef<"InvoiceItem", 'Float'>
    readonly totalVAT: FieldRef<"InvoiceItem", 'Float'>
    readonly totalTTC: FieldRef<"InvoiceItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItem findUnique
   */
  export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findFirst
   */
  export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItem.
     */
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }

  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
  }

  /**
   * InvoiceItem createManyAndReturn
   */
  export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItem.
     */
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
  }

  /**
   * InvoiceItem updateManyAndReturn
   */
  export type InvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     */
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     */
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }

  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItem to delete.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfessionScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    category: 'category',
    description: 'description',
    icon: 'icon',
    contentHtml: 'contentHtml',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessionScalarFieldEnum = (typeof ProfessionScalarFieldEnum)[keyof typeof ProfessionScalarFieldEnum]


  export const SolutionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logoUrl: 'logoUrl',
    affiliateUrl: 'affiliateUrl',
    payoutDetails: 'payoutDetails',
    isGoodForVol: 'isGoodForVol',
    isGoodForType: 'isGoodForType',
    description: 'description'
  };

  export type SolutionScalarFieldEnum = (typeof SolutionScalarFieldEnum)[keyof typeof SolutionScalarFieldEnum]


  export const SolutionToProfessionScalarFieldEnum: {
    professionId: 'professionId',
    solutionId: 'solutionId'
  };

  export type SolutionToProfessionScalarFieldEnum = (typeof SolutionToProfessionScalarFieldEnum)[keyof typeof SolutionToProfessionScalarFieldEnum]


  export const QuizQuestionScalarFieldEnum: {
    id: 'id',
    step: 'step',
    question: 'question',
    helpText: 'helpText'
  };

  export type QuizQuestionScalarFieldEnum = (typeof QuizQuestionScalarFieldEnum)[keyof typeof QuizQuestionScalarFieldEnum]


  export const QuizOptionScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    text: 'text',
    value: 'value',
    nextStepAction: 'nextStepAction'
  };

  export type QuizOptionScalarFieldEnum = (typeof QuizOptionScalarFieldEnum)[keyof typeof QuizOptionScalarFieldEnum]


  export const QuizResultScalarFieldEnum: {
    id: 'id',
    userEmail: 'userEmail',
    userProfile: 'userProfile',
    recommendedId: 'recommendedId',
    createdAt: 'createdAt'
  };

  export type QuizResultScalarFieldEnum = (typeof QuizResultScalarFieldEnum)[keyof typeof QuizResultScalarFieldEnum]


  export const ConsultationScalarFieldEnum: {
    id: 'id',
    clientEmail: 'clientEmail',
    legalStatus: 'legalStatus',
    monthlyVolume: 'monthlyVolume',
    currentTools: 'currentTools',
    specificNeeds: 'specificNeeds',
    invoiceUrl: 'invoiceUrl',
    paymentStatus: 'paymentStatus',
    stripeSessionId: 'stripeSessionId',
    aiDraftText: 'aiDraftText',
    isAnswered: 'isAnswered',
    createdAt: 'createdAt'
  };

  export type ConsultationScalarFieldEnum = (typeof ConsultationScalarFieldEnum)[keyof typeof ConsultationScalarFieldEnum]


  export const LeadSubscriberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type LeadSubscriberScalarFieldEnum = (typeof LeadSubscriberScalarFieldEnum)[keyof typeof LeadSubscriberScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    magicLinkToken: 'magicLinkToken',
    magicLinkExpiresAt: 'magicLinkExpiresAt',
    sessionToken: 'sessionToken',
    companyName: 'companyName',
    siret: 'siret',
    vatNumber: 'vatNumber',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    country: 'country',
    phone: 'phone',
    iban: 'iban',
    bic: 'bic',
    logoUrl: 'logoUrl',
    accentColor: 'accentColor',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    hasActiveSubscription: 'hasActiveSubscription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    invoiceNumber: 'invoiceNumber',
    issueDate: 'issueDate',
    dueDate: 'dueDate',
    clientName: 'clientName',
    clientAddress: 'clientAddress',
    clientCity: 'clientCity',
    clientPostalCode: 'clientPostalCode',
    clientCountry: 'clientCountry',
    clientSiret: 'clientSiret',
    clientVatNumber: 'clientVatNumber',
    totalHT: 'totalHT',
    totalVAT: 'totalVAT',
    totalTTC: 'totalTTC',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    vatRate: 'vatRate',
    totalHT: 'totalHT',
    totalVAT: 'totalVAT',
    totalTTC: 'totalTTC'
  };

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProfessionWhereInput = {
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    id?: StringFilter<"Profession"> | string
    slug?: StringFilter<"Profession"> | string
    name?: StringFilter<"Profession"> | string
    category?: StringFilter<"Profession"> | string
    description?: StringFilter<"Profession"> | string
    icon?: StringFilter<"Profession"> | string
    contentHtml?: StringFilter<"Profession"> | string
    createdAt?: DateTimeFilter<"Profession"> | Date | string
    updatedAt?: DateTimeFilter<"Profession"> | Date | string
    solutions?: SolutionToProfessionListRelationFilter
  }

  export type ProfessionOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    contentHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    solutions?: SolutionToProfessionOrderByRelationAggregateInput
  }

  export type ProfessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    name?: StringFilter<"Profession"> | string
    category?: StringFilter<"Profession"> | string
    description?: StringFilter<"Profession"> | string
    icon?: StringFilter<"Profession"> | string
    contentHtml?: StringFilter<"Profession"> | string
    createdAt?: DateTimeFilter<"Profession"> | Date | string
    updatedAt?: DateTimeFilter<"Profession"> | Date | string
    solutions?: SolutionToProfessionListRelationFilter
  }, "id" | "slug">

  export type ProfessionOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    contentHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessionCountOrderByAggregateInput
    _max?: ProfessionMaxOrderByAggregateInput
    _min?: ProfessionMinOrderByAggregateInput
  }

  export type ProfessionScalarWhereWithAggregatesInput = {
    AND?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    OR?: ProfessionScalarWhereWithAggregatesInput[]
    NOT?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profession"> | string
    slug?: StringWithAggregatesFilter<"Profession"> | string
    name?: StringWithAggregatesFilter<"Profession"> | string
    category?: StringWithAggregatesFilter<"Profession"> | string
    description?: StringWithAggregatesFilter<"Profession"> | string
    icon?: StringWithAggregatesFilter<"Profession"> | string
    contentHtml?: StringWithAggregatesFilter<"Profession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profession"> | Date | string
  }

  export type SolutionWhereInput = {
    AND?: SolutionWhereInput | SolutionWhereInput[]
    OR?: SolutionWhereInput[]
    NOT?: SolutionWhereInput | SolutionWhereInput[]
    id?: StringFilter<"Solution"> | string
    name?: StringFilter<"Solution"> | string
    logoUrl?: StringFilter<"Solution"> | string
    affiliateUrl?: StringFilter<"Solution"> | string
    payoutDetails?: StringFilter<"Solution"> | string
    isGoodForVol?: StringFilter<"Solution"> | string
    isGoodForType?: StringFilter<"Solution"> | string
    description?: StringFilter<"Solution"> | string
    professions?: SolutionToProfessionListRelationFilter
    QuizResult?: QuizResultListRelationFilter
  }

  export type SolutionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    affiliateUrl?: SortOrder
    payoutDetails?: SortOrder
    isGoodForVol?: SortOrder
    isGoodForType?: SortOrder
    description?: SortOrder
    professions?: SolutionToProfessionOrderByRelationAggregateInput
    QuizResult?: QuizResultOrderByRelationAggregateInput
  }

  export type SolutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SolutionWhereInput | SolutionWhereInput[]
    OR?: SolutionWhereInput[]
    NOT?: SolutionWhereInput | SolutionWhereInput[]
    name?: StringFilter<"Solution"> | string
    logoUrl?: StringFilter<"Solution"> | string
    affiliateUrl?: StringFilter<"Solution"> | string
    payoutDetails?: StringFilter<"Solution"> | string
    isGoodForVol?: StringFilter<"Solution"> | string
    isGoodForType?: StringFilter<"Solution"> | string
    description?: StringFilter<"Solution"> | string
    professions?: SolutionToProfessionListRelationFilter
    QuizResult?: QuizResultListRelationFilter
  }, "id">

  export type SolutionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    affiliateUrl?: SortOrder
    payoutDetails?: SortOrder
    isGoodForVol?: SortOrder
    isGoodForType?: SortOrder
    description?: SortOrder
    _count?: SolutionCountOrderByAggregateInput
    _max?: SolutionMaxOrderByAggregateInput
    _min?: SolutionMinOrderByAggregateInput
  }

  export type SolutionScalarWhereWithAggregatesInput = {
    AND?: SolutionScalarWhereWithAggregatesInput | SolutionScalarWhereWithAggregatesInput[]
    OR?: SolutionScalarWhereWithAggregatesInput[]
    NOT?: SolutionScalarWhereWithAggregatesInput | SolutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Solution"> | string
    name?: StringWithAggregatesFilter<"Solution"> | string
    logoUrl?: StringWithAggregatesFilter<"Solution"> | string
    affiliateUrl?: StringWithAggregatesFilter<"Solution"> | string
    payoutDetails?: StringWithAggregatesFilter<"Solution"> | string
    isGoodForVol?: StringWithAggregatesFilter<"Solution"> | string
    isGoodForType?: StringWithAggregatesFilter<"Solution"> | string
    description?: StringWithAggregatesFilter<"Solution"> | string
  }

  export type SolutionToProfessionWhereInput = {
    AND?: SolutionToProfessionWhereInput | SolutionToProfessionWhereInput[]
    OR?: SolutionToProfessionWhereInput[]
    NOT?: SolutionToProfessionWhereInput | SolutionToProfessionWhereInput[]
    professionId?: StringFilter<"SolutionToProfession"> | string
    solutionId?: StringFilter<"SolutionToProfession"> | string
    profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    solution?: XOR<SolutionScalarRelationFilter, SolutionWhereInput>
  }

  export type SolutionToProfessionOrderByWithRelationInput = {
    professionId?: SortOrder
    solutionId?: SortOrder
    profession?: ProfessionOrderByWithRelationInput
    solution?: SolutionOrderByWithRelationInput
  }

  export type SolutionToProfessionWhereUniqueInput = Prisma.AtLeast<{
    professionId_solutionId?: SolutionToProfessionProfessionIdSolutionIdCompoundUniqueInput
    AND?: SolutionToProfessionWhereInput | SolutionToProfessionWhereInput[]
    OR?: SolutionToProfessionWhereInput[]
    NOT?: SolutionToProfessionWhereInput | SolutionToProfessionWhereInput[]
    professionId?: StringFilter<"SolutionToProfession"> | string
    solutionId?: StringFilter<"SolutionToProfession"> | string
    profession?: XOR<ProfessionScalarRelationFilter, ProfessionWhereInput>
    solution?: XOR<SolutionScalarRelationFilter, SolutionWhereInput>
  }, "professionId_solutionId">

  export type SolutionToProfessionOrderByWithAggregationInput = {
    professionId?: SortOrder
    solutionId?: SortOrder
    _count?: SolutionToProfessionCountOrderByAggregateInput
    _max?: SolutionToProfessionMaxOrderByAggregateInput
    _min?: SolutionToProfessionMinOrderByAggregateInput
  }

  export type SolutionToProfessionScalarWhereWithAggregatesInput = {
    AND?: SolutionToProfessionScalarWhereWithAggregatesInput | SolutionToProfessionScalarWhereWithAggregatesInput[]
    OR?: SolutionToProfessionScalarWhereWithAggregatesInput[]
    NOT?: SolutionToProfessionScalarWhereWithAggregatesInput | SolutionToProfessionScalarWhereWithAggregatesInput[]
    professionId?: StringWithAggregatesFilter<"SolutionToProfession"> | string
    solutionId?: StringWithAggregatesFilter<"SolutionToProfession"> | string
  }

  export type QuizQuestionWhereInput = {
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    id?: StringFilter<"QuizQuestion"> | string
    step?: IntFilter<"QuizQuestion"> | number
    question?: StringFilter<"QuizQuestion"> | string
    helpText?: StringNullableFilter<"QuizQuestion"> | string | null
    options?: QuizOptionListRelationFilter
  }

  export type QuizQuestionOrderByWithRelationInput = {
    id?: SortOrder
    step?: SortOrder
    question?: SortOrder
    helpText?: SortOrderInput | SortOrder
    options?: QuizOptionOrderByRelationAggregateInput
  }

  export type QuizQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    step?: number
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    question?: StringFilter<"QuizQuestion"> | string
    helpText?: StringNullableFilter<"QuizQuestion"> | string | null
    options?: QuizOptionListRelationFilter
  }, "id" | "step">

  export type QuizQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    step?: SortOrder
    question?: SortOrder
    helpText?: SortOrderInput | SortOrder
    _count?: QuizQuestionCountOrderByAggregateInput
    _avg?: QuizQuestionAvgOrderByAggregateInput
    _max?: QuizQuestionMaxOrderByAggregateInput
    _min?: QuizQuestionMinOrderByAggregateInput
    _sum?: QuizQuestionSumOrderByAggregateInput
  }

  export type QuizQuestionScalarWhereWithAggregatesInput = {
    AND?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    OR?: QuizQuestionScalarWhereWithAggregatesInput[]
    NOT?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizQuestion"> | string
    step?: IntWithAggregatesFilter<"QuizQuestion"> | number
    question?: StringWithAggregatesFilter<"QuizQuestion"> | string
    helpText?: StringNullableWithAggregatesFilter<"QuizQuestion"> | string | null
  }

  export type QuizOptionWhereInput = {
    AND?: QuizOptionWhereInput | QuizOptionWhereInput[]
    OR?: QuizOptionWhereInput[]
    NOT?: QuizOptionWhereInput | QuizOptionWhereInput[]
    id?: StringFilter<"QuizOption"> | string
    questionId?: StringFilter<"QuizOption"> | string
    text?: StringFilter<"QuizOption"> | string
    value?: StringFilter<"QuizOption"> | string
    nextStepAction?: StringFilter<"QuizOption"> | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
  }

  export type QuizOptionOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    value?: SortOrder
    nextStepAction?: SortOrder
    question?: QuizQuestionOrderByWithRelationInput
  }

  export type QuizOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizOptionWhereInput | QuizOptionWhereInput[]
    OR?: QuizOptionWhereInput[]
    NOT?: QuizOptionWhereInput | QuizOptionWhereInput[]
    questionId?: StringFilter<"QuizOption"> | string
    text?: StringFilter<"QuizOption"> | string
    value?: StringFilter<"QuizOption"> | string
    nextStepAction?: StringFilter<"QuizOption"> | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
  }, "id">

  export type QuizOptionOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    value?: SortOrder
    nextStepAction?: SortOrder
    _count?: QuizOptionCountOrderByAggregateInput
    _max?: QuizOptionMaxOrderByAggregateInput
    _min?: QuizOptionMinOrderByAggregateInput
  }

  export type QuizOptionScalarWhereWithAggregatesInput = {
    AND?: QuizOptionScalarWhereWithAggregatesInput | QuizOptionScalarWhereWithAggregatesInput[]
    OR?: QuizOptionScalarWhereWithAggregatesInput[]
    NOT?: QuizOptionScalarWhereWithAggregatesInput | QuizOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizOption"> | string
    questionId?: StringWithAggregatesFilter<"QuizOption"> | string
    text?: StringWithAggregatesFilter<"QuizOption"> | string
    value?: StringWithAggregatesFilter<"QuizOption"> | string
    nextStepAction?: StringWithAggregatesFilter<"QuizOption"> | string
  }

  export type QuizResultWhereInput = {
    AND?: QuizResultWhereInput | QuizResultWhereInput[]
    OR?: QuizResultWhereInput[]
    NOT?: QuizResultWhereInput | QuizResultWhereInput[]
    id?: StringFilter<"QuizResult"> | string
    userEmail?: StringFilter<"QuizResult"> | string
    userProfile?: StringFilter<"QuizResult"> | string
    recommendedId?: StringFilter<"QuizResult"> | string
    createdAt?: DateTimeFilter<"QuizResult"> | Date | string
    recommended?: XOR<SolutionScalarRelationFilter, SolutionWhereInput>
  }

  export type QuizResultOrderByWithRelationInput = {
    id?: SortOrder
    userEmail?: SortOrder
    userProfile?: SortOrder
    recommendedId?: SortOrder
    createdAt?: SortOrder
    recommended?: SolutionOrderByWithRelationInput
  }

  export type QuizResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizResultWhereInput | QuizResultWhereInput[]
    OR?: QuizResultWhereInput[]
    NOT?: QuizResultWhereInput | QuizResultWhereInput[]
    userEmail?: StringFilter<"QuizResult"> | string
    userProfile?: StringFilter<"QuizResult"> | string
    recommendedId?: StringFilter<"QuizResult"> | string
    createdAt?: DateTimeFilter<"QuizResult"> | Date | string
    recommended?: XOR<SolutionScalarRelationFilter, SolutionWhereInput>
  }, "id">

  export type QuizResultOrderByWithAggregationInput = {
    id?: SortOrder
    userEmail?: SortOrder
    userProfile?: SortOrder
    recommendedId?: SortOrder
    createdAt?: SortOrder
    _count?: QuizResultCountOrderByAggregateInput
    _max?: QuizResultMaxOrderByAggregateInput
    _min?: QuizResultMinOrderByAggregateInput
  }

  export type QuizResultScalarWhereWithAggregatesInput = {
    AND?: QuizResultScalarWhereWithAggregatesInput | QuizResultScalarWhereWithAggregatesInput[]
    OR?: QuizResultScalarWhereWithAggregatesInput[]
    NOT?: QuizResultScalarWhereWithAggregatesInput | QuizResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizResult"> | string
    userEmail?: StringWithAggregatesFilter<"QuizResult"> | string
    userProfile?: StringWithAggregatesFilter<"QuizResult"> | string
    recommendedId?: StringWithAggregatesFilter<"QuizResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuizResult"> | Date | string
  }

  export type ConsultationWhereInput = {
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    id?: StringFilter<"Consultation"> | string
    clientEmail?: StringFilter<"Consultation"> | string
    legalStatus?: StringFilter<"Consultation"> | string
    monthlyVolume?: IntFilter<"Consultation"> | number
    currentTools?: StringFilter<"Consultation"> | string
    specificNeeds?: StringFilter<"Consultation"> | string
    invoiceUrl?: StringNullableFilter<"Consultation"> | string | null
    paymentStatus?: StringFilter<"Consultation"> | string
    stripeSessionId?: StringNullableFilter<"Consultation"> | string | null
    aiDraftText?: StringNullableFilter<"Consultation"> | string | null
    isAnswered?: BoolFilter<"Consultation"> | boolean
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
  }

  export type ConsultationOrderByWithRelationInput = {
    id?: SortOrder
    clientEmail?: SortOrder
    legalStatus?: SortOrder
    monthlyVolume?: SortOrder
    currentTools?: SortOrder
    specificNeeds?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    aiDraftText?: SortOrderInput | SortOrder
    isAnswered?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    clientEmail?: StringFilter<"Consultation"> | string
    legalStatus?: StringFilter<"Consultation"> | string
    monthlyVolume?: IntFilter<"Consultation"> | number
    currentTools?: StringFilter<"Consultation"> | string
    specificNeeds?: StringFilter<"Consultation"> | string
    invoiceUrl?: StringNullableFilter<"Consultation"> | string | null
    paymentStatus?: StringFilter<"Consultation"> | string
    aiDraftText?: StringNullableFilter<"Consultation"> | string | null
    isAnswered?: BoolFilter<"Consultation"> | boolean
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
  }, "id" | "stripeSessionId">

  export type ConsultationOrderByWithAggregationInput = {
    id?: SortOrder
    clientEmail?: SortOrder
    legalStatus?: SortOrder
    monthlyVolume?: SortOrder
    currentTools?: SortOrder
    specificNeeds?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    stripeSessionId?: SortOrderInput | SortOrder
    aiDraftText?: SortOrderInput | SortOrder
    isAnswered?: SortOrder
    createdAt?: SortOrder
    _count?: ConsultationCountOrderByAggregateInput
    _avg?: ConsultationAvgOrderByAggregateInput
    _max?: ConsultationMaxOrderByAggregateInput
    _min?: ConsultationMinOrderByAggregateInput
    _sum?: ConsultationSumOrderByAggregateInput
  }

  export type ConsultationScalarWhereWithAggregatesInput = {
    AND?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    OR?: ConsultationScalarWhereWithAggregatesInput[]
    NOT?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consultation"> | string
    clientEmail?: StringWithAggregatesFilter<"Consultation"> | string
    legalStatus?: StringWithAggregatesFilter<"Consultation"> | string
    monthlyVolume?: IntWithAggregatesFilter<"Consultation"> | number
    currentTools?: StringWithAggregatesFilter<"Consultation"> | string
    specificNeeds?: StringWithAggregatesFilter<"Consultation"> | string
    invoiceUrl?: StringNullableWithAggregatesFilter<"Consultation"> | string | null
    paymentStatus?: StringWithAggregatesFilter<"Consultation"> | string
    stripeSessionId?: StringNullableWithAggregatesFilter<"Consultation"> | string | null
    aiDraftText?: StringNullableWithAggregatesFilter<"Consultation"> | string | null
    isAnswered?: BoolWithAggregatesFilter<"Consultation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
  }

  export type LeadSubscriberWhereInput = {
    AND?: LeadSubscriberWhereInput | LeadSubscriberWhereInput[]
    OR?: LeadSubscriberWhereInput[]
    NOT?: LeadSubscriberWhereInput | LeadSubscriberWhereInput[]
    id?: StringFilter<"LeadSubscriber"> | string
    email?: StringFilter<"LeadSubscriber"> | string
    source?: StringFilter<"LeadSubscriber"> | string
    createdAt?: DateTimeFilter<"LeadSubscriber"> | Date | string
  }

  export type LeadSubscriberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadSubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: LeadSubscriberWhereInput | LeadSubscriberWhereInput[]
    OR?: LeadSubscriberWhereInput[]
    NOT?: LeadSubscriberWhereInput | LeadSubscriberWhereInput[]
    source?: StringFilter<"LeadSubscriber"> | string
    createdAt?: DateTimeFilter<"LeadSubscriber"> | Date | string
  }, "id" | "email">

  export type LeadSubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: LeadSubscriberCountOrderByAggregateInput
    _max?: LeadSubscriberMaxOrderByAggregateInput
    _min?: LeadSubscriberMinOrderByAggregateInput
  }

  export type LeadSubscriberScalarWhereWithAggregatesInput = {
    AND?: LeadSubscriberScalarWhereWithAggregatesInput | LeadSubscriberScalarWhereWithAggregatesInput[]
    OR?: LeadSubscriberScalarWhereWithAggregatesInput[]
    NOT?: LeadSubscriberScalarWhereWithAggregatesInput | LeadSubscriberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadSubscriber"> | string
    email?: StringWithAggregatesFilter<"LeadSubscriber"> | string
    source?: StringWithAggregatesFilter<"LeadSubscriber"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeadSubscriber"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    magicLinkToken?: StringNullableFilter<"User"> | string | null
    magicLinkExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessionToken?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    siret?: StringNullableFilter<"User"> | string | null
    vatNumber?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    country?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    iban?: StringNullableFilter<"User"> | string | null
    bic?: StringNullableFilter<"User"> | string | null
    logoUrl?: StringNullableFilter<"User"> | string | null
    accentColor?: StringFilter<"User"> | string
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"User"> | string | null
    hasActiveSubscription?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    invoices?: InvoiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    magicLinkToken?: SortOrderInput | SortOrder
    magicLinkExpiresAt?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    siret?: SortOrderInput | SortOrder
    vatNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrder
    phone?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    bic?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    accentColor?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    hasActiveSubscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    magicLinkToken?: string
    sessionToken?: string
    stripeCustomerId?: string
    stripeSubscriptionId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    magicLinkExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    siret?: StringNullableFilter<"User"> | string | null
    vatNumber?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    country?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    iban?: StringNullableFilter<"User"> | string | null
    bic?: StringNullableFilter<"User"> | string | null
    logoUrl?: StringNullableFilter<"User"> | string | null
    accentColor?: StringFilter<"User"> | string
    hasActiveSubscription?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    invoices?: InvoiceListRelationFilter
  }, "id" | "email" | "magicLinkToken" | "sessionToken" | "stripeCustomerId" | "stripeSubscriptionId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    magicLinkToken?: SortOrderInput | SortOrder
    magicLinkExpiresAt?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    siret?: SortOrderInput | SortOrder
    vatNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrder
    phone?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    bic?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    accentColor?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    hasActiveSubscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    magicLinkToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    magicLinkExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    sessionToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    siret?: StringNullableWithAggregatesFilter<"User"> | string | null
    vatNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    iban?: StringNullableWithAggregatesFilter<"User"> | string | null
    bic?: StringNullableWithAggregatesFilter<"User"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    accentColor?: StringWithAggregatesFilter<"User"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    hasActiveSubscription?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    userId?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    clientName?: StringFilter<"Invoice"> | string
    clientAddress?: StringNullableFilter<"Invoice"> | string | null
    clientCity?: StringNullableFilter<"Invoice"> | string | null
    clientPostalCode?: StringNullableFilter<"Invoice"> | string | null
    clientCountry?: StringFilter<"Invoice"> | string
    clientSiret?: StringNullableFilter<"Invoice"> | string | null
    clientVatNumber?: StringNullableFilter<"Invoice"> | string | null
    totalHT?: FloatFilter<"Invoice"> | number
    totalVAT?: FloatFilter<"Invoice"> | number
    totalTTC?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: InvoiceItemListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientAddress?: SortOrderInput | SortOrder
    clientCity?: SortOrderInput | SortOrder
    clientPostalCode?: SortOrderInput | SortOrder
    clientCountry?: SortOrder
    clientSiret?: SortOrderInput | SortOrder
    clientVatNumber?: SortOrderInput | SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: InvoiceItemOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    userId?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    clientName?: StringFilter<"Invoice"> | string
    clientAddress?: StringNullableFilter<"Invoice"> | string | null
    clientCity?: StringNullableFilter<"Invoice"> | string | null
    clientPostalCode?: StringNullableFilter<"Invoice"> | string | null
    clientCountry?: StringFilter<"Invoice"> | string
    clientSiret?: StringNullableFilter<"Invoice"> | string | null
    clientVatNumber?: StringNullableFilter<"Invoice"> | string | null
    totalHT?: FloatFilter<"Invoice"> | number
    totalVAT?: FloatFilter<"Invoice"> | number
    totalTTC?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: InvoiceItemListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    clientName?: SortOrder
    clientAddress?: SortOrderInput | SortOrder
    clientCity?: SortOrderInput | SortOrder
    clientPostalCode?: SortOrderInput | SortOrder
    clientCountry?: SortOrder
    clientSiret?: SortOrderInput | SortOrder
    clientVatNumber?: SortOrderInput | SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    userId?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    issueDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    clientName?: StringWithAggregatesFilter<"Invoice"> | string
    clientAddress?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    clientCity?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    clientPostalCode?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    clientCountry?: StringWithAggregatesFilter<"Invoice"> | string
    clientSiret?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    clientVatNumber?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    totalHT?: FloatWithAggregatesFilter<"Invoice"> | number
    totalVAT?: FloatWithAggregatesFilter<"Invoice"> | number
    totalTTC?: FloatWithAggregatesFilter<"Invoice"> | number
    status?: StringWithAggregatesFilter<"Invoice"> | string
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceItemWhereInput = {
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    description?: StringFilter<"InvoiceItem"> | string
    quantity?: FloatFilter<"InvoiceItem"> | number
    unitPrice?: FloatFilter<"InvoiceItem"> | number
    vatRate?: FloatFilter<"InvoiceItem"> | number
    totalHT?: FloatFilter<"InvoiceItem"> | number
    totalVAT?: FloatFilter<"InvoiceItem"> | number
    totalTTC?: FloatFilter<"InvoiceItem"> | number
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    vatRate?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    invoiceId?: StringFilter<"InvoiceItem"> | string
    description?: StringFilter<"InvoiceItem"> | string
    quantity?: FloatFilter<"InvoiceItem"> | number
    unitPrice?: FloatFilter<"InvoiceItem"> | number
    vatRate?: FloatFilter<"InvoiceItem"> | number
    totalHT?: FloatFilter<"InvoiceItem"> | number
    totalVAT?: FloatFilter<"InvoiceItem"> | number
    totalTTC?: FloatFilter<"InvoiceItem"> | number
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    vatRate?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceItem"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceItem"> | string
    description?: StringWithAggregatesFilter<"InvoiceItem"> | string
    quantity?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    vatRate?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    totalHT?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    totalVAT?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    totalTTC?: FloatWithAggregatesFilter<"InvoiceItem"> | number
  }

  export type ProfessionCreateInput = {
    id?: string
    slug: string
    name: string
    category: string
    description: string
    icon: string
    contentHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
    solutions?: SolutionToProfessionCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    category: string
    description: string
    icon: string
    contentHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
    solutions?: SolutionToProfessionUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    contentHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solutions?: SolutionToProfessionUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    contentHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solutions?: SolutionToProfessionUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionCreateManyInput = {
    id?: string
    slug: string
    name: string
    category: string
    description: string
    icon: string
    contentHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    contentHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    contentHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionCreateInput = {
    id?: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
    professions?: SolutionToProfessionCreateNestedManyWithoutSolutionInput
    QuizResult?: QuizResultCreateNestedManyWithoutRecommendedInput
  }

  export type SolutionUncheckedCreateInput = {
    id?: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
    professions?: SolutionToProfessionUncheckedCreateNestedManyWithoutSolutionInput
    QuizResult?: QuizResultUncheckedCreateNestedManyWithoutRecommendedInput
  }

  export type SolutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professions?: SolutionToProfessionUpdateManyWithoutSolutionNestedInput
    QuizResult?: QuizResultUpdateManyWithoutRecommendedNestedInput
  }

  export type SolutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professions?: SolutionToProfessionUncheckedUpdateManyWithoutSolutionNestedInput
    QuizResult?: QuizResultUncheckedUpdateManyWithoutRecommendedNestedInput
  }

  export type SolutionCreateManyInput = {
    id?: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
  }

  export type SolutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SolutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SolutionToProfessionCreateInput = {
    profession: ProfessionCreateNestedOneWithoutSolutionsInput
    solution: SolutionCreateNestedOneWithoutProfessionsInput
  }

  export type SolutionToProfessionUncheckedCreateInput = {
    professionId: string
    solutionId: string
  }

  export type SolutionToProfessionUpdateInput = {
    profession?: ProfessionUpdateOneRequiredWithoutSolutionsNestedInput
    solution?: SolutionUpdateOneRequiredWithoutProfessionsNestedInput
  }

  export type SolutionToProfessionUncheckedUpdateInput = {
    professionId?: StringFieldUpdateOperationsInput | string
    solutionId?: StringFieldUpdateOperationsInput | string
  }

  export type SolutionToProfessionCreateManyInput = {
    professionId: string
    solutionId: string
  }

  export type SolutionToProfessionUpdateManyMutationInput = {

  }

  export type SolutionToProfessionUncheckedUpdateManyInput = {
    professionId?: StringFieldUpdateOperationsInput | string
    solutionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionCreateInput = {
    id?: string
    step: number
    question: string
    helpText?: string | null
    options?: QuizOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateInput = {
    id?: string
    step: number
    question: string
    helpText?: string | null
    options?: QuizOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    options?: QuizOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    options?: QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionCreateManyInput = {
    id?: string
    step: number
    question: string
    helpText?: string | null
  }

  export type QuizQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizOptionCreateInput = {
    id?: string
    text: string
    value: string
    nextStepAction: string
    question: QuizQuestionCreateNestedOneWithoutOptionsInput
  }

  export type QuizOptionUncheckedCreateInput = {
    id?: string
    questionId: string
    text: string
    value: string
    nextStepAction: string
  }

  export type QuizOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nextStepAction?: StringFieldUpdateOperationsInput | string
    question?: QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type QuizOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nextStepAction?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionCreateManyInput = {
    id?: string
    questionId: string
    text: string
    value: string
    nextStepAction: string
  }

  export type QuizOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nextStepAction?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nextStepAction?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultCreateInput = {
    id?: string
    userEmail: string
    userProfile: string
    createdAt?: Date | string
    recommended: SolutionCreateNestedOneWithoutQuizResultInput
  }

  export type QuizResultUncheckedCreateInput = {
    id?: string
    userEmail: string
    userProfile: string
    recommendedId: string
    createdAt?: Date | string
  }

  export type QuizResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommended?: SolutionUpdateOneRequiredWithoutQuizResultNestedInput
  }

  export type QuizResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userProfile?: StringFieldUpdateOperationsInput | string
    recommendedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultCreateManyInput = {
    id?: string
    userEmail: string
    userProfile: string
    recommendedId: string
    createdAt?: Date | string
  }

  export type QuizResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userProfile?: StringFieldUpdateOperationsInput | string
    recommendedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCreateInput = {
    id?: string
    clientEmail: string
    legalStatus: string
    monthlyVolume: number
    currentTools: string
    specificNeeds: string
    invoiceUrl?: string | null
    paymentStatus: string
    stripeSessionId?: string | null
    aiDraftText?: string | null
    isAnswered?: boolean
    createdAt?: Date | string
  }

  export type ConsultationUncheckedCreateInput = {
    id?: string
    clientEmail: string
    legalStatus: string
    monthlyVolume: number
    currentTools: string
    specificNeeds: string
    invoiceUrl?: string | null
    paymentStatus: string
    stripeSessionId?: string | null
    aiDraftText?: string | null
    isAnswered?: boolean
    createdAt?: Date | string
  }

  export type ConsultationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    legalStatus?: StringFieldUpdateOperationsInput | string
    monthlyVolume?: IntFieldUpdateOperationsInput | number
    currentTools?: StringFieldUpdateOperationsInput | string
    specificNeeds?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    aiDraftText?: NullableStringFieldUpdateOperationsInput | string | null
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    legalStatus?: StringFieldUpdateOperationsInput | string
    monthlyVolume?: IntFieldUpdateOperationsInput | number
    currentTools?: StringFieldUpdateOperationsInput | string
    specificNeeds?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    aiDraftText?: NullableStringFieldUpdateOperationsInput | string | null
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCreateManyInput = {
    id?: string
    clientEmail: string
    legalStatus: string
    monthlyVolume: number
    currentTools: string
    specificNeeds: string
    invoiceUrl?: string | null
    paymentStatus: string
    stripeSessionId?: string | null
    aiDraftText?: string | null
    isAnswered?: boolean
    createdAt?: Date | string
  }

  export type ConsultationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    legalStatus?: StringFieldUpdateOperationsInput | string
    monthlyVolume?: IntFieldUpdateOperationsInput | number
    currentTools?: StringFieldUpdateOperationsInput | string
    specificNeeds?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    aiDraftText?: NullableStringFieldUpdateOperationsInput | string | null
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientEmail?: StringFieldUpdateOperationsInput | string
    legalStatus?: StringFieldUpdateOperationsInput | string
    monthlyVolume?: IntFieldUpdateOperationsInput | number
    currentTools?: StringFieldUpdateOperationsInput | string
    specificNeeds?: StringFieldUpdateOperationsInput | string
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    aiDraftText?: NullableStringFieldUpdateOperationsInput | string | null
    isAnswered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadSubscriberCreateInput = {
    id?: string
    email: string
    source: string
    createdAt?: Date | string
  }

  export type LeadSubscriberUncheckedCreateInput = {
    id?: string
    email: string
    source: string
    createdAt?: Date | string
  }

  export type LeadSubscriberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadSubscriberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadSubscriberCreateManyInput = {
    id?: string
    email: string
    source: string
    createdAt?: Date | string
  }

  export type LeadSubscriberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadSubscriberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    magicLinkToken?: string | null
    magicLinkExpiresAt?: Date | string | null
    sessionToken?: string | null
    companyName?: string | null
    siret?: string | null
    vatNumber?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    iban?: string | null
    bic?: string | null
    logoUrl?: string | null
    accentColor?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    hasActiveSubscription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    magicLinkToken?: string | null
    magicLinkExpiresAt?: Date | string | null
    sessionToken?: string | null
    companyName?: string | null
    siret?: string | null
    vatNumber?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    iban?: string | null
    bic?: string | null
    logoUrl?: string | null
    accentColor?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    hasActiveSubscription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    magicLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    bic?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    magicLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    bic?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    magicLinkToken?: string | null
    magicLinkExpiresAt?: Date | string | null
    sessionToken?: string | null
    companyName?: string | null
    siret?: string | null
    vatNumber?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    iban?: string | null
    bic?: string | null
    logoUrl?: string | null
    accentColor?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    hasActiveSubscription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    magicLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    bic?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    magicLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    bic?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    userId: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    userId: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateInput = {
    id?: string
    description: string
    quantity?: number
    unitPrice?: number
    vatRate?: number
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    invoice: InvoiceCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    id?: string
    invoiceId: string
    description: string
    quantity?: number
    unitPrice?: number
    vatRate?: number
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
  }

  export type InvoiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemCreateManyInput = {
    id?: string
    invoiceId: string
    description: string
    quantity?: number
    unitPrice?: number
    vatRate?: number
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
  }

  export type InvoiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type SolutionToProfessionListRelationFilter = {
    every?: SolutionToProfessionWhereInput
    some?: SolutionToProfessionWhereInput
    none?: SolutionToProfessionWhereInput
  }

  export type SolutionToProfessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    contentHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    contentHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    contentHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type QuizResultListRelationFilter = {
    every?: QuizResultWhereInput
    some?: QuizResultWhereInput
    none?: QuizResultWhereInput
  }

  export type QuizResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolutionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    affiliateUrl?: SortOrder
    payoutDetails?: SortOrder
    isGoodForVol?: SortOrder
    isGoodForType?: SortOrder
    description?: SortOrder
  }

  export type SolutionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    affiliateUrl?: SortOrder
    payoutDetails?: SortOrder
    isGoodForVol?: SortOrder
    isGoodForType?: SortOrder
    description?: SortOrder
  }

  export type SolutionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    affiliateUrl?: SortOrder
    payoutDetails?: SortOrder
    isGoodForVol?: SortOrder
    isGoodForType?: SortOrder
    description?: SortOrder
  }

  export type ProfessionScalarRelationFilter = {
    is?: ProfessionWhereInput
    isNot?: ProfessionWhereInput
  }

  export type SolutionScalarRelationFilter = {
    is?: SolutionWhereInput
    isNot?: SolutionWhereInput
  }

  export type SolutionToProfessionProfessionIdSolutionIdCompoundUniqueInput = {
    professionId: string
    solutionId: string
  }

  export type SolutionToProfessionCountOrderByAggregateInput = {
    professionId?: SortOrder
    solutionId?: SortOrder
  }

  export type SolutionToProfessionMaxOrderByAggregateInput = {
    professionId?: SortOrder
    solutionId?: SortOrder
  }

  export type SolutionToProfessionMinOrderByAggregateInput = {
    professionId?: SortOrder
    solutionId?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type QuizOptionListRelationFilter = {
    every?: QuizOptionWhereInput
    some?: QuizOptionWhereInput
    none?: QuizOptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuizOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    question?: SortOrder
    helpText?: SortOrder
  }

  export type QuizQuestionAvgOrderByAggregateInput = {
    step?: SortOrder
  }

  export type QuizQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    question?: SortOrder
    helpText?: SortOrder
  }

  export type QuizQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
    question?: SortOrder
    helpText?: SortOrder
  }

  export type QuizQuestionSumOrderByAggregateInput = {
    step?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type QuizQuestionScalarRelationFilter = {
    is?: QuizQuestionWhereInput
    isNot?: QuizQuestionWhereInput
  }

  export type QuizOptionCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    value?: SortOrder
    nextStepAction?: SortOrder
  }

  export type QuizOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    value?: SortOrder
    nextStepAction?: SortOrder
  }

  export type QuizOptionMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    value?: SortOrder
    nextStepAction?: SortOrder
  }

  export type QuizResultCountOrderByAggregateInput = {
    id?: SortOrder
    userEmail?: SortOrder
    userProfile?: SortOrder
    recommendedId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userEmail?: SortOrder
    userProfile?: SortOrder
    recommendedId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizResultMinOrderByAggregateInput = {
    id?: SortOrder
    userEmail?: SortOrder
    userProfile?: SortOrder
    recommendedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ConsultationCountOrderByAggregateInput = {
    id?: SortOrder
    clientEmail?: SortOrder
    legalStatus?: SortOrder
    monthlyVolume?: SortOrder
    currentTools?: SortOrder
    specificNeeds?: SortOrder
    invoiceUrl?: SortOrder
    paymentStatus?: SortOrder
    stripeSessionId?: SortOrder
    aiDraftText?: SortOrder
    isAnswered?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationAvgOrderByAggregateInput = {
    monthlyVolume?: SortOrder
  }

  export type ConsultationMaxOrderByAggregateInput = {
    id?: SortOrder
    clientEmail?: SortOrder
    legalStatus?: SortOrder
    monthlyVolume?: SortOrder
    currentTools?: SortOrder
    specificNeeds?: SortOrder
    invoiceUrl?: SortOrder
    paymentStatus?: SortOrder
    stripeSessionId?: SortOrder
    aiDraftText?: SortOrder
    isAnswered?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationMinOrderByAggregateInput = {
    id?: SortOrder
    clientEmail?: SortOrder
    legalStatus?: SortOrder
    monthlyVolume?: SortOrder
    currentTools?: SortOrder
    specificNeeds?: SortOrder
    invoiceUrl?: SortOrder
    paymentStatus?: SortOrder
    stripeSessionId?: SortOrder
    aiDraftText?: SortOrder
    isAnswered?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationSumOrderByAggregateInput = {
    monthlyVolume?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LeadSubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadSubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadSubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
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

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    magicLinkToken?: SortOrder
    magicLinkExpiresAt?: SortOrder
    sessionToken?: SortOrder
    companyName?: SortOrder
    siret?: SortOrder
    vatNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
    logoUrl?: SortOrder
    accentColor?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    hasActiveSubscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    magicLinkToken?: SortOrder
    magicLinkExpiresAt?: SortOrder
    sessionToken?: SortOrder
    companyName?: SortOrder
    siret?: SortOrder
    vatNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
    logoUrl?: SortOrder
    accentColor?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    hasActiveSubscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    magicLinkToken?: SortOrder
    magicLinkExpiresAt?: SortOrder
    sessionToken?: SortOrder
    companyName?: SortOrder
    siret?: SortOrder
    vatNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    iban?: SortOrder
    bic?: SortOrder
    logoUrl?: SortOrder
    accentColor?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    hasActiveSubscription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    clientName?: SortOrder
    clientAddress?: SortOrder
    clientCity?: SortOrder
    clientPostalCode?: SortOrder
    clientCountry?: SortOrder
    clientSiret?: SortOrder
    clientVatNumber?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    clientName?: SortOrder
    clientAddress?: SortOrder
    clientCity?: SortOrder
    clientPostalCode?: SortOrder
    clientCountry?: SortOrder
    clientSiret?: SortOrder
    clientVatNumber?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    invoiceNumber?: SortOrder
    issueDate?: SortOrder
    dueDate?: SortOrder
    clientName?: SortOrder
    clientAddress?: SortOrder
    clientCity?: SortOrder
    clientPostalCode?: SortOrder
    clientCountry?: SortOrder
    clientSiret?: SortOrder
    clientVatNumber?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    vatRate?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    vatRate?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    vatRate?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    vatRate?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    vatRate?: SortOrder
    totalHT?: SortOrder
    totalVAT?: SortOrder
    totalTTC?: SortOrder
  }

  export type SolutionToProfessionCreateNestedManyWithoutProfessionInput = {
    create?: XOR<SolutionToProfessionCreateWithoutProfessionInput, SolutionToProfessionUncheckedCreateWithoutProfessionInput> | SolutionToProfessionCreateWithoutProfessionInput[] | SolutionToProfessionUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutProfessionInput | SolutionToProfessionCreateOrConnectWithoutProfessionInput[]
    createMany?: SolutionToProfessionCreateManyProfessionInputEnvelope
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
  }

  export type SolutionToProfessionUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<SolutionToProfessionCreateWithoutProfessionInput, SolutionToProfessionUncheckedCreateWithoutProfessionInput> | SolutionToProfessionCreateWithoutProfessionInput[] | SolutionToProfessionUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutProfessionInput | SolutionToProfessionCreateOrConnectWithoutProfessionInput[]
    createMany?: SolutionToProfessionCreateManyProfessionInputEnvelope
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SolutionToProfessionUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<SolutionToProfessionCreateWithoutProfessionInput, SolutionToProfessionUncheckedCreateWithoutProfessionInput> | SolutionToProfessionCreateWithoutProfessionInput[] | SolutionToProfessionUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutProfessionInput | SolutionToProfessionCreateOrConnectWithoutProfessionInput[]
    upsert?: SolutionToProfessionUpsertWithWhereUniqueWithoutProfessionInput | SolutionToProfessionUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: SolutionToProfessionCreateManyProfessionInputEnvelope
    set?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    disconnect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    delete?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    update?: SolutionToProfessionUpdateWithWhereUniqueWithoutProfessionInput | SolutionToProfessionUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: SolutionToProfessionUpdateManyWithWhereWithoutProfessionInput | SolutionToProfessionUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: SolutionToProfessionScalarWhereInput | SolutionToProfessionScalarWhereInput[]
  }

  export type SolutionToProfessionUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<SolutionToProfessionCreateWithoutProfessionInput, SolutionToProfessionUncheckedCreateWithoutProfessionInput> | SolutionToProfessionCreateWithoutProfessionInput[] | SolutionToProfessionUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutProfessionInput | SolutionToProfessionCreateOrConnectWithoutProfessionInput[]
    upsert?: SolutionToProfessionUpsertWithWhereUniqueWithoutProfessionInput | SolutionToProfessionUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: SolutionToProfessionCreateManyProfessionInputEnvelope
    set?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    disconnect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    delete?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    update?: SolutionToProfessionUpdateWithWhereUniqueWithoutProfessionInput | SolutionToProfessionUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: SolutionToProfessionUpdateManyWithWhereWithoutProfessionInput | SolutionToProfessionUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: SolutionToProfessionScalarWhereInput | SolutionToProfessionScalarWhereInput[]
  }

  export type SolutionToProfessionCreateNestedManyWithoutSolutionInput = {
    create?: XOR<SolutionToProfessionCreateWithoutSolutionInput, SolutionToProfessionUncheckedCreateWithoutSolutionInput> | SolutionToProfessionCreateWithoutSolutionInput[] | SolutionToProfessionUncheckedCreateWithoutSolutionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutSolutionInput | SolutionToProfessionCreateOrConnectWithoutSolutionInput[]
    createMany?: SolutionToProfessionCreateManySolutionInputEnvelope
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
  }

  export type QuizResultCreateNestedManyWithoutRecommendedInput = {
    create?: XOR<QuizResultCreateWithoutRecommendedInput, QuizResultUncheckedCreateWithoutRecommendedInput> | QuizResultCreateWithoutRecommendedInput[] | QuizResultUncheckedCreateWithoutRecommendedInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutRecommendedInput | QuizResultCreateOrConnectWithoutRecommendedInput[]
    createMany?: QuizResultCreateManyRecommendedInputEnvelope
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
  }

  export type SolutionToProfessionUncheckedCreateNestedManyWithoutSolutionInput = {
    create?: XOR<SolutionToProfessionCreateWithoutSolutionInput, SolutionToProfessionUncheckedCreateWithoutSolutionInput> | SolutionToProfessionCreateWithoutSolutionInput[] | SolutionToProfessionUncheckedCreateWithoutSolutionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutSolutionInput | SolutionToProfessionCreateOrConnectWithoutSolutionInput[]
    createMany?: SolutionToProfessionCreateManySolutionInputEnvelope
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
  }

  export type QuizResultUncheckedCreateNestedManyWithoutRecommendedInput = {
    create?: XOR<QuizResultCreateWithoutRecommendedInput, QuizResultUncheckedCreateWithoutRecommendedInput> | QuizResultCreateWithoutRecommendedInput[] | QuizResultUncheckedCreateWithoutRecommendedInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutRecommendedInput | QuizResultCreateOrConnectWithoutRecommendedInput[]
    createMany?: QuizResultCreateManyRecommendedInputEnvelope
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
  }

  export type SolutionToProfessionUpdateManyWithoutSolutionNestedInput = {
    create?: XOR<SolutionToProfessionCreateWithoutSolutionInput, SolutionToProfessionUncheckedCreateWithoutSolutionInput> | SolutionToProfessionCreateWithoutSolutionInput[] | SolutionToProfessionUncheckedCreateWithoutSolutionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutSolutionInput | SolutionToProfessionCreateOrConnectWithoutSolutionInput[]
    upsert?: SolutionToProfessionUpsertWithWhereUniqueWithoutSolutionInput | SolutionToProfessionUpsertWithWhereUniqueWithoutSolutionInput[]
    createMany?: SolutionToProfessionCreateManySolutionInputEnvelope
    set?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    disconnect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    delete?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    update?: SolutionToProfessionUpdateWithWhereUniqueWithoutSolutionInput | SolutionToProfessionUpdateWithWhereUniqueWithoutSolutionInput[]
    updateMany?: SolutionToProfessionUpdateManyWithWhereWithoutSolutionInput | SolutionToProfessionUpdateManyWithWhereWithoutSolutionInput[]
    deleteMany?: SolutionToProfessionScalarWhereInput | SolutionToProfessionScalarWhereInput[]
  }

  export type QuizResultUpdateManyWithoutRecommendedNestedInput = {
    create?: XOR<QuizResultCreateWithoutRecommendedInput, QuizResultUncheckedCreateWithoutRecommendedInput> | QuizResultCreateWithoutRecommendedInput[] | QuizResultUncheckedCreateWithoutRecommendedInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutRecommendedInput | QuizResultCreateOrConnectWithoutRecommendedInput[]
    upsert?: QuizResultUpsertWithWhereUniqueWithoutRecommendedInput | QuizResultUpsertWithWhereUniqueWithoutRecommendedInput[]
    createMany?: QuizResultCreateManyRecommendedInputEnvelope
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    update?: QuizResultUpdateWithWhereUniqueWithoutRecommendedInput | QuizResultUpdateWithWhereUniqueWithoutRecommendedInput[]
    updateMany?: QuizResultUpdateManyWithWhereWithoutRecommendedInput | QuizResultUpdateManyWithWhereWithoutRecommendedInput[]
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
  }

  export type SolutionToProfessionUncheckedUpdateManyWithoutSolutionNestedInput = {
    create?: XOR<SolutionToProfessionCreateWithoutSolutionInput, SolutionToProfessionUncheckedCreateWithoutSolutionInput> | SolutionToProfessionCreateWithoutSolutionInput[] | SolutionToProfessionUncheckedCreateWithoutSolutionInput[]
    connectOrCreate?: SolutionToProfessionCreateOrConnectWithoutSolutionInput | SolutionToProfessionCreateOrConnectWithoutSolutionInput[]
    upsert?: SolutionToProfessionUpsertWithWhereUniqueWithoutSolutionInput | SolutionToProfessionUpsertWithWhereUniqueWithoutSolutionInput[]
    createMany?: SolutionToProfessionCreateManySolutionInputEnvelope
    set?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    disconnect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    delete?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    connect?: SolutionToProfessionWhereUniqueInput | SolutionToProfessionWhereUniqueInput[]
    update?: SolutionToProfessionUpdateWithWhereUniqueWithoutSolutionInput | SolutionToProfessionUpdateWithWhereUniqueWithoutSolutionInput[]
    updateMany?: SolutionToProfessionUpdateManyWithWhereWithoutSolutionInput | SolutionToProfessionUpdateManyWithWhereWithoutSolutionInput[]
    deleteMany?: SolutionToProfessionScalarWhereInput | SolutionToProfessionScalarWhereInput[]
  }

  export type QuizResultUncheckedUpdateManyWithoutRecommendedNestedInput = {
    create?: XOR<QuizResultCreateWithoutRecommendedInput, QuizResultUncheckedCreateWithoutRecommendedInput> | QuizResultCreateWithoutRecommendedInput[] | QuizResultUncheckedCreateWithoutRecommendedInput[]
    connectOrCreate?: QuizResultCreateOrConnectWithoutRecommendedInput | QuizResultCreateOrConnectWithoutRecommendedInput[]
    upsert?: QuizResultUpsertWithWhereUniqueWithoutRecommendedInput | QuizResultUpsertWithWhereUniqueWithoutRecommendedInput[]
    createMany?: QuizResultCreateManyRecommendedInputEnvelope
    set?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    disconnect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    delete?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    connect?: QuizResultWhereUniqueInput | QuizResultWhereUniqueInput[]
    update?: QuizResultUpdateWithWhereUniqueWithoutRecommendedInput | QuizResultUpdateWithWhereUniqueWithoutRecommendedInput[]
    updateMany?: QuizResultUpdateManyWithWhereWithoutRecommendedInput | QuizResultUpdateManyWithWhereWithoutRecommendedInput[]
    deleteMany?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
  }

  export type ProfessionCreateNestedOneWithoutSolutionsInput = {
    create?: XOR<ProfessionCreateWithoutSolutionsInput, ProfessionUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutSolutionsInput
    connect?: ProfessionWhereUniqueInput
  }

  export type SolutionCreateNestedOneWithoutProfessionsInput = {
    create?: XOR<SolutionCreateWithoutProfessionsInput, SolutionUncheckedCreateWithoutProfessionsInput>
    connectOrCreate?: SolutionCreateOrConnectWithoutProfessionsInput
    connect?: SolutionWhereUniqueInput
  }

  export type ProfessionUpdateOneRequiredWithoutSolutionsNestedInput = {
    create?: XOR<ProfessionCreateWithoutSolutionsInput, ProfessionUncheckedCreateWithoutSolutionsInput>
    connectOrCreate?: ProfessionCreateOrConnectWithoutSolutionsInput
    upsert?: ProfessionUpsertWithoutSolutionsInput
    connect?: ProfessionWhereUniqueInput
    update?: XOR<XOR<ProfessionUpdateToOneWithWhereWithoutSolutionsInput, ProfessionUpdateWithoutSolutionsInput>, ProfessionUncheckedUpdateWithoutSolutionsInput>
  }

  export type SolutionUpdateOneRequiredWithoutProfessionsNestedInput = {
    create?: XOR<SolutionCreateWithoutProfessionsInput, SolutionUncheckedCreateWithoutProfessionsInput>
    connectOrCreate?: SolutionCreateOrConnectWithoutProfessionsInput
    upsert?: SolutionUpsertWithoutProfessionsInput
    connect?: SolutionWhereUniqueInput
    update?: XOR<XOR<SolutionUpdateToOneWithWhereWithoutProfessionsInput, SolutionUpdateWithoutProfessionsInput>, SolutionUncheckedUpdateWithoutProfessionsInput>
  }

  export type QuizOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
  }

  export type QuizOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuizOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    set?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    disconnect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    delete?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    update?: QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizOptionUpdateManyWithWhereWithoutQuestionInput | QuizOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
  }

  export type QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    set?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    disconnect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    delete?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    update?: QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizOptionUpdateManyWithWhereWithoutQuestionInput | QuizOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
  }

  export type QuizQuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
  }

  export type QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuizQuestionUpsertWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
    update?: XOR<XOR<QuizQuestionUpdateToOneWithWhereWithoutOptionsInput, QuizQuestionUpdateWithoutOptionsInput>, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type SolutionCreateNestedOneWithoutQuizResultInput = {
    create?: XOR<SolutionCreateWithoutQuizResultInput, SolutionUncheckedCreateWithoutQuizResultInput>
    connectOrCreate?: SolutionCreateOrConnectWithoutQuizResultInput
    connect?: SolutionWhereUniqueInput
  }

  export type SolutionUpdateOneRequiredWithoutQuizResultNestedInput = {
    create?: XOR<SolutionCreateWithoutQuizResultInput, SolutionUncheckedCreateWithoutQuizResultInput>
    connectOrCreate?: SolutionCreateOrConnectWithoutQuizResultInput
    upsert?: SolutionUpsertWithoutQuizResultInput
    connect?: SolutionWhereUniqueInput
    update?: XOR<XOR<SolutionUpdateToOneWithWhereWithoutQuizResultInput, SolutionUpdateWithoutQuizResultInput>, SolutionUncheckedUpdateWithoutQuizResultInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type InvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SolutionToProfessionCreateWithoutProfessionInput = {
    solution: SolutionCreateNestedOneWithoutProfessionsInput
  }

  export type SolutionToProfessionUncheckedCreateWithoutProfessionInput = {
    solutionId: string
  }

  export type SolutionToProfessionCreateOrConnectWithoutProfessionInput = {
    where: SolutionToProfessionWhereUniqueInput
    create: XOR<SolutionToProfessionCreateWithoutProfessionInput, SolutionToProfessionUncheckedCreateWithoutProfessionInput>
  }

  export type SolutionToProfessionCreateManyProfessionInputEnvelope = {
    data: SolutionToProfessionCreateManyProfessionInput | SolutionToProfessionCreateManyProfessionInput[]
  }

  export type SolutionToProfessionUpsertWithWhereUniqueWithoutProfessionInput = {
    where: SolutionToProfessionWhereUniqueInput
    update: XOR<SolutionToProfessionUpdateWithoutProfessionInput, SolutionToProfessionUncheckedUpdateWithoutProfessionInput>
    create: XOR<SolutionToProfessionCreateWithoutProfessionInput, SolutionToProfessionUncheckedCreateWithoutProfessionInput>
  }

  export type SolutionToProfessionUpdateWithWhereUniqueWithoutProfessionInput = {
    where: SolutionToProfessionWhereUniqueInput
    data: XOR<SolutionToProfessionUpdateWithoutProfessionInput, SolutionToProfessionUncheckedUpdateWithoutProfessionInput>
  }

  export type SolutionToProfessionUpdateManyWithWhereWithoutProfessionInput = {
    where: SolutionToProfessionScalarWhereInput
    data: XOR<SolutionToProfessionUpdateManyMutationInput, SolutionToProfessionUncheckedUpdateManyWithoutProfessionInput>
  }

  export type SolutionToProfessionScalarWhereInput = {
    AND?: SolutionToProfessionScalarWhereInput | SolutionToProfessionScalarWhereInput[]
    OR?: SolutionToProfessionScalarWhereInput[]
    NOT?: SolutionToProfessionScalarWhereInput | SolutionToProfessionScalarWhereInput[]
    professionId?: StringFilter<"SolutionToProfession"> | string
    solutionId?: StringFilter<"SolutionToProfession"> | string
  }

  export type SolutionToProfessionCreateWithoutSolutionInput = {
    profession: ProfessionCreateNestedOneWithoutSolutionsInput
  }

  export type SolutionToProfessionUncheckedCreateWithoutSolutionInput = {
    professionId: string
  }

  export type SolutionToProfessionCreateOrConnectWithoutSolutionInput = {
    where: SolutionToProfessionWhereUniqueInput
    create: XOR<SolutionToProfessionCreateWithoutSolutionInput, SolutionToProfessionUncheckedCreateWithoutSolutionInput>
  }

  export type SolutionToProfessionCreateManySolutionInputEnvelope = {
    data: SolutionToProfessionCreateManySolutionInput | SolutionToProfessionCreateManySolutionInput[]
  }

  export type QuizResultCreateWithoutRecommendedInput = {
    id?: string
    userEmail: string
    userProfile: string
    createdAt?: Date | string
  }

  export type QuizResultUncheckedCreateWithoutRecommendedInput = {
    id?: string
    userEmail: string
    userProfile: string
    createdAt?: Date | string
  }

  export type QuizResultCreateOrConnectWithoutRecommendedInput = {
    where: QuizResultWhereUniqueInput
    create: XOR<QuizResultCreateWithoutRecommendedInput, QuizResultUncheckedCreateWithoutRecommendedInput>
  }

  export type QuizResultCreateManyRecommendedInputEnvelope = {
    data: QuizResultCreateManyRecommendedInput | QuizResultCreateManyRecommendedInput[]
  }

  export type SolutionToProfessionUpsertWithWhereUniqueWithoutSolutionInput = {
    where: SolutionToProfessionWhereUniqueInput
    update: XOR<SolutionToProfessionUpdateWithoutSolutionInput, SolutionToProfessionUncheckedUpdateWithoutSolutionInput>
    create: XOR<SolutionToProfessionCreateWithoutSolutionInput, SolutionToProfessionUncheckedCreateWithoutSolutionInput>
  }

  export type SolutionToProfessionUpdateWithWhereUniqueWithoutSolutionInput = {
    where: SolutionToProfessionWhereUniqueInput
    data: XOR<SolutionToProfessionUpdateWithoutSolutionInput, SolutionToProfessionUncheckedUpdateWithoutSolutionInput>
  }

  export type SolutionToProfessionUpdateManyWithWhereWithoutSolutionInput = {
    where: SolutionToProfessionScalarWhereInput
    data: XOR<SolutionToProfessionUpdateManyMutationInput, SolutionToProfessionUncheckedUpdateManyWithoutSolutionInput>
  }

  export type QuizResultUpsertWithWhereUniqueWithoutRecommendedInput = {
    where: QuizResultWhereUniqueInput
    update: XOR<QuizResultUpdateWithoutRecommendedInput, QuizResultUncheckedUpdateWithoutRecommendedInput>
    create: XOR<QuizResultCreateWithoutRecommendedInput, QuizResultUncheckedCreateWithoutRecommendedInput>
  }

  export type QuizResultUpdateWithWhereUniqueWithoutRecommendedInput = {
    where: QuizResultWhereUniqueInput
    data: XOR<QuizResultUpdateWithoutRecommendedInput, QuizResultUncheckedUpdateWithoutRecommendedInput>
  }

  export type QuizResultUpdateManyWithWhereWithoutRecommendedInput = {
    where: QuizResultScalarWhereInput
    data: XOR<QuizResultUpdateManyMutationInput, QuizResultUncheckedUpdateManyWithoutRecommendedInput>
  }

  export type QuizResultScalarWhereInput = {
    AND?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
    OR?: QuizResultScalarWhereInput[]
    NOT?: QuizResultScalarWhereInput | QuizResultScalarWhereInput[]
    id?: StringFilter<"QuizResult"> | string
    userEmail?: StringFilter<"QuizResult"> | string
    userProfile?: StringFilter<"QuizResult"> | string
    recommendedId?: StringFilter<"QuizResult"> | string
    createdAt?: DateTimeFilter<"QuizResult"> | Date | string
  }

  export type ProfessionCreateWithoutSolutionsInput = {
    id?: string
    slug: string
    name: string
    category: string
    description: string
    icon: string
    contentHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionUncheckedCreateWithoutSolutionsInput = {
    id?: string
    slug: string
    name: string
    category: string
    description: string
    icon: string
    contentHtml: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionCreateOrConnectWithoutSolutionsInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutSolutionsInput, ProfessionUncheckedCreateWithoutSolutionsInput>
  }

  export type SolutionCreateWithoutProfessionsInput = {
    id?: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
    QuizResult?: QuizResultCreateNestedManyWithoutRecommendedInput
  }

  export type SolutionUncheckedCreateWithoutProfessionsInput = {
    id?: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
    QuizResult?: QuizResultUncheckedCreateNestedManyWithoutRecommendedInput
  }

  export type SolutionCreateOrConnectWithoutProfessionsInput = {
    where: SolutionWhereUniqueInput
    create: XOR<SolutionCreateWithoutProfessionsInput, SolutionUncheckedCreateWithoutProfessionsInput>
  }

  export type ProfessionUpsertWithoutSolutionsInput = {
    update: XOR<ProfessionUpdateWithoutSolutionsInput, ProfessionUncheckedUpdateWithoutSolutionsInput>
    create: XOR<ProfessionCreateWithoutSolutionsInput, ProfessionUncheckedCreateWithoutSolutionsInput>
    where?: ProfessionWhereInput
  }

  export type ProfessionUpdateToOneWithWhereWithoutSolutionsInput = {
    where?: ProfessionWhereInput
    data: XOR<ProfessionUpdateWithoutSolutionsInput, ProfessionUncheckedUpdateWithoutSolutionsInput>
  }

  export type ProfessionUpdateWithoutSolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    contentHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionUncheckedUpdateWithoutSolutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    contentHtml?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionUpsertWithoutProfessionsInput = {
    update: XOR<SolutionUpdateWithoutProfessionsInput, SolutionUncheckedUpdateWithoutProfessionsInput>
    create: XOR<SolutionCreateWithoutProfessionsInput, SolutionUncheckedCreateWithoutProfessionsInput>
    where?: SolutionWhereInput
  }

  export type SolutionUpdateToOneWithWhereWithoutProfessionsInput = {
    where?: SolutionWhereInput
    data: XOR<SolutionUpdateWithoutProfessionsInput, SolutionUncheckedUpdateWithoutProfessionsInput>
  }

  export type SolutionUpdateWithoutProfessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    QuizResult?: QuizResultUpdateManyWithoutRecommendedNestedInput
  }

  export type SolutionUncheckedUpdateWithoutProfessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    QuizResult?: QuizResultUncheckedUpdateManyWithoutRecommendedNestedInput
  }

  export type QuizOptionCreateWithoutQuestionInput = {
    id?: string
    text: string
    value: string
    nextStepAction: string
  }

  export type QuizOptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    value: string
    nextStepAction: string
  }

  export type QuizOptionCreateOrConnectWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    create: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizOptionCreateManyQuestionInputEnvelope = {
    data: QuizOptionCreateManyQuestionInput | QuizOptionCreateManyQuestionInput[]
  }

  export type QuizOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    update: XOR<QuizOptionUpdateWithoutQuestionInput, QuizOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    data: XOR<QuizOptionUpdateWithoutQuestionInput, QuizOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuizOptionScalarWhereInput
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuizOptionScalarWhereInput = {
    AND?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
    OR?: QuizOptionScalarWhereInput[]
    NOT?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
    id?: StringFilter<"QuizOption"> | string
    questionId?: StringFilter<"QuizOption"> | string
    text?: StringFilter<"QuizOption"> | string
    value?: StringFilter<"QuizOption"> | string
    nextStepAction?: StringFilter<"QuizOption"> | string
  }

  export type QuizQuestionCreateWithoutOptionsInput = {
    id?: string
    step: number
    question: string
    helpText?: string | null
  }

  export type QuizQuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    step: number
    question: string
    helpText?: string | null
  }

  export type QuizQuestionCreateOrConnectWithoutOptionsInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
  }

  export type QuizQuestionUpsertWithoutOptionsInput = {
    update: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    where?: QuizQuestionWhereInput
  }

  export type QuizQuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuizQuestionWhereInput
    data: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuizQuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizQuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    step?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SolutionCreateWithoutQuizResultInput = {
    id?: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
    professions?: SolutionToProfessionCreateNestedManyWithoutSolutionInput
  }

  export type SolutionUncheckedCreateWithoutQuizResultInput = {
    id?: string
    name: string
    logoUrl: string
    affiliateUrl: string
    payoutDetails: string
    isGoodForVol: string
    isGoodForType: string
    description: string
    professions?: SolutionToProfessionUncheckedCreateNestedManyWithoutSolutionInput
  }

  export type SolutionCreateOrConnectWithoutQuizResultInput = {
    where: SolutionWhereUniqueInput
    create: XOR<SolutionCreateWithoutQuizResultInput, SolutionUncheckedCreateWithoutQuizResultInput>
  }

  export type SolutionUpsertWithoutQuizResultInput = {
    update: XOR<SolutionUpdateWithoutQuizResultInput, SolutionUncheckedUpdateWithoutQuizResultInput>
    create: XOR<SolutionCreateWithoutQuizResultInput, SolutionUncheckedCreateWithoutQuizResultInput>
    where?: SolutionWhereInput
  }

  export type SolutionUpdateToOneWithWhereWithoutQuizResultInput = {
    where?: SolutionWhereInput
    data: XOR<SolutionUpdateWithoutQuizResultInput, SolutionUncheckedUpdateWithoutQuizResultInput>
  }

  export type SolutionUpdateWithoutQuizResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professions?: SolutionToProfessionUpdateManyWithoutSolutionNestedInput
  }

  export type SolutionUncheckedUpdateWithoutQuizResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    affiliateUrl?: StringFieldUpdateOperationsInput | string
    payoutDetails?: StringFieldUpdateOperationsInput | string
    isGoodForVol?: StringFieldUpdateOperationsInput | string
    isGoodForType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    professions?: SolutionToProfessionUncheckedUpdateManyWithoutSolutionNestedInput
  }

  export type InvoiceCreateWithoutUserInput = {
    id?: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutUserInput = {
    id?: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateManyUserInputEnvelope = {
    data: InvoiceCreateManyUserInput | InvoiceCreateManyUserInput[]
  }

  export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    userId?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    issueDate?: DateTimeFilter<"Invoice"> | Date | string
    dueDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    clientName?: StringFilter<"Invoice"> | string
    clientAddress?: StringNullableFilter<"Invoice"> | string | null
    clientCity?: StringNullableFilter<"Invoice"> | string | null
    clientPostalCode?: StringNullableFilter<"Invoice"> | string | null
    clientCountry?: StringFilter<"Invoice"> | string
    clientSiret?: StringNullableFilter<"Invoice"> | string | null
    clientVatNumber?: StringNullableFilter<"Invoice"> | string | null
    totalHT?: FloatFilter<"Invoice"> | number
    totalVAT?: FloatFilter<"Invoice"> | number
    totalTTC?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    email: string
    magicLinkToken?: string | null
    magicLinkExpiresAt?: Date | string | null
    sessionToken?: string | null
    companyName?: string | null
    siret?: string | null
    vatNumber?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    iban?: string | null
    bic?: string | null
    logoUrl?: string | null
    accentColor?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    hasActiveSubscription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    email: string
    magicLinkToken?: string | null
    magicLinkExpiresAt?: Date | string | null
    sessionToken?: string | null
    companyName?: string | null
    siret?: string | null
    vatNumber?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    iban?: string | null
    bic?: string | null
    logoUrl?: string | null
    accentColor?: string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    hasActiveSubscription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    id?: string
    description: string
    quantity?: number
    unitPrice?: number
    vatRate?: number
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    description: string
    quantity?: number
    unitPrice?: number
    vatRate?: number
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    magicLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    bic?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    magicLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    magicLinkExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    siret?: NullableStringFieldUpdateOperationsInput | string | null
    vatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    bic?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    OR?: InvoiceItemScalarWhereInput[]
    NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    description?: StringFilter<"InvoiceItem"> | string
    quantity?: FloatFilter<"InvoiceItem"> | number
    unitPrice?: FloatFilter<"InvoiceItem"> | number
    vatRate?: FloatFilter<"InvoiceItem"> | number
    totalHT?: FloatFilter<"InvoiceItem"> | number
    totalVAT?: FloatFilter<"InvoiceItem"> | number
    totalTTC?: FloatFilter<"InvoiceItem"> | number
  }

  export type InvoiceCreateWithoutItemsInput = {
    id?: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionToProfessionCreateManyProfessionInput = {
    solutionId: string
  }

  export type SolutionToProfessionUpdateWithoutProfessionInput = {
    solution?: SolutionUpdateOneRequiredWithoutProfessionsNestedInput
  }

  export type SolutionToProfessionUncheckedUpdateWithoutProfessionInput = {
    solutionId?: StringFieldUpdateOperationsInput | string
  }

  export type SolutionToProfessionUncheckedUpdateManyWithoutProfessionInput = {
    solutionId?: StringFieldUpdateOperationsInput | string
  }

  export type SolutionToProfessionCreateManySolutionInput = {
    professionId: string
  }

  export type QuizResultCreateManyRecommendedInput = {
    id?: string
    userEmail: string
    userProfile: string
    createdAt?: Date | string
  }

  export type SolutionToProfessionUpdateWithoutSolutionInput = {
    profession?: ProfessionUpdateOneRequiredWithoutSolutionsNestedInput
  }

  export type SolutionToProfessionUncheckedUpdateWithoutSolutionInput = {
    professionId?: StringFieldUpdateOperationsInput | string
  }

  export type SolutionToProfessionUncheckedUpdateManyWithoutSolutionInput = {
    professionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizResultUpdateWithoutRecommendedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultUncheckedUpdateWithoutRecommendedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizResultUncheckedUpdateManyWithoutRecommendedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userProfile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizOptionCreateManyQuestionInput = {
    id?: string
    text: string
    value: string
    nextStepAction: string
  }

  export type QuizOptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nextStepAction?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nextStepAction?: StringFieldUpdateOperationsInput | string
  }

  export type QuizOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    nextStepAction?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyUserInput = {
    id?: string
    invoiceNumber: string
    issueDate?: Date | string
    dueDate?: Date | string | null
    clientName: string
    clientAddress?: string | null
    clientCity?: string | null
    clientPostalCode?: string | null
    clientCountry?: string
    clientSiret?: string | null
    clientVatNumber?: string | null
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    clientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    clientCity?: NullableStringFieldUpdateOperationsInput | string | null
    clientPostalCode?: NullableStringFieldUpdateOperationsInput | string | null
    clientCountry?: StringFieldUpdateOperationsInput | string
    clientSiret?: NullableStringFieldUpdateOperationsInput | string | null
    clientVatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    id?: string
    description: string
    quantity?: number
    unitPrice?: number
    vatRate?: number
    totalHT?: number
    totalVAT?: number
    totalTTC?: number
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    totalHT?: FloatFieldUpdateOperationsInput | number
    totalVAT?: FloatFieldUpdateOperationsInput | number
    totalTTC?: FloatFieldUpdateOperationsInput | number
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