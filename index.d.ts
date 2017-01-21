// Type definitions for INSERT PROJECT NAME HERE
// Project: http://example.com/THE_PROJECT_WEBSITE
// Definitions by: Your Name <YOUR_GITHUB_PROFILE_OR_EMAIL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Definition file started by dts-gen
    declare class Money {
        constructor(amount: number, currency: any);
        add(other: Money): Money;
        allocate(ratios: number[]): Money[];
        compare(other: any): any;
        divide(divisor: number, fn?: any): Money;
        equals(other: Money): boolean;
        getAmount(): number;
        getCurrency(): any;
        greaterThan(other: Money): boolean;
        greaterThanOrEqual(other: Money): boolean;
        isNegative(): boolean;
        isPositive(): boolean;
        isZero(): boolean;
        lessThan(other: Money): boolean;
        lessThanOrEqual(other: Money): boolean;
        multiply(multiplier: number, fn?: any): Money;
        subtract(other: Money): Money;
        abs(): Money;
        toDecimal(): number;
        toJSON(): JSON;
        toString(): string;

        static fromDecimal(amount: number, currency: any): Money;
        static fromInteger(amount: number, currency: any): Money;
        static sum(values: Money[]): Money;

        static AED: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static AFN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ALL: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static AMD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ARS: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static AUD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static AZN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BAM: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BDT: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BGN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BHD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BIF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BND: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BOB: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BRL: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BWP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BYR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static BZD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CAD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CDF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CHF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CLP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CNY: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static COP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CRC: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CVE: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static CZK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static DJF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static DKK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static DOP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static DZD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static EEK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static EGP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ERN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ETB: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static EUR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static GBP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static GEL: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static GHS: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static GNF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static GTQ: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static HKD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static HNL: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static HRK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static HUF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static IDR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ILS: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static INR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static IQD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static IRR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ISK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static JMD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static JOD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static JPY: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static KES: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static KHR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static KMF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static KRW: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static KWD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static KZT: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static LAK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static LBP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static LKR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static LTL: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static LVL: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static LYD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MAD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MDL: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MGA: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MKD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MMK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MOP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MUR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MXN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MYR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static MZN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static NAD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static NGN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static NIO: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static NOK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static NPR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static NZD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static OMR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static PAB: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static PEN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static PHP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static PKR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static PLN: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static PYG: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static QAR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static RON: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static RSD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static RUB: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static RWF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static SAR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static SDG: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static SEK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static SGD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static SOS: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static SYP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static THB: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static TND: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static TOP: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static TRY: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static TTD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static TWD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static TZS: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static UAH: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static UGX: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static USD: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static UYU: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static UZS: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static VEF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static VND: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static XAF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static XOF: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static YER: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ZAR: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
        static ZMK: {
            code: string;
            decimal_digits: number;
            name: string;
            name_plural: string;
            rounding: number;
            symbol: string;
            symbol_native: string;
        };
    }

export = Money
