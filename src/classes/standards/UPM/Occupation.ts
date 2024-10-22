// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';



export class Occupation implements flatbuffers.IUnpackableObject<OccupationT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Occupation {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOccupation(bb:flatbuffers.ByteBuffer, obj?:Occupation):Occupation {
  return (obj || new Occupation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOccupation(bb:flatbuffers.ByteBuffer, obj?:Occupation):Occupation {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Occupation()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

NAME():string|null
NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startOccupation(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addName(builder:flatbuffers.Builder, NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, NAMEOffset, 0);
}

static endOccupation(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createOccupation(builder:flatbuffers.Builder, NAMEOffset:flatbuffers.Offset):flatbuffers.Offset {
  Occupation.startOccupation(builder);
  Occupation.addName(builder, NAMEOffset);
  return Occupation.endOccupation(builder);
}

unpack(): OccupationT {
  return new OccupationT(
    this.NAME()
  );
}


unpackTo(_o: OccupationT): void {
  _o.NAME = this.NAME();
}
}

export class OccupationT implements flatbuffers.IGeneratedObject {
constructor(
  public NAME: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const NAME = (this.NAME !== null ? builder.createString(this.NAME!) : 0);

  return Occupation.createOccupation(builder,
    NAME
  );
}
}
