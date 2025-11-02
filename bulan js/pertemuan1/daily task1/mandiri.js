// Title

function sayHello() {
    console.time("f1");
    console.info('Info Time Terkini dari F1 >>');
    console.timeLog("f1");
    alert('Halo, Nama Saya Zhafran Harits');
    console.timeEnd("f1");
}

console.warn("Ini Contoh Warning");
console.error("Ini Contoh Error");

let userData = [
    { userId: "user123", loginStatus: "active", lastLogin: "2024-03-20" },
    { userId: "user456", loginStatus: "inactive", lastLogin: "2024-03-15" },
    { userId: "user45678", loginStatus: "inactive 001", lastLogin: "2024-03-15" },
];

console.group('API Response Debug');
console.table(userData);
console.log('Status Code:', "Successfull");
console.log('Response Time:', "Successfull");
console.log('Payload Size:', "Successfull");
console.groupEnd();

// console.info("Test Log Info");