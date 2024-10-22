// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { OMM, OMMT } from './OMM.js';


export class OMMCOLLECTION implements flatbuffers.IUnpackableObject<OMMCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):OMMCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOMMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:OMMCOLLECTION):OMMCOLLECTION {
  return (obj || new OMMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOMMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:OMMCOLLECTION):OMMCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new OMMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Array of OMM records
 */
RECORDS(index: number, obj?:OMM):OMM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new OMM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startOMMCOLLECTION(builder:flatbuffers.Builder) {
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

static endOMMCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createOMMCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  OMMCOLLECTION.startOMMCOLLECTION(builder);
  OMMCOLLECTION.addRecords(builder, RECORDSOffset);
  return OMMCOLLECTION.endOMMCOLLECTION(builder);
}

unpack(): OMMCOLLECTIONT {
  return new OMMCOLLECTIONT(
    this.bb!.createObjList<OMM, OMMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: OMMCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<OMM, OMMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class OMMCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (OMMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = OMMCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return OMMCOLLECTION.createOMMCOLLECTION(builder,
    RECORDS
  );
}
}
