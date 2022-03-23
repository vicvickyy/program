input.onButtonPressed(Button.A, function () {
    num2 += 1
    basic.showNumber(num_1)
})
input.onButtonPressed(Button.AB, function () {
    num2 += num_1
})
input.onButtonPressed(Button.B, function () {
    num2 += -1
    basic.showNumber(num2)
})
let num_1 = 0
let num2 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
