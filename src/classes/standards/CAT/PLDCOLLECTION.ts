// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { PLD, PLDT } from './PLD.js';


export class PLDCOLLECTION implements flatbuffers.IUnpackableObject<PLDCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PLDCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPLDCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:PLDCOLLECTION):PLDCOLLECTION {
  return (obj || new PLDCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPLDCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:PLDCOLLECTION):PLDCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PLDCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:PLD):PLD|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new PLD()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startPLDCOLLECTION(builder:flatbuffers.Builder) {
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

static endPLDCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPLDCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  PLDCOLLECTION.startPLDCOLLECTION(builder);
  PLDCOLLECTION.addRecords(builder, RECORDSOffset);
  return PLDCOLLECTION.endPLDCOLLECTION(builder);
}

unpack(): PLDCOLLECTIONT {
  return new PLDCOLLECTIONT(
    this.bb!.createObjList<PLD, PLDT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: PLDCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<PLD, PLDT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class PLDCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (PLDT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = PLDCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return PLDCOLLECTION.createPLDCOLLECTION(builder,
    RECORDS
  );
}
}
