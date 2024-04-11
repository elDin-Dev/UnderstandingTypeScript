class Department {
  private employees: string[] = [];
  /*
  private name: string;
  

  constructor(n: string) {
    this.name = n;
  }
  */

  constructor(private readonly id: string, private name: string) {}
  // Adding here as a hint 'this:Department' we ensure that typescript
  // is going to help us avoid error with 'this hell'
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  describeNoParm() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('1', "Accounting");
accounting.addEmployee('max');
accounting.addEmployee('alex');

accounting.describe();
accounting.printEmployeeInformation();

//Error because of the 'this' badusage

//const copyDept: { desc: Function } = { desc: accounting.describeNoParm };

//const copyDept2: { desc: Function } = { desc: accounting.describe };

//console.log("this tipycal error: " + copyDept.desc());

//Error because the object where we execute describe doesn't have a field called 'name
//console.log("this without error: " + copycopyDept2Dept.describe());
