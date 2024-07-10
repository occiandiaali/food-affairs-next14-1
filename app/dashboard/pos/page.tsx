import { createClient } from "@/app/utils/supabase/server"
import MenuTable from "@/app/ui/menu/table";

interface FoodItem {
    name: string;
    price: number;
}

export default async function Page() {
    const supabase = createClient();
    const {data: menu} = await supabase.from("menu").select();
    const menuItems: FoodItem[] | any = menu;
    return (
        <>
        {/* <h1 className="text-2xl font-bold m-2">Today's Menu</h1> */}
        {/* <pre>{JSON.stringify(menu, null, 2)}</pre> */}
        <MenuTable query={menuItems} />
        </>
    )
}