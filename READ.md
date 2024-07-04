SPEED DETECTOR;
This code speed, speedlimit and demerit and how they are executed. 
There two variable the 'speed' and 'speedlimit'.It represents  current speed and the speedlimit.
It checks wheather the 'speed' is less than the 'speedlimit' and if that is so it log 'ok' indicatinging that the speed is within the limit.
If thats not the case, it calculates the demerit based on the speed limits;
formular to get the 'demeritPoint'="(speed-speedlimit)/5"
If 'demeritpoint' exceed 12, the results shows 'lincence suspended'.
In the example in the code is that the 'speed' is 100 and the 'speedlimit' being 70 and by using the formular above  demeritepoints become'(100-70)/5=6'hence the demerit points being '6'


GRADE GENERATOR;
This code calculates the grade based on user-inputted marks using the 'prompt-sync' to interact with the user
When writing this code you should install 'prompt-sync' by  using('npm install prompt-sync')
After installing  output the program that evaluates the marks and prints the corresponding grade:
A for mark between 80 to 100,
B for marks between 60 to 79,
C for marks between 50  to 59,
D for marks between 40 to 49,
E for marks below 40,
"out of Range"if marks are not within 0 to 100.
In the example 85 is the marks and the output is "you got A".

NET SALARY CALCULATOR;
The code calculates the netsalary using grossSalary,NSSF and NHIF.
there three constants;
'taxRate'-which is 0.2(20%)
'nhifRate'-which is 0.1(10%)
'nssfRate'-which is 0.2(20%)
In the netsalary there is grossSalary and to calculate it you use 'basicSalary+Benefits'.
In the example given in the code is (59000(basicSalary)+4500(Benefits)=63500(grossSalary))
When calculating netsalary you subrtact tatal deduction(tax,NHIF,NSSF)from grossSalary.


