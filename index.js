let countEl1 = document.getElementById("count-el-1")
let countEl2 = document.getElementById("count-el-2")
let count1 = 0
let count2 = 0

function increment1() {
    count1 += 1
    countEl1.textContent = count1
}

function increment2() {
    count2 += 1
    countEl2.textContent = count2
}

function reset() {
    count1 = 0
    count2 = 0
    countEl1.textContent = 0
    countEl2.textContent = 0
}