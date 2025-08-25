
import Link from "next/link";
import CardLayout from "./components/cardLayout/CardLayout";
export default function Dashboard() {
  return (
    <div className=" justify-center flex">
    <Link href="/income">
    <CardLayout Header="INCOME" Body="Click to view income details" />
    </Link>

    <Link href="/expense"> 
    <CardLayout Header="EXPENSES" Body="Click to view EXPENSES details" />
    </Link>
    <Link href="/balance">
       <CardLayout Header="BALANCE" Body="Click to view BALANCE details" />
    </Link>
    </div>
  );
}
