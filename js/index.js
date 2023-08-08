//Bai 1
// B1: Input
//     - salaryPerDay: lương 1 ngày
//     - workDay: số ngày làm việc
// B2:
//     - lấy salaryPerDay nhân với workDay để tính tiền lương
// B3: In ra tổng lương lên giao diện

document.getElementById('salaryHandle').onclick = function () {
    var salaryPerDay = +document.getElementById('salaryPerDay').value;
    var workDay = +document.getElementById('workDay').value;
    var salaryResult = salaryPerDay * workDay;
    document.getElementById(
        "salaryResult"
    ).innerHTML = `Tổng lương : ${salaryResult}`;
}

// Bai 2
// B1: Input
//     - num1: số thứ 1
//     - num2: số thứ 2
//     - num3: số thứ 3
//     - num4: số thứ 4
//     - num5: số thứ 5
// B2:
//     - lấy 5 số cộng lại rồi chia 5
// B3: In ra giá trị trung bình lên giao diện
document.getElementById('averageHandle').onclick = function () {
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;
    var num4 = +document.getElementById('num4').value;
    var num5 = +document.getElementById('num5').value;
    var averageResult = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById(
        "averageResult"
    ).innerHTML = `Giá trị trung bình: ${averageResult}`;
}

// Bai 3
// B1: Input
//     - usdAmount: số tiền usd
//     - usdRate: tỉ giá đô mỹ
// B2:
//     - lấy số tiền usd nhân vs tỉ giá đô 
// B3: In ra giá trị quy đổi lên giao diện
document.getElementById('convertHandle').onclick = function () {
    var usdAmount = +document.getElementById('usdAmount').value;
    var usdRate = 23500;
    var convertResult = usdAmount * usdRate;
    document.getElementById(
        "convertResult"
    ).innerHTML = `${convertResult}vnd`;
}

// Bai 4
// B1: Input
//     - width: chiều rộng
//     - height: chiều dài
// B2:
//     - lấy chiều dài * chiều rộng để tính diện tích
//     - lấy (chiều dài + chiều rộng) * 2 để tính chu vi
// B3: In ra diện tích và chu vi lên giao diện
document.getElementById('calculateHandle').onclick = function () {
    var width = +document.getElementById('width').value;
    var height = +document.getElementById('height').value;
    var p = (width + height) * 2;
    var s = width * height;
    document.getElementById(
        "calculateResult"
    ).innerHTML = `Diện tích: ${s}; Chu vi: ${p}`;
}

// Bai5
// B1: xác định đầu vào:
// - number
// - unit: biến chứa giá trị hàng đơn vị
// - ten: biến chứa giá trị hàng chục
// - result: tổng 2 ký số

// B2: xác định công thức tách các ký số:
// Math.floor hàm làm tròn xuống
// - hàng đơn vị: n % 10 
// - hàng chục: Math.floor(n % 100 / 10)
// - tính tổng: hàng đơn vị + hàng chục

// B3: in kết quả tổng 2 ký số lên giao diện

document.getElementById('resultHandle').onclick = function () {
    var number = +document.getElementById('number').value;
    var unit = Math.floor(number % 100 / 10);
    var ten = Math.floor(number % 10);
    var result = unit + ten;
    document.getElementById('result').innerHTML = `Tổng hai ký số ${result}`;
}
