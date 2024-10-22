// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { IDM, IDMT } from './IDM.js';


/**
 * Collection of IDM records
 */
export class IDMCOLLECTION implements flatbuffers.IUnpackableObject<IDMCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):IDMCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsIDMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:IDMCOLLECTION):IDMCOLLECTION {
  return (obj || new IDMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsIDMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:IDMCOLLECTION):IDMCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new IDMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:IDM):IDM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new IDM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startIDMCOLLECTION(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addRecords(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, RECORDSOffset, 0);
}

static createRecordsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startRecordsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endIDMCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createIDMCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  IDMCOLLECTION.startIDMCOLLECTION(builder);
  IDMCOLLECTION.addRecords(builder, RECORDSOffset);
  return IDMCOLLECTION.endIDMCOLLECTION(builder);
}

unpack(): IDMCOLLECTIONT {
  return new IDMCOLLECTIONT(
    this.bb!.createObjList<IDM, IDMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: IDMCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<IDM, IDMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class IDMCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (IDMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = IDMCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return IDMCOLLECTION.createIDMCOLLECTION(builder,
    RECORDS
  );
}
}
