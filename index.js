const employee = {
    name: "Isaac",
    streetAddress: "4115 Oxford Lane"
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {...employeeObj,
    [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    let newObj = employeeObj;
    newObj[key] = value;
    return newObj
}

function deleteFromEmployeeByKey(employeeObj, key) {
    let newObj = {...employeeObj}
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
