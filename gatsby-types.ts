// tslint:disable

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  Vendure_DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Vendure_JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Vendure_Upload: any;
};

export type Context = {
  id?: Maybe<Scalars['String']>;
};

export type Dependencies_2 = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type DevDependencies_2 = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type Directory = Node & {
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  internal?: Maybe<Internal_9>;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Float']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Float']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};

/** Node of type Directory */
export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Directory */
export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type DirectoryConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DirectoryEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<DirectoryGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type DirectoryConnectionDistinctArgs = {
  field?: Maybe<DirectoryDistinctEnum>;
};

/** A connection to a list of items. */
export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<DirectoryGroupEnum>;
};

export type DirectoryConnectionAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionDevQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>;
  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>;
  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>;
  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>;
};

export type DirectoryConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryConnectionMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryConnectionSort = {
  fields: Array<Maybe<DirectoryConnectionSortByFieldsEnum>>;
  order?: Maybe<Array<Maybe<DirectoryConnectionSortOrderValues>>>;
};

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type DirectoryConnectionSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryConnectionUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryDevQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum DirectoryDistinctEnum {
  Id = 'id',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

/** An edge in a connection. */
export type DirectoryEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
};

export type DirectoryExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** A connection to a list of items. */
export type DirectoryGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DirectoryGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type DirectoryGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<Directory>;
  /** The next edge in the connection */
  next?: Maybe<Directory>;
  /** The previous edge in the connection */
  previous?: Maybe<Directory>;
};

export enum DirectoryGroupEnum {
  Id = 'id',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type DirectoryIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInternalInputObject_2 = {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>;
  type?: Maybe<DirectoryInternalTypeQueryString_2>;
  description?: Maybe<DirectoryInternalDescriptionQueryString_2>;
  owner?: Maybe<DirectoryInternalOwnerQueryString_2>;
};

export type DirectoryInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DirectoryMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectoryRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectorySizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DirectorySourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectoryUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DuotoneGradient = {
  highlight?: Maybe<Scalars['String']>;
  shadow?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Int']>;
};

/** Node of type File */
export type File = Node & {
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  /** The child of this node of type imageSharp */
  childImageSharp?: Maybe<ImageSharp>;
  internal?: Maybe<Internal_10>;
  sourceInstanceName?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Float']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  gid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Float']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type File */
export type FileBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type FileConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<FileGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type FileConnectionDistinctArgs = {
  field?: Maybe<FileDistinctEnum>;
};

/** A connection to a list of items. */
export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<FileGroupEnum>;
};

export type FileConnectionAbsolutePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionAccessTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionAtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionAtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionBaseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionBirthtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionBirthtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionBirthTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionChangeTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionDevQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>;
  type?: Maybe<FileConnectionInternalTypeQueryString_2>;
  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>;
  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>;
  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>;
};

export type FileConnectionInternalMediaTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileConnectionMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionPrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileConnectionSort = {
  fields: Array<Maybe<FileConnectionSortByFieldsEnum>>;
  order?: Maybe<Array<Maybe<FileConnectionSortOrderValues>>>;
};

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___MediaType = 'internal___mediaType',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type FileConnectionSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileConnectionUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileCtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileCtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileDevQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileDirQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___MediaType = 'internal___mediaType',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

/** An edge in a connection. */
export type FileEdge = {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
};

export type FileExtensionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileExtQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileGidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** A connection to a list of items. */
export type FileGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FileGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type FileGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<File>;
  /** The next edge in the connection */
  next?: Maybe<File>;
  /** The previous edge in the connection */
  previous?: Maybe<File>;
};

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___MediaType = 'internal___mediaType',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type FileIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInoQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalInputObject_2 = {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>;
  type?: Maybe<FileInternalTypeQueryString_2>;
  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>;
  description?: Maybe<FileInternalDescriptionQueryString_2>;
  owner?: Maybe<FileInternalOwnerQueryString_2>;
};

export type FileInternalMediaTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileModeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileModifiedTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileMtimeMsQueryFloat_2 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FileMtimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileNlinkQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FilePrettySizeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileRdevQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileRelativeDirectoryQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileRelativePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileRootQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileSizeQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FileSourceInstanceNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FileUidQueryInteger_2 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

/** Filter connection on its fields */
export type FilterDirectory = {
  id?: Maybe<DirectoryConnectionIdQueryString_2>;
  internal?: Maybe<DirectoryConnectionInternalInputObject_2>;
  sourceInstanceName?: Maybe<
    DirectoryConnectionSourceInstanceNameQueryString_2
  >;
  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>;
  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>;
  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>;
  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>;
  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>;
  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>;
  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>;
  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>;
  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>;
  root?: Maybe<DirectoryConnectionRootQueryString_2>;
  dir?: Maybe<DirectoryConnectionDirQueryString_2>;
  base?: Maybe<DirectoryConnectionBaseQueryString_2>;
  ext?: Maybe<DirectoryConnectionExtQueryString_2>;
  name?: Maybe<DirectoryConnectionNameQueryString_2>;
  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>;
  dev?: Maybe<DirectoryConnectionDevQueryFloat_2>;
  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>;
  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>;
  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>;
  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>;
  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>;
  ino?: Maybe<DirectoryConnectionInoQueryFloat_2>;
  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>;
  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>;
  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>;
  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>;
  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>;
};

/** Filter connection on its fields */
export type FilterFile = {
  id?: Maybe<FileConnectionIdQueryString_2>;
  internal?: Maybe<FileConnectionInternalInputObject_2>;
  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>;
  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>;
  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>;
  extension?: Maybe<FileConnectionExtensionQueryString_2>;
  size?: Maybe<FileConnectionSizeQueryInteger_2>;
  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>;
  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>;
  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>;
  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>;
  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>;
  root?: Maybe<FileConnectionRootQueryString_2>;
  dir?: Maybe<FileConnectionDirQueryString_2>;
  base?: Maybe<FileConnectionBaseQueryString_2>;
  ext?: Maybe<FileConnectionExtQueryString_2>;
  name?: Maybe<FileConnectionNameQueryString_2>;
  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>;
  dev?: Maybe<FileConnectionDevQueryFloat_2>;
  mode?: Maybe<FileConnectionModeQueryInteger_2>;
  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>;
  uid?: Maybe<FileConnectionUidQueryInteger_2>;
  gid?: Maybe<FileConnectionGidQueryInteger_2>;
  rdev?: Maybe<FileConnectionRdevQueryInteger_2>;
  ino?: Maybe<FileConnectionInoQueryFloat_2>;
  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>;
  atime?: Maybe<FileConnectionAtimeQueryString_2>;
  mtime?: Maybe<FileConnectionMtimeQueryString_2>;
  ctime?: Maybe<FileConnectionCtimeQueryString_2>;
  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>;
  publicURL?: Maybe<PublicUrlQueryString_4>;
};

/** Filter connection on its fields */
export type FilterImageSharp = {
  id?: Maybe<ImageSharpConnectionIdQueryString_2>;
  internal?: Maybe<ImageSharpConnectionInternalInputObject_2>;
  fixed?: Maybe<FixedTypeName_4>;
  resolutions?: Maybe<ResolutionsTypeName_4>;
  fluid?: Maybe<FluidTypeName_4>;
  sizes?: Maybe<SizesTypeName_4>;
  original?: Maybe<OriginalTypeName_4>;
  resize?: Maybe<ResizeTypeName_4>;
};

/** Filter connection on its fields */
export type FilterSitePage = {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>;
  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >;
  path?: Maybe<SitePageConnectionPathQueryString_2>;
  component?: Maybe<SitePageConnectionComponentQueryString>;
  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>;
  context?: Maybe<SitePageConnectionContextInputObject>;
  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>;
  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>;
  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>;
  id?: Maybe<SitePageConnectionIdQueryString_2>;
  internal?: Maybe<SitePageConnectionInternalInputObject_2>;
};

/** Filter connection on its fields */
export type FilterSitePlugin = {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>;
  id?: Maybe<SitePluginConnectionIdQueryString_2>;
  name?: Maybe<SitePluginConnectionNameQueryString_2>;
  version?: Maybe<SitePluginConnectionVersionQueryString_2>;
  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>;
  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>;
  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>;
  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>;
  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>;
  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>;
  internal?: Maybe<SitePluginConnectionInternalInputObject_2>;
};

export type FixedAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FixedTypeName_3 = {
  base64?: Maybe<FixedBase64QueryString_3>;
  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>;
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>;
  width?: Maybe<FixedWidthQueryFloat_3>;
  height?: Maybe<FixedHeightQueryFloat_3>;
  src?: Maybe<FixedSrcQueryString_3>;
  srcSet?: Maybe<FixedSrcSetQueryString_3>;
  srcWebp?: Maybe<FixedSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>;
  originalName?: Maybe<FixedOriginalNameQueryString_3>;
};

export type FixedTypeName_4 = {
  base64?: Maybe<FixedBase64QueryString_4>;
  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>;
  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>;
  width?: Maybe<FixedWidthQueryFloat_4>;
  height?: Maybe<FixedHeightQueryFloat_4>;
  src?: Maybe<FixedSrcQueryString_4>;
  srcSet?: Maybe<FixedSrcSetQueryString_4>;
  srcWebp?: Maybe<FixedSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>;
  originalName?: Maybe<FixedOriginalNameQueryString_4>;
};

export type FixedWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FixedWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FluidAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FluidAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FluidBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidOriginalImgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidOriginalImgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidPresentationHeightQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FluidPresentationHeightQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FluidPresentationWidthQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FluidPresentationWidthQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FluidSizesQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSizesQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FluidTypeName_3 = {
  base64?: Maybe<FluidBase64QueryString_3>;
  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>;
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>;
  src?: Maybe<FluidSrcQueryString_3>;
  srcSet?: Maybe<FluidSrcSetQueryString_3>;
  srcWebp?: Maybe<FluidSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>;
  sizes?: Maybe<FluidSizesQueryString_3>;
  originalImg?: Maybe<FluidOriginalImgQueryString_3>;
  originalName?: Maybe<FluidOriginalNameQueryString_3>;
  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_3>;
  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_3>;
};

export type FluidTypeName_4 = {
  base64?: Maybe<FluidBase64QueryString_4>;
  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>;
  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>;
  src?: Maybe<FluidSrcQueryString_4>;
  srcSet?: Maybe<FluidSrcSetQueryString_4>;
  srcWebp?: Maybe<FluidSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>;
  sizes?: Maybe<FluidSizesQueryString_4>;
  originalImg?: Maybe<FluidOriginalImgQueryString_4>;
  originalName?: Maybe<FluidOriginalNameQueryString_4>;
  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_4>;
  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_4>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFormat {
  No_Change = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

/** Node of type ImageSharp */
export type ImageSharp = Node & {
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  internal?: Maybe<Internal_11>;
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
};

/** Node of type ImageSharp */
export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  rotate: Scalars['Int'];
};

/** Node of type ImageSharp */
export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  rotate: Scalars['Int'];
};

/** Node of type ImageSharp */
export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale: Scalars['Boolean'];
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  rotate: Scalars['Int'];
  sizes: Scalars['String'];
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>;
};

/** Node of type ImageSharp */
export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale: Scalars['Boolean'];
  jpegProgressive: Scalars['Boolean'];
  pngCompressionSpeed: Scalars['Int'];
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  rotate: Scalars['Int'];
  sizes: Scalars['String'];
  srcSetBreakpoints: Array<Maybe<Scalars['Int']>>;
};

/** Node of type ImageSharp */
export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive: Scalars['Boolean'];
  pngCompressionLevel: Scalars['Int'];
  pngCompressionSpeed: Scalars['Int'];
  grayscale: Scalars['Boolean'];
  duotone?: Maybe<DuotoneGradient>;
  base64: Scalars['Boolean'];
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  rotate: Scalars['Int'];
};

/** A connection to a list of items. */
export type ImageSharpConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ImageSharpEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<ImageSharpGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type ImageSharpConnectionDistinctArgs = {
  field?: Maybe<ImageSharpDistinctEnum>;
};

/** A connection to a list of items. */
export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<ImageSharpGroupEnum>;
};

export type ImageSharpConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<ImageSharpConnectionInternalContentDigestQueryString_2>;
  type?: Maybe<ImageSharpConnectionInternalTypeQueryString_2>;
  owner?: Maybe<ImageSharpConnectionInternalOwnerQueryString_2>;
};

export type ImageSharpConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpConnectionSort = {
  fields: Array<Maybe<ImageSharpConnectionSortByFieldsEnum>>;
  order?: Maybe<Array<Maybe<ImageSharpConnectionSortOrderValues>>>;
};

export enum ImageSharpConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Owner = 'internal___owner',
  Fixed___Base64 = 'fixed___base64',
  Fixed___TracedSvg = 'fixed___tracedSVG',
  Fixed___AspectRatio = 'fixed___aspectRatio',
  Fixed___Width = 'fixed___width',
  Fixed___Height = 'fixed___height',
  Fixed___Src = 'fixed___src',
  Fixed___SrcSet = 'fixed___srcSet',
  Fixed___SrcWebp = 'fixed___srcWebp',
  Fixed___SrcSetWebp = 'fixed___srcSetWebp',
  Fixed___OriginalName = 'fixed___originalName',
  Resolutions___Base64 = 'resolutions___base64',
  Resolutions___TracedSvg = 'resolutions___tracedSVG',
  Resolutions___AspectRatio = 'resolutions___aspectRatio',
  Resolutions___Width = 'resolutions___width',
  Resolutions___Height = 'resolutions___height',
  Resolutions___Src = 'resolutions___src',
  Resolutions___SrcSet = 'resolutions___srcSet',
  Resolutions___SrcWebp = 'resolutions___srcWebp',
  Resolutions___SrcSetWebp = 'resolutions___srcSetWebp',
  Resolutions___OriginalName = 'resolutions___originalName',
  Fluid___Base64 = 'fluid___base64',
  Fluid___TracedSvg = 'fluid___tracedSVG',
  Fluid___AspectRatio = 'fluid___aspectRatio',
  Fluid___Src = 'fluid___src',
  Fluid___SrcSet = 'fluid___srcSet',
  Fluid___SrcWebp = 'fluid___srcWebp',
  Fluid___SrcSetWebp = 'fluid___srcSetWebp',
  Fluid___Sizes = 'fluid___sizes',
  Fluid___OriginalImg = 'fluid___originalImg',
  Fluid___OriginalName = 'fluid___originalName',
  Fluid___PresentationWidth = 'fluid___presentationWidth',
  Fluid___PresentationHeight = 'fluid___presentationHeight',
  Sizes___Base64 = 'sizes___base64',
  Sizes___TracedSvg = 'sizes___tracedSVG',
  Sizes___AspectRatio = 'sizes___aspectRatio',
  Sizes___Src = 'sizes___src',
  Sizes___SrcSet = 'sizes___srcSet',
  Sizes___SrcWebp = 'sizes___srcWebp',
  Sizes___SrcSetWebp = 'sizes___srcSetWebp',
  Sizes___Sizes = 'sizes___sizes',
  Sizes___OriginalImg = 'sizes___originalImg',
  Sizes___OriginalName = 'sizes___originalName',
  Sizes___PresentationWidth = 'sizes___presentationWidth',
  Sizes___PresentationHeight = 'sizes___presentationHeight',
  Original___Width = 'original___width',
  Original___Height = 'original___height',
  Original___Src = 'original___src',
  Resize___Src = 'resize___src',
  Resize___TracedSvg = 'resize___tracedSVG',
  Resize___Width = 'resize___width',
  Resize___Height = 'resize___height',
  Resize___AspectRatio = 'resize___aspectRatio',
  Resize___OriginalName = 'resize___originalName',
}

export enum ImageSharpConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ImageSharpDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Owner = 'internal___owner',
}

/** An edge in a connection. */
export type ImageSharpEdge = {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>;
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>;
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type ImageSharpGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ImageSharpGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type ImageSharpGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>;
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>;
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpGroupEnum {
  Id = 'id',
  Parent = 'parent',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Owner = 'internal___owner',
}

export type ImageSharpIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpInternalInputObject_2 = {
  contentDigest?: Maybe<ImageSharpInternalContentDigestQueryString_2>;
  type?: Maybe<ImageSharpInternalTypeQueryString_2>;
  owner?: Maybe<ImageSharpInternalOwnerQueryString_2>;
};

export type ImageSharpInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type Internal_10 = {
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_11 = {
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_12 = {
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_7 = {
  type?: Maybe<Scalars['String']>;
  contentDigest?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_8 = {
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

export type Internal_9 = {
  contentDigest?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

/** An object with an id, parent, and children */
export type Node = {
  /** The id of the node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
};

export type OriginalHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type OriginalHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type OriginalSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OriginalSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OriginalTypeName_3 = {
  width?: Maybe<OriginalWidthQueryFloat_3>;
  height?: Maybe<OriginalHeightQueryFloat_3>;
  src?: Maybe<OriginalSrcQueryString_3>;
};

export type OriginalTypeName_4 = {
  width?: Maybe<OriginalWidthQueryFloat_4>;
  height?: Maybe<OriginalHeightQueryFloat_4>;
  src?: Maybe<OriginalSrcQueryString_4>;
};

export type OriginalWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type OriginalWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type PackageJson_2 = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<Dependencies_2>>>;
  devDependencies?: Maybe<Array<Maybe<DevDependencies_2>>>;
  peerDependencies?: Maybe<Array<Maybe<PeerDependencies_2>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating, are there more items? */
  hasNextPage: Scalars['Boolean'];
};

export type PeerDependencies_2 = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PluginOptions_2 = {
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  Turnpolicy_Black = 'TURNPOLICY_BLACK',
  Turnpolicy_White = 'TURNPOLICY_WHITE',
  Turnpolicy_Left = 'TURNPOLICY_LEFT',
  Turnpolicy_Right = 'TURNPOLICY_RIGHT',
  Turnpolicy_Minority = 'TURNPOLICY_MINORITY',
  Turnpolicy_Majority = 'TURNPOLICY_MAJORITY',
}

export type PublicUrlQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PublicUrlQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>;
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>;
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>;
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>;
  /** Connection to all ImageSharp nodes */
  allImageSharp?: Maybe<ImageSharpConnection>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  site?: Maybe<Site>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  vendure?: Maybe<Vendure>;
};

export type QueryAllSitePageArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePageConnectionSort>;
  filter?: Maybe<FilterSitePage>;
};

export type QueryAllSitePluginArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SitePluginConnectionSort>;
  filter?: Maybe<FilterSitePlugin>;
};

export type QueryAllDirectoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<DirectoryConnectionSort>;
  filter?: Maybe<FilterDirectory>;
};

export type QueryAllFileArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileConnectionSort>;
  filter?: Maybe<FilterFile>;
};

export type QueryAllImageSharpArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<ImageSharpConnectionSort>;
  filter?: Maybe<FilterImageSharp>;
};

export type QuerySitePageArgs = {
  jsonName?: Maybe<SitePageJsonNameQueryString>;
  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>;
  path?: Maybe<SitePagePathQueryString_2>;
  component?: Maybe<SitePageComponentQueryString>;
  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>;
  context?: Maybe<SitePageContextInputObject>;
  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>;
  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>;
  componentPath?: Maybe<SitePageComponentPathQueryString>;
  id?: Maybe<SitePageIdQueryString_2>;
  internal?: Maybe<SitePageInternalInputObject_2>;
};

export type QuerySitePluginArgs = {
  resolve?: Maybe<SitePluginResolveQueryString_2>;
  id?: Maybe<SitePluginIdQueryString_2>;
  name?: Maybe<SitePluginNameQueryString_2>;
  version?: Maybe<SitePluginVersionQueryString_2>;
  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>;
  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>;
  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>;
  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>;
  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>;
  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>;
  internal?: Maybe<SitePluginInternalInputObject_2>;
};

export type QuerySiteArgs = {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>;
  port?: Maybe<SitePortQueryString_2>;
  host?: Maybe<SiteHostQueryString_2>;
  pathPrefix?: Maybe<SitePathPrefixQueryString_2>;
  polyfill?: Maybe<SitePolyfillQueryBoolean_2>;
  buildTime?: Maybe<SiteBuildTimeQueryString_2>;
  id?: Maybe<SiteIdQueryString_2>;
  internal?: Maybe<SiteInternalInputObject_2>;
};

export type QueryDirectoryArgs = {
  id?: Maybe<DirectoryIdQueryString_2>;
  internal?: Maybe<DirectoryInternalInputObject_2>;
  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>;
  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>;
  relativePath?: Maybe<DirectoryRelativePathQueryString_2>;
  extension?: Maybe<DirectoryExtensionQueryString_2>;
  size?: Maybe<DirectorySizeQueryInteger_2>;
  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>;
  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>;
  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>;
  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>;
  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>;
  root?: Maybe<DirectoryRootQueryString_2>;
  dir?: Maybe<DirectoryDirQueryString_2>;
  base?: Maybe<DirectoryBaseQueryString_2>;
  ext?: Maybe<DirectoryExtQueryString_2>;
  name?: Maybe<DirectoryNameQueryString_2>;
  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>;
  dev?: Maybe<DirectoryDevQueryFloat_2>;
  mode?: Maybe<DirectoryModeQueryInteger_2>;
  nlink?: Maybe<DirectoryNlinkQueryInteger_2>;
  uid?: Maybe<DirectoryUidQueryInteger_2>;
  gid?: Maybe<DirectoryGidQueryInteger_2>;
  rdev?: Maybe<DirectoryRdevQueryInteger_2>;
  ino?: Maybe<DirectoryInoQueryFloat_2>;
  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>;
  atime?: Maybe<DirectoryAtimeQueryString_2>;
  mtime?: Maybe<DirectoryMtimeQueryString_2>;
  ctime?: Maybe<DirectoryCtimeQueryString_2>;
  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>;
};

export type QueryFileArgs = {
  id?: Maybe<FileIdQueryString_2>;
  internal?: Maybe<FileInternalInputObject_2>;
  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>;
  absolutePath?: Maybe<FileAbsolutePathQueryString_2>;
  relativePath?: Maybe<FileRelativePathQueryString_2>;
  extension?: Maybe<FileExtensionQueryString_2>;
  size?: Maybe<FileSizeQueryInteger_2>;
  prettySize?: Maybe<FilePrettySizeQueryString_2>;
  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>;
  accessTime?: Maybe<FileAccessTimeQueryString_2>;
  changeTime?: Maybe<FileChangeTimeQueryString_2>;
  birthTime?: Maybe<FileBirthTimeQueryString_2>;
  root?: Maybe<FileRootQueryString_2>;
  dir?: Maybe<FileDirQueryString_2>;
  base?: Maybe<FileBaseQueryString_2>;
  ext?: Maybe<FileExtQueryString_2>;
  name?: Maybe<FileNameQueryString_2>;
  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>;
  dev?: Maybe<FileDevQueryFloat_2>;
  mode?: Maybe<FileModeQueryInteger_2>;
  nlink?: Maybe<FileNlinkQueryInteger_2>;
  uid?: Maybe<FileUidQueryInteger_2>;
  gid?: Maybe<FileGidQueryInteger_2>;
  rdev?: Maybe<FileRdevQueryInteger_2>;
  ino?: Maybe<FileInoQueryFloat_2>;
  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>;
  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>;
  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>;
  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>;
  atime?: Maybe<FileAtimeQueryString_2>;
  mtime?: Maybe<FileMtimeQueryString_2>;
  ctime?: Maybe<FileCtimeQueryString_2>;
  birthtime?: Maybe<FileBirthtimeQueryString_2>;
  publicURL?: Maybe<PublicUrlQueryString_3>;
};

export type QueryImageSharpArgs = {
  id?: Maybe<ImageSharpIdQueryString_2>;
  internal?: Maybe<ImageSharpInternalInputObject_2>;
  fixed?: Maybe<FixedTypeName_3>;
  resolutions?: Maybe<ResolutionsTypeName_3>;
  fluid?: Maybe<FluidTypeName_3>;
  sizes?: Maybe<SizesTypeName_3>;
  original?: Maybe<OriginalTypeName_3>;
  resize?: Maybe<ResizeTypeName_3>;
};

export type ResizeAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResizeAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResizeHeightQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResizeHeightQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResizeOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResizeTypeName_3 = {
  src?: Maybe<ResizeSrcQueryString_3>;
  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>;
  width?: Maybe<ResizeWidthQueryInt_3>;
  height?: Maybe<ResizeHeightQueryInt_3>;
  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>;
  originalName?: Maybe<ResizeOriginalNameQueryString_3>;
};

export type ResizeTypeName_4 = {
  src?: Maybe<ResizeSrcQueryString_4>;
  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>;
  width?: Maybe<ResizeWidthQueryInt_4>;
  height?: Maybe<ResizeHeightQueryInt_4>;
  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>;
  originalName?: Maybe<ResizeOriginalNameQueryString_4>;
};

export type ResizeWidthQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResizeWidthQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResolutionsAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsHeightQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsHeightQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ResolutionsTypeName_3 = {
  base64?: Maybe<ResolutionsBase64QueryString_3>;
  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>;
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>;
  width?: Maybe<ResolutionsWidthQueryFloat_3>;
  height?: Maybe<ResolutionsHeightQueryFloat_3>;
  src?: Maybe<ResolutionsSrcQueryString_3>;
  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>;
  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>;
  originalName?: Maybe<ResolutionsOriginalNameQueryString_3>;
};

export type ResolutionsTypeName_4 = {
  base64?: Maybe<ResolutionsBase64QueryString_4>;
  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>;
  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>;
  width?: Maybe<ResolutionsWidthQueryFloat_4>;
  height?: Maybe<ResolutionsHeightQueryFloat_4>;
  src?: Maybe<ResolutionsSrcQueryString_4>;
  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>;
  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>;
  originalName?: Maybe<ResolutionsOriginalNameQueryString_4>;
};

export type ResolutionsWidthQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ResolutionsWidthQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

/** Node of type Site */
export type Site = Node & {
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  siteMetadata?: Maybe<SiteMetadata_2>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  buildTime?: Maybe<Scalars['Date']>;
  internal?: Maybe<Internal_12>;
};

/** Node of type Site */
export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node of type Site */
export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildTimeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteHostQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteInternalInputObject_2 = {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>;
  type?: Maybe<SiteInternalTypeQueryString_2>;
  owner?: Maybe<SiteInternalOwnerQueryString_2>;
};

export type SiteInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteMetadata_2 = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

/** Node of type SitePage */
export type SitePage = Node & {
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  jsonName?: Maybe<Scalars['String']>;
  internalComponentName?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  componentChunkName?: Maybe<Scalars['String']>;
  context?: Maybe<Context>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  internal?: Maybe<Internal_7>;
};

export type SitePageComponentChunkNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageComponentPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageComponentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type SitePageConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePageEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<SitePageGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type SitePageConnectionDistinctArgs = {
  field?: Maybe<SitePageDistinctEnum>;
};

/** A connection to a list of items. */
export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<SitePageGroupEnum>;
};

export type SitePageConnectionComponentChunkNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionComponentPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionComponentQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionContextIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionContextInputObject = {
  id?: Maybe<SitePageConnectionContextIdQueryString>;
};

export type SitePageConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalComponentNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalInputObject_2 = {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>;
  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>;
  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>;
  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>;
};

export type SitePageConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorBrowserApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorInputObject = {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>;
  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>;
  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>;
  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>;
  pluginOptions?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsInputObject
  >;
  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>;
  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>;
  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>;
  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >;
  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>;
  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>;
};

export type SitePageConnectionPluginCreatorInternalContentDigestQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorInternalInputObject = {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >;
  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>;
  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>;
};

export type SitePageConnectionPluginCreatorInternalOwnerQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorInternalTypeQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorNodeApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonAuthorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject = {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >;
  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >;
  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonInputObject = {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>;
  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >;
  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>;
  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>;
  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>;
  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>;
  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >;
  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >;
  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >;
  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>;
};

export type SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonLicenseQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonMainQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >;
  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >;
};

export type SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPackageJsonVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginFilepathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsFieldNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsIconQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsInputObject = {
  typeName?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsTypeNameQueryString
  >;
  fieldName?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsFieldNameQueryString
  >;
  url?: Maybe<SitePageConnectionPluginCreatorPluginOptionsUrlQueryString>;
  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>;
  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>;
  short_name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString
  >;
  start_url?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString
  >;
  background_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString
  >;
  theme_color?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString
  >;
  display?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString
  >;
  icon?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconQueryString>;
  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >;
};

export type SitePageConnectionPluginCreatorPluginOptionsNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsTypeNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorPluginOptionsUrlQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorResolveQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorSsrApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionPluginCreatorVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageConnectionSort = {
  fields: Array<Maybe<SitePageConnectionSortByFieldsEnum>>;
  order?: Maybe<Array<Maybe<SitePageConnectionSortOrderValues>>>;
};

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Context___Id = 'context___id',
  PluginCreator___Node = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Internal___Type = 'internal___type',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SitePageContextIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageContextInputObject = {
  id?: Maybe<SitePageContextIdQueryString>;
};

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Context___Id = 'context___id',
  PluginCreator___Node = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Internal___Type = 'internal___type',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
}

/** An edge in a connection. */
export type SitePageEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
};

/** A connection to a list of items. */
export type SitePageGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePageGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SitePageGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>;
  /** The next edge in the connection */
  next?: Maybe<SitePage>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>;
};

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Context___Id = 'context___id',
  PluginCreator___Node = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Internal___Type = 'internal___type',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Description = 'internal___description',
  Internal___Owner = 'internal___owner',
}

export type SitePageIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalComponentNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalInputObject_2 = {
  type?: Maybe<SitePageInternalTypeQueryString_2>;
  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>;
  description?: Maybe<SitePageInternalDescriptionQueryString>;
  owner?: Maybe<SitePageInternalOwnerQueryString_2>;
};

export type SitePageInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorBrowserApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorIdQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorInputObject = {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>;
  id?: Maybe<SitePagePluginCreatorIdQueryString>;
  name?: Maybe<SitePagePluginCreatorNameQueryString>;
  version?: Maybe<SitePagePluginCreatorVersionQueryString>;
  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>;
  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>;
  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>;
  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>;
  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>;
  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>;
  internal?: Maybe<SitePagePluginCreatorInternalInputObject>;
};

export type SitePagePluginCreatorInternalContentDigestQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorInternalInputObject = {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>;
  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>;
  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>;
};

export type SitePagePluginCreatorInternalOwnerQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorInternalTypeQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorNodeApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonAuthorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>;
  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >;
};

export type SitePagePluginCreatorPackageJsonDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDependenciesQueryList = {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>;
};

export type SitePagePluginCreatorPackageJsonDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDescriptionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>;
  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesQueryList = {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>;
};

export type SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>;
  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>;
  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>;
  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>;
  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>;
  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>;
  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>;
  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >;
  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >;
  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>;
};

export type SitePagePluginCreatorPackageJsonKeywordsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonLicenseQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonMainQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesInputObject = {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>;
  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesQueryList = {
  elemMatch?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesInputObject
  >;
};

export type SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPackageJsonVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginFilepathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsBackgroundColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsDisplayQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsFieldNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsIconQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsInputObject = {
  typeName?: Maybe<SitePagePluginCreatorPluginOptionsTypeNameQueryString>;
  fieldName?: Maybe<SitePagePluginCreatorPluginOptionsFieldNameQueryString>;
  url?: Maybe<SitePagePluginCreatorPluginOptionsUrlQueryString>;
  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>;
  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>;
  short_name?: Maybe<SitePagePluginCreatorPluginOptionsShortNameQueryString>;
  start_url?: Maybe<SitePagePluginCreatorPluginOptionsStartUrlQueryString>;
  background_color?: Maybe<
    SitePagePluginCreatorPluginOptionsBackgroundColorQueryString
  >;
  theme_color?: Maybe<SitePagePluginCreatorPluginOptionsThemeColorQueryString>;
  display?: Maybe<SitePagePluginCreatorPluginOptionsDisplayQueryString>;
  icon?: Maybe<SitePagePluginCreatorPluginOptionsIconQueryString>;
  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>;
};

export type SitePagePluginCreatorPluginOptionsNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePagePluginCreatorPluginOptionsPathQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsShortNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsStartUrlQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsThemeColorQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsTypeNameQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorPluginOptionsUrlQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorResolveQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorSsrApIsQueryList = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePagePluginCreatorVersionQueryString = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePathPrefixQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Node of type SitePlugin */
export type SitePlugin = Node & {
  /** The id of this node. */
  id: Scalars['ID'];
  /** The parent of this node. */
  parent?: Maybe<Node>;
  /** The children of this node. */
  children?: Maybe<Array<Maybe<Node>>>;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<PluginOptions_2>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<PackageJson_2>;
  internal?: Maybe<Internal_8>;
};

export type SitePluginBrowserApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A connection to a list of items. */
export type SitePluginConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePluginEdge>>>;
  totalCount?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<Maybe<Scalars['String']>>>;
  group?: Maybe<Array<Maybe<SitePluginGroupConnectionConnection>>>;
};

/** A connection to a list of items. */
export type SitePluginConnectionDistinctArgs = {
  field?: Maybe<SitePluginDistinctEnum>;
};

/** A connection to a list of items. */
export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field?: Maybe<SitePluginGroupEnum>;
};

export type SitePluginConnectionBrowserApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionInternalInputObject_2 = {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>;
  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>;
  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>;
};

export type SitePluginConnectionInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionNodeApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonAuthorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDependenciesInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>;
  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >;
};

export type SitePluginConnectionPackageJsonDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>;
};

export type SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDevDependenciesInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>;
  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >;
};

export type SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonDevDependenciesQueryList_2 = {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesInputObject_2
  >;
};

export type SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonInputObject_2 = {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>;
  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>;
  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>;
  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>;
  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>;
  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>;
  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>;
  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >;
  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >;
  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>;
};

export type SitePluginConnectionPackageJsonKeywordsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonLicenseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonMainQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 = {
  name?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2
  >;
  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >;
};

export type SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 = {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >;
};

export type SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPackageJsonVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginFilepathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsDisplayQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsFieldNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsIconQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsInputObject_2 = {
  typeName?: Maybe<SitePluginConnectionPluginOptionsTypeNameQueryString_2>;
  fieldName?: Maybe<SitePluginConnectionPluginOptionsFieldNameQueryString_2>;
  url?: Maybe<SitePluginConnectionPluginOptionsUrlQueryString_2>;
  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>;
  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>;
  short_name?: Maybe<SitePluginConnectionPluginOptionsShortNameQueryString_2>;
  start_url?: Maybe<SitePluginConnectionPluginOptionsStartUrlQueryString_2>;
  background_color?: Maybe<
    SitePluginConnectionPluginOptionsBackgroundColorQueryString_2
  >;
  theme_color?: Maybe<SitePluginConnectionPluginOptionsThemeColorQueryString_2>;
  display?: Maybe<SitePluginConnectionPluginOptionsDisplayQueryString_2>;
  icon?: Maybe<SitePluginConnectionPluginOptionsIconQueryString_2>;
  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>;
};

export type SitePluginConnectionPluginOptionsNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePluginConnectionPluginOptionsPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsShortNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsStartUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsThemeColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsTypeNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionPluginOptionsUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionResolveQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionSort = {
  fields: Array<Maybe<SitePluginConnectionSortByFieldsEnum>>;
  order?: Maybe<Array<Maybe<SitePluginConnectionSortOrderValues>>>;
};

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptions___TypeName = 'pluginOptions___typeName',
  PluginOptions___FieldName = 'pluginOptions___fieldName',
  PluginOptions___Url = 'pluginOptions___url',
  PluginOptions___Name = 'pluginOptions___name',
  PluginOptions___Path = 'pluginOptions___path',
  PluginOptions___Short_Name = 'pluginOptions___short_name',
  PluginOptions___Start_Url = 'pluginOptions___start_url',
  PluginOptions___Background_Color = 'pluginOptions___background_color',
  PluginOptions___Theme_Color = 'pluginOptions___theme_color',
  PluginOptions___Display = 'pluginOptions___display',
  PluginOptions___Icon = 'pluginOptions___icon',
  PluginOptions___PathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJson___Name = 'packageJson___name',
  PackageJson___Description = 'packageJson___description',
  PackageJson___Version = 'packageJson___version',
  PackageJson___Main = 'packageJson___main',
  PackageJson___Author = 'packageJson___author',
  PackageJson___License = 'packageJson___license',
  PackageJson___Dependencies = 'packageJson___dependencies',
  PackageJson___DevDependencies = 'packageJson___devDependencies',
  PackageJson___PeerDependencies = 'packageJson___peerDependencies',
  PackageJson___Keywords = 'packageJson___keywords',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SitePluginConnectionSsrApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginConnectionVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptions___TypeName = 'pluginOptions___typeName',
  PluginOptions___FieldName = 'pluginOptions___fieldName',
  PluginOptions___Url = 'pluginOptions___url',
  PluginOptions___Name = 'pluginOptions___name',
  PluginOptions___Path = 'pluginOptions___path',
  PluginOptions___Short_Name = 'pluginOptions___short_name',
  PluginOptions___Start_Url = 'pluginOptions___start_url',
  PluginOptions___Background_Color = 'pluginOptions___background_color',
  PluginOptions___Theme_Color = 'pluginOptions___theme_color',
  PluginOptions___Display = 'pluginOptions___display',
  PluginOptions___Icon = 'pluginOptions___icon',
  PluginOptions___PathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJson___Name = 'packageJson___name',
  PackageJson___Description = 'packageJson___description',
  PackageJson___Version = 'packageJson___version',
  PackageJson___Main = 'packageJson___main',
  PackageJson___Author = 'packageJson___author',
  PackageJson___License = 'packageJson___license',
  PackageJson___Dependencies = 'packageJson___dependencies',
  PackageJson___DevDependencies = 'packageJson___devDependencies',
  PackageJson___PeerDependencies = 'packageJson___peerDependencies',
  PackageJson___Keywords = 'packageJson___keywords',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Owner = 'internal___owner',
}

/** An edge in a connection. */
export type SitePluginEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
};

/** A connection to a list of items. */
export type SitePluginGroupConnectionConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SitePluginGroupConnectionEdge>>>;
  field?: Maybe<Scalars['String']>;
  fieldValue?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type SitePluginGroupConnectionEdge = {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>;
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>;
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptions___TypeName = 'pluginOptions___typeName',
  PluginOptions___FieldName = 'pluginOptions___fieldName',
  PluginOptions___Url = 'pluginOptions___url',
  PluginOptions___Name = 'pluginOptions___name',
  PluginOptions___Path = 'pluginOptions___path',
  PluginOptions___Short_Name = 'pluginOptions___short_name',
  PluginOptions___Start_Url = 'pluginOptions___start_url',
  PluginOptions___Background_Color = 'pluginOptions___background_color',
  PluginOptions___Theme_Color = 'pluginOptions___theme_color',
  PluginOptions___Display = 'pluginOptions___display',
  PluginOptions___Icon = 'pluginOptions___icon',
  PluginOptions___PathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJson___Name = 'packageJson___name',
  PackageJson___Description = 'packageJson___description',
  PackageJson___Version = 'packageJson___version',
  PackageJson___Main = 'packageJson___main',
  PackageJson___Author = 'packageJson___author',
  PackageJson___License = 'packageJson___license',
  PackageJson___Dependencies = 'packageJson___dependencies',
  PackageJson___DevDependencies = 'packageJson___devDependencies',
  PackageJson___PeerDependencies = 'packageJson___peerDependencies',
  PackageJson___Keywords = 'packageJson___keywords',
  Internal___ContentDigest = 'internal___contentDigest',
  Internal___Type = 'internal___type',
  Internal___Owner = 'internal___owner',
}

export type SitePluginIdQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginInternalContentDigestQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginInternalInputObject_2 = {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>;
  type?: Maybe<SitePluginInternalTypeQueryString_2>;
  owner?: Maybe<SitePluginInternalOwnerQueryString_2>;
};

export type SitePluginInternalOwnerQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginInternalTypeQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginNodeApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonAuthorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>;
  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>;
};

export type SitePluginPackageJsonDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>;
};

export type SitePluginPackageJsonDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDevDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>;
  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>;
};

export type SitePluginPackageJsonDevDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDevDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>;
};

export type SitePluginPackageJsonDevDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>;
  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>;
  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>;
  main?: Maybe<SitePluginPackageJsonMainQueryString_2>;
  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>;
  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>;
  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>;
};

export type SitePluginPackageJsonKeywordsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonLicenseQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonMainQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonPeerDependenciesInputObject_2 = {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>;
  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>;
};

export type SitePluginPackageJsonPeerDependenciesNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonPeerDependenciesQueryList_2 = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>;
};

export type SitePluginPackageJsonPeerDependenciesVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginFilepathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsBackgroundColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsDisplayQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsFieldNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsIconQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsInputObject_2 = {
  typeName?: Maybe<SitePluginPluginOptionsTypeNameQueryString_2>;
  fieldName?: Maybe<SitePluginPluginOptionsFieldNameQueryString_2>;
  url?: Maybe<SitePluginPluginOptionsUrlQueryString_2>;
  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>;
  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>;
  short_name?: Maybe<SitePluginPluginOptionsShortNameQueryString_2>;
  start_url?: Maybe<SitePluginPluginOptionsStartUrlQueryString_2>;
  background_color?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_2>;
  theme_color?: Maybe<SitePluginPluginOptionsThemeColorQueryString_2>;
  display?: Maybe<SitePluginPluginOptionsDisplayQueryString_2>;
  icon?: Maybe<SitePluginPluginOptionsIconQueryString_2>;
  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>;
};

export type SitePluginPluginOptionsNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsPathCheckQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePluginPluginOptionsPathQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsShortNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsStartUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsThemeColorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsTypeNameQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsUrlQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginResolveQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginSsrApIsQueryList_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginVersionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePolyfillQueryBoolean_2 = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type SitePortQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataAuthorQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataDescriptionQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataInputObject_2 = {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>;
  description?: Maybe<SiteSiteMetadataDescriptionQueryString_2>;
  author?: Maybe<SiteSiteMetadataAuthorQueryString_2>;
};

export type SiteSiteMetadataTitleQueryString_2 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesAspectRatioQueryFloat_3 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SizesAspectRatioQueryFloat_4 = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SizesBase64QueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesBase64QueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesOriginalImgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesOriginalImgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesOriginalNameQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesOriginalNameQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesPresentationHeightQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SizesPresentationHeightQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SizesPresentationWidthQueryInt_3 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SizesPresentationWidthQueryInt_4 = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SizesSizesQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSizesQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcSetWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcWebpQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesSrcWebpQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesTracedSvgQueryString_3 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesTracedSvgQueryString_4 = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizesTypeName_3 = {
  base64?: Maybe<SizesBase64QueryString_3>;
  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>;
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>;
  src?: Maybe<SizesSrcQueryString_3>;
  srcSet?: Maybe<SizesSrcSetQueryString_3>;
  srcWebp?: Maybe<SizesSrcWebpQueryString_3>;
  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>;
  sizes?: Maybe<SizesSizesQueryString_3>;
  originalImg?: Maybe<SizesOriginalImgQueryString_3>;
  originalName?: Maybe<SizesOriginalNameQueryString_3>;
  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_3>;
  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_3>;
};

export type SizesTypeName_4 = {
  base64?: Maybe<SizesBase64QueryString_4>;
  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>;
  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>;
  src?: Maybe<SizesSrcQueryString_4>;
  srcSet?: Maybe<SizesSrcSetQueryString_4>;
  srcWebp?: Maybe<SizesSrcWebpQueryString_4>;
  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>;
  sizes?: Maybe<SizesSizesQueryString_4>;
  originalImg?: Maybe<SizesOriginalImgQueryString_4>;
  originalName?: Maybe<SizesOriginalNameQueryString_4>;
  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_4>;
  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_4>;
};

export type Vendure = {
  activeChannel: Vendure_Channel;
  activeCustomer?: Maybe<Vendure_Customer>;
  activeOrder?: Maybe<Vendure_Order>;
  availableCountries: Array<Vendure_Country>;
  collections: Vendure_CollectionList;
  collection?: Maybe<Vendure_Collection>;
  eligibleShippingMethods: Array<Vendure_ShippingMethodQuote>;
  me?: Maybe<Vendure_CurrentUser>;
  nextOrderStates: Array<Scalars['String']>;
  order?: Maybe<Vendure_Order>;
  orderByCode?: Maybe<Vendure_Order>;
  product?: Maybe<Vendure_Product>;
  products: Vendure_ProductList;
  search: Vendure_SearchResponse;
  temp__?: Maybe<Scalars['Boolean']>;
};

export type VendureCollectionsArgs = {
  languageCode?: Maybe<Vendure_LanguageCode>;
  options?: Maybe<Vendure_CollectionListOptions>;
};

export type VendureCollectionArgs = {
  id: Scalars['ID'];
  languageCode?: Maybe<Vendure_LanguageCode>;
};

export type VendureOrderArgs = {
  id: Scalars['ID'];
};

export type VendureOrderByCodeArgs = {
  code: Scalars['String'];
};

export type VendureProductArgs = {
  id: Scalars['ID'];
  languageCode?: Maybe<Vendure_LanguageCode>;
};

export type VendureProductsArgs = {
  languageCode?: Maybe<Vendure_LanguageCode>;
  options?: Maybe<Vendure_ProductListOptions>;
};

export type VendureSearchArgs = {
  input: Vendure_SearchInput;
};

export type Vendure_Address = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  fullName?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country: Vendure_Country;
  phoneNumber?: Maybe<Scalars['String']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_Adjustment = {
  adjustmentSource: Scalars['String'];
  type: Vendure_AdjustmentType;
  description: Scalars['String'];
  amount: Scalars['Int'];
};

export type Vendure_AdjustmentOperations = {
  conditions: Array<Vendure_ConfigurableOperation>;
  actions: Array<Vendure_ConfigurableOperation>;
};

export enum Vendure_AdjustmentType {
  Tax = 'TAX',
  Promotion = 'PROMOTION',
  Shipping = 'SHIPPING',
  Refund = 'REFUND',
  Tax_Refund = 'TAX_REFUND',
  Promotion_Refund = 'PROMOTION_REFUND',
  Shipping_Refund = 'SHIPPING_REFUND',
}

export type Vendure_Administrator = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  emailAddress: Scalars['String'];
  user: Vendure_User;
};

export type Vendure_AdministratorList = Vendure_PaginatedList & {
  items: Array<Vendure_Administrator>;
  totalItems: Scalars['Int'];
};

export type Vendure_Asset = Vendure_Node & {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Vendure_AssetType;
  fileSize: Scalars['Int'];
  mimeType: Scalars['String'];
  source: Scalars['String'];
  preview: Scalars['String'];
};

export type Vendure_AssetList = Vendure_PaginatedList & {
  items: Array<Vendure_Asset>;
  totalItems: Scalars['Int'];
};

export enum Vendure_AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY',
}

export type Vendure_BooleanOperators = {
  eq?: Maybe<Scalars['Boolean']>;
};

export type Vendure_Channel = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  code: Scalars['String'];
  token: Scalars['String'];
  defaultTaxZone?: Maybe<Vendure_Zone>;
  defaultShippingZone?: Maybe<Vendure_Zone>;
  defaultLanguageCode: Vendure_LanguageCode;
  currencyCode: Vendure_CurrencyCode;
  pricesIncludeTax: Scalars['Boolean'];
};

export type Vendure_Collection = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode?: Maybe<Vendure_LanguageCode>;
  name: Scalars['String'];
  breadcrumbs: Array<Vendure_CollectionBreadcrumb>;
  position: Scalars['Int'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Vendure_Asset>;
  assets: Array<Vendure_Asset>;
  parent?: Maybe<Vendure_Collection>;
  children?: Maybe<Array<Vendure_Collection>>;
  filters: Array<Vendure_ConfigurableOperation>;
  translations: Array<Vendure_CollectionTranslation>;
  productVariants: Vendure_ProductVariantList;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_CollectionProductVariantsArgs = {
  options?: Maybe<Vendure_ProductVariantListOptions>;
};

export type Vendure_CollectionBreadcrumb = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Vendure_CollectionFilterParameter = {
  createdAt?: Maybe<Vendure_DateOperators>;
  updatedAt?: Maybe<Vendure_DateOperators>;
  languageCode?: Maybe<Vendure_StringOperators>;
  name?: Maybe<Vendure_StringOperators>;
  position?: Maybe<Vendure_NumberOperators>;
  description?: Maybe<Vendure_StringOperators>;
};

export type Vendure_CollectionList = Vendure_PaginatedList & {
  items: Array<Vendure_Collection>;
  totalItems: Scalars['Int'];
};

export type Vendure_CollectionListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<Vendure_CollectionSortParameter>;
  filter?: Maybe<Vendure_CollectionFilterParameter>;
};

export type Vendure_CollectionSortParameter = {
  id?: Maybe<Vendure_SortOrder>;
  createdAt?: Maybe<Vendure_SortOrder>;
  updatedAt?: Maybe<Vendure_SortOrder>;
  name?: Maybe<Vendure_SortOrder>;
  position?: Maybe<Vendure_SortOrder>;
  description?: Maybe<Vendure_SortOrder>;
};

export type Vendure_CollectionTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type Vendure_ConfigArg = {
  name: Scalars['String'];
  type: Vendure_ConfigArgType;
  value?: Maybe<Scalars['String']>;
};

export type Vendure_ConfigArgInput = {
  name: Scalars['String'];
  type: Vendure_ConfigArgType;
  value?: Maybe<Scalars['String']>;
};

/** Certain entities allow arbitrary configuration arguments to be specified which can then
 * be set in the admin-ui and used in the business logic of the app. These are the valid
 * data types of such arguments. The data type influences:
 *
 * 1. How the argument form field is rendered in the admin-ui
 * 2. The JavaScript type into which the value is coerced before being passed to the business logic.
 */
export enum Vendure_ConfigArgType {
  Percentage = 'PERCENTAGE',
  Money = 'MONEY',
  Int = 'INT',
  String = 'STRING',
  Datetime = 'DATETIME',
  Boolean = 'BOOLEAN',
  Facet_Value_Ids = 'FACET_VALUE_IDS',
}

export type Vendure_ConfigurableOperation = {
  code: Scalars['String'];
  args: Array<Vendure_ConfigArg>;
  description: Scalars['String'];
};

export type Vendure_ConfigurableOperationInput = {
  code: Scalars['String'];
  arguments: Array<Vendure_ConfigArgInput>;
};

export type Vendure_Country = Vendure_Node & {
  id: Scalars['ID'];
  languageCode: Vendure_LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  translations: Array<Vendure_CountryTranslation>;
};

export type Vendure_CountryList = Vendure_PaginatedList & {
  items: Array<Vendure_Country>;
  totalItems: Scalars['Int'];
};

export type Vendure_CountryTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
};

export type Vendure_CreateAddressInput = {
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
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_CreateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

/** ISO 4217 currency code */
export enum Vendure_CurrencyCode {
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

export type Vendure_CurrentUser = {
  id: Scalars['ID'];
  identifier: Scalars['String'];
  channelTokens: Array<Scalars['String']>;
};

export type Vendure_Customer = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  title?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  addresses?: Maybe<Array<Vendure_Address>>;
  orders: Vendure_OrderList;
  user?: Maybe<Vendure_User>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_CustomerOrdersArgs = {
  options?: Maybe<Vendure_OrderListOptions>;
};

export type Vendure_CustomerGroup = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  name: Scalars['String'];
};

export type Vendure_CustomerList = Vendure_PaginatedList & {
  items: Array<Vendure_Customer>;
  totalItems: Scalars['Int'];
};

export type Vendure_DateOperators = {
  eq?: Maybe<Scalars['Vendure_DateTime']>;
  before?: Maybe<Scalars['Vendure_DateTime']>;
  after?: Maybe<Scalars['Vendure_DateTime']>;
  between?: Maybe<Vendure_DateRange>;
};

export type Vendure_DateRange = {
  start: Scalars['Vendure_DateTime'];
  end: Scalars['Vendure_DateTime'];
};

export type Vendure_DeletionResponse = {
  result: Vendure_DeletionResult;
  message?: Maybe<Scalars['String']>;
};

export enum Vendure_DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  Not_Deleted = 'NOT_DELETED',
}

export type Vendure_Facet = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
  code: Scalars['String'];
  values: Array<Vendure_FacetValue>;
  translations: Array<Vendure_FacetTranslation>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_FacetList = Vendure_PaginatedList & {
  items: Array<Vendure_Facet>;
  totalItems: Scalars['Int'];
};

export type Vendure_FacetTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
};

export type Vendure_FacetValue = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  facet: Vendure_Facet;
  name: Scalars['String'];
  code: Scalars['String'];
  translations: Array<Vendure_FacetValueTranslation>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

/** Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type Vendure_FacetValueResult = {
  facetValue: Vendure_FacetValue;
  count: Scalars['Int'];
};

export type Vendure_FacetValueTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
};

export type Vendure_GlobalSettings = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  availableLanguages: Array<Vendure_LanguageCode>;
  serverConfig: Vendure_ServerConfig;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_ImportInfo = {
  errors?: Maybe<Array<Scalars['String']>>;
  processed: Scalars['Int'];
  imported: Scalars['Int'];
};

/** ISO 639-1 language code */
export enum Vendure_LanguageCode {
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

export type Vendure_LoginResult = {
  user: Vendure_CurrentUser;
};

export type Vendure_Node = {
  id: Scalars['ID'];
};

export type Vendure_NumberOperators = {
  eq?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  between?: Maybe<Vendure_NumberRange>;
};

export type Vendure_NumberRange = {
  start: Scalars['Float'];
  end: Scalars['Float'];
};

export type Vendure_Order = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  code: Scalars['String'];
  state: Scalars['String'];
  active: Scalars['Boolean'];
  customer?: Maybe<Vendure_Customer>;
  shippingAddress?: Maybe<Vendure_OrderAddress>;
  billingAddress?: Maybe<Vendure_OrderAddress>;
  lines: Array<Vendure_OrderLine>;
  adjustments: Array<Vendure_Adjustment>;
  payments?: Maybe<Array<Vendure_Payment>>;
  subTotalBeforeTax: Scalars['Int'];
  subTotal: Scalars['Int'];
  currencyCode: Vendure_CurrencyCode;
  shipping: Scalars['Int'];
  shippingMethod?: Maybe<Vendure_ShippingMethod>;
  totalBeforeTax: Scalars['Int'];
  total: Scalars['Int'];
};

export type Vendure_OrderAddress = {
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

export type Vendure_OrderFilterParameter = {
  createdAt?: Maybe<Vendure_DateOperators>;
  updatedAt?: Maybe<Vendure_DateOperators>;
  code?: Maybe<Vendure_StringOperators>;
  state?: Maybe<Vendure_StringOperators>;
  active?: Maybe<Vendure_BooleanOperators>;
  subTotalBeforeTax?: Maybe<Vendure_NumberOperators>;
  subTotal?: Maybe<Vendure_NumberOperators>;
  currencyCode?: Maybe<Vendure_StringOperators>;
  shipping?: Maybe<Vendure_NumberOperators>;
  totalBeforeTax?: Maybe<Vendure_NumberOperators>;
  total?: Maybe<Vendure_NumberOperators>;
};

export type Vendure_OrderItem = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  unitPriceIncludesTax: Scalars['Boolean'];
  taxRate: Scalars['Float'];
  adjustments: Array<Vendure_Adjustment>;
};

export type Vendure_OrderLine = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  productVariant: Vendure_ProductVariant;
  featuredAsset?: Maybe<Vendure_Asset>;
  unitPrice: Scalars['Int'];
  unitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  items: Array<Vendure_OrderItem>;
  totalPrice: Scalars['Int'];
  adjustments: Array<Vendure_Adjustment>;
  order: Vendure_Order;
};

export type Vendure_OrderList = Vendure_PaginatedList & {
  items: Array<Vendure_Order>;
  totalItems: Scalars['Int'];
};

export type Vendure_OrderListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<Vendure_OrderSortParameter>;
  filter?: Maybe<Vendure_OrderFilterParameter>;
};

export type Vendure_OrderSortParameter = {
  id?: Maybe<Vendure_SortOrder>;
  createdAt?: Maybe<Vendure_SortOrder>;
  updatedAt?: Maybe<Vendure_SortOrder>;
  code?: Maybe<Vendure_SortOrder>;
  state?: Maybe<Vendure_SortOrder>;
  subTotalBeforeTax?: Maybe<Vendure_SortOrder>;
  subTotal?: Maybe<Vendure_SortOrder>;
  shipping?: Maybe<Vendure_SortOrder>;
  totalBeforeTax?: Maybe<Vendure_SortOrder>;
  total?: Maybe<Vendure_SortOrder>;
};

export type Vendure_PaginatedList = {
  items: Array<Vendure_Node>;
  totalItems: Scalars['Int'];
};

export type Vendure_Payment = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  method: Scalars['String'];
  amount: Scalars['Int'];
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_PaymentInput = {
  method: Scalars['String'];
  metadata: Scalars['Vendure_JSON'];
};

export type Vendure_PaymentMethod = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  code: Scalars['String'];
  enabled: Scalars['Boolean'];
  configArgs: Array<Vendure_ConfigArg>;
};

/** Permissions for administrators and customers  */
export enum Vendure_Permission {
  /** The Authenticated role means simply that the user is logged in  */
  Authenticated = 'Authenticated',
  /** SuperAdmin can perform the most sensitive tasks  */
  SuperAdmin = 'SuperAdmin',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation  */
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
export type Vendure_PriceRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type Vendure_Product = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  featuredAsset?: Maybe<Vendure_Asset>;
  assets: Array<Vendure_Asset>;
  variants: Array<Vendure_ProductVariant>;
  optionGroups: Array<Vendure_ProductOptionGroup>;
  facetValues: Array<Vendure_FacetValue>;
  translations: Array<Vendure_ProductTranslation>;
  collections: Array<Vendure_Collection>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_ProductFilterParameter = {
  createdAt?: Maybe<Vendure_DateOperators>;
  updatedAt?: Maybe<Vendure_DateOperators>;
  languageCode?: Maybe<Vendure_StringOperators>;
  name?: Maybe<Vendure_StringOperators>;
  slug?: Maybe<Vendure_StringOperators>;
  description?: Maybe<Vendure_StringOperators>;
};

export type Vendure_ProductList = Vendure_PaginatedList & {
  items: Array<Vendure_Product>;
  totalItems: Scalars['Int'];
};

export type Vendure_ProductListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<Vendure_ProductSortParameter>;
  filter?: Maybe<Vendure_ProductFilterParameter>;
};

export type Vendure_ProductOption = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode?: Maybe<Vendure_LanguageCode>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  translations: Array<Vendure_ProductOptionTranslation>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_ProductOptionGroup = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  code: Scalars['String'];
  name: Scalars['String'];
  options: Array<Vendure_ProductOption>;
  translations: Array<Vendure_ProductOptionGroupTranslation>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_ProductOptionGroupTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
};

export type Vendure_ProductOptionTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
};

export type Vendure_ProductSortParameter = {
  id?: Maybe<Vendure_SortOrder>;
  createdAt?: Maybe<Vendure_SortOrder>;
  updatedAt?: Maybe<Vendure_SortOrder>;
  name?: Maybe<Vendure_SortOrder>;
  slug?: Maybe<Vendure_SortOrder>;
  description?: Maybe<Vendure_SortOrder>;
};

export type Vendure_ProductTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
};

export type Vendure_ProductVariant = Vendure_Node & {
  id: Scalars['ID'];
  productId: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  sku: Scalars['String'];
  name: Scalars['String'];
  featuredAsset?: Maybe<Vendure_Asset>;
  assets: Array<Vendure_Asset>;
  price: Scalars['Int'];
  currencyCode: Vendure_CurrencyCode;
  priceIncludesTax: Scalars['Boolean'];
  priceWithTax: Scalars['Int'];
  taxRateApplied: Vendure_TaxRate;
  taxCategory: Vendure_TaxCategory;
  options: Array<Vendure_ProductOption>;
  facetValues: Array<Vendure_FacetValue>;
  translations: Array<Vendure_ProductVariantTranslation>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_ProductVariantFilterParameter = {
  createdAt?: Maybe<Vendure_DateOperators>;
  updatedAt?: Maybe<Vendure_DateOperators>;
  languageCode?: Maybe<Vendure_StringOperators>;
  sku?: Maybe<Vendure_StringOperators>;
  name?: Maybe<Vendure_StringOperators>;
  price?: Maybe<Vendure_NumberOperators>;
  currencyCode?: Maybe<Vendure_StringOperators>;
  priceIncludesTax?: Maybe<Vendure_BooleanOperators>;
  priceWithTax?: Maybe<Vendure_NumberOperators>;
};

export type Vendure_ProductVariantList = Vendure_PaginatedList & {
  items: Array<Vendure_ProductVariant>;
  totalItems: Scalars['Int'];
};

export type Vendure_ProductVariantListOptions = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  sort?: Maybe<Vendure_ProductVariantSortParameter>;
  filter?: Maybe<Vendure_ProductVariantFilterParameter>;
};

export type Vendure_ProductVariantSortParameter = {
  id?: Maybe<Vendure_SortOrder>;
  productId?: Maybe<Vendure_SortOrder>;
  createdAt?: Maybe<Vendure_SortOrder>;
  updatedAt?: Maybe<Vendure_SortOrder>;
  sku?: Maybe<Vendure_SortOrder>;
  name?: Maybe<Vendure_SortOrder>;
  price?: Maybe<Vendure_SortOrder>;
  priceWithTax?: Maybe<Vendure_SortOrder>;
};

export type Vendure_ProductVariantTranslation = {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  languageCode: Vendure_LanguageCode;
  name: Scalars['String'];
};

export type Vendure_Promotion = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  conditions: Array<Vendure_ConfigurableOperation>;
  actions: Array<Vendure_ConfigurableOperation>;
};

export type Vendure_PromotionList = Vendure_PaginatedList & {
  items: Array<Vendure_Promotion>;
  totalItems: Scalars['Int'];
};

export type Vendure_RegisterCustomerInput = {
  emailAddress: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Vendure_Role = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  permissions: Array<Vendure_Permission>;
  channels: Array<Vendure_Channel>;
};

export type Vendure_RoleList = Vendure_PaginatedList & {
  items: Array<Vendure_Role>;
  totalItems: Scalars['Int'];
};

export type Vendure_SearchInput = {
  term?: Maybe<Scalars['String']>;
  facetIds?: Maybe<Array<Scalars['String']>>;
  collectionId?: Maybe<Scalars['String']>;
  groupByProduct?: Maybe<Scalars['Boolean']>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<Vendure_SearchResultSortParameter>;
};

export type Vendure_SearchReindexResponse = {
  success: Scalars['Boolean'];
  timeTaken: Scalars['Int'];
  indexedItemCount: Scalars['Int'];
};

export type Vendure_SearchResponse = {
  items: Array<Vendure_SearchResult>;
  totalItems: Scalars['Int'];
  facetValues: Array<Vendure_FacetValueResult>;
};

export type Vendure_SearchResult = {
  sku: Scalars['String'];
  slug: Scalars['String'];
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productPreview: Scalars['String'];
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  productVariantPreview: Scalars['String'];
  price: Vendure_SearchResultPrice;
  priceWithTax: Vendure_SearchResultPrice;
  currencyCode: Vendure_CurrencyCode;
  description: Scalars['String'];
  facetIds: Array<Scalars['String']>;
  facetValueIds: Array<Scalars['String']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['String']>;
  /** A relevence score for the result. Differs between database implementations */
  score: Scalars['Float'];
};

/** The price of a search result product, either as a range or as a single price */
export type Vendure_SearchResultPrice =
  | Vendure_PriceRange
  | Vendure_SinglePrice;

export type Vendure_SearchResultSortParameter = {
  name?: Maybe<Vendure_SortOrder>;
  price?: Maybe<Vendure_SortOrder>;
};

export type Vendure_ServerConfig = {
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_ShippingMethod = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  code: Scalars['String'];
  description: Scalars['String'];
  checker: Vendure_ConfigurableOperation;
  calculator: Vendure_ConfigurableOperation;
};

export type Vendure_ShippingMethodList = Vendure_PaginatedList & {
  items: Array<Vendure_ShippingMethod>;
  totalItems: Scalars['Int'];
};

export type Vendure_ShippingMethodQuote = {
  id: Scalars['ID'];
  price: Scalars['Int'];
  description: Scalars['String'];
};

/** The price value where the result has a single price */
export type Vendure_SinglePrice = {
  value: Scalars['Int'];
};

export enum Vendure_SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Vendure_StringOperators = {
  eq?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
};

export type Vendure_TaxCategory = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  name: Scalars['String'];
};

export type Vendure_TaxRate = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
  value: Scalars['Int'];
  category: Vendure_TaxCategory;
  zone: Vendure_Zone;
  customerGroup?: Maybe<Vendure_CustomerGroup>;
};

export type Vendure_TaxRateList = Vendure_PaginatedList & {
  items: Array<Vendure_TaxRate>;
  totalItems: Scalars['Int'];
};

export type Vendure_UpdateAddressInput = {
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
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_UpdateCustomerInput = {
  title?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_User = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  identifier: Scalars['String'];
  verified: Scalars['Boolean'];
  roles: Array<Vendure_Role>;
  lastLogin?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['Vendure_JSON']>;
};

export type Vendure_Zone = Vendure_Node & {
  id: Scalars['ID'];
  createdAt: Scalars['Vendure_DateTime'];
  updatedAt: Scalars['Vendure_DateTime'];
  name: Scalars['String'];
  members: Array<Vendure_Country>;
};
export type SiteTitleQueryQueryVariables = {};

export type SiteTitleQueryQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'siteMetadata_2' } & Pick<SiteMetadata_2, 'title'>
      >;
    }
  >;
};

export type Unnamed_1_QueryVariables = {};

export type Unnamed_1_Query = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'siteMetadata_2' } & Pick<
          SiteMetadata_2,
          'title' | 'description' | 'author'
        >
      >;
    }
  >;
};

export type Unnamed_2_QueryVariables = {};

export type Unnamed_2_Query = { __typename?: 'Query' } & {
  vendure: Maybe<
    { __typename?: 'Vendure' } & {
      search: { __typename?: 'Vendure_SearchResponse' } & {
        items: Array<
          { __typename?: 'Vendure_SearchResult' } & Pick<
            Vendure_SearchResult,
            | 'productId'
            | 'productName'
            | 'description'
            | 'slug'
            | 'currencyCode'
            | 'productPreview'
          > & {
              priceWithTax:
                | ({ __typename?: 'Vendure_PriceRange' } & Pick<
                    Vendure_PriceRange,
                    'min' | 'max'
                  >)
                | ({ __typename?: 'Vendure_SinglePrice' } & Pick<
                    Vendure_SinglePrice,
                    'value'
                  >);
            }
        >;
      };
    }
  >;
};

export type Unnamed_3_QueryVariables = {
  id: Scalars['ID'];
};

export type Unnamed_3_Query = { __typename?: 'Query' } & {
  vendure: Maybe<
    { __typename?: 'Vendure' } & {
      product: Maybe<
        { __typename?: 'Vendure_Product' } & Pick<
          Vendure_Product,
          'id' | 'name' | 'slug' | 'description'
        > & {
            featuredAsset: Maybe<
              { __typename?: 'Vendure_Asset' } & Pick<
                Vendure_Asset,
                'id' | 'preview'
              >
            >;
            variants: Array<
              { __typename?: 'Vendure_ProductVariant' } & Pick<
                Vendure_ProductVariant,
                'id' | 'name' | 'priceWithTax' | 'currencyCode'
              >
            >;
          }
      >;
    }
  >;
};
