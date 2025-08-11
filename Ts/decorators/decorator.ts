


function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling method: ${propertyKey}`); // Decorator's 
        const result = originalMethod.apply(this, args); 
        console.log(`Method ${propertyKey} finished.`);  // Decorator's added behavior
        return result;
    };

    return descriptor;
}

// 2.decorator  method in a class.
class Calculator {
    @logMethod
    add(a: number, b: number): number {
        console.log("...calculating...");
        return a + b;
    }
}


const calc = new Calculator();
calc.add(5, 3);



// Calling method: add
// ...calculating...
// Method add finished.
