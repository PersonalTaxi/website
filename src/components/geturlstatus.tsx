import { sha384 } from "crypto-hash";

export async function getUrlStatus() {
  const data = await fetch("/api/verify");
  const DataJson = await data.json();
  const status = await DataJson.msg;
  const crc = await fetch("/api/getcrc").then((res) => res.json());

  const DataCRC = `{"sessionId":"${status.sessionId}","orderId":${status.orderId},"amount":${status.amount},"currency":"${status.currency}","crc":"fccb3ef343fe113a"}`;
  const DataKEY = await sha384(DataCRC);
  console.log(DataKEY);

  const query = JSON.stringify({
    merchantId: status.merchantId,
    posId: status.posId,
    sessionId: status.sessionId,
    amount: status.amount,
    currency: status.currency,
    orderId: status.orderId,
    sign: DataKEY,
  });

  const urlStatus = { status, DataKEY, query };
  return urlStatus;
}

export async function getLastTransactionsUrlStatus() {
  const data = await fetch("/api/verify");
  const DataJson = await data.json();
  const status = await DataJson.msg;
  console.log(status);

  return status;
}

export default { getUrlStatus, getLastTransactionsUrlStatus };
