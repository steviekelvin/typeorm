export interface EncryptInterface {
  execute(value: string): string;
  decrypt(value: string): string;
  compare(newString: string, oldHash: string): boolean;
}
