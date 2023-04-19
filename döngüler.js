let sayilar =[1,5,7,15,3,25]

 //liste sayılarının her bir elemanın karesini bulun.

 for( let i of sayilar){
    console.log(i*i);
 }

 //sayılar listesindeki hangi sayı 5'in katıdır?

for(let i=0; i< sayilar.length; i++){
    if(sayilar[i]%5==0){
        console.log(sayilar[i])
    }
}

//sayılar listesindeki çift sayıların toplamını bulun.
let toplam=0;
for(let i=0; i< sayilar.length; i++){
     if(sayilar[i]%2==0){
        toplam += sayilar[i]; 
     }
 }
 console.log(toplam);


 let urunler = ["iphone 12","samsung s22","iphone 13", "samsung s23"];

//urunler listesindeki tüm ürünleri büyük harfle yazdırın

for (let i in urunler) {
  urunler[i] = urunler[i].toUpperCase();
  }
  
  console.log(urunler);

//ürünler listesinde adında samsung geçen kaç ürün vardır?
let adet = 0;
for (let urun of urunler) {
    if (urun.includes("samsung")) {
        adet ++;
}
}
console.log(adet);

let ogrenciler = [
    {"ad":"yiğit", "soyad":"bilgi", "notlar":[60,70,60]},
    {"ad":"irem", "soyad":"berber", "notlar":[80,70,80]},
    {"ad":"furkan", "soyad":"berber", "notlar":[70,70,60]},
]

//öğrenciler listesindeki her öğrencinin not ortalamasını ve başarı durumlarını yazdırın.

for(let ogrenci of ogrenciler){
    let not_toplam =0;
    let ortalama= 0;
    let adet =0;
    for(let not of ogrenci.notlar){
        not_toplam += not;
        adet++;
    }
    ortalama =not_toplam / adet;

    
        console.log(`${ogrenci.ad} ${ogrenci.ad} isimli öğrencinin not ortalaması ${ortalama}`);
        if(ortalama>=50){
            console.log("başarılı");
        } else{
            console.log("başarısız");
        }
}




