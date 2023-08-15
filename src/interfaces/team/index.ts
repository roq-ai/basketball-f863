import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  name: string;
  manager_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  player?: PlayerInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    player?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  manager_id?: string;
  organization_id?: string;
}
