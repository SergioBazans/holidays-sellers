import { getAllSellers } from "../utils/getAllSellers";

export async function holidaySeller(ctx: Context, next: () => Promise<any>) {
  const { clients: { holiday: holidayClient, seller: sellerClient }, header} = ctx
  const authCookie = header.vtexidclientautcookie as string | undefined

  const sellers = await getAllSellers(holidayClient);
  const holidays = await sellerClient.getHolidays(`http://${sellers[0].account}.myvtex.com`, authCookie!)

  const filteredSellers = []
  const sellersError = []
  const sellersUpdated = []

  for (const seller  of sellers) {
    if (seller.account.includes("coolbox") || seller.account.includes("urbanrider") || !seller.isActive) continue
    filteredSellers.push(seller.account)
  }

  for (const holidayCool of holidays) {
    for (const seller of filteredSellers) {
      console.log("STARTING==============")
      try {
        const { name, startDate } = holidayCool
        let fortmatDate = startDate.split("T")[0]
        await sellerClient.createHolidays(`http://${seller}.myvtex.com`, fortmatDate, {name, startDate: fortmatDate}, authCookie!)  
        sellersUpdated.push(seller)
        console.log("Updated: ", seller)
      } catch (error) {
        console.log("ERRORR=================", error.message)
        sellersError.push(seller)    
      }
    }
  }

  const result = Array.from(new Set(sellersUpdated))
  const error = Array.from(new Set(sellersError))

  console.log("Success: ", result)
  console.log("Error: ", error)

  ctx.body = { updated: result, error  }

  await next()
}
