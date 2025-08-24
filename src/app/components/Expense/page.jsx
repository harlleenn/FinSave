import CardLayout from "../CardLayout/CardLayout"
export default function Expense () {
    const Header = "EXPENSES"
    const Body = "Hi i am the body of the expeses"
    return (
        <>
        <CardLayout Header={Header} Body={Body}/>
        </>
    )
}