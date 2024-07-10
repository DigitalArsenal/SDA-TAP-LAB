// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { ENGINE, ENGINET } from './ENGINE.js';


/**
 * Stage Details
 */
export class STAGE implements flatbuffers.IUnpackableObject<STAGET> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):STAGE {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSTAGE(bb:flatbuffers.ByteBuffer, obj?:STAGE):STAGE {
  return (obj || new STAGE()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSTAGE(bb:flatbuffers.ByteBuffer, obj?:STAGE):STAGE {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new STAGE()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Stage Number
 */
STAGE_NUMBER():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

/**
 * Engines Used in This Stage
 */
ENGINES(index: number, obj?:ENGINE):ENGINE|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ENGINE()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

enginesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Fuel Type Used in This Stage
 */
FUEL_TYPE():string|null
FUEL_TYPE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
FUEL_TYPE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Thrust Produced by This Stage (in Newtons)
 */
THRUST():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Duration of the Burn (in Seconds)
 */
BURN_DURATION():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startSTAGE(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addStageNumber(builder:flatbuffers.Builder, STAGE_NUMBER:number) {
  builder.addFieldInt32(0, STAGE_NUMBER, 0);
}

static addEngines(builder:flatbuffers.Builder, ENGINESOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, ENGINESOffset, 0);
}

static createEnginesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startEnginesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addFuelType(builder:flatbuffers.Builder, FUEL_TYPEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, FUEL_TYPEOffset, 0);
}

static addThrust(builder:flatbuffers.Builder, THRUST:number) {
  builder.addFieldFloat64(3, THRUST, 0.0);
}

static addBurnDuration(builder:flatbuffers.Builder, BURN_DURATION:number) {
  builder.addFieldFloat64(4, BURN_DURATION, 0.0);
}

static endSTAGE(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSTAGE(builder:flatbuffers.Builder, STAGE_NUMBER:number, ENGINESOffset:flatbuffers.Offset, FUEL_TYPEOffset:flatbuffers.Offset, THRUST:number, BURN_DURATION:number):flatbuffers.Offset {
  STAGE.startSTAGE(builder);
  STAGE.addStageNumber(builder, STAGE_NUMBER);
  STAGE.addEngines(builder, ENGINESOffset);
  STAGE.addFuelType(builder, FUEL_TYPEOffset);
  STAGE.addThrust(builder, THRUST);
  STAGE.addBurnDuration(builder, BURN_DURATION);
  return STAGE.endSTAGE(builder);
}

unpack(): STAGET {
  return new STAGET(
    this.STAGE_NUMBER(),
    this.bb!.createObjList<ENGINE, ENGINET>(this.ENGINES.bind(this), this.enginesLength()),
    this.FUEL_TYPE(),
    this.THRUST(),
    this.BURN_DURATION()
  );
}


unpackTo(_o: STAGET): void {
  _o.STAGE_NUMBER = this.STAGE_NUMBER();
  _o.ENGINES = this.bb!.createObjList<ENGINE, ENGINET>(this.ENGINES.bind(this), this.enginesLength());
  _o.FUEL_TYPE = this.FUEL_TYPE();
  _o.THRUST = this.THRUST();
  _o.BURN_DURATION = this.BURN_DURATION();
}
}

export class STAGET implements flatbuffers.IGeneratedObject {
constructor(
  public STAGE_NUMBER: number = 0,
  public ENGINES: (ENGINET)[] = [],
  public FUEL_TYPE: string|Uint8Array|null = null,
  public THRUST: number = 0.0,
  public BURN_DURATION: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const ENGINES = STAGE.createEnginesVector(builder, builder.createObjectOffsetList(this.ENGINES));
  const FUEL_TYPE = (this.FUEL_TYPE !== null ? builder.createString(this.FUEL_TYPE!) : 0);

  return STAGE.createSTAGE(builder,
    this.STAGE_NUMBER,
    ENGINES,
    FUEL_TYPE,
    this.THRUST,
    this.BURN_DURATION
  );
}
}
