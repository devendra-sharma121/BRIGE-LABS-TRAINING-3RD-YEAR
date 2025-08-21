class Calculator:
    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def subtract(a, b):
        return a - b

    @staticmethod
    def multiply(a, b):
        return a * b

    @staticmethod
    def divide(a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b

if __name__ == "__main__":
    num1 = 10
    num2 = 5

    print("Addition:", Calculator.add(num1, num2))
    print("Subtraction:", Calculator.subtract(num1, num2))
    print("Multiplication:", Calculator.multiply(num1, num2))
    print("Division:", Calculator.divide(num1, num2))
