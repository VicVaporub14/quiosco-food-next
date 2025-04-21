import { completeOrder } from "@/actions/complete-order-action"
import { OrderWithProducts } from "@/src/types"
import { formatCurrency } from "@/src/utils"

type OrderCardProps = {
    order: OrderWithProducts
}

export default function OrderCard({ order }: OrderCardProps) {

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4 border border-gray-200 shadow-lg"
        >
            <p className='text-xl font-medium text-gray-900'>Cliente: {order.name}</p>
            <p className='text-md font-medium text-gray-900'>Productos Ordenados:</p>
            <dl className="mt-6 space-y-4">
                {order.orderProducts.map( product => (
                    <div
                        key={product.id}
                        className="flex items-center gap-2 border-t border-gray-200 pt-4"
                    >
                        <dt className="flex items-center text-sm text-gray-600">
                            <span className="font-black">({product.quantity}) {''}</span>
                        </dt>
                        <dd className="text-sm font-medium text-gray-900">{product.product.name}</dd>
                    </div>
                ))}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-md font-medium text-gray-900">Total a Pagar: </dt>
                    <dd className="text-lg font-medium text-gray-900">{formatCurrency(order.total)}</dd>
                </div>
            </dl>

            <form action={completeOrder}>
                <input 
                    type="hidden"
                    value={order.id} 
                    name="order_id" 
                />
                <input
                    type="submit"
                    className="text-sm bg-blue-500 hover:bg-blue-600 transition-colors text-white w-full mt-5 p-3 font-bold rounded-lg cursor-pointer"
                    value='Marcar Orden Completada'
                />
            </form>
        </section>
    )
}
