// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';



export class CryptoKey implements flatbuffers.IUnpackableObject<CryptoKeyT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CryptoKey {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCryptoKey(bb:flatbuffers.ByteBuffer, obj?:CryptoKey):CryptoKey {
  return (obj || new CryptoKey()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCryptoKey(bb:flatbuffers.ByteBuffer, obj?:CryptoKey):CryptoKey {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CryptoKey()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

PUBLIC_KEY():string|null
PUBLIC_KEY(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
PUBLIC_KEY(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

XPUB():string|null
XPUB(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
XPUB(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

PRIVATE_KEY():string|null
PRIVATE_KEY(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
PRIVATE_KEY(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

XPRIV():string|null
XPRIV(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
XPRIV(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

KEY_ADDRESS():string|null
KEY_ADDRESS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
KEY_ADDRESS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

ADDRESS_TYPE():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

static startCryptoKey(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static addPublicKey(builder:flatbuffers.Builder, PUBLIC_KEYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, PUBLIC_KEYOffset, 0);
}

static addXpub(builder:flatbuffers.Builder, XPUBOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, XPUBOffset, 0);
}

static addPrivateKey(builder:flatbuffers.Builder, PRIVATE_KEYOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, PRIVATE_KEYOffset, 0);
}

static addXpriv(builder:flatbuffers.Builder, XPRIVOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, XPRIVOffset, 0);
}

static addKeyAddress(builder:flatbuffers.Builder, KEY_ADDRESSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, KEY_ADDRESSOffset, 0);
}

static addAddressType(builder:flatbuffers.Builder, ADDRESS_TYPE:number) {
  builder.addFieldInt32(5, ADDRESS_TYPE, 0);
}

static endCryptoKey(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCryptoKey(builder:flatbuffers.Builder, PUBLIC_KEYOffset:flatbuffers.Offset, XPUBOffset:flatbuffers.Offset, PRIVATE_KEYOffset:flatbuffers.Offset, XPRIVOffset:flatbuffers.Offset, KEY_ADDRESSOffset:flatbuffers.Offset, ADDRESS_TYPE:number):flatbuffers.Offset {
  CryptoKey.startCryptoKey(builder);
  CryptoKey.addPublicKey(builder, PUBLIC_KEYOffset);
  CryptoKey.addXpub(builder, XPUBOffset);
  CryptoKey.addPrivateKey(builder, PRIVATE_KEYOffset);
  CryptoKey.addXpriv(builder, XPRIVOffset);
  CryptoKey.addKeyAddress(builder, KEY_ADDRESSOffset);
  CryptoKey.addAddressType(builder, ADDRESS_TYPE);
  return CryptoKey.endCryptoKey(builder);
}

unpack(): CryptoKeyT {
  return new CryptoKeyT(
    this.PUBLIC_KEY(),
    this.XPUB(),
    this.PRIVATE_KEY(),
    this.XPRIV(),
    this.KEY_ADDRESS(),
    this.ADDRESS_TYPE()
  );
}


unpackTo(_o: CryptoKeyT): void {
  _o.PUBLIC_KEY = this.PUBLIC_KEY();
  _o.XPUB = this.XPUB();
  _o.PRIVATE_KEY = this.PRIVATE_KEY();
  _o.XPRIV = this.XPRIV();
  _o.KEY_ADDRESS = this.KEY_ADDRESS();
  _o.ADDRESS_TYPE = this.ADDRESS_TYPE();
}
}

export class CryptoKeyT implements flatbuffers.IGeneratedObject {
constructor(
  public PUBLIC_KEY: string|Uint8Array|null = null,
  public XPUB: string|Uint8Array|null = null,
  public PRIVATE_KEY: string|Uint8Array|null = null,
  public XPRIV: string|Uint8Array|null = null,
  public KEY_ADDRESS: string|Uint8Array|null = null,
  public ADDRESS_TYPE: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const PUBLIC_KEY = (this.PUBLIC_KEY !== null ? builder.createString(this.PUBLIC_KEY!) : 0);
  const XPUB = (this.XPUB !== null ? builder.createString(this.XPUB!) : 0);
  const PRIVATE_KEY = (this.PRIVATE_KEY !== null ? builder.createString(this.PRIVATE_KEY!) : 0);
  const XPRIV = (this.XPRIV !== null ? builder.createString(this.XPRIV!) : 0);
  const KEY_ADDRESS = (this.KEY_ADDRESS !== null ? builder.createString(this.KEY_ADDRESS!) : 0);

  return CryptoKey.createCryptoKey(builder,
    PUBLIC_KEY,
    XPUB,
    PRIVATE_KEY,
    XPRIV,
    KEY_ADDRESS,
    this.ADDRESS_TYPE
  );
}
}
