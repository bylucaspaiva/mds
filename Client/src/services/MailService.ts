import MailModel from "../interfaces/MailModel";
import BaseApi from "./BaseApi";

const baseUrl = 'api/Mails';

class MailService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static post(request: MailModel) {
    return BaseApi.post(`${baseUrl}`, request, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
      }})
  }
}

export default MailService