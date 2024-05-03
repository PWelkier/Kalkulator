<script>
    document.addEventListener('DOMContentLoaded', function () {
        let display = document.getElementById('display');
        let buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const lastChar = display.value.slice(-1);

                switch (e.target.innerText) {
                    case 'C':
                        display.value = "";
                        break;
                    case '=':
                        try {
                            display.value = eval(display.value);
                        } catch (error) {
                            display.value = 'Error';
                        }
                        break;
                    default:
                        if (isOperator(e.target.innerText)) {
                            if (isOperator(lastChar)) {
                                // Jeśli ostatni znak to operator, zastąp go nowym
                                display.value = display.value.slice(0, -1) + e.target.innerText;
                            } else {
                                display.value += e.target.innerText;
                            }
                        } else {
                            display.value += e.target.innerText;
                        }
                }
            });
        });

        function isOperator(char) {
            return char === '+' || char === '-' || char === '*' || char === '/';
        }
    });
    </script>