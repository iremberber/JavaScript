//"Elma,Armut,Çilek,Muz" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Elma","Armut","Çilek","Muz"];

//Dizi kaç elemanlıdır?
sonuc = meyveler.length;

//Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]); //ilk eleman
console.log(meyveler[3]); //son eleman

//Mango dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma"));

//Kiraz meyvesini listenin sonuna ekleyiniz.
meyveler.push("Kiraz");


//Dizinin son iki elemanını silin.
meyveler.splice(meyveler.length - 2,2);

console.log(meyveler);

//Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
  Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
  Öğrenci 2: Ada Bilgi 2012 (80,80,90)
  Öğrenci 3: Ahmet Turan 2009 (60,60,70)
*/

let ogr1 = ["Yiğit" ,"Bilgi" , 2010, [70,60,80]] ;
let ogr2 = ["Ada", "Bilgi", 2012 , [80,80,90]];
let ogr3 = ["Ahmet", "Turan" , 2009 , [60,60,70]];

let ogrenciler = [ogr1 , ogr2, ogr3];

//Yaşları;

let yigityas = new Date().getFullYear() - ogrenciler[0][2];
let adayas = new Date().getFullYear() - ogrenciler[1][2];
let ahmetyas = new Date().getFullYear() - ogrenciler[2][2];

console.log(yigityas);
console.log(adayas);
console.log(ahmetyas);

//Ortalamaları;

let yigitortalama = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
console.log(yigitortalama);

let adaortalama = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
console.log(adaortalama);

let ahmetortalama = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;
console.log(ahmetortalama);

//Küsüratsız ortalama için;

console.log(yigitortalama.toFixed());
console.log(adaortalama.toFixed());
console.log(ahmetortalama.toFixed());