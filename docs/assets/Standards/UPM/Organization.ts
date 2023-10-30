// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class Organization implements flatbuffers.IUnpackableObject<OrganizationT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Organization {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOrganization(bb:flatbuffers.ByteBuffer, obj?:Organization):Organization {
  return (obj || new Organization()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOrganization(bb:flatbuffers.ByteBuffer, obj?:Organization):Organization {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Organization()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

NAME():string|null
NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

LEGAL_NAME():string|null
LEGAL_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
LEGAL_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startOrganization(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addName(builder:flatbuffers.Builder, NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, NAMEOffset, 0);
}

static addLegalName(builder:flatbuffers.Builder, LEGAL_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, LEGAL_NAMEOffset, 0);
}

static endOrganization(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createOrganization(builder:flatbuffers.Builder, NAMEOffset:flatbuffers.Offset, LEGAL_NAMEOffset:flatbuffers.Offset):flatbuffers.Offset {
  Organization.startOrganization(builder);
  Organization.addName(builder, NAMEOffset);
  Organization.addLegalName(builder, LEGAL_NAMEOffset);
  return Organization.endOrganization(builder);
}

unpack(): OrganizationT {
  return new OrganizationT(
    this.NAME(),
    this.LEGAL_NAME()
  );
}


unpackTo(_o: OrganizationT): void {
  _o.NAME = this.NAME();
  _o.LEGAL_NAME = this.LEGAL_NAME();
}
}

export class OrganizationT implements flatbuffers.IGeneratedObject {
constructor(
  public NAME: string|Uint8Array|null = null,
  public LEGAL_NAME: string|Uint8Array|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const NAME = (this.NAME !== null ? builder.createString(this.NAME!) : 0);
  const LEGAL_NAME = (this.LEGAL_NAME !== null ? builder.createString(this.LEGAL_NAME!) : 0);

  return Organization.createOrganization(builder,
    NAME,
    LEGAL_NAME
  );
}
}
