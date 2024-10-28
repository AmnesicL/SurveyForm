function calculateSum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    let num1Float = parseFloat(num1);
    let num2Float = parseFloat(num2);
    
    if (isNaN(num1Float) || isNaN(num2Float)) {
        console.error("请输入有效的数字");
        return;
    }
    
    let sum = num1Float + num2Float;
    
    alert("两个数字的和是: " + sum);
}