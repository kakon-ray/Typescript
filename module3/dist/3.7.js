"use strict";
// static property
{
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    console.log(Counter.increment());
    console.log(Counter.increment());
}
