// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { PLD, PLDT } from './PLD.js';
import { dataStatusCode } from './dataStatusCode.js';
import { massType } from './massType.js';
import { objectType } from './objectType.js';
import { opsStatusCode } from './opsStatusCode.js';
import { orbitType } from './orbitType.js';


/**
 * Catalog Entity Message
 */
export class CAT implements flatbuffers.IUnpackableObject<CATT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CAT {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCAT(bb:flatbuffers.ByteBuffer, obj?:CAT):CAT {
  return (obj || new CAT()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCAT(bb:flatbuffers.ByteBuffer, obj?:CAT):CAT {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CAT()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$CAT');
}

/**
 * Satellite Name(s)
 */
OBJECT_NAME():string|null
OBJECT_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
OBJECT_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * International Designator (YYYY-NNNAAA)
 */
OBJECT_ID():string|null
OBJECT_ID(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
OBJECT_ID(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * NORAD Catalog Number
 */
NORAD_CAT_ID():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

/**
 * Object type (Payload, Rocket body, Debris, Unknown)
 */
OBJECT_TYPE():objectType {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : objectType.UNKNOWN;
}

/**
 * Operational Status Code
 */
OPS_STATUS_CODE():opsStatusCode {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : opsStatusCode.UNKNOWN;
}

/**
 * Ownership, typically country or company
 */
OWNER():string|null
OWNER(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
OWNER(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Launch Date [year-month-day] (ISO 8601)
 */
LAUNCH_DATE():string|null
LAUNCH_DATE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
LAUNCH_DATE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Launch Site
 */
LAUNCH_SITE():string|null
LAUNCH_SITE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
LAUNCH_SITE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Decay Date, if applicable [year-month-day] (ISO 8601)
 */
DECAY_DATE():string|null
DECAY_DATE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
DECAY_DATE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Orbital period [minutes]
 */
PERIOD():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Inclination [degrees]
 */
INCLINATION():number {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Apogee Altitude [kilometers]
 */
APOGEE():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Perigee Altitude [kilometers]
 */
PERIGEE():number {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Radar Cross Section [meters2]; blank if no data available
 */
RCS():number {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Data status code; blank otherwise
 */
DATA_STATUS_CODE():dataStatusCode {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : dataStatusCode.NO_CURRENT_ELEMENTS;
}

/**
 * Orbit center
 */
ORBIT_CENTER():string|null
ORBIT_CENTER(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ORBIT_CENTER(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Orbit type (Orbit, Landing, Impact, Docked to RSO, roundtrip)
 */
ORBIT_TYPE():orbitType {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : orbitType.ORBIT;
}

/**
 * Deployment Date [year-month-day] (ISO 8601)
 */
DEPLOYMENT_DATE():string|null
DEPLOYMENT_DATE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
DEPLOYMENT_DATE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Indicates if the object is maneuverable
 */
MANEUVERABLE():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

/**
 * Size [meters]; blank if no data available
 */
SIZE():number {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Mass [kilograms]; blank if no data available
 */
MASS():number {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Mass type (Dry, Wet)
 */
MASS_TYPE():massType {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : massType.DRY;
}

/**
 * Vector of PAYLOADS
 */
PAYLOADS(index: number, obj?:PLD):PLD|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? (obj || new PLD()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

payloadsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startCAT(builder:flatbuffers.Builder) {
  builder.startObject(23);
}

static addObjectName(builder:flatbuffers.Builder, OBJECT_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, OBJECT_NAMEOffset, 0);
}

static addObjectId(builder:flatbuffers.Builder, OBJECT_IDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, OBJECT_IDOffset, 0);
}

static addNoradCatId(builder:flatbuffers.Builder, NORAD_CAT_ID:number) {
  builder.addFieldInt32(2, NORAD_CAT_ID, 0);
}

static addObjectType(builder:flatbuffers.Builder, OBJECT_TYPE:objectType) {
  builder.addFieldInt8(3, OBJECT_TYPE, objectType.UNKNOWN);
}

static addOpsStatusCode(builder:flatbuffers.Builder, OPS_STATUS_CODE:opsStatusCode) {
  builder.addFieldInt8(4, OPS_STATUS_CODE, opsStatusCode.UNKNOWN);
}

static addOwner(builder:flatbuffers.Builder, OWNEROffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, OWNEROffset, 0);
}

static addLaunchDate(builder:flatbuffers.Builder, LAUNCH_DATEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, LAUNCH_DATEOffset, 0);
}

static addLaunchSite(builder:flatbuffers.Builder, LAUNCH_SITEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, LAUNCH_SITEOffset, 0);
}

static addDecayDate(builder:flatbuffers.Builder, DECAY_DATEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, DECAY_DATEOffset, 0);
}

static addPeriod(builder:flatbuffers.Builder, PERIOD:number) {
  builder.addFieldFloat64(9, PERIOD, 0.0);
}

static addInclination(builder:flatbuffers.Builder, INCLINATION:number) {
  builder.addFieldFloat64(10, INCLINATION, 0.0);
}

static addApogee(builder:flatbuffers.Builder, APOGEE:number) {
  builder.addFieldFloat64(11, APOGEE, 0.0);
}

static addPerigee(builder:flatbuffers.Builder, PERIGEE:number) {
  builder.addFieldFloat64(12, PERIGEE, 0.0);
}

static addRcs(builder:flatbuffers.Builder, RCS:number) {
  builder.addFieldFloat64(13, RCS, 0.0);
}

static addDataStatusCode(builder:flatbuffers.Builder, DATA_STATUS_CODE:dataStatusCode) {
  builder.addFieldInt8(14, DATA_STATUS_CODE, dataStatusCode.NO_CURRENT_ELEMENTS);
}

static addOrbitCenter(builder:flatbuffers.Builder, ORBIT_CENTEROffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, ORBIT_CENTEROffset, 0);
}

static addOrbitType(builder:flatbuffers.Builder, ORBIT_TYPE:orbitType) {
  builder.addFieldInt8(16, ORBIT_TYPE, orbitType.ORBIT);
}

static addDeploymentDate(builder:flatbuffers.Builder, DEPLOYMENT_DATEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(17, DEPLOYMENT_DATEOffset, 0);
}

static addManeuverable(builder:flatbuffers.Builder, MANEUVERABLE:boolean) {
  builder.addFieldInt8(18, +MANEUVERABLE, +false);
}

static addSize(builder:flatbuffers.Builder, SIZE:number) {
  builder.addFieldFloat64(19, SIZE, 0.0);
}

static addMass(builder:flatbuffers.Builder, MASS:number) {
  builder.addFieldFloat64(20, MASS, 0.0);
}

static addMassType(builder:flatbuffers.Builder, MASS_TYPE:massType) {
  builder.addFieldInt8(21, MASS_TYPE, massType.DRY);
}

static addPayloads(builder:flatbuffers.Builder, PAYLOADSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(22, PAYLOADSOffset, 0);
}

static createPayloadsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startPayloadsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endCAT(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishCATBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$CAT');
}

static finishSizePrefixedCATBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$CAT', true);
}

static createCAT(builder:flatbuffers.Builder, OBJECT_NAMEOffset:flatbuffers.Offset, OBJECT_IDOffset:flatbuffers.Offset, NORAD_CAT_ID:number, OBJECT_TYPE:objectType, OPS_STATUS_CODE:opsStatusCode, OWNEROffset:flatbuffers.Offset, LAUNCH_DATEOffset:flatbuffers.Offset, LAUNCH_SITEOffset:flatbuffers.Offset, DECAY_DATEOffset:flatbuffers.Offset, PERIOD:number, INCLINATION:number, APOGEE:number, PERIGEE:number, RCS:number, DATA_STATUS_CODE:dataStatusCode, ORBIT_CENTEROffset:flatbuffers.Offset, ORBIT_TYPE:orbitType, DEPLOYMENT_DATEOffset:flatbuffers.Offset, MANEUVERABLE:boolean, SIZE:number, MASS:number, MASS_TYPE:massType, PAYLOADSOffset:flatbuffers.Offset):flatbuffers.Offset {
  CAT.startCAT(builder);
  CAT.addObjectName(builder, OBJECT_NAMEOffset);
  CAT.addObjectId(builder, OBJECT_IDOffset);
  CAT.addNoradCatId(builder, NORAD_CAT_ID);
  CAT.addObjectType(builder, OBJECT_TYPE);
  CAT.addOpsStatusCode(builder, OPS_STATUS_CODE);
  CAT.addOwner(builder, OWNEROffset);
  CAT.addLaunchDate(builder, LAUNCH_DATEOffset);
  CAT.addLaunchSite(builder, LAUNCH_SITEOffset);
  CAT.addDecayDate(builder, DECAY_DATEOffset);
  CAT.addPeriod(builder, PERIOD);
  CAT.addInclination(builder, INCLINATION);
  CAT.addApogee(builder, APOGEE);
  CAT.addPerigee(builder, PERIGEE);
  CAT.addRcs(builder, RCS);
  CAT.addDataStatusCode(builder, DATA_STATUS_CODE);
  CAT.addOrbitCenter(builder, ORBIT_CENTEROffset);
  CAT.addOrbitType(builder, ORBIT_TYPE);
  CAT.addDeploymentDate(builder, DEPLOYMENT_DATEOffset);
  CAT.addManeuverable(builder, MANEUVERABLE);
  CAT.addSize(builder, SIZE);
  CAT.addMass(builder, MASS);
  CAT.addMassType(builder, MASS_TYPE);
  CAT.addPayloads(builder, PAYLOADSOffset);
  return CAT.endCAT(builder);
}

unpack(): CATT {
  return new CATT(
    this.OBJECT_NAME(),
    this.OBJECT_ID(),
    this.NORAD_CAT_ID(),
    this.OBJECT_TYPE(),
    this.OPS_STATUS_CODE(),
    this.OWNER(),
    this.LAUNCH_DATE(),
    this.LAUNCH_SITE(),
    this.DECAY_DATE(),
    this.PERIOD(),
    this.INCLINATION(),
    this.APOGEE(),
    this.PERIGEE(),
    this.RCS(),
    this.DATA_STATUS_CODE(),
    this.ORBIT_CENTER(),
    this.ORBIT_TYPE(),
    this.DEPLOYMENT_DATE(),
    this.MANEUVERABLE(),
    this.SIZE(),
    this.MASS(),
    this.MASS_TYPE(),
    this.bb!.createObjList<PLD, PLDT>(this.PAYLOADS.bind(this), this.payloadsLength())
  );
}


unpackTo(_o: CATT): void {
  _o.OBJECT_NAME = this.OBJECT_NAME();
  _o.OBJECT_ID = this.OBJECT_ID();
  _o.NORAD_CAT_ID = this.NORAD_CAT_ID();
  _o.OBJECT_TYPE = this.OBJECT_TYPE();
  _o.OPS_STATUS_CODE = this.OPS_STATUS_CODE();
  _o.OWNER = this.OWNER();
  _o.LAUNCH_DATE = this.LAUNCH_DATE();
  _o.LAUNCH_SITE = this.LAUNCH_SITE();
  _o.DECAY_DATE = this.DECAY_DATE();
  _o.PERIOD = this.PERIOD();
  _o.INCLINATION = this.INCLINATION();
  _o.APOGEE = this.APOGEE();
  _o.PERIGEE = this.PERIGEE();
  _o.RCS = this.RCS();
  _o.DATA_STATUS_CODE = this.DATA_STATUS_CODE();
  _o.ORBIT_CENTER = this.ORBIT_CENTER();
  _o.ORBIT_TYPE = this.ORBIT_TYPE();
  _o.DEPLOYMENT_DATE = this.DEPLOYMENT_DATE();
  _o.MANEUVERABLE = this.MANEUVERABLE();
  _o.SIZE = this.SIZE();
  _o.MASS = this.MASS();
  _o.MASS_TYPE = this.MASS_TYPE();
  _o.PAYLOADS = this.bb!.createObjList<PLD, PLDT>(this.PAYLOADS.bind(this), this.payloadsLength());
}
}

export class CATT implements flatbuffers.IGeneratedObject {
constructor(
  public OBJECT_NAME: string|Uint8Array|null = null,
  public OBJECT_ID: string|Uint8Array|null = null,
  public NORAD_CAT_ID: number = 0,
  public OBJECT_TYPE: objectType = objectType.UNKNOWN,
  public OPS_STATUS_CODE: opsStatusCode = opsStatusCode.UNKNOWN,
  public OWNER: string|Uint8Array|null = null,
  public LAUNCH_DATE: string|Uint8Array|null = null,
  public LAUNCH_SITE: string|Uint8Array|null = null,
  public DECAY_DATE: string|Uint8Array|null = null,
  public PERIOD: number = 0.0,
  public INCLINATION: number = 0.0,
  public APOGEE: number = 0.0,
  public PERIGEE: number = 0.0,
  public RCS: number = 0.0,
  public DATA_STATUS_CODE: dataStatusCode = dataStatusCode.NO_CURRENT_ELEMENTS,
  public ORBIT_CENTER: string|Uint8Array|null = null,
  public ORBIT_TYPE: orbitType = orbitType.ORBIT,
  public DEPLOYMENT_DATE: string|Uint8Array|null = null,
  public MANEUVERABLE: boolean = false,
  public SIZE: number = 0.0,
  public MASS: number = 0.0,
  public MASS_TYPE: massType = massType.DRY,
  public PAYLOADS: (PLDT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const OBJECT_NAME = (this.OBJECT_NAME !== null ? builder.createString(this.OBJECT_NAME!) : 0);
  const OBJECT_ID = (this.OBJECT_ID !== null ? builder.createString(this.OBJECT_ID!) : 0);
  const OWNER = (this.OWNER !== null ? builder.createString(this.OWNER!) : 0);
  const LAUNCH_DATE = (this.LAUNCH_DATE !== null ? builder.createString(this.LAUNCH_DATE!) : 0);
  const LAUNCH_SITE = (this.LAUNCH_SITE !== null ? builder.createString(this.LAUNCH_SITE!) : 0);
  const DECAY_DATE = (this.DECAY_DATE !== null ? builder.createString(this.DECAY_DATE!) : 0);
  const ORBIT_CENTER = (this.ORBIT_CENTER !== null ? builder.createString(this.ORBIT_CENTER!) : 0);
  const DEPLOYMENT_DATE = (this.DEPLOYMENT_DATE !== null ? builder.createString(this.DEPLOYMENT_DATE!) : 0);
  const PAYLOADS = CAT.createPayloadsVector(builder, builder.createObjectOffsetList(this.PAYLOADS));

  return CAT.createCAT(builder,
    OBJECT_NAME,
    OBJECT_ID,
    this.NORAD_CAT_ID,
    this.OBJECT_TYPE,
    this.OPS_STATUS_CODE,
    OWNER,
    LAUNCH_DATE,
    LAUNCH_SITE,
    DECAY_DATE,
    this.PERIOD,
    this.INCLINATION,
    this.APOGEE,
    this.PERIGEE,
    this.RCS,
    this.DATA_STATUS_CODE,
    ORBIT_CENTER,
    this.ORBIT_TYPE,
    DEPLOYMENT_DATE,
    this.MANEUVERABLE,
    this.SIZE,
    this.MASS,
    this.MASS_TYPE,
    PAYLOADS
  );
}
}
