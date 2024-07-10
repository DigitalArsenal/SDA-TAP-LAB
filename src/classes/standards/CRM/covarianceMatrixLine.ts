// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { manCovRefFrame } from './manCovRefFrame.js';


/**
 * Position/Velocity Covariance Matrix Line
 */
export class covarianceMatrixLine implements flatbuffers.IUnpackableObject<covarianceMatrixLineT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):covarianceMatrixLine {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAscovarianceMatrixLine(bb:flatbuffers.ByteBuffer, obj?:covarianceMatrixLine):covarianceMatrixLine {
  return (obj || new covarianceMatrixLine()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAscovarianceMatrixLine(bb:flatbuffers.ByteBuffer, obj?:covarianceMatrixLine):covarianceMatrixLine {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new covarianceMatrixLine()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * Epoch
 */
EPOCH():string|null
EPOCH(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
EPOCH(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Reference frame for the covariance matrix
 */
COV_REF_FRAME():manCovRefFrame {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : manCovRefFrame.RSW;
}

/**
 * Covariance matrix [1,1] km**2
 */
CX_X():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [2,1] km**2
 */
CY_X():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [2,2] km**2
 */
CY_Y():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [3,1] km**2
 */
CZ_X():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [3,2] km**2
 */
CZ_Y():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [3,3] km**2
 */
CZ_Z():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [4,1] km**2/s
 */
CX_DOT_X():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [4,2] km**2/s
 */
CX_DOT_Y():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [4,3] km**2/s
 */
CX_DOT_Z():number {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [4,4] km**2/s**2
 */
CX_DOT_X_DOT():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [5,1] km**2/s
 */
CY_DOT_X():number {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [5,2] km**2/s
 */
CY_DOT_Y():number {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [5,3] km**2/s
 */
CY_DOT_Z():number {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [5,4] km**2/s**2
 */
CY_DOT_X_DOT():number {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [5,5] km**2/s**2
 */
CY_DOT_Y_DOT():number {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [6,1] km**2/s
 */
CZ_DOT_X():number {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [6,2] km**2/s
 */
CZ_DOT_Y():number {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [6,3] km**2/s
 */
CZ_DOT_Z():number {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [6,4] km**2/s**2
 */
CZ_DOT_X_DOT():number {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [6,5] km**2/s**2
 */
CZ_DOT_Y_DOT():number {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

/**
 * Covariance matrix [6,6] km**2/s**2
 */
CZ_DOT_Z_DOT():number {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
}

static startcovarianceMatrixLine(builder:flatbuffers.Builder) {
  builder.startObject(23);
}

static addEpoch(builder:flatbuffers.Builder, EPOCHOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, EPOCHOffset, 0);
}

static addCovRefFrame(builder:flatbuffers.Builder, COV_REF_FRAME:manCovRefFrame) {
  builder.addFieldInt8(1, COV_REF_FRAME, manCovRefFrame.RSW);
}

static addCxX(builder:flatbuffers.Builder, CX_X:number) {
  builder.addFieldFloat64(2, CX_X, 0.0);
}

static addCyX(builder:flatbuffers.Builder, CY_X:number) {
  builder.addFieldFloat64(3, CY_X, 0.0);
}

static addCyY(builder:flatbuffers.Builder, CY_Y:number) {
  builder.addFieldFloat64(4, CY_Y, 0.0);
}

static addCzX(builder:flatbuffers.Builder, CZ_X:number) {
  builder.addFieldFloat64(5, CZ_X, 0.0);
}

static addCzY(builder:flatbuffers.Builder, CZ_Y:number) {
  builder.addFieldFloat64(6, CZ_Y, 0.0);
}

static addCzZ(builder:flatbuffers.Builder, CZ_Z:number) {
  builder.addFieldFloat64(7, CZ_Z, 0.0);
}

static addCxDotX(builder:flatbuffers.Builder, CX_DOT_X:number) {
  builder.addFieldFloat64(8, CX_DOT_X, 0.0);
}

static addCxDotY(builder:flatbuffers.Builder, CX_DOT_Y:number) {
  builder.addFieldFloat64(9, CX_DOT_Y, 0.0);
}

static addCxDotZ(builder:flatbuffers.Builder, CX_DOT_Z:number) {
  builder.addFieldFloat64(10, CX_DOT_Z, 0.0);
}

static addCxDotXDot(builder:flatbuffers.Builder, CX_DOT_X_DOT:number) {
  builder.addFieldFloat64(11, CX_DOT_X_DOT, 0.0);
}

static addCyDotX(builder:flatbuffers.Builder, CY_DOT_X:number) {
  builder.addFieldFloat64(12, CY_DOT_X, 0.0);
}

static addCyDotY(builder:flatbuffers.Builder, CY_DOT_Y:number) {
  builder.addFieldFloat64(13, CY_DOT_Y, 0.0);
}

static addCyDotZ(builder:flatbuffers.Builder, CY_DOT_Z:number) {
  builder.addFieldFloat64(14, CY_DOT_Z, 0.0);
}

static addCyDotXDot(builder:flatbuffers.Builder, CY_DOT_X_DOT:number) {
  builder.addFieldFloat64(15, CY_DOT_X_DOT, 0.0);
}

static addCyDotYDot(builder:flatbuffers.Builder, CY_DOT_Y_DOT:number) {
  builder.addFieldFloat64(16, CY_DOT_Y_DOT, 0.0);
}

static addCzDotX(builder:flatbuffers.Builder, CZ_DOT_X:number) {
  builder.addFieldFloat64(17, CZ_DOT_X, 0.0);
}

static addCzDotY(builder:flatbuffers.Builder, CZ_DOT_Y:number) {
  builder.addFieldFloat64(18, CZ_DOT_Y, 0.0);
}

static addCzDotZ(builder:flatbuffers.Builder, CZ_DOT_Z:number) {
  builder.addFieldFloat64(19, CZ_DOT_Z, 0.0);
}

static addCzDotXDot(builder:flatbuffers.Builder, CZ_DOT_X_DOT:number) {
  builder.addFieldFloat64(20, CZ_DOT_X_DOT, 0.0);
}

static addCzDotYDot(builder:flatbuffers.Builder, CZ_DOT_Y_DOT:number) {
  builder.addFieldFloat64(21, CZ_DOT_Y_DOT, 0.0);
}

static addCzDotZDot(builder:flatbuffers.Builder, CZ_DOT_Z_DOT:number) {
  builder.addFieldFloat64(22, CZ_DOT_Z_DOT, 0.0);
}

static endcovarianceMatrixLine(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createcovarianceMatrixLine(builder:flatbuffers.Builder, EPOCHOffset:flatbuffers.Offset, COV_REF_FRAME:manCovRefFrame, CX_X:number, CY_X:number, CY_Y:number, CZ_X:number, CZ_Y:number, CZ_Z:number, CX_DOT_X:number, CX_DOT_Y:number, CX_DOT_Z:number, CX_DOT_X_DOT:number, CY_DOT_X:number, CY_DOT_Y:number, CY_DOT_Z:number, CY_DOT_X_DOT:number, CY_DOT_Y_DOT:number, CZ_DOT_X:number, CZ_DOT_Y:number, CZ_DOT_Z:number, CZ_DOT_X_DOT:number, CZ_DOT_Y_DOT:number, CZ_DOT_Z_DOT:number):flatbuffers.Offset {
  covarianceMatrixLine.startcovarianceMatrixLine(builder);
  covarianceMatrixLine.addEpoch(builder, EPOCHOffset);
  covarianceMatrixLine.addCovRefFrame(builder, COV_REF_FRAME);
  covarianceMatrixLine.addCxX(builder, CX_X);
  covarianceMatrixLine.addCyX(builder, CY_X);
  covarianceMatrixLine.addCyY(builder, CY_Y);
  covarianceMatrixLine.addCzX(builder, CZ_X);
  covarianceMatrixLine.addCzY(builder, CZ_Y);
  covarianceMatrixLine.addCzZ(builder, CZ_Z);
  covarianceMatrixLine.addCxDotX(builder, CX_DOT_X);
  covarianceMatrixLine.addCxDotY(builder, CX_DOT_Y);
  covarianceMatrixLine.addCxDotZ(builder, CX_DOT_Z);
  covarianceMatrixLine.addCxDotXDot(builder, CX_DOT_X_DOT);
  covarianceMatrixLine.addCyDotX(builder, CY_DOT_X);
  covarianceMatrixLine.addCyDotY(builder, CY_DOT_Y);
  covarianceMatrixLine.addCyDotZ(builder, CY_DOT_Z);
  covarianceMatrixLine.addCyDotXDot(builder, CY_DOT_X_DOT);
  covarianceMatrixLine.addCyDotYDot(builder, CY_DOT_Y_DOT);
  covarianceMatrixLine.addCzDotX(builder, CZ_DOT_X);
  covarianceMatrixLine.addCzDotY(builder, CZ_DOT_Y);
  covarianceMatrixLine.addCzDotZ(builder, CZ_DOT_Z);
  covarianceMatrixLine.addCzDotXDot(builder, CZ_DOT_X_DOT);
  covarianceMatrixLine.addCzDotYDot(builder, CZ_DOT_Y_DOT);
  covarianceMatrixLine.addCzDotZDot(builder, CZ_DOT_Z_DOT);
  return covarianceMatrixLine.endcovarianceMatrixLine(builder);
}

unpack(): covarianceMatrixLineT {
  return new covarianceMatrixLineT(
    this.EPOCH(),
    this.COV_REF_FRAME(),
    this.CX_X(),
    this.CY_X(),
    this.CY_Y(),
    this.CZ_X(),
    this.CZ_Y(),
    this.CZ_Z(),
    this.CX_DOT_X(),
    this.CX_DOT_Y(),
    this.CX_DOT_Z(),
    this.CX_DOT_X_DOT(),
    this.CY_DOT_X(),
    this.CY_DOT_Y(),
    this.CY_DOT_Z(),
    this.CY_DOT_X_DOT(),
    this.CY_DOT_Y_DOT(),
    this.CZ_DOT_X(),
    this.CZ_DOT_Y(),
    this.CZ_DOT_Z(),
    this.CZ_DOT_X_DOT(),
    this.CZ_DOT_Y_DOT(),
    this.CZ_DOT_Z_DOT()
  );
}


unpackTo(_o: covarianceMatrixLineT): void {
  _o.EPOCH = this.EPOCH();
  _o.COV_REF_FRAME = this.COV_REF_FRAME();
  _o.CX_X = this.CX_X();
  _o.CY_X = this.CY_X();
  _o.CY_Y = this.CY_Y();
  _o.CZ_X = this.CZ_X();
  _o.CZ_Y = this.CZ_Y();
  _o.CZ_Z = this.CZ_Z();
  _o.CX_DOT_X = this.CX_DOT_X();
  _o.CX_DOT_Y = this.CX_DOT_Y();
  _o.CX_DOT_Z = this.CX_DOT_Z();
  _o.CX_DOT_X_DOT = this.CX_DOT_X_DOT();
  _o.CY_DOT_X = this.CY_DOT_X();
  _o.CY_DOT_Y = this.CY_DOT_Y();
  _o.CY_DOT_Z = this.CY_DOT_Z();
  _o.CY_DOT_X_DOT = this.CY_DOT_X_DOT();
  _o.CY_DOT_Y_DOT = this.CY_DOT_Y_DOT();
  _o.CZ_DOT_X = this.CZ_DOT_X();
  _o.CZ_DOT_Y = this.CZ_DOT_Y();
  _o.CZ_DOT_Z = this.CZ_DOT_Z();
  _o.CZ_DOT_X_DOT = this.CZ_DOT_X_DOT();
  _o.CZ_DOT_Y_DOT = this.CZ_DOT_Y_DOT();
  _o.CZ_DOT_Z_DOT = this.CZ_DOT_Z_DOT();
}
}

export class covarianceMatrixLineT implements flatbuffers.IGeneratedObject {
constructor(
  public EPOCH: string|Uint8Array|null = null,
  public COV_REF_FRAME: manCovRefFrame = manCovRefFrame.RSW,
  public CX_X: number = 0.0,
  public CY_X: number = 0.0,
  public CY_Y: number = 0.0,
  public CZ_X: number = 0.0,
  public CZ_Y: number = 0.0,
  public CZ_Z: number = 0.0,
  public CX_DOT_X: number = 0.0,
  public CX_DOT_Y: number = 0.0,
  public CX_DOT_Z: number = 0.0,
  public CX_DOT_X_DOT: number = 0.0,
  public CY_DOT_X: number = 0.0,
  public CY_DOT_Y: number = 0.0,
  public CY_DOT_Z: number = 0.0,
  public CY_DOT_X_DOT: number = 0.0,
  public CY_DOT_Y_DOT: number = 0.0,
  public CZ_DOT_X: number = 0.0,
  public CZ_DOT_Y: number = 0.0,
  public CZ_DOT_Z: number = 0.0,
  public CZ_DOT_X_DOT: number = 0.0,
  public CZ_DOT_Y_DOT: number = 0.0,
  public CZ_DOT_Z_DOT: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const EPOCH = (this.EPOCH !== null ? builder.createString(this.EPOCH!) : 0);

  return covarianceMatrixLine.createcovarianceMatrixLine(builder,
    EPOCH,
    this.COV_REF_FRAME,
    this.CX_X,
    this.CY_X,
    this.CY_Y,
    this.CZ_X,
    this.CZ_Y,
    this.CZ_Z,
    this.CX_DOT_X,
    this.CX_DOT_Y,
    this.CX_DOT_Z,
    this.CX_DOT_X_DOT,
    this.CY_DOT_X,
    this.CY_DOT_Y,
    this.CY_DOT_Z,
    this.CY_DOT_X_DOT,
    this.CY_DOT_Y_DOT,
    this.CZ_DOT_X,
    this.CZ_DOT_Y,
    this.CZ_DOT_Z,
    this.CZ_DOT_X_DOT,
    this.CZ_DOT_Y_DOT,
    this.CZ_DOT_Z_DOT
  );
}
}