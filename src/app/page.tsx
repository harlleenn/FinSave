import Income from "./components/Income/page";
import Expense from './components/Expense/page'
export default function Dashboard() {
  return (
    <div>
    this is the main page
    <div>
      <Income/>
    </div>
    <div>
      <Expense/>
    </div>
    <div>
      BALANCE
    </div>
    </div>
  );
}
