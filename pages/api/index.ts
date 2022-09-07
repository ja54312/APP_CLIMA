import { IncomingMessage, ServerResponse } from "http";
import DB from '../../database/data'

const allData = async(request:IncomingMessage,response:ServerResponse) => {
    const db = DB

    response.statusCode = 200 //ok
    response.setHeader('content-type','application/json')
    response.end(JSON.stringify(db))
    //console.log(response,"respeusta")
}

export default allData