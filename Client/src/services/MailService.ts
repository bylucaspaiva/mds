import BaseApi from "./BaseApi";

const baseUrl = 'api/Mails';

class MailService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static post(request: any) {
    return BaseApi.post(`${baseUrl}`, request)
  }
}

export default MailService