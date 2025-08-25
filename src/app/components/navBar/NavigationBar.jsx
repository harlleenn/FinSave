"use client"
import { Navbar ,NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
export default function NavigationBar () {
    return (
         <Navbar className="bg-red-800 h-screen w-40 ">
      <NavbarBrand className="flex flex-col" >
        <p>FinSave</p>
      </NavbarBrand>
      <NavbarContent className="flex flex-col">
        <NavbarItem>
          <Link color="foreground" href="#">
            DASHBOARD
          </Link>
        </NavbarItem>
         <NavbarItem>
          <Link color="foreground" href="#">
current balance is 23000
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            CHARTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            SETTINGS
          </Link>
        </NavbarItem>
      </NavbarContent>
     
    </Navbar>
  );
    
}