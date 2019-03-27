// tslint:disable

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Address = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country: Country;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Adjustment = {
  adjustmentSource: Scalars['String'];
  type: AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
};

export type AdjustmentOperations = {
  conditions: Array<ConfigurableOperation>;
  actions: Array<ConfigurableOperation>;
};

export enum AdjustmentType {
  Tax = 'TAX',
  Promotion = 'PROMOTION',
  Shipping = 'SHIPPING',
  Refund = 'REFUND',
  Tax_Refund = 'TAX_REFUND',
  Promotion_Refund = 'PROMOTION_REFUND',
  Shipping_Refund = 'SHIPPING_REFUND',
}

export type Administrator = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  user: User;
};

export type AdministratorList = PaginatedList & {
  items: Array<Administrator>;
  totalItems: Scalars['Int'];
};

export type Asset = Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: AssetType;
  fileSize: Scalars['Int'];
  mimeType: Scalars['String'];
  source: Scalars['String'];
  preview: Scalars['String'];
};

export type AssetList = PaginatedList & {
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY',
}

export type BooleanOperators = {
  eq?: Maybe<Scalars['Boolean']>;
};

export type Channel = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  token: Scalars['String'];
  defaultTaxZone?: Maybe<Zone>;
  defaultShippingZone?: Maybe<Zone>;
  defaultLanguageCode: LanguageCode;
  currencyCode: CurrencyCode;
  pricesIncludeTax: Scalars['Boolean'];
};

export type Collection = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  breadcrumbs: Array<CollectionBreadcrumb>;
  position: Scalars['Int'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  parent?: Maybe<Collection>;
  children?: Maybe<Array<Collection>>;
  filters: Array<ConfigurableOperation>;
  translations: Array<CollectionTranslation>;
  productVariants: ProductVariantList;
  customFields?: Maybe<Scalars['JSON']>;
};

export type CollectionProductVariantsArgs = {
  options?: Maybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CollectionFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  position?: Maybe<NumberOperators>;
  description?: Maybe<StringOperators>;
};

export type CollectionList = PaginatedList & {
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<CollectionSortParameter>;
  filter?: Maybe<CollectionFilterParameter>;
};

export type CollectionSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  position?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
};

export type CollectionTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type ConfigArg = {
  name: Scalars['String'];
  type: ConfigArgType;
  value?: Maybe<Scalars['String']>;
};

export type ConfigArgInput = {
  name: Scalars['String'];
  type: ConfigArgType;
  value?: Maybe<Scalars['String']>;
};

/** Certain entities allow arbitrary configuration arguments to be specified which can then
 * be set in the admin-ui and used in the business logic of the app. These are the valid
 * data types of such arguments. The data type influences:
 *
 * 1. How the argument form field is rendered in the admin-ui
 * 2. The JavaScript type into which the value is coerced before being passed to the business logic.
 */
export enum ConfigArgType {
  Percentage = 'PERCENTAGE',
  Money = 'MONEY',
  Int = 'INT',
  String = 'STRING',
  Datetime = 'DATETIME',
  Boolean = 'BOOLEAN',
  Facet_Value_Ids = 'FACET_VALUE_IDS',
}

export type ConfigurableOperation = {
  code: Scalars['String'];
  args: Array<ConfigArg>;
  description: Scalars['String'];
};

export type ConfigurableOperationInput = {
  code: Scalars['String'];
  arguments: Array<ConfigArgInput>;
};

export type Country = Node & {
  id: Scalars['ID'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  translations: Array<CountryTranslation>;
};

export type CountryList = PaginatedList & {
  items: Array<Country>;
  totalItems: Scalars['Int'];
};

export type CountryTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type CreateAddressInput = {
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type CreateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
};

/** ISO 4217 currency code */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Che = 'CHE',
  /** Swiss franc */
  Chw = 'CHW',
  /** Chilean peso */
  Clp = 'CLP',
  /** Renminbi (Chinese) yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mru = 'MRU',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona/kronor */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Stn = 'STN',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikistani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan paʻanga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** Uruguayan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Ves = 'VES',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** CFP franc (franc Pacifique) */
  Xpf = 'XPF',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean dollar */
  Zwl = 'ZWL',
}

export type CurrentUser = {
  id: Scalars['ID'];
  identifier: Scalars['String'];
  channelTokens: Array<Scalars['String']>;
};

export type Customer = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  addresses?: Maybe<Array<Address>>;
  orders: OrderList;
  user?: Maybe<User>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type CustomerOrdersArgs = {
  options?: Maybe<OrderListOptions>;
};

export type CustomerGroup = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type CustomerList = PaginatedList & {
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};

export type DateOperators = {
  eq?: Maybe<Scalars['DateTime']>;
  before?: Maybe<Scalars['DateTime']>;
  after?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateRange>;
};

export type DateRange = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type DeletionResponse = {
  result: DeletionResult;
  message?: Maybe<Scalars['String']>;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  Not_Deleted = 'NOT_DELETED',
}

export type Facet = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  code: Scalars['String'];
  values: Array<FacetValue>;
  translations: Array<FacetTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type FacetList = PaginatedList & {
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};

export type FacetTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type FacetValue = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  facet: Facet;
  name: Scalars['String'];
  code: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

/** Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  facetValue: FacetValue;
  count: Scalars['Int'];
};

export type FacetValueTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type GlobalSettings = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  availableLanguages: Array<LanguageCode>;
  serverConfig: ServerConfig;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ImportInfo = {
  errors?: Maybe<Array<Scalars['String']>>;
  processed: Scalars['Int'];
  imported: Scalars['Int'];
};

/** ISO 639-1 language code */
export enum LanguageCode {
  /** Afar */
  Aa = 'aa',
  /** Abkhazian */
  Ab = 'ab',
  /** Afrikaans */
  Af = 'af',
  /** Akan */
  Ak = 'ak',
  /** Albanian */
  Sq = 'sq',
  /** Amharic */
  Am = 'am',
  /** Arabic */
  Ar = 'ar',
  /** Aragonese */
  An = 'an',
  /** Armenian */
  Hy = 'hy',
  /** Assamese */
  As = 'as',
  /** Avaric */
  Av = 'av',
  /** Avestan */
  Ae = 'ae',
  /** Aymara */
  Ay = 'ay',
  /** Azerbaijani */
  Az = 'az',
  /** Bashkir */
  Ba = 'ba',
  /** Bambara */
  Bm = 'bm',
  /** Basque */
  Eu = 'eu',
  /** Belarusian */
  Be = 'be',
  /** Bengali */
  Bn = 'bn',
  /** Bihari languages */
  Bh = 'bh',
  /** Bislama */
  Bi = 'bi',
  /** Bosnian */
  Bs = 'bs',
  /** Breton */
  Br = 'br',
  /** Bulgarian */
  Bg = 'bg',
  /** Burmese */
  My = 'my',
  /** Catalan; Valencian */
  Ca = 'ca',
  /** Chamorro */
  Ch = 'ch',
  /** Chechen */
  Ce = 'ce',
  /** Chinese */
  Zh = 'zh',
  /** Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic */
  Cu = 'cu',
  /** Chuvash */
  Cv = 'cv',
  /** Cornish */
  Kw = 'kw',
  /** Corsican */
  Co = 'co',
  /** Cree */
  Cr = 'cr',
  /** Czech */
  Cs = 'cs',
  /** Danish */
  Da = 'da',
  /** Divehi; Dhivehi; Maldivian */
  Dv = 'dv',
  /** Dutch; Flemish */
  Nl = 'nl',
  /** Dzongkha */
  Dz = 'dz',
  /** English */
  En = 'en',
  /** Esperanto */
  Eo = 'eo',
  /** Estonian */
  Et = 'et',
  /** Ewe */
  Ee = 'ee',
  /** Faroese */
  Fo = 'fo',
  /** Fijian */
  Fj = 'fj',
  /** Finnish */
  Fi = 'fi',
  /** French */
  Fr = 'fr',
  /** Western Frisian */
  Fy = 'fy',
  /** Fulah */
  Ff = 'ff',
  /** Georgian */
  Ka = 'ka',
  /** German */
  De = 'de',
  /** Gaelic; Scottish Gaelic */
  Gd = 'gd',
  /** Irish */
  Ga = 'ga',
  /** Galician */
  Gl = 'gl',
  /** Manx */
  Gv = 'gv',
  /** Greek, Modern (1453-) */
  El = 'el',
  /** Guarani */
  Gn = 'gn',
  /** Gujarati */
  Gu = 'gu',
  /** Haitian; Haitian Creole */
  Ht = 'ht',
  /** Hausa */
  Ha = 'ha',
  /** Hebrew */
  He = 'he',
  /** Herero */
  Hz = 'hz',
  /** Hindi */
  Hi = 'hi',
  /** Hiri Motu */
  Ho = 'ho',
  /** Croatian */
  Hr = 'hr',
  /** Hungarian */
  Hu = 'hu',
  /** Igbo */
  Ig = 'ig',
  /** Icelandic */
  Is = 'is',
  /** Ido */
  Io = 'io',
  /** Sichuan Yi; Nuosu */
  Ii = 'ii',
  /** Inuktitut */
  Iu = 'iu',
  /** Interlingue; Occidental */
  Ie = 'ie',
  /** Interlingua (International Auxiliary Language Association) */
  Ia = 'ia',
  /** Indonesian */
  Id = 'id',
  /** Inupiaq */
  Ik = 'ik',
  /** Italian */
  It = 'it',
  /** Javanese */
  Jv = 'jv',
  /** Japanese */
  Ja = 'ja',
  /** Kalaallisut; Greenlandic */
  Kl = 'kl',
  /** Kannada */
  Kn = 'kn',
  /** Kashmiri */
  Ks = 'ks',
  /** Kanuri */
  Kr = 'kr',
  /** Kazakh */
  Kk = 'kk',
  /** Central Khmer */
  Km = 'km',
  /** Kikuyu; Gikuyu */
  Ki = 'ki',
  /** Kinyarwanda */
  Rw = 'rw',
  /** Kirghiz; Kyrgyz */
  Ky = 'ky',
  /** Komi */
  Kv = 'kv',
  /** Kongo */
  Kg = 'kg',
  /** Korean */
  Ko = 'ko',
  /** Kuanyama; Kwanyama */
  Kj = 'kj',
  /** Kurdish */
  Ku = 'ku',
  /** Lao */
  Lo = 'lo',
  /** Latin */
  La = 'la',
  /** Latvian */
  Lv = 'lv',
  /** Limburgan; Limburger; Limburgish */
  Li = 'li',
  /** Lingala */
  Ln = 'ln',
  /** Lithuanian */
  Lt = 'lt',
  /** Luxembourgish; Letzeburgesch */
  Lb = 'lb',
  /** Luba-Katanga */
  Lu = 'lu',
  /** Ganda */
  Lg = 'lg',
  /** Macedonian */
  Mk = 'mk',
  /** Marshallese */
  Mh = 'mh',
  /** Malayalam */
  Ml = 'ml',
  /** Maori */
  Mi = 'mi',
  /** Marathi */
  Mr = 'mr',
  /** Malay */
  Ms = 'ms',
  /** Malagasy */
  Mg = 'mg',
  /** Maltese */
  Mt = 'mt',
  /** Mongolian */
  Mn = 'mn',
  /** Nauru */
  Na = 'na',
  /** Navajo; Navaho */
  Nv = 'nv',
  /** Ndebele, South; South Ndebele */
  Nr = 'nr',
  /** Ndebele, North; North Ndebele */
  Nd = 'nd',
  /** Ndonga */
  Ng = 'ng',
  /** Nepali */
  Ne = 'ne',
  /** Norwegian Nynorsk; Nynorsk, Norwegian */
  Nn = 'nn',
  /** Bokmål, Norwegian; Norwegian Bokmål */
  Nb = 'nb',
  /** Norwegian */
  No = 'no',
  /** Chichewa; Chewa; Nyanja */
  Ny = 'ny',
  /** Occitan (post 1500); Provençal */
  Oc = 'oc',
  /** Ojibwa */
  Oj = 'oj',
  /** Oriya */
  Or = 'or',
  /** Oromo */
  Om = 'om',
  /** Ossetian; Ossetic */
  Os = 'os',
  /** Panjabi; Punjabi */
  Pa = 'pa',
  /** Persian */
  Fa = 'fa',
  /** Pali */
  Pi = 'pi',
  /** Polish */
  Pl = 'pl',
  /** Portuguese */
  Pt = 'pt',
  /** Pushto; Pashto */
  Ps = 'ps',
  /** Quechua */
  Qu = 'qu',
  /** Romansh */
  Rm = 'rm',
  /** Romanian; Moldavian; Moldovan */
  Ro = 'ro',
  /** Rundi */
  Rn = 'rn',
  /** Russian */
  Ru = 'ru',
  /** Sango */
  Sg = 'sg',
  /** Sanskrit */
  Sa = 'sa',
  /** Sinhala; Sinhalese */
  Si = 'si',
  /** Slovak */
  Sk = 'sk',
  /** Slovenian */
  Sl = 'sl',
  /** Northern Sami */
  Se = 'se',
  /** Samoan */
  Sm = 'sm',
  /** Shona */
  Sn = 'sn',
  /** Sindhi */
  Sd = 'sd',
  /** Somali */
  So = 'so',
  /** Sotho, Southern */
  St = 'st',
  /** Spanish; Castilian */
  Es = 'es',
  /** Sardinian */
  Sc = 'sc',
  /** Serbian */
  Sr = 'sr',
  /** Swati */
  Ss = 'ss',
  /** Sundanese */
  Su = 'su',
  /** Swahili */
  Sw = 'sw',
  /** Swedish */
  Sv = 'sv',
  /** Tahitian */
  Ty = 'ty',
  /** Tamil */
  Ta = 'ta',
  /** Tatar */
  Tt = 'tt',
  /** Telugu */
  Te = 'te',
  /** Tajik */
  Tg = 'tg',
  /** Tagalog */
  Tl = 'tl',
  /** Thai */
  Th = 'th',
  /** Tibetan */
  Bo = 'bo',
  /** Tigrinya */
  Ti = 'ti',
  /** Tonga (Tonga Islands) */
  To = 'to',
  /** Tswana */
  Tn = 'tn',
  /** Tsonga */
  Ts = 'ts',
  /** Turkmen */
  Tk = 'tk',
  /** Turkish */
  Tr = 'tr',
  /** Twi */
  Tw = 'tw',
  /** Uighur; Uyghur */
  Ug = 'ug',
  /** Ukrainian */
  Uk = 'uk',
  /** Urdu */
  Ur = 'ur',
  /** Uzbek */
  Uz = 'uz',
  /** Venda */
  Ve = 've',
  /** Vietnamese */
  Vi = 'vi',
  /** Volapük */
  Vo = 'vo',
  /** Welsh */
  Cy = 'cy',
  /** Walloon */
  Wa = 'wa',
  /** Wolof */
  Wo = 'wo',
  /** Xhosa */
  Xh = 'xh',
  /** Yiddish */
  Yi = 'yi',
  /** Yoruba */
  Yo = 'yo',
  /** Zhuang; Chuang */
  Za = 'za',
  /** Zulu */
  Zu = 'zu',
}

export type LoginResult = {
  user: CurrentUser;
};

export type Mutation = {
  addItemToOrder?: Maybe<Order>;
  removeItemFromOrder?: Maybe<Order>;
  adjustItemQuantity?: Maybe<Order>;
  transitionOrderToState?: Maybe<Order>;
  setOrderShippingAddress?: Maybe<Order>;
  setOrderShippingMethod?: Maybe<Order>;
  addPaymentToOrder?: Maybe<Order>;
  setCustomerForOrder?: Maybe<Order>;
  login: LoginResult;
  logout: Scalars['Boolean'];
  /** Regenerate and send a verification token for a new Customer registration. Only
   * applicable if `authOptions.requireVerification` is set to true.
   */
  refreshCustomerVerification: Scalars['Boolean'];
  /** Register a Customer account with the given credentials */
  registerCustomerAccount: Scalars['Boolean'];
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /** Delete an existing Address */
  deleteCustomerAddress: Scalars['Boolean'];
  /** Verify a Customer email address with the token sent to that address. Only
   * applicable if `authOptions.requireVerification` is set to true.
   */
  verifyCustomerAccount: LoginResult;
  /** Update the password of the active Customer */
  updateCustomerPassword?: Maybe<Scalars['Boolean']>;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<Scalars['Boolean']>;
  /** Resets a Customer's password based on the provided token */
  resetPassword: LoginResult;
};

export type MutationAddItemToOrderArgs = {
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type MutationRemoveItemFromOrderArgs = {
  orderItemId: Scalars['ID'];
};

export type MutationAdjustItemQuantityArgs = {
  orderItemId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
};

export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};

export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};

export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};

export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};

export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: Maybe<Scalars['Boolean']>;
};

export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};

export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};

export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};

export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};

export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};

export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};

export type MutationVerifyCustomerAccountArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type NumberOperators = {
  eq?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  between?: Maybe<NumberRange>;
};

export type NumberRange = {
  start: Scalars['Float'];
  end: Scalars['Float'];
};

export type Order = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  state: Scalars['String'];
  active: Scalars['Boolean'];
  customer?: Maybe<Customer>;
  shippingAddress?: Maybe<OrderAddress>;
  billingAddress?: Maybe<OrderAddress>;
  lines: Array<OrderLine>;
  adjustments: Array<Adjustment>;
  payments?: Maybe<Array<Payment>>;
  subTotalBeforeTax: Scalars['Int'];
  subTotal: Scalars['Int'];
  currencyCode: CurrencyCode;
  shipping: Scalars['Int'];
  shippingMethod?: Maybe<ShippingMethod>;
  totalBeforeTax: Scalars['Int'];
  total: Scalars['Int'];
};

export type OrderAddress = {
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type OrderFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  code?: Maybe<StringOperators>;
  state?: Maybe<StringOperators>;
  active?: Maybe<BooleanOperators>;
  subTotalBeforeTax?: Maybe<NumberOperators>;
  subTotal?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  shipping?: Maybe<NumberOperators>;
  totalBeforeTax?: Maybe<NumberOperators>;
  total?: Maybe<NumberOperators>;
};

export type OrderItem = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  unitPriceIncludesTax: Scalars['Boolean'];
  taxRate: Scalars['Float'];
  adjustments: Array<Adjustment>;
};

export type OrderLine = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  productVariant: ProductVariant;
  featuredAsset?: Maybe<Asset>;
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  items: Array<OrderItem>;
  totalPrice: Scalars['Int'];
  adjustments: Array<Adjustment>;
  order: Order;
};

export type OrderList = PaginatedList & {
  items: Array<Order>;
  totalItems: Scalars['Int'];
};

export type OrderListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<OrderSortParameter>;
  filter?: Maybe<OrderFilterParameter>;
};

export type OrderSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  code?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  subTotalBeforeTax?: Maybe<SortOrder>;
  subTotal?: Maybe<SortOrder>;
  shipping?: Maybe<SortOrder>;
  totalBeforeTax?: Maybe<SortOrder>;
  total?: Maybe<SortOrder>;
};

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};

export type Payment = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  method: Scalars['String'];
  amount: Scalars['Int'];
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type PaymentInput = {
  method: Scalars['String'];
  metadata: Scalars['JSON'];
};

export type PaymentMethod = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  configArgs: Array<ConfigArg>;
};

/**  Permissions for administrators and customers  */
export enum Permission {
  /**  The Authenticated role means simply that the user is logged in  */
  Authenticated = 'Authenticated',
  /**  SuperAdmin can perform the most sensitive tasks  */
  SuperAdmin = 'SuperAdmin',
  /**  Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /**  Public means any unauthenticated user may perform the operation  */
  Public = 'Public',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings',
}

/** The price range where the result has more than one price */
export type PriceRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type Product = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  variants: Array<ProductVariant>;
  optionGroups: Array<ProductOptionGroup>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductTranslation>;
  collections: Array<Collection>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  slug?: Maybe<StringOperators>;
  description?: Maybe<StringOperators>;
};

export type ProductList = PaginatedList & {
  items: Array<Product>;
  totalItems: Scalars['Int'];
};

export type ProductListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductSortParameter>;
  filter?: Maybe<ProductFilterParameter>;
};

export type ProductOption = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode?: Maybe<LanguageCode>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  translations: Array<ProductOptionTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroup = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductOptionGroupTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductOptionTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type ProductSortParameter = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
};

export type ProductTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type ProductVariant = Node & {
  id: Scalars['ID'];
  productId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  sku: Scalars['String'];
  name: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  assets: Array<Asset>;
  price: Scalars['Int'];
  currencyCode: CurrencyCode;
  priceIncludesTax: Scalars['Boolean'];
  priceWithTax: Scalars['Int'];
  taxRateApplied: TaxRate;
  taxCategory: TaxCategory;
  options: Array<ProductOption>;
  facetValues: Array<FacetValue>;
  translations: Array<ProductVariantTranslation>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type ProductVariantFilterParameter = {
  createdAt?: Maybe<DateOperators>;
  updatedAt?: Maybe<DateOperators>;
  languageCode?: Maybe<StringOperators>;
  sku?: Maybe<StringOperators>;
  name?: Maybe<StringOperators>;
  price?: Maybe<NumberOperators>;
  currencyCode?: Maybe<StringOperators>;
  priceIncludesTax?: Maybe<BooleanOperators>;
  priceWithTax?: Maybe<NumberOperators>;
};

export type ProductVariantList = PaginatedList & {
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductVariantSortParameter>;
  filter?: Maybe<ProductVariantFilterParameter>;
};

export type ProductVariantSortParameter = {
  id?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  sku?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  priceWithTax?: Maybe<SortOrder>;
};

export type ProductVariantTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  languageCode: LanguageCode;
  name: Scalars['String'];
};

export type Promotion = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  conditions: Array<ConfigurableOperation>;
  actions: Array<ConfigurableOperation>;
};

export type PromotionList = PaginatedList & {
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};

export type Query = {
  activeChannel: Channel;
  activeCustomer?: Maybe<Customer>;
  activeOrder?: Maybe<Order>;
  availableCountries: Array<Country>;
  collections: CollectionList;
  collection?: Maybe<Collection>;
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  me?: Maybe<CurrentUser>;
  nextOrderStates: Array<Scalars['String']>;
  order?: Maybe<Order>;
  orderByCode?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
  search: SearchResponse;
  temp__?: Maybe<Scalars['Boolean']>;
};

export type QueryCollectionsArgs = {
  languageCode?: Maybe<LanguageCode>;
  options?: Maybe<CollectionListOptions>;
};

export type QueryCollectionArgs = {
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};

export type QueryProductArgs = {
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
};

export type QueryProductsArgs = {
  languageCode?: Maybe<LanguageCode>;
  options?: Maybe<ProductListOptions>;
};

export type QuerySearchArgs = {
  input: SearchInput;
};

export type RegisterCustomerInput = {
  emailAddress: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Role = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Permission>;
  channels: Array<Channel>;
};

export type RoleList = PaginatedList & {
  items: Array<Role>;
  totalItems: Scalars['Int'];
};

export type SearchInput = {
  term?: Maybe<Scalars['String']>;
  facetIds?: Maybe<Array<Scalars['String']>>;
  collectionId?: Maybe<Scalars['String']>;
  groupByProduct?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SearchResultSortParameter>;
};

export type SearchReindexResponse = {
  success: Scalars['Boolean'];
  timeTaken: Scalars['Int'];
  indexedItemCount: Scalars['Int'];
};

export type SearchResponse = {
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
  facetValues: Array<FacetValueResult>;
};

export type SearchResult = {
  sku: Scalars['String'];
  slug: Scalars['String'];
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productPreview: Scalars['String'];
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  productVariantPreview: Scalars['String'];
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  facetIds: Array<Scalars['String']>;
  facetValueIds: Array<Scalars['String']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['String']>;
  /** A relevence score for the result. Differs between database implementations */
  score: Scalars['Float'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type ServerConfig = {
  customFields?: Maybe<Scalars['JSON']>;
};

export type ShippingMethod = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  checker: ConfigurableOperation;
  calculator: ConfigurableOperation;
};

export type ShippingMethodList = PaginatedList & {
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type ShippingMethodQuote = {
  id: Scalars['ID'];
  price: Scalars['Int'];
  description: Scalars['String'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
  value: Scalars['Int'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringOperators = {
  eq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
};

export type TaxCategory = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type TaxRate = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  value: Scalars['Int'];
  category: TaxCategory;
  zone: Zone;
  customerGroup?: Maybe<CustomerGroup>;
};

export type TaxRateList = PaginatedList & {
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};

export type UpdateAddressInput = {
  id: Scalars['ID'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type UpdateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type User = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  identifier: Scalars['String'];
  verified: Scalars['Boolean'];
  roles: Array<Role>;
  lastLogin?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
};

export type Zone = Node & {
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  members: Array<Country>;
};
