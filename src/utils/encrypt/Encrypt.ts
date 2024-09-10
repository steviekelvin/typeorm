import { EncryptInterface } from "./Encript.interface";
import { AES, enc } from "crypto-ts";

export class Encript implements EncryptInterface {
  private securityMessage: string;
  constructor() {
    this.securityMessage = process.env.HASH || "fkndfklsnfsafklsdknfl";
  }
  execute(value: string) {
    return AES.encrypt(value, this.securityMessage).toString();
  }
  decrypt(value: string) {
    return AES.decrypt(value.toString(), this.securityMessage).toString(
      enc.Utf8
    );
  }

  compare(newString: string, oldHash: string) {
    const newHash = this.execute(newString);
    return newHash === oldHash;
  }
}
