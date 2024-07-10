// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ContactPoint, ContactPointT } from './ContactPoint.js';
import { CryptoKey, CryptoKeyT } from './CryptoKey.js';
import { Occupation, OccupationT } from './Occupation.js';
import { Organization, OrganizationT } from './Organization.js';


/**
 * User Profile Message
 */
export class UPM implements flatbuffers.IUnpackableObject<UPMT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):UPM {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUPM(bb:flatbuffers.ByteBuffer, obj?:UPM):UPM {
  return (obj || new UPM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUPM(bb:flatbuffers.ByteBuffer, obj?:UPM):UPM {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new UPM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$UPM');
}

NAME():string|null
NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

ALTERNATE_NAME():string|null
ALTERNATE_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ALTERNATE_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

DESCRIPTION():string|null
DESCRIPTION(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
DESCRIPTION(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

IMAGE():string|null
IMAGE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
IMAGE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

SAME_AS():string|null
SAME_AS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
SAME_AS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

URL():string|null
URL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
URL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

TELEPHONE():string|null
TELEPHONE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
TELEPHONE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

EMAIL():string|null
EMAIL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
EMAIL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

KEY(index: number, obj?:CryptoKey):CryptoKey|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new CryptoKey()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

keyLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

CONTACT_POINT(index: number, obj?:ContactPoint):ContactPoint|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new ContactPoint()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

contactPointLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

ADDRESS(obj?:ContactPoint):ContactPoint|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new ContactPoint()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

JOB_TITLE():string|null
JOB_TITLE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
JOB_TITLE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

AFFILIATION(obj?:Organization):Organization|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? (obj || new Organization()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

HAS_OCCUPATION(obj?:Occupation):Occupation|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? (obj || new Occupation()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

FAMILY_NAME():string|null
FAMILY_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
FAMILY_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

GIVEN_NAME():string|null
GIVEN_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
GIVEN_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

ADDITIONAL_NAME():string|null
ADDITIONAL_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ADDITIONAL_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

HONORIFIC_PREFIX():string|null
HONORIFIC_PREFIX(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
HONORIFIC_PREFIX(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

HONORIFIC_SUFFIX():string|null
HONORIFIC_SUFFIX(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
HONORIFIC_SUFFIX(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startUPM(builder:flatbuffers.Builder) {
  builder.startObject(19);
}

static addName(builder:flatbuffers.Builder, NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, NAMEOffset, 0);
}

static addAlternateName(builder:flatbuffers.Builder, ALTERNATE_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, ALTERNATE_NAMEOffset, 0);
}

static addDescription(builder:flatbuffers.Builder, DESCRIPTIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, DESCRIPTIONOffset, 0);
}

static addImage(builder:flatbuffers.Builder, IMAGEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, IMAGEOffset, 0);
}

static addSameAs(builder:flatbuffers.Builder, SAME_ASOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, SAME_ASOffset, 0);
}

static addUrl(builder:flatbuffers.Builder, URLOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, URLOffset, 0);
}

static addTelephone(builder:flatbuffers.Builder, TELEPHONEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, TELEPHONEOffset, 0);
}

static addEmail(builder:flatbuffers.Builder, EMAILOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, EMAILOffset, 0);
}

static addKey(builder:flatbuffers.Builder, KEYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, KEYOffset, 0);
}

static createKeyVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startKeyVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addContactPoint(builder:flatbuffers.Builder, CONTACT_POINTOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, CONTACT_POINTOffset, 0);
}

static createContactPointVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startContactPointVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addAddress(builder:flatbuffers.Builder, ADDRESSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, ADDRESSOffset, 0);
}

static addJobTitle(builder:flatbuffers.Builder, JOB_TITLEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, JOB_TITLEOffset, 0);
}

static addAffiliation(builder:flatbuffers.Builder, AFFILIATIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, AFFILIATIONOffset, 0);
}

static addHasOccupation(builder:flatbuffers.Builder, HAS_OCCUPATIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, HAS_OCCUPATIONOffset, 0);
}

static addFamilyName(builder:flatbuffers.Builder, FAMILY_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, FAMILY_NAMEOffset, 0);
}

static addGivenName(builder:flatbuffers.Builder, GIVEN_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, GIVEN_NAMEOffset, 0);
}

static addAdditionalName(builder:flatbuffers.Builder, ADDITIONAL_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(16, ADDITIONAL_NAMEOffset, 0);
}

static addHonorificPrefix(builder:flatbuffers.Builder, HONORIFIC_PREFIXOffset:flatbuffers.Offset) {
  builder.addFieldOffset(17, HONORIFIC_PREFIXOffset, 0);
}

static addHonorificSuffix(builder:flatbuffers.Builder, HONORIFIC_SUFFIXOffset:flatbuffers.Offset) {
  builder.addFieldOffset(18, HONORIFIC_SUFFIXOffset, 0);
}

static endUPM(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishUPMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$UPM');
}

static finishSizePrefixedUPMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$UPM', true);
}


unpack(): UPMT {
  return new UPMT(
    this.NAME(),
    this.ALTERNATE_NAME(),
    this.DESCRIPTION(),
    this.IMAGE(),
    this.SAME_AS(),
    this.URL(),
    this.TELEPHONE(),
    this.EMAIL(),
    this.bb!.createObjList<CryptoKey, CryptoKeyT>(this.KEY.bind(this), this.keyLength()),
    this.bb!.createObjList<ContactPoint, ContactPointT>(this.CONTACT_POINT.bind(this), this.contactPointLength()),
    (this.ADDRESS() !== null ? this.ADDRESS()!.unpack() : null),
    this.JOB_TITLE(),
    (this.AFFILIATION() !== null ? this.AFFILIATION()!.unpack() : null),
    (this.HAS_OCCUPATION() !== null ? this.HAS_OCCUPATION()!.unpack() : null),
    this.FAMILY_NAME(),
    this.GIVEN_NAME(),
    this.ADDITIONAL_NAME(),
    this.HONORIFIC_PREFIX(),
    this.HONORIFIC_SUFFIX()
  );
}


unpackTo(_o: UPMT): void {
  _o.NAME = this.NAME();
  _o.ALTERNATE_NAME = this.ALTERNATE_NAME();
  _o.DESCRIPTION = this.DESCRIPTION();
  _o.IMAGE = this.IMAGE();
  _o.SAME_AS = this.SAME_AS();
  _o.URL = this.URL();
  _o.TELEPHONE = this.TELEPHONE();
  _o.EMAIL = this.EMAIL();
  _o.KEY = this.bb!.createObjList<CryptoKey, CryptoKeyT>(this.KEY.bind(this), this.keyLength());
  _o.CONTACT_POINT = this.bb!.createObjList<ContactPoint, ContactPointT>(this.CONTACT_POINT.bind(this), this.contactPointLength());
  _o.ADDRESS = (this.ADDRESS() !== null ? this.ADDRESS()!.unpack() : null);
  _o.JOB_TITLE = this.JOB_TITLE();
  _o.AFFILIATION = (this.AFFILIATION() !== null ? this.AFFILIATION()!.unpack() : null);
  _o.HAS_OCCUPATION = (this.HAS_OCCUPATION() !== null ? this.HAS_OCCUPATION()!.unpack() : null);
  _o.FAMILY_NAME = this.FAMILY_NAME();
  _o.GIVEN_NAME = this.GIVEN_NAME();
  _o.ADDITIONAL_NAME = this.ADDITIONAL_NAME();
  _o.HONORIFIC_PREFIX = this.HONORIFIC_PREFIX();
  _o.HONORIFIC_SUFFIX = this.HONORIFIC_SUFFIX();
}
}

export class UPMT implements flatbuffers.IGeneratedObject {
constructor(
  public NAME: string|Uint8Array|null = null,
  public ALTERNATE_NAME: string|Uint8Array|null = null,
  public DESCRIPTION: string|Uint8Array|null = null,
  public IMAGE: string|Uint8Array|null = null,
  public SAME_AS: string|Uint8Array|null = null,
  public URL: string|Uint8Array|null = null,
  public TELEPHONE: string|Uint8Array|null = null,
  public EMAIL: string|Uint8Array|null = null,
  public KEY: (CryptoKeyT)[] = [],
  public CONTACT_POINT: (ContactPointT)[] = [],
  public ADDRESS: ContactPointT|null = null,
  public JOB_TITLE: string|Uint8Array|null = null,
  public AFFILIATION: OrganizationT|null = null,
  public HAS_OCCUPATION: OccupationT|null = null,
  public FAMILY_NAME: string|Uint8Array|null = null,
  public GIVEN_NAME: string|Uint8Array|null = null,
  public ADDITIONAL_NAME: string|Uint8Array|null = null,
  public HONORIFIC_PREFIX: string|Uint8Array|null = null,
  public HONORIFIC_SUFFIX: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const NAME = (this.NAME !== null ? builder.createString(this.NAME!) : 0);
  const ALTERNATE_NAME = (this.ALTERNATE_NAME !== null ? builder.createString(this.ALTERNATE_NAME!) : 0);
  const DESCRIPTION = (this.DESCRIPTION !== null ? builder.createString(this.DESCRIPTION!) : 0);
  const IMAGE = (this.IMAGE !== null ? builder.createString(this.IMAGE!) : 0);
  const SAME_AS = (this.SAME_AS !== null ? builder.createString(this.SAME_AS!) : 0);
  const URL = (this.URL !== null ? builder.createString(this.URL!) : 0);
  const TELEPHONE = (this.TELEPHONE !== null ? builder.createString(this.TELEPHONE!) : 0);
  const EMAIL = (this.EMAIL !== null ? builder.createString(this.EMAIL!) : 0);
  const KEY = UPM.createKeyVector(builder, builder.createObjectOffsetList(this.KEY));
  const CONTACT_POINT = UPM.createContactPointVector(builder, builder.createObjectOffsetList(this.CONTACT_POINT));
  const ADDRESS = (this.ADDRESS !== null ? this.ADDRESS!.pack(builder) : 0);
  const JOB_TITLE = (this.JOB_TITLE !== null ? builder.createString(this.JOB_TITLE!) : 0);
  const AFFILIATION = (this.AFFILIATION !== null ? this.AFFILIATION!.pack(builder) : 0);
  const HAS_OCCUPATION = (this.HAS_OCCUPATION !== null ? this.HAS_OCCUPATION!.pack(builder) : 0);
  const FAMILY_NAME = (this.FAMILY_NAME !== null ? builder.createString(this.FAMILY_NAME!) : 0);
  const GIVEN_NAME = (this.GIVEN_NAME !== null ? builder.createString(this.GIVEN_NAME!) : 0);
  const ADDITIONAL_NAME = (this.ADDITIONAL_NAME !== null ? builder.createString(this.ADDITIONAL_NAME!) : 0);
  const HONORIFIC_PREFIX = (this.HONORIFIC_PREFIX !== null ? builder.createString(this.HONORIFIC_PREFIX!) : 0);
  const HONORIFIC_SUFFIX = (this.HONORIFIC_SUFFIX !== null ? builder.createString(this.HONORIFIC_SUFFIX!) : 0);

  UPM.startUPM(builder);
  UPM.addName(builder, NAME);
  UPM.addAlternateName(builder, ALTERNATE_NAME);
  UPM.addDescription(builder, DESCRIPTION);
  UPM.addImage(builder, IMAGE);
  UPM.addSameAs(builder, SAME_AS);
  UPM.addUrl(builder, URL);
  UPM.addTelephone(builder, TELEPHONE);
  UPM.addEmail(builder, EMAIL);
  UPM.addKey(builder, KEY);
  UPM.addContactPoint(builder, CONTACT_POINT);
  UPM.addAddress(builder, ADDRESS);
  UPM.addJobTitle(builder, JOB_TITLE);
  UPM.addAffiliation(builder, AFFILIATION);
  UPM.addHasOccupation(builder, HAS_OCCUPATION);
  UPM.addFamilyName(builder, FAMILY_NAME);
  UPM.addGivenName(builder, GIVEN_NAME);
  UPM.addAdditionalName(builder, ADDITIONAL_NAME);
  UPM.addHonorificPrefix(builder, HONORIFIC_PREFIX);
  UPM.addHonorificSuffix(builder, HONORIFIC_SUFFIX);

  return UPM.endUPM(builder);
}
}
