// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TDM, TDMT } from './TDM.js';


/**
 * Collection of TDM records
 */
export class TDMCOLLECTION implements flatbuffers.IUnpackableObject<TDMCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TDMCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTDMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:TDMCOLLECTION):TDMCOLLECTION {
  return (obj || new TDMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTDMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:TDMCOLLECTION):TDMCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TDMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:TDM):TDM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TDM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startTDMCOLLECTION(builder:flatbuffers.Builder) {
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

static endTDMCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTDMCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  TDMCOLLECTION.startTDMCOLLECTION(builder);
  TDMCOLLECTION.addRecords(builder, RECORDSOffset);
  return TDMCOLLECTION.endTDMCOLLECTION(builder);
}

unpack(): TDMCOLLECTIONT {
  return new TDMCOLLECTIONT(
    this.bb!.createObjList<TDM, TDMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: TDMCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<TDM, TDMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class TDMCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (TDMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = TDMCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return TDMCOLLECTION.createTDMCOLLECTION(builder,
    RECORDS
  );
}
}