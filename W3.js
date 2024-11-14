const Day = {
    วันอาทิตย์: ["ส้ม","แดง"],
    วันจันทร์: "ขาว",
    วันอังคาร: ["ชมพู","ม่วง","แดง"],
    วันพุธ: ["เขียว"],
    วันพฤหัสบดี: ["เหลือง"],
    วันศุกร์: ["น้ำเงิน"],
    วันเสาร์: ["ดำ"],
}
function DayColors() {
    const dayColorsContainer = document.getElementById("dayColors");
    for (const day in Day) {
        const colors = Array.isArray(Day[day]) ? Day[day].join(", ") : Day[day];
        const dayRow = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${day}</h5>
                        <p class="card-text">สี: ${colors}</p>
                    </div>
                </div>
            </div>
        `;
        dayColorsContainer.insertAdjacentHTML('beforeend', dayRow);
    }
}
DayColors();

const manager = {
    fname: "John",
    lname: "Smith",
    salary: 35000
};
document.getElementById("manager").textContent = `${manager.fname} ${manager.lname} ${manager.salary} `;


const employees = [
    {"fname": "Harry", "lname": "Potter", "salary": 15000},
    {"fname": "Hermione", "lname": "Granger", "salary": 25000},
    {"fname": "Ron", "lname": "Weasley", "salary": 20000},
    {"fname": "Draco", "lname": "Malfoy", "salary": 35000},
    {"fname": "Luna", "lname": "Lovegood", "salary": 30000},
];
const employeeInfo = employees.map(employee => {
    return `${employee.fname} ${employee.lname} ${employee.salary}`;
}).join('<br>'); 
document.getElementById("employee").innerHTML = employeeInfo;
