[Контакт для связи ](https://t.me/Anzhela_Mart)

---

# Task 1. Caesar cipher CLI tool

### This is CLI tool that encode and decode a text by Caesar cipher.

CLI tool should accept 4 options (short alias and full name):

- -s, --shift: a shift
- -i, --input: an input file
- -o, --output: an output file
- -a, --action: an action encode/decode

## Details:

Action (encode/decode) and the shift are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.

If the input file is missed - use stdin as an input source.

If the output file is missed - use stdout as an output destination.

If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - human-friendly error should be printed in stderr.

If passed params are fine the output (file or stdout) should contain encoded/decoded content of input (file or stdin).

For encoding/decoding use only the English alphabet, all other characters should be kept untouched.

## Usage example:

First install all the dependencies:

```
npm install
```

then go to the "my_caesar_cli" folder and enter

```
$ node index.js -a encode -s 7 -i input.txt -o output.txt
$ node index.js --action encode --shift 7 --input input.txt --output output.txt
$ node index.js --action decode --shift 7 --input input.txt --output output.txt
```

---

**input.txt**
_This is secret. Message about "\*" symbol!_

**output.txt**
_Aopz pz zljyla. Tlzzhnl hivba "\_" zftivs!_

## Критерии оценки задания

Каждый пункт - 10 баллов

1. в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы

2. в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению

3)  если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст

4.  если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0

5.  если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0

6.  если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin

7.  если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout

8.  шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются

9.  если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст

10. кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемымы задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)
