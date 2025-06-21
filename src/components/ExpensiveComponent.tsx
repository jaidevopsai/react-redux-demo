import  { useMemo } from "react";


function ExpensiveComponent({ items }: { items: string[] }) {
    const itemCount = useMemo(()=>{
        console.log('Calculating item count...');
        return items.length; 
    }, [items])

    return <div>
        <p> useMemo - Expensive Component - in memory  Item Count: {itemCount}</p>
        </div>
}

export default ExpensiveComponent;