import Holiday from "../clients/holiday";

export const getAllSellers = async (client: Holiday) => {
  const response = []
  let idx = -1;
  let from = 0;
  let to = 0;
  let timesToRun = 0
  let total = 0
  do {
    from = idx === -1 ? 0 : 100 * (idx + 1);
    to = idx === -1 ? 100 : 100 * (idx + 2);
    const { paging, items } = await client.getSellers({from, to})
    total = paging.total
    timesToRun = Math.floor(total / 100);
    response.push(...items)
    idx++
  } while (idx < timesToRun);
  return response
}