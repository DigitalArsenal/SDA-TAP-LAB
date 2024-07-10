// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

export enum OBSERVERLocationReferenceFrame {
  /**
   * Earth Mean Equator and Equinox of J2000
   */
  EME2000 = 0,

  /**
   *  Geocentric Celestial Reference Frame
   */
  GCRF = 1,

  /**
   * Greenwich Rotating Coordinates
   */
  GRC = 2,

  /**
   * International Celestial Reference Frame
   */
  ICRF = 3,

  /**
   * International Terrestrial Reference Frame 2000
   */
  ITRF2000 = 4,

  /**
   * International Terrestrial Reference Frame 1993
   */
  ITRF93 = 5,

  /**
   * International Terrestrial Reference Frame 1997
   */
  ITRF97 = 6,

  /**
   * Mars Centered Inertial
   */
  MCI = 7,

  /**
   * True of Date, Rotating
   */
  TDR = 8,

  /**
   * True Equator Mean Equinox
   */
  TEME = 9,

  /**
   * True of Date
   */
  TOD = 10,

  /**
   * Vehicle-Body-Local-Horizontal (VVLH): An orbit reference frame with X-axis pointing from the center of the central body to the vehicle, Z-axis oppoOBSERVER to the orbital angular momentum vector, and Y-axis completing the right-handed system.
   */
  VVLH = 11,

  /**
   * Radial-Intrack-Crosstrack (RIC): A local orbital reference frame with the radial axis pointing away from the central body, the intrack axis in the direction of motion, and the crosstrack axis completing the right-handed system.
   */
  RIC = 12,

  /**
   * Vehicle-Local-Vertical-Local-Horizontal (VLVH): An orbit reference frame similar to VVLH, often used in close proximity operations or surface-oriented missions.
   */
  VLVH = 13,

  /**
   * East-North-Up (ENU): A terrestrial reference frame where the X-axis points East, the Y-axis points North, and the Z-axis points Up (away from the center of the Earth).
   */
  ENU = 14,

  /**
   * North-East-Down (NED): Similar to ENU, but with axes oriented Northward, Eastward, and Downward towards the Earth's center.
   */
  NED = 15,

  /**
   * Local Tangent Plane (LTP): A local, surface-fixed reference frame often used for terrestrial applications, aligned with the local horizon.
   */
  LTP = 16,

  /**
   * Local Vertical-Local Horizontal (LVLH): An orbit reference frame with the Z-axis pointing towards the center of the central body (oppoOBSERVER to local vertical), the X-axis in the velocity direction (local horizontal), and the Y-axis completing the right-hand system.
   */
  LVLH = 17,

  /**
   * Polar-North-East (PNE): A variation of local coordinate systems typically used in polar regions, with axes aligned toward the geographic North Pole, Eastward, and perpendicular to the Earth's surface.
   */
  PNE = 18,

  /**
   * Body-Fixed Reference Frame (BRF): A reference frame fixed to the body of a spacecraft or celestial object, oriented according to the body's principal axes.
   */
  BRF = 19
}
