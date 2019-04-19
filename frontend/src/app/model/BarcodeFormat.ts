export class BarcodeFormat {
  gtinStartIndex: number;
  gtinEndIndex: number;
  serialStartIndex: number;
  serialEndIndex: number;
  hasExpiryDate: boolean;
  expiryDateStartIndex: number;
  expiryDateEndIndex: number;
  dateFormat: string;
  barcodeLength: number;
}
