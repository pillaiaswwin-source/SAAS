export type ContainerSize = '20' | '40' | '45';
export type ContainerType = 'Dry' | 'Reefer' | 'Flat Rack' | 'Open Top' | 'Tank';
export type ContainerStatus = 'Available' | 'Out' | 'Maintenance' | 'Damaged' | 'Cleaning';
export type ConditionGrade = 'A' | 'B' | 'C' | 'D';

export interface Container {
  id: string;
  number: string;
  size: ContainerSize;
  type: ContainerType;
  status: ContainerStatus;
  grade: ConditionGrade;
  owner: string;
  arrivalDate: string;
  location: {
    block: string;
    row: string;
    tier: number;
  };
  damageDescription?: string;
  damageImage?: string;
  // ... other metadata
}

export type UserRole = 'OWNER' | 'MANAGER' | 'STAFF' | 'REPAIRMAN' | 'BILLING';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  name: string;
  email?: string;
}