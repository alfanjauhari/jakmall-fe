export type ShipmentType = 'gosend' | 'jne' | 'personal_courier';
export type PaymentType = 'ewallet' | 'bank' | 'virtual_account';

export type StoreSchema = {
  send_as_dropshipper?: boolean;
  email: string | null;
  dropshipper_name?: string | null;
  phone_number: string | null;
  dropshipper_phone_number?: string | null;
  delivery_address: string | null;
  shipment_type: ShipmentType | null;
  payment_type: PaymentType | null;
};

export const initialValues: StoreSchema = {
  send_as_dropshipper: false,
  email: null,
  dropshipper_name: null,
  phone_number: null,
  dropshipper_phone_number: null,
  delivery_address: null,
  shipment_type: null,
  payment_type: null,
};

export const mapData = {
  shipments: {
    gosend: {
      name: 'Go Send',
      price: 15000,
      estimation: 'Today',
    },
    jne: {
      name: 'JNE',
      price: 9000,
      estimation: '2 day',
    },
    personal_courier: {
      name: 'Personal Courier',
      price: 29000,
      estimation: '1 day',
    },
  },
  payments: {
    ewallet: {
      name: 'E-Wallet',
      saldo: 1500000,
    },
    bank: {
      name: 'Bank transfer',
      saldo: 0,
    },
    virtual_account: {
      name: 'Virtual Account',
      saldo: 0,
    },
  },
};
