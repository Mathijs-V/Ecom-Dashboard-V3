

export interface InvoiceRequest {
    shipmentId: string;
    orderId: string;
    customerAccountNumber: string;
    billingDetails: BillingDetails;
    products: Product[];
    status: string;
    statusTransitions: StatusTransition[];
}
  
export interface BillingDetails {
    salutation: string;
    firstName: string;
    surname: string;
    streetName: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    countryCode: string;
}
  
export interface Product {
    description: string;
    quantity: number;
    unitPrice: number;
}
  
export interface StatusTransition {
    status: string;
    statusDateTime: string;
}
  
export interface SalesDataResponse {
    invoiceRequests: InvoiceRequest[];
}

export interface ChartData {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      fill: boolean;
      borderColor: string;
      tension: number;
    }>;
}
export const config = { runtime: 'client' };