export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="w-full flex-none col-span-1 md:col-span-2 bg-slate-200 rounded-lg p-2">
        <h1 className="text-2xl font-bold m-2">Today's Menu</h1>
        {children}
        </div>
        <div className="w-full flex-none bg-blue-100 rounded-lg p-2">
        <h1 className="text-xl font-semibold mb-3">Checkout Sale</h1>
        <label htmlFor="phone">Enter customer phone no.</label>
        <input type="tel" id="phone" name="phone" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="e.g. 030-999-0089"/>
        
        <ul className="my-4">
        <li>Item 1</li>
         <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <input type="button" value="Process"
        className="w-full h-10 bg-green-500 text-white font-bold rounded-md p-2 my-2 hover:cursor-pointer"
        />
        </div>
        </div>
    )
}