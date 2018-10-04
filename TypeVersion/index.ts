interface Customer {
    id: number;
    name: string
}

interface Order {
    id: number;
    name: string;
    items?: Item[];
}

interface Item {
    id: number;
    name: string
}

class FakeService {
    getCustomer(id: number): Promise<Customer> {
        const customer: Customer = {
            id: 1,
            name: 'Big Business'
        };
        return Promise.resolve(customer);
    }

    getOrders(customerid: number): Promise<Order[]> {
        const order1: Order = {
            id: 123,
            name: 'First Order'
        };
        const order2: Order = {
            id: 234,
            name: 'Second Order'
        };
        const order3: Order = {
            id: 456,
            name: 'Third Order'
        };
        return Promise.resolve([order1, order2, order3]);
    }

    getItems(orderId: number): Promise<Item[]> {
        const item1: Item = {
            id: 123,
            name: 'Lightsaber'
        };
        const item2: Item = {
            id: 234,
            name: 'Blaster'
        };
        const item3: Item = {
            id: 456,
            name: 'Space Fuel'
        };
        return Promise.resolve([item1, item2, item3]);
    }
}



const service = new FakeService();

const customerId = 1;

function printOrders(customerId: number) {
    service.getCustomer(customerId).then(customer=>{
        service.getOrders(customer.id).then(orders=>{
            orders.forEach(order=>{
                service.getItems(order.id).then(items=> {
                    order.items = items;
                    console.log(order);
                });
            });
        });
    });
}

printOrders(customerId);

// async function printOrdersAsync(customerId: number) {
//     const customer = await service.getCustomer(customerId);
//     const orders = await service.getOrders(customer.id);
//     orders.forEach(async (order)=>{
//         const items = await service.getItems(order.id);
//         order.items = items;
//         console.log(order);
//     });
// }

// printOrdersAsync(customerId);



