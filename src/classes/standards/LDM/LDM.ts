// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { BOV, BOVT } from './BOV.js';
import { CAT, CATT } from './CAT.js';
import { ROC, ROCT } from './ROC.js';
import { SIT, SITT } from './SIT.js';
import { UPM, UPMT } from './UPM.js';


/**
 * Launch Data Message
 */
export class LDM implements flatbuffers.IUnpackableObject<LDMT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):LDM {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsLDM(bb:flatbuffers.ByteBuffer, obj?:LDM):LDM {
  return (obj || new LDM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsLDM(bb:flatbuffers.ByteBuffer, obj?:LDM):LDM {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LDM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$LDM');
}

/**
 * Launch Site Information
 */
SITE(obj?:SIT):SIT|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new SIT()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * Azimuth at Launch (in Degrees)
 */
AZIMUTH():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

/**
 * References for Launch Data
 */
REFERENCES():string|null
REFERENCES(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
REFERENCES(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Launching Agency Name
 */
AGENCY_NAME():string|null
AGENCY_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
AGENCY_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Points of Contact for Launch
 */
POINTS_OF_CONTACT(index: number, obj?:UPM):UPM|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? (obj || new UPM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

pointsOfContactLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Operations Points of Contact for Launch
 */
OPERATIONS_POINTS_OF_CONTACT(index: number, obj?:UPM):UPM|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? (obj || new UPM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

operationsPointsOfContactLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Net Launch Time (UTC Format)
 */
NET():string|null
NET(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
NET(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Rocket Configuration Details
 */
ROCKET_CONFIGURATION(obj?:ROC):ROC|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new ROC()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

/**
 * Mission Name
 */
MISSION_NAME():string|null
MISSION_NAME(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
MISSION_NAME(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Description of the Mission
 */
MISSION_DESCRIPTION():string|null
MISSION_DESCRIPTION(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
MISSION_DESCRIPTION(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Type of the Mission (e.g., Test Flight, Satellite Deployment)
 */
MISSION_TYPE():string|null
MISSION_TYPE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
MISSION_TYPE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Target Orbit Type (e.g., LEO, GEO)
 */
ORBIT_TYPE():string|null
ORBIT_TYPE(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
ORBIT_TYPE(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Weather and Environmental Conditions at Launch
 */
WEATHER_CONDITIONS():string|null
WEATHER_CONDITIONS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
WEATHER_CONDITIONS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Launch Outcome and Status (e.g., Successful, Failed)
 */
LAUNCH_STATUS():string|null
LAUNCH_STATUS(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
LAUNCH_STATUS(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Webcast URL for the Launch
 */
WEBCAST_URL():string|null
WEBCAST_URL(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
WEBCAST_URL(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Media Links Related to the Launch
 */
MEDIA_LINKS(index: number):string
MEDIA_LINKS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
MEDIA_LINKS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

mediaLinksLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Earliest Possible Launch Times
 */
EARLIEST_LAUNCH_TIMES(index: number):string
EARLIEST_LAUNCH_TIMES(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
EARLIEST_LAUNCH_TIMES(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

earliestLaunchTimesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Latest Possible Launch Times
 */
LATEST_LAUNCH_TIMES(index: number):string
LATEST_LAUNCH_TIMES(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
LATEST_LAUNCH_TIMES(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

latestLaunchTimesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Launch Collision Avoidance Information
 */
LCOLA_WINDOW_CLOSURES(index: number):string
LCOLA_WINDOW_CLOSURES(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
LCOLA_WINDOW_CLOSURES(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

lcolaWindowClosuresLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Payload Information (Catalog Entities)
 */
OBJECTS(index: number, obj?:CAT):CAT|null {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? (obj || new CAT()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

objectsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Tracking and Collision Avoidance Requirements
 */
TRACKING_REQUIREMENTS(index: number):string
TRACKING_REQUIREMENTS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
TRACKING_REQUIREMENTS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

trackingRequirementsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Duration of Collision Avoidance Screen (in Seconds)
 */
COLA_SCREEN_DURATION():string|null
COLA_SCREEN_DURATION(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
COLA_SCREEN_DURATION(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Probability of Collision Threshold (Percentage)
 */
PROBABILITY_OF_COLLISION_THRESHOLD():string|null
PROBABILITY_OF_COLLISION_THRESHOLD(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
PROBABILITY_OF_COLLISION_THRESHOLD(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Number of Required Collision Avoidance Runs
 */
COLA_RUNS_REQUIRED():string|null
COLA_RUNS_REQUIRED(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
COLA_RUNS_REQUIRED(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Points of Contact for Collision Avoidance
 */
COLA_POINTS_OF_CONTACT(index: number, obj?:UPM):UPM|null {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? (obj || new UPM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

colaPointsOfContactLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Orbital Parameters of the Launch
 */
ORBITAL_PARAMETERS(index: number):string
ORBITAL_PARAMETERS(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
ORBITAL_PARAMETERS(index: number,optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
}

orbitalParametersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * Burn Out Vectors for the Launch
 */
BURN_OUT_VECTORS(index: number, obj?:BOV):BOV|null {
  const offset = this.bb!.__offset(this.bb_pos, 56);
  return offset ? (obj || new BOV()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

burnOutVectorsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 56);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startLDM(builder:flatbuffers.Builder) {
  builder.startObject(27);
}

static addSite(builder:flatbuffers.Builder, SITEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, SITEOffset, 0);
}

static addAzimuth(builder:flatbuffers.Builder, AZIMUTH:number) {
  builder.addFieldFloat32(1, AZIMUTH, 0.0);
}

static addReferences(builder:flatbuffers.Builder, REFERENCESOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, REFERENCESOffset, 0);
}

static addAgencyName(builder:flatbuffers.Builder, AGENCY_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, AGENCY_NAMEOffset, 0);
}

static addPointsOfContact(builder:flatbuffers.Builder, POINTS_OF_CONTACTOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, POINTS_OF_CONTACTOffset, 0);
}

static createPointsOfContactVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startPointsOfContactVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addOperationsPointsOfContact(builder:flatbuffers.Builder, OPERATIONS_POINTS_OF_CONTACTOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, OPERATIONS_POINTS_OF_CONTACTOffset, 0);
}

static createOperationsPointsOfContactVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startOperationsPointsOfContactVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addNet(builder:flatbuffers.Builder, NETOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, NETOffset, 0);
}

static addRocketConfiguration(builder:flatbuffers.Builder, ROCKET_CONFIGURATIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, ROCKET_CONFIGURATIONOffset, 0);
}

static addMissionName(builder:flatbuffers.Builder, MISSION_NAMEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, MISSION_NAMEOffset, 0);
}

static addMissionDescription(builder:flatbuffers.Builder, MISSION_DESCRIPTIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, MISSION_DESCRIPTIONOffset, 0);
}

static addMissionType(builder:flatbuffers.Builder, MISSION_TYPEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, MISSION_TYPEOffset, 0);
}

static addOrbitType(builder:flatbuffers.Builder, ORBIT_TYPEOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, ORBIT_TYPEOffset, 0);
}

static addWeatherConditions(builder:flatbuffers.Builder, WEATHER_CONDITIONSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, WEATHER_CONDITIONSOffset, 0);
}

static addLaunchStatus(builder:flatbuffers.Builder, LAUNCH_STATUSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, LAUNCH_STATUSOffset, 0);
}

static addWebcastUrl(builder:flatbuffers.Builder, WEBCAST_URLOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, WEBCAST_URLOffset, 0);
}

static addMediaLinks(builder:flatbuffers.Builder, MEDIA_LINKSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, MEDIA_LINKSOffset, 0);
}

static createMediaLinksVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startMediaLinksVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addEarliestLaunchTimes(builder:flatbuffers.Builder, EARLIEST_LAUNCH_TIMESOffset:flatbuffers.Offset) {
  builder.addFieldOffset(16, EARLIEST_LAUNCH_TIMESOffset, 0);
}

static createEarliestLaunchTimesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startEarliestLaunchTimesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addLatestLaunchTimes(builder:flatbuffers.Builder, LATEST_LAUNCH_TIMESOffset:flatbuffers.Offset) {
  builder.addFieldOffset(17, LATEST_LAUNCH_TIMESOffset, 0);
}

static createLatestLaunchTimesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startLatestLaunchTimesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addLcolaWindowClosures(builder:flatbuffers.Builder, LCOLA_WINDOW_CLOSURESOffset:flatbuffers.Offset) {
  builder.addFieldOffset(18, LCOLA_WINDOW_CLOSURESOffset, 0);
}

static createLcolaWindowClosuresVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startLcolaWindowClosuresVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addObjects(builder:flatbuffers.Builder, OBJECTSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(19, OBJECTSOffset, 0);
}

static createObjectsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startObjectsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addTrackingRequirements(builder:flatbuffers.Builder, TRACKING_REQUIREMENTSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(20, TRACKING_REQUIREMENTSOffset, 0);
}

static createTrackingRequirementsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTrackingRequirementsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addColaScreenDuration(builder:flatbuffers.Builder, COLA_SCREEN_DURATIONOffset:flatbuffers.Offset) {
  builder.addFieldOffset(21, COLA_SCREEN_DURATIONOffset, 0);
}

static addProbabilityOfCollisionThreshold(builder:flatbuffers.Builder, PROBABILITY_OF_COLLISION_THRESHOLDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(22, PROBABILITY_OF_COLLISION_THRESHOLDOffset, 0);
}

static addColaRunsRequired(builder:flatbuffers.Builder, COLA_RUNS_REQUIREDOffset:flatbuffers.Offset) {
  builder.addFieldOffset(23, COLA_RUNS_REQUIREDOffset, 0);
}

static addColaPointsOfContact(builder:flatbuffers.Builder, COLA_POINTS_OF_CONTACTOffset:flatbuffers.Offset) {
  builder.addFieldOffset(24, COLA_POINTS_OF_CONTACTOffset, 0);
}

static createColaPointsOfContactVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startColaPointsOfContactVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addOrbitalParameters(builder:flatbuffers.Builder, ORBITAL_PARAMETERSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(25, ORBITAL_PARAMETERSOffset, 0);
}

static createOrbitalParametersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startOrbitalParametersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addBurnOutVectors(builder:flatbuffers.Builder, BURN_OUT_VECTORSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(26, BURN_OUT_VECTORSOffset, 0);
}

static createBurnOutVectorsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startBurnOutVectorsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endLDM(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishLDMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$LDM');
}

static finishSizePrefixedLDMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$LDM', true);
}


unpack(): LDMT {
  return new LDMT(
    (this.SITE() !== null ? this.SITE()!.unpack() : null),
    this.AZIMUTH(),
    this.REFERENCES(),
    this.AGENCY_NAME(),
    this.bb!.createObjList<UPM, UPMT>(this.POINTS_OF_CONTACT.bind(this), this.pointsOfContactLength()),
    this.bb!.createObjList<UPM, UPMT>(this.OPERATIONS_POINTS_OF_CONTACT.bind(this), this.operationsPointsOfContactLength()),
    this.NET(),
    (this.ROCKET_CONFIGURATION() !== null ? this.ROCKET_CONFIGURATION()!.unpack() : null),
    this.MISSION_NAME(),
    this.MISSION_DESCRIPTION(),
    this.MISSION_TYPE(),
    this.ORBIT_TYPE(),
    this.WEATHER_CONDITIONS(),
    this.LAUNCH_STATUS(),
    this.WEBCAST_URL(),
    this.bb!.createScalarList<string>(this.MEDIA_LINKS.bind(this), this.mediaLinksLength()),
    this.bb!.createScalarList<string>(this.EARLIEST_LAUNCH_TIMES.bind(this), this.earliestLaunchTimesLength()),
    this.bb!.createScalarList<string>(this.LATEST_LAUNCH_TIMES.bind(this), this.latestLaunchTimesLength()),
    this.bb!.createScalarList<string>(this.LCOLA_WINDOW_CLOSURES.bind(this), this.lcolaWindowClosuresLength()),
    this.bb!.createObjList<CAT, CATT>(this.OBJECTS.bind(this), this.objectsLength()),
    this.bb!.createScalarList<string>(this.TRACKING_REQUIREMENTS.bind(this), this.trackingRequirementsLength()),
    this.COLA_SCREEN_DURATION(),
    this.PROBABILITY_OF_COLLISION_THRESHOLD(),
    this.COLA_RUNS_REQUIRED(),
    this.bb!.createObjList<UPM, UPMT>(this.COLA_POINTS_OF_CONTACT.bind(this), this.colaPointsOfContactLength()),
    this.bb!.createScalarList<string>(this.ORBITAL_PARAMETERS.bind(this), this.orbitalParametersLength()),
    this.bb!.createObjList<BOV, BOVT>(this.BURN_OUT_VECTORS.bind(this), this.burnOutVectorsLength())
  );
}


unpackTo(_o: LDMT): void {
  _o.SITE = (this.SITE() !== null ? this.SITE()!.unpack() : null);
  _o.AZIMUTH = this.AZIMUTH();
  _o.REFERENCES = this.REFERENCES();
  _o.AGENCY_NAME = this.AGENCY_NAME();
  _o.POINTS_OF_CONTACT = this.bb!.createObjList<UPM, UPMT>(this.POINTS_OF_CONTACT.bind(this), this.pointsOfContactLength());
  _o.OPERATIONS_POINTS_OF_CONTACT = this.bb!.createObjList<UPM, UPMT>(this.OPERATIONS_POINTS_OF_CONTACT.bind(this), this.operationsPointsOfContactLength());
  _o.NET = this.NET();
  _o.ROCKET_CONFIGURATION = (this.ROCKET_CONFIGURATION() !== null ? this.ROCKET_CONFIGURATION()!.unpack() : null);
  _o.MISSION_NAME = this.MISSION_NAME();
  _o.MISSION_DESCRIPTION = this.MISSION_DESCRIPTION();
  _o.MISSION_TYPE = this.MISSION_TYPE();
  _o.ORBIT_TYPE = this.ORBIT_TYPE();
  _o.WEATHER_CONDITIONS = this.WEATHER_CONDITIONS();
  _o.LAUNCH_STATUS = this.LAUNCH_STATUS();
  _o.WEBCAST_URL = this.WEBCAST_URL();
  _o.MEDIA_LINKS = this.bb!.createScalarList<string>(this.MEDIA_LINKS.bind(this), this.mediaLinksLength());
  _o.EARLIEST_LAUNCH_TIMES = this.bb!.createScalarList<string>(this.EARLIEST_LAUNCH_TIMES.bind(this), this.earliestLaunchTimesLength());
  _o.LATEST_LAUNCH_TIMES = this.bb!.createScalarList<string>(this.LATEST_LAUNCH_TIMES.bind(this), this.latestLaunchTimesLength());
  _o.LCOLA_WINDOW_CLOSURES = this.bb!.createScalarList<string>(this.LCOLA_WINDOW_CLOSURES.bind(this), this.lcolaWindowClosuresLength());
  _o.OBJECTS = this.bb!.createObjList<CAT, CATT>(this.OBJECTS.bind(this), this.objectsLength());
  _o.TRACKING_REQUIREMENTS = this.bb!.createScalarList<string>(this.TRACKING_REQUIREMENTS.bind(this), this.trackingRequirementsLength());
  _o.COLA_SCREEN_DURATION = this.COLA_SCREEN_DURATION();
  _o.PROBABILITY_OF_COLLISION_THRESHOLD = this.PROBABILITY_OF_COLLISION_THRESHOLD();
  _o.COLA_RUNS_REQUIRED = this.COLA_RUNS_REQUIRED();
  _o.COLA_POINTS_OF_CONTACT = this.bb!.createObjList<UPM, UPMT>(this.COLA_POINTS_OF_CONTACT.bind(this), this.colaPointsOfContactLength());
  _o.ORBITAL_PARAMETERS = this.bb!.createScalarList<string>(this.ORBITAL_PARAMETERS.bind(this), this.orbitalParametersLength());
  _o.BURN_OUT_VECTORS = this.bb!.createObjList<BOV, BOVT>(this.BURN_OUT_VECTORS.bind(this), this.burnOutVectorsLength());
}
}

export class LDMT implements flatbuffers.IGeneratedObject {
constructor(
  public SITE: SITT|null = null,
  public AZIMUTH: number = 0.0,
  public REFERENCES: string|Uint8Array|null = null,
  public AGENCY_NAME: string|Uint8Array|null = null,
  public POINTS_OF_CONTACT: (UPMT)[] = [],
  public OPERATIONS_POINTS_OF_CONTACT: (UPMT)[] = [],
  public NET: string|Uint8Array|null = null,
  public ROCKET_CONFIGURATION: ROCT|null = null,
  public MISSION_NAME: string|Uint8Array|null = null,
  public MISSION_DESCRIPTION: string|Uint8Array|null = null,
  public MISSION_TYPE: string|Uint8Array|null = null,
  public ORBIT_TYPE: string|Uint8Array|null = null,
  public WEATHER_CONDITIONS: string|Uint8Array|null = null,
  public LAUNCH_STATUS: string|Uint8Array|null = null,
  public WEBCAST_URL: string|Uint8Array|null = null,
  public MEDIA_LINKS: (string)[] = [],
  public EARLIEST_LAUNCH_TIMES: (string)[] = [],
  public LATEST_LAUNCH_TIMES: (string)[] = [],
  public LCOLA_WINDOW_CLOSURES: (string)[] = [],
  public OBJECTS: (CATT)[] = [],
  public TRACKING_REQUIREMENTS: (string)[] = [],
  public COLA_SCREEN_DURATION: string|Uint8Array|null = null,
  public PROBABILITY_OF_COLLISION_THRESHOLD: string|Uint8Array|null = null,
  public COLA_RUNS_REQUIRED: string|Uint8Array|null = null,
  public COLA_POINTS_OF_CONTACT: (UPMT)[] = [],
  public ORBITAL_PARAMETERS: (string)[] = [],
  public BURN_OUT_VECTORS: (BOVT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const SITE = (this.SITE !== null ? this.SITE!.pack(builder) : 0);
  const REFERENCES = (this.REFERENCES !== null ? builder.createString(this.REFERENCES!) : 0);
  const AGENCY_NAME = (this.AGENCY_NAME !== null ? builder.createString(this.AGENCY_NAME!) : 0);
  const POINTS_OF_CONTACT = LDM.createPointsOfContactVector(builder, builder.createObjectOffsetList(this.POINTS_OF_CONTACT));
  const OPERATIONS_POINTS_OF_CONTACT = LDM.createOperationsPointsOfContactVector(builder, builder.createObjectOffsetList(this.OPERATIONS_POINTS_OF_CONTACT));
  const NET = (this.NET !== null ? builder.createString(this.NET!) : 0);
  const ROCKET_CONFIGURATION = (this.ROCKET_CONFIGURATION !== null ? this.ROCKET_CONFIGURATION!.pack(builder) : 0);
  const MISSION_NAME = (this.MISSION_NAME !== null ? builder.createString(this.MISSION_NAME!) : 0);
  const MISSION_DESCRIPTION = (this.MISSION_DESCRIPTION !== null ? builder.createString(this.MISSION_DESCRIPTION!) : 0);
  const MISSION_TYPE = (this.MISSION_TYPE !== null ? builder.createString(this.MISSION_TYPE!) : 0);
  const ORBIT_TYPE = (this.ORBIT_TYPE !== null ? builder.createString(this.ORBIT_TYPE!) : 0);
  const WEATHER_CONDITIONS = (this.WEATHER_CONDITIONS !== null ? builder.createString(this.WEATHER_CONDITIONS!) : 0);
  const LAUNCH_STATUS = (this.LAUNCH_STATUS !== null ? builder.createString(this.LAUNCH_STATUS!) : 0);
  const WEBCAST_URL = (this.WEBCAST_URL !== null ? builder.createString(this.WEBCAST_URL!) : 0);
  const MEDIA_LINKS = LDM.createMediaLinksVector(builder, builder.createObjectOffsetList(this.MEDIA_LINKS));
  const EARLIEST_LAUNCH_TIMES = LDM.createEarliestLaunchTimesVector(builder, builder.createObjectOffsetList(this.EARLIEST_LAUNCH_TIMES));
  const LATEST_LAUNCH_TIMES = LDM.createLatestLaunchTimesVector(builder, builder.createObjectOffsetList(this.LATEST_LAUNCH_TIMES));
  const LCOLA_WINDOW_CLOSURES = LDM.createLcolaWindowClosuresVector(builder, builder.createObjectOffsetList(this.LCOLA_WINDOW_CLOSURES));
  const OBJECTS = LDM.createObjectsVector(builder, builder.createObjectOffsetList(this.OBJECTS));
  const TRACKING_REQUIREMENTS = LDM.createTrackingRequirementsVector(builder, builder.createObjectOffsetList(this.TRACKING_REQUIREMENTS));
  const COLA_SCREEN_DURATION = (this.COLA_SCREEN_DURATION !== null ? builder.createString(this.COLA_SCREEN_DURATION!) : 0);
  const PROBABILITY_OF_COLLISION_THRESHOLD = (this.PROBABILITY_OF_COLLISION_THRESHOLD !== null ? builder.createString(this.PROBABILITY_OF_COLLISION_THRESHOLD!) : 0);
  const COLA_RUNS_REQUIRED = (this.COLA_RUNS_REQUIRED !== null ? builder.createString(this.COLA_RUNS_REQUIRED!) : 0);
  const COLA_POINTS_OF_CONTACT = LDM.createColaPointsOfContactVector(builder, builder.createObjectOffsetList(this.COLA_POINTS_OF_CONTACT));
  const ORBITAL_PARAMETERS = LDM.createOrbitalParametersVector(builder, builder.createObjectOffsetList(this.ORBITAL_PARAMETERS));
  const BURN_OUT_VECTORS = LDM.createBurnOutVectorsVector(builder, builder.createObjectOffsetList(this.BURN_OUT_VECTORS));

  LDM.startLDM(builder);
  LDM.addSite(builder, SITE);
  LDM.addAzimuth(builder, this.AZIMUTH);
  LDM.addReferences(builder, REFERENCES);
  LDM.addAgencyName(builder, AGENCY_NAME);
  LDM.addPointsOfContact(builder, POINTS_OF_CONTACT);
  LDM.addOperationsPointsOfContact(builder, OPERATIONS_POINTS_OF_CONTACT);
  LDM.addNet(builder, NET);
  LDM.addRocketConfiguration(builder, ROCKET_CONFIGURATION);
  LDM.addMissionName(builder, MISSION_NAME);
  LDM.addMissionDescription(builder, MISSION_DESCRIPTION);
  LDM.addMissionType(builder, MISSION_TYPE);
  LDM.addOrbitType(builder, ORBIT_TYPE);
  LDM.addWeatherConditions(builder, WEATHER_CONDITIONS);
  LDM.addLaunchStatus(builder, LAUNCH_STATUS);
  LDM.addWebcastUrl(builder, WEBCAST_URL);
  LDM.addMediaLinks(builder, MEDIA_LINKS);
  LDM.addEarliestLaunchTimes(builder, EARLIEST_LAUNCH_TIMES);
  LDM.addLatestLaunchTimes(builder, LATEST_LAUNCH_TIMES);
  LDM.addLcolaWindowClosures(builder, LCOLA_WINDOW_CLOSURES);
  LDM.addObjects(builder, OBJECTS);
  LDM.addTrackingRequirements(builder, TRACKING_REQUIREMENTS);
  LDM.addColaScreenDuration(builder, COLA_SCREEN_DURATION);
  LDM.addProbabilityOfCollisionThreshold(builder, PROBABILITY_OF_COLLISION_THRESHOLD);
  LDM.addColaRunsRequired(builder, COLA_RUNS_REQUIRED);
  LDM.addColaPointsOfContact(builder, COLA_POINTS_OF_CONTACT);
  LDM.addOrbitalParameters(builder, ORBITAL_PARAMETERS);
  LDM.addBurnOutVectors(builder, BURN_OUT_VECTORS);

  return LDM.endLDM(builder);
}
}
