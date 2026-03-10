export interface Vehicle {
  make: string;
  model: string;
  year: number;
  value: number;
  color?: string;
  registration?: string;
  fuelType?: string;
  engineCapacity?: number;
}

export interface VrmLookupRequest {
  registration: string;
}

export interface VrmLookupResponse {
  success: boolean;
  vehicle?: Vehicle;
  error?: string;
}

export interface WaitlistRequest {
  email: string;
  registration?: string;
  equity?: number;
}

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
}
