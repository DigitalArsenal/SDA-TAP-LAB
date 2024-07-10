// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { IDM, IDMT } from './IDM.js';


/**
 * Payload Information
 */
export class PLD implements flatbuffers.IUnpackableObject<PLDT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PLD {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPLD(bb:flatbuffers.ByteBuffer, obj?:PLD):PLD {
  return (obj || new PLD()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPLD(bb:flatbuffers.ByteBuffer, obj?:PLD):PLD {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PLD()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$PLD');
}

PAYLOAD_DURATION():string|null
PAYLOAD_DURATION(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
PAYLOAD_DURATION(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

MASS_AT_LAUNCH():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

DIMENSIONS():string|null
DIMENSIONS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
DIMENSIONS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

SOLAR_ARRAY_AREA():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

SOLAR_ARRAY_DIMENSIONS():string|null
SOLAR_ARRAY_DIMENSIONS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
SOLAR_ARRAY_DIMENSIONS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

NOMINAL_OPERATIONAL_LIFETIME():string|null
NOMINAL_OPERATIONAL_LIFETIME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NOMINAL_OPERATIONAL_LIFETIME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

INSTRUMENTS(index: number, obj?:IDM):IDM|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new IDM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

instrumentsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startPLD(builder:flatbuffers.Builder) {
  builder.startObject(7);
}

static addPayloadDuration(builder:flatbuffers.Builder, PAYLOAD_DURATIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, PAYLOAD_DURATIONOffset, 0);
}

static addMassAtLaunch(builder:flatbuffers.Builder, MASS_AT_LAUNCH:number) {
  builder.addFieldFloat32(1, MASS_AT_LAUNCH, 0.0);
}

static addDimensions(builder:flatbuffers.Builder, DIMENSIONSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, DIMENSIONSOffset, 0);
}

static addSolarArrayArea(builder:flatbuffers.Builder, SOLAR_ARRAY_AREA:number) {
  builder.addFieldFloat32(3, SOLAR_ARRAY_AREA, 0.0);
}

static addSolarArrayDimensions(builder:flatbuffers.Builder, SOLAR_ARRAY_DIMENSIONSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, SOLAR_ARRAY_DIMENSIONSOffset, 0);
}

static addNominalOperationalLifetime(builder:flatbuffers.Builder, NOMINAL_OPERATIONAL_LIFETIMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, NOMINAL_OPERATIONAL_LIFETIMEOffset, 0);
}

static addInstruments(builder:flatbuffers.Builder, INSTRUMENTSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, INSTRUMENTSOffset, 0);
}

static createInstrumentsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startInstrumentsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endPLD(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishPLDBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$PLD');
}

static finishSizePrefixedPLDBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$PLD', true);
}

static createPLD(builder:flatbuffers.Builder, PAYLOAD_DURATIONOffset:flatbuffers.Offset, MASS_AT_LAUNCH:number, DIMENSIONSOffset:flatbuffers.Offset, SOLAR_ARRAY_AREA:number, SOLAR_ARRAY_DIMENSIONSOffset:flatbuffers.Offset, NOMINAL_OPERATIONAL_LIFETIMEOffset:flatbuffers.Offset, INSTRUMENTSOffset:flatbuffers.Offset):flatbuffers.Offset {
  PLD.startPLD(builder);
  PLD.addPayloadDuration(builder, PAYLOAD_DURATIONOffset);
  PLD.addMassAtLaunch(builder, MASS_AT_LAUNCH);
  PLD.addDimensions(builder, DIMENSIONSOffset);
  PLD.addSolarArrayArea(builder, SOLAR_ARRAY_AREA);
  PLD.addSolarArrayDimensions(builder, SOLAR_ARRAY_DIMENSIONSOffset);
  PLD.addNominalOperationalLifetime(builder, NOMINAL_OPERATIONAL_LIFETIMEOffset);
  PLD.addInstruments(builder, INSTRUMENTSOffset);
  return PLD.endPLD(builder);
}

unpack(): PLDT {
  return new PLDT(
    this.PAYLOAD_DURATION(),
    this.MASS_AT_LAUNCH(),
    this.DIMENSIONS(),
    this.SOLAR_ARRAY_AREA(),
    this.SOLAR_ARRAY_DIMENSIONS(),
    this.NOMINAL_OPERATIONAL_LIFETIME(),
    this.bb!.createObjList<IDM, IDMT>(this.INSTRUMENTS.bind(this), this.instrumentsLength())
  );
}


unpackTo(_o: PLDT): void {
  _o.PAYLOAD_DURATION = this.PAYLOAD_DURATION();
  _o.MASS_AT_LAUNCH = this.MASS_AT_LAUNCH();
  _o.DIMENSIONS = this.DIMENSIONS();
  _o.SOLAR_ARRAY_AREA = this.SOLAR_ARRAY_AREA();
  _o.SOLAR_ARRAY_DIMENSIONS = this.SOLAR_ARRAY_DIMENSIONS();
  _o.NOMINAL_OPERATIONAL_LIFETIME = this.NOMINAL_OPERATIONAL_LIFETIME();
  _o.INSTRUMENTS = this.bb!.createObjList<IDM, IDMT>(this.INSTRUMENTS.bind(this), this.instrumentsLength());
}
}

export class PLDT implements flatbuffers.IGeneratedObject {
constructor(
  public PAYLOAD_DURATION: string|Uint8Array|null = null,
  public MASS_AT_LAUNCH: number = 0.0,
  public DIMENSIONS: string|Uint8Array|null = null,
  public SOLAR_ARRAY_AREA: number = 0.0,
  public SOLAR_ARRAY_DIMENSIONS: string|Uint8Array|null = null,
  public NOMINAL_OPERATIONAL_LIFETIME: string|Uint8Array|null = null,
  public INSTRUMENTS: (IDMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const PAYLOAD_DURATION = (this.PAYLOAD_DURATION !== null ? builder.createString(this.PAYLOAD_DURATION!) : 0);
  const DIMENSIONS = (this.DIMENSIONS !== null ? builder.createString(this.DIMENSIONS!) : 0);
  const SOLAR_ARRAY_DIMENSIONS = (this.SOLAR_ARRAY_DIMENSIONS !== null ? builder.createString(this.SOLAR_ARRAY_DIMENSIONS!) : 0);
  const NOMINAL_OPERATIONAL_LIFETIME = (this.NOMINAL_OPERATIONAL_LIFETIME !== null ? builder.createString(this.NOMINAL_OPERATIONAL_LIFETIME!) : 0);
  const INSTRUMENTS = PLD.createInstrumentsVector(builder, builder.createObjectOffsetList(this.INSTRUMENTS));

  return PLD.createPLD(builder,
    PAYLOAD_DURATION,
    this.MASS_AT_LAUNCH,
    DIMENSIONS,
    this.SOLAR_ARRAY_AREA,
    SOLAR_ARRAY_DIMENSIONS,
    NOMINAL_OPERATIONAL_LIFETIME,
    INSTRUMENTS
  );
}
}
