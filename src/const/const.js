//? IBIz Settings ------------------------------ start ----------------------------
const SERVER_IP = "172.16.80.115";
const SERVER_PORT = "8090";
export const SERVER_INFO = SERVER_IP ? `http://${SERVER_IP}:${SERVER_PORT}` : "";
const SEQUENCE = 0;

//* export const area */
export const SESSION_URL = `${SERVER_INFO}/sequence/select?sequence=${SEQUENCE}&responseType=json`;

//!!!! login area !!!//
export const LOGIN_URL = `${SERVER_INFO}/user/login?sequence=${SEQUENCE}&responseType=json`;

//!!!! ment area !!!//
export const MENT_READ_URL = `${SERVER_INFO}/ment/select?sequence=${SEQUENCE}&responseType=json`;
export const MENT_CREATE_URL = `${SERVER_INFO}/ment/insert?sequence=${SEQUENCE}&responseType=json`;
export const MENT_REMOVE_URL = `${SERVER_INFO}/ment/delete?sequence=${SEQUENCE}&responseType=json`;
export const MENT_REVISE_URL = `${SERVER_INFO}/ment/update?sequence=${SEQUENCE}&responseType=json`;

//! schedual area *//
export const SCHEDUAL_READ_URL = `${SERVER_INFO}/schedule/select?sequence=${SEQUENCE}&responseType=json`;
export const SCHEDUAL_CREATE_URL = `${SERVER_INFO}/schedule/insert?sequence=${SEQUENCE}&responseType=json`;
export const SCHEDUAL_REVISE_URL = `${SERVER_INFO}/schedule/update?sequence=${SEQUENCE}&responseType=json`;
export const SCHEDUAL_REMOVE_URL = `${SERVER_INFO}/schedule/delete?sequence=${SEQUENCE}&responseType=json`;

//! destination area *//
export const DESTINATION_READ_URL = `${SERVER_INFO}/number/ibiz/called/select?sequence=${SEQUENCE}&responseType=json`;
export const DESTINATION_CREATE_URL = `${SERVER_INFO}/number/ibiz/called/insert?sequence=${SEQUENCE}&responseType=json`;
export const DESTINATION_REVISE_URL = `${SERVER_INFO}/number/ibiz/called/update?sequence=${SEQUENCE}&responseType=json`;
export const DESTINATION_REMOVE_URL = `${SERVER_INFO}/number/ibiz/called/delete?sequence=${SEQUENCE}&responseType=json`;

//! vns area *//
export const VNS_READ_URL = `${SERVER_INFO}/number/ibiz/vns/select?sequence=${SEQUENCE}&responseType=json`;
export const VNS_CREATE_URL = `${SERVER_INFO}/number/ibiz/vns/insert?sequence=${SEQUENCE}&responseType=json`;
export const VNS_REVISE_URL = `${SERVER_INFO}/number/ibiz/vns/update?sequence=${SEQUENCE}&responseType=json`;
export const VNS_REMOVE_URL = `${SERVER_INFO}/number/ibiz/vns/delete?sequence=${SEQUENCE}&responseType=json`;

//! set area *//
export const SET_READ_URL = `${SERVER_INFO}/set/select?sequence=${SEQUENCE}&responseType=json`;
export const SET_CREATE_URL = `${SERVER_INFO}/set/insert?sequence=${SEQUENCE}&responseType=json`;
export const SET_REVISE_URL = `${SERVER_INFO}/set/update?sequence=${SEQUENCE}&responseType=json`;
export const SET_REMOVE_URL = `${SERVER_INFO}/set/delete?sequence=${SEQUENCE}&responseType=json`;

//! account area *//
export const ACCOUNT_READ_URL = `${SERVER_INFO}/user/select?sequence=${SEQUENCE}&responseType=json`;
export const ACCOUNT_CREATE_URL = `${SERVER_INFO}/user/join?sequence=${SEQUENCE}&responseType=json`;
export const ACCOUNT_REVISE_URL = `${SERVER_INFO}/user/change/info?sequence=${SEQUENCE}&responseType=json`;
export const ACCOUNT_REVISE_PASSWORD_URL = `${SERVER_INFO}/user/change/password?sequence=${SEQUENCE}&responseType=json`;
//? IBIz Settings ------------------------------ end ----------------------------

//? CDBIz Settings ------------------------------ start ----------------------------
const CDBIZ_SERVER_IP = "172.16.80.115";
const CDBIZ_SERVER_PORT = "8092";
const CDBIZ_SERVER_INFO = CDBIZ_SERVER_IP ? `http://${CDBIZ_SERVER_IP}:${CDBIZ_SERVER_PORT}` : "";

//* c biz */
export const CBIZ_INSERT_URL = `${CDBIZ_SERVER_INFO}/naver/cbiz/v1/set/cheat?logisCode=`;
export const CBIZ_DELETE_URL = `${CDBIZ_SERVER_INFO}/naver/cbiz/v1/set/cheat/delete?logisCode=`;

//* d biz */
export const DBIZ_INSERT_URL = `${CDBIZ_SERVER_INFO}/naver/dbiz/v1/set/called?logisCode=`;
export const DBIZ_DELETE_URL = `${CDBIZ_SERVER_INFO}/naver/dbiz/v1/set/called/delete?logisCode=`;
//? CDBIz Settings ------------------------------ start ----------------------------
