Таблиця zno_results дуже велика і вміщує величезну кількість інформації про, що частково пов'язана, що
значно спрощує аналіз цих даних, тобто отримуємо OLAP, що прибирає потребу у різних JOIN запитах, нескінченних вьюшках
та інше. Проте кожна таблиця має бути готовою до нормалізації, бо дані не завжди створенні тільки для аналізу

## Сутності "zno_results"

* Людина яка складає ЗНО(вік, стать, місце навчання, бали ЗНО та ін.)
* Місце реєстрації (регіон, місто, район та ін.)
* Школа (регіон, напрям та ін.)
* Бали ЗНО (назв. предмету, бали дпа, бали у 100-ій с-мі та ін.)

Отже, можна легко побачити, що zno_results можна та потрібно розбити на 4 різні таблиці

## Person

* OUTID - унікальний ідентифікатор 
* Birth - день народження
* SexTypeName - стать
* RegTypeName - статус учасника. Можна сперечатись що статус учасника залежить від попередньої освіти, проте 
  статус учасника належить самому учаснику, а не школі
  
* RegistrationLocation(custom) - місце реєстрації учасника. Колонка, яка буде (зовнішній ключ на місце реєстрації)
* Results(custom) - результати ЗНО (зовнішній ключ на результати ЗНО)
* Education(custom) - де людина навчалась(зовнішній ключ, який допускає null значення)

## Registration

* locationID(custom) - зовнішній ключ для зв'язку з колонкою RegistrationLocation у таблиці **Person**
* AreaName - місто реєстрації (також буде відігравати роль зовнішнього ключа, але поки що секрет чому)
* TerName - район проживання

Хочеться сюди вписати ще й Regname, проте можна легко побачити, що Regname напряму залежить від міста.
Очевидно, що всі міста унікальні, тоді зв'язок Київ -> Київська область очевидний, проте не очевидний зв'язок
TerName та AreaName, бо райони у містах можуть повторюватись і тому неможливо вгадати місто, знаючи район

Тоді, для розв'язання проблеми з Regname створимо окрему таблицю **CityRegion**, де буде усього дві колонки

* AreaName - місто реєстрації (зовнішній ключ на колонку AreaName у таблиці Registration)
* Regname - регіон реєстрації

Також можна побачити що поле TerTypeName теж напряму залежить від AreaName, але не залежить від
регіону, тому можна "закинути" колонку до таблиці **CityRegion**

* AreaName - місто реєстрації (зовнішній ключ на колонку AreaName у таблиці Registration)
* TerTypeName - Тип території

## Education

* EOName - назва школи (зовнішній ключ з Education колонкою в таблиці Person)
* ClassLangName - мова у школі
* ClassProfileName - Профіль навчання учасника/ОКР, який учасник здобуває
* EOParent - Орган, якому підпорядковується заклад освіти 
* EOTypeName - Тип закладу освіти 

Хочу зазначати, що вказані колонки ніяк не можна винести в іншу таблицю, бо немає жодних зв'язків всередині таблиці
Колонки повністю задають таблицю і ніяких транзитивних зв'язків не існує, на жаль.
Розташування 
закладу освіти повністю залежить від того де дитина реєструється на ЗНО, тому аби дістати ці 
дані потрібно лише квернути джоїн запит учня з таблицею **Registration**

## Results

* outid - кожна людина має там кілька своїх оцінок
* test - назва тесту
* lang - мова написання тесту
* ball100 - Оцінка у 200 бальній
* teststatus - статус написання ЗНО
* ball12 - оцінка ДПА
* ball - к-ть набраних бал написання ЗНО
* PTName - розташування пункту (решту даних можна дістати з іншої таблиці)

# How to run the script

note: 1st version does not make any sense, this is hello world migration

  1. Install the **Spawn** https://www.spawn.cc/docs/getting-started.html
  2. Install **flyway** https://flywaydb.org/documentation/getstarted/firststeps/commandline
  3. Then create data-container by executing the command
spawnctl create data-container --image postgres:empty --name flyway-container
  4. Put files from sql folder (github) to flyway's folder sql
  5. Configure flyway.conf accordingly to the data-container credentials
  6. Run ./flyway migrate

If you want to check Data Ingestion processes follow the next workflow:
  1. Run 1-10 version
  2. run main.py script from lab1 with a new credentials (I also strongly recommend ingesting 
     only first 50 rows from Odata2020file.csv to save the time)
  3. Then run 11th and 12th versions
  
  # Summary:
  
  1. Differentiated the table zno_results to person, registration, education, cityregion
  2. The main relations are:


    * outid in person 1->n outid in results
    * RegistrationLocation person n<-1 locationID in registration
    * EOName person 1 -> EOName in education


  3. Created schema migration and data ingestion processes
 
