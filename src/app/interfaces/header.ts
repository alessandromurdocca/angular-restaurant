export interface Header {
}

export interface NavbarItem {
  path:string;
  selected?:boolean;
  label:string;
  subpaths?: NavbarItem[];
  
}

